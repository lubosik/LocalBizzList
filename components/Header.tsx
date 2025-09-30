import Link from 'next/link'
import { Search } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-neutral-0/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-0/60">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-secondary">LocalBizzList</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/blog"
              className="text-sm font-semibold text-neutral-700 hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/businesses"
              className="text-sm font-semibold text-neutral-700 hover:text-primary transition-colors"
            >
              Businesses
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold text-neutral-700 hover:text-primary transition-colors"
            >
              About
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/search"
            className="p-2 text-neutral-600 hover:text-primary transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Link>

          <Link
            href="/businesses/add"
            className="btn-primary px-6 py-2 text-sm hidden sm:inline-flex"
          >
            Add Business
          </Link>
        </div>
      </nav>
    </header>
  )
}