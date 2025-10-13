import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fire Extinguishers Expired or Missing Tags - Compliance Guide | LocalBizzList',
  description: 'Annual inspections and recharging ensure compliance with Florida Fire Prevention Code. Expert fire extinguisher services in South Florida.',
  keywords: ['expired fire extinguisher tags', 'fire extinguisher inspection Florida', 'fire extinguisher compliance'],
}

export default function FireExtinguishersExpiredTagsPage() {
  return (
    <article className="container py-12">
      <header className="mb-8">
        <div className="text-sm text-primary font-semibold mb-2">FIRE EXTINGUISHER SERVICES</div>
        <h1 className="text-4xl font-bold text-neutral-800 mb-4">
          Fire Extinguishers Expired or Missing Tags
        </h1>
        <p className="text-xl text-neutral-600">
          Annual inspections and recharging ensure compliance with Florida Fire Prevention Code.
        </p>
        <div className="flex gap-4 text-sm text-neutral-500 mt-4">
          <span>Published: October 7, 2025</span>
          <span>6 min read</span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        {/* Compliance CTA */}
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-orange-800">Fire Extinguisher Compliance Issue?</h3>
              <p className="mt-2 text-orange-700">
                Don't risk fines or safety violations. Our certified technicians provide annual inspections, recharging, and compliance documentation for South Florida businesses.
              </p>
              <div className="mt-4">
                <a href="/pricing/instant-quote" className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700">
                  Schedule Inspection Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-lg text-neutral-700 mb-6">
          Fire extinguisher compliance is not just a legal requirement—it's a critical safety measure that can save lives and property. When fire extinguishers have expired or missing tags, your business faces serious safety risks, potential fines, and insurance complications. In South Florida, where fire safety regulations are strictly enforced, maintaining proper fire extinguisher documentation is essential for business operations.
        </p>

        <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">Florida Fire Prevention Code Requirements</h2>
        
        <p className="mb-4">Understanding Florida's fire safety regulations is crucial for compliance:</p>
        
        <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">Standard Service Tag Requirements</h3>
        <p className="mb-4">
          Florida Statute 633 requires all fire extinguishers to display standard service tags with specific information. These tags must include the inspection date, technician certification number, and next service due date. Missing or expired tags are considered violations of the Florida Fire Prevention Code.
        </p>

        <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">Serial Number Requirements</h3>
        <p className="mb-4">
          All portable fire extinguishers must have serial numbers for tracking and documentation purposes. This requirement helps fire marshals and inspectors verify proper maintenance history and ensures accountability.
        </p>

        <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">NFPA 10 Compliance</h3>
        <p className="mb-4">
          Florida restaurants and commercial establishments must comply with NFPA 10 standards, which specify fire extinguisher selection, placement, and maintenance requirements. This includes proper mounting heights, accessibility, and appropriate extinguisher types for different fire classes.
        </p>

        <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">Annual Professional Inspection Process</h2>
        
        <p className="mb-4">Professional inspections ensure your fire extinguishers are ready when needed:</p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Inspection Checklist</h3>
          <ul className="space-y-2 text-blue-700">
            <li><strong>Visual Inspection:</strong> Check for damage, corrosion, or tampering</li>
            <li><strong>Pressure Check:</strong> Verify gauge readings and internal pressure</li>
            <li><strong>Component Testing:</strong> Test discharge mechanism and safety pins</li>
            <li><strong>Documentation:</strong> Update service tags and maintenance records</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">Certified Technician Requirements</h3>
        <p className="mb-4">
          Fire extinguisher inspections must be performed by certified technicians who meet Florida's licensing requirements. These professionals have the training and equipment necessary to properly evaluate and service fire extinguishers according to state and federal standards.
        </p>

        <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">Service Documentation</h3>
        <p className="mb-4">
          Proper documentation includes service tags, maintenance records, and compliance certificates. This paperwork must be kept on file and available for fire marshal inspections. Missing documentation can result in citations and fines.
        </p>

        <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">Tag Requirements and Documentation</h2>
        
        <p className="mb-4">Understanding what information must be on fire extinguisher tags:</p>

        <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">Required Tag Information</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Inspection date and technician signature</li>
          <li>Next service due date</li>
          <li>Technician certification number</li>
          <li>Service company information</li>
          <li>Extinguisher serial number</li>
          <li>Type and class of extinguisher</li>
        </ul>

        <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">Tag Placement Requirements</h3>
        <p className="mb-4">
          Service tags must be securely attached to the fire extinguisher and clearly visible. Tags should not obstruct the operating instructions or safety information. Damaged or illegible tags must be replaced immediately.
        </p>

        <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">Record Keeping</h3>
        <p className="mb-4">
          Businesses must maintain detailed records of all fire extinguisher maintenance activities. These records should include inspection dates, service performed, parts replaced, and technician certifications. Records must be kept for at least three years.
        </p>

        <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">Consequences of Non-Compliance</h2>
        
        <p className="mb-4">Failing to maintain proper fire extinguisher compliance can result in serious consequences:</p>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-red-800 mb-3">Potential Violations and Fines</h3>
          <ul className="space-y-2 text-red-700">
            <li><strong>Fire Marshal Citations:</strong> $100-$500 per violation</li>
            <li><strong>Business License Suspension:</strong> Until compliance is restored</li>
            <li><strong>Insurance Issues:</strong> Coverage may be denied for non-compliance</li>
            <li><strong>Liability Exposure:</strong> Increased risk in case of fire incidents</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">Safety Risks</h3>
        <p className="mb-4">
          Expired or improperly maintained fire extinguishers may not function when needed, putting lives and property at risk. Regular inspections ensure that extinguishers are fully charged, properly pressurized, and ready for emergency use.
        </p>

        <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">Business Interruption</h3>
        <p className="mb-4">
          Fire marshal inspections can result in business closure until compliance issues are resolved. This can cause significant revenue loss and damage to your business reputation.
        </p>

        <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">South Florida Specific Considerations</h2>
        
        <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">High Humidity Impact</h3>
        <p className="mb-4">
          South Florida's high humidity can accelerate corrosion and damage to fire extinguisher components. This makes regular inspections even more critical to ensure proper function and compliance.
        </p>

        <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">Hurricane Season Preparation</h3>
        <p className="mb-4">
          Before hurricane season, ensure all fire extinguishers are properly maintained and accessible. Power outages and flooding can increase fire risks, making functional fire extinguishers essential for safety.
        </p>

        <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">Local Fire Department Requirements</h3>
        <p className="mb-4">
          Miami-Dade and Broward County fire departments have specific requirements for commercial establishments. Choose service providers familiar with local regulations and inspection procedures.
        </p>

        <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">Restaurant and Hospitality Industry</h3>
        <p className="mb-4">
          Restaurants and hospitality businesses face additional scrutiny due to kitchen fire risks. These establishments typically require more frequent inspections and specific types of fire extinguishers for different areas.
        </p>

        <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-neutral-800 mb-2">How often must fire extinguishers be inspected in Florida?</h3>
            <p className="text-neutral-600">
              Fire extinguishers must be inspected annually by certified technicians, with monthly visual inspections by facility staff. Some high-risk environments may require more frequent professional inspections.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-800 mb-2">What information must be on fire extinguisher tags?</h3>
            <p className="text-neutral-600">
              Tags must include inspection date, technician signature, next service due date, technician certification number, service company information, and extinguisher serial number.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-800 mb-2">Who can perform fire extinguisher inspections?</h3>
            <p className="text-neutral-600">
              Only certified technicians with proper Florida licensing can perform professional fire extinguisher inspections. Monthly visual inspections can be done by trained facility staff.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-800 mb-2">What happens if fire extinguisher tags are missing?</h3>
            <p className="text-neutral-600">
              Missing tags are considered violations of the Florida Fire Prevention Code and can result in citations, fines, and potential business closure until compliance is restored.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-800 mb-2">What are the penalties for non-compliance?</h3>
            <p className="text-neutral-600">
              Penalties include fire marshal citations ($100-$500 per violation), business license suspension, insurance coverage issues, and increased liability exposure in case of fire incidents.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-800 mb-2">How much does fire extinguisher inspection cost?</h3>
            <p className="text-neutral-600">
              Annual fire extinguisher inspections typically cost $15-$25 per unit, plus additional fees for recharging, parts replacement, or emergency service. Regular maintenance is much more cost-effective than violations.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-primary-50 border border-primary-200 rounded-lg p-8 mt-8">
          <h3 className="text-xl font-bold text-primary-800 mb-4">Stay Compliant and Safe</h3>
          <p className="text-primary-700 mb-6">
            Don't risk fines or safety violations. Our certified technicians provide complete fire extinguisher services including inspections, recharging, and compliance documentation for South Florida businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/pricing/instant-quote" className="bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 text-center">
              Schedule Inspection Service
            </a>
            <a href="/services/fire-extinguisher-services" className="border border-primary-600 text-primary-600 px-6 py-3 rounded-md font-medium hover:bg-primary-50 text-center">
              Learn About Our Services
            </a>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">References</h2>
        <ul className="list-disc pl-6 space-y-1 text-sm text-neutral-600">
          <li>Florida Fire Prevention Code - Chapter 633</li>
          <li>NFPA 10 - Standard for Portable Fire Extinguishers</li>
          <li>Florida Department of Financial Services - Fire Marshal Division</li>
          <li>Miami-Dade Fire Rescue - Commercial Fire Safety Requirements</li>
          <li>Broward County Fire Rescue - Business Fire Safety Guidelines</li>
        </ul>
      </div>
    </article>
  )
}
