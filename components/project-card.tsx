import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  href?: string
}

export function ProjectCard({ title, description, image, tags, href = '#' }: ProjectCardProps) {
  return (
    <Link href={href}>
      <div className="group overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-300 cursor-pointer h-full flex flex-col card-hover">
        <div className="relative h-48 overflow-hidden bg-gray-200">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex-1 p-6 flex flex-col gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-block px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all mt-auto pt-2 border-t border-gray-200">
            <span>View Project</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  )
}
