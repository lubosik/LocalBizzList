import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Clock, MapPin, Calendar, AlertTriangle, Wrench } from 'lucide-react'

export const metadata = {
  title: "Kitchen Exhaust Fan Problems & Quick Fixes in Fort Lauderdale",
  description: "Complete troubleshooting guide for kitchen exhaust fan problems in Fort Lauderdale. Quick fixes for common issues, repair costs, and when to call professionals.",
  keywords: ["kitchen exhaust fan problems Fort Lauderdale", "exhaust fan repair Fort Lauderdale", "range hood repair", "kitchen vent fan troubleshooting"],
  category: "maintenance-repairs",
  city: "Fort Lauderdale",
  thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  author: "LocalBizzList Team",
  publishedAt: "2024-01-15",
  updatedAt: "2024-01-15",
  readTime: "8 min",
  h1: "Kitchen Exhaust Fan Problems & Quick Fixes in Fort Lauderdale",
  canonical: "https://local-bizz-list.vercel.app/blog/exhaust-fan-problems-fort-lauderdale"
}

const articleMeta = {
  title: "Kitchen Exhaust Fan Problems & Quick Fixes in Fort Lauderdale",
  description: "Complete troubleshooting guide for kitchen exhaust fan problems in Fort Lauderdale. Quick fixes for common issues, repair costs, and when to call professionals.",
  keywords: ["kitchen exhaust fan problems Fort Lauderdale", "exhaust fan repair Fort Lauderdale", "range hood repair", "kitchen vent fan troubleshooting"],
  category: "maintenance-repairs",
  city: "Fort Lauderdale",
  thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  author: "LocalBizzList Team",
  publishedAt: "2024-01-15",
  updatedAt: "2024-01-15",
  readTime: "8 min",
  h1: "Kitchen Exhaust Fan Problems & Quick Fixes in Fort Lauderdale",
  canonical: "https://local-bizz-list.vercel.app/blog/exhaust-fan-problems-fort-lauderdale"
}

export default function ExhaustFanProblemsFortLauderdale() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleMeta.h1,
    "description": articleMeta.description,
    "image": articleMeta.thumbnail,
    "author": {
      "@type": "Organization",
      "name": articleMeta.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "LocalBizzList",
      "logo": {
        "@type": "ImageObject",
        "url": "https://local-bizz-list.vercel.app/logo.png"
      }
    },
    "datePublished": articleMeta.publishedAt,
    "dateModified": articleMeta.updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleMeta.canonical
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://local-bizz-list.vercel.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Resources",
          "item": "https://local-bizz-list.vercel.app/resources"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Restaurant Hood Cleaning",
          "item": "https://local-bizz-list.vercel.app/niches/restaurant-hood-cleaning"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Fort Lauderdale",
          "item": "https://local-bizz-list.vercel.app/locations/fort-lauderdale"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": articleMeta.h1,
          "item": articleMeta.canonical
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <nav className="bg-gray-50 border-b" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 py-3">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/resources" className="text-gray-500 hover:text-gray-700">
                  Resources
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/niches/restaurant-hood-cleaning" className="text-gray-500 hover:text-gray-700">
                  Restaurant Hood Cleaning
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/locations/fort-lauderdale" className="text-gray-500 hover:text-gray-700">
                  Fort Lauderdale
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">{articleMeta.h1}</li>
            </ol>
          </div>
        </nav>

        {/* Article Header */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">
                Maintenance & Repairs
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                Fort Lauderdale
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {articleMeta.h1}
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{articleMeta.readTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{articleMeta.city}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(articleMeta.publishedAt).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Fort Lauderdale's high humidity, salt air, and frequent cooking create a perfect storm for kitchen exhaust fan problems. 
                From noisy motors to weak airflow, understanding these issues and their solutions can save you time and money while 
                maintaining proper kitchen ventilation. This guide covers{' '}
                <Link href="/resources/issues/hood-cleaning/exhaust-fan-grinding-noise" className="text-brand-600 hover:text-brand-700 underline">
                  exhaust fan grinding noise problems
                </Link> and{' '}
                <Link href="/niches/restaurant-hood-cleaning" className="text-brand-600 hover:text-brand-700 underline">
                  professional exhaust fan repair services
                </Link> available in Fort Lauderdale.
              </p>

              {/* Mid-article CTA */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
                <h3 className="text-lg font-semibold text-orange-900 mb-2">Need Professional Exhaust Fan Repair?</h3>
                <p className="text-orange-800 mb-4">
                  Get expert exhaust fan repair service in Fort Lauderdale. Licensed technicians with same-day service available.
                </p>
                <Link 
                  href="/pricing/instant-quote?src=hood_fort-lauderdale_exhaust-fan-problems-fort-lauderdale_mid"
                  className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Get Instant Quote
                </Link>
              </div>

              {/* Section 1: Common Problems */}
              <section id="common-problems" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Common Problems</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Motor Issues</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        <span>Grinding or squealing noises</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        <span>Motor won't start</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        <span>Intermittent operation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        <span>Overheating</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Airflow Problems</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        <span>Weak or no airflow</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        <span>Excessive noise</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        <span>Smoke not clearing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        <span>Uneven ventilation</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&crop=center"
                  alt="Commercial kitchen exhaust fan troubleshooting and repair in Fort Lauderdale"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg mb-8"
                  loading="lazy"
                />
              </section>

              {/* Section 2: Quick Fixes */}
              <section id="quick-fixes" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Quick Fixes</h2>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Safe DIY Checks</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Electrical Checks</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Check circuit breaker</li>
                        <li>• Verify power switch</li>
                        <li>• Inspect wiring connections</li>
                        <li>• Test outlet voltage</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Mechanical Checks</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Clean fan blades</li>
                        <li>• Check belt tension</li>
                        <li>• Inspect for obstructions</li>
                        <li>• Lubricate moving parts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: When to Call Professionals */}
              <section id="when-to-call" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">3. When to Call Professionals</h2>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-red-900 mb-4">Stop and Call Immediately</h3>
                  <ul className="space-y-2 text-red-800">
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      <span>Smoke or burning smells from motor</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      <span>Electrical sparks or arcing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      <span>Fan blade damage or imbalance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      <span>Structural damage to housing</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 4: Fort Lauderdale Specific Issues */}
              <section id="fort-lauderdale-specific" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Fort Lauderdale Specific Issues</h2>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Coastal Climate Challenges</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Salt Air Corrosion</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Accelerated metal corrosion</li>
                        <li>• Electrical connection failure</li>
                        <li>• Bearing wear</li>
                        <li>• Housing deterioration</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">High Humidity Effects</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Moisture in electrical components</li>
                        <li>• Grease buildup acceleration</li>
                        <li>• Mold and mildew growth</li>
                        <li>• Insulation degradation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Repair Costs */}
              <section id="repair-costs" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Repair Costs in Fort Lauderdale</h2>
                
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Problem</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Typical Cost</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Required</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Urgency</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Motor Replacement</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$400-800</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2-4 hours</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">High</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Belt Replacement</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$150-300</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1-2 hours</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Medium</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Electrical Repair</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$200-500</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1-3 hours</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">High</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Cleaning Service</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$100-250</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1-2 hours</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Low</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* FAQs */}
              <section id="faqs" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">How do I know if my exhaust fan needs repair?</h3>
                    <p className="text-gray-700">
                      Signs include unusual noises, weak airflow, motor not starting, excessive vibration, or visible damage. 
                      If smoke isn't clearing properly or you notice electrical issues, call a professional immediately.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I repair my exhaust fan myself?</h3>
                    <p className="text-gray-700">
                      Basic cleaning and simple checks are safe DIY tasks. However, electrical repairs, motor replacement, 
                      and structural work should be left to licensed professionals for safety and compliance reasons.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">How often should exhaust fans be serviced?</h3>
                    <p className="text-gray-700">
                      Professional cleaning should occur monthly for high-volume restaurants, quarterly for moderate-volume, 
                      and semi-annually for low-volume establishments. Regular maintenance prevents major repairs.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Why do exhaust fans fail more often in Fort Lauderdale?</h3>
                    <p className="text-gray-700">
                      Fort Lauderdale's high humidity and salt air accelerate corrosion and wear. The coastal environment 
                      requires more frequent maintenance and specialized corrosion-resistant components.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">What's the difference between exhaust fan repair and replacement?</h3>
                    <p className="text-gray-700">
                      Repair involves fixing specific components like motors, belts, or electrical connections. Replacement 
                      means installing a new fan system. Repair is usually more cost-effective for newer systems.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">How long do exhaust fan repairs take?</h3>
                    <p className="text-gray-700">
                      Simple repairs like belt replacement take 1-2 hours. Motor replacement requires 2-4 hours. 
                      Complex electrical work may take longer. Most companies offer same-day service for urgent repairs.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Do I need to shut down my restaurant for repairs?</h3>
                    <p className="text-gray-700">
                      Most repairs can be done during off-hours or with minimal disruption. Emergency repairs may require 
                      temporary closure. Professional companies work around your schedule to minimize business impact.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">What warranty do exhaust fan repairs come with?</h3>
                    <p className="text-gray-700">
                      Most professional repairs come with 90-day to 1-year warranties on parts and labor. Motor 
                      replacements typically have longer warranties. Always get warranty details in writing.
                    </p>
                  </div>
                </div>
              </section>

              {/* End CTA */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-8 my-12 text-center">
                <h3 className="text-2xl font-bold text-orange-900 mb-4">Need Professional Exhaust Fan Repair?</h3>
                <p className="text-orange-800 mb-6 text-lg">
                  Get expert exhaust fan repair service in Fort Lauderdale with licensed technicians and same-day service available.
                </p>
                <Link 
                  href="/pricing/instant-quote?src=hood_fort-lauderdale_exhaust-fan-problems-fort-lauderdale_end"
                  className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-bold text-lg rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Get Instant Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}