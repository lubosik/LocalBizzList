import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 bg-[#f7f9fc] mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">
              LocalBizzList
            </h3>
            <p className="text-sm text-brand-ink/80">
              Your trusted directory for South Florida commercial services. NFPA 96, compliance-first, and same-day response.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-brand-ink mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-brand-ink/80 hover:text-brand-ink transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/blog?cat=cost-guides" className="text-sm text-brand-ink/80 hover:text-brand-ink transition-colors">
                  Cost Guides
                </Link>
              </li>
              <li>
                <Link href="/blog?cat=compliance-inspections" className="text-sm text-brand-ink/80 hover:text-brand-ink transition-colors">
                  Compliance & Inspections
                </Link>
              </li>
              <li>
                <Link href="/blog?cat=maintenance-repairs" className="text-sm text-brand-ink/80 hover:text-brand-ink transition-colors">
                  Maintenance & Repairs
                </Link>
              </li>
              <li>
                <Link href="/blog?cat=emergency-after-hours" className="text-sm text-brand-ink/80 hover:text-brand-ink transition-colors">
                  Emergency & After-Hours
                </Link>
              </li>
              <li>
                <Link href="/blog?cat=planning-roi" className="text-sm text-brand-ink/80 hover:text-brand-ink transition-colors">
                  Planning & ROI
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-brand-ink mb-4">Businesses</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/niches/restaurant-hood-cleaning/" className="text-sm text-brand-ink/80 hover:text-brand-ink transition-colors">
                  Restaurant Hood Cleaning
                </Link>
              </li>
              <li>
                <Link href="/niches/grease-trap-cleaning/" className="text-sm text-brand-ink/80 hover:text-brand-ink transition-colors">
                  Grease Trap Cleaning
                </Link>
              </li>
              <li>
                <Link href="/niches/septic-tank-services/" className="text-sm text-brand-ink/80 hover:text-brand-ink transition-colors">
                  Septic Tank Services
                </Link>
              </li>
              <li>
                <Link href="/niches/sealcoating/" className="text-sm text-brand-ink/80 hover:text-brand-ink transition-colors">
                  Sealcoating & Paving
                </Link>
              </li>
              <li>
                <Link href="/niches/fire-extinguisher-services/" className="text-sm text-brand-ink/80 hover:text-brand-ink transition-colors">
                  Fire Extinguisher Services
                </Link>
              </li>
              <li>
                <Link href="/niches/sprinkler-repair/" className="text-sm text-brand-ink/80 hover:text-brand-ink transition-colors">
                  Sprinkler Repair & Testing
                </Link>
              </li>
              <li>
                <Link href="/businesses/add" className="text-sm text-brand-ink/80 hover:text-brand-ink transition-colors">
                  Add Your Business
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-brand-ink mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-ink/80 hover:text-brand-ink transition-colors focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-ink/80 hover:text-brand-ink transition-colors focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-ink/80 hover:text-brand-ink transition-colors focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-ink/80 hover:text-brand-ink transition-colors focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-brand-ink/80 hover:text-brand-ink transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-sm text-brand-ink/80 hover:text-brand-ink transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-sm text-brand-ink/80 hover:text-brand-ink transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-8 pt-8">
          <p className="text-center text-sm text-brand-ink/80">
            © {currentYear} LocalBizzList. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}