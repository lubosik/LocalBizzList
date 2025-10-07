import Link from 'next/link'
import { Calculator } from 'lucide-react'

interface HeroProps {
  headline: string
  subcopy: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA: {
    text: string
    href: string
  }
  showSearch?: boolean
}

export default function HomeHero({
  headline,
  subcopy,
  primaryCTA,
  secondaryCTA,
  showSearch = false,
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-secondary to-secondary-int py-20 md:py-28">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 to-secondary-int/90" />
      
      <div className="container relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {headline}
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          {subcopy}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href={primaryCTA.href}
            className="btn-primary px-8 py-4 text-lg font-semibold bg-brand-600 text-brand-on hover:bg-brand-700 focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          >
            {primaryCTA.text}
          </Link>
          
          <Link
            href={secondaryCTA.href}
            className="btn-secondary px-8 py-4 text-lg font-semibold bg-white text-brand-700 border-2 border-brand-600 hover:bg-brand-600 hover:text-white focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          >
            <Calculator className="w-5 h-5 mr-2" />
            {secondaryCTA.text}
          </Link>
        </div>
        
        {showSearch && (
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by city or service (e.g., 'Miami hood cleaning')..."
                className="w-full px-6 py-4 pr-12 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
