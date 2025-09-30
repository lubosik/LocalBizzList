// SEO utility functions that can be used in both client and server components

// Utility function to determine ease of ranking
export function getEaseOfRanking(score: number): 'EASY' | 'MEDIUM' | 'HARD' {
  if (score >= 70) return 'EASY';
  if (score >= 40) return 'MEDIUM';
  return 'HARD';
}

// Utility function to get ease of ranking color
export function getEaseOfRankingColor(ease: 'EASY' | 'MEDIUM' | 'HARD'): string {
  switch (ease) {
    case 'EASY':
      return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200';
    case 'MEDIUM':
      return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200';
    case 'HARD':
      return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200';
  }
}

// Calculate volatility from monthly searches
export function calculateVolatility(monthlySearches: Record<string, number>): number {
  const values = Object.values(monthlySearches);
  if (values.length === 0) return 0;

  const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
  const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length;
  const stdDev = Math.sqrt(variance);

  return mean > 0 ? (stdDev / mean) * 100 : 0; // Coefficient of variation as percentage
}
