'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Search, ChevronRight } from 'lucide-react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const menuItems = [
    { href: '/', label: 'Home', description: 'Return to homepage' },
    { href: '/niches', label: 'Services', description: 'Browse all service categories' },
    { href: '/locations', label: 'Locations', description: 'Find services in your area' },
    { href: '/resources', label: 'Resources', description: 'Guides and helpful articles' },
    { href: '/blog', label: 'Blog', description: 'Latest news and updates' },
    { href: '/about', label: 'About', description: 'Learn about LocalBizzList' },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-neutral-600 hover:text-brand-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 rounded-lg"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Slide-out menu panel */}
          <div
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-white">
                <Link href="/" onClick={closeMenu} className="flex items-center">
                  <span className="text-xl font-bold text-brand-700">LocalBizzList</span>
                </Link>
                <button
                  onClick={closeMenu}
                  className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors rounded-lg"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto bg-white">
                <ul className="py-2">
                  {menuItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={`flex items-center justify-between px-6 py-4 transition-colors group ${
                          isActive(item.href)
                            ? 'bg-brand-50 border-l-4 border-brand-600'
                            : 'hover:bg-neutral-50 border-l-4 border-transparent'
                        }`}
                        aria-current={isActive(item.href) ? 'page' : undefined}
                      >
                        <div className="flex-1">
                          <div className={`text-base font-semibold ${
                            isActive(item.href) ? 'text-brand-700' : 'text-neutral-900'
                          }`}>
                            {item.label}
                          </div>
                          <div className="text-xs text-neutral-600 mt-0.5">
                            {item.description}
                          </div>
                        </div>
                        <ChevronRight className={`h-5 w-5 transition-colors ${
                          isActive(item.href)
                            ? 'text-brand-600'
                            : 'text-neutral-400 group-hover:text-neutral-600'
                        }`} />
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="border-t border-neutral-200 my-2" />

                {/* Search link */}
                <Link
                  href="/search"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-6 py-4 text-neutral-900 hover:bg-neutral-50 transition-colors group"
                >
                  <Search className="h-5 w-5 text-neutral-600 group-hover:text-brand-600 transition-colors" />
                  <div className="flex-1">
                    <div className="text-base font-semibold">Search</div>
                    <div className="text-xs text-neutral-600 mt-0.5">Find services and resources</div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-neutral-400 group-hover:text-neutral-600 transition-colors" />
                </Link>
              </nav>

              {/* Footer CTA */}
              <div className="p-6 border-t border-neutral-200 bg-neutral-50">
                <Link
                  href="/pricing/instant-quote?src=mobile_menu"
                  onClick={closeMenu}
                  className="block w-full px-6 py-4 text-center font-bold bg-brand-600 text-white hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get Instant Quote
                </Link>
                <p className="text-xs text-center text-neutral-600 mt-3">
                  Free estimates • Same-day service available
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
