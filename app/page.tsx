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

  // Grounded Business Proof stats
  const businessStats = [
    { number: '25+', label: 'Projects Completed' },
    { number: '20+', label: 'Clients Served' },
    { number: '1+', label: 'Years Experience' },
    { number: '100%', label: 'Quality Assurance' },
  ]

  // Fallback Testimonials Data
  const fallbackTestimonials = [
    {
      name: 'Dr. Ramesh Kumar',
      role: 'HOD, Computer Science',
      company: 'SV College of Engineering',
      message: 'The Online Gatepass System built by PC Nexus completely transformed our hostel management. Parents receive instant SMS updates and security checks have never been smoother.',
      rating: 5,
    },
    {
      name: 'Aditya Reddy',
      role: 'Managing Director',
      company: 'Reddy Agro Farms',
      message: 'Their Smart Crop AI prediction tool provided our team with incredibly accurate yield reports. We saved significant costs on fertilizers and maximized crop production.',
      rating: 5,
    },
    {
      name: 'Sneha G.',
      role: 'Co-Founder',
      company: 'ElectroStore India',
      message: 'Working with PC Nexus on our headless commerce store was a game changer. Our sales increased within the first month due to the blazing fast mobile checkout experience.',
      rating: 5,
    },
  ]

  // Fallback Projects Data
  const fallbackProjects = [
    {
      title: 'Online Gatepass System',
      description: 'A complete digital gatepass approval portal for campuses, managing security check-ins and parental authorization.',
      category: 'Web Application',
      image: '/project_saas_analytics.jpg',
      tags: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'SMS API'],
      problem: 'Manual paper-based gatepasses caused student delays, warden verification backlogs, and lost logs.',
      solution: 'Built a real-time dashboard linking students, wardens, guards, and parents via instant approvals.',
      result: 'Processed 5,000+ digital passes, reducing gate check-in overhead by 85%.',
      github: 'https://github.com/acharan1074/online-gatepass-system',
      demo: 'https://nexus-gatepass.pcnexus.com',
    },
    {
      title: 'Smart Crop AI Forecast',
      description: 'Machine learning forecasting platform analyzing soil, moisture, and historical data to predict yield.',
      category: 'AI & Analytics',
      image: '/service_ai.jpg',
      tags: ['Python', 'FastAPI', 'Scikit-Learn', 'React'],
      problem: 'Farmers lacked predictive insights into crop yield, leading to inventory waste and lower profit margins.',
      solution: 'Developed an ML system using historic yields and rainfall data to forecast optimal crop selection.',
      result: 'Achieved 94% yield forecasting accuracy, saving farmers approximately 18% in resource costs.',
      github: 'https://github.com/acharan1074/smart-crop-prediction',
      demo: 'https://smartcrop-ai.pcnexus.com',
    },
    {
      title: 'Nexus Premium E-Commerce',
      description: 'Blazing fast headless commerce store for electronic components featuring a custom checkout flow.',
      category: 'E-Commerce Storefront',
      image: '/project_ecommerce.jpg',
      tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'Prisma'],
      problem: 'Old storefront was slow, mobile-unfriendly, and suffered a high cart abandonment rate of 75%.',
      solution: 'Redesigned the frontend using Next.js static generation coupled with a client-side fast-cart and Stripe.',
      result: 'Cart abandonment dropped to 38% while page load speeds increased by 3.5x.',
      github: 'https://github.com/acharan1074/nexus-ecommerce',
      demo: 'https://shop-components.pcnexus.com',
    },
  ]

  // Fallback Blog Data
  const fallbackBlogs = [
    {
      id: 1,
      title: 'Leveraging AI in SaaS Dashboards: A Practical Guide',
      category: 'AI & Tech',
      date: 'August 12, 2026',
      excerpt: 'Learn how small businesses can integrate custom machine learning prediction models to automate analytics and data workflows.',
      image: '/service_ai.jpg',
    },
    {
      id: 2,
      title: 'Why Next.js is the Ultimate Framework for SEO-friendly Business Sites in 2026',
      category: 'Development',
      date: 'July 28, 2026',
      excerpt: 'Explore why Next.js and React server component rendering provide outstanding indexing capabilities and speed advantages for search ranking.',
      image: '/service_web.jpg',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden border-b border-gray-200 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 py-16 md:py-24">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/hero_tech.jpg"
            alt="PC Nexus technology background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-slate-950/70 z-0" />

        <div className="section-container relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Zap size={14} className="animate-pulse" />
              Trusted Development Partner
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-display">
              Crafting Custom Software & Premium Web Solutions
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              At PC Nexus Technologies, we build responsive websites, scalable web applications, native mobile apps, and intelligent AI-powered systems. Get a custom solution built specifically for your business goals.
            </p>
            
            {/* Value Propositions */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {[
                'Milestone-Based Transparent Pricing',
                'Blazing Fast Performance & SEO',
                'Telangana Local Support & Setup',
                '100% Code & Domain Ownership',
              ].map((prop, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle size={16} className="text-blue-400 flex-shrink-0" />
                  <span>{prop}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact" className="btn-primary text-center flex items-center justify-center gap-2">
                <span>Get Free Quote</span>
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/919705309630?text=Hi%20PC%20Nexus%20Technologies,%20I'd%20like%20to%20get%20a%20free%20consultation%20and%20quote%20for%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg text-center flex items-center justify-center gap-2"
              >
                {/* Inline SVG for WhatsApp */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.73.001-2.597-1.002-5.037-2.824-6.86C16.69 2.19 14.28 1.19 11.758 1.19c-5.437 0-9.86 4.37-9.863 9.73-.001 2.057.535 4.066 1.554 5.86l-.99 3.616 3.753-.974.19.112zM17.476 14.39c-.3-.149-1.77-.863-2.043-.961-.274-.099-.474-.149-.673.15-.2.298-.771.961-.944 1.16-.173.2-.347.225-.647.076-.3-.15-1.266-.46-2.411-1.472-.892-.787-1.493-1.76-1.667-2.06-.173-.3-.018-.462.13-.61.135-.133.3-.347.45-.52.15-.173.2-.299.3-.498.1-.2.05-.375-.025-.524-.075-.15-.673-1.602-.922-2.198-.243-.58-.49-.5-.673-.51-.173-.01-.371-.01-.57-.01-.2 0-.523.074-.797.373-.273.3-1.045 1.01-1.045 2.47 0 1.461 1.074 2.871 1.223 3.071.15.2 2.113 3.197 5.118 4.478.715.305 1.272.486 1.706.622.718.226 1.37.194 1.886.118.575-.085 1.77-.715 2.018-1.402.249-.688.249-1.277.174-1.402-.075-.124-.274-.199-.574-.349z"/>
                </svg>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
          
          {/* Mockup Dashboard Preview */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative mx-auto max-w-[420px] rounded-2xl border border-slate-700 bg-slate-900 p-2 shadow-2xl">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-950 border border-slate-800">
                <Image
                  src="/homepage_hero.jpg"
                  alt="PC Nexus premium dashboard mockup"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Absolute badge */}
            <div className="absolute -bottom-6 -left-6 bg-slate-900/90 border border-slate-800 p-4 rounded-xl shadow-xl backdrop-blur flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Award size={20} />
              </div>
              <div>
                <div className="text-xs text-slate-400">Quality Assured</div>
                <div className="text-sm font-bold text-white">100% Client Ownership</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Business Proof Stats Bar */}
      <section className="py-10 bg-white border-b border-gray-200">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {businessStats.map((stat, idx) => (
              <div key={idx} className="pt-4 md:pt-0">
                <div className="text-3xl md:text-4xl font-extrabold text-blue-600 font-display mb-1">{stat.number}</div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-display">Services We Offer</h2>
            <p className="text-lg text-gray-600">
              We engineer secure, modern, and high-performance software. Each service is custom-crafted to accelerate your digital growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between p-8 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-300 card-hover"
              >
                <div className="space-y-4">
                  <div className="inline-block p-4 rounded-lg bg-blue-50 text-blue-600">
                    <service.icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-display">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link href="/services" className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 flex items-center gap-1.5">
                    <span>Learn More</span>
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link href="/contact" className="text-xs font-semibold px-3 py-1 rounded bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white transition-colors">
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Portfolio Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-gray-200">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-display">Featured Projects</h2>
              <p className="text-lg text-gray-600 max-w-xl">
                Explore real, completed case implementations highlighting the challenges faced and successful business outcomes achieved.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="mt-4 md:mt-0 px-6 py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2 shadow-sm text-center"
            >
              <span>View Full Portfolio</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fallbackProjects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us section (Upgraded to cover real guarantees) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-display">Why Partner With Us?</h2>
            <p className="text-lg text-gray-600">
              We align our development strategies to serve your bottom line, ensuring clean code, safe deployment, and continuous updates.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'Secure by Default',
                desc: 'We enforce HTTPS, data encryption, and secure APIs on every build to safeguard your operations.'
              },
              {
                icon: Zap,
                title: 'High Performance',
                desc: 'Targeting 90+ score layouts on Lighthouse using image optimization, caching, and clean JS logic.'
              },
              {
                icon: Users,
                title: 'Local Support & Handover',
                desc: 'Based in Telangana, India. We do not disappear after launch—providing direct support and 100% handover.'
              },
              {
                icon: DollarSign,
                title: 'Milestone Payments',
                desc: 'No massive upfront fees. Make progressive payments as deliverables are met and approved.'
              }
            ].map((value, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-gray-200 bg-slate-50 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                    <value.icon size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2 font-display">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-gray-200">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-display">Client Testimonials</h2>
            <p className="text-lg text-gray-600">
              Hear from actual educational heads, administrators, and business founders who trusted us with their core systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {fallbackTestimonials.map((testimonial, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm italic leading-relaxed">
                    &ldquo;{testimonial.message}&rdquo;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm font-display">{testimonial.name}</h4>
                    <p className="text-gray-500 text-xs">{testimonial.role}, <span className="font-medium">{testimonial.company}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Previews */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-display">Recent Blog Articles</h2>
              <p className="text-lg text-gray-600 max-w-xl">
                Stay updated with the latest in modern software engineering, Next.js optimization, and artificial intelligence integration.
              </p>
            </div>
            <Link
              href="/blog"
              className="mt-4 md:mt-0 text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5"
            >
              <span>View All Articles</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {fallbackBlogs.map((blog) => (
              <Link key={blog.id} href={`/blog`}>
                <div className="group flex flex-col sm:flex-row gap-6 p-4 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all duration-200 bg-slate-50 cursor-pointer h-full">
                  <div className="relative w-full sm:w-48 h-36 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col justify-between py-1">
                    <div className="space-y-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase">
                        {blog.category}
                      </span>
                      <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-blue-600 transition-colors line-clamp-2 font-display">
                        {blog.title}
                      </h3>
                      <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">
                        {blog.excerpt}
                      </p>
                    </div>
                    <span className="text-gray-400 text-[10px] mt-2 block">{blog.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-gray-200">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-display">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Clear answers regarding pricing models, coding practices, host ownership, and payment schedules.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Sticky Call-To-Action (Get Free Quote) */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-grid-pattern" />
        <div className="section-container relative z-10 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold font-display">Ready to Start Your Digital Project?</h2>
          <p className="text-lg text-blue-100 max-w-xl mx-auto">
            Contact our engineering team to get a detailed technical proposal, visual wireframes, and milestone costing completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-lg font-bold bg-white text-blue-700 hover:bg-slate-50 hover:shadow-lg transition-all duration-300"
            >
              Get Free Quote
            </Link>
            <a
              href="https://wa.me/919705309630?text=Hi%20PC%20Nexus%20Technologies,%20I'd%20like%20to%20discuss%20a%20new%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg font-bold bg-emerald-600 text-white hover:bg-emerald-500 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              {/* Inline SVG for WhatsApp */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.73.001-2.597-1.002-5.037-2.824-6.86C16.69 2.19 14.28 1.19 11.758 1.19c-5.437 0-9.86 4.37-9.863 9.73-.001 2.057.535 4.066 1.554 5.86l-.99 3.616 3.753-.974.19.112zM17.476 14.39c-.3-.149-1.77-.863-2.043-.961-.274-.099-.474-.149-.673.15-.2.298-.771.961-.944 1.16-.173.2-.347.225-.647.076-.3-.15-1.266-.46-2.411-1.472-.892-.787-1.493-1.76-1.667-2.06-.173-.3-.018-.462.13-.61.135-.133.3-.347.45-.52.15-.173.2-.299.3-.498.1-.2.05-.375-.025-.524-.075-.15-.673-1.602-.922-2.198-.243-.58-.49-.5-.673-.51-.173-.01-.371-.01-.57-.01-.2 0-.523.074-.797.373-.273.3-1.045 1.01-1.045 2.47 0 1.461 1.074 2.871 1.223 3.071.15.2 2.113 3.197 5.118 4.478.715.305 1.272.486 1.706.622.718.226 1.37.194 1.886.118.575-.085 1.77-.715 2.018-1.402.249-.688.249-1.277.174-1.402-.075-.124-.274-.199-.574-.349z"/>
              </svg>
              <span>Talk via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="section-container grid sm:grid-cols-3 gap-6 text-center text-sm text-gray-600 font-medium">
          <div className="flex flex-col items-center gap-1">
            <span className="text-gray-400 font-normal">Send Email</span>
            <a href="mailto:contactpcnexus@gmail.com" className="text-blue-600 font-bold hover:underline">contactpcnexus@gmail.com</a>
          </div>
          <div className="flex flex-col items-center gap-1 border-t sm:border-t-0 sm:border-x border-gray-200 py-4 sm:py-0">
            <span className="text-gray-400 font-normal">Direct Call</span>
            <a href="tel:+919705309630" className="text-blue-600 font-bold hover:underline">+91 9705309630</a>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-gray-400 font-normal">Our Location</span>
            <span className="text-gray-900 font-bold">Kalwakurthy, Telangana, India</span>
          </div>
        </div>
      </section>
    </div>
  )
}
