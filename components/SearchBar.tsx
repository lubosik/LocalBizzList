'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
}

export default function SearchBar({
  placeholder = 'Search businesses, services, or locations...',
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      if (onSearch) {
        onSearch(query.trim())
      } else {
        router.push(`/search?q=${encodeURIComponent(query.trim())}`)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="group flex gap-2 justify-between items-center bg-neutral-0 border border-neutral-200 hover:border-neutral-500 rounded-lg transition-colors">
        <div className="flex items-center gap-2 flex-1 px-4">
          <Search className="h-5 w-5 text-neutral-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
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
  )
}