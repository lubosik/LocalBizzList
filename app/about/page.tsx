import Hero from '@/components/Hero'
import Link from 'next/link'
import { CheckCircle2, Users, Award, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'About Us - LocalBizzList',
  description: 'Learn about LocalBizzList, your trusted directory for premium South Florida businesses and services.',
}

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About LocalBizzList"
        description="Your trusted directory for premium South Florida businesses and high-value services. We connect discerning clients with the best professionals in the region."
      />

      {/* Core Value Proposition */}
      <section className="bg-gradient-to-r from-primary to-primary-int py-16">
        <div className="container text-center text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-white">We Handle Everything For You</h2>
            <p className="text-lg text-white/90 mb-4">
              <strong>We handle all the sourcing, negotiations, and logistics to find you the best service provider at the cheapest cost in your area.</strong> 
              Restaurant hood cleaning, grease trap services, septic maintenance, and more.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center text-white/90">
                <span className="w-5 h-5 bg-green-300 rounded-full mr-2 flex items-center justify-center">
                  <span className="text-green-800 text-xs">✓</span>
                </span>
                <span>Licensed & Certified Providers</span>
              </div>
              <div className="flex items-center text-white/90">
                <span className="w-5 h-5 bg-green-300 rounded-full mr-2 flex items-center justify-center">
                  <span className="text-green-800 text-xs">✓</span>
                </span>
                <span>Best Price Guarantee</span>
              </div>
              <div className="flex items-center text-white/90">
                <span className="w-5 h-5 bg-green-300 rounded-full mr-2 flex items-center justify-center">
                  <span className="text-green-800 text-xs">✓</span>
                </span>
                <span>Complete Project Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-800 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            LocalBizzList is dedicated to connecting South Florida residents and businesses with premium service providers. We curate a select directory of verified, high-quality professionals across luxury real estate, wealth management, legal services, and more.
          </p>

          <h2 className="text-3xl font-bold text-neutral-800 mb-6">
            Why Choose LocalBizzList?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                  Verified Professionals
                </h3>
                <p className="text-neutral-600">
                  Every business in our directory is carefully vetted and verified for credentials, experience, and reputation.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                  Premium Services
                </h3>
                <p className="text-neutral-600">
                  We focus on high-value services and businesses that serve South Florida's discerning clientele.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                  Local Expertise
                </h3>
                <p className="text-neutral-600">
                  Our professionals understand South Florida's unique market, regulations, and lifestyle needs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                  Trusted Reviews
                </h3>
                <p className="text-neutral-600">
                  Real feedback from verified clients helps you make informed decisions about service providers.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-800 mb-6">
            Our Story
          </h2>
          <p className="text-lg text-neutral-600 mb-4">
            Founded in South Florida, LocalBizzList was created to address the challenge of finding trustworthy, high-caliber professionals in a market flooded with options. We recognized that discerning clients need more than just a list—they need curated recommendations backed by verification and real-world results.
          </p>
          <p className="text-lg text-neutral-600 mb-8">
            Today, we serve thousands of South Florida residents and businesses, helping them connect with the region's finest professionals across real estate, finance, legal services, consulting, and specialized luxury services.
          </p>

          <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-neutral-800 mb-4">
              <strong>We handle all the sourcing, negotiations, and logistics to find you the best service provider at the cheapest cost in your area.</strong>
            </p>
            <p className="text-neutral-600 mb-6">
              Browse our directory of verified professionals or list your premium business today.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/businesses"
                className="btn-primary px-8 py-3"
              >
                Browse Directory
              </Link>
              <Link
                href="/businesses/add"
                className="btn-outline px-8 py-3"
              >
                List Your Business
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}