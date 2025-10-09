import Link from 'next/link'
import Image from 'next/image'
import { DollarSign, Calendar, Clock, CheckCircle, AlertTriangle, MapPin } from 'lucide-react'

export const metadata = {
  title: "Septic Pumping Cost & Frequency in Miami - Complete Guide 2025",
  description: "Complete guide to septic pumping costs and frequency in Miami-Dade County. Learn about pricing factors, service schedules, and Miami-specific considerations.",
  keywords: ["septic pumping cost Miami", "septic pumping frequency Miami", "septic tank pumping Miami", "septic service cost Miami"],
  canonical: "https://local-bizz-list.vercel.app/resources/septic-tank-services/miami/septic-pumping-cost-frequency"
}

export default function MiamiSepticPumpingCostFrequency() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Septic Pumping Cost & Frequency in Miami
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Complete guide to septic pumping costs and schedules in Miami-Dade County
            </p>
            <Link
              href="/pricing/instant-quote/septic-tank-services?src=septic_miami_septic-pumping-cost-frequency_hero"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Get Instant Quote
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
              <a href="#miami-costs" className="block text-blue-600 hover:text-blue-800">Miami Septic Pumping Costs</a>
              <a href="#pumping-frequency" className="block text-blue-600 hover:text-blue-800">Pumping Frequency Guidelines</a>
              <a href="#cost-factors" className="block text-blue-600 hover:text-blue-800">Factors Affecting Cost</a>
            </div>
            <div className="space-y-2">
              <a href="#miami-considerations" className="block text-blue-600 hover:text-blue-800">Miami-Specific Considerations</a>
              <a href="#service-process" className="block text-blue-600 hover:text-blue-800">Service Process</a>
              <a href="#faq" className="block text-blue-600 hover:text-blue-800">Frequently Asked Questions</a>
            </div>
          </div>
        </div>
      </div>

      {/* Miami Costs Section */}
      <div id="miami-costs" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Miami Septic Pumping Costs</h2>
            <p className="text-lg text-gray-600">
              Transparent pricing for septic pumping services in Miami-Dade County
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Residential Services</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Standard Tank (1000 gal)</span>
                  <span className="text-blue-600 font-bold">$250 - $350</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Large Tank (1500+ gal)</span>
                  <span className="text-blue-600 font-bold">$350 - $500</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Emergency Service</span>
                  <span className="text-blue-600 font-bold">$400 - $600</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-900">Inspection Only</span>
                  <span className="text-blue-600 font-bold">$150 - $250</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Commercial Services</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Restaurant Pumping</span>
                  <span className="text-blue-600 font-bold">$500 - $800</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Office Building</span>
                  <span className="text-blue-600 font-bold">$400 - $700</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Regular Maintenance</span>
                  <span className="text-blue-600 font-bold">$200 - $400/month</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-900">Emergency Response</span>
                  <span className="text-blue-600 font-bold">$600 - $1000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Why Miami Costs May Vary</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">High Water Table</h4>
                <p className="text-gray-600 text-sm">Miami's shallow water table requires specialized equipment and techniques</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Flood Risk</h4>
                <p className="text-gray-600 text-sm">Emergency services during storms and flooding cost more</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Access Difficulty</h4>
                <p className="text-gray-600 text-sm">Older subdivisions may have difficult tank access</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pumping Frequency Section */}
      <div id="pumping-frequency" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pumping Frequency Guidelines</h2>
            <p className="text-lg text-gray-600">
              How often you need septic pumping in Miami depends on several factors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Residential Homes</h3>
              <p className="text-gray-600 mb-4">Every 2-3 years</p>
              <ul className="text-sm text-gray-600 space-y-1 text-left">
                <li>• 1-2 person household</li>
                <li>• 1000+ gallon tank</li>
                <li>• Normal water usage</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Large Families</h3>
              <p className="text-gray-600 mb-4">Every 1-2 years</p>
              <ul className="text-sm text-gray-600 space-y-1 text-left">
                <li>• 4+ person household</li>
                <li>• High water usage</li>
                <li>• Multiple bathrooms</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Commercial Properties</h3>
              <p className="text-gray-600 mb-4">Every 6-12 months</p>
              <ul className="text-sm text-gray-600 space-y-1 text-left">
                <li>• Restaurants & offices</li>
                <li>• High wastewater volume</li>
                <li>• Regular maintenance</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Factors Affecting Pumping Frequency</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Household Factors</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Number of people in household</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Daily water usage patterns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Garbage disposal usage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Laundry frequency</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">System Factors</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Tank size and capacity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Drain field condition</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">System age and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Soil conditions in Miami</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cost Factors Section */}
      <div id="cost-factors" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Factors Affecting Pumping Cost</h2>
            <p className="text-lg text-gray-600">
              Understanding what influences septic pumping costs in Miami
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tank Size</h3>
                <p className="text-gray-600 mb-3">Larger tanks require more time and equipment to pump completely.</p>
                <p className="text-sm text-gray-500"><strong>Impact:</strong> 1000 gal = $250-350, 1500+ gal = $350-500</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Access Difficulty</h3>
                <p className="text-gray-600 mb-3">Tanks buried deep or covered by landscaping cost more to access.</p>
                <p className="text-sm text-gray-500"><strong>Impact:</strong> Easy access = standard rate, difficult = +$50-100</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sludge Levels</h3>
                <p className="text-gray-600 mb-3">Heavy sludge buildup requires more time and specialized equipment.</p>
                <p className="text-sm text-gray-500"><strong>Impact:</strong> Heavy sludge = +$50-150</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Service</h3>
                <p className="text-gray-600 mb-3">After-hours or emergency calls cost more than scheduled service.</p>
                <p className="text-sm text-gray-500"><strong>Impact:</strong> Emergency = +$100-200</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Distance from Service Area</h3>
                <p className="text-gray-600 mb-3">Properties far from main service areas may have travel fees.</p>
                <p className="text-sm text-gray-500"><strong>Impact:</strong> Remote locations = +$25-75</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Additional Services</h3>
                <p className="text-gray-600 mb-3">Inspection, filter cleaning, or repairs add to the total cost.</p>
                <p className="text-sm text-gray-500"><strong>Impact:</strong> Inspection = +$50-100, repairs = varies</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Miami Considerations Section */}
      <div id="miami-considerations" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Miami-Specific Considerations</h2>
            <p className="text-lg text-gray-600">
              Unique factors affecting septic pumping in Miami-Dade County
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Environmental Challenges</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">High Water Table</h4>
                    <p className="text-gray-600">Miami's shallow water table affects drain field performance and may require more frequent pumping.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hurricane Season</h4>
                    <p className="text-gray-600">Heavy rains and flooding can overwhelm septic systems, requiring emergency pumping.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Salt Air Corrosion</h4>
                    <p className="text-gray-600">Coastal areas may experience faster system deterioration, affecting pumping needs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
                alt="Septic system in Miami environment"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Miami-Dade County Regulations</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Inspection Requirements</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Property transfers require septic inspection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Regular inspections every 3-5 years</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Permits required for major repairs</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Compliance Benefits</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Proper maintenance prevents violations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Regular pumping maintains system efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Documentation helps with property sales</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Process Section */}
      <div id="service-process" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Miami Septic Pumping Process</h2>
            <p className="text-lg text-gray-600">
              Professional septic pumping service tailored for Miami-Dade County
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Locate & Access</h3>
              <p className="text-gray-600">We locate your septic tank and access lids, ensuring minimal disruption to your Miami property.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Pump & Clean</h3>
              <p className="text-gray-600">Complete waste removal and tank cleaning using professional equipment designed for Miami conditions.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Inspect & Test</h3>
              <p className="text-gray-600">Thorough inspection of all components and system performance testing for Miami's unique environment.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Report & Schedule</h3>
              <p className="text-gray-600">Detailed report with maintenance recommendations and next service scheduling based on Miami conditions.</p>
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
              Common questions about septic pumping costs and frequency in Miami
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How much does septic pumping cost in Miami?</h3>
              <p className="text-gray-600">Standard residential pumping typically costs $250-$350 for a 1000-gallon tank, while commercial services range from $400-$800. Emergency services and larger tanks cost more. Miami's high water table and flood risk can affect pricing.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How often should I pump my septic tank in Miami?</h3>
              <p className="text-gray-600">Most Miami homes need septic pumping every 2-3 years, but this varies based on tank size, household size, and usage patterns. Miami's high water table and frequent flooding may require more frequent service.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What factors affect septic pumping cost in Miami?</h3>
              <p className="text-gray-600">Tank size, access difficulty, sludge levels, emergency service, distance from service area, and additional services all affect cost. Miami's environmental conditions can also impact pricing.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need permits for septic pumping in Miami?</h3>
              <p className="text-gray-600">Regular pumping doesn't require permits, but major repairs or installations do. Miami-Dade County requires permits for work over $1,000 and property transfers require septic inspection.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What's included in septic pumping service?</h3>
              <p className="text-gray-600">Complete waste removal, tank cleaning, system inspection, and detailed report. Additional services like filter cleaning or repairs may cost extra. We provide transparent pricing with no hidden fees.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I know when my septic tank needs pumping?</h3>
              <p className="text-gray-600">Signs include slow drains, gurgling sounds, sewage odors, wet spots in the yard, or sewage backups. In Miami's challenging environment, early intervention is crucial to prevent system failure.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I get an instant quote for septic pumping in Miami?</h3>
              <p className="text-gray-600">Yes, we provide instant quotes based on your tank size and location. Contact us for a free estimate that includes all Miami-specific factors and transparent pricing.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you service all areas of Miami-Dade County?</h3>
              <p className="text-gray-600">Yes, we provide septic pumping services throughout Miami-Dade County including Miami, Homestead, Hialeah, Coral Gables, and all surrounding communities.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready for Professional Septic Pumping in Miami?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get expert septic pumping services with transparent pricing and Miami-specific expertise.
            Licensed professionals serving all of Miami-Dade County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing/instant-quote/septic-tank-services?src=septic_miami_septic-pumping-cost-frequency_end"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Get Instant Quote
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
            "headline": "Septic Pumping Cost & Frequency in Miami - Complete Guide 2025",
            "description": "Complete guide to septic pumping costs and frequency in Miami-Dade County. Learn about pricing factors, service schedules, and Miami-specific considerations.",
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
              "@id": "https://local-bizz-list.vercel.app/resources/septic-tank-services/miami/septic-pumping-cost-frequency"
            },
            "about": {
              "@type": "Thing",
              "name": "Septic Pumping Miami"
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