import { ServicesContent } from '@/components/services-content'

export const metadata = {
  title: 'Services - PC Nexus Technologies',
  description: 'Explore our comprehensive software development services including web development, mobile apps, AI solutions, cloud services, and more.',
}

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-white via-blue-50 to-white border-b border-gray-200">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Our Services
            </h1>
            <p className="text-xl text-gray-600">
              We Build Digital Solutions That Drive Business Growth. End-to-end software development services to help businesses establish a strong digital presence, improve efficiency, and achieve long-term success.
            </p>
          </div>
        </div>
      </section>

      <ServicesContent />
    </div>
  )
}
