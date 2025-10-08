import Link from 'next/link'
import Image from 'next/image'
import { AlertTriangle, CheckCircle, Clock, DollarSign, Home, Shield, Wrench } from 'lucide-react'

export const metadata = {
  title: "Septic Tank Maintenance Miami - Professional Maintenance Services 2025",
  description: "Expert septic tank maintenance services in Miami-Dade County. Learn about maintenance schedules, costs, and Miami-specific maintenance requirements.",
  keywords: ["septic tank maintenance Miami", "septic maintenance Miami", "septic system maintenance Miami-Dade", "septic tank service Miami"],
  canonical: "https://local-bizz-list.vercel.app/resources/septic-tank-services/miami/septic-tank-maintenance"
}

export default function MiamiSepticTankMaintenance() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Septic Tank Maintenance in Miami
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Professional septic tank maintenance services for Miami-Dade County
            </p>
            <Link
              href="/pricing/instant-quote?src=septic_maintenance_miami_hero"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Get Maintenance Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <a href="#maintenance-schedule" className="block text-blue-600 hover:text-blue-800">Maintenance Schedule</a>
              <a href="#maintenance-services" className="block text-blue-600 hover:text-blue-800">Maintenance Services</a>
              <a href="#maintenance-costs" className="block text-blue-600 hover:text-blue-800">Maintenance Costs</a>
            </div>
            <div className="space-y-2">
              <a href="#miami-challenges" className="block text-blue-600 hover:text-blue-800">Miami-Specific Challenges</a>
              <a href="#prevention" className="block text-blue-600 hover:text-blue-800">Prevention Tips</a>
              <a href="#faq" className="block text-blue-600 hover:text-blue-800">Frequently Asked Questions</a>
            </div>
          </div>
        </div>
      </div>

      {/* Maintenance Schedule Section */}
      <div id="maintenance-schedule" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Maintenance Schedule</h2>
            <p className="text-lg text-gray-600">
              Recommended maintenance schedule for Miami septic systems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Regular Maintenance Tasks</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Pumping</h4>
                    <p className="text-gray-600">Every 2-3 years for residential systems, more frequently for commercial or high-use systems.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Inspection</h4>
                    <p className="text-gray-600">Annual inspection to check for leaks, cracks, and system performance.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Filter Cleaning</h4>
                    <p className="text-gray-600">Clean effluent filters every 6-12 months to prevent clogs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Baffle Check</h4>
                    <p className="text-gray-600">Inspect baffles during pumping to ensure proper function.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
                alt="Septic tank maintenance in Miami"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Seasonal Maintenance</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Hurricane Season (June-November)</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Pre-storm system check</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Post-storm inspection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Flood damage assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Emergency contact info</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Dry Season (December-May)</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">System performance check</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Drain field inspection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Pumping if needed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Preventive maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Maintenance Services Section */}
      <div id="maintenance-services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Maintenance Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive maintenance services for Miami septic systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">System Inspection</h3>
              <p className="text-gray-600">Comprehensive inspection of tank, pipes, and drain field to identify potential issues early.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pumping Service</h3>
              <p className="text-gray-600">Professional pumping to remove sludge and scum, maintaining optimal system performance.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Filter Cleaning</h3>
              <p className="text-gray-600">Clean and maintain effluent filters to prevent clogs and ensure proper drainage.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Baffle Maintenance</h3>
              <p className="text-gray-600">Inspect and repair baffles to ensure proper flow and prevent solids from entering drain field.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Emergency Service</h3>
              <p className="text-gray-600">24/7 emergency maintenance services for urgent septic system issues.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Maintenance Plans</h3>
              <p className="text-gray-600">Scheduled maintenance plans to keep your system running smoothly year-round.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Maintenance Costs Section */}
      <div id="maintenance-costs" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Maintenance Costs</h2>
            <p className="text-lg text-gray-600">
              Septic tank maintenance costs in Miami-Dade County
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Regular Maintenance</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Annual Inspection</span>
                  <span className="text-blue-600 font-bold">$150 - $300</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Pumping Service</span>
                  <span className="text-blue-600 font-bold">$275 - $400</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Filter Cleaning</span>
                  <span className="text-blue-600 font-bold">$100 - $200</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Baffle Repair</span>
                  <span className="text-blue-600 font-bold">$200 - $500</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-900">Maintenance Plan</span>
                  <span className="text-blue-600 font-bold">$400 - $800/year</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Services</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Emergency Service</span>
                  <span className="text-blue-600 font-bold">$450 - $750</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Weekend Service</span>
                  <span className="text-blue-600 font-bold">+50% surcharge</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Holiday Service</span>
                  <span className="text-blue-600 font-bold">+100% surcharge</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">After Hours</span>
                  <span className="text-blue-600 font-bold">+75% surcharge</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-900">Lid Locating</span>
                  <span className="text-blue-600 font-bold">$75 - $200</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cost Factors in Miami</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Home className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">System Size</h4>
                <p className="text-gray-600 text-sm">Larger systems cost more to maintain</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Access Difficulty</h4>
                <p className="text-gray-600 text-sm">Buried tanks require excavation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Emergency Premium</h4>
                <p className="text-gray-600 text-sm">Urgent maintenance costs more</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Miami Challenges Section */}
      <div id="miami-challenges" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Miami-Specific Challenges</h2>
            <p className="text-lg text-gray-600">
              Unique challenges for septic tank maintenance in Miami
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">High Water Table</h3>
                <p className="text-gray-600 mb-3">Miami's shallow water table makes maintenance more complex and can cause ongoing issues.</p>
                <p className="text-sm text-gray-500"><strong>Solution:</strong> Specialized maintenance techniques and elevated components</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hurricane Season</h3>
                <p className="text-gray-600 mb-3">Storm surge and flooding can damage septic systems, requiring immediate maintenance.</p>
                <p className="text-sm text-gray-500"><strong>Solution:</strong> Pre and post-storm maintenance checks</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Salt Air Corrosion</h3>
                <p className="text-gray-600 mb-3">Coastal areas experience faster corrosion of metal components and system deterioration.</p>
                <p className="text-sm text-gray-500"><strong>Solution:</strong> Corrosion-resistant materials and protective coatings</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Older Systems</h3>
                <p className="text-gray-600 mb-3">Many Miami homes have aging septic systems that require more frequent maintenance.</p>
                <p className="text-sm text-gray-500"><strong>Solution:</strong> Increased maintenance frequency and system upgrades</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tree Root Intrusion</h3>
                <p className="text-gray-600 mb-3">Miami's lush vegetation can cause root damage to septic systems.</p>
                <p className="text-sm text-gray-500"><strong>Solution:</strong> Root barriers and regular maintenance</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Permit Requirements</h3>
                <p className="text-gray-600 mb-3">Miami-Dade County has strict permit requirements for septic maintenance.</p>
                <p className="text-sm text-gray-500"><strong>Solution:</strong> Licensed professionals handle all permits</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prevention Section */}
      <div id="prevention" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Prevention Tips</h2>
            <p className="text-lg text-gray-600">
              How to prevent septic problems in Miami
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Regular Maintenance</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Pump tank every 2-3 years</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Annual system inspection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Monitor water usage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Keep records of service</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Proper Usage</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Avoid flushing non-biodegradables</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Limit grease disposal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Use septic-safe cleaners</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Conserve water during storms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Common questions about septic tank maintenance in Miami
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How often should I maintain my septic tank in Miami?</h3>
              <p className="text-gray-600">Residential systems should be pumped every 2-3 years, with annual inspections. Commercial systems may need more frequent maintenance.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What maintenance services do you offer in Miami?</h3>
              <p className="text-gray-600">We offer comprehensive maintenance including pumping, inspection, filter cleaning, baffle repair, and emergency services.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How much does septic maintenance cost in Miami?</h3>
              <p className="text-gray-600">Regular maintenance costs $150-$400, while comprehensive maintenance plans range from $400-$800 annually.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What makes Miami septic maintenance different?</h3>
              <p className="text-gray-600">Miami's high water table, flood risk, salt air corrosion, and strict regulations require specialized maintenance techniques.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you offer emergency maintenance services?</h3>
              <p className="text-gray-600">Yes, we provide 24/7 emergency maintenance services for urgent septic system issues in Miami.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I maintain my septic tank myself?</h3>
              <p className="text-gray-600">While you can perform basic maintenance like monitoring usage, professional services are recommended for pumping and inspections.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What should I do before hurricane season?</h3>
              <p className="text-gray-600">Schedule a pre-storm inspection, ensure proper drainage, and have emergency contact information ready.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How can I prevent septic problems in Miami?</h3>
              <p className="text-gray-600">Regular maintenance, proper usage habits, and avoiding non-biodegradable materials can prevent most problems.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Professional Septic Tank Maintenance in Miami?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Keep your septic system running smoothly with expert maintenance services
            designed for Miami's unique environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing/instant-quote?src=septic_maintenance_miami_end"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Get Maintenance Quote
            </Link>
            <Link
              href="/locations/miami/septic-services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Miami Septic Services
            </Link>
          </div>
        </div>
      </div>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Septic Tank Maintenance Miami - Professional Maintenance Services 2025",
            "description": "Expert septic tank maintenance services in Miami-Dade County. Learn about maintenance schedules, costs, and Miami-specific maintenance requirements.",
            "author": {
              "@type": "Organization",
              "name": "Local Bizz List"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Local Bizz List",
              "url": "https://local-bizz-list.vercel.app"
            },
            "datePublished": "2025-01-08",
            "dateModified": "2025-01-08",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://local-bizz-list.vercel.app/resources/septic-tank-services/miami/septic-tank-maintenance"
            },
            "about": {
              "@type": "Thing",
              "name": "Septic Tank Maintenance Miami"
            },
            "mentions": [
              {
                "@type": "Place",
                "name": "Miami-Dade County",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Florida"
                }
              }
            ]
          })
        }}
      />
    </div>
  )
}
