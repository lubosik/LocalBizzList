import { Metadata } from 'next'
import { ResourceToC } from '@/components/resources/ResourceToC'
import { ResourceTable } from '@/components/resources/ResourceTable'
import { ResourceChecklist } from '@/components/resources/ResourceChecklist'
import { ResourceFAQ } from '@/components/resources/ResourceFAQ'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kitchen Exhaust Fan Problems & Quick Fixes in Miami | LocalBizzList',
  description: 'Complete troubleshooting guide for kitchen exhaust fan problems in Miami restaurants. Expert solutions for common issues, Miami-specific challenges, and when to call professionals.',
  keywords: 'kitchen exhaust fan problems Miami, exhaust fan troubleshooting, commercial exhaust fan repair Miami, kitchen exhaust fan maintenance, exhaust fan problems and fixes',
  openGraph: {
    title: 'Kitchen Exhaust Fan Problems & Quick Fixes in Miami',
    description: 'Complete troubleshooting guide for kitchen exhaust fan problems in Miami restaurants. Expert solutions for common issues, Miami-specific challenges, and when to call professionals.',
    type: 'article',
    publishedTime: '2025-01-07T00:00:00.000Z',
    modifiedTime: '2025-01-07T00:00:00.000Z',
    authors: ['LocalBizzList'],
  },
}

const articleMeta = {
  h1: 'Kitchen Exhaust Fan Problems & Quick Fixes in Miami',
  city: 'Miami' as const,
  target_keywords: [
    'kitchen exhaust fan problems Miami',
    'exhaust fan troubleshooting',
    'commercial exhaust fan repair Miami',
    'kitchen exhaust fan maintenance',
    'exhaust fan problems and fixes',
    'restaurant exhaust fan problems',
    'commercial kitchen exhaust fan',
    'exhaust fan repair Miami',
    'kitchen exhaust fan noise',
    'exhaust fan not working',
    'exhaust fan motor problems',
    'kitchen exhaust fan maintenance Miami',
    'commercial exhaust fan troubleshooting',
    'restaurant exhaust fan repair',
    'exhaust fan Miami FL'
  ],
  reading_time: '11 min read',
  summary: 'Comprehensive troubleshooting guide for kitchen exhaust fan problems in Miami restaurants. Learn to identify common issues, apply quick fixes, and know when to call professionals for Miami-specific challenges.',
  hero_image: '/images/resources/miami-exhaust-fan-problems.jpg',
  hero_image_alt: 'Professional technician troubleshooting commercial kitchen exhaust fan in Miami restaurant',
  last_updated: 'January 7, 2025',
  toc: true,
  faqs: [
    {
      question: 'What are the most common kitchen exhaust fan problems in Miami restaurants?',
      answer: 'The most common problems include motor failure due to humidity, excessive noise from worn bearings, reduced airflow from grease buildup, electrical issues from salt air corrosion, and fan blade imbalance. Miami\'s high humidity and salt air accelerate these issues compared to other climates.',
      schema_eligible: true
    },
    {
      question: 'How does Miami\'s climate affect kitchen exhaust fan performance?',
      answer: 'Miami\'s high humidity accelerates motor corrosion and electrical failures, salt air causes metal corrosion and bearing wear, tropical conditions affect lubrication effectiveness, and year-round warm temperatures increase motor stress. These factors often require more frequent maintenance than other climates.',
      schema_eligible: true
    },
    {
      question: 'When should Miami restaurants call professionals for exhaust fan repair?',
      answer: 'Call professionals for electrical issues, motor replacement, major bearing problems, structural damage, or when DIY fixes don\'t resolve the issue. Miami\'s climate conditions often require specialized knowledge and tools for proper repair and maintenance.',
      schema_eligible: true
    },
    {
      question: 'What are the signs of exhaust fan motor failure in Miami restaurants?',
      answer: 'Signs include unusual noises (grinding, squealing), reduced airflow, excessive vibration, motor overheating, electrical issues, and complete failure to start. Miami\'s humidity often causes these symptoms to develop faster than in drier climates.',
      schema_eligible: true
    },
    {
      question: 'How much does exhaust fan repair cost in Miami?',
      answer: 'Exhaust fan repair costs in Miami typically range from $200-800 for minor repairs, $500-1,500 for motor replacement, and $1,000-3,000 for complete fan replacement. Costs vary based on fan size, accessibility, and Miami-specific factors like corrosion damage.',
      schema_eligible: true
    },
    {
      question: 'Can Miami restaurants perform DIY exhaust fan maintenance?',
      answer: 'Yes, restaurants can perform basic maintenance like cleaning fan blades, checking for loose connections, and lubricating accessible parts. However, electrical work, motor replacement, and major repairs should be left to certified professionals due to safety and compliance requirements.',
      schema_eligible: true
    },
    {
      question: 'How often should Miami restaurants maintain their exhaust fans?',
      answer: 'Miami restaurants should inspect exhaust fans monthly, clean fan blades quarterly, lubricate bearings semi-annually, and have professional maintenance annually. The humid climate often requires more frequent maintenance than manufacturer recommendations.',
      schema_eligible: true
    },
    {
      question: 'What causes excessive exhaust fan noise in Miami restaurants?',
      answer: 'Common causes include worn bearings from humidity exposure, loose fan blades, motor misalignment, grease buildup on blades, and corrosion damage. Miami\'s salt air accelerates bearing wear and metal corrosion, leading to increased noise levels.',
      schema_eligible: true
    },
    {
      question: 'How can Miami restaurants prevent exhaust fan problems?',
      answer: 'Prevention includes regular cleaning to remove grease buildup, proper lubrication of moving parts, electrical connection maintenance, corrosion protection, and professional inspections. Miami\'s climate requires more aggressive preventive maintenance than other regions.',
      schema_eligible: true
    },
    {
      question: 'What are the safety considerations for exhaust fan repair in Miami?',
      answer: 'Safety considerations include electrical safety, proper lockout procedures, fall protection for elevated fans, chemical safety for cleaning products, and compliance with Miami-Dade County regulations. Professional repair ensures all safety protocols are followed.',
      schema_eligible: true
    }
  ],
  cta_targets: {
    primary: '/pricing/instant-quote?src=resource_miami_problems_mid',
    secondary: '/locations/miami/hood-cleaning/'
  },
  schema_types: ['Article', 'FAQPage', 'BreadcrumbList'],
}

const headings = [
  { id: 'overview', text: 'Exhaust Fan Problems Overview', level: 2 },
  { id: 'miami-challenges', text: 'Miami-Specific Challenges', level: 2 },
  { id: 'common-problems', text: 'Common Exhaust Fan Problems', level: 2 },
  { id: 'problem-solutions', text: 'Problem & Solution Guide', level: 2 },
  { id: 'coastal-corrosion', text: 'Coastal Corrosion Prevention', level: 2 },
  { id: 'emergency-vs-scheduled', text: 'Emergency vs. Scheduled Repair', level: 2 },
  { id: 'diy-maintenance', text: 'DIY Maintenance Checklist', level: 2 },
  { id: 'when-to-call-professionals', text: 'When to Call Professionals', level: 2 },
  { id: 'miami-costs', text: 'Exhaust Fan Repair Costs in Miami', level: 2 },
  { id: 'faqs', text: 'Frequently Asked Questions', level: 2 }
]

const commonProblems = [
  ['Problem', 'Symptoms', 'Common Causes', 'Quick Fix', 'Professional Needed'],
  ['Motor Failure', 'No operation, grinding noise', 'Humidity, wear, electrical issues', 'Check power, reset breaker', 'Yes - motor replacement'],
  ['Excessive Noise', 'Loud grinding, squealing', 'Worn bearings, loose blades', 'Tighten bolts, lubricate', 'Yes - bearing replacement'],
  ['Reduced Airflow', 'Weak suction, poor ventilation', 'Grease buildup, blocked ducts', 'Clean fan blades', 'Yes - duct cleaning'],
  ['Electrical Issues', 'Intermittent operation', 'Corrosion, loose connections', 'Check connections', 'Yes - electrical repair'],
  ['Fan Imbalance', 'Excessive vibration', 'Bent blades, debris buildup', 'Clean and balance blades', 'Yes - blade replacement'],
  ['Bearing Wear', 'Grinding noise, rough operation', 'Lack of lubrication, corrosion', 'Lubricate bearings', 'Yes - bearing replacement']
]

const diyMaintenanceChecklist = [
  { id: 'visual-inspection', text: 'Conduct visual inspection of fan blades and housing', checked: false },
  { id: 'check-noise', text: 'Listen for unusual noises during operation', checked: false },
  { id: 'test-airflow', text: 'Test airflow strength and consistency', checked: false },
  { id: 'clean-blades', text: 'Clean fan blades and remove grease buildup', checked: false },
  { id: 'check-connections', text: 'Inspect electrical connections for corrosion', checked: false },
  { id: 'lubricate-bearings', text: 'Lubricate accessible bearings and moving parts', checked: false },
  { id: 'tighten-bolts', text: 'Check and tighten all mounting bolts', checked: false },
  { id: 'test-switches', text: 'Test fan switches and controls', checked: false },
  { id: 'check-filters', text: 'Inspect and clean or replace filters', checked: false },
  { id: 'document-findings', text: 'Document all findings and maintenance performed', checked: false }
]

export default function MiamiExhaustFanProblemsPage() {
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
            <span className="text-gray-900">Exhaust Fan Problems</span>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Exhaust Fan Problems Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Kitchen exhaust fans are critical components of restaurant ventilation systems, responsible for removing heat, smoke, and grease from cooking areas. In Miami restaurants, these systems face unique challenges due to the tropical climate, high humidity, and salt air exposure.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Understanding common exhaust fan problems and their solutions helps Miami restaurant owners maintain optimal ventilation, ensure fire safety compliance, and minimize costly emergency repairs. This guide provides practical troubleshooting steps and professional guidance for Miami-specific conditions.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    From simple maintenance tasks to complex repairs, this comprehensive resource helps you identify issues early, apply appropriate fixes, and know when to call professional technicians for Miami's challenging environment.
                  </p>
                </div>
              </section>

              {/* Miami Challenges */}
              <section id="miami-challenges" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Miami-Specific Challenges</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Miami's tropical climate presents unique challenges for kitchen exhaust fan systems. Understanding these environmental factors helps restaurant owners implement appropriate maintenance strategies and prevent premature equipment failure.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-4">High Humidity Effects</h3>
                      <ul className="list-disc list-inside space-y-2 text-blue-800">
                        <li>Accelerates motor corrosion and electrical failures</li>
                        <li>Promotes mold and mildew growth</li>
                        <li>Reduces lubrication effectiveness</li>
                        <li>Causes condensation in electrical components</li>
                        <li>Increases bearing wear and failure rates</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-orange-900 mb-4">Salt Air Corrosion</h3>
                      <ul className="list-disc list-inside space-y-2 text-orange-800">
                        <li>Rapid metal corrosion and rust formation</li>
                        <li>Electrical connection degradation</li>
                        <li>Bearing and motor component damage</li>
                        <li>Reduced equipment lifespan</li>
                        <li>Increased maintenance requirements</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
                    <h3 className="text-xl font-semibold text-yellow-900 mb-4">Tropical Climate Impact</h3>
                    <p className="text-yellow-800">
                      Miami's year-round warm temperatures and high humidity create an environment where exhaust fan components degrade faster than in other climates. 
                      This requires more frequent maintenance, specialized cleaning products, and proactive replacement schedules.
                    </p>
                  </div>
                </div>
              </section>

              {/* Common Problems */}
              <section id="common-problems" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Exhaust Fan Problems</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Restaurant exhaust fans can experience various issues, from simple maintenance needs to complex mechanical failures. Understanding these problems helps identify solutions and determine when professional service is required.
                  </p>
                  <ResourceTable 
                    headers={commonProblems[0]} 
                    rows={commonProblems.slice(1)} 
                    caption="Common exhaust fan problems with symptoms, causes, and solutions"
                  />
                </div>
              </section>

              {/* Problem Solutions */}
              <section id="problem-solutions" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Problem & Solution Guide</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    This detailed guide provides step-by-step solutions for common exhaust fan problems. Follow these procedures carefully and always prioritize safety when working with electrical equipment.
                  </p>
                  <div className="space-y-8">
                    <div className="border-l-4 border-green-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Motor Failure Solutions</h3>
                      <div className="text-gray-700">
                        <p className="mb-2"><strong>Quick Checks:</strong></p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Verify power supply and circuit breaker status</li>
                          <li>Check for loose electrical connections</li>
                          <li>Test motor with multimeter for continuity</li>
                          <li>Inspect for visible damage or corrosion</li>
                        </ul>
                        <p className="mt-4"><strong>Professional Service:</strong> Motor replacement, electrical repairs, and system diagnostics</p>
                      </div>
                    </div>
                    <div className="border-l-4 border-green-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Noise Reduction Solutions</h3>
                      <div className="text-gray-700">
                        <p className="mb-2"><strong>Quick Fixes:</strong></p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Clean fan blades and remove debris</li>
                          <li>Tighten loose mounting bolts and brackets</li>
                          <li>Lubricate accessible bearings</li>
                          <li>Check for fan blade imbalance</li>
                        </ul>
                        <p className="mt-4"><strong>Professional Service:</strong> Bearing replacement, blade balancing, and motor alignment</p>
                      </div>
                    </div>
                    <div className="border-l-4 border-green-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Airflow Improvement Solutions</h3>
                      <div className="text-gray-700">
                        <p className="mb-2"><strong>Quick Fixes:</strong></p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Clean fan blades and housing interior</li>
                          <li>Remove grease buildup from ductwork</li>
                          <li>Check and clean air filters</li>
                          <li>Verify ductwork connections</li>
                        </ul>
                        <p className="mt-4"><strong>Professional Service:</strong> Duct cleaning, system balancing, and airflow testing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Mid-Article CTA */}
              <div className="my-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Need Professional Exhaust Fan Repair in Miami?</h3>
                <p className="text-blue-100 mb-6">Get expert service for complex exhaust fan problems and Miami-specific issues</p>
                <Link 
                  href={articleMeta.cta_targets.primary}
                  className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Instant Quote
                </Link>
              </div>

              {/* Coastal Corrosion */}
              <section id="coastal-corrosion" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Coastal Corrosion Prevention</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Miami's coastal location exposes exhaust fan systems to salt air, which accelerates corrosion and reduces equipment lifespan. Implementing proper corrosion prevention strategies is essential for maintaining system performance and safety.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Prevention Strategies</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Regular cleaning with corrosion-resistant products</li>
                        <li>Application of protective coatings and sealants</li>
                        <li>Use of stainless steel components where possible</li>
                        <li>Proper ventilation to reduce humidity exposure</li>
                        <li>Regular inspection for early corrosion detection</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Maintenance Schedule</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Monthly visual inspection for corrosion</li>
                        <li>Quarterly cleaning with anti-corrosion products</li>
                        <li>Semi-annual protective coating application</li>
                        <li>Annual professional corrosion assessment</li>
                        <li>Immediate repair of any corrosion damage</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Emergency vs Scheduled */}
              <section id="emergency-vs-scheduled" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency vs. Scheduled Repair</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Understanding the difference between emergency and scheduled repairs helps Miami restaurant owners plan maintenance budgets and respond appropriately to different types of exhaust fan problems.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-red-900 mb-4">Emergency Repairs</h3>
                      <ul className="list-disc list-inside space-y-2 text-red-800">
                        <li>Complete fan failure during service hours</li>
                        <li>Electrical hazards or safety concerns</li>
                        <li>Fire suppression system activation</li>
                        <li>Structural damage to fan housing</li>
                        <li>Smoke or fire risk situations</li>
                      </ul>
                      <p className="text-red-800 mt-4 font-medium">Cost: $300-800+ (premium rates)</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-green-900 mb-4">Scheduled Repairs</h3>
                      <ul className="list-disc list-inside space-y-2 text-green-800">
                        <li>Routine maintenance and inspections</li>
                        <li>Preventive component replacement</li>
                        <li>Performance optimization</li>
                        <li>Compliance-related maintenance</li>
                        <li>Planned system upgrades</li>
                      </ul>
                      <p className="text-green-800 mt-4 font-medium">Cost: $200-500 (standard rates)</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* DIY Maintenance */}
              <section id="diy-maintenance" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">DIY Maintenance Checklist</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Regular maintenance helps prevent exhaust fan problems and extends equipment lifespan. Use this checklist for routine maintenance tasks that can be performed safely by restaurant staff.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-yellow-900 mb-4">Safety First</h3>
                    <p className="text-yellow-800">
                      Always turn off power and follow lockout procedures before performing any maintenance. 
                      Use appropriate safety equipment and never attempt electrical repairs unless qualified.
                    </p>
                  </div>
                  <ResourceChecklist 
                    items={diyMaintenanceChecklist}
                    title="Monthly DIY Maintenance Checklist"
                  />
                </div>
              </section>

              {/* When to Call Professionals */}
              <section id="when-to-call-professionals" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Call Professionals</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    While many maintenance tasks can be performed in-house, certain problems require professional expertise, specialized tools, and compliance with safety regulations.
                  </p>
                  <div className="space-y-6">
                    <div className="border-l-4 border-red-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Electrical Issues</h3>
                      <p className="text-gray-700">Any electrical problems, wiring issues, or motor electrical failures require licensed electricians. Miami's humidity makes electrical work particularly dangerous.</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Motor Replacement</h3>
                      <p className="text-gray-700">Motor replacement requires specialized knowledge, proper tools, and compliance with safety regulations. Professional service ensures proper installation and warranty coverage.</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Structural Damage</h3>
                      <p className="text-gray-700">Any damage to fan housing, mounting brackets, or ductwork requires professional assessment and repair to ensure safety and compliance.</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Complex Diagnostics</h3>
                      <p className="text-gray-700">When simple fixes don't resolve problems, professional diagnostics identify root causes and prevent recurring issues.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Miami Costs */}
              <section id="miami-costs" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Exhaust Fan Repair Costs in Miami</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Understanding repair costs helps Miami restaurant owners budget for maintenance and make informed decisions about repair vs. replacement options.
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Typical Repair Costs</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li><strong>Minor Repairs:</strong> $200-400 (cleaning, lubrication, adjustments)</li>
                      <li><strong>Motor Replacement:</strong> $500-1,500 (depending on motor size and accessibility)</li>
                      <li><strong>Bearing Replacement:</strong> $300-800 (labor and parts)</li>
                      <li><strong>Electrical Repairs:</strong> $400-1,200 (wiring, connections, controls)</li>
                      <li><strong>Complete Fan Replacement:</strong> $1,000-3,000 (fan, motor, installation)</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Miami-Specific Cost Factors</h3>
                    <ul className="list-disc list-inside space-y-2 text-blue-800">
                      <li>Corrosion damage often increases repair complexity</li>
                      <li>High humidity may require specialized components</li>
                      <li>Salt air exposure affects component pricing</li>
                      <li>Emergency service rates apply during peak hours</li>
                      <li>Compliance requirements may add to costs</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <ResourceFAQ faqs={articleMeta.faqs} />

              {/* Final CTA */}
              <div className="my-12 bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Need Professional Exhaust Fan Service in Miami?</h3>
                <p className="text-green-100 mb-6">Get expert repair and maintenance for your restaurant's exhaust fan system</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/pricing/instant-quote?src=resource_miami_problems_end"
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
              "@id": "https://localbizzlist.com/resources/miami/exhaust-fan-problems-and-fixes"
            },
            "about": {
              "@type": "Thing",
              "name": "Kitchen Exhaust Fan Troubleshooting"
            },
            "mentions": [
              {
                "@type": "Place",
                "name": "Miami, Florida"
              },
              {
                "@type": "Thing",
                "name": "Exhaust Fan Repair"
              },
              {
                "@type": "Thing",
                "name": "Restaurant Maintenance"
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
                "name": "Exhaust Fan Problems",
                "item": "https://localbizzlist.com/resources/miami/exhaust-fan-problems-and-fixes"
              }
            ]
          })
        }}
      />
    </div>
  )
}
