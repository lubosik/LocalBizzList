import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://localbizzlist.com'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/businesses`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/niches`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/niches/restaurant-hood-cleaning`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/niches/grease-trap-cleaning`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/niches/septic-tank-services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/niches/sealcoating`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/niches/fire-extinguisher-services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/niches/sprinkler-repair`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/restaurant-hood-cleaning`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/septic-tank-services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing/instant-quote`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/locations/miami/hood-cleaning`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/boca-raton/hood-cleaning`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/fort-lauderdale/hood-cleaning`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Septic city service pages
    {
      url: `${baseUrl}/locations/miami/septic-services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/locations/boca-raton/septic-services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/locations/fort-lauderdale/septic-services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Real blog posts
  const blogPosts = [
    {
      url: `${baseUrl}/blog/nfpa-96-compliance-checklist-miami`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/hood-cleaning-frequency-boca-raton`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/exhaust-fan-problems-fort-lauderdale`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/nfpa-96-hood-cleaning-checklist-fort-lauderdale`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/hood-cleaning-frequency-requirements-miami`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/exhaust-fan-coastal-considerations-boca-raton`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ]

  // Empty businesses array - will be populated with real hood cleaning vendors
  const businesses: any[] = []

  // Common issues pages
  const commonIssuesPages = [
    {
      url: `${baseUrl}/resources/issues/hood-cleaning/exhaust-fan-grinding-noise`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/issues/hood-cleaning/how-often-hood-cleaning`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Septic resource articles - Miami (8 articles)
  const septicResourcesMiami = [
    {
      url: `${baseUrl}/resources/septic-tank-services/miami/septic-pumping-cost-frequency`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/septic-tank-services/miami/septic-inspection-checklist`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/septic-tank-services/miami/emergency-septic-backups`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/septic-tank-services/miami/drain-field-problems-warning-signs`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/septic-tank-services/miami/what-not-to-flush`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/septic-tank-services/miami/permits-local-rules`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/septic-tank-services/miami/septic-vs-sewer-conversion`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/septic-tank-services/miami/restaurants-on-septic`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Septic resource articles - Boca Raton (8 articles)
  const septicResourcesBoca = [
    {
      url: `${baseUrl}/resources/septic-tank-services/boca-raton/septic-pumping-cost-frequency`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/septic-tank-services/boca-raton/septic-inspection-checklist`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/septic-tank-services/boca-raton/emergency-septic-backups`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/septic-tank-services/boca-raton/drain-field-problems-warning-signs`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/septic-tank-services/boca-raton/what-not-to-flush`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/septic-tank-services/boca-raton/permits-local-rules`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/septic-tank-services/boca-raton/septic-vs-sewer-conversion`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/septic-tank-services/boca-raton/restaurants-on-septic`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Septic resource articles - Fort Lauderdale (8 articles)
  const septicResourcesFTL = [
    {
      url: `${baseUrl}/resources/septic-tank-services/fort-lauderdale/septic-pumping-cost-frequency`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/septic-tank-services/fort-lauderdale/septic-inspection-checklist`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/septic-tank-services/fort-lauderdale/emergency-septic-backups`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/septic-tank-services/fort-lauderdale/drain-field-problems-warning-signs`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/septic-tank-services/fort-lauderdale/what-not-to-flush`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/septic-tank-services/fort-lauderdale/permits-local-rules`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/septic-tank-services/fort-lauderdale/septic-vs-sewer-conversion`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/septic-tank-services/fort-lauderdale/restaurants-on-septic`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Resource articles (legacy - keeping for now)
  const resourceArticles = [
    // Miami resources
    {
      url: `${baseUrl}/resources/miami/nfpa-96-hood-cleaning-checklist`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/miami/hood-cleaning-frequency-by-restaurant-type`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/miami/exhaust-fan-problems-and-fixes`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    // Boca Raton resources
    {
      url: `${baseUrl}/resources/boca-raton/nfpa-96-hood-cleaning-checklist`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/boca-raton/hood-cleaning-frequency-by-restaurant-type`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/boca-raton/exhaust-fan-problems-and-fixes`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    // Fort Lauderdale resources
    {
      url: `${baseUrl}/resources/restaurant-hood-cleaning/fort-lauderdale/nfpa-96-hood-cleaning-checklist`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/restaurant-hood-cleaning/fort-lauderdale/hood-cleaning-frequency-by-restaurant-type`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/restaurant-hood-cleaning/fort-lauderdale/exhaust-fan-problems-and-fixes`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  return [
    ...staticPages,
    ...blogPosts,
    ...businesses,
    ...commonIssuesPages,
    ...resourceArticles,
    ...septicResourcesMiami,
    ...septicResourcesBoca,
    ...septicResourcesFTL
  ]
}