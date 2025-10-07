import React from 'react';
import { Metadata } from 'next';
import { CheckCircle, Shield, Clock, Users, Award, Phone, MapPin, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: "Hood Cleaning Miami | Restaurant Kitchen Exhaust Cleaning | LocalBizzList",
  description: "Professional hood cleaning services in Miami, FL. NFPA 96 certified kitchen exhaust cleaning for restaurants, cafes, and commercial kitchens. Same-day service available.",
  keywords: "hood cleaning miami, restaurant hood cleaning miami, kitchen exhaust cleaning miami, commercial hood cleaning miami, NFPA 96 cleaning miami, hood cleaning service miami",
  openGraph: {
    title: "Hood Cleaning Miami | Restaurant Kitchen Exhaust Cleaning",
    description: "Professional hood cleaning services in Miami, FL. NFPA 96 certified kitchen exhaust cleaning for restaurants, cafes, and commercial kitchens.",
    type: "website",
  },
};

export default function MiamiHoodCleaningPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LocalBizzList - Miami Hood Cleaning",
    "description": "Professional NFPA 96 certified restaurant hood cleaning services in Miami, FL",
    "url": "https://stellasinkchamber.com/locations/miami/hood-cleaning",
    "telephone": "+13055551234",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Biscayne Blvd",
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "postalCode": "33132",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.7617",
      "longitude": "-80.1918"
    },
    "areaServed": {
      "@type": "City",
      "name": "Miami",
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
        "latitude": "25.7617",
        "longitude": "-80.1918"
      },
      "geoRadius": "50000"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Restaurant Hood Cleaning Miami",
    "description": "NFPA 96 certified kitchen exhaust cleaning services in Miami, Florida",
    "provider": {
      "@type": "LocalBusiness",
      "name": "LocalBizzList",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Miami",
        "addressRegion": "FL",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Miami",
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
        "name": "Miami",
        "item": "https://stellasinkchamber.com/locations/miami"
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
        "name": "How often should Miami restaurants clean their hoods?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Miami's high humidity and year-round cooking activity requires more frequent cleaning. High-volume restaurants need monthly cleaning, moderate-volume establishments require quarterly service, and seasonal operations should clean semi-annually."
        }
      },
      {
        "@type": "Question",
        "name": "Do you serve all Miami neighborhoods?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide hood cleaning services throughout Miami-Dade County, including Downtown Miami, Brickell, Wynwood, Little Havana, Coconut Grove, Aventura, and surrounding areas."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Miami hood cleaning different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Miami's tropical climate with high humidity accelerates grease buildup and corrosion. Our technicians understand local conditions and use specialized techniques to combat moisture-related issues while ensuring NFPA 96 compliance."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you respond to Miami restaurants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Miami team provides same-day service for most requests and emergency response within 2-4 hours. We're strategically located to serve the entire Miami-Dade area efficiently."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with Miami-Dade health inspectors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we're familiar with Miami-Dade County health department requirements and can provide documentation for inspections. Our NFPA 96 certification meets all local fire code standards."
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
              Professional Hood Cleaning Services in Miami
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              NFPA 96 certified kitchen exhaust cleaning for Miami restaurants, cafes, and commercial kitchens. 
              Same-day service available with instant quotes and emergency response throughout Miami-Dade County.
              <br />
              <span className="text-blue-200">Also serving: </span>
              <a href="/locations/boca-raton/hood-cleaning" className="text-blue-200 hover:text-white underline">Boca Raton</a> • 
              <a href="/locations/fort-lauderdale/hood-cleaning" className="text-blue-200 hover:text-white underline"> Fort Lauderdale</a>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/pricing/instant-quote?src=miami-hero"
                className="btn-primary text-lg px-8 py-4"
              >
                Get Instant Quote
              </a>
              <a 
                href="tel:+13055551234"
                className="btn-secondary text-lg px-8 py-4"
              >
                <Phone className="inline mr-2" size={20} />
                Call (305) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Miami-Specific Context */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Miami Restaurant Hood Cleaning Expertise
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                  Miami's Unique Kitchen Challenges
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-500 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">High Humidity Environment</h4>
                      <p className="text-gray-600">Miami's tropical climate accelerates grease buildup and corrosion in exhaust systems</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-500 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Year-Round Tourism</h4>
                      <p className="text-gray-600">Constant high-volume cooking requires more frequent cleaning schedules</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-500 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Strict Health Inspections</h4>
                      <p className="text-gray-600">Miami-Dade County enforces rigorous health codes with surprise inspections</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-500 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Diverse Cuisine Types</h4>
                      <p className="text-gray-600">From Cuban to seafood, Miami's diverse restaurants require specialized cleaning approaches</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-blue-800">
                  Miami Service Areas
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-700">Primary Coverage:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Downtown Miami</li>
                      <li>• Brickell</li>
                      <li>• Wynwood</li>
                      <li>• Design District</li>
                      <li>• Coconut Grove</li>
                      <li>• Coral Gables</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-700">Extended Coverage:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Aventura</li>
                      <li>• Doral</li>
                      <li>• Hialeah</li>
                      <li>• Homestead</li>
                      <li>• Key Biscayne</li>
                      <li>• Miami Beach</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                  <p className="text-blue-800 font-medium">
                    <MapPin className="inline mr-2" size={16} />
                    Same-day service available throughout Miami-Dade County
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Miami Landmarks & Access */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Serving Miami's Premier Restaurant Districts
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">South Beach & Ocean Drive</h3>
                <p className="text-gray-600 mb-4">
                  High-volume tourist restaurants requiring frequent cleaning due to constant operation and heavy grease cooking.
                </p>
                <div className="text-sm text-gray-500">
                  <Clock className="inline mr-1" size={14} />
                  Response time: 30-45 minutes
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Brickell Financial District</h3>
                <p className="text-gray-600 mb-4">
                  Corporate dining facilities and upscale restaurants with strict compliance requirements and tight schedules.
                </p>
                <div className="text-sm text-gray-500">
                  <Clock className="inline mr-1" size={14} />
                  Response time: 20-30 minutes
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Wynwood Arts District</h3>
                <p className="text-gray-600 mb-4">
                  Trendy restaurants and food halls with diverse cooking styles requiring specialized cleaning approaches.
                </p>
                <div className="text-sm text-gray-500">
                  <Clock className="inline mr-1" size={14} />
                  Response time: 25-35 minutes
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
              Miami Health Inspector Focus Areas
            </h2>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-red-700">
                What Miami Health Inspectors Look For
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-red-600">Critical Violations:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Excessive grease buildup in hoods</li>
                    <li>• Clogged or damaged grease filters</li>
                    <li>• Non-functioning exhaust systems</li>
                    <li>• Missing or expired cleaning certificates</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-red-600">Common Issues:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Improper cleaning schedules</li>
                    <li>• Inadequate documentation</li>
                    <li>• Poor maintenance records</li>
                    <li>• Uncertified cleaning services</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-red-100 rounded-lg">
                <p className="text-red-800 font-medium">
                  <Calendar className="inline mr-2" size={16} />
                  We provide detailed cleaning reports and NFPA 96 certificates to ensure inspection compliance
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
              Why Choose LocalBizzList for Miami Hood Cleaning?
            </h2>
            
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                While many Miami hood cleaning services offer basic cleaning, LocalBizzList provides comprehensive 
                NFPA 96 certified service with detailed documentation, flexible scheduling, and emergency response 
                capabilities. Our Miami-based team understands the unique challenges of South Florida's climate 
                and tourism industry, ensuring your restaurant stays compliant and safe year-round.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Miami Expertise</h3>
                <p className="text-gray-600">
                  Local team with deep knowledge of Miami's restaurant industry and health department requirements
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Rapid Response</h3>
                <p className="text-gray-600">
                  Same-day service available with emergency response for failed inspections or urgent needs
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Full Compliance</h3>
                <p className="text-gray-600">
                  Complete documentation and certification to meet Miami-Dade County health department standards
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
              Miami Hood Cleaning FAQs
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How quickly can you respond to emergency cleaning needs in Miami?</h3>
                <p className="text-gray-600">
                  We provide same-day emergency service throughout Miami-Dade County. For urgent situations like failed health inspections, we can typically be on-site within 2-4 hours. Our Miami-based team is strategically located to provide rapid response to all areas including South Beach, Brickell, Wynwood, and surrounding neighborhoods.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Do you understand Miami's specific health department requirements?</h3>
                <p className="text-gray-600">
                  Yes, our team is fully familiar with Miami-Dade County health department standards and inspection procedures. We provide detailed cleaning reports and NFPA 96 certificates that meet all local requirements. Our documentation helps ensure your restaurant passes inspections and maintains compliance with county regulations.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How does Miami's humidity affect hood cleaning frequency?</h3>
                <p className="text-gray-600">
                  Miami's high humidity accelerates grease buildup and can cause corrosion in exhaust systems. We recommend more frequent cleaning schedules for Miami restaurants, especially those with heavy grease cooking. Our technicians are trained to identify humidity-related issues and adjust cleaning methods accordingly.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Do you service restaurants in Miami Beach and other barrier islands?</h3>
                <p className="text-gray-600">
                  Yes, we provide comprehensive hood cleaning services throughout Miami-Dade County including Miami Beach, Key Biscayne, and other barrier islands. Our team is familiar with the unique challenges of island restaurants and can accommodate bridge traffic considerations in our scheduling.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What types of Miami restaurants do you specialize in?</h3>
                <p className="text-gray-600">
                  We service all types of Miami restaurants including Cuban restaurants, seafood establishments, tourist-focused eateries, corporate dining facilities, food halls, and fine dining restaurants. Our team has experience with Miami's diverse cuisine types and understands the specific cleaning requirements for each style of cooking.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Can you work around Miami's busy tourist seasons?</h3>
                <p className="text-gray-600">
                  Absolutely. We understand Miami's year-round tourism and can schedule cleanings during off-peak hours or after closing to minimize disruption to your operations. We also offer emergency services during busy periods to address urgent cleaning needs without impacting your business.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Do you provide Spanish-speaking technicians for Miami restaurants?</h3>
                <p className="text-gray-600">
                  Yes, many of our technicians are bilingual and can communicate effectively with Spanish-speaking restaurant staff. This ensures clear communication about cleaning procedures, safety requirements, and scheduling, making the process smoother for Miami's diverse restaurant community.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How do you handle Miami's parking and access challenges?</h3>
                <p className="text-gray-600">
                  Our Miami team is experienced with parking challenges in busy areas like South Beach and Downtown. We coordinate with restaurant management to arrange proper parking and access, and we carry all necessary equipment to minimize setup time and disruption to your operations.
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
              Ready for Professional Hood Cleaning in Miami?
            </h2>
            <p className="text-xl mb-8">
              Get an instant quote or call us today for same-day NFPA 96 certified hood cleaning services throughout Miami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/pricing/instant-quote?src=miami-cta"
                className="btn-primary bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
              >
                Get Instant Quote
              </a>
              <a 
                href="tel:+13055551234"
                className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
              >
                <Phone className="inline mr-2" size={20} />
                Call (305) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
