import { LucideIcon } from 'lucide-react'
import Image from 'next/image'

interface ServiceCardProps {
  icon?: LucideIcon
  image?: string
  title: string
  description: string
  features?: string[]
}

export function ServiceCard({ icon: Icon, image, title, description, features }: ServiceCardProps) {
  return (
    <div className="group p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-300 card-hover">
      {image ? (
        <div className="mb-4 relative w-14 h-14 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      ) : Icon ? (
        <div className="mb-4 inline-block p-3 rounded-lg bg-blue-100 group-hover:bg-blue-600 transition-colors duration-300">
          <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
        </div>
      ) : null}

      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>

      {features && features.length > 0 && (
        <ul className="space-y-2 mt-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
