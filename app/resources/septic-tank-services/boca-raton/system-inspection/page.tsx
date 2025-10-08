import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Septic System Inspection — Boca Raton | LocalBizzList",
  description: "Complete guide to septic system inspections in Boca Raton, Florida. Learn about inspection requirements, coastal considerations, and system evaluation.",
  keywords: "septic system inspection boca raton, septic inspection boca raton, boca raton septic inspection, septic system evaluation boca raton",
};

export default function BocaRatonSystemInspectionPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              Septic System Inspection — Boca Raton
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Complete guide to septic system inspections in Boca Raton, Florida. Learn about inspection requirements, coastal considerations, and system evaluation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-orange-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Content Coming Soon</h2>
              <p className="text-gray-600 mb-6">
                This comprehensive guide to septic system inspections in Boca Raton is currently being developed. 
                It will cover inspection requirements, coastal considerations, and system evaluation.
              </p>
              <a
                href="/pricing/instant-quote/septic-tank-services?src=boca-inspection-stub"
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Schedule Inspection Service
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}