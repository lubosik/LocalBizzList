'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: Heading[]
  activeId?: string
  onHeadingClick?: (id: string) => void
}

export default function TableOfContents({ 
  headings, 
  activeId, 
  onHeadingClick 
}: TableOfContentsProps) {
  const [expanded, setExpanded] = useState(true)
  const [currentActiveId, setCurrentActiveId] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(({ id }) => 
        document.getElementById(id)
      ).filter(Boolean)

      const currentHeading = headingElements.find((element) => {
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentHeading) {
        setCurrentActiveId(currentHeading.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [headings])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      })
    }
    onHeadingClick?.(id)
  }

  if (headings.length === 0) return null

  return (
    <div className="bg-white rounded-lg border border-neutral-200 p-6 sticky top-8">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between w-full text-left font-semibold text-neutral-800 mb-4"
      >
        <span>Table of contents</span>
        {expanded ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </button>

      {expanded && (
        <nav className="space-y-2">
          {headings.map((heading) => (
            <button
              key={heading.id}
              onClick={() => handleClick(heading.id)}
              className={`block w-full text-left text-sm transition-colors hover:text-primary ${
                currentActiveId === heading.id
                  ? 'text-primary font-medium border-l-2 border-primary pl-3 -ml-3'
                  : 'text-neutral-600 pl-0'
              }`}
              style={{ 
                paddingLeft: `${heading.level * 12}px`,
                marginLeft: currentActiveId === heading.id ? `${(heading.level - 1) * 12 - 12}px` : '0px'
              }}
            >
              {heading.text}
            </button>
          ))}
        </nav>
      )}
    </div>
  )
}
