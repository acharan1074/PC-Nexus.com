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
      title: 'E-commerce Platform',
      category: 'Web',
      description: 'Full-stack e-commerce solution with payment integration and inventory management.',
      image: 'https://images.unsplash.com/photo-1661956600684-40bab6278d21?w=500&h=300&fit=crop',
      tags: ['React', 'Node.js', 'Stripe'],
      result: '$2.5M revenue in first year',
    },
    {
      id: 2,
      title: 'SaaS Dashboard',
      category: 'SaaS',
      description: 'Analytics dashboard for real-time data visualization and reporting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tags: ['Next.js', 'TypeScript', 'Charts'],
      result: '500+ active users',
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'Mobile',
      description: 'Secure mobile banking application with biometric authentication.',
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=300&fit=crop',
      tags: ['React Native', 'Firebase', 'Security'],
      result: '100K+ downloads',
    },
    {
      id: 4,
      title: 'Enterprise CRM',
      category: 'Enterprise',
      description: 'Customized CRM system for managing sales and customer relationships.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      tags: ['PostgreSQL', 'Node.js', 'React'],
      result: '30% efficiency gain',
    },
    {
      id: 5,
      title: 'AI Content Platform',
      category: 'SaaS',
      description: 'AI-powered content generation and management platform.',
      image: 'https://images.unsplash.com/photo-1677442d019cecf8c0a0a3a59e5f0bf3a7d0e0d6?w=500&h=300&fit=crop',
      tags: ['Python', 'React', 'OpenAI'],
      result: '1000+ users',
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      category: 'Mobile',
      description: 'Cross-platform fitness tracking app with social features.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      tags: ['React Native', 'AWS', 'GraphQL'],
      result: '50K+ downloads',
    },
    {
      id: 7,
      title: 'Supply Chain Management',
      category: 'Enterprise',
      description: 'Real-time supply chain visibility and management system.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      tags: ['Node.js', 'MongoDB', 'React'],
      result: 'Save 20% costs',
    },
    {
      id: 8,
      title: 'Startup MVP Platform',
      category: 'Startup',
      description: 'Rapid MVP development platform for innovative startups.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      tags: ['Next.js', 'Supabase', 'Vercel'],
      result: 'Launched in 8 weeks',
    },
    {
      id: 9,
      title: 'Healthcare Portal',
      category: 'Web',
      description: 'Patient management and telemedicine portal for healthcare providers.',
      image: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=500&h=300&fit=crop',
      tags: ['React', 'Node.js', 'HIPAA Compliant'],
      result: '10K+ patients',
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
