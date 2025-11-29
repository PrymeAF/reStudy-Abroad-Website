import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, FileText, Plane, CreditCard, Users, ArrowRight, CheckCircle, Star, Clock, Globe } from 'lucide-react'

const ServicesPage = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Educational Consulting",
      description: "Personalized advice for career-aligned study roadmap, test prep (IELTS/GRE), and post-admission support.",
      features: ["Career-aligned roadmap", "Test preparation", "Post-admission support", "Funding guidance"],
      price: "From $299",
      duration: "2-4 weeks",
      popular: false
    },
    {
      icon: FileText,
      title: "Online Applications",
      description: "Apply for multiple partial/full scholarships with step-by-step error-free submissions.",
      features: ["Multiple applications", "Error-free submissions", "Deadline management", "Document review"],
      price: "From $199",
      duration: "1-3 weeks",
      popular: true
    },
    {
      icon: Plane,
      title: "Visa Applications",
      description: "Guidance on student visa requirements for USA, UK, Canada, China, and Europe.",
      features: ["Visa requirements", "Financial proofs", "Statement of Purpose", "Interview preparation"],
      price: "From $399",
      duration: "3-6 weeks",
      popular: false
    },
    {
      icon: CreditCard,
      title: "Passport Processing",
      description: "Navigate passport offices for quick turnaround and expedited applications.",
      features: ["Quick turnaround", "Expedited processing", "Document guidance", "Office navigation"],
      price: "From $99",
      duration: "1-2 weeks",
      popular: false
    },
    {
      icon: Users,
      title: "Flight Booking",
      description: "Best flight deals to your study destinations with student discounts and flexible options.",
      features: ["Best deals", "Student discounts", "Flexible booking", "Emergency support"],
      price: "Commission-based",
      duration: "Same day",
      popular: false
    },
    {
      icon: ArrowRight,
      title: "Complete Package",
      description: "Comprehensive support from application to arrival, ensuring your success every step of the way.",
      features: ["All services included", "24/7 support", "Success guarantee", "Alumni network"],
      price: "From $999",
      duration: "3-6 months",
      popular: true
    }
  ]

  const testimonials = [
    {
      name: "Bridget Asare",
      university: "University of Toronto",
      program: "Computer Science",
      quote: "ReStudy Abroad helped me secure a full scholarship to my dream university. Their guidance was invaluable!",
      rating: 5
    },
    {
      name: "Isaac Oteng",
      university: "University of Wurzburg",
      program: "MBA",
      quote: "The visa application process was seamless with their expert guidance. Highly recommended!",
      rating: 5
    },
    {
      name: "Manny Obeng",
      university: "University of Philadelphia",
      program: "Engineering",
      quote: "From application to arrival, they supported me every step of the way. Amazing service!",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive study abroad services designed to help you achieve your educational goals. 
              From initial consultation to your first day at university.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="outline" className="px-4 py-2">
                <Globe className="h-4 w-4 mr-2" />
                50+ Countries
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <GraduationCap className="h-4 w-4 mr-2" />
                500+ Universities
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <CheckCircle className="h-4 w-4 mr-2" />
                95% Success Rate
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className={`relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${service.popular ? 'border-primary border-2' : ''}`}>
                  {service.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <IconComponent className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-primary">{service.price}</span>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {service.duration}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="w-full group-hover:bg-primary group-hover:text-white">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven step-by-step approach to ensure your success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Free initial consultation to understand your goals" },
              { step: "02", title: "Planning", description: "Create a personalized roadmap for your journey" },
              { step: "03", title: "Application", description: "Submit applications and scholarship requests" },
              { step: "04", title: "Success", description: "Celebrate your acceptance and prepare for departure" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from students who achieved their dreams with our help
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.program}</p>
                    <p className="text-sm text-primary">{testimonial.university}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80">
            Book a free consultation with our expert advisors today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8">
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-primary">
              Download Service Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage

