import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, User, Search, ArrowRight, Filter, BookOpen } from 'lucide-react'

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Posts')

  const categories = [
    { name: "All Posts", count: 24 },
    { name: "Scholarships", count: 8 },
    { name: "Visa Guide", count: 6 },
    { name: "Test Prep", count: 5 },
    { name: "Success Stories", count: 5 },
    { name: "University Guides", count: 4 },
    { name: "Application Tips", count: 3 }
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to UK Student Visa Requirements 2025",
      excerpt: "Everything you need to know about applying for a UK student visa, including new requirements, processing times, and essential documents.",
      category: "Visa Guide",
      author: "Teye Menssah",
      date: "Jan 15, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1655722725332-9925c96dd627?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: true,
      tags: ["UK", "Visa", "Student", "2025"]
    },
    {
      id: 2,
      title: "Top 10 Scholarships for African Students in 2025",
      excerpt: "Discover the best scholarship opportunities available for African students looking to study abroad, including application deadlines and requirements.",
      category: "Scholarships",
      author: "Faustinus Ang",
      date: "Jan 12, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1588412770640-ad1892f1c3e5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: false,
      tags: ["Scholarships", "Africa", "Funding"]
    },
    {
      id: 3,
      title: "IELTS vs TOEFL: Which Test Should You Take?",
      excerpt: "A comprehensive comparison of IELTS and TOEFL to help you choose the right English proficiency test for your study abroad goals.",
      category: "Test Prep",
      author: "Dr. Kwame Osei",
      date: "Jan 10, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: false,
      tags: ["IELTS", "TOEFL", "English", "Test Prep"]
    },
    {
      id: 4,
      title: "Success Story: From Accra to Harvard Business School",
      excerpt: "Read how Akosua secured a full scholarship to Harvard Business School and her tips for success in the application process.",
      category: "Success Stories",
      author: "Teye Mensah",
      date: "Jan 8, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1507537509458-b8312d35a233?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: false,
      tags: ["Harvard", "MBA", "Success Story", "Ghana"]
    },
    {
      id: 5,
      title: "How to Write a Compelling Personal Statement",
      excerpt: "Learn the art of crafting a personal statement that stands out to admissions committees and showcases your unique story.",
      category: "Application Tips",
      author: "Sarah Johnson",
      date: "Jan 5, 2025",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/3059749/pexels-photo-3059749.jpeg",
      featured: false,
      tags: ["Personal Statement", "Applications", "Writing"]
    },
    {
      id: 6,
      title: "Study in Canada: Complete Guide for 2025",
      excerpt: "Everything you need to know about studying in Canada, from choosing universities to visa applications and living costs.",
      category: "University Guides",
      author: "Michael Asante",
      date: "Jan 3, 2025",
      readTime: "12 min read",
      image: "https://images.pexels.com/photos/7144408/pexels-photo-7144408.jpeg",
      featured: false,
      tags: ["Canada", "Study Abroad", "Universities"]
    },
    {
      id: 7,
      title: "Preparing for Your Study Abroad Interview",
      excerpt: "Essential tips and common questions to help you ace your university admission or scholarship interview.",
      category: "Application Tips",
      author: "Dr. Kwame Osei",
      date: "Dec 28, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/1181712/pexels-photo-1181712.jpeg",
      featured: false,
      tags: ["Interview", "Preparation", "Tips"]
    },
    {
      id: 8,
      title: "Understanding Student Loan Options for International Students",
      excerpt: "Navigate the complex world of student loans and financing options available for international students.",
      category: "Scholarships",
      author: "Sarah Johnson",
      date: "Dec 25, 2024",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/5922543/pexels-photo-5922543.jpeg",
      featured: false,
      tags: ["Student Loans", "Financing", "International"]
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Study Abroad <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your comprehensive resource for study abroad tips, scholarship opportunities, 
              visa guides, and inspiring success stories from students worldwide.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={selectedCategory === category.name ? "default" : "outline"}
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-white transition-colors"
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All Posts' && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Article</h2>
            </div>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <Badge variant="outline">{featuredPost.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-primary transition-colors cursor-pointer">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                    <Button>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'All Posts' ? 'Latest Articles' : selectedCategory}
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Filter className="h-4 w-4" />
              {filteredPosts.length} articles found
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or category filter.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4" variant="outline">
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Stay Updated with Our Latest Articles
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80">
            Get the latest study abroad tips, scholarship opportunities, and success stories 
            delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white text-gray-900 border-0 flex-1"
              />
              <Button variant="secondary" className="px-6">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-primary-foreground/60 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage

