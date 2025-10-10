import Link from 'next/link'
import Image from 'next/image'
import { Clock, MapPin, Calendar, CheckCircle, AlertTriangle, DollarSign, FileText, Shield, Wrench, Droplets, Users, Phone, Star, Award, TrendingUp, ArrowRight, Building, Settings, Zap, HelpCircle } from 'lucide-react'

export const metadata = {
  title: "Complete Septic Inspection Checklist for Miami Properties | Miami-Dade County Requirements",
  description: "Comprehensive septic inspection checklist for Miami properties. Learn Miami-Dade County requirements, what inspectors look for, costs, and how to prepare your system for inspection.",
  keywords: ["septic inspection Miami", "septic inspection checklist Miami", "Miami-Dade septic inspection", "septic system inspection Miami", "septic tank inspection Miami", "septic inspection cost Miami", "Miami septic inspector", "septic inspection report Miami"],
  category: "compliance-inspections",
  city: "Miami",
  thumbnail: "https://images.unsplash.com/photo-1706206140285-fd36d93aaa83?ixid=M3w4MTM5NjB8MHwxfHNlYXJjaHwxfHxzZXB0aWMlMjBpbnNwZWN0aW9uJTIwdXRpbGl0eXxlbnwwfDB8fHwxNzYwMTIwMzkwfDA&ixlib=rb-4.1.0&w=1600&auto=format&q=80",
  author: "LocalBizzList Team",
  publishedAt: "2024-01-15",
  updatedAt: "2024-01-15",
  readTime: "12 min",
  h1: "Complete Septic Inspection Checklist for Miami Properties",
  canonical: "https://local-bizz-list.vercel.app/resources/septic-tank-services/miami/septic-inspection-checklist"
}

export default function MiamiSepticInspectionChecklist() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Septic Inspection Checklist for Miami Properties",
    "description": "Comprehensive septic inspection checklist for Miami properties. Learn Miami-Dade County requirements, what inspectors look for, costs, and how to prepare your system for inspection.",
    "image": "https://images.unsplash.com/photo-1706206140285-fd36d93aaa83?ixid=M3w4MTM5NjB8MHwxfHNlYXJjaHwxfHxzZXB0aWMlMjBpbnNwZWN0aW9uJTIwdXRpbGl0eXxlbnwwfDB8fHwxNzYwMTIwMzkwfDA&ixlib=rb-4.1.0&w=1600&auto=format&q=80",
    "author": {
      "@type": "Organization",
      "name": "LocalBizzList Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LocalBizzList",
      "logo": {
        "@type": "ImageObject",
        "url": "https://local-bizz-list.vercel.app/logo.png"
      }
    },
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://local-bizz-list.vercel.app/resources/septic-tank-services/miami/septic-inspection-checklist"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a septic inspection cost in Miami?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Septic inspection costs in Miami typically range from $300-$650 depending on the type of inspection. Basic visual inspections cost $150-$450, while comprehensive inspections for real estate transactions cost $300-$650. Miami-Dade County inspections may have additional fees."
        }
      },
      {
        "@type": "Question",
        "name": "Is septic inspection required in Miami-Dade County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While Florida doesn't legally require septic inspections for all properties, Miami-Dade County recommends inspections every 3-5 years. Inspections are often required for real estate transactions, new installations, and when applying for permits."
        }
      },
      {
        "@type": "Question",
        "name": "What does a septic inspection include in Miami?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A comprehensive septic inspection in Miami includes tank condition assessment, pipe evaluation, liquid level measurement, drain field inspection, pump system testing, and compliance with Miami-Dade County regulations. The inspector will check for leaks, blockages, and system functionality."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a septic inspection take in Miami?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most septic inspections in Miami take 1-3 hours depending on system complexity. Basic visual inspections take 30-60 minutes, while comprehensive inspections with camera work and testing can take 2-3 hours. The inspector will provide a detailed report within 24-48 hours."
        }
      },
      {
        "@type": "Question",
        "name": "Can I prepare my septic system for inspection myself?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can prepare your septic system for inspection by ensuring access to all components, clearing vegetation around the tank and drain field, providing system records, and avoiding water usage during the inspection. However, the actual inspection must be performed by a licensed professional."
        }
      },
      {
        "@type": "Question",
        "name": "What are common septic problems found during Miami inspections?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common problems found during Miami septic inspections include high water table issues, drain field saturation, tank cracks or leaks, pipe blockages, pump failures, and non-compliance with Miami-Dade County regulations. High humidity and frequent rainfall can accelerate these issues."
        }
      },
      {
        "@type": "Question",
        "name": "Who can perform septic inspections in Miami?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Miami, septic inspections must be performed by state-licensed septic tank contractors, licensed plumbers, or certified environmental health professionals. Miami-Dade County maintains a list of approved inspectors who meet local requirements and regulations."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if my septic system fails inspection in Miami?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your septic system fails inspection in Miami, you'll receive a detailed report outlining required repairs. You may need to pump the tank, repair or replace components, or upgrade the system to meet Miami-Dade County standards. Some issues may require permits before repairs can begin."
        }
      }
    ]
  }

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
      
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <nav className="bg-gray-50 border-b" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 py-3">
              <li><Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/resources" className="text-gray-500 hover:text-gray-700">Resources</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/services/septic-tank-services" className="text-gray-500 hover:text-gray-700">Septic Tank Services</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/locations/miami" className="text-gray-500 hover:text-gray-700">Miami</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">{metadata.h1}</li>
            </ol>
          </div>
        </nav>

        {/* Article Header */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">Compliance & Inspections</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">Miami</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{metadata.h1}</h1>
            
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>{metadata.readTime}</span></div>
              <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /><span>{metadata.city}</span></div>
              <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>{new Date(metadata.publishedAt).toLocaleDateString()}</span></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Miami-Dade County septic inspections require specific preparation and knowledge of local regulations. 
                This comprehensive checklist helps you understand what inspectors look for, how to prepare your system, 
                and what to expect during the inspection process in Miami's unique environment.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Professional Septic Inspection?</h3>
                <p className="text-blue-800 mb-4">Get certified septic inspection service in Miami with licensed professionals who understand Miami-Dade County requirements.</p>
                <Link href="/pricing/instant-quote?src=septic_miami_septic-inspection-checklist_mid" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Get Instant Quote</Link>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
                <ul className="space-y-2 text-gray-700">
                  <li><a href="#miami-requirements" className="text-blue-600 hover:text-blue-800">Miami-Dade County Inspection Requirements</a></li>
                  <li><a href="#inspection-costs" className="text-blue-600 hover:text-blue-800">Septic Inspection Costs in Miami</a></li>
                  <li><a href="#pre-inspection-checklist" className="text-blue-600 hover:text-blue-800">Pre-Inspection Preparation Checklist</a></li>
                  <li><a href="#inspection-process" className="text-blue-600 hover:text-blue-800">What Happens During Inspection</a></li>
                  <li><a href="#common-issues" className="text-blue-600 hover:text-blue-800">Common Issues Found in Miami</a></li>
                  <li><a href="#post-inspection" className="text-blue-600 hover:text-blue-800">After the Inspection</a></li>
                  <li><a href="#faq" className="text-blue-600 hover:text-blue-800">Frequently Asked Questions</a></li>
                </ul>
              </div>

              {/* Miami-Dade County Requirements */}
              <section id="miami-requirements" className="my-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Building className="w-6 h-6 text-blue-600" />
                  Miami-Dade County Inspection Requirements
                </h2>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Key Miami-Dade County Regulations</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Inspections recommended every 3-5 years for residential systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Required for real estate transactions and new installations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Must be performed by state-licensed contractors or certified professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Compliance with Florida Department of Health standards required</span>
                    </li>
                  </ul>
                </div>

                <p className="mb-4">
                  Miami-Dade County has specific requirements for septic system inspections that differ from other Florida counties. 
                  The high water table, frequent rainfall, and urban development create unique challenges that inspectors must address.
                </p>
                
                <div className="my-8">
                  <Image
                    src="https://images.unsplash.com/photo-1639563722312-11bc9a31ee34?ixid=M3w4MTM5NjB8MHwxfHNlYXJjaHwzfHxzZXB0aWMlMjBpbnNwZWN0aW9uJTIwdXRpbGl0eXxlbnwwfDB8fHwxNzYwMTIwMzkwfDA&ixlib=rb-4.1.0&w=1600&auto=format&q=80"
                    alt="Professional technician conducting septic system inspection"
                    width={1600}
                    height={800}
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-600" />
                      Environmental Factors
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• High water table affects drain field performance</li>
                      <li>• Frequent rainfall can cause system overload</li>
                      <li>• Saltwater intrusion in coastal areas</li>
                      <li>• Urban development impacts system placement</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-600" />
                      Documentation Required
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• System installation records</li>
                      <li>• Previous inspection reports</li>
                      <li>• Maintenance and pumping records</li>
                      <li>• Property survey and system location</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Inspection Costs */}
              <section id="inspection-costs" className="my-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-green-600" />
                  Septic Inspection Costs in Miami
                </h2>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-4">Miami Septic Inspection Cost Breakdown</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Basic Visual Inspection</h4>
                      <p className="text-green-700 text-sm mb-2">$150 - $450</p>
                      <ul className="space-y-1 text-green-700 text-sm">
                        <li>• Tank condition assessment</li>
                        <li>• Basic functionality check</li>
                        <li>• Visual drain field inspection</li>
                        <li>• Simple report</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Comprehensive Inspection</h4>
                      <p className="text-green-700 text-sm mb-2">$300 - $650</p>
                      <ul className="space-y-1 text-green-700 text-sm">
                        <li>• Camera inspection of pipes</li>
                        <li>• Pump system testing</li>
                        <li>• Detailed drain field analysis</li>
                        <li>• Comprehensive report</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Factors Affecting Miami Inspection Costs</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">System Complexity</h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Tank size and type</li>
                        <li>• Pump system presence</li>
                        <li>• Drain field design</li>
                        <li>• Access difficulty</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Additional Services</h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Camera inspection: +$100-$200</li>
                        <li>• Pump testing: +$50-$100</li>
                        <li>• Soil testing: +$150-$300</li>
                        <li>• Emergency service: +$100-$200</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  Miami-Dade County inspections may include additional fees for permits, environmental assessments, 
                  and compliance verification. Always get written estimates before scheduling your inspection.
                </p>
              </section>

              {/* Pre-Inspection Checklist */}
              <section id="pre-inspection-checklist" className="my-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  Pre-Inspection Preparation Checklist
                </h2>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Essential Preparation Steps</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-3">Physical Preparation</h4>
                      <ul className="space-y-2 text-blue-700 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Clear vegetation around tank and drain field</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Ensure access to all system components</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Mark tank and drain field locations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Remove obstacles from inspection area</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-3">Documentation Preparation</h4>
                      <ul className="space-y-2 text-blue-700 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Gather system installation records</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Collect previous inspection reports</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Prepare maintenance and pumping records</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Have property survey available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Miami-Specific Preparation</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Weather Considerations</h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Schedule during dry season when possible</li>
                        <li>• Avoid inspection after heavy rainfall</li>
                        <li>• Check for standing water around system</li>
                        <li>• Ensure proper drainage around components</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">System Access</h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Clear paths to all system components</li>
                        <li>• Ensure electrical access for pump testing</li>
                        <li>• Provide water source for testing</li>
                        <li>• Arrange for property access</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Important Pre-Inspection Notes
                  </h4>
                  <ul className="space-y-2 text-yellow-700 text-sm">
                    <li>• Avoid using water 24 hours before inspection</li>
                    <li>• Don't pump the tank immediately before inspection</li>
                    <li>• Keep pets secured during inspection</li>
                    <li>• Be available to answer questions about system history</li>
                  </ul>
                </div>
              </section>

              {/* Inspection Process */}
              <section id="inspection-process" className="my-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Settings className="w-6 h-6 text-purple-600" />
                  What Happens During Inspection
                </h2>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-purple-900 mb-4">Step-by-Step Inspection Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-1">Initial Assessment</h4>
                        <p className="text-purple-700 text-sm">Inspector reviews system records, property layout, and visible components</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-1">Tank Inspection</h4>
                        <p className="text-purple-700 text-sm">Visual inspection of tank condition, liquid levels, and structural integrity</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-1">Pipe and Connection Check</h4>
                        <p className="text-purple-700 text-sm">Examination of inlet/outlet pipes, connections, and flow patterns</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">4</div>
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-1">Drain Field Evaluation</h4>
                        <p className="text-purple-700 text-sm">Assessment of drain field condition, saturation levels, and functionality</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">5</div>
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-1">Pump System Testing</h4>
                        <p className="text-purple-700 text-sm">If applicable, testing of pump operation, alarms, and electrical components</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">6</div>
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-1">Compliance Verification</h4>
                        <p className="text-purple-700 text-sm">Verification of system compliance with Miami-Dade County regulations</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-yellow-600" />
                      Advanced Testing
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Camera inspection of pipes and tank interior</li>
                      <li>• Flow rate testing and measurement</li>
                      <li>• Soil percolation testing</li>
                      <li>• Water quality sampling</li>
                      <li>• Electrical system testing</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-600" />
                      Documentation
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Detailed inspection report</li>
                      <li>• Photographic documentation</li>
                      <li>• Compliance assessment</li>
                      <li>• Recommendations for improvements</li>
                      <li>• Next inspection schedule</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Common Issues */}
              <section id="common-issues" className="my-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  Common Issues Found in Miami
                </h2>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-red-900 mb-4">Miami-Specific Septic Problems</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-800 mb-3">Environmental Issues</h4>
                      <ul className="space-y-2 text-red-700 text-sm">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>High water table causing drain field saturation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Saltwater intrusion in coastal areas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Frequent rainfall overwhelming system</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Hurricane damage to system components</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-800 mb-3">System Failures</h4>
                      <ul className="space-y-2 text-red-700 text-sm">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Tank cracks due to ground settling</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Pipe blockages from root intrusion</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Pump failures in elevated systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Drain field clogging and failure</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Warning Signs to Watch For</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Visual Indicators</h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Standing water around drain field</li>
                        <li>• Unusual odors near system components</li>
                        <li>• Lush vegetation over drain field</li>
                        <li>• Sinkholes or depressions in yard</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">System Performance</h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Slow drains throughout the house</li>
                        <li>• Gurgling sounds in plumbing</li>
                        <li>• Backup in lowest drains</li>
                        <li>• High water levels in tank</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Post-Inspection */}
              <section id="post-inspection" className="my-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-green-600" />
                  After the Inspection
                </h2>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-4">Understanding Your Inspection Report</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-green-800 mb-1">System Status</h4>
                        <p className="text-green-700 text-sm">Clear indication of system condition and compliance status</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-green-800 mb-1">Required Repairs</h4>
                        <p className="text-green-700 text-sm">Detailed list of any necessary repairs or improvements</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-green-800 mb-1">Maintenance Recommendations</h4>
                        <p className="text-green-700 text-sm">Guidance for ongoing system care and maintenance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-green-800 mb-1">Next Inspection Date</h4>
                        <p className="text-green-700 text-sm">Recommended schedule for future inspections</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">If System Passes</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Continue regular maintenance schedule</li>
                      <li>• Schedule next inspection in 3-5 years</li>
                      <li>• Keep inspection report for records</li>
                      <li>• Follow maintenance recommendations</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">If Repairs Needed</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Get multiple repair estimates</li>
                      <li>• Check contractor licensing</li>
                      <li>• Obtain necessary permits</li>
                      <li>• Schedule repairs promptly</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="my-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-blue-600" />
                  Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">How much does a septic inspection cost in Miami?</h3>
                    <p className="text-gray-700">
                      Septic inspection costs in Miami typically range from $300-$650 depending on the type of inspection. 
                      Basic visual inspections cost $150-$450, while comprehensive inspections for real estate transactions 
                      cost $300-$650. Miami-Dade County inspections may have additional fees for permits and environmental assessments.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Is septic inspection required in Miami-Dade County?</h3>
                    <p className="text-gray-700">
                      While Florida doesn't legally require septic inspections for all properties, Miami-Dade County 
                      recommends inspections every 3-5 years. Inspections are often required for real estate transactions, 
                      new installations, and when applying for permits. Compliance with local regulations is essential.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">What does a septic inspection include in Miami?</h3>
                    <p className="text-gray-700">
                      A comprehensive septic inspection in Miami includes tank condition assessment, pipe evaluation, 
                      liquid level measurement, drain field inspection, pump system testing, and compliance with 
                      Miami-Dade County regulations. The inspector will check for leaks, blockages, and system functionality.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">How long does a septic inspection take in Miami?</h3>
                    <p className="text-gray-700">
                      Most septic inspections in Miami take 1-3 hours depending on system complexity. Basic visual 
                      inspections take 30-60 minutes, while comprehensive inspections with camera work and testing 
                      can take 2-3 hours. The inspector will provide a detailed report within 24-48 hours.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I prepare my septic system for inspection myself?</h3>
                    <p className="text-gray-700">
                      Yes, you can prepare your septic system for inspection by ensuring access to all components, 
                      clearing vegetation around the tank and drain field, providing system records, and avoiding 
                      water usage during the inspection. However, the actual inspection must be performed by a licensed professional.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">What are common septic problems found during Miami inspections?</h3>
                    <p className="text-gray-700">
                      Common problems found during Miami septic inspections include high water table issues, 
                      drain field saturation, tank cracks or leaks, pipe blockages, pump failures, and non-compliance 
                      with Miami-Dade County regulations. High humidity and frequent rainfall can accelerate these issues.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Who can perform septic inspections in Miami?</h3>
                    <p className="text-gray-700">
                      In Miami, septic inspections must be performed by state-licensed septic tank contractors, 
                      licensed plumbers, or certified environmental health professionals. Miami-Dade County 
                      maintains a list of approved inspectors who meet local requirements and regulations.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">What happens if my septic system fails inspection in Miami?</h3>
                    <p className="text-gray-700">
                      If your septic system fails inspection in Miami, you'll receive a detailed report outlining 
                      required repairs. You may need to pump the tank, repair or replace components, or upgrade 
                      the system to meet Miami-Dade County standards. Some issues may require permits before repairs can begin.
                    </p>
                  </div>
                </div>
              </section>

              {/* Related Resources */}
              <section className="my-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Miami Septic Resources</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Miami Septic Services</h3>
                    <p className="text-gray-700 text-sm mb-4">Professional septic services throughout Miami-Dade County</p>
                    <Link href="/locations/miami/septic-services" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Septic Maintenance Guide</h3>
                    <p className="text-gray-700 text-sm mb-4">Comprehensive guide to septic system maintenance in Miami</p>
                    <Link href="/resources/septic-tank-services/miami/septic-tank-maintenance-guide" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
                  </div>
                </div>
              </section>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 my-12 text-center">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Ready for Professional Septic Inspection?</h3>
                <p className="text-blue-800 mb-6 text-lg">Get certified septic inspection service in Miami with licensed professionals who understand Miami-Dade County requirements.</p>
                <Link href="/pricing/instant-quote?src=septic_miami_septic-inspection-checklist_end" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Get Instant Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
