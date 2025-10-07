import Link from 'next/link'
import { Calculator } from 'lucide-react'

interface FooterCTAProps {
  headline: string
  subtext: string
  buttonText: string
  buttonHref: string
}

export default function FooterCTA({
  headline,
  subtext,
  buttonText,
  buttonHref,
}: FooterCTAProps) {
  return (
    <section className="my-16 rounded-2xl bg-brand-muted p-8 md:p-12">
      <div className="container">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-brand-ink mb-2">
            {headline}
          </h3>
          <p className="mt-2 text-brand-ink/80 mb-6">
            {subtext}
          </p>
          <div className="mt-6">
            <Link
              href={buttonHref}
              className="inline-flex items-center rounded-xl px-5 py-3 font-medium bg-brand-600 text-brand-on hover:bg-brand-700 focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 transition-colors"
            >
              <Calculator className="w-5 h-5 mr-2" />
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
