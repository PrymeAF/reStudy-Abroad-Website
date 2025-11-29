import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'

const BlogPreview = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to UK Student Visa Requirements 2025",
      excerpt: "Everything you need to know about applying for a UK student visa, including new requirements and processing times.",
      category: "Visa Guide",
      author: "Teye Mensah",
      date: "Jan 15, 2025",
      readTime: "8 min read",
      image: "https://unsplash.com/photos/a-book-on-a-table-LPdaW746WAw",
      featured: true
    },
    {
      id: 2,
      title: "Top 10 Scholarships for African Students in 2025",
      excerpt: "Discover the best scholarship opportunities available for African students looking to study abroad.",
      category: "Scholarships",
      author: "Faustinus Ang",
      date: "Jan 12, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop&crop=center",
      featured: false
    },
    {
      id: 3,
      title: "IELTS vs TOEFL: Which Test Should You Take?",
      excerpt: "A comprehensive comparison of IELTS and TOEFL to help you choose the right English proficiency test.",
      category: "Test Prep",
      author: "Dr. Kwame Osei",
      date: "Jan 10, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop&crop=center",
      featured: false
    },
    {
      id: 4,
      title: "Success Story: From Accra to Harvard Business School",
      excerpt: "Read how Akosua secured a full scholarship to Harvard Business School and her tips for success.",
      category: "Success Stories",
      author: "Teye Mensah",
      date: "Jan 8, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400&h=250&fit=crop&crop=center",
      featured: false
    }
  ]

  const categories = [
    { name: "All Posts", count: 24, active: true },
    { name: "Scholarships", count: 8, active: false },
    { name: "Visa Guide", count: 6, active: false },
    { name: "Test Prep", count: 5, active: false },
    { name: "Success Stories", count: 5, active: false }
  ]

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Latest Insights & Guides
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay updated with the latest study abroad tips, scholarship opportunities, 
            and success stories from our community.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant={category.active ? "default" : "outline"}
              className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-white transition-colors"
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="mb-6">
              <Badge className="bg-primary mb-4">Featured</Badge>
              <h3 className="text-2xl font-bold text-gray-900">Featured Article</h3>
            </div>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
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
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 hover:text-primary transition-colors cursor-pointer">
                    {featuredPost.title}
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                    <Link to="/blog">
                      <Button>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
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

        {/* View All Posts Button */}
        <div className="text-center">
          <Link to="/blog">
            <Button size="lg" variant="outline">
              View All Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview

