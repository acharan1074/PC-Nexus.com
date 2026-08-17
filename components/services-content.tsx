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
      description: 'Modern, high-performance, and responsive business websites, portfolios, landing pages, and content management systems.',
      features: [
        'Tailored UI/UX and unique layouts',
        'SEO optimization and semantic schema setup',
        'Lightweight build structure for fast loading speeds',
        'Built-in Content Management (headless WordPress/CMS)',
        'Full cross-browser and mobile compatibility checks',
      ],
    },
    {
      icon: Cloud,
      image: '/project_saas_analytics.jpg',
      title: 'Web Applications',
      description: 'Scalable full-stack web applications, SaaS dashboards, customer portals, and internal business platforms.',
      features: [
        'Interactive real-time data visualizations',
        'Secure multi-role authentication mechanisms',
        'RESTful & GraphQL API integrations',
        'PostgreSQL, MySQL, or MongoDB database backends',
        'Automated CI/CD pipelines & zero-downtime deploy',
      ],
    },
    {
      icon: Smartphone,
      image: '/service_mobile.jpg',
      title: 'Mobile Apps',
      description: 'Custom iOS and Android applications utilizing React Native for cross-platform efficiency and high user-satisfaction.',
      features: [
        'Biometric authentication and secure local storage',
        'Real-time push notifications and user channels',
        'App Store and Google Play Store deployment',
        'Offline capability and sync workflows',
        'Optimized media streaming and asset loading',
      ],
    },
    {
      icon: Lightbulb,
      image: '/service_ai.jpg',
      title: 'AI/ML Solutions',
      description: 'Intelligent automation, predictive machine learning forecasting models, NLP classifiers, and AI-powered chat assistants.',
      features: [
        'Custom model training (Scikit-Learn, PyTorch)',
        'FastAPI backend microservice layers',
        'Data cleaning and business intelligence integrations',
        'Intelligent chatbot helpers for customer support',
        'Computer vision and document OCR systems',
      ],
    },
    {
      icon: Target,
      image: '/service_software.jpg',
      title: 'Software Development',
      description: 'Tailor-made software systems built to automate complex company processes and eliminate manual paper workflows.',
      features: [
        'Custom CRM & ERP system development',
        'Inventory tracking & management systems',
        'Administrative dashboard automation',
        'Legacy application migration & modernization',
        'Highly audited clean codebase structure',
      ],
    },
    {
      icon: Wrench,
      image: '/service_support.jpg',
      title: 'Maintenance & Support',
      description: 'Long-term post-launch technical partnership, server updates, regular backups, security scanning, and hot-fixes.',
      features: [
        'Scheduled package audits & security patches',
        'Automated daily database backups',
        'Continuous uptime tracking & reporting',
        'Performance optimization & codebase cleaning',
        'Local Telangana customer support channels',
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
                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    {/* Dedicated CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition-colors shadow-sm text-center"
                      >
                        Start Your {service.title} Project
                      </Link>
                      <a
                        href={`https://wa.me/919705309630?text=Hi%20PC%20Nexus%20Technologies,%20I'd%20like%20to%20discuss%20a%20project%20for%20${encodeURIComponent(service.title)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 transition-colors shadow-sm inline-flex items-center justify-center gap-1.5"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.73.001-2.597-1.002-5.037-2.824-6.86C16.69 2.19 14.28 1.19 11.758 1.19c-5.437 0-9.86 4.37-9.863 9.73-.001 2.057.535 4.066 1.554 5.86l-.99 3.616 3.753-.974.19.112zM17.476 14.39c-.3-.149-1.77-.863-2.043-.961-.274-.099-.474-.149-.673.15-.2.298-.771.961-.944 1.16-.173.2-.347.225-.647.076-.3-.15-1.266-.46-2.411-1.472-.892-.787-1.493-1.76-1.667-2.06-.173-.3-.018-.462.13-.61.135-.133.3-.347.45-.52.15-.173.2-.299.3-.498.1-.2.05-.375-.025-.524-.075-.15-.673-1.602-.922-2.198-.243-.58-.49-.5-.673-.51-.173-.01-.371-.01-.57-.01-.2 0-.523.074-.797.373-.273.3-1.045 1.01-1.045 2.47 0 1.461 1.074 2.871 1.223 3.071.15.2 2.113 3.197 5.118 4.478.715.305 1.272.486 1.706.622.718.226 1.37.194 1.886.118.575-.085 1.77-.715 2.018-1.402.249-.688.249-1.277.174-1.402-.075-.124-.274-.199-.574-.349z"/>
                        </svg>
                        <span>Discuss via WhatsApp</span>
                      </a>
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
