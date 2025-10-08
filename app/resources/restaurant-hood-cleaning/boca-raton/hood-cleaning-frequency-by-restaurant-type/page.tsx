import { Metadata } from 'next'
import { ResourceToC } from '@/components/resources/ResourceToC'
import { ResourceTable } from '@/components/resources/ResourceTable'
import { ResourceFAQ } from '@/components/resources/ResourceFAQ'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hood Cleaning Frequency by Restaurant Type in Boca Raton | LocalBizzList',
  description: 'Complete guide to hood cleaning frequency requirements for different restaurant types in Boca Raton. NFPA 96 compliance schedules, Palm Beach County regulations, and cost optimization tips.',
  keywords: 'hood cleaning frequency Boca Raton, restaurant hood cleaning schedule, NFPA 96 cleaning frequency, commercial hood cleaning Boca Raton, kitchen exhaust cleaning schedule',
  openGraph: {
    title: 'Hood Cleaning Frequency by Restaurant Type in Boca Raton',
    description: 'Complete guide to hood cleaning frequency requirements for different restaurant types in Boca Raton. NFPA 96 compliance schedules, Palm Beach County regulations, and cost optimization tips.',
    type: 'article',
    publishedTime: '2025-01-07T00:00:00.000Z',
    modifiedTime: '2025-01-07T00:00:00.000Z',
    authors: ['LocalBizzList'],
  },
}

const articleMeta = {
  h1: 'Hood Cleaning Frequency by Restaurant Type in Boca Raton',
  city: 'Boca Raton' as const,
  target_keywords: [
    'hood cleaning frequency Boca Raton',
    'restaurant hood cleaning schedule',
    'NFPA 96 cleaning frequency',
    'commercial hood cleaning Boca Raton',
    'kitchen exhaust cleaning schedule',
    'hood cleaning frequency by restaurant type',
    'Boca Raton hood cleaning requirements',
    'restaurant hood cleaning Boca Raton',
    'commercial kitchen cleaning schedule',
    'exhaust system cleaning frequency',
    'hood cleaning schedule Boca Raton',
    'restaurant cleaning frequency',
    'commercial hood cleaning schedule',
    'kitchen exhaust cleaning Boca Raton',
    'hood cleaning Boca Raton FL'
  ],
  reading_time: '10 min read',
  summary: 'Comprehensive guide to hood cleaning frequency requirements for Boca Raton restaurants. Learn NFPA 96 compliance schedules, Palm Beach County regulations, and cost optimization strategies for different restaurant types.',
  hero_image: '/images/resources/boca-raton-hood-cleaning-frequency.jpg',
  hero_image_alt: 'Professional hood cleaning technician scheduling service for Boca Raton restaurant kitchen',
  last_updated: 'January 7, 2025',
  toc: true,
  faqs: [
    {
      question: 'How often should Boca Raton restaurants clean their hood systems?',
      answer: 'Hood cleaning frequency in Boca Raton depends on cooking volume and restaurant type. High-volume operations (24+ hours/week) must clean monthly, moderate-volume (12-24 hours/week) quarterly, and low-volume (under 12 hours/week) semi-annually. Boca Raton\'s coastal climate often requires more frequent cleaning than minimum standards.',
      schema_eligible: true
    },
    {
      question: 'What are the NFPA 96 usage classes for restaurant hood cleaning?',
      answer: 'NFPA 96 defines four usage classes: Class A (high-volume, 24+ hours/week cooking) requires monthly cleaning, Class B (moderate-volume, 12-24 hours/week) quarterly, Class C (low-volume, under 12 hours/week) semi-annually, and Class D (very low-volume, under 2 hours/week) annually.',
      schema_eligible: true
    },
    {
      question: 'How does Boca Raton\'s coastal climate affect hood cleaning frequency?',
      answer: 'Boca Raton\'s coastal location exposes hood systems to salt air, which accelerates corrosion and grease accumulation. Many restaurants clean more frequently than NFPA 96 minimums - often monthly regardless of cooking volume. The salt air also affects cleaning chemical effectiveness and requires specialized products.',
      schema_eligible: true
    },
    {
      question: 'What are the Palm Beach County specific requirements for hood cleaning frequency?',
      answer: 'Palm Beach County follows NFPA 96 standards but adds local requirements including enhanced documentation, certified technician services, and stricter enforcement. The county may require more frequent cleaning based on local conditions and fire safety assessments.',
      schema_eligible: true
    },
    {
      question: 'How much does regular hood cleaning cost in Boca Raton?',
      answer: 'Regular hood cleaning in Boca Raton costs $250-500 per hood for single cleaning, $200-400 per hood for multiple hoods, and $900-1,800 for complete system service. High-end restaurants may pay $1,800-3,500 per service. Regular cleaning often reduces costs by preventing excessive grease buildup.',
      schema_eligible: true
    },
    {
      question: 'Can Boca Raton restaurants reduce hood cleaning costs through frequency optimization?',
      answer: 'Yes, restaurants can optimize costs by following proper cleaning schedules, using preventive maintenance, and choosing appropriate service packages. Regular cleaning prevents expensive deep cleaning and reduces fire risk. Many Boca Raton restaurants save money through monthly service contracts.',
      schema_eligible: true
    },
    {
      question: 'What happens if Boca Raton restaurants don\'t follow proper hood cleaning frequency?',
      answer: 'Non-compliance can result in fire department closure orders, fines up to $1,000 per violation, increased insurance costs, and potential liability issues. Palm Beach County Fire Rescue conducts regular inspections and can shut down operations until violations are corrected.',
      schema_eligible: true
    },
    {
      question: 'How do different restaurant types in Boca Raton determine their cleaning frequency?',
      answer: 'Restaurant types determine frequency based on cooking volume, grease production, and equipment usage. Fine dining restaurants typically need quarterly cleaning, casual dining monthly, and low-volume cafes semi-annually. Boca Raton\'s coastal climate often requires more frequent cleaning regardless of type.',
      schema_eligible: true
    },
    {
      question: 'What documentation is required for hood cleaning frequency compliance in Boca Raton?',
      answer: 'Required documentation includes cleaning schedules, service records, technician certifications, compliance certificates, and detailed cleaning logs. All records must be maintained for at least three years and be available for fire department inspection.',
      schema_eligible: true
    },
    {
      question: 'How can Boca Raton restaurants track their hood cleaning schedule?',
      answer: 'Restaurants can track schedules through digital calendars, service provider apps, compliance software, or manual logs. Many Boca Raton restaurants use monthly service contracts with automatic scheduling and reminders to ensure compliance.',
      schema_eligible: true
    }
  ],
  cta_targets: {
    primary: '/pricing/instant-quote/restaurant-hood-cleaning?src=resource_boca-raton_frequency_mid',
    secondary: '/locations/boca-raton/hood-cleaning/'
  },
  schema_types: ['Article', 'FAQPage', 'BreadcrumbList'],
}

const headings = [
  { id: 'overview', text: 'Hood Cleaning Frequency Overview', level: 2 },
  { id: 'usage-classes', text: 'NFPA 96 Usage Classes', level: 2 },
  { id: 'restaurant-types', text: 'Restaurant Type Classifications', level: 2 },
  { id: 'palm-beach-requirements', text: 'Palm Beach County Requirements', level: 2 },
  { id: 'cost-impact', text: 'Cost Impact of Cleaning Frequency', level: 2 },
  { id: 'tracking-schedules', text: 'Tracking Cleaning Schedules', level: 2 },
  { id: 'consequences', text: 'Consequences of Missing Due Dates', level: 2 },
  { id: 'industry-specific', text: 'Industry-Specific Requirements', level: 2 },
  { id: 'faqs', text: 'Frequently Asked Questions', level: 2 }
]

const usageClasses = [
  ['Usage Class', 'Cooking Volume', 'Cleaning Frequency', 'Boca Raton Recommendation'],
  ['Class A', 'High-volume (24+ hours/week)', 'Monthly', 'Monthly (due to coastal climate)'],
  ['Class B', 'Moderate-volume (12-24 hours/week)', 'Quarterly', 'Bi-monthly'],
  ['Class C', 'Low-volume (under 12 hours/week)', 'Semi-annually', 'Quarterly'],
  ['Class D', 'Very low-volume (under 2 hours/week)', 'Annually', 'Semi-annually']
]

const restaurantTypes = [
  ['Restaurant Type', 'Typical Usage Class', 'Recommended Frequency', 'Boca Raton Considerations'],
  ['Fine Dining', 'Class B', 'Quarterly', 'Quality focus, coastal climate factors'],
  ['Casual Dining', 'Class A', 'Monthly', 'High volume, salt air exposure'],
  ['Café/Bistro', 'Class C', 'Semi-annually', 'Low volume, preventive care'],
  ['Steakhouse', 'Class A', 'Monthly', 'High grease production, coastal climate'],
  ['Seafood Restaurant', 'Class A', 'Monthly', 'High grease, salt air corrosion'],
  ['Italian Restaurant', 'Class B', 'Quarterly', 'Moderate volume, quality standards'],
  ['Asian Cuisine', 'Class A', 'Monthly', 'High grease, frequent cooking'],
  ['Sports Bar', 'Class A', 'Monthly', 'High grease, extended hours'],
  ['Hotel Restaurant', 'Class B', 'Quarterly', 'Consistent volume, guest safety']
]

const costComparison = [
  ['Frequency', 'Cost per Service', 'Annual Cost', 'Risk Level', 'Boca Raton Recommendation'],
  ['Monthly', '$350-600', '$4,200-7,200', 'Low', 'High-volume restaurants'],
  ['Quarterly', '$450-700', '$1,800-2,800', 'Medium', 'Moderate-volume restaurants'],
  ['Semi-annually', '$600-900', '$1,200-1,800', 'High', 'Low-volume restaurants'],
  ['Annually', '$900-1,200', '$900-1,200', 'Very High', 'Very low-volume only']
]

export default function BocaRatonHoodCleaningFrequencyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 py-4 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-gray-700">Resources</Link>
            <span>/</span>
            <Link href="/resources/boca-raton" className="hover:text-gray-700">Boca Raton</Link>
            <span>/</span>
            <span className="text-gray-900">Hood Cleaning Frequency</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              {/* Hero Section */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {articleMeta.h1}
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  {articleMeta.summary}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>📖 {articleMeta.reading_time}</span>
                  <span>📍 {articleMeta.city}</span>
                  <span>🕒 Last updated: {articleMeta.last_updated}</span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="mb-8">
                <img
                  src={articleMeta.hero_image}
                  alt={articleMeta.hero_image_alt}
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>

              {/* Overview */}
              <section id="overview" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Hood Cleaning Frequency Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Determining the correct hood cleaning frequency for your Boca Raton restaurant is crucial for NFPA 96 compliance, fire safety, and cost optimization. The frequency depends on several factors including cooking volume, restaurant type, and Boca Raton's unique coastal climate conditions.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Boca Raton's coastal location presents additional challenges that often require more frequent cleaning than the minimum NFPA 96 standards. Salt air exposure, high-end dining standards, and tropical climate conditions accelerate grease accumulation and corrosion, making regular maintenance essential.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    This comprehensive guide helps Boca Raton restaurant owners understand their specific cleaning requirements, optimize costs, and maintain compliance with both national standards and Palm Beach County regulations.
                  </p>
                </div>
              </section>

              {/* Usage Classes */}
              <section id="usage-classes" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">NFPA 96 Usage Classes</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    NFPA 96 defines four usage classes based on cooking volume and frequency. Understanding your restaurant's classification is the first step in determining proper cleaning frequency.
                  </p>
                  <ResourceTable 
                    headers={usageClasses[0]} 
                    rows={usageClasses.slice(1)} 
                    caption="NFPA 96 usage classes with Boca Raton-specific recommendations"
                  />
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Coastal Climate Considerations</h3>
                    <p className="text-blue-800">
                      Due to Boca Raton's coastal location and salt air exposure, many restaurants require more frequent cleaning than NFPA 96 minimums. 
                      Consider upgrading to the next frequency level for optimal safety and compliance.
                    </p>
                  </div>
                </div>
              </section>

              {/* Restaurant Types */}
              <section id="restaurant-types" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Restaurant Type Classifications</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Different restaurant types in Boca Raton have varying grease production rates and cooking patterns. Understanding your restaurant type helps determine the most appropriate cleaning frequency.
                  </p>
                  <ResourceTable 
                    headers={restaurantTypes[0]} 
                    rows={restaurantTypes.slice(1)} 
                    caption="Restaurant type classifications with Boca Raton-specific considerations"
                  />
                </div>
              </section>

              {/* Palm Beach Requirements */}
              <section id="palm-beach-requirements" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Palm Beach County Requirements</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Palm Beach County enforces NFPA 96 standards with additional local requirements. Understanding these regulations ensures compliance and avoids penalties.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-green-900 mb-4">Compliance Requirements</h3>
                      <ul className="list-disc list-inside space-y-2 text-green-800">
                        <li>Follow NFPA 96 usage class requirements</li>
                        <li>Use certified hood cleaning technicians</li>
                        <li>Maintain detailed cleaning records</li>
                        <li>Submit compliance documentation</li>
                        <li>Schedule regular fire department inspections</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-orange-900 mb-4">Boca Raton-Specific Factors</h3>
                      <ul className="list-disc list-inside space-y-2 text-orange-800">
                        <li>Salt air accelerates corrosion and grease buildup</li>
                        <li>High-end dining standards require premium service</li>
                        <li>Coastal climate affects cleaning chemical effectiveness</li>
                        <li>Year-round warm temperatures</li>
                        <li>Enhanced documentation requirements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Mid-Article CTA */}
              <div className="my-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Need Regular Hood Cleaning in Boca Raton?</h3>
                <p className="text-blue-100 mb-6">Get scheduled service that meets your restaurant's specific frequency requirements</p>
                <Link 
                  href={articleMeta.cta_targets.primary}
                  className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Instant Quote
                </Link>
              </div>

              {/* Cost Impact */}
              <section id="cost-impact" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cost Impact of Cleaning Frequency</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Understanding the cost implications of different cleaning frequencies helps Boca Raton restaurant owners make informed decisions about their maintenance schedules.
                  </p>
                  <ResourceTable 
                    headers={costComparison[0]} 
                    rows={costComparison.slice(1)} 
                    caption="Cost comparison of different cleaning frequencies in Boca Raton"
                  />
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
                    <h3 className="text-xl font-semibold text-yellow-900 mb-4">Cost Optimization Tips</h3>
                    <ul className="list-disc list-inside space-y-2 text-yellow-800">
                      <li>Regular cleaning prevents expensive deep cleaning</li>
                      <li>Monthly service contracts often provide better rates</li>
                      <li>Preventive maintenance reduces fire risk and insurance costs</li>
                      <li>Proper scheduling avoids emergency service fees</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Tracking Schedules */}
              <section id="tracking-schedules" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Tracking Cleaning Schedules</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Proper tracking of hood cleaning schedules ensures compliance and helps optimize service timing. Boca Raton restaurants have several options for managing their cleaning schedules.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Digital Solutions</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Service provider mobile apps</li>
                        <li>Compliance management software</li>
                        <li>Digital calendar reminders</li>
                        <li>Automated scheduling systems</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Manual Tracking</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Physical cleaning logs</li>
                        <li>Wall-mounted calendars</li>
                        <li>Service record binders</li>
                        <li>Staff reminder systems</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Contracts</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Monthly service agreements</li>
                        <li>Automatic scheduling</li>
                        <li>Priority service access</li>
                        <li>Compliance guarantees</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Consequences */}
              <section id="consequences" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Consequences of Missing Due Dates</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Failing to maintain proper hood cleaning schedules can result in serious consequences for Boca Raton restaurants. Understanding these risks emphasizes the importance of compliance.
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-red-900 mb-4">Immediate Consequences</h3>
                    <ul className="list-disc list-inside space-y-2 text-red-800">
                      <li>Fire department closure orders</li>
                      <li>Fines up to $1,000 per violation</li>
                      <li>Mandatory emergency cleaning</li>
                      <li>Increased insurance premiums</li>
                      <li>Potential criminal charges for willful violations</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-orange-900 mb-4">Long-term Consequences</h3>
                    <ul className="list-disc list-inside space-y-2 text-orange-800">
                      <li>Permanent closure for repeat violations</li>
                      <li>Loss of business license</li>
                      <li>Increased liability exposure</li>
                      <li>Difficulty obtaining insurance</li>
                      <li>Reputation damage</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Industry Specific */}
              <section id="industry-specific" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry-Specific Requirements</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Different restaurant industries in Boca Raton may have additional requirements beyond NFPA 96 standards. Understanding these industry-specific needs ensures complete compliance.
                  </p>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Fine Dining Establishments</h3>
                      <p className="text-gray-700">Usually Class B operations with quarterly cleaning requirements. Quality focus and guest safety make compliance critical for maintaining premium standards.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Casual Dining Restaurants</h3>
                      <p className="text-gray-700">Often Class A operations requiring monthly cleaning. High volume and extended hours make regular maintenance essential for safety and compliance.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Seafood Restaurants</h3>
                      <p className="text-gray-700">Typically Class A operations requiring monthly cleaning. High grease production and salt air exposure require specialized maintenance approaches.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Hotel Restaurants</h3>
                      <p className="text-gray-700">Usually Class B operations with quarterly cleaning. Consistent volume and guest safety requirements make compliance essential for hospitality standards.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <ResourceFAQ faqs={articleMeta.faqs} />

              {/* Final CTA */}
              <div className="my-12 bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Optimize Your Hood Cleaning Schedule?</h3>
                <p className="text-green-100 mb-6">Get professional service that meets your restaurant's specific frequency requirements</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/pricing/instant-quote/restaurant-hood-cleaning?src=resource_boca-raton_frequency_end"
                    className="inline-block bg-white text-green-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Get Instant Quote
                  </Link>
                  <Link 
                    href={articleMeta.cta_targets.secondary}
                    className="inline-block bg-green-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-400 transition-colors"
                  >
                    Learn More About Boca Raton Hood Cleaning
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ResourceToC headings={headings} />
          </div>
        </div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": articleMeta.h1,
            "description": articleMeta.summary,
            "image": articleMeta.hero_image,
            "author": {
              "@type": "Organization",
              "name": "LocalBizzList"
            },
            "publisher": {
              "@type": "Organization",
              "name": "LocalBizzList",
              "logo": {
                "@type": "ImageObject",
                "url": "https://localbizzlist.com/logo.png"
              }
            },
            "datePublished": "2025-01-07T00:00:00.000Z",
            "dateModified": "2025-01-07T00:00:00.000Z",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://localbizzlist.com/resources/boca-raton/hood-cleaning-frequency-by-restaurant-type"
            },
            "about": {
              "@type": "Thing",
              "name": "Hood Cleaning Frequency Requirements"
            },
            "mentions": [
              {
                "@type": "Place",
                "name": "Boca Raton, Florida"
              },
              {
                "@type": "Thing",
                "name": "NFPA 96"
              },
              {
                "@type": "Thing",
                "name": "Restaurant Hood Cleaning"
              }
            ]
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": articleMeta.faqs.filter(faq => faq.schema_eligible).map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://localbizzlist.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Resources",
                "item": "https://localbizzlist.com/resources"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Boca Raton",
                "item": "https://localbizzlist.com/resources/boca-raton"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Hood Cleaning Frequency",
                "item": "https://localbizzlist.com/resources/boca-raton/hood-cleaning-frequency-by-restaurant-type"
              }
            ]
          })
        }}
      />
    </div>
  )
}
