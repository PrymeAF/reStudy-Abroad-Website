import { supabase } from './supabase'

// Generate slug from title
export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// Fetch all published posts (for public pages)
export async function getPublishedPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error fetching posts:', error)
    return []
  }
  return data
}

// Fetch all posts (for admin)
export async function getAllPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching posts:', error)
    return []
  }
  return data
}

// Fetch single post by slug (for public)
export async function getPostBySlug(slug) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (error) {
    console.error('Error fetching post:', error)
    return null
  }
  return data
}

// Fetch single post by ID (for admin editing)
export async function getPostById(id) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching post:', error)
    return null
  }
  return data
}

// Create new post
export async function createPost(postData) {
  const slug = generateSlug(postData.title)
  
  const { data, error } = await supabase
    .from('blog_posts')
    .insert({
      title: postData.title,
      slug,
      content: postData.content,
      excerpt: postData.excerpt,
      featured_image: postData.featured_image,
      status: postData.status,
      published_at: postData.status === 'published' ? new Date().toISOString() : null,
    })
    .select()
    .single()

  if (error) {
    console.error('Error creating post:', error)
    return { data: null, error }
  }
  return { data, error: null }
}

// Update existing post
export async function updatePost(id, postData) {
  const slug = generateSlug(postData.title)
  
  // Get existing post to check if status is changing to published
  const existingPost = await getPostById(id)
  const isNewlyPublished = existingPost?.status !== 'published' && postData.status === 'published'

  const { data, error } = await supabase
    .from('blog_posts')
    .update({
      title: postData.title,
      slug,
      content: postData.content,
      excerpt: postData.excerpt,
      featured_image: postData.featured_image,
      status: postData.status,
      published_at: isNewlyPublished ? new Date().toISOString() : existingPost?.published_at,
    })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating post:', error)
    return { data: null, error }
  }
  return { data, error: null }
}

// Delete post
export async function deletePost(id) {
  const { error } = await supabase
    .from('blog_posts')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting post:', error)
    return { error }
  }
  return { error: null }
}

// Upload image to Supabase Storage
export async function uploadImage(file) {
  const fileExt = file.name.split('.').pop()
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
  const filePath = `blog-images/${fileName}`

  const { data, error } = await supabase.storage
    .from('blog-images')
    .upload(filePath, file)

  if (error) {
    console.error('Error uploading image:', error)
    return { url: null, error }
  }

  const { data: { publicUrl } } = supabase.storage
    .from('blog-images')
    .getPublicUrl(filePath)

  return { url: publicUrl, error: null }
}
