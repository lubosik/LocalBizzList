import { Metadata } from 'next'
import { ResourceToC } from '@/components/resources/ResourceToC'
import { ResourceTable } from '@/components/resources/ResourceTable'
import { ResourceFAQ } from '@/components/resources/ResourceFAQ'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kitchen Exhaust Fan Problems & Quick Fixes in Boca Raton | LocalBizzList',
  description: 'Complete guide to kitchen exhaust fan problems and solutions in Boca Raton. Learn about coastal corrosion, common issues, DIY fixes, and when to call professionals.',
  keywords: 'kitchen exhaust fan problems Boca Raton, exhaust fan repair Boca Raton, commercial exhaust fan issues, kitchen fan troubleshooting Boca Raton, exhaust fan maintenance Boca Raton',
  openGraph: {
    title: 'Kitchen Exhaust Fan Problems & Quick Fixes in Boca Raton',
    description: 'Complete guide to kitchen exhaust fan problems and solutions in Boca Raton. Learn about coastal corrosion, common issues, DIY fixes, and when to call professionals.',
    type: 'article',
    publishedTime: '2025-01-07T00:00:00.000Z',
    modifiedTime: '2025-01-07T00:00:00.000Z',
    authors: ['LocalBizzList'],
  },
}

const articleMeta = {
  h1: 'Kitchen Exhaust Fan Problems & Quick Fixes in Boca Raton',
  city: 'Boca Raton' as const,
  category: 'Maintenance & Repairs',
  tags: ['Exhaust Fan', 'Maintenance', 'Repairs', 'Troubleshooting'],
  target_keywords: [
    'kitchen exhaust fan problems Boca Raton',
    'exhaust fan repair Boca Raton',
    'commercial exhaust fan issues',
    'kitchen fan troubleshooting Boca Raton',
    'exhaust fan maintenance Boca Raton',
    'restaurant exhaust fan problems',
    'kitchen exhaust fan Boca Raton',
    'exhaust fan repair service Boca Raton',
    'commercial kitchen fan repair',
    'exhaust fan troubleshooting guide',
    'kitchen fan repair Boca Raton',
    'restaurant exhaust fan repair',
    'commercial exhaust fan Boca Raton',
    'kitchen exhaust fan service',
    'exhaust fan problems solutions'
  ],
  reading_time: '12 min read',
  summary: 'Comprehensive guide to kitchen exhaust fan problems and solutions in Boca Raton. Learn about coastal corrosion issues, common problems, DIY fixes, and when to call professional repair services.',
  hero_image: '/images/resources/boca-raton-exhaust-fan-repair.jpg',
  hero_image_alt: 'Professional technician repairing kitchen exhaust fan system in Boca Raton restaurant',
  last_updated: 'January 7, 2025',
  toc: true,
  faqs: [
    {
      question: 'What are the most common kitchen exhaust fan problems in Boca Raton?',
      answer: 'The most common problems include coastal corrosion from salt air, motor failure, belt wear, grease buildup, electrical issues, and fan blade damage. Boca Raton\'s coastal location accelerates corrosion and requires specialized maintenance approaches.',
      schema_eligible: true
    },
    {
      question: 'How does Boca Raton\'s coastal climate affect exhaust fan systems?',
      answer: 'Boca Raton\'s coastal location exposes exhaust fans to salt air, which accelerates corrosion of metal components, electrical connections, and motor housings. This requires more frequent maintenance and specialized corrosion-resistant materials.',
      schema_eligible: true
    },
    {
      question: 'Can I fix kitchen exhaust fan problems myself in Boca Raton?',
      answer: 'Simple maintenance like cleaning filters and basic troubleshooting can be done DIY. However, electrical work, motor repairs, and complex mechanical issues should be handled by certified professionals due to safety regulations and Boca Raton\'s coastal corrosion challenges.',
      schema_eligible: true
    },
    {
      question: 'What are the signs that my Boca Raton exhaust fan needs professional repair?',
      answer: 'Signs include unusual noises, reduced airflow, electrical issues, visible corrosion, motor overheating, and frequent belt failures. Coastal corrosion in Boca Raton often requires professional assessment and specialized repair techniques.',
      schema_eligible: true
    },
    {
      question: 'How much does exhaust fan repair cost in Boca Raton?',
      answer: 'Repair costs vary: basic maintenance $150-300, motor replacement $400-800, electrical repairs $200-500, complete system repair $800-2,000. Coastal corrosion repairs may cost 20-30% more due to specialized materials and techniques required.',
      schema_eligible: true
    },
    {
      question: 'How often should Boca Raton restaurants maintain their exhaust fans?',
      answer: 'Due to coastal conditions, Boca Raton restaurants should inspect exhaust fans monthly, clean quarterly, and perform professional maintenance semi-annually. Coastal corrosion requires more frequent attention than inland locations.',
      schema_eligible: true
    },
    {
      question: 'What preventive measures can Boca Raton restaurants take for exhaust fans?',
      answer: 'Preventive measures include regular cleaning, corrosion-resistant coatings, proper ventilation, routine inspections, and professional maintenance schedules. Coastal restaurants should use marine-grade materials and specialized cleaning products.',
      schema_eligible: true
    },
    {
      question: 'Are there emergency exhaust fan repair services in Boca Raton?',
      answer: 'Yes, several Boca Raton companies offer 24/7 emergency exhaust fan repair services. Emergency repairs typically cost 50-100% more than scheduled service and may require specialized coastal corrosion repair techniques.',
      schema_eligible: true
    },
    {
      question: 'What causes exhaust fan motor failure in Boca Raton restaurants?',
      answer: 'Common causes include coastal corrosion, electrical issues, overheating, belt problems, and excessive grease buildup. Boca Raton\'s salt air accelerates motor corrosion and requires specialized maintenance approaches.',
      schema_eligible: true
    },
    {
      question: 'How can Boca Raton restaurants prevent exhaust fan problems?',
      answer: 'Prevention includes regular cleaning schedules, corrosion-resistant materials, proper installation, routine inspections, and professional maintenance. Coastal restaurants should invest in marine-grade components and specialized cleaning protocols.',
      schema_eligible: true
    }
  ],
  cta_targets: {
    primary: '/pricing/instant-quote/restaurant-hood-cleaning?src=resource_boca-raton_problems_mid',
    secondary: '/locations/boca-raton/hood-cleaning/'
  },
  schema_types: ['Article', 'FAQPage', 'BreadcrumbList'],
}

const headings = [
  { id: 'overview', text: 'Exhaust Fan Problems Overview', level: 2 },
  { id: 'coastal-challenges', text: 'Boca Raton Coastal Challenges', level: 2 },
  { id: 'common-problems', text: 'Common Exhaust Fan Problems', level: 2 },
  { id: 'problem-solutions', text: 'Problem & Solution Guide', level: 2 },
  { id: 'coastal-prevention', text: 'Coastal Corrosion Prevention', level: 2 },
  { id: 'emergency-vs-scheduled', text: 'Emergency vs Scheduled Repair', level: 2 },
  { id: 'diy-maintenance', text: 'DIY Maintenance Checklist', level: 2 },
  { id: 'when-to-call-pros', text: 'When to Call Professionals', level: 2 },
  { id: 'repair-costs', text: 'Boca Raton Repair Costs', level: 2 },
  { id: 'faqs', text: 'Frequently Asked Questions', level: 2 }
]

const commonProblems = [
  ['Problem', 'Symptoms', 'Causes', 'Boca Raton Considerations'],
  ['Motor Failure', 'Fan stops, unusual noise, overheating', 'Coastal corrosion, electrical issues, wear', 'Salt air accelerates motor corrosion'],
  ['Belt Problems', 'Squealing, slipping, visible wear', 'Age, tension, coastal conditions', 'Humidity affects belt performance'],
  ['Electrical Issues', 'Intermittent operation, sparks, tripped breakers', 'Corrosion, loose connections, moisture', 'Salt air corrodes electrical components'],
  ['Fan Blade Damage', 'Vibration, reduced airflow, visible damage', 'Grease buildup, foreign objects, corrosion', 'Coastal corrosion weakens blade materials'],
  ['Grease Accumulation', 'Reduced efficiency, fire risk, odors', 'Inadequate cleaning, high grease production', 'Coastal humidity affects grease behavior'],
  ['Corrosion Damage', 'Visible rust, component failure, leaks', 'Salt air exposure, moisture, age', 'Primary concern in coastal Boca Raton'],
  ['Bearing Wear', 'Grinding noise, vibration, reduced performance', 'Lack of lubrication, contamination, age', 'Salt air contaminates lubricants'],
  ['Control System Issues', 'Inconsistent operation, sensor problems', 'Electrical corrosion, programming errors', 'Coastal conditions affect electronics']
]

const problemSolutions = [
  ['Problem', 'DIY Solution', 'Professional Solution', 'Prevention'],
  ['Motor Failure', 'Check power supply, reset breakers', 'Motor replacement, electrical repair', 'Regular maintenance, corrosion protection'],
  ['Belt Problems', 'Adjust tension, replace if worn', 'Professional belt replacement, alignment', 'Regular inspection, proper tension'],
  ['Electrical Issues', 'Check connections, replace fuses', 'Electrical repair, corrosion treatment', 'Regular electrical inspection'],
  ['Fan Blade Damage', 'Clean blades, remove debris', 'Blade replacement, balancing', 'Regular cleaning, debris prevention'],
  ['Grease Accumulation', 'Clean accessible areas', 'Professional deep cleaning', 'Regular cleaning schedule'],
  ['Corrosion Damage', 'Clean visible corrosion', 'Corrosion treatment, component replacement', 'Corrosion-resistant materials'],
  ['Bearing Wear', 'Lubricate if accessible', 'Bearing replacement, alignment', 'Regular lubrication schedule'],
  ['Control System Issues', 'Reset system, check settings', 'Control system repair, programming', 'Regular system testing']
]

const diyChecklist = [
  'Check power supply and circuit breakers',
  'Inspect fan blades for damage or debris',
  'Clean accessible grease buildup',
  'Check belt tension and condition',
  'Inspect electrical connections for corrosion',
  'Test fan operation and airflow',
  'Check for unusual noises or vibrations',
  'Inspect motor housing for overheating',
  'Clean air filters and intake areas',
  'Document any issues found'
]

const repairCosts = [
  ['Service Type', 'Cost Range', 'Boca Raton Factors', 'Emergency Premium'],
  ['Basic Maintenance', '$150-300', 'Coastal corrosion inspection', '+50%'],
  ['Motor Replacement', '$400-800', 'Marine-grade components', '+75%'],
  ['Electrical Repair', '$200-500', 'Corrosion-resistant materials', '+100%'],
  ['Belt Replacement', '$100-250', 'Specialized coastal belts', '+50%'],
  ['Fan Blade Repair', '$200-400', 'Corrosion-resistant blades', '+75%'],
  ['Control System Repair', '$300-600', 'Marine-grade electronics', '+100%'],
  ['Complete System Repair', '$800-2,000', 'Comprehensive coastal treatment', '+100%'],
  ['Preventive Maintenance', '$200-400', 'Coastal-specific protocols', 'N/A']
]

export default function BocaRatonExhaustFanProblemsPage() {
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
                  <span>Read Time: {articleMeta.reading_time}</span>
                  <span>City: {articleMeta.city}</span>
                  <span>Last updated: {articleMeta.last_updated}</span>
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
                    Kitchen exhaust fans are critical components of commercial kitchen safety systems in Boca Raton. Understanding common problems and their solutions helps restaurant owners maintain efficient, safe operations while minimizing downtime and repair costs.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Boca Raton's coastal location presents unique challenges for exhaust fan systems. Salt air exposure, high humidity, and tropical weather conditions accelerate corrosion and wear, making regular maintenance and prompt problem resolution essential for restaurant operations.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    This comprehensive guide covers common exhaust fan problems, DIY solutions, professional repair options, and preventive measures specifically tailored for Boca Raton's coastal environment.
                  </p>
                </div>
              </section>

              {/* Coastal Challenges */}
              <section id="coastal-challenges" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Boca Raton Coastal Challenges</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Boca Raton's coastal location creates specific challenges for kitchen exhaust fan systems that inland restaurants don't face. Understanding these challenges helps implement appropriate preventive measures and repair strategies.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-4">Salt Air Corrosion</h3>
                      <ul className="list-disc list-inside space-y-2 text-blue-800">
                        <li>Accelerates metal component deterioration</li>
                        <li>Affects electrical connections and motor housings</li>
                        <li>Requires marine-grade materials and coatings</li>
                        <li>Increases maintenance frequency requirements</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-green-900 mb-4">High Humidity Effects</h3>
                      <ul className="list-disc list-inside space-y-2 text-green-800">
                        <li>Promotes grease accumulation and bacterial growth</li>
                        <li>Affects belt performance and electrical systems</li>
                        <li>Increases fire risk from grease buildup</li>
                        <li>Requires specialized cleaning protocols</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-orange-900 mb-4">Tropical Weather Impact</h3>
                      <ul className="list-disc list-inside space-y-2 text-orange-800">
                        <li>Temperature fluctuations affect component expansion</li>
                        <li>Storm conditions can damage external components</li>
                        <li>Year-round operation increases wear</li>
                        <li>Requires weather-resistant installation</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-red-900 mb-4">Maintenance Challenges</h3>
                      <ul className="list-disc list-inside space-y-2 text-red-800">
                        <li>More frequent cleaning requirements</li>
                        <li>Specialized corrosion-resistant products needed</li>
                        <li>Professional expertise in coastal systems</li>
                        <li>Higher maintenance costs than inland locations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Common Problems */}
              <section id="common-problems" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Exhaust Fan Problems</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Understanding common exhaust fan problems helps Boca Raton restaurant owners identify issues early and take appropriate action. Coastal conditions often accelerate these problems and require specialized solutions.
                  </p>
                  <ResourceTable 
                    headers={commonProblems[0]} 
                    rows={commonProblems.slice(1)} 
                    caption="Common exhaust fan problems with Boca Raton-specific considerations"
                  />
                </div>
              </section>

              {/* Problem Solutions */}
              <section id="problem-solutions" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Problem & Solution Guide</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    This comprehensive guide provides both DIY solutions for minor issues and professional repair options for complex problems. Boca Raton's coastal conditions often require professional expertise for proper resolution.
                  </p>
                  <ResourceTable 
                    headers={problemSolutions[0]} 
                    rows={problemSolutions.slice(1)} 
                    caption="Problem solutions guide for Boca Raton exhaust fan issues"
                  />
                </div>
              </section>

              {/* Mid-Article CTA */}
              <div className="my-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Need Professional Exhaust Fan Repair in Boca Raton?</h3>
                <p className="text-blue-100 mb-6">Get expert service for coastal corrosion issues and complex repairs</p>
                <Link 
                  href={articleMeta.cta_targets.primary}
                  className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Instant Quote
                </Link>
              </div>

              {/* Coastal Prevention */}
              <section id="coastal-prevention" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Coastal Corrosion Prevention</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Preventing coastal corrosion is essential for Boca Raton restaurants. Implementing proper preventive measures can significantly extend exhaust fan life and reduce repair costs.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Material Selection</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Use marine-grade stainless steel components</li>
                        <li>Install corrosion-resistant electrical connections</li>
                        <li>Choose powder-coated or galvanized materials</li>
                        <li>Select salt-resistant motor housings</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Protective Coatings</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Apply marine-grade protective coatings</li>
                        <li>Use corrosion-inhibiting sprays</li>
                        <li>Install protective covers for external components</li>
                        <li>Regularly reapply protective treatments</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Maintenance Protocols</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Monthly visual inspections for corrosion</li>
                        <li>Quarterly professional maintenance</li>
                        <li>Immediate repair of any corrosion damage</li>
                        <li>Regular cleaning with coastal-specific products</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Environmental Controls</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Maintain proper ventilation around equipment</li>
                        <li>Control humidity levels in equipment areas</li>
                        <li>Install air filtration systems</li>
                        <li>Regular environmental monitoring</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Emergency vs Scheduled */}
              <section id="emergency-vs-scheduled" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency vs Scheduled Repair</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Understanding when to call for emergency repair versus scheduling routine maintenance helps Boca Raton restaurant owners manage costs and minimize downtime effectively.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-red-900 mb-4">Emergency Repair Situations</h3>
                      <ul className="list-disc list-inside space-y-2 text-red-800">
                        <li>Complete fan failure during service hours</li>
                        <li>Electrical sparks or fire risk</li>
                        <li>Motor overheating or smoking</li>
                        <li>Structural damage to fan housing</li>
                        <li>Safety system malfunctions</li>
                      </ul>
                      <p className="text-red-700 mt-4 font-semibold">Cost: 50-100% premium over scheduled service</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-green-900 mb-4">Scheduled Maintenance</h3>
                      <ul className="list-disc list-inside space-y-2 text-green-800">
                        <li>Routine cleaning and inspection</li>
                        <li>Preventive component replacement</li>
                        <li>Performance optimization</li>
                        <li>Corrosion treatment and prevention</li>
                        <li>System upgrades and improvements</li>
                      </ul>
                      <p className="text-green-700 mt-4 font-semibold">Cost: Standard rates with potential discounts</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* DIY Maintenance */}
              <section id="diy-maintenance" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">DIY Maintenance Checklist</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Regular DIY maintenance helps prevent major problems and extends exhaust fan life. Boca Raton restaurant owners can safely perform these basic maintenance tasks.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Monthly DIY Maintenance Tasks</h3>
                    <ul className="list-disc list-inside space-y-2 text-blue-800">
                      {diyChecklist.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
                    <h3 className="text-xl font-semibold text-yellow-900 mb-4">Safety Reminders</h3>
                    <ul className="list-disc list-inside space-y-2 text-yellow-800">
                      <li>Always turn off power before inspection</li>
                      <li>Use proper safety equipment and tools</li>
                      <li>Never attempt electrical repairs without certification</li>
                      <li>Document all maintenance activities</li>
                      <li>Call professionals for complex issues</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* When to Call Pros */}
              <section id="when-to-call-pros" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Call Professionals</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Knowing when to call professional repair services is crucial for safety and proper resolution. Boca Raton's coastal conditions often require specialized expertise.
                  </p>
                  <div className="space-y-6">
                    <div className="border-l-4 border-red-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Electrical Issues</h3>
                      <p className="text-gray-700">Any electrical problems, wiring issues, or control system malfunctions require certified electricians. Coastal corrosion makes electrical work particularly dangerous.</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Motor Problems</h3>
                      <p className="text-gray-700">Motor replacement, bearing issues, and complex mechanical problems need professional expertise. Coastal conditions require specialized motor components.</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Structural Damage</h3>
                      <p className="text-gray-700">Any damage to fan housing, mounting brackets, or structural components requires professional assessment and repair.</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Coastal Corrosion</h3>
                      <p className="text-gray-700">Severe corrosion damage requires specialized treatment, marine-grade materials, and professional expertise in coastal systems.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Repair Costs */}
              <section id="repair-costs" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Boca Raton Repair Costs</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Understanding repair costs helps Boca Raton restaurant owners budget for maintenance and make informed decisions about repair versus replacement options.
                  </p>
                  <ResourceTable 
                    headers={repairCosts[0]} 
                    rows={repairCosts.slice(1)} 
                    caption="Exhaust fan repair costs in Boca Raton with coastal factors"
                  />
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Cost-Saving Tips</h3>
                    <ul className="list-disc list-inside space-y-2 text-blue-800">
                      <li>Regular maintenance prevents expensive repairs</li>
                      <li>Scheduled service contracts often provide discounts</li>
                      <li>Preventive measures reduce coastal corrosion costs</li>
                      <li>Professional installation prevents future problems</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <ResourceFAQ faqs={articleMeta.faqs} />

              {/* Final CTA */}
              <div className="my-12 bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Need Professional Exhaust Fan Service in Boca Raton?</h3>
                <p className="text-green-100 mb-6">Get expert repair and maintenance for coastal conditions</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/pricing/instant-quote/restaurant-hood-cleaning?src=resource_boca-raton_problems_end"
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
              "@id": "https://localbizzlist.com/resources/boca-raton/exhaust-fan-problems-and-fixes"
            },
            "about": {
              "@type": "Thing",
              "name": "Kitchen Exhaust Fan Problems and Solutions"
            },
            "mentions": [
              {
                "@type": "Place",
                "name": "Boca Raton, Florida"
              },
              {
                "@type": "Thing",
                "name": "Exhaust Fan Repair"
              },
              {
                "@type": "Thing",
                "name": "Coastal Corrosion"
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
                "name": "Restaurant Hood Cleaning",
                "item": "https://localbizzlist.com/resources/restaurant-hood-cleaning"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Boca Raton",
                "item": "https://localbizzlist.com/resources/restaurant-hood-cleaning/boca-raton"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Exhaust Fan Problems",
                "item": "https://localbizzlist.com/resources/restaurant-hood-cleaning/boca-raton/exhaust-fan-problems-and-fixes"
              }
            ]
          })
        }}
      />
    </div>
  )
}
