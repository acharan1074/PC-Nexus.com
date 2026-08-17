'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Website Development',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const serviceOptions = [
    'Website Development',
    'Web Applications',
    'Mobile Apps',
    'AI/ML Solutions',
    'Software Development',
    'Maintenance & Support',
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const trackAnalyticsEvent = (action: string, category: string, label: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form')
      }

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Website Development',
        message: '',
      })

      // Track quote request/contact submission conversions
      trackAnalyticsEvent('form_submission', 'Engagement', 'Contact Form Submitted')
      trackAnalyticsEvent('quote_requested', 'Conversion', formData.subject)
    } catch (error: any) {
      console.error('[Contact Form] Submission error:', error)
      setStatus('error')
      setErrorMessage(error.message || 'Something went wrong. Please try again.')
    }
  }

  const handleWhatsAppClick = () => {
    trackAnalyticsEvent('whatsapp_click', 'Engagement', 'WhatsApp Button Clicked')
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 border-b border-gray-200 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent" />
        <div className="section-container relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-display mb-4">
            Get In <span className="gradient-text bg-gradient-to-r from-blue-400 to-indigo-400">Touch</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Ready to build something amazing? Reach out for a free milestone consultation, detailed project cost proposal, or general technical inquiries.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24">
        <div className="section-container grid lg:grid-cols-12 gap-12">
          {/* Left Column: Info Cards & Map */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 font-display">Contact Channels</h2>
            
            <div className="space-y-4">
              {/* WhatsApp Directly */}
              <a
                href="https://wa.me/919705309630?text=Hi%20PC%20Nexus%20Technologies,%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="flex items-center gap-4 p-5 rounded-xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100/70 hover:border-emerald-300 transition-colors shadow-sm cursor-pointer group animate-none"
              >
                <div className="p-3 rounded-lg bg-emerald-600 text-white shadow-md">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-emerald-950 text-sm">WhatsApp Us</h3>
                  <p className="text-emerald-800 text-xs mt-0.5 font-medium">+91 9705309630 (Instant Chat)</p>
                </div>
              </a>

              {/* Call */}
              <a
                href="tel:+919705309630"
                className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 bg-white hover:bg-slate-50 transition-colors shadow-sm cursor-pointer group"
              >
                <div className="p-3 rounded-lg bg-blue-600 text-white shadow-md">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Call Us</h3>
                  <p className="text-gray-600 text-xs mt-0.5">+91 9705309630 (Mon-Sat, 9AM-6PM)</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contactpcnexus@gmail.com"
                className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 bg-white hover:bg-slate-50 transition-colors shadow-sm cursor-pointer group"
              >
                <div className="p-3 rounded-lg bg-indigo-600 text-white shadow-md">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Email Us</h3>
                  <p className="text-gray-600 text-xs mt-0.5">contactpcnexus@gmail.com (24/7 inbox)</p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="p-3 rounded-lg bg-slate-800 text-white shadow-md">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Our Location</h3>
                  <p className="text-gray-600 text-xs mt-0.5">"Kalwakurthy", Telangana 509324</p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm aspect-video bg-gray-100 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30560.828236166522!2d78.57723902302361!3d16.22384770054378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba80ad8fb4f1a9%3A0xe4431e7d018659d4!2sKalwakurthy%2C%20Telangana%20509324!5e0!3m2!1sen!2sin!4v1705600000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Google Maps Location of Kalwakurthy, Telangana"
              />
            </div>
          </div>

          {/* Right Column: Contact/Quote Form */}
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 font-display mb-2">Request Free Quote</h2>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              Describe your project milestones, goals, and budget expectations. We will respond with wireframes and pricing estimates.
            </p>

            {status === 'success' ? (
              <div className="p-6 rounded-lg bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <CheckCircle size={44} className="text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-emerald-950">Thank You!</h3>
                <p className="text-sm text-emerald-800">
                  Your project quote request has been received. Our engineering team will review it and get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-700">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John Doe"
                      className="px-4 py-3 rounded-lg border border-gray-200 bg-slate-50 text-gray-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-700">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. john@example.com"
                      className="px-4 py-3 rounded-lg border border-gray-200 bg-slate-50 text-gray-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 9876543210"
                      className="px-4 py-3 rounded-lg border border-gray-200 bg-slate-50 text-gray-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-gray-700">Project Type *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 rounded-lg border border-gray-200 bg-slate-50 text-gray-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors cursor-pointer"
                    >
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-gray-700">Project Description *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Briefly describe your requirements, milestones, target audience, and timeframe..."
                    className="px-4 py-3 rounded-lg border border-gray-200 bg-slate-50 text-gray-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                    <AlertCircle size={16} className="flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Quote Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
