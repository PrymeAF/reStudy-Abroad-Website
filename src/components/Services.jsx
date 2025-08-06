import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GraduationCap, FileText, Plane, CreditCard, Users, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Educational Consulting",
      description: "Personalized advice for career-aligned study roadmap, test prep (IELTS/GRE), and post-admission support.",
      features: ["Career-aligned roadmap", "Test preparation", "Post-admission support", "Funding guidance"]
    },
    {
      icon: FileText,
      title: "Online Applications",
      description: "Apply for multiple partial/full scholarships with step-by-step error-free submissions.",
      features: ["Multiple applications", "Error-free submissions", "Deadline management", "Document review"]
    },
    {
      icon: Plane,
      title: "Visa Applications",
      description: "Guidance on student visa requirements for USA, UK, Canada, China, and Europe.",
      features: ["Visa requirements", "Financial proofs", "Statement of Purpose", "Interview preparation"]
    },
    {
      icon: CreditCard,
      title: "Passport Processing",
      description: "Navigate passport offices for quick turnaround and expedited applications.",
      features: ["Quick turnaround", "Expedited processing", "Document guidance", "Office navigation"]
    },
    {
      icon: Users,
      title: "Flight Booking",
      description: "Best flight deals to your study destinations with student discounts and flexible options.",
      features: ["Best deals", "Student discounts", "Flexible booking", "Emergency support"]
    },
    {
      icon: ArrowRight,
      title: "End-to-End Support",
      description: "Comprehensive support from application to arrival, ensuring your success every step of the way.",
      features: ["Complete guidance", "24/7 support", "Success tracking", "Alumni network"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to your first day at university, we provide complete support 
            for your study abroad journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
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
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a free consultation with our expert advisors and discover the best 
              scholarship opportunities for your career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Download Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

