import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Drain Field Care Guide — Boca Raton Septic Systems | LocalBizzList",
  description: "Complete guide to drain field maintenance and care in Boca Raton, Florida. Learn about sandy soil conditions, high water tables, and coastal drain field protection.",
  keywords: "drain field care boca raton, septic drain field maintenance boca raton, drain field problems boca raton, boca raton septic systems",
};

export default function BocaRatonDrainFieldCarePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              Drain Field Care Guide — Boca Raton Septic Systems
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Complete guide to drain field maintenance and care in Boca Raton, Florida. Learn about sandy soil conditions, high water tables, and coastal drain field protection.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Content Coming Soon</h2>
              <p className="text-gray-600 mb-6">
                This comprehensive guide to drain field care in Boca Raton is currently being developed. 
                It will cover sandy soil conditions, high water table management, and coastal protection strategies.
              </p>
              <a
                href="/pricing/instant-quote/septic-tank-services?src=boca-drain-field-stub"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Professional Drain Field Service
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}