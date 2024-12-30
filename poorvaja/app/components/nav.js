'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const mainNavItems = [
    { name: 'HOME', path: '/' },
    { name: 'WORK', path: '/work' },
    { name: 'BLOG', path: '/blog' },
    { name: 'INFO', path: '/info' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center space-x-4 md:space-x-8">
          {mainNavItems.map((item, index) => (
            <Link 
              key={item.name}
              href={item.path}
              className={`text-xs tracking-[0.2em] hover:text-white transition-colors ${
                pathname === item.path ? 'text-white' : 'text-gray-500'
              } ${index !== mainNavItems.length - 1 ? 'after:content-["|"] after:ml-4 md:after:ml-8 after:text-gray-500' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

