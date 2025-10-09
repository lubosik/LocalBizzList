import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, FileText, AlertTriangle, Clock, Shield, Droplet, Wrench, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Septic Tank Services Resources | Expert Guides & Tips | LocalBizzList',
  description: 'Comprehensive septic tank service guides for Miami, Boca Raton, and Fort Lauderdale. Expert tips on pumping, maintenance, repairs, permits, and emergency services.',
  keywords: ['septic tank resources', 'septic maintenance guides', 'septic pumping tips', 'drain field care', 'septic permits', 'emergency septic services'],
  openGraph: {
    title: 'Septic Tank Services Resources | Expert Guides & Tips',
    description: 'Comprehensive septic tank service guides for South Florida. Expert tips on pumping, maintenance, repairs, permits, and emergency services.',
    url: 'https://localbizzlist.com/resources/septic-tank-services',
  }
}

const resourcesByCity = {
  miami: [
    {
      title: 'Drain Field Problems & Warning Signs',
      href: '/resources/septic-tank-services/miami/drain-field-problems-warning-signs',
      description: 'Identify drain field issues early with Miami-specific warning signs and solutions.',
      icon: AlertTriangle,
    },
    {
      title: 'Emergency Septic Backups',
      href: '/resources/septic-tank-services/miami/emergency-septic-backups',
      description: '24/7 emergency response guide for septic backups in Miami-Dade County.',
      icon: AlertTriangle,
    },
    {
      title: 'Permits & Local Rules',
      href: '/resources/septic-tank-services/miami/permits-local-rules',
      description: 'Complete guide to Miami-Dade septic permits, regulations, and compliance.',
      icon: Shield,
    },
    {
      title: 'Septic Inspection Checklist',
      href: '/resources/septic-tank-services/miami/septic-inspection-checklist',
      description: 'Professional inspection checklist for Miami septic systems.',
      icon: FileText,
    },
    {
      title: 'Pumping Cost & Frequency',
      href: '/resources/septic-tank-services/miami/septic-pumping-cost-frequency',
      description: 'Miami septic pumping costs, schedules, and frequency recommendations.',
      icon: DollarSign,
    },
  ],
  bocaRaton: [
    {
      title: 'Drain Field Care',
      href: '/resources/septic-tank-services/boca-raton/drain-field-care',
      description: 'Drain field maintenance for Boca Raton\'s coastal conditions.',
      icon: Droplet,
    },
    {
      title: 'Drain Field Problems & Warning Signs',
      href: '/resources/septic-tank-services/boca-raton/drain-field-problems-warning-signs',
      description: 'Coastal-specific drain field warning signs for Palm Beach County.',
      icon: AlertTriangle,
    },
    {
      title: 'Emergency Repairs',
      href: '/resources/septic-tank-services/boca-raton/emergency-repairs',
      description: 'Emergency septic repair guide for Boca Raton homeowners.',
      icon: Wrench,
    },
    {
      title: 'Emergency Septic Backups',
      href: '/resources/septic-tank-services/boca-raton/emergency-septic-backups',
      description: 'What to do when your Boca Raton septic system backs up.',
      icon: AlertTriangle,
    },
    {
      title: 'Permits & Local Rules',
      href: '/resources/septic-tank-services/boca-raton/permits-local-rules',
      description: 'Palm Beach County septic permits and coastal regulations.',
      icon: Shield,
    },
    {
      title: 'Restaurants on Septic',
      href: '/resources/septic-tank-services/boca-raton/restaurants-on-septic',
      description: 'Commercial septic solutions for Boca Raton restaurants.',
      icon: FileText,
    },
    {
      title: 'Septic Inspection Checklist',
      href: '/resources/septic-tank-services/boca-raton/septic-inspection-checklist',
      description: 'Complete inspection guide for coastal septic systems.',
      icon: FileText,
    },
    {
      title: 'Pumping Cost & Frequency',
      href: '/resources/septic-tank-services/boca-raton/septic-pumping-cost-frequency',
      description: 'Boca Raton septic pumping schedules and pricing.',
      icon: DollarSign,
    },
    {
      title: 'Septic vs Sewer Conversion',
      href: '/resources/septic-tank-services/boca-raton/septic-vs-sewer-conversion',
      description: 'Should you convert from septic to sewer in Boca Raton?',
      icon: Wrench,
    },
    {
      title: 'What Not to Flush',
      href: '/resources/septic-tank-services/boca-raton/what-not-to-flush',
      description: 'Protect your Boca Raton septic system - know what not to flush.',
      icon: Shield,
    },
  ],
  fortLauderdale: [
    {
      title: 'Drain Field Problems & Warning Signs',
      href: '/resources/septic-tank-services/fort-lauderdale/drain-field-problems-warning-signs',
      description: 'Identify drain field issues in Fort Lauderdale\'s flood-prone areas.',
      icon: AlertTriangle,
    },
    {
      title: 'Emergency Septic Backups',
      href: '/resources/septic-tank-services/fort-lauderdale/emergency-septic-backups',
      description: 'Emergency backup solutions for Broward County septic systems.',
      icon: AlertTriangle,
    },
    {
      title: 'Maintenance Schedule',
      href: '/resources/septic-tank-services/fort-lauderdale/maintenance-schedule',
      description: 'Year-round septic maintenance schedule for Fort Lauderdale.',
      icon: Clock,
    },
    {
      title: 'Permits & Local Rules',
      href: '/resources/septic-tank-services/fort-lauderdale/permits-local-rules',
      description: 'Broward County septic permits and hurricane zone requirements.',
      icon: Shield,
    },
    {
      title: 'Pumping Frequency',
      href: '/resources/septic-tank-services/fort-lauderdale/pumping-frequency',
      description: 'How often to pump your Fort Lauderdale septic tank.',
      icon: Clock,
    },
    {
      title: 'Restaurants on Septic',
      href: '/resources/septic-tank-services/fort-lauderdale/restaurants-on-septic',
      description: 'Commercial septic solutions for Fort Lauderdale restaurants.',
      icon: FileText,
    },
    {
      title: 'Septic Inspection Checklist',
      href: '/resources/septic-tank-services/fort-lauderdale/septic-inspection-checklist',
      description: 'Professional inspection checklist for Broward County systems.',
      icon: FileText,
    },
    {
      title: 'Pumping Cost & Frequency',
      href: '/resources/septic-tank-services/fort-lauderdale/septic-pumping-cost-frequency',
      description: 'Fort Lauderdale septic pumping costs and schedules.',
      icon: DollarSign,
    },
    {
      title: 'Septic vs Sewer Conversion',
      href: '/resources/septic-tank-services/fort-lauderdale/septic-vs-sewer-conversion',
      description: 'Converting from septic to sewer in Fort Lauderdale.',
      icon: Wrench,
    },
    {
      title: 'What Not to Flush',
      href: '/resources/septic-tank-services/fort-lauderdale/what-not-to-flush',
      description: 'Protect your septic system - complete do not flush list.',
      icon: Shield,
    },
  ],
}

export default function SepticResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Septic Tank Services Resources
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Expert guides and tips for septic maintenance, repairs, and compliance across South Florida
            </p>
            <Link
              href="/services/septic-tank-services"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>

      {/* Miami Resources */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <MapPin className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Miami</h2>
              <p className="text-gray-600 mt-1">Expert guides for Miami-Dade County septic systems</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourcesByCity.miami.map((resource) => {
              const Icon = resource.icon
              return (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 group"
                >
                  <div className="flex items-start mb-3">
                    <Icon className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {resource.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                  <span className="text-blue-600 text-sm font-medium mt-3 inline-block group-hover:text-blue-700">
                    Read More →
                  </span>
                </Link>
              )
            })}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/locations/miami/septic-services"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View Miami Septic Services →
            </Link>
          </div>
        </div>
      </div>

      {/* Boca Raton Resources */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <MapPin className="w-8 h-8 text-green-600 mr-3" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Boca Raton</h2>
              <p className="text-gray-600 mt-1">Specialized guides for Palm Beach County coastal conditions</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourcesByCity.bocaRaton.map((resource) => {
              const Icon = resource.icon
              return (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 group"
                >
                  <div className="flex items-start mb-3">
                    <Icon className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                      {resource.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                  <span className="text-green-600 text-sm font-medium mt-3 inline-block group-hover:text-green-700">
                    Read More →
                  </span>
                </Link>
              )
            })}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/locations/boca-raton/septic-services"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              View Boca Raton Septic Services →
            </Link>
          </div>
        </div>
      </div>

      {/* Fort Lauderdale Resources */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <MapPin className="w-8 h-8 text-orange-600 mr-3" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Fort Lauderdale</h2>
              <p className="text-gray-600 mt-1">Comprehensive guides for Broward County septic systems</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourcesByCity.fortLauderdale.map((resource) => {
              const Icon = resource.icon
              return (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 group"
                >
                  <div className="flex items-start mb-3">
                    <Icon className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {resource.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                  <span className="text-orange-600 text-sm font-medium mt-3 inline-block group-hover:text-orange-700">
                    Read More →
                  </span>
                </Link>
              )
            })}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/locations/fort-lauderdale/septic-services"
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              View Fort Lauderdale Septic Services →
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Professional Septic Services?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get expert help from licensed septic professionals serving South Florida
          </p>
          <Link
            href="/pricing/instant-quote/septic-tank-services?src=resources_septic_cta"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            Get Instant Quote
          </Link>
        </div>
      </div>
    </div>
  )
}
