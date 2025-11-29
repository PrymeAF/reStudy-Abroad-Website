import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // You would typically send this data to your backend
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Offices",
      details: [
        "Accra Office: East Legon, Accra, Ghana",
        "Kumasi Office: Adum, Kumasi, Ghana"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Accra: +233 54 542 2515",
        "Kumasi: +233 20 854 4704",
        "WhatsApp: +233 54 542 2515"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "General: info@restudyabroad.com",
        "Admissions: admissions@restudyabroad.com",
        "Support: support@restudyabroad.com"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed"
      ]
    }
  ]

  const services = [
    "Educational Consulting",
    "Scholarship Applications",
    "Visa Processing",
    "Test Preparation",
    "University Applications",
    "Document Preparation",
    "Interview Coaching",
    "Other"
  ]

  const faqs = [
    {
      question: "How long does the application process take?",
      answer: "The timeline varies depending on the service and destination. Typically, university applications take 2-4 months, while visa processing takes 3-6 weeks."
    },
    {
      question: "Do you guarantee admission or visa approval?",
      answer: "While we cannot guarantee outcomes, we have a 95% success rate. We work closely with you to maximize your chances of success."
    },
    {
      question: "What are your service fees?",
      answer: "Our fees vary by service. We offer transparent pricing with no hidden costs. Contact us for a detailed quote based on your needs."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment plans to make our services accessible. We can discuss options during your consultation."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to start your study abroad journey? Get in touch with our expert advisors 
              for personalized guidance and support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2">
                <MessageCircle className="h-4 w-4 mr-2" />
                Free Consultation
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <CheckCircle className="h-4 w-4 mr-2" />
                Expert Guidance
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                Quick Response
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+233 XX XXX XXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Service of Interest
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What can we help you with?"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your study abroad goals, preferred destinations, and any specific questions you have..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-gray-600">{detail}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}

              {/* Quick Contact */}
              <Card className="bg-gradient-to-br from-primary to-accent text-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Need Immediate Help?</h3>
                  <p className="mb-4 text-primary-foreground/80">
                    For urgent inquiries, call us directly or send a WhatsApp message.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="secondary" size="sm" className="flex-1">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 border-white text-white hover:bg-white hover:text-primary">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-primary">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see your question answered?
            </p>
            <Button variant="outline">
              View All FAQs
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Offices
            </h2>
            <p className="text-xl text-gray-600">
              We have offices in Accra and Kumasi to serve you better
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Accra Office</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">East Legon, Accra, Ghana</p>
                  <p className="text-gray-600">Phone: +233 XX XXX XXXX</p>
                  <p className="text-gray-600">Email: accra@restudyabroad.com</p>
                </div>
                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Map placeholder - Accra Office</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Kumasi Office</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">Adum, Kumasi, Ghana</p>
                  <p className="text-gray-600">Phone: +233 XX XXX XXXX</p>
                  <p className="text-gray-600">Email: kumasi@restudyabroad.com</p>
                </div>
                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Map placeholder - Kumasi Office</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

