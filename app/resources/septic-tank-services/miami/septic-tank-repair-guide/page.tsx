import Link from 'next/link'
import Image from 'next/image'
import { Clock, MapPin, Calendar, CheckCircle, AlertTriangle, DollarSign, Phone, Star } from 'lucide-react'

export const metadata = {
  title: "Septic Tank Repair Miami - Emergency Services & Cost Guide | Local Bizz List",
  description: "Professional septic tank repair services in Miami-Dade County. Emergency repairs, cost breakdown, common issues, and licensed contractors. Expert solutions for Miami's unique conditions.",
  keywords: ["septic tank repair Miami", "septic repair cost Miami", "emergency septic repair Miami", "Miami septic contractor", "septic system repair Miami"],
  canonical: "https://local-bizz-list.vercel.app/resources/septic-tank-services/miami/septic-tank-repair-guide"
}

export default function MiamiSepticRepairGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Septic Tank Repair Guide for Miami
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Professional septic repair services in Miami-Dade County
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/pricing/instant-quote?src=septic_miami_repair_hero"
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
              <li><a href="#common-repairs" className="text-blue-600 hover:text-blue-800">Common Repairs</a></li>
              <li><a href="#repair-costs" className="text-blue-600 hover:text-blue-800">Repair Costs</a></li>
              <li><a href="#emergency-repairs" className="text-blue-600 hover:text-blue-800">Emergency Repairs</a></li>
              <li><a href="#repair-process" className="text-blue-600 hover:text-blue-800">Repair Process</a></li>
            </ul>
            <ul className="space-y-2">
              <li><a href="#miami-challenges" className="text-blue-600 hover:text-blue-800">Miami Challenges</a></li>
              <li><a href="#prevention-tips" className="text-blue-600 hover:text-blue-800">Prevention Tips</a></li>
              <li><a href="#choosing-contractor" className="text-blue-600 hover:text-blue-800">Choosing Contractor</a></li>
              <li><a href="#faq" className="text-blue-600 hover:text-blue-800">Frequently Asked Questions</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Common Repairs Section */}
      <div id="common-repairs" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Septic Repairs in Miami</h2>
            <p className="text-lg text-gray-600">
              Most frequent septic system repairs needed in Miami-Dade County
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Drain Field Problems</h3>
                <p className="text-gray-600 mb-3">High water table in Miami can cause drain field saturation and failure.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Field replacement: $5,000 - $15,000</li>
                  <li>• Field repair: $2,000 - $8,000</li>
                  <li>• Drainage improvement: $1,500 - $5,000</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tank Cracks & Leaks</h3>
                <p className="text-gray-600 mb-3">Concrete tanks can crack due to shifting soil and high water pressure.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tank patching: $500 - $2,000</li>
                  <li>• Tank replacement: $3,000 - $8,000</li>
                  <li>• Leak repair: $300 - $1,500</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pipe Blockages</h3>
                <p className="text-gray-600 mb-3">Root intrusion and debris buildup can block septic pipes.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Pipe cleaning: $200 - $800</li>
                  <li>• Pipe replacement: $1,000 - $3,000</li>
                  <li>• Root removal: $300 - $1,200</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pump Failures</h3>
                <p className="text-gray-600 mb-3">Electrical pumps can fail due to power surges and flooding.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Pump replacement: $800 - $2,500</li>
                  <li>• Pump repair: $300 - $1,000</li>
                  <li>• Electrical work: $200 - $800</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Baffle Problems</h3>
                <p className="text-gray-600 mb-3">Tank baffles can deteriorate or become damaged over time.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Baffle replacement: $400 - $1,200</li>
                  <li>• Baffle repair: $200 - $600</li>
                  <li>• Tank modification: $500 - $1,500</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Lid & Access Issues</h3>
                <p className="text-gray-600 mb-3">Access lids can crack, shift, or become inaccessible.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Lid replacement: $200 - $800</li>
                  <li>• Access improvement: $300 - $1,000</li>
                  <li>• Safety upgrades: $400 - $1,200</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Repair Costs Section */}
      <div id="repair-costs" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Septic Repair Costs in Miami</h2>
            <p className="text-lg text-gray-600">
              Transparent pricing for septic repairs in Miami-Dade County
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Minor Repairs</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Pipe Cleaning</span>
                  <span className="text-blue-600 font-bold">$200 - $800</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Lid Replacement</span>
                  <span className="text-blue-600 font-bold">$200 - $800</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Baffle Repair</span>
                  <span className="text-blue-600 font-bold">$200 - $600</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-900">Minor Leak Repair</span>
                  <span className="text-blue-600 font-bold">$300 - $1,500</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Major Repairs</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Drain Field Repair</span>
                  <span className="text-blue-600 font-bold">$2,000 - $8,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Tank Replacement</span>
                  <span className="text-blue-600 font-bold">$3,000 - $8,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Pump Replacement</span>
                  <span className="text-blue-600 font-bold">$800 - $2,500</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-900">Complete System</span>
                  <span className="text-blue-600 font-bold">$8,000 - $20,000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What Affects Repair Costs?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">System Factors</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Age and condition of system</li>
                  <li>• Type of repair needed</li>
                  <li>• Accessibility of components</li>
                  <li>• Permit requirements</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Miami Factors</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• High water table complications</li>
                  <li>• Flood damage repairs</li>
                  <li>• Hurricane season premiums</li>
                  <li>• Soil condition challenges</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Repairs Section */}
      <div id="emergency-repairs" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Septic Repairs in Miami</h2>
            <p className="text-lg text-gray-600">
              24/7 emergency septic repair services for Miami-Dade County
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-8 rounded-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Emergency Situations</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Sewage Backup</span>
                    <p className="text-gray-600 text-sm">Raw sewage backing up into your home</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">System Failure</span>
                    <p className="text-gray-600 text-sm">Complete septic system breakdown</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Flood Damage</span>
                    <p className="text-gray-600 text-sm">Storm flooding affecting septic system</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Health Hazard</span>
                    <p className="text-gray-600 text-sm">Sewage exposure creating health risks</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Emergency Response</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">24/7 Availability</span>
                    <p className="text-gray-600 text-sm">Round-the-clock emergency service</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Rapid Response</span>
                    <p className="text-gray-600 text-sm">Quick arrival times throughout Miami</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Temporary Solutions</span>
                    <p className="text-gray-600 text-sm">Immediate fixes to restore function</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Follow-up Service</span>
                    <p className="text-gray-600 text-sm">Permanent repairs scheduled quickly</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Costs</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Emergency Call</h4>
                <p className="text-gray-600">$100 - $200</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">After Hours</h4>
                <p className="text-gray-600">+$50 - $150</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Weekend/Holiday</h4>
                <p className="text-gray-600">+$100 - $300</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Repair Process Section */}
      <div id="repair-process" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Septic Repair Process</h2>
            <p className="text-lg text-gray-600">
              Professional septic repair process in Miami
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Diagnosis</h3>
              <p className="text-gray-600">Thorough inspection to identify the exact problem and determine repair approach.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Estimate</h3>
              <p className="text-gray-600">Detailed cost estimate with timeline and explanation of repair options.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Repair</h3>
              <p className="text-gray-600">Professional repair work using appropriate materials and techniques for Miami conditions.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Testing</h3>
              <p className="text-gray-600">System testing and inspection to ensure repairs are working properly.</p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Repair Timeline</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Minor Repairs</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Same day service available</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">1-4 hours completion time</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Minimal disruption</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Major Repairs</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Clock className="w-5 h-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">1-3 days completion</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="w-5 h-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">Permit processing time</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="w-5 h-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">Weather considerations</span>
                  </li>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Miami-Specific Repair Challenges</h2>
              <p className="text-lg text-gray-600 mb-6">
                Miami's unique environment creates specific challenges for septic system repairs 
                that require specialized knowledge and techniques.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <AlertTriangle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">High Water Table</h3>
                    <p className="text-gray-600">Repairs must account for shallow groundwater that can interfere with work.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <AlertTriangle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Flood Risk</h3>
                    <p className="text-gray-600">Hurricane season requires special considerations for repair timing and materials.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <AlertTriangle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Soil Conditions</h3>
                    <p className="text-gray-600">Miami's sandy soil and limestone bedrock affect repair methods and costs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <AlertTriangle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Permit Requirements</h3>
                    <p className="text-gray-600">Miami-Dade County has strict permit requirements for septic repairs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
                alt="Septic repair challenges in Miami"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Prevention Tips Section */}
      <div id="prevention-tips" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Preventing Septic Repairs</h2>
            <p className="text-lg text-gray-600">
              How to avoid costly repairs in Miami's challenging environment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Regular Maintenance</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Schedule regular pumping every 2-3 years</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Annual system inspections</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Monitor drain field performance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Keep detailed maintenance records</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Proper Usage</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Avoid flushing non-biodegradable items</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Don't pour grease or chemicals down drains</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Conserve water during storms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Protect system from vehicle traffic</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Miami-Specific Prevention</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Storm Preparation</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Pump tank before hurricane season</li>
                  <li>• Reduce water usage during storms</li>
                  <li>• Have emergency contact ready</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">High Water Table</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Monitor drain field saturation</li>
                  <li>• Consider system upgrades</li>
                  <li>• Watch for standing water</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Choosing Contractor Section */}
      <div id="choosing-contractor" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choosing a Septic Repair Contractor</h2>
            <p className="text-lg text-gray-600">
              What to look for when selecting a septic repair service in Miami
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
                    <p className="text-gray-600 text-sm">Required for all septic repair work</p>
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
                    <span className="font-semibold text-gray-900">Emergency Service</span>
                    <p className="text-gray-600 text-sm">24/7 availability for urgent repairs</p>
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
                    <span className="font-semibold text-gray-900">Are you licensed in Miami-Dade County?</span>
                    <p className="text-gray-600 text-sm">Verify current license status</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Do you provide written estimates?</span>
                    <p className="text-gray-600 text-sm">Get detailed pricing before work begins</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">What's your warranty policy?</span>
                    <p className="text-gray-600 text-sm">Understand repair guarantees</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Do you handle permits?</span>
                    <p className="text-gray-600 text-sm">Ensure compliance with local regulations</p>
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
              Common questions about septic repairs in Miami
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I know if my septic system needs repair?</h3>
              <p className="text-gray-600">Signs include slow drains, sewage odors, wet spots in the yard, gurgling sounds, or sewage backups. In Miami's environment, these issues can develop quickly due to high water table and flooding.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What's the most common septic repair in Miami?</h3>
              <p className="text-gray-600">Drain field problems are most common due to Miami's high water table. Other frequent repairs include tank cracks from shifting soil, pump failures from flooding, and pipe blockages from root intrusion.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How much do septic repairs cost in Miami?</h3>
              <p className="text-gray-600">Minor repairs range from $200-$1,500, while major repairs like drain field replacement can cost $2,000-$8,000. Complete system replacement ranges from $8,000-$20,000. Emergency repairs cost more due to urgency and after-hours rates.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need permits for septic repairs in Miami?</h3>
              <p className="text-gray-600">Yes, Miami-Dade County requires permits for most septic repairs, especially those over $1,000 or involving structural changes. Licensed contractors handle permit applications and ensure compliance with local regulations.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How long do septic repairs take?</h3>
              <p className="text-gray-600">Minor repairs can often be completed the same day, while major repairs may take 1-3 days. Complex repairs requiring permits may take longer due to approval processes. Weather conditions in Miami can also affect timelines.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I repair my septic system myself?</h3>
              <p className="text-gray-600">No, septic repairs require specialized knowledge, equipment, and permits in Miami-Dade County. DIY repairs can be dangerous, illegal, and may void warranties. Always hire licensed professionals for septic work.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What should I do during a septic emergency?</h3>
              <p className="text-gray-600">Stop using water immediately, avoid flushing toilets, and call for emergency service. If sewage is backing up into your home, evacuate the affected area and contact a professional immediately. Document any damage for insurance purposes.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How can I prevent septic repairs?</h3>
              <p className="text-gray-600">Regular maintenance, proper usage, and early problem detection are key. Schedule pumping every 2-3 years, avoid flushing harmful materials, conserve water during storms, and address issues promptly before they become major problems.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Professional Septic Repairs in Miami?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get expert septic repair services tailored to Miami's unique environment. 
            Licensed professionals with local expertise and emergency availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/pricing/instant-quote?src=septic_miami_repair_end"
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
            "headline": "Septic Tank Repair Guide for Miami",
            "description": "Complete guide to septic tank repair services in Miami-Dade County including costs, emergency services, and prevention tips",
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
              "@id": "https://local-bizz-list.vercel.app/resources/septic-tank-services/miami/septic-tank-repair-guide"
            },
            "about": {
              "@type": "Thing",
              "name": "Septic Tank Repair Miami"
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
