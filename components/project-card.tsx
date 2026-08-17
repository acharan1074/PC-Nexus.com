import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  href?: string
  problem?: string
  solution?: string
  result?: string
  github?: string
  demo?: string
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  href = '#',
  problem,
  solution,
  result,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-300 flex flex-col card-hover h-full">
      {/* Image Block */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-150">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Hover overlay with links */}
        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md"
              title="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 text-white hover:bg-slate-900 transition-colors border border-slate-700 shadow-md flex items-center justify-center"
              title="GitHub Repository"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.646.64.699 1.026 1.592 1.026 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.527-10-10-10z" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>
          
          {/* Problem, Solution, Result flow */}
          {(problem || solution || result) && (
            <div className="space-y-2 text-xs border-l-2 border-blue-500 pl-3 my-3">
              {problem && (
                <div>
                  <span className="font-bold text-rose-600">Problem:</span> <span className="text-gray-700">{problem}</span>
                </div>
              )}
              {solution && (
                <div>
                  <span className="font-bold text-emerald-600">Solution:</span> <span className="text-gray-700">{solution}</span>
                </div>
              )}
              {result && (
                <div>
                  <span className="font-bold text-blue-600">Result:</span> <span className="text-gray-900 font-semibold">{result}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="inline-block px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-blue-50 text-blue-600 border border-blue-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100 text-sm">
          {demo ? (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-blue-600 font-semibold hover:underline"
            >
              <span>Live Demo</span>
              <ArrowRight size={14} />
            </a>
          ) : (
            <span className="text-gray-400 text-xs italic">Internal System</span>
          )}
          
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-600 hover:text-gray-900 font-medium"
            >
              <svg className="w-3.5 h-3.5 fill-current animate-none" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.646.64.699 1.026 1.592 1.026 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.527-10-10-10z" />
              </svg>
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
