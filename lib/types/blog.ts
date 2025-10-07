export interface BlogPost {
  title: string
  excerpt: string
  slug: string
  publishedAt: string
  category: string
  categorySlug: string
  featuredImage: string
  featuredImageAlt: string
  author: string
  readingTime: number
  niche?: string
  city?: string
  url: string
}
