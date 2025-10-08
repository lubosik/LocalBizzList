import { Metadata } from 'next'
import { ResourceToC } from '@/components/resources/ResourceToC'
import { ResourceTable } from '@/components/resources/ResourceTable'
import { ResourceChecklist } from '@/components/resources/ResourceChecklist'
import { ResourceFAQ } from '@/components/resources/ResourceFAQ'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NFPA 96 Hood Cleaning Checklist for Miami Restaurants | LocalBizzList',
  description: 'Complete NFPA 96 compliance checklist for Miami restaurant hood cleaning. Expert guide to fire safety requirements, inspection procedures, and Miami-Dade regulations.',
  keywords: 'NFPA 96 checklist Miami, restaurant hood cleaning checklist, commercial hood cleaning Miami, kitchen exhaust cleaning checklist, NFPA 96 compliance Miami',
  openGraph: {
    title: 'NFPA 96 Hood Cleaning Checklist for Miami Restaurants',
    description: 'Complete NFPA 96 compliance checklist for Miami restaurant hood cleaning. Expert guide to fire safety requirements, inspection procedures, and Miami-Dade regulations.',
    type: 'article',
    publishedTime: '2025-01-07T00:00:00.000Z',
    modifiedTime: '2025-01-07T00:00:00.000Z',
    authors: ['LocalBizzList'],
  },
}

const articleMeta = {
  h1: 'NFPA 96 Hood Cleaning Checklist for Miami Restaurants',
  city: 'Miami' as const,
  target_keywords: [
    'NFPA 96 checklist Miami',
    'restaurant hood cleaning checklist',
    'commercial hood cleaning checklist',
    'kitchen exhaust cleaning checklist',
    'NFPA 96 compliance Miami',
    'hood cleaning inspection checklist',
    'restaurant hood cleaning Miami',
    'commercial hood cleaning Miami',
    'kitchen exhaust cleaning Miami',
    'NFPA 96 Miami requirements',
    'hood cleaning safety checklist',
    'restaurant fire safety checklist',
    'commercial kitchen cleaning checklist',
    'exhaust system cleaning checklist',
    'hood cleaning Miami FL'
  ],
  reading_time: '12 min read',
  summary: 'Complete NFPA 96 compliance checklist specifically designed for Miami restaurants. This comprehensive guide covers fire safety requirements, inspection procedures, and Miami-Dade County regulations to ensure your commercial kitchen meets all safety standards.',
  hero_image: '/images/resources/miami-nfpa-96-checklist.jpg',
  hero_image_alt: 'Professional hood cleaning technician inspecting commercial kitchen exhaust system in Miami restaurant',
  last_updated: 'January 7, 2025',
  toc: true,
  faqs: [
    {
      question: 'What is NFPA 96 and why is it important for Miami restaurants?',
      answer: 'NFPA 96 is the National Fire Protection Association standard for ventilation control and fire protection of commercial cooking operations. It\'s crucial for Miami restaurants because it establishes fire safety requirements for hood cleaning, exhaust systems, and fire suppression. Miami-Dade County enforces these standards strictly, and non-compliance can result in fines, closure orders, or increased insurance costs.',
      schema_eligible: true
    },
    {
      question: 'How often should Miami restaurants clean their hood systems according to NFPA 96?',
      answer: 'NFPA 96 requires different cleaning frequencies based on cooking volume. High-volume cooking operations (like busy Miami restaurants) must clean hoods monthly, while moderate-volume operations clean quarterly. Low-volume operations clean semi-annually. Miami\'s humid climate and high cooking volumes often require more frequent cleaning than the minimum standards.',
      schema_eligible: true
    },
    {
      question: 'What are the specific Miami-Dade County requirements for hood cleaning?',
      answer: 'Miami-Dade County follows NFPA 96 standards but adds local requirements including certified technician documentation, specific cleaning chemical approvals, and enhanced record-keeping. All hood cleaning must be performed by certified professionals, and restaurants must maintain detailed cleaning logs for fire department inspections.',
      schema_eligible: true
    },
    {
      question: 'What should be included in a complete NFPA 96 hood cleaning checklist?',
      answer: 'A complete checklist includes pre-cleaning inspection, grease removal from all surfaces, exhaust fan cleaning, ductwork cleaning, fire suppression system inspection, post-cleaning verification, documentation completion, and safety equipment checks. Each step must be documented with photos and technician signatures.',
      schema_eligible: true
    },
    {
      question: 'How much does NFPA 96 compliant hood cleaning cost in Miami?',
      answer: 'NFPA 96 compliant hood cleaning in Miami typically costs $200-800 per hood, depending on size, grease accumulation, and system complexity. High-volume restaurants with multiple hoods may pay $1,500-3,000 for complete service. Costs vary based on accessibility, cleaning frequency, and additional services like fire suppression testing.',
      schema_eligible: true
    },
    {
      question: 'What happens if a Miami restaurant fails NFPA 96 compliance inspection?',
      answer: 'Non-compliance can result in immediate closure orders, fines up to $1,000 per violation, increased insurance premiums, and potential liability issues. Miami-Dade Fire Rescue conducts regular inspections and can shut down operations until violations are corrected. Repeat violations may result in permanent closure.',
      schema_eligible: true
    },
    {
      question: 'Can Miami restaurants perform their own hood cleaning to meet NFPA 96 standards?',
      answer: 'While NFPA 96 allows some self-cleaning for low-volume operations, Miami-Dade County requires certified professionals for most commercial establishments. Self-cleaning is only permitted for very small operations with proper documentation and certification. Most Miami restaurants must use licensed hood cleaning companies.',
      schema_eligible: true
    },
    {
      question: 'What documentation is required for NFPA 96 compliance in Miami?',
      answer: 'Required documentation includes cleaning certificates, before/after photos, technician certifications, cleaning chemical safety data sheets, fire suppression system test reports, and detailed cleaning logs. All records must be maintained for at least three years and be available for fire department inspection.',
      schema_eligible: true
    },
    {
      question: 'How does Miami\'s climate affect NFPA 96 hood cleaning requirements?',
      answer: 'Miami\'s high humidity and salt air accelerate grease accumulation and corrosion, often requiring more frequent cleaning than NFPA 96 minimums. The tropical climate also affects cleaning chemical effectiveness and requires specialized products. Many Miami restaurants clean monthly regardless of cooking volume due to environmental factors.',
      schema_eligible: true
    },
    {
      question: 'What are the penalties for NFPA 96 violations in Miami restaurants?',
      answer: 'Penalties include immediate closure orders for serious violations, fines ranging from $100-1,000 per violation, mandatory re-inspection fees, increased insurance costs, and potential criminal charges for willful violations. Repeat offenders face escalating penalties and may lose business licenses.',
      schema_eligible: true
    }
  ],
  cta_targets: {
    primary: '/pricing/instant-quote/restaurant-hood-cleaning?src=resource_miami_nfpa-96-checklist_mid',
    secondary: '/locations/miami/hood-cleaning/'
  },
  schema_types: ['Article', 'FAQPage', 'BreadcrumbList'],
}

const headings = [
  { id: 'overview', text: 'NFPA 96 Overview for Miami Restaurants', level: 2 },
  { id: 'miami-requirements', text: 'Miami-Dade County Specific Requirements', level: 2 },
  { id: 'pre-cleaning', text: 'Pre-Cleaning Inspection Checklist', level: 2 },
  { id: 'cleaning-process', text: 'NFPA 96 Cleaning Process', level: 2 },
  { id: 'post-cleaning', text: 'Post-Cleaning Verification', level: 2 },
  { id: 'documentation', text: 'Required Documentation', level: 2 },
  { id: 'compliance-checklist', text: 'Complete Compliance Checklist', level: 2 },
  { id: 'miami-climate', text: 'Miami Climate Considerations', level: 2 },
  { id: 'costs', text: 'NFPA 96 Hood Cleaning Costs in Miami', level: 2 },
  { id: 'faqs', text: 'Frequently Asked Questions', level: 2 }
]

const usageClasses = [
  ['Usage Class', 'Cooking Volume', 'Cleaning Frequency', 'Miami Recommendation'],
  ['Class A', 'High-volume cooking (24+ hours/week)', 'Monthly', 'Monthly (due to humidity)'],
  ['Class B', 'Moderate-volume cooking (12-24 hours/week)', 'Quarterly', 'Bi-monthly'],
  ['Class C', 'Low-volume cooking (under 12 hours/week)', 'Semi-annually', 'Quarterly'],
  ['Class D', 'Very low-volume cooking (under 2 hours/week)', 'Annually', 'Semi-annually']
]

const complianceChecklist = [
  { id: 'pre-inspection', text: 'Conduct pre-cleaning inspection and document findings', checked: false },
  { id: 'safety-equipment', text: 'Verify all safety equipment is functional and accessible', checked: false },
  { id: 'fire-suppression', text: 'Test fire suppression system before cleaning begins', checked: false },
  { id: 'grease-removal', text: 'Remove all grease from hood interior surfaces', checked: false },
  { id: 'exhaust-fan', text: 'Clean exhaust fan blades and housing completely', checked: false },
  { id: 'ductwork', text: 'Clean all accessible ductwork sections', checked: false },
  { id: 'filters', text: 'Clean or replace all grease filters', checked: false },
  { id: 'exterior-surfaces', text: 'Clean hood exterior and surrounding areas', checked: false },
  { id: 'drain-cleaning', text: 'Clean and sanitize grease drains and traps', checked: false },
  { id: 'post-inspection', text: 'Conduct post-cleaning inspection and verification', checked: false },
  { id: 'documentation', text: 'Complete all required documentation and certificates', checked: false },
  { id: 'photos', text: 'Take before and after photos for compliance records', checked: false },
  { id: 'technician-signature', text: 'Obtain certified technician signature on all documents', checked: false },
  { id: 'fire-department', text: 'Submit compliance report to Miami-Dade Fire Rescue', checked: false },
  { id: 'schedule-next', text: 'Schedule next cleaning based on usage class requirements', checked: false }
]

export default function MiamiNFPA96ChecklistPage() {
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
            <Link href="/resources/miami" className="hover:text-gray-700">Miami</Link>
            <span>/</span>
            <span className="text-gray-900">NFPA 96 Hood Cleaning Checklist</span>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">NFPA 96 Overview for Miami Restaurants</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The National Fire Protection Association (NFPA) 96 standard establishes comprehensive fire safety requirements for commercial cooking operations. For Miami restaurants, compliance with NFPA 96 isn't just a recommendation—it's a legal requirement enforced by Miami-Dade County Fire Rescue.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Miami's unique climate presents additional challenges for hood cleaning compliance. The high humidity, salt air, and tropical conditions accelerate grease accumulation and corrosion, often requiring more frequent cleaning than the minimum NFPA 96 standards. Understanding these local factors is crucial for maintaining compliance and ensuring fire safety.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    This comprehensive checklist provides Miami restaurant owners and managers with everything needed to ensure NFPA 96 compliance, from pre-cleaning inspections to post-service documentation. Each step is designed to meet both national standards and Miami-Dade County's specific requirements.
                  </p>
                </div>
              </section>

              {/* Miami Requirements */}
              <section id="miami-requirements" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Miami-Dade County Specific Requirements</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Miami-Dade County enforces NFPA 96 standards with additional local requirements that restaurant owners must understand. These requirements address the unique challenges of operating commercial kitchens in South Florida's tropical climate.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Key Miami-Dade Requirements</h3>
                    <ul className="list-disc list-inside space-y-2 text-blue-800">
                      <li>All hood cleaning must be performed by certified technicians</li>
                      <li>Enhanced documentation requirements including before/after photos</li>
                      <li>Specific cleaning chemical approvals for tropical climate</li>
                      <li>Mandatory fire suppression system testing with each cleaning</li>
                      <li>Three-year record retention for all compliance documentation</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The county's fire rescue department conducts regular inspections and can issue immediate closure orders for non-compliance. Understanding these requirements helps ensure your restaurant maintains continuous operation while meeting all safety standards.
                  </p>
                </div>
              </section>

              {/* Usage Classes Table */}
              <section className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">NFPA 96 Usage Classes and Cleaning Frequencies</h3>
                <ResourceTable 
                  headers={usageClasses[0]} 
                  rows={usageClasses.slice(1)} 
                  caption="Cleaning frequency requirements based on cooking volume and Miami climate considerations"
                />
              </section>

              {/* Pre-Cleaning */}
              <section id="pre-cleaning" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Pre-Cleaning Inspection Checklist</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Before any cleaning begins, a thorough inspection must be conducted to assess the current condition of the hood system and identify any potential safety hazards. This inspection serves as the baseline for measuring cleaning effectiveness and ensures all safety protocols are followed.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-yellow-900 mb-4">Pre-Cleaning Safety Requirements</h3>
                    <ul className="list-disc list-inside space-y-2 text-yellow-800">
                      <li>Verify fire suppression system is operational</li>
                      <li>Ensure all safety equipment is accessible</li>
                      <li>Check for gas leaks or electrical hazards</li>
                      <li>Confirm proper ventilation during cleaning</li>
                      <li>Document existing grease accumulation levels</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Mid-Article CTA */}
              <div className="my-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Need Professional Hood Cleaning in Miami?</h3>
                <p className="text-blue-100 mb-6">Get an instant quote for NFPA 96 compliant hood cleaning services</p>
                <Link 
                  href={articleMeta.cta_targets.primary}
                  className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Instant Quote
                </Link>
              </div>

              {/* Cleaning Process */}
              <section id="cleaning-process" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">NFPA 96 Cleaning Process</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The NFPA 96 cleaning process follows a systematic approach to ensure complete grease removal and fire safety compliance. Each step must be performed thoroughly and documented for regulatory compliance.
                  </p>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 1: Hood Interior Cleaning</h3>
                      <p className="text-gray-700">Remove all grease from hood interior surfaces using approved degreasing agents. Pay special attention to corners, seams, and hard-to-reach areas where grease accumulates.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 2: Exhaust Fan Maintenance</h3>
                      <p className="text-gray-700">Clean exhaust fan blades, housing, and motor housing. Check for proper operation and lubricate moving parts as needed.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 3: Ductwork Cleaning</h3>
                      <p className="text-gray-700">Clean all accessible ductwork sections, removing grease buildup that could pose fire hazards. Use appropriate cleaning tools for different duct configurations.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 4: Filter Maintenance</h3>
                      <p className="text-gray-700">Clean or replace all grease filters, ensuring proper fit and function. Document filter condition and replacement dates.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Post-Cleaning */}
              <section id="post-cleaning" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Post-Cleaning Verification</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    After cleaning is complete, a thorough verification process ensures all NFPA 96 requirements have been met. This step is crucial for compliance documentation and fire safety assurance.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">Verification Checklist</h3>
                    <ul className="list-disc list-inside space-y-2 text-green-800">
                      <li>Visual inspection confirms complete grease removal</li>
                      <li>All surfaces are clean and dry</li>
                      <li>Fire suppression system is operational</li>
                      <li>Exhaust fan operates properly</li>
                      <li>All safety equipment is in place</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Documentation */}
              <section id="documentation" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documentation</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Proper documentation is essential for NFPA 96 compliance and must be maintained for at least three years. Miami-Dade County requires specific documentation formats and content.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Required Documents</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Cleaning certificate</li>
                        <li>Before/after photos</li>
                        <li>Technician certification</li>
                        <li>Chemical safety data sheets</li>
                        <li>Fire suppression test report</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Documentation Requirements</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Technician signature and certification number</li>
                        <li>Date and time of cleaning</li>
                        <li>Detailed cleaning procedures used</li>
                        <li>Equipment and chemicals used</li>
                        <li>Next scheduled cleaning date</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Compliance Checklist */}
              <section id="compliance-checklist" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Compliance Checklist</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Use this comprehensive checklist to ensure complete NFPA 96 compliance for your Miami restaurant. Each item must be completed and documented for regulatory compliance.
                  </p>
                  <ResourceChecklist 
                    items={complianceChecklist}
                    title="NFPA 96 Compliance Checklist"
                  />
                </div>
              </section>

              {/* Miami Climate */}
              <section id="miami-climate" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Miami Climate Considerations</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Miami's tropical climate presents unique challenges for hood cleaning compliance. Understanding these environmental factors helps ensure proper maintenance and compliance.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-orange-900 mb-4">High Humidity</h3>
                      <p className="text-orange-800">Accelerates grease accumulation and requires more frequent cleaning than minimum standards.</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-4">Salt Air</h3>
                      <p className="text-blue-800">Causes corrosion and requires specialized cleaning products and protective coatings.</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-green-900 mb-4">Tropical Conditions</h3>
                      <p className="text-green-800">Affects cleaning chemical effectiveness and requires climate-specific products.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Costs */}
              <section id="costs" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">NFPA 96 Hood Cleaning Costs in Miami</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Understanding the costs associated with NFPA 96 compliant hood cleaning helps Miami restaurant owners budget appropriately and ensure compliance without unexpected expenses.
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Typical Cost Ranges</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li><strong>Single Hood:</strong> $200-400 per cleaning</li>
                      <li><strong>Multiple Hoods:</strong> $150-300 per hood</li>
                      <li><strong>Complete System:</strong> $800-1,500 per service</li>
                      <li><strong>High-Volume Restaurants:</strong> $1,500-3,000 per service</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Costs vary based on hood size, grease accumulation, accessibility, and additional services like fire suppression testing. Regular cleaning often reduces costs by preventing excessive grease buildup.
                  </p>
                </div>
              </section>

              {/* FAQs */}
              <ResourceFAQ faqs={articleMeta.faqs} />

              {/* Final CTA */}
              <div className="my-12 bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Ensure NFPA 96 Compliance?</h3>
                <p className="text-green-100 mb-6">Get professional hood cleaning services that meet all Miami-Dade County requirements</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/pricing/instant-quote/restaurant-hood-cleaning?src=resource_miami_nfpa-96-checklist_end"
                    className="inline-block bg-white text-green-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Get Instant Quote
                  </Link>
                  <Link 
                    href={articleMeta.cta_targets.secondary}
                    className="inline-block bg-green-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-400 transition-colors"
                  >
                    Learn More About Miami Hood Cleaning
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
              "@id": "https://localbizzlist.com/resources/miami/nfpa-96-hood-cleaning-checklist"
            },
            "about": {
              "@type": "Thing",
              "name": "NFPA 96 Hood Cleaning Compliance"
            },
            "mentions": [
              {
                "@type": "Place",
                "name": "Miami, Florida"
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
                "name": "Miami",
                "item": "https://localbizzlist.com/resources/miami"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "NFPA 96 Hood Cleaning Checklist",
                "item": "https://localbizzlist.com/resources/miami/nfpa-96-hood-cleaning-checklist"
              }
            ]
          })
        }}
      />
    </div>
  )
}
