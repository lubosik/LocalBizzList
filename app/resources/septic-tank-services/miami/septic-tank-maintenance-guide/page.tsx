import Link from 'next/link'
import Image from 'next/image'
import { Clock, MapPin, Calendar, CheckCircle, AlertTriangle, DollarSign, Phone, Star } from 'lucide-react'

export const metadata = {
  title: "Septic Tank Maintenance Miami - Schedule & Tips Guide | Local Bizz List",
  description: "Complete guide to septic tank maintenance in Miami-Dade County. Learn schedules, tips, costs, and find licensed professionals. Expert maintenance for Miami's unique conditions.",
  keywords: ["septic tank maintenance Miami", "septic maintenance schedule Miami", "Miami septic service", "septic system maintenance Miami", "septic tank care Miami"],
  canonical: "https://local-bizz-list.vercel.app/resources/septic-tank-services/miami/septic-tank-maintenance-guide"
}

export default function MiamiSepticMaintenanceGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Septic Tank Maintenance Guide for Miami
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Complete guide to septic system maintenance in Miami-Dade County
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/pricing/instant-quote?src=septic_miami_maintenance_hero"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Get Instant Quote
              </Link>
              <Link 
                href="/locations/miami/septic-services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Miami Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li><a href="#maintenance-schedule" className="text-blue-600 hover:text-blue-800">Maintenance Schedule</a></li>
              <li><a href="#maintenance-tasks" className="text-blue-600 hover:text-blue-800">Maintenance Tasks</a></li>
              <li><a href="#miami-challenges" className="text-blue-600 hover:text-blue-800">Miami Challenges</a></li>
              <li><a href="#cost-breakdown" className="text-blue-600 hover:text-blue-800">Cost Breakdown</a></li>
            </ul>
            <ul className="space-y-2">
              <li><a href="#prevention-tips" className="text-blue-600 hover:text-blue-800">Prevention Tips</a></li>
              <li><a href="#warning-signs" className="text-blue-600 hover:text-blue-800">Warning Signs</a></li>
              <li><a href="#choosing-contractor" className="text-blue-600 hover:text-blue-800">Choosing Contractor</a></li>
              <li><a href="#faq" className="text-blue-600 hover:text-blue-800">Frequently Asked Questions</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Maintenance Schedule Section */}
      <div id="maintenance-schedule" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Septic Maintenance Schedule</h2>
            <p className="text-lg text-gray-600">
              Recommended maintenance schedule for septic systems in Miami
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Monthly</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Check for odors</li>
                <li>• Monitor drain performance</li>
                <li>• Inspect yard for wet spots</li>
                <li>• Check pump operation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quarterly</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Visual system inspection</li>
                <li>• Check access lids</li>
                <li>• Monitor water usage</li>
                <li>• Inspect drain field</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Annually</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Professional inspection</li>
                <li>• Pump system check</li>
                <li>• Electrical inspection</li>
                <li>• Maintenance record review</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Every 2-3 Years</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tank pumping</li>
                <li>• Complete system service</li>
                <li>• Drain field evaluation</li>
                <li>• System upgrade assessment</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Miami-Specific Schedule Adjustments</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Hurricane Season (June-November)</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Pre-season system check</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Reduce water usage during storms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Post-storm inspection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Emergency contact ready</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">High Water Table Periods</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <span className="text-gray-700">More frequent inspections</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <span className="text-gray-700">Monitor drain field saturation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <span className="text-gray-700">Check for standing water</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <span className="text-gray-700">Consider system upgrades</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Maintenance Tasks Section */}
      <div id="maintenance-tasks" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Maintenance Tasks</h2>
            <p className="text-lg text-gray-600">
              Key maintenance tasks for septic systems in Miami
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Regular Pumping</h3>
                <p className="text-gray-600 mb-3">Essential for preventing system failure and maintaining efficiency.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Every 2-3 years for residential</li>
                  <li>• Every 6-12 months for commercial</li>
                  <li>• More frequent in Miami due to high water table</li>
                  <li>• Professional service recommended</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">System Inspection</h3>
                <p className="text-gray-600 mb-3">Regular inspection helps identify problems before they become costly repairs.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Annual professional inspection</li>
                  <li>• Check tank condition and baffles</li>
                  <li>• Inspect pipes and connections</li>
                  <li>• Evaluate drain field performance</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pump Maintenance</h3>
                <p className="text-gray-600 mb-3">Electrical pumps require regular maintenance to ensure proper operation.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Check electrical connections</li>
                  <li>• Test pump operation</li>
                  <li>• Clean pump components</li>
                  <li>• Replace worn parts</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Drain Field Care</h3>
                <p className="text-gray-600 mb-3">Proper drain field maintenance is crucial for system longevity.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Keep area free of vehicles</li>
                  <li>• Avoid planting trees nearby</li>
                  <li>• Monitor for wet spots</li>
                  <li>• Prevent soil compaction</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Filter Maintenance</h3>
                <p className="text-gray-600 mb-3">Effluent filters require regular cleaning to prevent clogs.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Clean filters every 6 months</li>
                  <li>• Replace damaged filters</li>
                  <li>• Check filter housing</li>
                  <li>• Monitor filter performance</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Record Keeping</h3>
                <p className="text-gray-600 mb-3">Maintain detailed records of all maintenance activities.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Document all service dates</li>
                  <li>• Record maintenance activities</li>
                  <li>• Keep receipts and warranties</li>
                  <li>• Note any problems or repairs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Miami Challenges Section */}
      <div id="miami-challenges" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Miami Maintenance Challenges</h2>
              <p className="text-lg text-gray-600 mb-6">
                Miami's unique environment creates specific maintenance challenges 
                that require specialized attention and more frequent service.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <AlertTriangle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">High Water Table</h3>
                    <p className="text-gray-600">Shallow groundwater can interfere with drain field function and require more frequent pumping.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <AlertTriangle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Frequent Flooding</h3>
                    <p className="text-gray-600">Hurricane season and heavy rains can overwhelm systems and require emergency maintenance.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <AlertTriangle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">High Humidity</h3>
                    <p className="text-gray-600">Humidity can accelerate corrosion and create ideal conditions for bacterial growth.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <AlertTriangle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Salt Air</h3>
                    <p className="text-gray-600">Coastal salt air can accelerate corrosion of metal components and electrical connections.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
                alt="Septic maintenance challenges in Miami"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cost Breakdown Section */}
      <div id="cost-breakdown" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Maintenance Costs in Miami</h2>
            <p className="text-lg text-gray-600">
              Typical costs for septic maintenance services in Miami-Dade County
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Routine Maintenance</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Annual Inspection</span>
                  <span className="text-blue-600 font-bold">$150 - $300</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Filter Cleaning</span>
                  <span className="text-blue-600 font-bold">$100 - $200</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Pump Service</span>
                  <span className="text-blue-600 font-bold">$200 - $400</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-900">System Cleaning</span>
                  <span className="text-blue-600 font-bold">$300 - $600</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Preventive Maintenance</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Regular Pumping</span>
                  <span className="text-blue-600 font-bold">$250 - $400</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Drain Field Treatment</span>
                  <span className="text-blue-600 font-bold">$200 - $500</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Bacterial Additives</span>
                  <span className="text-blue-600 font-bold">$50 - $150</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-900">Maintenance Contract</span>
                  <span className="text-blue-600 font-bold">$200 - $500/year</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cost-Saving Tips</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Preventive Measures</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Regular maintenance prevents costly repairs</li>
                  <li>• Annual contracts often provide discounts</li>
                  <li>• Early problem detection saves money</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Miami Considerations</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Storm season preparation reduces emergency costs</li>
                  <li>• High water table requires more frequent service</li>
                  <li>• Salt air corrosion increases maintenance needs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prevention Tips Section */}
      <div id="prevention-tips" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Prevention Tips</h2>
            <p className="text-lg text-gray-600">
              How to prevent problems and extend system life in Miami
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Do's</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Schedule regular pumping every 2-3 years</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Use water efficiently and conserve during storms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Use septic-safe cleaning products</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Keep detailed maintenance records</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Protect drain field from heavy vehicles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Monitor system performance regularly</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Don'ts</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-1" />
                  <span className="text-gray-700">Flush non-biodegradable items</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-1" />
                  <span className="text-gray-700">Pour grease or chemicals down drains</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-1" />
                  <span className="text-gray-700">Use harsh chemical cleaners</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-1" />
                  <span className="text-gray-700">Plant trees near drain field</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-1" />
                  <span className="text-gray-700">Ignore warning signs</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-1" />
                  <span className="text-gray-700">Skip regular maintenance</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Miami-Specific Prevention</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Storm Season</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Pump tank before hurricane season</li>
                  <li>• Reduce water usage during storms</li>
                  <li>• Have emergency contact ready</li>
                  <li>• Inspect system after storms</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">High Water Table</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Monitor drain field saturation</li>
                  <li>• Watch for standing water</li>
                  <li>• Consider system upgrades</li>
                  <li>• More frequent inspections</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Warning Signs Section */}
      <div id="warning-signs" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Warning Signs</h2>
            <p className="text-lg text-gray-600">
              Early warning signs that indicate maintenance is needed
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Slow Drains</h3>
                <p className="text-gray-600 mb-3">Water draining slowly from sinks, tubs, and toilets throughout your home.</p>
                <p className="text-sm text-gray-500"><strong>Action:</strong> Schedule inspection and possible pumping</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Gurgling Sounds</h3>
                <p className="text-gray-600 mb-3">Unusual gurgling or bubbling sounds from drains and toilets.</p>
                <p className="text-sm text-gray-500"><strong>Action:</strong> Check system and schedule service</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sewage Odors</h3>
                <p className="text-gray-600 mb-3">Foul odors around drains, toilets, or in the yard near the septic system.</p>
                <p className="text-sm text-gray-500"><strong>Action:</strong> Immediate inspection required</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Wet Spots in Yard</h3>
                <p className="text-gray-600 mb-3">Unexplained wet or soggy areas in your yard, especially near the septic system.</p>
                <p className="text-sm text-gray-500"><strong>Action:</strong> Professional evaluation needed</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Lush Grass</h3>
                <p className="text-gray-600 mb-3">Unusually green or lush grass over the drain field area.</p>
                <p className="text-sm text-gray-500"><strong>Action:</strong> System inspection recommended</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">High Water Bills</h3>
                <p className="text-gray-600 mb-3">Unexpected increase in water usage without explanation.</p>
                <p className="text-sm text-gray-500"><strong>Action:</strong> Check for leaks and system issues</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Signs - Call Immediately</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-3" />
                  <span className="text-gray-700">Sewage backing up into your home</span>
                </li>
                <li className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-3" />
                  <span className="text-gray-700">Strong sewage odors inside</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-3" />
                  <span className="text-gray-700">Multiple drains backing up</span>
                </li>
                <li className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-3" />
                  <span className="text-gray-700">Standing water in yard</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Choosing Contractor Section */}
      <div id="choosing-contractor" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choosing a Maintenance Contractor</h2>
            <p className="text-lg text-gray-600">
              What to look for when selecting a septic maintenance service in Miami
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Essential Qualifications</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Miami-Dade County License</span>
                    <p className="text-gray-600 text-sm">Required for all septic maintenance work</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Insurance Coverage</span>
                    <p className="text-gray-600 text-sm">General liability and workers compensation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Local Experience</span>
                    <p className="text-gray-600 text-sm">Knowledge of Miami's unique challenges</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Maintenance Contracts</span>
                    <p className="text-gray-600 text-sm">Offers scheduled maintenance programs</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Questions to Ask</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Do you offer maintenance contracts?</span>
                    <p className="text-gray-600 text-sm">Scheduled service can save money</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">What's included in maintenance?</span>
                    <p className="text-gray-600 text-sm">Understand service scope</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Do you provide written reports?</span>
                    <p className="text-gray-600 text-sm">Documentation is important</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">What's your emergency response time?</span>
                    <p className="text-gray-600 text-sm">Important for Miami's storm season</p>
                  </div>
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
              Common questions about septic maintenance in Miami
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How often should I maintain my septic system in Miami?</h3>
              <p className="text-gray-600">Most Miami homes need annual inspections and pumping every 2-3 years. Commercial properties typically need more frequent service. Due to Miami's high water table and flooding risk, more frequent maintenance may be needed.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What makes Miami septic maintenance different?</h3>
              <p className="text-gray-600">Miami's high water table, frequent flooding, high humidity, and salt air create unique challenges. Systems may need more frequent pumping, corrosion protection, and storm season preparation.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How much does septic maintenance cost in Miami?</h3>
              <p className="text-gray-600">Annual inspections cost $150-$300, pumping costs $250-$400, and maintenance contracts range from $200-$500 per year. Commercial maintenance costs more due to higher usage and complexity.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I do my own septic maintenance?</h3>
              <p className="text-gray-600">Some basic maintenance like monitoring and record keeping can be done yourself, but pumping, inspections, and repairs should be done by licensed professionals. DIY maintenance can be dangerous and may void warranties.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What should I do during hurricane season?</h3>
              <p className="text-gray-600">Before hurricane season, have your system pumped and inspected. During storms, reduce water usage and avoid flushing if possible. After storms, inspect for damage and call for service if needed.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I know if my system needs maintenance?</h3>
              <p className="text-gray-600">Warning signs include slow drains, gurgling sounds, sewage odors, wet spots in the yard, or lush grass over the drain field. Regular inspections help catch problems early.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What's included in a maintenance contract?</h3>
              <p className="text-gray-600">Maintenance contracts typically include regular inspections, pumping, minor repairs, emergency service, and priority scheduling. Terms vary by contractor, so ask for details.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How can I extend my septic system's life?</h3>
              <p className="text-gray-600">Regular maintenance, proper usage, water conservation, avoiding harmful chemicals, and addressing problems promptly can extend system life. In Miami's challenging environment, preventive maintenance is especially important.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready for Professional Septic Maintenance in Miami?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get expert septic maintenance services tailored to Miami's unique environment. 
            Licensed professionals with local expertise and maintenance contracts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/pricing/instant-quote?src=septic_miami_maintenance_end"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Get Instant Quote
            </Link>
            <Link 
              href="/resources/septic-tank-services/miami"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              More Miami Resources
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
            "headline": "Septic Tank Maintenance Guide for Miami",
            "description": "Complete guide to septic tank maintenance in Miami-Dade County including schedules, costs, and prevention tips",
            "author": {
              "@type": "Organization",
              "name": "Local Bizz List"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Local Bizz List",
              "url": "https://local-bizz-list.vercel.app"
            },
            "datePublished": "2024-01-01",
            "dateModified": "2024-01-01",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://local-bizz-list.vercel.app/resources/septic-tank-services/miami/septic-tank-maintenance-guide"
            },
            "about": {
              "@type": "Thing",
              "name": "Septic Tank Maintenance Miami"
            },
            "mentions": [
              {
                "@type": "Place",
                "name": "Miami",
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
