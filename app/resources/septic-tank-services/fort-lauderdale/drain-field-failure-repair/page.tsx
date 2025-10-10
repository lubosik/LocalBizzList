import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Clock, 
  MapPin, 
  Calendar, 
  CheckCircle, 
  AlertTriangle, 
  DollarSign, 
  Wrench, 
  Droplets, 
  Shield, 
  FileText, 
  HelpCircle, 
  Settings, 
  Zap, 
  Users, 
  Phone, 
  Star, 
  Award, 
  TrendingUp, 
  ArrowRight, 
  Building, 
  Utensils,
  TreePine,
  Gauge,
  Activity,
  AlertCircle,
  HardHat,
  Truck
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Drain Field Failure Repair Services Fort Lauderdale | Expert Solutions',
  description: 'Professional drain field failure repair and replacement services in Fort Lauderdale. Expert diagnosis, restoration, and emergency response for leach field problems.',
  keywords: 'drain field failure, leach field repair, septic drain field problems, drain field replacement, Fort Lauderdale septic repair, emergency drain field service',
  openGraph: {
    title: 'Drain Field Failure Repair Services Fort Lauderdale | Expert Solutions',
    description: 'Professional drain field failure repair and replacement services in Fort Lauderdale. Expert diagnosis, restoration, and emergency response for leach field problems.',
    type: 'website',
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Drain Field Failure Repair Services Fort Lauderdale | Expert Solutions",
  "description": "Professional drain field failure repair and replacement services in Fort Lauderdale. Expert diagnosis, restoration, and emergency response for leach field problems.",
  "author": {
    "@type": "Organization",
    "name": "Local Bizz List"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Local Bizz List",
    "logo": {
      "@type": "ImageObject",
      "url": "https://localbizzlist.vercel.app/logo.png"
    }
  },
  "datePublished": "2025-01-15",
  "dateModified": "2025-01-15",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://localbizzlist.vercel.app/resources/septic-tank-services/fort-lauderdale/drain-field-failure-repair"
  },
  "image": "https://localbizzlist.vercel.app/images/septic-drain-field-repair.jpg"
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the signs of drain field failure in Fort Lauderdale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common signs include standing water or soggy spots in your yard, slow drains throughout the house, foul odors around the septic system, unusually lush green grass over the drain field, and sewage backups into your home. In Fort Lauderdale's high water table conditions, these symptoms can appear more quickly."
      }
    },
    {
      "@type": "Question",
      "name": "How much does drain field repair cost in Fort Lauderdale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drain field repair costs in Fort Lauderdale typically range from $3,000 to $15,000 depending on the extent of damage. Minor repairs like jetting and cleaning cost $1,500-$3,000, while complete replacement can cost $8,000-$15,000. South Florida's high water table and sandy soil can affect pricing."
      }
    },
    {
      "@type": "Question",
      "name": "Can a failed drain field be repaired without replacement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, many drain field failures can be repaired without complete replacement. Methods include high-pressure jetting to clear blockages, soil aeration to restore absorption, bacterial treatments to break down biomat, and partial replacement of damaged sections. Professional assessment determines the best approach."
      }
    },
    {
      "@type": "Question",
      "name": "How long does drain field repair take in Fort Lauderdale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Repair time varies by method: jetting and cleaning takes 4-8 hours, soil restoration requires 1-3 days, partial replacement takes 2-5 days, and complete replacement requires 5-10 days. Fort Lauderdale's weather and permit requirements can affect timelines."
      }
    },
    {
      "@type": "Question",
      "name": "What causes drain field failure in South Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common causes include high water table conditions, tree root invasion, excessive water usage, lack of maintenance, grease and chemical buildup, soil compaction, and aging systems. Fort Lauderdale's sandy soil and frequent rainfall can accelerate failure."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need permits for drain field repair in Fort Lauderdale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most drain field repairs require permits in Fort Lauderdale. Minor repairs may only need a plumbing permit, while major work requires septic system permits from Broward County Environmental Services. Professional contractors handle permit applications and inspections."
      }
    },
    {
      "@type": "Question",
      "name": "How can I prevent drain field failure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prevention includes regular septic tank pumping every 3-5 years, conserving water usage, avoiding harsh chemicals, keeping vehicles off the drain field, managing surface water drainage, and scheduling professional inspections. In Fort Lauderdale, consider the high water table in landscaping decisions."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between repair and replacement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Repair involves restoring existing drain field function through cleaning, aeration, or partial replacement. Replacement means installing a completely new drain field system. Repair is less expensive and faster, while replacement provides longer-term solutions for severely damaged systems."
      }
    }
  ]
}

export default function DrainFieldFailureRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Drain Field Failure Repair Services Fort Lauderdale
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert diagnosis, restoration, and replacement services for failed drain fields in Fort Lauderdale and Broward County. Professional solutions for leach field problems with emergency response available.
              </p>
              <div className="flex items-center justify-center mt-6 space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>12 min read</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Updated Jan 15, 2025</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Fort Lauderdale, FL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Link href="#signs-failure" className="block text-blue-600 hover:text-blue-800">Signs of Drain Field Failure</Link>
                <Link href="#fort-lauderdale-challenges" className="block text-blue-600 hover:text-blue-800">Fort Lauderdale-Specific Challenges</Link>
                <Link href="#diagnosis-process" className="block text-blue-600 hover:text-blue-800">Professional Diagnosis Process</Link>
                <Link href="#repair-methods" className="block text-blue-600 hover:text-blue-800">Repair Methods & Solutions</Link>
              </div>
              <div className="space-y-2">
                <Link href="#replacement-options" className="block text-blue-600 hover:text-blue-800">Replacement Options</Link>
                <Link href="#cost-estimates" className="block text-blue-600 hover:text-blue-800">Cost Estimates & Financing</Link>
                <Link href="#prevention-strategies" className="block text-blue-600 hover:text-blue-800">Prevention Strategies</Link>
                <Link href="#local-regulations" className="block text-blue-600 hover:text-blue-800">Local Regulations & Permits</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Signs of Drain Field Failure */}
              <section id="signs-failure" className="bg-white rounded-lg shadow-sm p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
                  Signs of Drain Field Failure
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <h3 className="text-lg font-semibold text-red-800 mb-2">Indoor Warning Signs</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                        <span><strong>Slow Drains:</strong> Sinks, showers, and toilets drain much slower than usual</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                        <span><strong>Gurgling Sounds:</strong> Noises from plumbing when water is draining</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                        <span><strong>Sewage Backups:</strong> Wastewater backing up into toilets, sinks, or showers</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                        <span><strong>Foul Odors:</strong> Sewage smells inside your home</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">Outdoor Warning Signs</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                        <span><strong>Standing Water:</strong> Pools of water or soggy spots in your yard</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                        <span><strong>Lush Green Grass:</strong> Unusually bright, spongy grass over the drain field</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                        <span><strong>Sewage Odors:</strong> Foul smells around the septic system area</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                        <span><strong>Surface Sewage:</strong> Wastewater appearing on the ground surface</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Fort Lauderdale-Specific Challenges */}
              <section id="fort-lauderdale-challenges" className="bg-white rounded-lg shadow-sm p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="h-8 w-8 text-blue-500 mr-3" />
                  Fort Lauderdale-Specific Challenges
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                      <Droplets className="h-5 w-5 mr-2" />
                      High Water Table
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Fort Lauderdale's high water table creates unique challenges for drain fields. The water table can be within 2-3 feet of the surface, limiting soil absorption capacity.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Reduced soil percolation rates</li>
                      <li>• Increased system saturation</li>
                      <li>• Higher failure rates during wet seasons</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                      <TreePine className="h-5 w-5 mr-2" />
                      Sandy Soil Conditions
                    </h3>
                    <p className="text-gray-700 mb-3">
                      South Florida's sandy soil provides good drainage but can collapse under pressure, leading to pipe damage and system failure.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Soil compaction issues</li>
                      <li>• Pipe collapse from shifting sand</li>
                      <li>• Reduced structural support</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-orange-800 mb-3 flex items-center">
                      <Gauge className="h-5 w-5 mr-2" />
                      Hurricane Season Impact
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Heavy rainfall and flooding during hurricane season can overwhelm drain fields, causing temporary or permanent failure.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• System overload from excessive water</li>
                      <li>• Flooding damage to components</li>
                      <li>• Increased maintenance needs</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-800 mb-3 flex items-center">
                      <Building className="h-5 w-5 mr-2" />
                      Urban Development Pressure
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Rapid development in Fort Lauderdale has increased pressure on existing septic systems and created space constraints for repairs.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Limited space for new drain fields</li>
                      <li>• Increased system usage</li>
                      <li>• Higher replacement costs</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Professional Diagnosis Process */}
              <section id="diagnosis-process" className="bg-white rounded-lg shadow-sm p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Activity className="h-8 w-8 text-green-500 mr-3" />
                  Professional Diagnosis Process
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 1: Visual Inspection</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Outdoor Assessment</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Drain field surface conditions</li>
                          <li>• Vegetation growth patterns</li>
                          <li>• Standing water or wet spots</li>
                          <li>• Odor detection</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Indoor Assessment</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Drainage speed testing</li>
                          <li>• Gurgling sound detection</li>
                          <li>• Backup evidence</li>
                          <li>• Odor source identification</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Step 2: System Testing</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Dye Testing</h4>
                        <p className="text-sm text-gray-600">Fluorescent dye added to system to trace flow patterns and identify failure points.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Percolation Testing</h4>
                        <p className="text-sm text-gray-600">Soil absorption rate testing to determine if drain field can handle wastewater load.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Camera Inspection</h4>
                        <p className="text-sm text-gray-600">Video inspection of drain field pipes to identify blockages, root intrusion, or damage.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">Step 3: Analysis & Recommendations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Failure Assessment</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Extent of damage evaluation</li>
                          <li>• Root cause identification</li>
                          <li>• Repair vs. replacement analysis</li>
                          <li>• Cost-benefit assessment</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Solution Options</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Repair method recommendations</li>
                          <li>• Timeline and cost estimates</li>
                          <li>• Permit requirements</li>
                          <li>• Maintenance recommendations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Repair Methods & Solutions */}
              <section id="repair-methods" className="bg-white rounded-lg shadow-sm p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Wrench className="h-8 w-8 text-blue-500 mr-3" />
                  Repair Methods & Solutions
                </h2>
                
                <div className="space-y-8">
                  <div className="border-l-4 border-blue-400 pl-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">High-Pressure Jetting</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Process</h4>
                        <p className="text-gray-600 mb-4">
                          High-pressure water jets (up to 3,000 PSI) are used to clear blockages, remove biomat buildup, and restore flow through drain field pipes.
                        </p>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-blue-800 mb-2">Best For:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Grease and sludge buildup</li>
                            <li>• Root intrusion</li>
                            <li>• Partial blockages</li>
                            <li>• Biomass accumulation</li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Benefits</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Non-invasive repair method</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Cost-effective solution</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Quick turnaround time</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Minimal landscaping disruption</span>
                          </li>
                        </ul>
                        <div className="mt-4 p-3 bg-green-50 rounded-lg">
                          <p className="text-sm text-green-800">
                            <strong>Cost:</strong> $1,500 - $3,000<br />
                            <strong>Duration:</strong> 4-8 hours<br />
                            <strong>Success Rate:</strong> 70-80%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-400 pl-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Soil Aeration & Restoration</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Process</h4>
                        <p className="text-gray-600 mb-4">
                          Specialized equipment is used to aerate compacted soil, break up biomat layers, and restore the soil's ability to absorb wastewater.
                        </p>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-green-800 mb-2">Best For:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Soil compaction issues</li>
                            <li>• Biomat buildup</li>
                            <li>• Reduced percolation rates</li>
                            <li>• Early-stage failures</li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Benefits</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Restores natural soil function</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Environmentally friendly</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Long-lasting results</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Improves system efficiency</span>
                          </li>
                        </ul>
                        <div className="mt-4 p-3 bg-green-50 rounded-lg">
                          <p className="text-sm text-green-800">
                            <strong>Cost:</strong> $2,000 - $4,000<br />
                            <strong>Duration:</strong> 1-3 days<br />
                            <strong>Success Rate:</strong> 60-70%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-400 pl-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Bacterial Treatment</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Process</h4>
                        <p className="text-gray-600 mb-4">
                          Specialized bacteria and enzymes are introduced to break down organic matter, reduce biomat buildup, and restore natural biological processes.
                        </p>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-purple-800 mb-2">Best For:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Organic matter buildup</li>
                            <li>• Biomat reduction</li>
                            <li>• Preventive maintenance</li>
                            <li>• System optimization</li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Benefits</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Natural biological process</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Safe for environment</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Ongoing system improvement</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Cost-effective maintenance</span>
                          </li>
                        </ul>
                        <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                          <p className="text-sm text-purple-800">
                            <strong>Cost:</strong> $500 - $1,500<br />
                            <strong>Duration:</strong> 2-4 weeks<br />
                            <strong>Success Rate:</strong> 50-60%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Replacement Options */}
              <section id="replacement-options" className="bg-white rounded-lg shadow-sm p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <HardHat className="h-8 w-8 text-orange-500 mr-3" />
                  Replacement Options
                </h2>
                
                <div className="space-y-8">
                  <div className="bg-orange-50 border-l-4 border-orange-400 p-6">
                    <h3 className="text-2xl font-semibold text-orange-800 mb-4">Partial Replacement</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">When to Consider</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                            <span>Only one section of drain field is damaged</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                            <span>Root intrusion in specific area</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                            <span>Localized soil compaction</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                            <span>Budget constraints</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Process & Benefits</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Lower cost than full replacement</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Faster completion time</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Minimal landscaping disruption</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Extends system life by 5-10 years</span>
                          </li>
                        </ul>
                        <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                          <p className="text-sm text-orange-800">
                            <strong>Cost:</strong> $3,000 - $8,000<br />
                            <strong>Duration:</strong> 2-5 days<br />
                            <strong>Warranty:</strong> 2-5 years
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-400 p-6">
                    <h3 className="text-2xl font-semibold text-red-800 mb-4">Complete Replacement</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">When Required</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                            <span>System age over 25-30 years</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                            <span>Multiple failure points</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                            <span>Severe soil contamination</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                            <span>Inadequate system size</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Modern System Features</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Advanced distribution systems</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Improved drainage materials</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Better soil compatibility</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Extended warranty coverage</span>
                          </li>
                        </ul>
                        <div className="mt-4 p-3 bg-red-50 rounded-lg">
                          <p className="text-sm text-red-800">
                            <strong>Cost:</strong> $8,000 - $15,000<br />
                            <strong>Duration:</strong> 5-10 days<br />
                            <strong>Warranty:</strong> 5-10 years
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cost Estimates & Financing */}
              <section id="cost-estimates" className="bg-white rounded-lg shadow-sm p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <DollarSign className="h-8 w-8 text-green-500 mr-3" />
                  Cost Estimates & Financing
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Fort Lauderdale Pricing Factors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Cost Influencers</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                            <span>High water table conditions</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                            <span>Sandy soil excavation costs</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                            <span>Permit and inspection fees</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                            <span>Landscaping restoration</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Typical Ranges</h4>
                        <div className="space-y-3">
                          <div className="bg-white p-3 rounded border">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">Minor Repairs</span>
                              <span className="text-green-600 font-semibold">$1,500 - $3,000</span>
                            </div>
                          </div>
                          <div className="bg-white p-3 rounded border">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">Moderate Repairs</span>
                              <span className="text-blue-600 font-semibold">$3,000 - $8,000</span>
                            </div>
                          </div>
                          <div className="bg-white p-3 rounded border">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">Complete Replacement</span>
                              <span className="text-red-600 font-semibold">$8,000 - $15,000</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">Financing Options</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Payment Plans</h4>
                        <p className="text-sm text-gray-600 mb-2">Flexible payment arrangements</p>
                        <ul className="text-xs text-gray-500 space-y-1">
                          <li>• 0% interest for 12 months</li>
                          <li>• Monthly payment options</li>
                          <li>• No prepayment penalties</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Financing Partners</h4>
                        <p className="text-sm text-gray-600 mb-2">Third-party financing options</p>
                        <ul className="text-xs text-gray-500 space-y-1">
                          <li>• Competitive interest rates</li>
                          <li>• Quick approval process</li>
                          <li>• Extended repayment terms</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Insurance Claims</h4>
                        <p className="text-sm text-gray-600 mb-2">Help with insurance processes</p>
                        <ul className="text-xs text-gray-500 space-y-1">
                          <li>• Damage documentation</li>
                          <li>• Claim filing assistance</li>
                          <li>• Direct billing options</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Prevention Strategies */}
              <section id="prevention-strategies" className="bg-white rounded-lg shadow-sm p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="h-8 w-8 text-blue-500 mr-3" />
                  Prevention Strategies
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Regular Maintenance</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Scheduled Services</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                            <span>Septic tank pumping every 3-5 years</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                            <span>Annual system inspections</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                            <span>Drain field cleaning every 5-7 years</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                            <span>Bacterial treatment quarterly</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">DIY Maintenance</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Water conservation practices</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Avoid harsh chemicals</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Proper waste disposal</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Monitor system performance</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">Fort Lauderdale-Specific Tips</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Water Management</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Install low-flow fixtures</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Space out laundry loads</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Fix leaks immediately</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Manage surface water drainage</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Landscaping Considerations</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Avoid planting trees near drain field</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Keep vehicles off the area</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Use native plants</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Maintain proper grading</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Local Regulations & Permits */}
              <section id="local-regulations" className="bg-white rounded-lg shadow-sm p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="h-8 w-8 text-purple-500 mr-3" />
                  Local Regulations & Permits
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-800 mb-4">Broward County Requirements</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Permit Requirements</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                            <span>Septic system repair permits</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                            <span>Environmental impact assessment</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                            <span>Soil percolation testing</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                            <span>Professional engineer approval</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Inspection Process</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Pre-construction inspection</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>During construction monitoring</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Final system inspection</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Annual compliance checks</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Fort Lauderdale Specific Regulations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Environmental Considerations</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                            <span>Water table protection</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                            <span>Coastal zone compliance</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                            <span>Stormwater management</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                            <span>Wildlife protection</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Professional Requirements</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Licensed septic contractors</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Engineer certification</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Environmental compliance</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>Insurance requirements</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <HelpCircle className="h-8 w-8 text-blue-500 mr-3" />
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      What are the signs of drain field failure in Fort Lauderdale?
                    </h3>
                    <p className="text-gray-600">
                      Common signs include standing water or soggy spots in your yard, slow drains throughout the house, foul odors around the septic system, unusually lush green grass over the drain field, and sewage backups into your home. In Fort Lauderdale's high water table conditions, these symptoms can appear more quickly.
                    </p>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      How much does drain field repair cost in Fort Lauderdale?
                    </h3>
                    <p className="text-gray-600">
                      Drain field repair costs in Fort Lauderdale typically range from $3,000 to $15,000 depending on the extent of damage. Minor repairs like jetting and cleaning cost $1,500-$3,000, while complete replacement can cost $8,000-$15,000. South Florida's high water table and sandy soil can affect pricing.
                    </p>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Can a failed drain field be repaired without replacement?
                    </h3>
                    <p className="text-gray-600">
                      Yes, many drain field failures can be repaired without complete replacement. Methods include high-pressure jetting to clear blockages, soil aeration to restore absorption, bacterial treatments to break down biomat, and partial replacement of damaged sections. Professional assessment determines the best approach.
                    </p>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      How long does drain field repair take in Fort Lauderdale?
                    </h3>
                    <p className="text-gray-600">
                      Repair time varies by method: jetting and cleaning takes 4-8 hours, soil restoration requires 1-3 days, partial replacement takes 2-5 days, and complete replacement requires 5-10 days. Fort Lauderdale's weather and permit requirements can affect timelines.
                    </p>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      What causes drain field failure in South Florida?
                    </h3>
                    <p className="text-gray-600">
                      Common causes include high water table conditions, tree root invasion, excessive water usage, lack of maintenance, grease and chemical buildup, soil compaction, and aging systems. Fort Lauderdale's sandy soil and frequent rainfall can accelerate failure.
                    </p>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Do I need permits for drain field repair in Fort Lauderdale?
                    </h3>
                    <p className="text-gray-600">
                      Yes, most drain field repairs require permits in Fort Lauderdale. Minor repairs may only need a plumbing permit, while major work requires septic system permits from Broward County Environmental Services. Professional contractors handle permit applications and inspections.
                    </p>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      How can I prevent drain field failure?
                    </h3>
                    <p className="text-gray-600">
                      Prevention includes regular septic tank pumping every 3-5 years, conserving water usage, avoiding harsh chemicals, keeping vehicles off the drain field, managing surface water drainage, and scheduling professional inspections. In Fort Lauderdale, consider the high water table in landscaping decisions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      What's the difference between repair and replacement?
                    </h3>
                    <p className="text-gray-600">
                      Repair involves restoring existing drain field function through cleaning, aeration, or partial replacement. Replacement means installing a completely new drain field system. Repair is less expensive and faster, while replacement provides longer-term solutions for severely damaged systems.
                    </p>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-8 text-white">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4">Need Drain Field Repair in Fort Lauderdale?</h2>
                  <p className="text-xl mb-6 opacity-90">
                    Get professional diagnosis and repair services for your failed drain field. Emergency response available 24/7.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/pricing/instant-quote?src=drain-field-repair"
                      className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                    >
                      <DollarSign className="h-5 w-5 mr-2" />
                      Get Free Quote
                    </Link>
                    <Link 
                      href="tel:+15551234567"
                      className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Call Now
                    </Link>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Related Services */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Services</h3>
                  <div className="space-y-3">
                    <Link href="/resources/septic-tank-services/fort-lauderdale/septic-system-odor-troubleshooting" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <h4 className="font-medium text-gray-900">Septic System Odor Troubleshooting</h4>
                      <p className="text-sm text-gray-600">Effective solutions for persistent septic odors</p>
                    </Link>
                    <Link href="/resources/septic-tank-services/fort-lauderdale/septic-tank-pumping-frequency" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <h4 className="font-medium text-gray-900">Septic Tank Pumping Schedule</h4>
                      <p className="text-sm text-gray-600">Optimal pumping frequency for Fort Lauderdale</p>
                    </Link>
                    <Link href="/resources/septic-tank-services/fort-lauderdale/septic-system-inspection" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <h4 className="font-medium text-gray-900">System Inspection Services</h4>
                      <p className="text-sm text-gray-600">Comprehensive septic system inspections</p>
                    </Link>
                  </div>
                </div>

                {/* Emergency Services */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Emergency Services
                  </h3>
                  <p className="text-red-700 mb-4">
                    Drain field failure can cause sewage backups and property damage. We provide 24/7 emergency response.
                  </p>
                  <Link 
                    href="tel:+15551234567"
                    className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Emergency Line
                  </Link>
                </div>

                {/* Service Areas */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Areas</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                      <span>Fort Lauderdale</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                      <span>Pompano Beach</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                      <span>Deerfield Beach</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                      <span>Plantation</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                      <span>Sunrise</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                      <span>All Broward County</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
