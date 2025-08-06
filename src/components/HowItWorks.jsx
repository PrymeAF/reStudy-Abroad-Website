import { Card, CardContent } from '@/components/ui/card'
import { Target, Users, CheckCircle } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Target,
      title: "Share Your Study Goals",
      description: "Tell us your dream study abroad program, whether in the USA, UK, Australia, or Europe, and your scholarship needs.",
      details: [
        "Choose your preferred destination",
        "Select your field of study",
        "Define your budget requirements",
        "Set your timeline"
      ]
    },
    {
      number: "02",
      icon: Users,
      title: "Get Matched with Expert Advisors",
      description: "We connect you with study abroad consultants in Accra or Kumasi to tailor your application strategy.",
      details: [
        "Personal advisor assignment",
        "Strategy development session",
        "Document preparation plan",
        "Timeline creation"
      ]
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Secure Your Admission & Funding",
      description: "From visa processing to scholarship applications, we guide you every step until you're accepted!",
      details: [
        "Application submissions",
        "Scholarship applications",
        "Visa processing",
        "Pre-departure support"
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 3-step process has helped over 500 students secure scholarships 
            and admissions to top universities worldwide.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <Card key={index} className="relative bg-white border-2 hover:border-primary transition-colors duration-300 hover:shadow-xl">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  
                  <CardContent className="pt-12 pb-8 px-6 text-center">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Details */}
                    <ul className="space-y-2 text-left">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Success Stats */}
        <div className="mt-20 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Students Placed</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">95%</div>
              <div className="text-primary-foreground/80">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">$2M+</div>
              <div className="text-primary-foreground/80">Scholarships Secured</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-foreground/80">Partner Universities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

