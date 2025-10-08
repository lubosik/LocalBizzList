import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Emergency Septic Repairs — Boca Raton | LocalBizzList",
  description: "Complete guide to emergency septic repairs in Boca Raton, Florida. Learn about immediate actions, warning signs, and emergency services for coastal septic systems.",
  keywords: "emergency septic repairs boca raton, septic emergency boca raton, septic backup boca raton, emergency septic service boca raton",
};

export default function BocaRatonEmergencyRepairsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              Emergency Septic Repairs — Boca Raton
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Complete guide to emergency septic repairs in Boca Raton, Florida. Learn about immediate actions, warning signs, and emergency services for coastal septic systems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Content Coming Soon</h2>
              <p className="text-gray-600 mb-6">
                This comprehensive guide to emergency septic repairs in Boca Raton is currently being developed. 
                It will cover immediate actions, warning signs, and emergency services for coastal septic systems.
              </p>
              <a
                href="/pricing/instant-quote/septic-tank-services?src=boca-emergency-stub"
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Get Emergency Septic Service
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}