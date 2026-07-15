'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  Code2,
  Smartphone,
  Cloud,
  Database,
  Zap,
  Users,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Lightbulb,
  Award,
  Zap as Lightning,
  DollarSign,
  Clock,
  MessageSquare,
  Target,
  Wrench,
} from 'lucide-react'
import { ServiceCard } from '@/components/service-card'
import { ProjectCard } from '@/components/project-card'
import { TestimonialCard } from '@/components/testimonial-card'
import { FAQAccordion } from '@/components/faq-accordion'

export default function Home() {
  const [services, setServices] = useState<any[]>([])
  const [projects, setProjects] = useState<any[]>([])
  const [testimonials, setTestimonials] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesRes, projectsRes, testimonialsRes] = await Promise.all([
          fetch('/api/services'),
          fetch('/api/projects'),
          fetch('/api/testimonials'),
        ])

        const servicesData = await servicesRes.json()
        const projectsData = await projectsRes.json()
        const testimonialsData = await testimonialsRes.json()

        setServices(Array.isArray(servicesData) ? servicesData : [])
        setProjects(Array.isArray(projectsData) ? projectsData : [])
        setTestimonials(Array.isArray(testimonialsData) ? testimonialsData : [])
      } catch (error) {
        console.error('[Homepage] Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Comprehensive Why Choose Us data with 10 reasons
  const whyChooseUs = [
    {
      icon: Users,
      title: 'Customer-First Approach',
      description: 'Your business goals are our priority. We take the time to understand your requirements and deliver solutions that truly meet your expectations.',
    },
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: 'We use modern technologies and industry best practices to build scalable, secure, and future-ready digital products.',
    },
    {
      icon: CheckCircle,
      title: 'High Quality Standards',
      description: 'Every project undergoes thorough testing to ensure excellent performance, security, and reliability.',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'We provide cost-effective solutions without compromising on quality, making professional technology accessible to businesses of all sizes.',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We follow a structured development process to deliver projects on schedule while maintaining high quality.',
    },
    {
      icon: MessageSquare,
      title: 'Transparent Communication',
      description: "You'll stay informed throughout the project with regular updates and opportunities to provide feedback at every stage.",
    },
    {
      icon: Target,
      title: 'Custom-Built Solutions',
      description: 'Every business is unique. We create software and websites tailored to your specific needs rather than relying on one-size-fits-all templates.',
    },
    {
      icon: Wrench,
      title: 'Free Consultation',
      description: "Not sure where to start? We offer free consultations to understand your goals and recommend the right solution.",
    },
    {
      icon: Shield,
      title: 'Lifetime Partnership',
      description: 'Our relationship doesn\'t end when your project goes live. We provide ongoing maintenance, updates, and technical support.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Delivered 500+ successful projects for clients globally. We have a track record of delivering results that drive business growth.',
    },
  ]

  // Comprehensive services data
  const servicesData = [
    {
      title: 'Website Development',
      description: 'Modern, responsive, secure, and SEO-friendly websites for businesses, startups, educational institutions, hospitals, and organizations.',
      icon: Code2,
      image: '/service_web.jpg',
    },
    {
      title: 'Mobile App Development',
      description: 'Custom Android and iOS applications with intuitive user experiences and scalable architecture.',
      icon: Smartphone,
      image: '/service_mobile.jpg',
    },
    {
      title: 'Custom Software Development',
      description: 'Tailor-made software solutions designed to automate business processes and solve unique business challenges.',
      icon: Target,
      image: '/service_software.jpg',
    },
    {
      title: 'AI Solutions',
      description: 'Intelligent AI-powered applications, automation, chatbots, and machine learning solutions to enhance productivity.',
      icon: Lightbulb,
      image: '/service_ai.jpg',
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, user-friendly, and modern interface designs that deliver exceptional user experiences.',
      icon: Star,
      image: '/service_design.jpg',
    },
    {
      title: 'Cloud Services',
      description: 'Cloud deployment, hosting, migration, maintenance, and scalable infrastructure solutions.',
      icon: Cloud,
      image: '/service_cloud.jpg',
    },
    {
      title: 'Digital Marketing',
      description: 'SEO, social media marketing, branding, and digital campaigns to help businesses reach more customers online.',
      icon: TrendingUp,
      image: '/service_marketing.jpg',
    },
    {
      title: 'Support & Maintenance',
      description: 'Ongoing updates, bug fixes, performance optimization, security improvements, and technical support after project delivery.',
      icon: Wrench,
      image: '/service_support.jpg',
    },
  ]

  // Development process steps
  const processSteps = [
    {
      number: '01',
      title: 'Requirement Discussion',
      description: 'We begin by understanding your business goals and project requirements through your preferred communication channel.',
    },
    {
      number: '02',
      title: 'Proposal & Quotation',
      description: 'We prepare a detailed project proposal that includes scope, features, timeline, technology stack, and cost estimation.',
    },
    {
      number: '03',
      title: 'Planning & Strategy',
      description: 'Our team plans the project architecture, user experience, development roadmap, and milestones to ensure efficient execution.',
    },
    {
      number: '04',
      title: 'UI/UX Design',
      description: 'We design modern, user-friendly, and responsive interfaces that align with your brand and provide excellent user experience.',
    },
    {
      number: '05',
      title: 'Development',
      description: 'Our developers build your solution using modern technologies while following coding standards and security best practices.',
    },
    {
      number: '06',
      title: 'Testing & QA',
      description: 'Every feature is thoroughly tested to ensure bug-free performance, security, speed, and cross-device compatibility.',
    },
    {
      number: '07',
      title: 'Launch & Deployment',
      description: 'After final approval, we deploy your website or application to a secure production environment.',
    },
    {
      number: '08',
      title: 'Support & Maintenance',
      description: 'We provide free support for a limited period, bug fixes, performance improvements, and reliable technical assistance.',
    },
  ]

  // Technologies we use grouped by category
  const groupedTechnologies = {
    Frontend: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
    Backend: ['Node.js', 'Express.js', 'Django'],
    Languages: ['TypeScript', 'JavaScript', 'Python', 'Java'],
    Database: ['PostgreSQL', 'MySQL', 'MongoDB'],
    'Cloud Services': ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'Vercel', 'Render'],
  }

  // Featured projects
  const featuredProjects = [
    {
      title: 'Online Gatepass System',
      description: 'A complete digital gatepass management solution for educational institutions with student, warden, security, and admin portals.',
      category: 'College Management System',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      tags: ['Next.js', 'PostgreSQL', 'Real-time'],
    },
    {
      title: 'Hospital Management System',
      description: 'A web-based hospital management solution for managing patient records, appointments, doctors, billing, and administrative operations.',
      category: 'Healthcare Software',
      image: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=500&h=300&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Sketch Learn Using Handwritten Digits',
      description: 'An AI-powered application that recognizes handwritten digits using machine learning techniques with intelligent image recognition.',
      category: 'AI & Machine Learning',
      image: 'https://images.unsplash.com/photo-1555949519-10b84973486d?w=500&h=300&fit=crop',
      tags: ['Python', 'TensorFlow', 'AI'],
    },
    {
      title: 'Loan Approval Prediction',
      description: 'A predictive machine learning system that analyzes applicant data and estimates loan approval outcomes.',
      category: 'Artificial Intelligence',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tags: ['Machine Learning', 'Python', 'Analytics'],
    },
    {
      title: 'Internet Service Provider Website',
      description: 'A modern, responsive corporate website with service plans, customer support, online inquiries, and business information.',
      category: 'Business Website',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
      tags: ['Next.js', 'Responsive', 'SEO'],
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and customer portal.',
      category: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1661956600684-40bab6278d21?w=500&h=300&fit=crop',
      tags: ['React', 'Stripe', 'Database'],
    },
  ]

  // FAQ items
  const faqItems = [
    {
      question: 'What services does PC Nexus Technologies offer?',
      answer:
        'We provide comprehensive software development services including website development, mobile app development, custom software, AI solutions, UI/UX design, cloud services, digital marketing, and ongoing support & maintenance.',
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Project duration varies based on complexity and scope. Small websites typically take 4-8 weeks, while larger projects may take 3-6 months. We provide detailed timelines during the proposal phase.',
    },
    {
      question: 'What is your development process?',
      answer:
        'We follow a structured 8-step process: requirement discussion, proposal & quotation, planning & strategy, UI/UX design, development, testing & QA, launch & deployment, and ongoing support & maintenance.',
    },
    {
      question: 'Do you provide post-launch support?',
      answer:
        'Yes, we provide comprehensive post-launch support including free support for a limited period, bug fixes, performance improvements, and ongoing technical assistance.',
    },
    {
      question: 'What technologies do you use?',
      answer:
        'We work with modern technologies including React, Next.js, Node.js, Express, Python, Django, PostgreSQL, MongoDB, AWS, Azure, and more. We recommend the best tech stack based on your project needs.',
    },
    {
      question: 'Can you work with our existing team?',
      answer:
        'Absolutely! We can integrate with your existing team, provide consulting, co-develop with your developers, or take full ownership of a project. We are flexible and adapt to your working style.',
    },
    {
      question: 'Do you offer free consultations?',
      answer:
        'Yes, we offer free consultations to understand your business goals and recommend the right solution tailored to your specific needs.',
    },
    {
      question: 'How do you ensure code quality and security?',
      answer:
        'We follow best practices including code reviews, automated testing, CI/CD pipelines, security audits, and compliance with industry standards to ensure production-ready, secure code.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden border-b border-gray-800 bg-slate-950">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_bg.jpg"
            alt="PC Nexus background"
            fill
            className="object-cover object-[right_top]"
            priority
          />
          {/* Dark overlay to ensure text readability on the left while keeping the right side clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
        </div>

        <div className="section-container relative z-20 w-full py-20 md:py-32">
          <div className="max-w-2xl fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Building the Future, One Solution at a Time
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              At PC Nexus Technologies, we are passionate about transforming ideas into innovative digital solutions. Our mission is to help businesses establish a strong online presence through modern websites, intelligent software, mobile applications, AI-powered solutions, and digital technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-center">
                Request a Quote
              </Link>
              <Link
                href="/services"
                className="btn-secondary text-center bg-white/10 hover:bg-white/20 border-white/20 text-white"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Services</h2>
            <p className="text-lg text-gray-600">
              We Build Digital Solutions That Drive Business Growth. End-to-end software development services to help businesses establish a strong digital presence, improve efficiency, and achieve long-term success.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12 text-gray-500">Loading services...</div>
          ) : services && services.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                <ServiceCard
                  key={idx}
                  title={service.title}
                  description={service.description}
                  image={
                    service.title.toLowerCase().includes('web') ? '/service_web.jpg' :
                    service.title.toLowerCase().includes('mobile') ? '/service_mobile.jpg' :
                    service.title.toLowerCase().includes('software') ? '/service_software.jpg' :
                    service.title.toLowerCase().includes('ai') ? '/service_ai.jpg' :
                    service.title.toLowerCase().includes('design') ? '/service_design.jpg' :
                    service.title.toLowerCase().includes('cloud') ? '/service_cloud.jpg' :
                    service.title.toLowerCase().includes('market') ? '/service_marketing.jpg' :
                    '/service_support.jpg'
                  }
                />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicesData.map((service, idx) => (
                <ServiceCard key={idx} {...service} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why Choose PC Nexus Technologies?</h2>
            <p className="text-lg text-gray-600">
              Your Trusted Technology Partner. We are committed to delivering innovative, reliable, and customer-focused software solutions that help businesses grow with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-300 card-hover"
              >
                <div className="mb-4 inline-block p-3 rounded-lg bg-blue-100">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Technologies We Use</h2>
            <p className="text-lg text-gray-600">
              Modern Technologies for Powerful Digital Solutions. We leverage industry-leading technologies to build secure, scalable, and high-performance digital products.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 rounded-2xl border border-gray-200 p-8 md:p-12 shadow-md">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(groupedTechnologies).map(([category, items]) => (
                <div key={category} className="space-y-4">
                  <h3 className="font-bold text-gray-900 text-lg border-b border-blue-100 pb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1.5 rounded-lg bg-white border border-gray-200 text-sm font-semibold text-gray-700 shadow-sm hover:border-blue-500 hover:text-blue-600 hover:shadow-md transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Development Process</h2>
            <p className="text-lg text-gray-600">
              From Idea to Success — A Simple & Transparent Process. We follow a structured development process that keeps our clients informed at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-500 transition-all text-center h-full flex flex-col card-hover">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{step.number}</div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 flex-1">{step.description}</p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:flex absolute -right-2 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="text-blue-600" size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* FAQs */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services, process, and how we can help your business.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
            <p className="text-lg text-blue-50 mb-8">
              Let us help you build a powerful digital presence. Get your free consultation today.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded-lg font-semibold text-blue-600 bg-white hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200">
              <div className="inline-block p-4 rounded-lg bg-blue-600 text-white mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:contact@pcnexus.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                contact@pcnexus.com
              </a>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200">
              <div className="inline-block p-4 rounded-lg bg-blue-600 text-white mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.418 1.02 1.614 2.347 2.653 3.355 1.036 1.004 2.318 2.169 3.319 2.565l.774-1.559a1 1 0 011.064-.551l4.43.741a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.57c-8.835 0-16-7.165-16-16V3z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:+919705309630" className="text-blue-600 hover:text-blue-700 transition-colors">
                +91 9705309630
              </a>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200">
              <div className="inline-block p-4 rounded-lg bg-blue-600 text-white mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm">"Kalwakurthy", Nagarkurnool, Telangana 509324</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
