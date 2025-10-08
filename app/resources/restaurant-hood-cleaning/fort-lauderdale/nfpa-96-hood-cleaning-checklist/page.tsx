import { Metadata } from 'next'
import { ResourceToC } from '@/components/resources/ResourceToC'
import { ResourceTable } from '@/components/resources/ResourceTable'
import { ResourceChecklist } from '@/components/resources/ResourceChecklist'
import { ResourceFAQ } from '@/components/resources/ResourceFAQ'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NFPA 96 Hood Cleaning Checklist for Fort Lauderdale Restaurants | LocalBizzList',
  description: 'Complete NFPA 96 hood cleaning checklist for Fort Lauderdale restaurants. Ensure compliance with fire safety standards and Broward County regulations.',
  keywords: 'NFPA 96 checklist Fort Lauderdale, hood cleaning checklist, restaurant fire safety Fort Lauderdale, commercial hood cleaning checklist, NFPA 96 compliance Fort Lauderdale',
  openGraph: {
    title: 'NFPA 96 Hood Cleaning Checklist for Fort Lauderdale Restaurants',
    description: 'Complete NFPA 96 hood cleaning checklist for Fort Lauderdale restaurants. Ensure compliance with fire safety standards and Broward County regulations.',
    type: 'article',
    publishedTime: '2025-01-07T00:00:00.000Z',
    modifiedTime: '2025-01-07T00:00:00.000Z',
    authors: ['LocalBizzList'],
  },
}

const articleMeta = {
  h1: 'NFPA 96 Hood Cleaning Checklist for Fort Lauderdale Restaurants',
  city: 'Fort Lauderdale' as const,
  target_keywords: [
    'NFPA 96 checklist Fort Lauderdale',
    'hood cleaning checklist',
    'restaurant fire safety Fort Lauderdale',
    'commercial hood cleaning checklist',
    'NFPA 96 compliance Fort Lauderdale',
    'hood cleaning requirements Fort Lauderdale',
    'restaurant hood cleaning Fort Lauderdale',
    'commercial kitchen cleaning checklist',
    'fire safety checklist Fort Lauderdale',
    'hood cleaning standards Fort Lauderdale',
    'restaurant safety checklist',
    'commercial hood cleaning Fort Lauderdale',
    'kitchen exhaust cleaning checklist',
    'NFPA 96 requirements Fort Lauderdale',
    'hood cleaning compliance Fort Lauderdale'
  ],
  reading_time: '8 min read',
  summary: 'Complete NFPA 96 hood cleaning checklist for Fort Lauderdale restaurants. Ensure compliance with fire safety standards, Broward County regulations, and proper documentation requirements.',
  hero_image: '/images/resources/fort-lauderdale-nfpa-96-checklist.jpg',
  hero_image_alt: 'Professional hood cleaning technician following NFPA 96 checklist in Fort Lauderdale restaurant kitchen',
  last_updated: 'January 7, 2025',
  toc: true,
  faqs: [
    {
      question: 'What is the NFPA 96 hood cleaning checklist for Fort Lauderdale restaurants?',
      answer: 'The NFPA 96 checklist is a comprehensive fire safety protocol that ensures proper cleaning of commercial kitchen exhaust systems. For Fort Lauderdale restaurants, it includes specific requirements for grease removal, system inspection, and compliance documentation to meet Broward County fire safety standards.',
      schema_eligible: true
    },
    {
      question: 'How often should Fort Lauderdale restaurants perform NFPA 96 cleaning?',
      answer: 'Cleaning frequency depends on cooking volume: high-volume operations (24+ hours/week) must clean monthly, moderate-volume (12-24 hours/week) quarterly, and low-volume (under 12 hours/week) semi-annually. Fort Lauderdale\'s coastal climate may require more frequent cleaning.',
      schema_eligible: true
    },
    {
      question: 'What are the key components of the NFPA 96 checklist?',
      answer: 'Key components include hood interior cleaning, fan and motor inspection, ductwork cleaning, grease trap maintenance, fire suppression system testing, electrical connection inspection, and proper documentation. Each component must meet specific cleanliness standards.',
      schema_eligible: true
    },
    {
      question: 'Who can perform NFPA 96 hood cleaning in Fort Lauderdale?',
      answer: 'NFPA 96 cleaning must be performed by certified technicians with proper training and certification. Fort Lauderdale restaurants should verify technician credentials and ensure they meet Broward County requirements for commercial kitchen cleaning services.',
      schema_eligible: true
    },
    {
      question: 'What documentation is required for NFPA 96 compliance in Fort Lauderdale?',
      answer: 'Required documentation includes cleaning certificates, inspection reports, technician certifications, compliance photos, and detailed cleaning logs. All records must be maintained for at least three years and be available for fire department inspection.',
      schema_eligible: true
    },
    {
      question: 'How does Fort Lauderdale\'s coastal climate affect NFPA 96 cleaning requirements?',
      answer: 'Fort Lauderdale\'s coastal location exposes hood systems to salt air, which accelerates corrosion and grease accumulation. This often requires more frequent cleaning than minimum NFPA 96 standards and specialized cleaning products for coastal conditions.',
      schema_eligible: true
    },
    {
      question: 'What happens if Fort Lauderdale restaurants don\'t follow NFPA 96 requirements?',
      answer: 'Non-compliance can result in fire department closure orders, fines up to $1,000 per violation, increased insurance costs, and potential liability issues. Broward County Fire Rescue conducts regular inspections and can shut down operations until violations are corrected.',
      schema_eligible: true
    },
    {
      question: 'Can Fort Lauderdale restaurants perform NFPA 96 cleaning themselves?',
      answer: 'While basic maintenance can be done in-house, NFPA 96 compliance requires certified technicians for proper cleaning, inspection, and documentation. Self-cleaning may not meet compliance standards and could result in violations.',
      schema_eligible: true
    },
    {
      question: 'What are the costs of NFPA 96 hood cleaning in Fort Lauderdale?',
      answer: 'Costs vary by restaurant size and cleaning frequency: single hood cleaning $250-500, multiple hoods $200-400 per hood, complete system service $900-1,800. Regular cleaning often reduces costs by preventing excessive grease buildup.',
      schema_eligible: true
    },
    {
      question: 'How can Fort Lauderdale restaurants ensure NFPA 96 compliance?',
      answer: 'Restaurants can ensure compliance by hiring certified technicians, maintaining proper cleaning schedules, keeping detailed documentation, scheduling regular inspections, and following NFPA 96 guidelines. Professional service providers help maintain compliance.',
      schema_eligible: true
    }
  ],
  cta_targets: {
    primary: '/pricing/instant-quote/restaurant-hood-cleaning?src=resource_fort-lauderdale_checklist_mid',
    secondary: '/locations/fort-lauderdale/hood-cleaning/'
  },
  schema_types: ['Article', 'FAQPage', 'BreadcrumbList'],
}

const headings = [
  { id: 'overview', text: 'NFPA 96 Checklist Overview', level: 2 },
  { id: 'fort-lauderdale-requirements', text: 'Fort Lauderdale Requirements', level: 2 },
  { id: 'pre-cleaning-preparation', text: 'Pre-Cleaning Preparation', level: 2 },
  { id: 'cleaning-procedures', text: 'Cleaning Procedures', level: 2 },
  { id: 'inspection-checklist', text: 'Inspection Checklist', level: 2 },
  { id: 'documentation-requirements', text: 'Documentation Requirements', level: 2 },
  { id: 'compliance-verification', text: 'Compliance Verification', level: 2 },
  { id: 'post-cleaning-maintenance', text: 'Post-Cleaning Maintenance', level: 2 },
  { id: 'faqs', text: 'Frequently Asked Questions', level: 2 }
]

const cleaningProcedures = [
  ['Component', 'Cleaning Method', 'Frequency', 'Fort Lauderdale Considerations'],
  ['Hood Interior', 'Degreasing, pressure washing', 'Per NFPA 96 schedule', 'Coastal corrosion inspection'],
  ['Fan and Motor', 'Cleaning, lubrication, inspection', 'Per NFPA 96 schedule', 'Salt air protection'],
  ['Ductwork', 'Mechanical cleaning, inspection', 'Per NFPA 96 schedule', 'Corrosion-resistant materials'],
  ['Grease Trap', 'Cleaning, maintenance', 'Monthly minimum', 'Enhanced coastal maintenance'],
  ['Fire Suppression', 'Testing, inspection', 'Semi-annually', 'Coastal system testing'],
  ['Electrical', 'Inspection, cleaning', 'Per NFPA 96 schedule', 'Corrosion-resistant connections']
]

const inspectionItems = [
  { id: '1', text: 'Hood interior cleanliness and grease removal' },
  { id: '2', text: 'Fan motor operation and lubrication' },
  { id: '3', text: 'Ductwork integrity and cleanliness' },
  { id: '4', text: 'Grease trap functionality and cleanliness' },
  { id: '5', text: 'Fire suppression system operation' },
  { id: '6', text: 'Electrical connections and corrosion' },
  { id: '7', text: 'Exhaust fan blade condition and balance' },
  { id: '8', text: 'Filter condition and replacement needs' },
  { id: '9', text: 'System airflow and performance' },
  { id: '10', text: 'Safety equipment functionality' },
  { id: '11', text: 'Documentation completeness and accuracy' },
  { id: '12', text: 'Compliance with NFPA 96 standards' },
  { id: '13', text: 'Broward County specific requirements' },
  { id: '14', text: 'Coastal corrosion assessment' },
  { id: '15', text: 'Emergency shutoff functionality' }
]

const documentationRequirements = [
  ['Document Type', 'Required Information', 'Retention Period', 'Fort Lauderdale Notes'],
  ['Cleaning Certificate', 'Date, technician, compliance status', '3 years minimum', 'Broward County format'],
  ['Inspection Report', 'Findings, recommendations, photos', '3 years minimum', 'Coastal conditions noted'],
  ['Technician Certification', 'Valid credentials, training records', 'Current', 'Broward County approved'],
  ['Compliance Photos', 'Before/after cleaning images', '3 years minimum', 'Coastal corrosion visible'],
  ['Cleaning Log', 'Detailed cleaning activities', '3 years minimum', 'Coastal-specific procedures'],
  ['Fire Department Records', 'Inspection results, violations', 'Permanent', 'Broward County Fire Rescue']
]

export default function FortLauderdaleNFPA96ChecklistPage() {
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
            <Link href="/resources/fort-lauderdale" className="hover:text-gray-700">Fort Lauderdale</Link>
            <span>/</span>
            <span className="text-gray-900">NFPA 96 Checklist</span>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">NFPA 96 Checklist Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The NFPA 96 hood cleaning checklist is a comprehensive fire safety protocol designed to ensure proper maintenance of commercial kitchen exhaust systems. For Fort Lauderdale restaurants, following this checklist is essential for compliance with both national fire safety standards and Broward County regulations.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Fort Lauderdale's coastal location presents unique challenges that require additional attention during hood cleaning procedures. Salt air exposure, high humidity, and tropical weather conditions can accelerate grease accumulation and corrosion, making thorough cleaning and inspection even more critical.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    This comprehensive checklist ensures that Fort Lauderdale restaurants maintain the highest standards of fire safety while meeting all regulatory requirements for commercial kitchen operations.
                  </p>
                </div>
              </section>

              {/* Fort Lauderdale Requirements */}
              <section id="fort-lauderdale-requirements" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Fort Lauderdale Requirements</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Fort Lauderdale restaurants must comply with both NFPA 96 national standards and Broward County specific requirements. Understanding these local regulations ensures proper compliance and avoids penalties.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-4">Broward County Requirements</h3>
                      <ul className="list-disc list-inside space-y-2 text-blue-800">
                        <li>Follow NFPA 96 cleaning schedules</li>
                        <li>Use certified hood cleaning technicians</li>
                        <li>Maintain detailed cleaning records</li>
                        <li>Submit compliance documentation</li>
                        <li>Schedule regular fire department inspections</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-green-900 mb-4">Coastal Considerations</h3>
                      <ul className="list-disc list-inside space-y-2 text-green-800">
                        <li>Salt air accelerates corrosion and grease buildup</li>
                        <li>High humidity affects cleaning effectiveness</li>
                        <li>Tropical weather impacts system performance</li>
                        <li>Enhanced documentation requirements</li>
                        <li>Specialized cleaning products needed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Pre-Cleaning Preparation */}
              <section id="pre-cleaning-preparation" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Pre-Cleaning Preparation</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Proper preparation ensures efficient and safe hood cleaning procedures. Fort Lauderdale restaurants should follow these preparation steps to maximize cleaning effectiveness and minimize downtime.
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Preparation Checklist</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Schedule cleaning during non-operational hours</li>
                      <li>Turn off all cooking equipment and gas supply</li>
                      <li>Remove all cooking utensils and equipment from hood area</li>
                      <li>Cover electrical components and sensitive equipment</li>
                      <li>Ensure adequate ventilation during cleaning process</li>
                      <li>Prepare cleaning supplies and safety equipment</li>
                      <li>Document pre-cleaning system condition with photos</li>
                      <li>Verify technician certifications and credentials</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Cleaning Procedures */}
              <section id="cleaning-procedures" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cleaning Procedures</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Following proper cleaning procedures ensures effective grease removal and system maintenance. Fort Lauderdale's coastal conditions require specialized approaches for optimal results.
                  </p>
                  <ResourceTable 
                    headers={cleaningProcedures[0]} 
                    rows={cleaningProcedures.slice(1)} 
                    caption="NFPA 96 cleaning procedures with Fort Lauderdale considerations"
                  />
                </div>
              </section>

              {/* Mid-Article CTA */}
              <div className="my-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Need NFPA 96 Compliant Hood Cleaning in Fort Lauderdale?</h3>
                <p className="text-blue-100 mb-6">Get certified service that meets all Broward County requirements</p>
                <Link 
                  href={articleMeta.cta_targets.primary}
                  className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Instant Quote
                </Link>
              </div>

              {/* Inspection Checklist */}
              <section id="inspection-checklist" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Inspection Checklist</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Thorough inspection ensures all components meet NFPA 96 standards and Fort Lauderdale requirements. This comprehensive checklist covers all critical areas for compliance verification.
                  </p>
                  <ResourceChecklist 
                    items={inspectionItems}
                    title="NFPA 96 Inspection Checklist for Fort Lauderdale Restaurants"
                  />
                </div>
              </section>

              {/* Documentation Requirements */}
              <section id="documentation-requirements" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Documentation Requirements</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Proper documentation is essential for NFPA 96 compliance and Broward County regulations. Maintaining accurate records protects restaurants from violations and ensures continued operation.
                  </p>
                  <ResourceTable 
                    headers={documentationRequirements[0]} 
                    rows={documentationRequirements.slice(1)} 
                    caption="Documentation requirements for Fort Lauderdale NFPA 96 compliance"
                  />
                </div>
              </section>

              {/* Compliance Verification */}
              <section id="compliance-verification" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Compliance Verification</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Verifying compliance ensures that all NFPA 96 requirements and Fort Lauderdale regulations are met. This process protects restaurants from violations and maintains fire safety standards.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-green-900 mb-4">Compliance Indicators</h3>
                      <ul className="list-disc list-inside space-y-2 text-green-800">
                        <li>All grease removed from hood interior</li>
                        <li>Fan and motor operating properly</li>
                        <li>Ductwork clean and unobstructed</li>
                        <li>Fire suppression system functional</li>
                        <li>Electrical connections secure</li>
                        <li>Documentation complete and accurate</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-red-900 mb-4">Non-Compliance Signs</h3>
                      <ul className="list-disc list-inside space-y-2 text-red-800">
                        <li>Visible grease accumulation</li>
                        <li>Reduced airflow or fan performance</li>
                        <li>Corrosion or damage to components</li>
                        <li>Fire suppression system issues</li>
                        <li>Electrical problems or hazards</li>
                        <li>Missing or incomplete documentation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Post-Cleaning Maintenance */}
              <section id="post-cleaning-maintenance" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Post-Cleaning Maintenance</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Proper post-cleaning maintenance ensures continued compliance and optimal system performance. Fort Lauderdale restaurants should follow these maintenance procedures to prevent future issues.
                  </p>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Immediate Post-Cleaning Tasks</h3>
                      <p className="text-gray-700">Verify all equipment is properly reassembled, test system operation, document cleaning completion, and schedule next cleaning appointment.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Weekly Maintenance</h3>
                      <p className="text-gray-700">Inspect for grease accumulation, check fan operation, monitor system performance, and address any immediate issues.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Monthly Inspections</h3>
                      <p className="text-gray-700">Comprehensive system inspection, documentation review, compliance verification, and preventive maintenance scheduling.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <ResourceFAQ faqs={articleMeta.faqs} />

              {/* Final CTA */}
              <div className="my-12 bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready for NFPA 96 Compliant Hood Cleaning?</h3>
                <p className="text-green-100 mb-6">Get certified service that meets all Fort Lauderdale requirements</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/pricing/instant-quote/restaurant-hood-cleaning?src=resource_fort-lauderdale_checklist_end"
                    className="inline-block bg-white text-green-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Get Instant Quote
                  </Link>
                  <Link 
                    href={articleMeta.cta_targets.secondary}
                    className="inline-block bg-green-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-400 transition-colors"
                  >
                    Learn More About Fort Lauderdale Hood Cleaning
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
              "@id": "https://localbizzlist.com/resources/fort-lauderdale/nfpa-96-hood-cleaning-checklist"
            },
            "about": {
              "@type": "Thing",
              "name": "NFPA 96 Hood Cleaning Checklist"
            },
            "mentions": [
              {
                "@type": "Place",
                "name": "Fort Lauderdale, Florida"
              },
              {
                "@type": "Thing",
                "name": "NFPA 96"
              },
              {
                "@type": "Thing",
                "name": "Restaurant Fire Safety"
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
                "name": "Fort Lauderdale",
                "item": "https://localbizzlist.com/resources/fort-lauderdale"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "NFPA 96 Checklist",
                "item": "https://localbizzlist.com/resources/fort-lauderdale/nfpa-96-hood-cleaning-checklist"
              }
            ]
          })
        }}
      />
    </div>
  )
}
