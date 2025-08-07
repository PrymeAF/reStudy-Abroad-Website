import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Target, Award, Globe, ArrowRight, CheckCircle, Heart, Lightbulb } from 'lucide-react'

const AboutPage = () => {
  const stats = [
    { number: "500+", label: "Students Placed", icon: Users },
    { number: "95%", label: "Success Rate", icon: Target },
    { number: "$2M+", label: "Scholarships Secured", icon: Award },
    { number: "50+", label: "Partner Universities", icon: Globe }
  ]

  const values = [
    {
      icon: Heart,
      title: "Student-Centered",
      description: "Every decision we make is focused on what's best for our students' success and future."
    },
    {
      icon: CheckCircle,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from consultation to final placement."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously improve our processes and embrace new technologies to serve you better."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We understand the global education landscape and help you navigate it successfully."
    }
  ]

  const team = [
    {
      name: "Dr. Kwame Osei",
      role: "Founder & CEO",
      education: "PhD in Education, Harvard University",
      experience: "15+ years in international education",
      bio: "Former admissions officer at top universities, passionate about making global education accessible."
    },
    {
      name: "Sarah Johnson",
      role: "Head of Student Services",
      education: "MSc International Relations, Oxford University",
      experience: "10+ years in student counseling",
      bio: "Specializes in scholarship applications and has helped secure over $1M in funding for students."
    },
    {
      name: "Michael Asante",
      role: "Visa & Immigration Specialist",
      education: "LLM Immigration Law, University of Toronto",
      experience: "8+ years in immigration law",
      bio: "Expert in student visa applications with a 98% approval rate across all destinations."
    }
  ]

  const timeline = [
    {
      year: "2018",
      title: "Founded",
      description: "ReStudy Abroad was founded with a mission to democratize access to global education."
    },
    {
      year: "2019",
      title: "First 100 Students",
      description: "Successfully placed our first 100 students in universities across the USA, UK, and Canada."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched our digital platform to provide seamless online services during the pandemic."
    },
    {
      year: "2021",
      title: "Expansion",
      description: "Expanded services to include Australia and European universities."
    },
    {
      year: "2022",
      title: "Partnership Growth",
      description: "Established partnerships with 50+ universities worldwide."
    },
    {
      year: "2023",
      title: "$2M Milestone",
      description: "Helped students secure over $2 million in scholarships and funding."
    },
    {
      year: "2024",
      title: "500+ Success Stories",
      description: "Celebrated placing our 500th student in their dream university."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-primary">ReStudy Abroad</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We are passionate about empowering ambitious professionals to achieve their educational dreams 
              and advance their careers through global education opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To democratize access to world-class education by providing comprehensive support, 
                expert guidance, and personalized solutions that help students secure scholarships 
                and admissions to top universities globally.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that financial constraints should never be a barrier to quality education. 
                That's why we specialize in helping students find and secure funding opportunities 
                that make their dreams achievable.
              </p>
              <Button size="lg">
                Learn About Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                To be the leading study abroad consultancy in Africa, known for our integrity, 
                excellence, and commitment to student success.
              </p>
              <div className="space-y-4">
                {["Accessible Education", "Global Opportunities", "Student Success", "Innovation"].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to student success
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                  <p className="text-primary text-center mb-4">{member.role}</p>
                  <div className="space-y-2 mb-4">
                    <Badge variant="outline" className="w-full justify-center">
                      {member.education}
                    </Badge>
                    <Badge variant="outline" className="w-full justify-center">
                      {member.experience}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm text-center">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Milestones that shaped our story
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80">
            Let us help you achieve your educational dreams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

