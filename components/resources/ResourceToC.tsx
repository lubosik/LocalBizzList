'use client'

import { useState, useEffect } from 'react'

interface ResourceToCProps {
  headings: Array<{
    id: string
    text: string
    level: number
  }>
}

export function ResourceToC({ headings }: ResourceToCProps) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0% -35% 0%' }
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  return (
    <div className="sticky top-8 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
      <nav className="space-y-2">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={`block text-sm transition-colors duration-200 ${
              heading.level === 2
                ? 'font-medium text-gray-700 hover:text-blue-600'
                : 'text-gray-600 hover:text-blue-500 ml-4'
            } ${
              activeId === heading.id
                ? 'text-blue-600 font-medium'
                : ''
            }`}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  )
}
