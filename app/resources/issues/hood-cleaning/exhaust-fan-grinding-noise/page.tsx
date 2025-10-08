import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Clock, MapPin, Calendar, AlertTriangle } from 'lucide-react'

export const metadata = {
  title: "Exhaust Fan Making Loud Grinding Noise",
  description: "Quick guide to exhaust fan grinding noise problems. Troubleshooting steps, repair costs, and when to call professionals.",
  keywords: ["exhaust fan grinding noise", "kitchen exhaust fan repair", "commercial exhaust fan problems", "exhaust fan troubleshooting"],
  category: "HOOD CLEANING",
  city: "All Cities",
  thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  author: "LocalBizzList Team",
  publishedAt: "2024-01-15",
  updatedAt: "2024-01-15",
  readTime: "5 min",
  h1: "Exhaust Fan Making Loud Grinding Noise",
  canonical: "https://local-bizz-list.vercel.app/resources/issues/hood-cleaning/exhaust-fan-grinding-noise"
}

export default function ExhaustFanGrindingNoise() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Exhaust Fan Making Loud Grinding Noise
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            Grinding noises from commercial kitchen exhaust fans typically indicate bearing failure, 
            worn belts, or motor problems. These issues worsen rapidly and can lead to complete 
            system failure, requiring immediate attention to prevent kitchen shutdown. Learn more about{' '}
            <Link href="/resources/issues/hood-cleaning/how-often-hood-cleaning" className="text-brand-600 hover:text-brand-700 underline">
              hood cleaning frequency requirements
            </Link> and{' '}
            <Link href="/niches/restaurant-hood-cleaning" className="text-brand-600 hover:text-brand-700 underline">
              professional exhaust fan repair services
            </Link>.
          </p>

          <Image
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&crop=center"
            alt="Commercial kitchen exhaust fan bearing failure and grinding noise problems"
            width={800}
            height={600}
            className="rounded-lg shadow-lg mb-8"
            loading="lazy"
          />

          <div className="bg-red-50 border border-red-200 rounded-lg p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-red-900 mb-4">Need Emergency Exhaust Fan Repair?</h3>
            <p className="text-red-800 mb-6 text-lg">
              Get immediate exhaust fan repair service with licensed technicians available 24/7 for emergency repairs.
            </p>
            <Link 
              href="/pricing/instant-quote?src=hood_exhaust-fan-grinding-noise_end"
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-bold text-lg rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Get Instant Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}