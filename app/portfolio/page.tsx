'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ProjectCard } from '@/components/project-card'

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Web', 'Mobile', 'SaaS', 'Enterprise', 'Startup']

  const projects = [
    {
      id: 1,
      title: 'Online Gatepass System',
      category: 'Web',
      description: 'A complete digital gatepass approval portal for campuses, managing security check-ins and parental authorization.',
      image: '/project_saas_analytics.jpg',
      tags: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'SMS API'],
      problem: 'Manual paper-based gatepasses caused student delays, warden verification backlogs, and lost logs.',
      solution: 'Built a real-time dashboard linking students, wardens, guards, and parents via instant approvals.',
      result: 'Processed 5,000+ digital passes, reducing gate check-in overhead by 85%.',
      github: 'https://github.com/acharan1074/online-gatepass-system',
      demo: 'https://nexus-gatepass.pcnexus.com',
    },
    {
      id: 2,
      title: 'PC Nexus Business Portal',
      category: 'SaaS',
      description: 'Unified administrative control panel managing client project pipelines, invoices, and communication logs.',
      image: '/service_software.jpg',
      tags: ['React.js', 'Node.js', 'Express', 'PostgreSQL'],
      problem: 'Scattered customer contracts, project milestones, and billing created operational drag.',
      solution: 'Consolidated client projects, visual milestones, and direct messaging inside a single web dashboard.',
      result: 'Operational speed was improved by 40% with zero lost project communications.',
      github: 'https://github.com/acharan1074/pc-nexus-portal',
      demo: 'https://portal.pcnexus.com',
    },
    {
      id: 3,
      title: 'Sketch Learn Digit System',
      category: 'Startup',
      description: 'An AI-powered online canvas classifying handwritten digits in real-time utilizing a TensorFlow CNN.',
      image: '/service_ai.jpg',
      tags: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      problem: 'High processing latency made digit classification on online sketchpads sluggish for web users.',
      solution: 'Served a lightweight pre-trained Convolutional Neural Network via FastAPI to a React UI canvas.',
      result: 'Delivered instant, offline-capable digit predictions with 98.7% classification accuracy.',
      github: 'https://github.com/acharan1074/sketch-learn',
      demo: 'https://sketch-learn.pcnexus.com',
    },
    {
      id: 4,
      title: 'Smart Crop AI Predictor',
      category: 'Startup',
      description: 'Machine learning forecasting platform analyzing soil nutrients and weather patterns to predict agricultural yields.',
      image: '/service_ai.jpg',
      tags: ['Python', 'Scikit-Learn', 'FastAPI', 'React'],
      problem: 'Guesswork in selecting seasonal crops led local farming operations to suffer supply chain losses.',
      solution: 'Trained random forest classifiers on regional soil chemistries and historic rainfall charts.',
      result: 'Achieved 94% crop forecast accuracy, reducing resource spending by 18%.',
      github: 'https://github.com/acharan1074/smart-crop-prediction',
      demo: 'https://smartcrop-ai.pcnexus.com',
    },
    {
      id: 5,
      title: 'Secure Telehealth App',
      category: 'Mobile',
      description: 'Cross-platform mobile telehealth solution enabling remote audio-video consultation.',
      image: '/service_mobile.jpg',
      tags: ['React Native', 'WebRTC', 'Firebase', 'Security'],
      problem: 'High video drop-off rates for telehealth visits in low-bandwidth rural locations.',
      solution: 'Configured optimized WebRTC connection pathways and compressed audio delivery packages.',
      result: 'Hosted 10k+ video sessions with zero downtime and stable connection parameters.',
      github: 'https://github.com/acharan1074/secure-telehealth',
      demo: 'https://telehealth.pcnexus.com',
    },
    {
      id: 6,
      title: 'Electronic Components E-Commerce',
      category: 'Web',
      description: 'High-performance e-commerce platform with dynamic catalogs and a streamlined Stripe checkout.',
      image: '/project_ecommerce.jpg',
      tags: ['Next.js', 'Stripe', 'Prisma', 'Tailwind CSS'],
      problem: 'Clunky navigation and slow checkout times caused cart abandonment rates to hit 75%.',
      solution: 'Migrated to Next.js App Router featuring static builds, dynamic cart states, and Stripe.',
      result: 'Cart abandonment dropped to 38% while checkout load speeds increased by 3.5x.',
      github: 'https://github.com/acharan1074/nexus-ecommerce',
      demo: 'https://shop-components.pcnexus.com',
    },
  ]

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background to-card border-b border-border">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Showcasing our best work and successful client partnerships across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="section-container">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-card border border-border text-foreground hover:border-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                problem={project.problem}
                solution={project.solution}
                result={project.result}
                github={project.github}
                demo={project.demo}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-24 bg-card">
        <div className="section-container">
          <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              { number: '1+', label: 'Years in Business' },
              { number: '99%', label: 'Client Satisfaction' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground">
              We have extensive experience across diverse sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Finance & Banking', description: 'Secure financial systems and payment solutions' },
              { name: 'Healthcare', description: 'Patient management and telemedicine platforms' },
              { name: 'E-commerce', description: 'Online stores and marketplace solutions' },
              { name: 'SaaS & Technology', description: 'Cloud-based software and platforms' },
              { name: 'Enterprise', description: 'Large-scale business systems' },
              { name: 'Startups', description: 'MVP development and rapid growth' },
            ].map((industry, idx) => (
              <div key={idx} className="p-8 rounded-lg bg-card border border-border hover:border-primary transition-all">
                <h3 className="text-lg font-semibold text-foreground mb-2">{industry.name}</h3>
                <p className="text-muted-foreground">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study CTA */}
      <section className="py-16 md:py-24 bg-card">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Want Detailed Case Studies?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore in-depth analysis of our most impactful projects and client success stories.
            </p>
            <Link href="/case-studies" className="btn-primary inline-block">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to Start Your Project?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let&apos;s discuss your vision and create something amazing together.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
