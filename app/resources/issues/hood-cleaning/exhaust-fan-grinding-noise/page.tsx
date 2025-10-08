import Link from 'next/link'
import Image from 'next/image'
import { Wrench, AlertTriangle, Clock, DollarSign, CheckCircle, Calendar } from 'lucide-react'

export const metadata = {
  title: "Exhaust Fan Making Loud Grinding Noise - Causes & Solutions",
  description: "Complete guide to exhaust fan grinding noise problems. Learn common causes, DIY troubleshooting steps, and when to call professionals for repair.",
  keywords: ["exhaust fan grinding noise", "kitchen exhaust fan noise", "range hood fan noise", "exhaust fan motor noise"],
  category: "maintenance-repairs",
  thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  author: "LocalBizzList Team",
  publishedAt: "2024-01-15",
  updatedAt: "2024-01-15",
  readTime: "6 min",
  h1: "Exhaust Fan Making Loud Grinding Noise - Causes & Solutions",
  canonical: "https://local-bizz-list.vercel.app/resources/issues/hood-cleaning/exhaust-fan-grinding-noise"
}

const articleMeta = {
  title: "Exhaust Fan Making Loud Grinding Noise - Causes & Solutions",
  description: "Complete guide to exhaust fan grinding noise problems. Learn common causes, DIY troubleshooting steps, and when to call professionals for repair.",
  keywords: ["exhaust fan grinding noise", "kitchen exhaust fan noise", "range hood fan noise", "exhaust fan motor noise"],
  category: "maintenance-repairs",
  thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  author: "LocalBizzList Team",
  publishedAt: "2024-01-15",
  updatedAt: "2024-01-15",
  readTime: "6 min",
  h1: "Exhaust Fan Making Loud Grinding Noise - Causes & Solutions",
  canonical: "https://local-bizz-list.vercel.app/resources/issues/hood-cleaning/exhaust-fan-grinding-noise"
}

export default function ExhaustFanGrindingNoise() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleMeta.h1,
    "description": articleMeta.description,
    "image": articleMeta.thumbnail,
    "author": {
      "@type": "Organization",
      "name": articleMeta.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "LocalBizzList",
      "logo": {
        "@type": "ImageObject",
        "url": "https://local-bizz-list.vercel.app/logo.png"
      }
    },
    "datePublished": articleMeta.publishedAt,
    "dateModified": articleMeta.updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleMeta.canonical
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://local-bizz-list.vercel.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Resources",
          "item": "https://local-bizz-list.vercel.app/resources"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Restaurant Hood Cleaning",
          "item": "https://local-bizz-list.vercel.app/niches/restaurant-hood-cleaning"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": articleMeta.h1,
          "item": articleMeta.canonical
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <nav className="bg-gray-50 border-b" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 py-3">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/resources" className="text-gray-500 hover:text-gray-700">
                  Resources
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/niches/restaurant-hood-cleaning" className="text-gray-500 hover:text-gray-700">
                  Restaurant Hood Cleaning
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">{articleMeta.h1}</li>
            </ol>
          </div>
        </nav>

        {/* Article Header */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">
                Maintenance & Repairs
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {articleMeta.h1}
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{articleMeta.readTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(articleMeta.publishedAt).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                A grinding noise from your exhaust fan is often the first sign of mechanical failure. This common problem can range from 
                minor bearing wear to complete motor failure, and understanding the causes helps determine whether you need immediate 
                professional repair or can address it yourself. This guide covers the most common causes and solutions for exhaust fan 
                grinding noise.
              </p>

              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&crop=center"
                alt="Kitchen exhaust fan maintenance and repair"
                width={800}
                height={600}
                className="rounded-lg shadow-lg mb-8"
                loading="lazy"
              />

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Causes of Exhaust Fan Grinding Noise</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Bearing Failure</h3>
              <p className="mb-4">
                The most common cause of grinding noise is bearing failure. Exhaust fan bearings support the motor shaft and fan blades, 
                and when they wear out, they create a grinding or squealing sound.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><Wrench className="inline w-4 h-4 text-orange-500 mr-2" /> **Symptoms**: Grinding, squealing, or rumbling sounds</li>
                <li><Wrench className="inline w-4 h-4 text-orange-500 mr-2" /> **Causes**: Normal wear, lack of lubrication, dust buildup</li>
                <li><Wrench className="inline w-4 h-4 text-orange-500 mr-2" /> **Solution**: Bearing replacement by professional</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Fan Blade Imbalance</h3>
              <p className="mb-4">
                When fan blades become unbalanced due to dirt buildup, corrosion, or damage, they can cause grinding noises as they 
                contact the fan housing or other components.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><AlertTriangle className="inline w-4 h-4 text-red-500 mr-2" /> **Symptoms**: Grinding, rattling, or scraping sounds</li>
                <li><AlertTriangle className="inline w-4 h-4 text-red-500 mr-2" /> **Causes**: Dirt buildup, blade damage, loose mounting</li>
                <li><AlertTriangle className="inline w-4 h-4 text-red-500 mr-2" /> **Solution**: Clean blades, tighten mounting, or replace damaged blades</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Motor Problems</h3>
              <p className="mb-4">
                Motor issues can cause grinding noises, especially when the motor windings are damaged or the motor shaft is misaligned.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><Clock className="inline w-4 h-4 text-blue-500 mr-2" /> **Symptoms**: Grinding, buzzing, or humming sounds</li>
                <li><Clock className="inline w-4 h-4 text-blue-500 mr-2" /> **Causes**: Electrical problems, shaft misalignment, overheating</li>
                <li><Clock className="inline w-4 h-4 text-blue-500 mr-2" /> **Solution**: Professional motor repair or replacement</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Loose Components</h3>
              <p className="mb-4">
                Loose mounting hardware, fan blades, or motor components can cause grinding noises as parts vibrate and contact each other.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><CheckCircle className="inline w-4 h-4 text-green-500 mr-2" /> **Symptoms**: Rattling, grinding, or clanking sounds</li>
                <li><CheckCircle className="inline w-4 h-4 text-green-500 mr-2" /> **Causes**: Vibration, thermal expansion, poor installation</li>
                <li><CheckCircle className="inline w-4 h-4 text-green-500 mr-2" /> **Solution**: Tighten all mounting hardware and connections</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">DIY Troubleshooting Steps</h2>
              <p className="mb-4">
                Before calling a professional, try these troubleshooting steps to identify and potentially resolve the grinding noise:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 1: Turn Off Power</h3>
              <p className="mb-4">
                Always turn off power to the exhaust fan before performing any maintenance or inspection. This prevents electrical shock 
                and accidental injury.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 2: Visual Inspection</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Check for visible damage to fan blades</li>
                <li>Look for loose mounting hardware</li>
                <li>Inspect motor housing for cracks or damage</li>
                <li>Check for excessive dirt or grease buildup</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 3: Clean Fan Blades</h3>
              <p className="mb-4">
                Remove dirt, grease, and debris from fan blades. Use a soft brush and mild detergent, being careful not to bend or 
                damage the blades.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 4: Check Mounting Hardware</h3>
              <p className="mb-4">
                Tighten all mounting bolts, screws, and connections. Use appropriate tools and don't overtighten, as this can cause 
                damage to components.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 5: Test Operation</h3>
              <p className="mb-4">
                Turn the power back on and test the fan operation. Listen for changes in the grinding noise and note any improvement 
                or worsening of symptoms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Call a Professional</h2>
              <p className="mb-4">
                While some grinding noise issues can be resolved with DIY troubleshooting, certain situations require professional repair:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Bearing failure:</strong> Requires specialized tools and expertise to replace</li>
                <li><strong>Motor problems:</strong> Electrical issues need licensed professional repair</li>
                <li><strong>Persistent noise:</strong> If grinding continues after cleaning and tightening</li>
                <li><strong>Safety concerns:</strong> Any electrical or structural damage</li>
                <li><strong>Warranty issues:</strong> Professional repair may be required to maintain warranty</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Repair Cost Estimates</h2>
              <p className="mb-4">
                Understanding repair costs helps you make informed decisions about repair vs. replacement:
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Common Repair Costs</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Bearing replacement</span>
                    <span className="font-medium">$150-300</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Fan blade replacement</span>
                    <span className="font-medium">$100-200</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Motor repair</span>
                    <span className="font-medium">$200-500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Complete fan replacement</span>
                    <span className="font-medium">$300-800</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Prevention Strategies</h2>
              <p className="mb-4">
                Regular maintenance can prevent most exhaust fan grinding noise problems:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Monthly cleaning:</strong> Remove dirt and grease from fan blades and housing</li>
                <li><strong>Quarterly inspection:</strong> Check mounting hardware and connections</li>
                <li><strong>Annual service:</strong> Professional inspection and lubrication</li>
                <li><strong>Proper installation:</strong> Ensure fan is properly mounted and balanced</li>
                <li><strong>Quality components:</strong> Use high-quality fans designed for commercial use</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How urgent is exhaust fan grinding noise?</h3>
                  <p className="text-gray-700">
                    Grinding noise indicates mechanical failure that will worsen over time. While not immediately dangerous, 
                    it should be addressed within days to prevent complete failure and more expensive repairs.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I fix grinding noise myself?</h3>
                  <p className="text-gray-700">
                    Simple issues like loose hardware or dirty blades can often be fixed with basic tools. However, 
                    bearing failure and motor problems require professional repair to ensure safety and proper operation.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How long can I run a grinding exhaust fan?</h3>
                  <p className="text-gray-700">
                    While you can continue using a grinding fan temporarily, it will eventually fail completely. 
                    Continued operation accelerates damage and increases repair costs.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What's the difference between grinding and squealing?</h3>
                  <p className="text-gray-700">
                    Grinding typically indicates bearing failure or blade contact, while squealing often suggests 
                    belt problems or motor issues. Both require professional attention but may have different repair approaches.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I replace or repair my exhaust fan?</h3>
                  <p className="text-gray-700">
                    Repair is usually more cost-effective for newer fans (less than 5 years old) with minor issues. 
                    Older fans with multiple problems may be better replaced entirely.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-8 my-12 text-center">
                <h3 className="text-2xl font-bold text-orange-900 mb-4">Need Professional Exhaust Fan Repair?</h3>
                <p className="text-orange-800 mb-6 text-lg">
                  Don't let grinding noise compromise your kitchen's safety and efficiency. Get expert repair service with licensed technicians.
                </p>
                <Link 
                  href="/pricing/instant-quote?src=hood_exhaust-fan-grinding-noise_end"
                  className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-bold text-lg rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Get Instant Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}