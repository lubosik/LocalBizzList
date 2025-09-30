import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">
              LocalBizzList
            </h3>
            <p className="text-sm text-neutral-600">
              Your trusted directory for South Florida local businesses and services.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-800 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-neutral-600 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/blog/how-to" className="text-sm text-neutral-600 hover:text-primary transition-colors">
                  How-To Guides
                </Link>
              </li>
              <li>
                <Link href="/blog/cost-guides" className="text-sm text-neutral-600 hover:text-primary transition-colors">
                  Cost Guides
                </Link>
              </li>
              <li>
                <Link href="/blog/expert-advice" className="text-sm text-neutral-600 hover:text-primary transition-colors">
                  Expert Advice
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-800 mb-4">Businesses</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/businesses" className="text-sm text-neutral-600 hover:text-primary transition-colors">
                  Browse All
                </Link>
              </li>
              <li>
                <Link href="/businesses/category/plumbing" className="text-sm text-neutral-600 hover:text-primary transition-colors">
                  Plumbing
                </Link>
              </li>
              <li>
                <Link href="/businesses/category/electrical" className="text-sm text-neutral-600 hover:text-primary transition-colors">
                  Electrical
                </Link>
              </li>
              <li>
                <Link href="/businesses/add" className="text-sm text-neutral-600 hover:text-primary transition-colors">
                  Add Your Business
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-800 mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-neutral-600 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-neutral-600 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-neutral-600 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-8 pt-8">
          <p className="text-center text-sm text-neutral-600">
            © {currentYear} LocalBizzList. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}