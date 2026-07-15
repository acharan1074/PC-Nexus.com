import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-white via-blue-50 to-white border-b border-gray-200">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600">
              Have a question or ready to start your project? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="p-8 rounded-xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="inline-block p-3 rounded-lg bg-blue-100 mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <a href="mailto:contact@pcnexus.com" className="text-gray-600 hover:text-primary transition-colors">
                contact@pcnexus.com
              </a>
            </div>

            <div className="p-8 rounded-xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="inline-block p-3 rounded-lg bg-blue-100 mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
              <a href="tel:+919705309630" className="text-gray-600 hover:text-primary transition-colors">
                +91 9705309630
              </a>
            </div>

            <div className="p-8 rounded-xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="inline-block p-3 rounded-lg bg-blue-100 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">"Kalwakurthy", Nagarkurnool, Telangana 509324</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
