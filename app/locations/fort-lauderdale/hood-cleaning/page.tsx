import React from 'react';
import { Metadata } from 'next';
import { CheckCircle, Shield, Clock, Users, Award, Phone, MapPin, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: "Hood Cleaning Fort Lauderdale | Restaurant Kitchen Exhaust Cleaning | LocalBizzList",
  description: "Professional hood cleaning services in Fort Lauderdale, FL. NFPA 96 certified kitchen exhaust cleaning for restaurants, cafes, and commercial kitchens. Same-day service available.",
  keywords: "hood cleaning fort lauderdale, restaurant hood cleaning fort lauderdale, kitchen exhaust cleaning fort lauderdale, commercial hood cleaning fort lauderdale, NFPA 96 cleaning fort lauderdale, hood cleaning service fort lauderdale",
  openGraph: {
    title: "Hood Cleaning Fort Lauderdale | Restaurant Kitchen Exhaust Cleaning",
    description: "Professional hood cleaning services in Fort Lauderdale, FL. NFPA 96 certified kitchen exhaust cleaning for restaurants, cafes, and commercial kitchens.",
    type: "website",
  },
};

export default function FortLauderdaleHoodCleaningPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LocalBizzList - Fort Lauderdale Hood Cleaning",
    "description": "Professional NFPA 96 certified restaurant hood cleaning services in Fort Lauderdale, FL",
    "url": "https://stellasinkchamber.com/locations/fort-lauderdale/hood-cleaning",
    "telephone": "+13055551236",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "789 Las Olas Blvd",
      "addressLocality": "Fort Lauderdale",
      "addressRegion": "FL",
      "postalCode": "33301",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.1224",
      "longitude": "-80.1373"
    },
    "areaServed": {
      "@type": "City",
      "name": "Fort Lauderdale",
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
        "latitude": "26.1224",
        "longitude": "-80.1373"
      },
      "geoRadius": "50000"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Restaurant Hood Cleaning Fort Lauderdale",
    "description": "NFPA 96 certified kitchen exhaust cleaning services in Fort Lauderdale, Florida",
    "provider": {
      "@type": "LocalBusiness",
      "name": "LocalBizzList",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Fort Lauderdale",
        "addressRegion": "FL",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Fort Lauderdale",
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
        "name": "Fort Lauderdale",
        "item": "https://stellasinkchamber.com/locations/fort-lauderdale"
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
        "name": "How often should Fort Lauderdale restaurants clean their hoods?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fort Lauderdale's coastal climate and tourism industry affect cleaning schedules. High-volume restaurants need monthly cleaning, moderate-volume establishments require quarterly service, and seasonal operations should clean semi-annually."
        }
      },
      {
        "@type": "Question",
        "name": "Do you serve all Fort Lauderdale areas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide hood cleaning services throughout Fort Lauderdale and surrounding areas, including Downtown Fort Lauderdale, Las Olas, Wilton Manors, Oakland Park, and Pompano Beach."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Fort Lauderdale hood cleaning unique?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fort Lauderdale's mix of beachfront restaurants, downtown dining, and seasonal tourism requires flexible scheduling. Our technicians understand local market dynamics and provide tailored service plans for both year-round establishments and seasonal operations."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you respond to Fort Lauderdale restaurants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Fort Lauderdale team provides same-day service for most requests and emergency response within 2-4 hours. We're strategically positioned to serve the entire Broward County area efficiently."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with Broward County health inspectors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we're familiar with Broward County health department requirements and can provide documentation for inspections. Our NFPA 96 certification meets all local fire code standards."
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
              Professional Hood Cleaning Services in Fort Lauderdale
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              NFPA 96 certified kitchen exhaust cleaning for Fort Lauderdale restaurants, cafes, and commercial kitchens. 
              Same-day service available with instant quotes and emergency response throughout Broward County.
              <br />
              <span className="text-blue-200">Also serving: </span>
              <a href="/locations/miami/hood-cleaning" className="text-blue-200 hover:text-white underline">Miami</a> • 
              <a href="/locations/boca-raton/hood-cleaning" className="text-blue-200 hover:text-white underline"> Boca Raton</a>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/pricing/instant-quote?src=fort-lauderdale-hero"
                className="btn-primary text-lg px-8 py-4"
              >
                Get Instant Quote
              </a>
              <a 
                href="tel:+19545551234"
                className="btn-secondary text-lg px-8 py-4"
              >
                <Phone className="inline mr-2" size={20} />
                Call (954) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fort Lauderdale-Specific Context */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Fort Lauderdale Restaurant Hood Cleaning Expertise
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                  Fort Lauderdale's Dynamic Kitchen Environment
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-500 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Cruise Port Dining</h4>
                      <p className="text-gray-600">Port Everglades restaurants serve high-volume cruise passengers requiring frequent cleaning</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-500 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Beach Tourism</h4>
                      <p className="text-gray-600">Year-round beach tourism creates consistent high-volume cooking operations</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-500 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Convention Center</h4>
                      <p className="text-gray-600">Large-scale events require flexible scheduling and emergency response capabilities</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-500 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Diverse Cuisine</h4>
                      <p className="text-gray-600">From seafood to international cuisine, diverse cooking styles require specialized approaches</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-blue-800">
                  Fort Lauderdale Service Areas
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-700">Primary Coverage:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Downtown Fort Lauderdale</li>
                      <li>• Las Olas Boulevard</li>
                      <li>• Fort Lauderdale Beach</li>
                      <li>• Port Everglades</li>
                      <li>• Convention Center</li>
                      <li>• Riverwalk</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-700">Extended Coverage:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Wilton Manors</li>
                      <li>• Oakland Park</li>
                      <li>• Lauderdale-by-the-Sea</li>
                      <li>• Pompano Beach</li>
                      <li>• Plantation</li>
                      <li>• Sunrise</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                  <p className="text-blue-800 font-medium">
                    <MapPin className="inline mr-2" size={16} />
                    Same-day service available throughout Broward County
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fort Lauderdale Landmarks & Access */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Serving Fort Lauderdale's Premier Restaurant Districts
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Las Olas Boulevard</h3>
                <p className="text-gray-600 mb-4">
                  Upscale dining district with fine restaurants requiring premium service and flexible scheduling for special events.
                </p>
                <div className="text-sm text-gray-500">
                  <Clock className="inline mr-1" size={14} />
                  Response time: 20-30 minutes
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Port Everglades</h3>
                <p className="text-gray-600 mb-4">
                  Cruise port restaurants with high-volume operations requiring frequent cleaning and emergency response capabilities.
                </p>
                <div className="text-sm text-gray-500">
                  <Clock className="inline mr-1" size={14} />
                  Response time: 15-25 minutes
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Fort Lauderdale Beach</h3>
                <p className="text-gray-600 mb-4">
                  Beachfront restaurants and hotels with year-round tourism requiring consistent cleaning schedules.
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
              Broward County Health Inspector Focus Areas
            </h2>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-red-700">
                What Broward County Health Inspectors Look For
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-red-600">Critical Violations:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Excessive grease buildup in exhaust systems</li>
                    <li>• Clogged or damaged grease filters</li>
                    <li>• Non-functioning ventilation systems</li>
                    <li>• Missing or expired cleaning certificates</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-red-600">Common Issues:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Inadequate cleaning frequency</li>
                    <li>• Poor documentation</li>
                    <li>• Insufficient maintenance records</li>
                    <li>• Uncertified cleaning services</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-red-100 rounded-lg">
                <p className="text-red-800 font-medium">
                  <Calendar className="inline mr-2" size={16} />
                  We provide detailed cleaning reports and NFPA 96 certificates for Broward County compliance
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
              Why Choose LocalBizzList for Fort Lauderdale Hood Cleaning?
            </h2>
            
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                While many Fort Lauderdale hood cleaning services offer basic cleaning, LocalBizzList provides comprehensive 
                NFPA 96 certified service with detailed documentation, flexible scheduling, and emergency response 
                capabilities. Our Fort Lauderdale team understands the unique challenges of cruise port dining, beach 
                tourism, and convention center operations, ensuring your restaurant maintains peak performance year-round.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Tourism Expertise</h3>
                <p className="text-gray-600">
                  Specialized experience with Fort Lauderdale's cruise port, beach, and convention center restaurants
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Event Flexibility</h3>
                <p className="text-gray-600">
                  Accommodating schedules for conventions, cruise departures, and seasonal tourism fluctuations
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">High-Volume Service</h3>
                <p className="text-gray-600">
                  Experienced with high-volume operations and can scale services for busy tourist seasons
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
              Fort Lauderdale Hood Cleaning FAQs
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Do you understand Fort Lauderdale's cruise port restaurant needs?</h3>
                <p className="text-gray-600">
                  Yes, our team has extensive experience with Port Everglades restaurants and understands the unique challenges of serving cruise passengers. We can accommodate cruise departure schedules, provide emergency services during busy periods, and ensure your restaurant is always ready for high-volume dining operations.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How do you handle Fort Lauderdale's year-round tourism?</h3>
                <p className="text-gray-600">
                  We understand Fort Lauderdale's consistent tourism and can provide regular cleaning schedules to handle year-round high-volume operations. Our team is experienced with beachfront restaurants, Las Olas Boulevard establishments, and convention center dining facilities that serve tourists throughout the year.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Can you accommodate convention center event schedules?</h3>
                <p className="text-gray-600">
                  Absolutely. We work closely with Fort Lauderdale Convention Center restaurants and can provide flexible scheduling around major events. We also offer emergency services during conventions to ensure your restaurant can handle increased dining volume without interruption.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Do you service Las Olas Boulevard restaurants?</h3>
                <p className="text-gray-600">
                  Yes, we provide comprehensive hood cleaning services to all restaurants along Las Olas Boulevard and the surrounding downtown Fort Lauderdale area. Our team understands the upscale dining standards and can work around special events and busy dining periods.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How do you handle Fort Lauderdale's diverse cuisine types?</h3>
                <p className="text-gray-600">
                  Fort Lauderdale's diverse restaurant scene requires specialized cleaning approaches. We have experience with seafood restaurants, international cuisine, beachfront dining, and upscale establishments. Our team tailors cleaning methods to your specific cooking styles and menu requirements.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Do you provide documentation for Broward County inspections?</h3>
                <p className="text-gray-600">
                  Yes, we provide comprehensive cleaning reports and NFPA 96 certificates that meet all Broward County health department requirements. Our documentation is designed to help your restaurant pass inspections and maintain compliance with county regulations.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Can you handle Fort Lauderdale's beachfront restaurant challenges?</h3>
                <p className="text-gray-600">
                  Yes, we have extensive experience with Fort Lauderdale Beach restaurants and understand the challenges of salt air, high humidity, and year-round tourism. Our team can provide more frequent cleaning schedules and specialized cleaning methods to handle the unique conditions of beachfront dining establishments.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Do you offer emergency services for Fort Lauderdale restaurants?</h3>
                <p className="text-gray-600">
                  Yes, we provide 24/7 emergency hood cleaning services throughout Fort Lauderdale and Broward County. Our rapid response team can typically be on-site within 2-4 hours to address urgent situations like failed health inspections, equipment malfunctions, or emergency cleaning needs during busy periods.
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
              Ready for Professional Hood Cleaning in Fort Lauderdale?
            </h2>
            <p className="text-xl mb-8">
              Get an instant quote or call us today for same-day NFPA 96 certified hood cleaning services throughout Fort Lauderdale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/pricing/instant-quote?src=fort-lauderdale-cta"
                className="btn-primary bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
              >
                Get Instant Quote
              </a>
              <a 
                href="tel:+19545551234"
                className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
              >
                <Phone className="inline mr-2" size={20} />
                Call (954) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
