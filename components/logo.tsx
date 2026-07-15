import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-12 h-12 flex-shrink-0">
        <Image
          src="/logo.png"
          alt="PC Nexus Technologies Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="flex flex-col hidden sm:block">
        <div className="font-bold text-lg bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">PC NEXUS</div>
        <div className="text-xs font-semibold text-blue-600">TECHNOLOGIES</div>
      </div>
    </div>
  )
}
