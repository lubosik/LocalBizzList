// Issue data types for the "Common Issues We Can Solve" section
export interface Issue {
  slug: string
  title: string
  snippet: string
  category: string
  cities: string[]
  keywords: string[]
  articleSlug: string
  priority: number
}

export interface NicheIssues {
  niche: string
  nicheTitle: string
  icon: string
  issues: Issue[]
}

