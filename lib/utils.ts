export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function generateStructuredData(type: 'article' | 'business', data: any) {
  const baseUrl = 'https://localbizzlist.com'

  if (type === 'article') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.title,
      description: data.description,
      image: data.featuredImage,
      datePublished: data.publishedAt,
      dateModified: data.updatedAt || data.publishedAt,
      author: {
        '@type': 'Person',
        name: data.author,
      },
      publisher: {
        '@type': 'Organization',
        name: 'LocalBizzList',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo.png`,
        },
      },
    }
  }

  if (type === 'business') {
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: data.name,
      description: data.description,
      image: data.logo,
      telephone: data.phone,
      url: data.website,
      address: {
        '@type': 'PostalAddress',
        addressLocality: data.city,
        addressRegion: data.state,
        addressCountry: 'US',
      },
      priceRange: '$$',
    }
  }

  return {}
}