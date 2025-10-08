import Link from 'next/link'
import Image from 'next/image'
import { Clock, AlertTriangle, CheckCircle, Calendar } from 'lucide-react'

export const metadata = {
  title: "How Often Do We Need Hood Cleaning?",
  description: "Complete guide to hood cleaning frequency requirements. Learn NFPA 96 compliance schedules, restaurant type considerations, and when to schedule professional hood cleaning.",
  keywords: ["hood cleaning frequency", "NFPA 96 cleaning schedule", "restaurant hood cleaning schedule", "commercial kitchen cleaning frequency"],
  category: "compliance-inspections",
  tags: ["NFPA 96", "compliance", "frequency", "schedule", "restaurant"],
  thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
  author: "LocalBizzList Team",
  publishedAt: "2024-01-15",
  updatedAt: "2024-01-15",
  readTime: "8 min",
  h1: "How Often Do We Need Hood Cleaning?",
  canonical: "https://local-bizz-list.vercel.app/resources/issues/hood-cleaning/how-often-hood-cleaning"
}

const articleMeta = {
  title: "How Often Do We Need Hood Cleaning?",
  description: "Complete guide to hood cleaning frequency requirements. Learn NFPA 96 compliance schedules, restaurant type considerations, and when to schedule professional hood cleaning.",
  keywords: ["hood cleaning frequency", "NFPA 96 cleaning schedule", "restaurant hood cleaning schedule", "commercial kitchen cleaning frequency"],
  category: "compliance-inspections",
  tags: ["NFPA 96", "compliance", "frequency", "schedule", "restaurant"],
  thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
  author: "LocalBizzList Team",
  publishedAt: "2024-01-15",
  updatedAt: "2024-01-15",
  readTime: "8 min",
  h1: "How Often Do We Need Hood Cleaning?",
  canonical: "https://local-bizz-list.vercel.app/resources/issues/hood-cleaning/how-often-hood-cleaning"
}

export default function HowOftenHoodCleaning() {
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
              <li className="text-gray-900 font-medium">{articleMeta.h1}</li>
            </ol>
          </div>
        </nav>

        {/* Article Header */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                Compliance & Inspections
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
                <Calendar className="w-4 h-4" />
                <span>{new Date(articleMeta.publishedAt).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Understanding hood cleaning frequency is crucial for restaurant owners and managers to maintain fire safety compliance and prevent costly violations. 
                NFPA 96 standards require specific cleaning schedules based on your cooking operations, grease production, and local fire department requirements. 
                This guide covers{' '}
                <Link href="/blog/hood-cleaning-frequency-boca-raton" className="text-brand-600 hover:text-brand-700 underline">
                  restaurant type-specific cleaning schedules
                </Link> and{' '}
                <Link href="/niches/restaurant-hood-cleaning" className="text-brand-600 hover:text-brand-700 underline">
                  professional hood cleaning services
                </Link> available in your area.
              </p>

              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center"
                alt="Professional hood cleaning service in commercial kitchen"
                width={800}
                height={600}
                className="rounded-lg shadow-lg mb-8"
                loading="lazy"
              />

              {/* Mid-article CTA */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Professional Hood Cleaning?</h3>
                <p className="text-blue-800 mb-4">
                  Ensure NFPA 96 compliance with certified hood cleaning professionals. Get an instant quote for your restaurant.
                </p>
                <Link 
                  href="/pricing/instant-quote?src=hood_how-often-hood-cleaning_mid"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Get Instant Quote
                </Link>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">NFPA 96 Cleaning Frequency Requirements</h2>
              <p className="mb-4">
                NFPA 96 (National Fire Protection Association Standard 96) establishes minimum cleaning frequencies for commercial kitchen exhaust systems. 
                These requirements are based on the type of cooking operations and grease production levels in your establishment.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">High-Volume Cooking Operations</h3>
              <p className="mb-4">
                Restaurants with high-volume cooking operations require the most frequent cleaning:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><CheckCircle className="inline w-4 h-4 text-green-500 mr-2" /> **Monthly cleaning** for hoods, filters, and exhaust fans</li>
                <li><CheckCircle className="inline w-4 h-4 text-green-500 mr-2" /> **Quarterly cleaning** for exhaust ducts and fan blades</li>
                <li><CheckCircle className="inline w-4 h-4 text-green-500 mr-2" /> **Semi-annual cleaning** for fan motors and housing</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Medium-Volume Cooking Operations</h3>
              <p className="mb-4">
                Medium-volume operations have moderate cleaning requirements:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><CheckCircle className="inline w-4 h-4 text-green-500 mr-2" /> **Quarterly cleaning** for hoods, filters, and exhaust fans</li>
                <li><CheckCircle className="inline w-4 h-4 text-green-500 mr-2" /> **Semi-annual cleaning** for exhaust ducts and fan blades</li>
                <li><CheckCircle className="inline w-4 h-4 text-green-500 mr-2" /> **Annual cleaning** for fan motors and housing</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Low-Volume Cooking Operations</h3>
              <p className="mb-4">
                Low-volume operations have the least frequent cleaning requirements:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><CheckCircle className="inline w-4 h-4 text-green-500 mr-2" /> **Semi-annual cleaning** for hoods, filters, and exhaust fans</li>
                <li><CheckCircle className="inline w-4 h-4 text-green-500 mr-2" /> **Annual cleaning** for exhaust ducts and fan blades</li>
                <li><CheckCircle className="inline w-4 h-4 text-green-500 mr-2" /> **Annual cleaning** for fan motors and housing</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Restaurant Type Considerations</h2>
              <p className="mb-4">
                Different restaurant types have varying grease production levels that affect cleaning frequency:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Food Restaurants</h3>
              <p className="mb-4">
                High-volume, continuous cooking operations require monthly hood cleaning and quarterly duct cleaning. 
                The constant grease production from deep frying and grilling creates significant buildup.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fine Dining Restaurants</h3>
              <p className="mb-4">
                While cooking volume may be lower, the complexity of cooking methods often requires quarterly cleaning. 
                Sautéing, pan-frying, and open-flame cooking produce substantial grease.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Casual Dining Restaurants</h3>
              <p className="mb-4">
                Moderate cooking volumes typically require quarterly hood cleaning and semi-annual duct cleaning. 
                The mix of cooking methods determines the exact frequency.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Signs You Need More Frequent Cleaning</h2>
              <p className="mb-4">
                Watch for these warning signs that indicate your hood cleaning frequency should be increased:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><AlertTriangle className="inline w-4 h-4 text-orange-500 mr-2" /> **Visible grease buildup** on hood surfaces and filters</li>
                <li><AlertTriangle className="inline w-4 h-4 text-orange-500 mr-2" /> **Reduced airflow** from exhaust fans</li>
                <li><AlertTriangle className="inline w-4 h-4 text-orange-500 mr-2" /> **Unusual odors** in the kitchen</li>
                <li><AlertTriangle className="inline w-4 h-4 text-orange-500 mr-2" /> **Fire inspector violations** or warnings</li>
                <li><AlertTriangle className="inline w-4 h-4 text-orange-500 mr-2" /> **Increased kitchen temperatures** due to poor ventilation</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Local Fire Department Requirements</h2>
              <p className="mb-4">
                Local fire departments may have additional requirements beyond NFPA 96 standards. 
                Always check with your local fire marshal for specific cleaning schedules and documentation requirements.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Documentation and Compliance</h2>
              <p className="mb-4">
                Maintain detailed records of all hood cleaning activities:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><CheckCircle className="inline w-4 h-4 text-green-500 mr-2" /> **Cleaning certificates** from certified professionals</li>
                <li><CheckCircle className="inline w-4 h-4 text-green-500 mr-2" /> **Before and after photos** of cleaning work</li>
                <li><CheckCircle className="inline w-4 h-4 text-green-500 mr-2" /> **Cleaning schedules** and next service dates</li>
                <li><CheckCircle className="inline w-4 h-4 text-green-500 mr-2" /> **Fire inspection reports** and compliance status</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost Considerations</h2>
              <p className="mb-4">
                Regular hood cleaning is an investment in safety and compliance. 
                The cost of professional cleaning is minimal compared to potential fire damage, insurance claims, and regulatory fines.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens if I don't clean my hood frequently enough?</h3>
                  <p className="text-gray-700">
                    Insufficient cleaning can lead to grease fires, fire department violations, increased insurance costs, and potential closure orders. 
                    The risk of fire increases significantly with grease buildup.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I clean my hood myself?</h3>
                  <p className="text-gray-700">
                    While basic filter cleaning can be done in-house, professional hood cleaning requires specialized equipment and certification. 
                    NFPA 96 compliance typically requires certified professionals for thorough cleaning.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I determine my cooking volume classification?</h3>
                  <p className="text-gray-700">
                    Cooking volume is determined by the number of meals served, hours of operation, and types of cooking equipment. 
                    Consult with a certified hood cleaning professional or fire marshal for proper classification.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What documentation do I need for fire inspections?</h3>
                  <p className="text-gray-700">
                    Fire inspectors typically require cleaning certificates, photos, and maintenance records. 
                    Keep all documentation organized and easily accessible for inspections.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Can weather affect cleaning frequency?</h3>
                  <p className="text-gray-700">
                    Yes, humid climates and coastal areas may require more frequent cleaning due to increased corrosion and grease accumulation. 
                    Consult local professionals for climate-specific recommendations.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What's the difference between hood cleaning and duct cleaning?</h3>
                  <p className="text-gray-700">
                    Hood cleaning focuses on visible surfaces, filters, and fans, while duct cleaning involves the entire exhaust system including hidden ductwork. 
                    Both are required for complete NFPA 96 compliance.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How much does professional hood cleaning cost?</h3>
                  <p className="text-gray-700">
                    Costs vary based on hood size, complexity, and location. Typical ranges are $200-800 for basic cleaning, 
                    with larger systems costing more. Regular maintenance contracts often provide better value.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What should I look for in a hood cleaning company?</h3>
                  <p className="text-gray-700">
                    Choose certified professionals with proper insurance, references, and experience with your type of restaurant. 
                    Verify they provide proper documentation and compliance certificates.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 my-12 text-center">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Ready to Schedule Professional Hood Cleaning?</h3>
                <p className="text-blue-800 mb-6 text-lg">
                  Ensure NFPA 96 compliance with certified hood cleaning professionals. Get an instant quote for your restaurant.
                </p>
                <Link 
                  href="/pricing/instant-quote?src=hood_how-often-hood-cleaning_end"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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