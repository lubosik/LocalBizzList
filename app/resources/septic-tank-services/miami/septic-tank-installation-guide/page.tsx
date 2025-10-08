import Link from 'next/link'
import Image from 'next/image'
import { Clock, MapPin, Calendar, CheckCircle, AlertTriangle, DollarSign, Phone, Star } from 'lucide-react'

export const metadata = {
  title: "Septic Tank Installation Miami - Cost Guide & Process | Local Bizz List",
  description: "Complete guide to septic tank installation in Miami-Dade County. Learn costs, process, permits, and find licensed contractors. Expert installation for Miami's unique conditions.",
  keywords: ["septic tank installation Miami", "septic installation cost Miami", "Miami septic contractor", "septic system installation Miami", "new septic tank Miami"],
  canonical: "https://local-bizz-list.vercel.app/resources/septic-tank-services/miami/septic-tank-installation-guide"
}

export default function MiamiSepticInstallationGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Septic Tank Installation Guide for Miami
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Complete guide to septic system installation in Miami-Dade County
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/pricing/instant-quote?src=septic_miami_installation_hero"
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
              <li><a href="#installation-process" className="text-blue-600 hover:text-blue-800">Installation Process</a></li>
              <li><a href="#cost-breakdown" className="text-blue-600 hover:text-blue-800">Cost Breakdown</a></li>
              <li><a href="#permits-requirements" className="text-blue-600 hover:text-blue-800">Permits & Requirements</a></li>
              <li><a href="#miami-challenges" className="text-blue-600 hover:text-blue-800">Miami Challenges</a></li>
            </ul>
            <ul className="space-y-2">
              <li><a href="#system-types" className="text-blue-600 hover:text-blue-800">System Types</a></li>
              <li><a href="#site-preparation" className="text-blue-600 hover:text-blue-800">Site Preparation</a></li>
              <li><a href="#choosing-contractor" className="text-blue-600 hover:text-blue-800">Choosing Contractor</a></li>
              <li><a href="#faq" className="text-blue-600 hover:text-blue-800">Frequently Asked Questions</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Installation Process Section */}
      <div id="installation-process" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Septic Installation Process</h2>
            <p className="text-lg text-gray-600">
              Step-by-step process for septic system installation in Miami
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Site Evaluation</h3>
              <p className="text-gray-600">Soil testing, percolation tests, and site assessment to determine system design and location.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Permits & Design</h3>
              <p className="text-gray-600">Obtain Miami-Dade County permits and create detailed system design plans.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excavation</h3>
              <p className="text-gray-600">Excavate tank and drain field areas, accounting for Miami's high water table.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Installation</h3>
              <p className="text-gray-600">Install tank, pipes, and drain field with proper backfill and connections.</p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Detailed Installation Steps</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Pre-Installation</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Soil percolation testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Site survey and measurements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">System design and sizing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Permit application</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Installation</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Excavation and site prep</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Tank placement and leveling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Pipe installation and connections</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">Drain field construction</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cost Breakdown Section */}
      <div id="cost-breakdown" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Septic Installation Costs in Miami</h2>
            <p className="text-lg text-gray-600">
              Complete cost breakdown for septic system installation in Miami-Dade County
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Residential Systems</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Basic System (1000 gal)</span>
                  <span className="text-blue-600 font-bold">$8,000 - $12,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Standard System (1500 gal)</span>
                  <span className="text-blue-600 font-bold">$10,000 - $15,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Large System (2000+ gal)</span>
                  <span className="text-blue-600 font-bold">$12,000 - $20,000</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-900">Pump System</span>
                  <span className="text-blue-600 font-bold">+$2,000 - $4,000</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Commercial Systems</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Small Business</span>
                  <span className="text-blue-600 font-bold">$15,000 - $25,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Restaurant</span>
                  <span className="text-blue-600 font-bold">$20,000 - $35,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Large Commercial</span>
                  <span className="text-blue-600 font-bold">$30,000 - $50,000</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-900">Grease Trap System</span>
                  <span className="text-blue-600 font-bold">+$3,000 - $8,000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cost Breakdown</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Installation Components</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Tank: $2,000 - $5,000</li>
                  <li>• Drain field: $3,000 - $8,000</li>
                  <li>• Pipes & fittings: $500 - $1,500</li>
                  <li>• Labor: $3,000 - $6,000</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Additional Costs</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Permits: $200 - $800</li>
                  <li>• Soil testing: $300 - $600</li>
                  <li>• Excavation: $1,000 - $3,000</li>
                  <li>• Inspections: $200 - $500</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Permits & Requirements Section */}
      <div id="permits-requirements" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Permits & Requirements</h2>
            <p className="text-lg text-gray-600">
              Miami-Dade County requirements for septic system installation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Permits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Septic System Permit</span>
                    <p className="text-gray-600 text-sm">Required for all new installations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Building Permit</span>
                    <p className="text-gray-600 text-sm">May be required for commercial installations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Environmental Permit</span>
                    <p className="text-gray-600 text-sm">For systems near water bodies</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Utility Permits</span>
                    <p className="text-gray-600 text-sm">If crossing utility lines</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Soil Percolation Test</span>
                    <p className="text-gray-600 text-sm">Required to determine drain field size</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Setback Distances</span>
                    <p className="text-gray-600 text-sm">Minimum distances from property lines and structures</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">System Sizing</span>
                    <p className="text-gray-600 text-sm">Based on bedroom count and usage</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Inspections</span>
                    <p className="text-gray-600 text-sm">Required at various stages of installation</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Important Notes</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Permit Process</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Allow 2-4 weeks for permit approval</li>
                  <li>• Submit complete application with plans</li>
                  <li>• Pay all required fees upfront</li>
                  <li>• Schedule inspections promptly</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Compliance</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Work must be done by licensed contractor</li>
                  <li>• All inspections must pass</li>
                  <li>• System must meet current codes</li>
                  <li>• Final approval required before use</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Miami Challenges Section */}
      <div id="miami-challenges" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Miami Installation Challenges</h2>
              <p className="text-lg text-gray-600 mb-6">
                Miami's unique environment creates specific challenges for septic system installation 
                that require specialized knowledge and techniques.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <AlertTriangle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">High Water Table</h3>
                    <p className="text-gray-600">Shallow groundwater requires special installation techniques and may limit system options.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <AlertTriangle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Soil Conditions</h3>
                    <p className="text-gray-600">Sandy soil and limestone bedrock affect excavation and drain field design.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <AlertTriangle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Flood Risk</h3>
                    <p className="text-gray-600">Hurricane season requires special considerations for system placement and protection.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <AlertTriangle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Space Limitations</h3>
                    <p className="text-gray-600">Small lots and dense development limit system placement options.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
                alt="Septic installation challenges in Miami"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* System Types Section */}
      <div id="system-types" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Septic System Types</h2>
            <p className="text-lg text-gray-600">
              Different septic system options for Miami properties
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Conventional System</h3>
              <p className="text-gray-600 mb-4">Standard gravity-fed system with tank and drain field.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Most common type</li>
                <li>• Requires good soil percolation</li>
                <li>• Lower installation cost</li>
                <li>• Suitable for most properties</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Pump System</h3>
              <p className="text-gray-600 mb-4">System with pump to move effluent to drain field.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• For high water table areas</li>
                <li>• Requires electrical connection</li>
                <li>• Higher maintenance needs</li>
                <li>• Good for Miami conditions</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Aerobic System</h3>
              <p className="text-gray-600 mb-4">Advanced system with oxygen treatment.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Higher treatment level</li>
                <li>• Requires electricity</li>
                <li>• More expensive to install</li>
                <li>• Good for sensitive areas</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Mound System</h3>
              <p className="text-gray-600 mb-4">Raised drain field for poor soil conditions.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• For high water table</li>
                <li>• Requires more space</li>
                <li>• Higher installation cost</li>
                <li>• Good for Miami's conditions</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Chamber System</h3>
              <p className="text-gray-600 mb-4">Plastic chambers instead of gravel drain field.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Easier installation</li>
                <li>• Better for high water table</li>
                <li>• Requires less excavation</li>
                <li>• Good for Miami</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Drip System</h3>
              <p className="text-gray-600 mb-4">Slow-release system with small pipes.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Requires pump system</li>
                <li>• Good for small lots</li>
                <li>• Higher maintenance</li>
                <li>• Suitable for Miami</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Site Preparation Section */}
      <div id="site-preparation" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Site Preparation</h2>
            <p className="text-lg text-gray-600">
              Preparing your property for septic system installation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Before Installation</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Clear installation area of obstacles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Mark utility lines and underground services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Ensure contractor access to site</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Arrange for temporary water/sewer</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Obtain all required permits</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">During Installation</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <span className="text-gray-700">Stay away from work areas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <span className="text-gray-700">Keep children and pets indoors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <span className="text-gray-700">Avoid using water during work</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <span className="text-gray-700">Be available for questions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <span className="text-gray-700">Document installation process</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Miami-Specific Preparation</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Weather Considerations</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Schedule during dry season when possible</li>
                  <li>• Have backup plan for rain delays</li>
                  <li>• Protect work area from flooding</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Soil Conditions</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Allow extra time for sandy soil excavation</li>
                  <li>• Plan for limestone bedrock challenges</li>
                  <li>• Consider high water table impact</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choosing an Installation Contractor</h2>
            <p className="text-lg text-gray-600">
              What to look for when selecting a septic installation contractor in Miami
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
                    <p className="text-gray-600 text-sm">Required for all septic installation work</p>
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
                    <span className="font-semibold text-gray-900">Permit Handling</span>
                    <p className="text-gray-600 text-sm">Experience with Miami-Dade County permits</p>
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
                    <span className="font-semibold text-gray-900">How many Miami installations have you done?</span>
                    <p className="text-gray-600 text-sm">Verify local experience</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Do you handle all permits?</span>
                    <p className="text-gray-600 text-sm">Ensure complete service</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">What's your warranty policy?</span>
                    <p className="text-gray-600 text-sm">Understand coverage terms</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Can you provide references?</span>
                    <p className="text-gray-600 text-sm">Check previous work quality</p>
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
              Common questions about septic installation in Miami
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How much does septic installation cost in Miami?</h3>
              <p className="text-gray-600">Residential septic installation typically costs $8,000-$20,000 in Miami, depending on system size, soil conditions, and site challenges. Commercial systems range from $15,000-$50,000.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How long does septic installation take?</h3>
              <p className="text-gray-600">Most residential installations take 3-7 days, including excavation, installation, and backfill. Commercial systems may take 1-2 weeks. Permit processing adds 2-4 weeks to the timeline.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need permits for septic installation in Miami?</h3>
              <p className="text-gray-600">Yes, Miami-Dade County requires permits for all septic installations. Licensed contractors handle permit applications, which typically take 2-4 weeks for approval.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What type of septic system is best for Miami?</h3>
              <p className="text-gray-600">Due to Miami's high water table, pump systems, mound systems, or chamber systems are often recommended over conventional gravity systems. The best choice depends on your specific site conditions.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I install a septic system myself?</h3>
              <p className="text-gray-600">No, septic installation requires specialized knowledge, equipment, and permits in Miami-Dade County. DIY installation is illegal and can result in fines and system failure.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What happens if my property doesn't meet requirements?</h3>
              <p className="text-gray-600">If your property doesn't meet septic requirements, you may need to consider alternative systems, connect to municipal sewer if available, or explore other wastewater treatment options.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I choose the right contractor?</h3>
              <p className="text-gray-600">Look for contractors licensed in Miami-Dade County with local experience, proper insurance, and good references. Get multiple estimates and ask about warranties and permit handling.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What maintenance will my new system need?</h3>
              <p className="text-gray-600">New systems require regular pumping every 2-3 years, annual inspections, and proper usage habits. Pump systems need additional electrical maintenance and monitoring.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready for Professional Septic Installation in Miami?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get expert septic installation services tailored to Miami's unique environment. 
            Licensed professionals with local expertise and permit handling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/pricing/instant-quote?src=septic_miami_installation_end"
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
            "headline": "Septic Tank Installation Guide for Miami",
            "description": "Complete guide to septic tank installation in Miami-Dade County including costs, process, permits, and contractor selection",
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
              "@id": "https://local-bizz-list.vercel.app/resources/septic-tank-services/miami/septic-tank-installation-guide"
            },
            "about": {
              "@type": "Thing",
              "name": "Septic Tank Installation Miami"
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
