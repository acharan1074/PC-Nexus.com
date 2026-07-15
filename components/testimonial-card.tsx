import Image from 'next/image'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  quote: string
  image: string
  rating?: number
}

export function TestimonialCard({ name, role, company, quote, image, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-all duration-300 card-hover">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-blue-600 text-blue-600" />
        ))}
      </div>

      <p className="text-gray-700 mb-6 italic">&quot;{quote}&quot;</p>

      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-blue-100">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="font-semibold text-gray-900 text-sm">{name}</p>
          <p className="text-xs text-gray-600">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  )
}
