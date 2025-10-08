import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Septic Permits & Regulations — Boca Raton | LocalBizzList",
  description: "Complete guide to septic permits and regulations in Boca Raton, Florida. Learn about Palm Beach County requirements, coastal regulations, and compliance standards.",
  keywords: "septic permits boca raton, septic regulations boca raton, palm beach county septic permits, boca raton septic compliance",
};

export default function BocaRatonPermitsRegulationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              Septic Permits & Regulations — Boca Raton
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Complete guide to septic permits and regulations in Boca Raton, Florida. Learn about Palm Beach County requirements, coastal regulations, and compliance standards.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-purple-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Content Coming Soon</h2>
              <p className="text-gray-600 mb-6">
                This comprehensive guide to septic permits and regulations in Boca Raton is currently being developed. 
                It will cover Palm Beach County requirements, coastal regulations, and compliance standards.
              </p>
              <a
                href="/pricing/instant-quote/septic-tank-services?src=boca-permits-stub"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Get Permit Assistance
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}