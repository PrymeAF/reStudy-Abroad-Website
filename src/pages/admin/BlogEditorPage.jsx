'use client';

import { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { getPostById, createPost, updatePost, uploadImage } from '@/lib/blog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ArrowLeft, Save, Loader2, Upload, X, ImageIcon } from 'lucide-react'

const BlogEditorPage = () => {
  const { id } = useParams()
  const isEditing = !!id
  const navigate = useNavigate()
  const fileInputRef = useRef(null)

  const [loading, setLoading] = useState(isEditing)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    featured_image: '',
    status: 'draft',
  })

  useEffect(() => {
    if (isEditing) {
      fetchPost()
    }
  }, [id])

  const fetchPost = async () => {
    const post = await getPostById(id)
    if (post) {
      setFormData({
        title: post.title || '',
        excerpt: post.excerpt || '',
        content: post.content || '',
        featured_image: post.featured_image || '',
        status: post.status || 'draft',
      })
    }
    setLoading(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleStatusChange = (value) => {
    setFormData((prev) => ({ ...prev, status: value }))
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError('')

    const { url, error } = await uploadImage(file)

    if (error) {
      setError('Failed to upload image. Make sure the blog-images storage bucket exists.')
      setUploading(false)
      return
    }

    setFormData((prev) => ({ ...prev, featured_image: url }))
    setUploading(false)
  }

  const removeImage = () => {
    setFormData((prev) => ({ ...prev, featured_image: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!formData.title.trim()) {
      setError('Title is required')
      return
    }

    setSaving(true)

    const { error } = isEditing
      ? await updatePost(id, formData)
      : await createPost(formData)

    if (error) {
      setError(error.message || 'Failed to save post')
      setSaving(false)
      return
    }

    navigate('/admin/blog')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/admin/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-bold">
                {isEditing ? 'Edit Post' : 'New Post'}
              </h1>
            </div>
          </div>
          <Button onClick={handleSubmit} disabled={saving}>
            {saving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Post
              </>
            )}
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 text-sm text-destructive bg-destructive/10 rounded-lg">
              {error}
            </div>
          )}

          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter post title"
              className="text-lg"
            />
          </div>

          {/* Excerpt */}
          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              placeholder="Brief description of the post"
              rows={2}
            />
          </div>

          {/* Featured Image */}
          <div className="space-y-2">
            <Label>Featured Image</Label>
            {formData.featured_image ? (
              <div className="relative rounded-lg overflow-hidden border">
                <img
                  src={formData.featured_image || "/placeholder.svg"}
                  alt="Featured"
                  className="w-full h-64 object-cover"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={removeImage}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
              >
                {uploading ? (
                  <div className="flex flex-col items-center gap-2">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Uploading...</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <ImageIcon className="h-8 w-8 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Click to upload featured image
                    </span>
                  </div>
                )}
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          {/* Content */}
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Write your blog post content here..."
              rows={15}
              className="font-mono text-sm"
            />
            <p className="text-xs text-muted-foreground">
              You can use HTML for formatting (e.g., &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;strong&gt;)
            </p>
          </div>

          {/* Status */}
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select value={formData.status} onValueChange={handleStatusChange}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
      </main>
    </div>
  )
}

export default BlogEditorPage
