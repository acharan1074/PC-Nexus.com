'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ServiceCard } from '@/components/service-card'
import {
  Code2,
  Smartphone,
  Target,
  Lightbulb,
  Star,
  Cloud,
  TrendingUp,
  Wrench,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'

export function ServicesContent() {
  const services = [
    {
      icon: Code2,
      image: '/service_web.jpg',
      title: 'Website Development',
      description: 'Modern, responsive, secure, and SEO-friendly websites for businesses, startups, educational institutions, hospitals, and organizations.',
      features: [
        'Responsive design for all devices',
        'SEO optimization for search engines',
        'Fast loading speeds and performance',
        'Secure and scalable architecture',
        'Content management systems',
      ],
    },
    {
      icon: Smartphone,
      image: '/service_mobile.jpg',
      title: 'Mobile App Development',
      description: 'Custom Android and iOS applications with intuitive user experiences and scalable architecture.',
      features: [
        'Native iOS & Android development',
        'Cross-platform solutions with React Native',
        'App store deployment and optimization',
        'Real-time features and notifications',
        'User-friendly interface design',
      ],
    },
    {
      icon: Target,
      image: '/service_software.jpg',
      title: 'Custom Software Development',
      description: 'Tailor-made software solutions designed to automate business processes and solve unique business challenges.',
      features: [
        'Business process automation',
        'Enterprise software solutions',
        'Custom integrations',
        'Scalable architecture design',
        'Legacy system modernization',
      ],
    },
    {
      icon: Lightbulb,
      image: '/service_ai.jpg',
      title: 'AI Solutions',
      description: 'Intelligent AI-powered applications, automation, chatbots, and machine learning solutions to enhance productivity.',
      features: [
        'Machine learning model development',
        'AI-powered chatbots and automation',
        'Predictive analytics solutions',
        'Natural language processing',
        'Computer vision applications',
      ],
    },
    {
      icon: Star,
      image: '/service_design.jpg',
      title: 'UI/UX Design',
      description: 'Beautiful, user-friendly, and modern interface designs that deliver exceptional user experiences.',
      features: [
        'User research and testing',
        'Wireframing and prototyping',
        'Interactive design mockups',
        'Brand identity development',
        'Usability optimization',
      ],
    },
    {
      icon: Cloud,
      image: '/service_cloud.jpg',
      title: 'Cloud Services',
      description: 'Cloud deployment, hosting, migration, maintenance, and scalable infrastructure solutions.',
      features: [
        'AWS and Azure cloud services',
        'Cloud migration and deployment',
        'Infrastructure as Code (IaC)',
        'Database management and optimization',
        'Security and compliance solutions',
      ],
    },
    {
      icon: TrendingUp,
      image: '/service_marketing.jpg',
      title: 'Digital Marketing',
      description: 'SEO, social media marketing, branding, and digital campaigns to help businesses reach more customers online.',
      features: [
        'Search engine optimization (SEO)',
        'Social media marketing strategies',
        'Content marketing and creation',
        'Paid advertising campaigns',
        'Analytics and performance tracking',
      ],
    },
    {
      icon: Wrench,
      image: '/service_support.jpg',
      title: 'Support & Maintenance',
      description: 'Ongoing updates, bug fixes, performance optimization, security improvements, and technical support after project delivery.',
      features: [
        'Regular maintenance and updates',
        'Bug fixes and performance tuning',
        'Security patches and improvements',
        '24/7 technical support',
        'Backup and disaster recovery',
      ],
    },
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Consultation',
      description: 'We start by understanding your business, goals, and specific needs through detailed consultations.',
    },
    {
      number: '02',
      title: 'Planning & Strategy',
      description: 'Our team creates a detailed roadmap with clear timelines, milestones, and deliverables.',
    },
    {
      number: '03',
      title: 'Design & Prototyping',
      description: 'We design intuitive interfaces and create prototypes for your approval and feedback.',
    },
    {
      number: '04',
      title: 'Development',
      description: 'Our developers build your solution using best practices and modern technologies.',
    },
    {
      number: '05',
      title: 'Testing & QA',
      description: 'Rigorous testing ensures quality, security, performance, and reliability.',
    },
    {
      number: '06',
      title: 'Deployment',
      description: 'We deploy your solution to production with minimal downtime and maximum reliability.',
    },
    {
      number: '07',
      title: 'Support & Maintenance',
      description: 'We provide ongoing support, updates, and maintenance to keep your system running smoothly.',
    },
  ]

  const whyChooseOurServices = [
    {
      title: 'End-to-End Solutions',
      description: 'From concept to deployment, we handle everything you need for your digital success.',
    },
    {
      title: 'Expert Team',
      description: 'Our experienced developers, designers, and architects have delivered 500+ projects successfully.',
    },
    {
      title: 'Custom Approach',
      description: 'Every solution is tailored to your specific needs, not one-size-fits-all templates.',
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality standards ensure production-ready code every time.',
    },
    {
      title: 'Transparent Communication',
      description: 'Regular updates and open communication keep you informed throughout the project.',
    },
    {
      title: 'Long-term Partnership',
      description: 'We provide ongoing support and maintenance to help your business grow continuously.',
    },
  ]

  return (
    <>
      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">What We Offer</h2>
            <p className="text-lg text-gray-600">
              Comprehensive services designed to meet all your software development and digital transformation needs.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    {service.image ? (
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-gray-150 shadow-sm">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="p-4 rounded-lg bg-blue-100">
                        <service.icon className="w-8 h-8 text-blue-600" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why Choose Our Services</h2>
            <p className="text-lg text-gray-600">
              We deliver more than just code. We deliver solutions that drive real business value and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseOurServices.map((item, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200 shadow-sm hover:shadow-lg transition-all card-hover">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Service Delivery Process</h2>
            <p className="text-lg text-gray-600">
              We follow a structured approach to ensure successful delivery of every project.
            </p>
          </div>

          <div className="grid md:grid-cols-7 gap-3">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-500 transition-all text-center h-full flex flex-col card-hover">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{step.number}</div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-600 flex-1">{step.description}</p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:flex absolute -right-1.5 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="text-blue-600" size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-lg text-blue-50 mb-8">
              Let's discuss which services are right for your business and create a custom solution plan.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded-lg font-semibold text-blue-600 bg-white hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
