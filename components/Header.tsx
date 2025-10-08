'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search } from 'lucide-react'

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-neutral-0/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-0/60">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-brand-700">LocalBizzList</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 ${
                isActive('/') && pathname === '/'
                  ? 'text-brand-700 underline-offset-4 underline decoration-brand-600'
                  : 'text-neutral-700 hover:text-brand-700'
              }`}
              aria-current={isActive('/') && pathname === '/' ? 'page' : undefined}
            >
              Home
            </Link>
            <Link
              href="/niches"
              className={`text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 ${
                isActive('/niches')
                  ? 'text-brand-700 underline-offset-4 underline decoration-brand-600'
                  : 'text-neutral-700 hover:text-brand-700'
              }`}
              aria-current={isActive('/niches') ? 'page' : undefined}
            >
              Services
            </Link>
            <Link
              href="/locations"
              className={`text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 ${
                isActive('/locations')
                  ? 'text-brand-700 underline-offset-4 underline decoration-brand-600'
                  : 'text-neutral-700 hover:text-brand-700'
              }`}
              aria-current={isActive('/locations') ? 'page' : undefined}
            >
              Locations
            </Link>
            <Link
              href="/resources"
              className={`text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 ${
                isActive('/resources')
                  ? 'text-brand-700 underline-offset-4 underline decoration-brand-600'
                  : 'text-neutral-700 hover:text-brand-700'
              }`}
              aria-current={isActive('/resources') ? 'page' : undefined}
            >
              Resources
            </Link>
            <Link
              href="/blog"
              className={`text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 ${
                isActive('/blog')
                  ? 'text-brand-700 underline-offset-4 underline decoration-brand-600'
                  : 'text-neutral-700 hover:text-brand-700'
              }`}
              aria-current={isActive('/blog') ? 'page' : undefined}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className={`text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 ${
                isActive('/about')
                  ? 'text-brand-700 underline-offset-4 underline decoration-brand-600'
                  : 'text-neutral-700 hover:text-brand-700'
              }`}
              aria-current={isActive('/about') ? 'page' : undefined}
            >
              About
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/search"
            className="p-2 text-neutral-600 hover:text-brand-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Link>

          <Link
            href="/pricing/instant-quote?src=header_cta"
            className="btn-primary px-6 py-2 text-sm hidden sm:inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          >
            Get Instant Quote
          </Link>
        </div>
      </nav>
    </header>
  )
}