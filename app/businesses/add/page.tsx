'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import { CheckCircle2 } from 'lucide-react'

export default function AddBusinessPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <Hero
          title="Thank You!"
          description="Your business listing has been submitted for review."
        />
        <section className="container py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">
              Submission Received
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Thank you for submitting your business to LocalBizzList. Our team will review your submission and contact you within 2-3 business days.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="/" className="btn-primary px-8 py-3">
                Return Home
              </a>
              <a href="/businesses" className="btn-outline px-8 py-3">
                Browse Directory
              </a>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Hero
        title="List Your Business"
        description="Join South Florida's premier directory for high-value services and reach discerning clients."
      />

      <section className="container py-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">
              Why List with LocalBizzList?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-neutral-50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <p className="text-neutral-600">Monthly Visitors</p>
              </div>
              <div className="text-center p-6 bg-neutral-50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <p className="text-neutral-600">Client Satisfaction</p>
              </div>
              <div className="text-center p-6 bg-neutral-50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-neutral-600">Visibility</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-6">
                Business Information
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-neutral-800 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  required
                  className="input w-full"
                  placeholder="Your Business Name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-800 mb-2">
                  Category *
                </label>
                <select required className="input w-full">
                  <option value="">Select a category</option>
                  <option value="real-estate">Luxury Real Estate</option>
                  <option value="wealth-management">Wealth Management</option>
                  <option value="legal">Legal Services</option>
                  <option value="consulting">Business Consulting</option>
                  <option value="architecture">Architecture & Design</option>
                  <option value="medical">Medical Specialists</option>
                  <option value="technology">Technology Services</option>
                  <option value="other">Other Premium Services</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-800 mb-2">
                Business Description *
              </label>
              <textarea
                required
                rows={4}
                className="input w-full"
                placeholder="Describe your business and services..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-neutral-800 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  className="input w-full"
                  placeholder="(305) 555-0123"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-800 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="input w-full"
                  placeholder="contact@yourbusiness.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-800 mb-2">
                Website URL
              </label>
              <input
                type="url"
                className="input w-full"
                placeholder="https://www.yourbusiness.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-neutral-800 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  required
                  className="input w-full"
                  placeholder="Miami"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-800 mb-2">
                  State *
                </label>
                <input
                  type="text"
                  required
                  className="input w-full"
                  placeholder="FL"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-800 mb-2">
                Services Offered *
              </label>
              <textarea
                required
                rows={3}
                className="input w-full"
                placeholder="List your key services (one per line)"
              />
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6">
              <h4 className="font-semibold text-neutral-800 mb-3">
                Listing Package
              </h4>
              <div className="space-y-2">
                <label className="flex items-center gap-3">
                  <input type="radio" name="package" value="basic" className="w-4 h-4" defaultChecked />
                  <span className="text-neutral-700">
                    <span className="font-semibold">Basic Listing</span> - Free (Basic profile with contact info)
                  </span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="radio" name="package" value="premium" className="w-4 h-4" />
                  <span className="text-neutral-700">
                    <span className="font-semibold">Premium Listing</span> - $99/month (Featured placement, logo, extended profile)
                  </span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="radio" name="package" value="elite" className="w-4 h-4" />
                  <span className="text-neutral-700">
                    <span className="font-semibold">Elite Listing</span> - $249/month (Top placement, priority support, analytics)
                  </span>
                </label>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input type="checkbox" required className="mt-1 w-4 h-4" />
              <label className="text-sm text-neutral-600">
                I agree to the Terms of Service and Privacy Policy. I confirm that all information provided is accurate and that I have the authority to list this business. *
              </label>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="btn-primary px-8 py-3 text-base"
              >
                Submit Listing
              </button>
              <a
                href="/businesses"
                className="btn-outline px-8 py-3 text-base"
              >
                Cancel
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}