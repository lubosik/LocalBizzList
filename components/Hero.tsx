'use client'

import { Search } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface HeroProps {
  title: string
  description: string
  backgroundImage?: string
  showSearch?: boolean
  searchPlaceholder?: string
}

export default function Hero({
  title,
  description,
  backgroundImage,
  showSearch = false,
  searchPlaceholder = 'Search...',
}: HeroProps) {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(rgba(30, 58, 138, 0.7), rgba(30, 58, 138, 0.85)), url(${backgroundImage})`
          : 'linear-gradient(135deg, #1E3A8A 0%, #10B981 100%)',
      }}
    >
      <div className="container relative z-10 flex min-h-[340px] items-center py-12">
        <div className="w-full max-w-3xl">
          <h1 className="font-medium text-2xl leading-8 tracking-tight-2 sm:text-[2.75rem] sm:font-semibold sm:leading-[1.1] text-white mb-4">
            {title}
          </h1>

          <p className="text-lg text-white/90 mb-8 max-w-2xl">
            {description}
          </p>

          {showSearch && (
            <div className="max-w-2xl">
              <form onSubmit={handleSearch} className="w-full">
                <div className="group flex gap-2 justify-between items-center bg-neutral-0 border border-neutral-200 rounded-lg overflow-hidden">
                  <div className="flex items-center gap-2 flex-1 px-4">
                    <Search className="h-5 w-5 text-neutral-400" />
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder={searchPlaceholder}
                      className="outline-none w-full text-neutral-800 py-3"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="bg-primary text-primary-fg hover:bg-primary-int py-1 h-[42px] rounded-md px-6 font-bold m-1 transition-colors"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}