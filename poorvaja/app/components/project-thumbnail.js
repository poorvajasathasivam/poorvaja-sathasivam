import Image from 'next/image'
import Link from 'next/link'

export default function ProjectThumbnail({ title, image, link, category }) {
  return (
    <Link 
      href={link} 
      className="group relative block aspect-video overflow-hidden bg-black hover-glow"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] mb-2 text-white transform transition-transform duration-700 group-hover:translate-x-2">
          {title}
        </h2>
        <span className="text-sm tracking-[0.2em] text-gray-300 transform transition-transform duration-700 group-hover:translate-x-2">
          {category}
        </span>
      </div>
    </Link>
  )
}

