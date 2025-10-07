import React from 'react';
import { Metadata } from 'next';
import { CheckCircle, Shield, Clock, Users, Award, Phone, MapPin, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: "Hood Cleaning Boca Raton | Restaurant Kitchen Exhaust Cleaning | LocalBizzList",
  description: "Professional hood cleaning services in Boca Raton, FL. NFPA 96 certified kitchen exhaust cleaning for restaurants, cafes, and commercial kitchens. Same-day service available.",
  keywords: "hood cleaning boca raton, restaurant hood cleaning boca raton, kitchen exhaust cleaning boca raton, commercial hood cleaning boca raton, NFPA 96 cleaning boca raton, hood cleaning service boca raton",
  openGraph: {
    title: "Hood Cleaning Boca Raton | Restaurant Kitchen Exhaust Cleaning",
    description: "Professional hood cleaning services in Boca Raton, FL. NFPA 96 certified kitchen exhaust cleaning for restaurants, cafes, and commercial kitchens.",
    type: "website",
  },
};

export default function BocaRatonHoodCleaningPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LocalBizzList - Boca Raton Hood Cleaning",
    "description": "Professional NFPA 96 certified restaurant hood cleaning services in Boca Raton, FL",
    "url": "https://stellasinkchamber.com/locations/boca-raton/hood-cleaning",
    "telephone": "+13055551235",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "456 Palmetto Park Rd",
      "addressLocality": "Boca Raton",
      "addressRegion": "FL",
      "postalCode": "33432",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.3683",
      "longitude": "-80.1289"
    },
    "areaServed": {
      "@type": "City",
      "name": "Boca Raton",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "26.3683",
        "longitude": "-80.1289"
      },
      "geoRadius": "50000"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Restaurant Hood Cleaning Boca Raton",
    "description": "NFPA 96 certified kitchen exhaust cleaning services in Boca Raton, Florida",
    "provider": {
      "@type": "LocalBusiness",
      "name": "LocalBizzList",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Boca Raton",
        "addressRegion": "FL",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Boca Raton",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    },
    "serviceType": "Commercial Kitchen Exhaust Cleaning"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://stellasinkchamber.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://stellasinkchamber.com/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Boca Raton",
        "item": "https://stellasinkchamber.com/locations/boca-raton"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Hood Cleaning"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How often should Boca Raton restaurants clean their hoods?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Boca Raton's coastal climate and seasonal tourism patterns affect cleaning schedules. High-volume restaurants need monthly cleaning, moderate-volume establishments require quarterly service, and seasonal operations should clean semi-annually."
        }
      },
      {
        "@type": "Question",
        "name": "Do you serve all Boca Raton areas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide hood cleaning services throughout Boca Raton and surrounding areas, including East Boca Raton, West Boca Raton, Deerfield Beach, Delray Beach, and Boynton Beach."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Boca Raton hood cleaning unique?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Boca Raton's mix of upscale restaurants and seasonal businesses requires flexible scheduling. Our technicians understand local market dynamics and provide tailored service plans for both year-round establishments and seasonal operations."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you respond to Boca Raton restaurants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Boca Raton team provides same-day service for most requests and emergency response within 2-4 hours. We're strategically positioned to serve the entire Palm Beach County area efficiently."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with Palm Beach County health inspectors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we're familiar with Palm Beach County health department requirements and can provide documentation for inspections. Our NFPA 96 certification meets all local fire code standards."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Professional Hood Cleaning Services in Boca Raton
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              NFPA 96 certified kitchen exhaust cleaning for Boca Raton restaurants, cafes, and commercial kitchens. 
              Same-day service available with instant quotes and emergency response throughout Palm Beach County.
              <br />
              <span className="text-blue-200">Also serving: </span>
              <a href="/locations/miami/hood-cleaning" className="text-blue-200 hover:text-white underline">Miami</a> • 
              <a href="/locations/fort-lauderdale/hood-cleaning" className="text-blue-200 hover:text-white underline"> Fort Lauderdale</a>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/pricing/instant-quote?src=boca-raton-hero"
                className="btn-primary text-lg px-8 py-4"
              >
                Get Instant Quote
              </a>
              <a 
                href="tel:+15615551234"
                className="btn-secondary text-lg px-8 py-4"
              >
                <Phone className="inline mr-2" size={20} />
                Call (561) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Boca Raton-Specific Context */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Boca Raton Restaurant Hood Cleaning Expertise
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                  Boca Raton's Unique Kitchen Environment
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-500 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Upscale Dining Standards</h4>
                      <p className="text-gray-600">Boca Raton's fine dining establishments require meticulous attention to detail and compliance</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-500 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Seasonal Population</h4>
                      <p className="text-gray-600">Snowbird season brings increased dining volume requiring flexible cleaning schedules</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-500 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Corporate Dining</h4>
                      <p className="text-gray-600">Many corporate headquarters require specialized cleaning for their dining facilities</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-500 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Health-Conscious Cuisine</h4>
                      <p className="text-gray-600">Focus on healthy cooking methods still requires proper exhaust system maintenance</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-blue-800">
                  Boca Raton Service Areas
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-700">Primary Coverage:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Downtown Boca Raton</li>
                      <li>• Mizner Park</li>
                      <li>• Royal Palm Place</li>
                      <li>• Town Center</li>
                      <li>• Spanish River</li>
                      <li>• Boca West</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-700">Extended Coverage:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Deerfield Beach</li>
                      <li>• Delray Beach</li>
                      <li>• Highland Beach</li>
                      <li>• Hillsboro Beach</li>
                      <li>• West Boca</li>
                      <li>• East Boca</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                  <p className="text-blue-800 font-medium">
                    <MapPin className="inline mr-2" size={16} />
                    Same-day service available throughout Palm Beach County
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boca Raton Landmarks & Access */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Serving Boca Raton's Premier Restaurant Districts
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Mizner Park & Downtown</h3>
                <p className="text-gray-600 mb-4">
                  Upscale restaurants and fine dining establishments requiring premium service and flexible scheduling for high-end clientele.
                </p>
                <div className="text-sm text-gray-500">
                  <Clock className="inline mr-1" size={14} />
                  Response time: 25-35 minutes
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Town Center Mall Area</h3>
                <p className="text-gray-600 mb-4">
                  Corporate dining facilities and food court restaurants with strict compliance requirements and busy schedules.
                </p>
                <div className="text-sm text-gray-500">
                  <Clock className="inline mr-1" size={14} />
                  Response time: 20-30 minutes
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Boca West & Golf Communities</h3>
                <p className="text-gray-600 mb-4">
                  Country club restaurants and private dining facilities requiring discreet service and flexible scheduling.
                </p>
                <div className="text-sm text-gray-500">
                  <Clock className="inline mr-1" size={14} />
                  Response time: 30-40 minutes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspector Focus */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Palm Beach County Health Inspector Focus Areas
            </h2>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-red-700">
                What Palm Beach County Health Inspectors Look For
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-red-600">Critical Violations:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Excessive grease accumulation in hoods</li>
                    <li>• Damaged or missing grease filters</li>
                    <li>• Non-functioning exhaust systems</li>
                    <li>• Outdated cleaning certificates</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-red-600">Common Issues:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Inadequate cleaning frequency</li>
                    <li>• Missing documentation</li>
                    <li>• Poor maintenance records</li>
                    <li>• Uncertified service providers</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-red-100 rounded-lg">
                <p className="text-red-800 font-medium">
                  <Calendar className="inline mr-2" size={16} />
                  We provide comprehensive cleaning reports and NFPA 96 certificates for Palm Beach County compliance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERP Gap Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Why Choose LocalBizzList for Boca Raton Hood Cleaning?
            </h2>
            
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                While many Boca Raton hood cleaning services offer basic cleaning, LocalBizzList provides comprehensive 
                NFPA 96 certified service with detailed documentation, flexible scheduling, and emergency response 
                capabilities. Our Boca Raton team understands the unique needs of upscale restaurants and corporate 
                dining facilities, ensuring your establishment maintains the highest standards of cleanliness and compliance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Upscale Expertise</h3>
                <p className="text-gray-600">
                  Specialized experience with Boca Raton's fine dining establishments and corporate dining facilities
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Accommodating schedules for upscale restaurants and seasonal population fluctuations
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Premium Service</h3>
                <p className="text-gray-600">
                  Discreet, professional service that meets the high standards expected in Boca Raton's dining scene
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Boca Raton Hood Cleaning FAQs
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Do you understand Boca Raton's upscale restaurant requirements?</h3>
                <p className="text-gray-600">
                  Yes, our team specializes in serving Boca Raton's fine dining establishments and understands the high standards expected by upscale clientele. We provide discreet, professional service that maintains the sophisticated atmosphere of your restaurant while ensuring complete compliance with health department standards.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How do you handle seasonal population changes in Boca Raton?</h3>
                <p className="text-gray-600">
                  We understand Boca Raton's seasonal fluctuations with snowbirds and adjust our cleaning schedules accordingly. During peak season, we can provide more frequent cleanings, and during off-season, we maintain regular schedules to ensure your restaurant is always ready for increased business.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Do you service corporate dining facilities in Boca Raton?</h3>
                <p className="text-gray-600">
                  Absolutely. We have extensive experience with corporate dining facilities, country club restaurants, and private dining establishments throughout Boca Raton. Our team understands the unique requirements of these facilities and can work around corporate schedules and special events.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Can you work around Boca Raton's busy dining hours?</h3>
                <p className="text-gray-600">
                  Yes, we specialize in flexible scheduling for Boca Raton restaurants. We can perform cleanings during off-peak hours, after closing, or during slower periods to minimize disruption to your operations. We also offer emergency services for urgent situations.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Do you provide services to Mizner Park restaurants?</h3>
                <p className="text-gray-600">
                  Yes, we provide comprehensive hood cleaning services to all restaurants in Mizner Park and the surrounding downtown Boca Raton area. Our team is familiar with the parking and access requirements in this busy district and can coordinate with management to ensure smooth service delivery.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How do you handle Boca Raton's health-conscious cuisine requirements?</h3>
                <p className="text-gray-600">
                  Even health-conscious restaurants require proper exhaust system maintenance. We understand that Boca Raton restaurants often focus on lighter cooking methods, but proper ventilation is still essential for air quality and fire safety. We tailor our cleaning approach to your specific cooking methods and menu.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Do you provide documentation for Palm Beach County inspections?</h3>
                <p className="text-gray-600">
                  Yes, we provide comprehensive cleaning reports and NFPA 96 certificates that meet all Palm Beach County health department requirements. Our documentation is designed to help your restaurant pass inspections and maintain compliance with county regulations.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Can you accommodate Boca Raton's golf community restaurants?</h3>
                <p className="text-gray-600">
                  Yes, we have extensive experience with country club restaurants and golf community dining facilities throughout Boca Raton. We understand the unique requirements of these establishments and can provide discreet, professional service that maintains the exclusive atmosphere of your facility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready for Professional Hood Cleaning in Boca Raton?
            </h2>
            <p className="text-xl mb-8">
              Get an instant quote or call us today for same-day NFPA 96 certified hood cleaning services throughout Boca Raton.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/pricing/instant-quote?src=boca-raton-cta"
                className="btn-primary bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
              >
                Get Instant Quote
              </a>
              <a 
                href="tel:+15615551234"
                className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
              >
                <Phone className="inline mr-2" size={20} />
                Call (561) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
