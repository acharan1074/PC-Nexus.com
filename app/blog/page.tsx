'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, Clock } from 'lucide-react'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Technology', 'Business', 'Design', 'Development', 'Tips']

  const blogPosts = [
    {
      id: 1,
      title: 'Leveraging AI/ML in Custom SaaS Systems: A Practical Guide',
      category: 'Technology',
      author: 'Alligaskhanpet Charan',
      date: 'August 12, 2026',
      readTime: '6 min read',
      excerpt: 'Explore how modern businesses integrate custom machine learning forecasting models and NLP pipelines to automate data entry and speed up operational dashboards.',
      image: '/service_ai.jpg',
    },
    {
      id: 2,
      title: 'Why Next.js is the Ultimate Framework for SEO-friendly Business Sites in 2026',
      category: 'Development',
      author: 'Alligaskhanpet Charan',
      date: 'July 28, 2026',
      readTime: '8 min read',
      excerpt: 'Next.js App Router server components coupled with optimized asset streaming provide rapid page load speeds, leading to improved rankings on search engine indices.',
      image: '/service_web.jpg',
    },
    {
      id: 3,
      title: 'Securing Web Applications: Common Vulnerabilities & Codebase Remediation',
      category: 'Technology',
      author: 'Alligaskhanpet Charan',
      date: 'July 14, 2026',
      readTime: '7 min read',
      excerpt: 'Review essential cybersecurity rules, API token handling, data parsing validation, and HTTP security headers configurations to guard client servers.',
      image: '/service_support.jpg',
    },
    {
      id: 4,
      title: 'Mobile-First Design Strategies for High-Conversion Storefronts',
      category: 'Design',
      author: 'Alligaskhanpet Charan',
      date: 'June 30, 2026',
      readTime: '5 min read',
      excerpt: 'Practical UI layout tips to optimize checkout funnels, decrease load times, and implement clear CTA layouts to eliminate cart abandonment.',
      image: '/project_ecommerce.jpg',
    },
  ]

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background to-card border-b border-border">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Insights, tips, and industry trends from our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Section */}
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

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <div className="group h-full rounded-lg overflow-hidden bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-lg flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    </div>

                    <div className="space-y-2 text-xs text-muted-foreground border-t border-border pt-4 mt-auto">
                      <div className="flex items-center gap-2">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="section-container">
          <div className="max-w-2xl mx-auto bg-background border border-border rounded-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-6">
              Get the latest insights and updates delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                required
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let&apos;s discuss how we can help with your next project.
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
