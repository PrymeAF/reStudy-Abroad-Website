'use client';

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPublishedPosts } from '@/lib/blog'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowRight, Loader2 } from 'lucide-react'

const BlogPageNew = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPublishedPosts()
      setPosts(data)
      setLoading(false)
    }
    fetchPosts()
  }, [])

  const formatDate = (dateString) => {
    if (!dateString) return ''
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  // Estimate read time based on content length
  const getReadTime = (content) => {
    if (!content) return '2 min read'
    const words = content.split(/\s+/).length
    const minutes = Math.ceil(words / 200)
    return `${minutes} min read`
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Our Blog</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Latest Insights & Guides
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Stay updated with the latest study abroad tips, scholarship opportunities, 
              and success stories from our community.
            </p>
          </div>
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        </div>
      </div>
    )
  }

  const featuredPost = posts[0]
  const regularPosts = posts.slice(1)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Our Blog</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Latest Insights & Guides
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Stay updated with the latest study abroad tips, scholarship opportunities, 
            and success stories from our community.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && (
              <Card className="mb-12 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    {featuredPost.featured_image ? (
                      <img
                        src={featuredPost.featured_image || "/placeholder.svg"}
                        alt={featuredPost.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
                    )}
                    <Badge className="absolute top-4 left-4">Featured</Badge>
                  </div>
                  <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(featuredPost.published_at)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {getReadTime(featuredPost.content)}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-balance">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 text-pretty">
                      {featuredPost.excerpt}
                    </p>
                    <Button asChild className="w-fit">
                      <Link to={`/blog/${featuredPost.slug}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            )}

            {/* Regular Posts Grid */}
            {regularPosts.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden group">
                    <div className="relative h-48">
                      {post.featured_image ? (
                        <img
                          src={post.featured_image || "/placeholder.svg"}
                          alt={post.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50" />
                      )}
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(post.published_at)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {getReadTime(post.content)}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default BlogPageNew
