import type { NicheData, SubScores, Weights } from './data/aggregateNicheData';

// Re-export Weights for convenience
export type { Weights } from './data/aggregateNicheData';

/**
 * Default scoring weights matching the PRD
 */
export const DEFAULT_WEIGHTS: Weights = {
  demand: 0.25,        // 25%
  competition: 0.35,   // 35%
  localPack: 0.15,     // 15%
  contentGap: 0.15,    // 15%
  seasonality: 0.10,   // 10%
};

/**
 * Calculate the overall rankability score from sub-scores and weights
 */
export function calculateScore(subScores: SubScores, weights: Weights): number {
  const score =
    subScores.demand * weights.demand +
    subScores.competition * weights.competition +
    subScores.localPack * weights.localPack +
    subScores.contentGap * weights.contentGap +
    subScores.seasonality * weights.seasonality;

  return Math.round(score);
}

/**
 * Recalculate scores for all niches with new weights
 */
export function recalculateScores(niches: NicheData[], weights: Weights): NicheData[] {
  return niches.map(niche => {
    const newScore = calculateScore(niche.scores.subScores, weights);

    return {
      ...niche,
      scores: {
        ...niche.scores,
        total: newScore,
        weights,
      },
      summary: {
        ...niche.summary,
        rankabilityScore: newScore,
      },
    };
  }).sort((a, b) => b.scores.total - a.scores.total);
}

/**
 * Get verdict based on score
 */
export function getVerdict(score: number): string {
  if (score >= 70) return 'EXCELLENT';
  if (score >= 50) return 'GO';
  if (score >= 30) return 'CAUTION';
  return 'NO-GO';
}

/**
 * Get color class for score badge
 */
export function getScoreColorClass(score: number): string {
  if (score >= 70) return 'excellent';
  if (score >= 50) return 'good';
  if (score >= 30) return 'caution';
  return 'no-go';
}

/**
 * Get Tailwind color classes for charts
 */
export function getScoreColor(score: number): string {
  if (score >= 70) return '#10b981'; // green-500
  if (score >= 50) return '#3b82f6'; // blue-500
  if (score >= 30) return '#f59e0b'; // amber-500
  return '#ef4444'; // red-500
}

/**
 * Validate that weights sum to 1.0 (100%)
 */
export function validateWeights(weights: Weights): boolean {
  const sum = Object.values(weights).reduce((a, b) => a + b, 0);
  return Math.abs(sum - 1.0) < 0.001; // Allow small floating point errors
}

/**
 * Normalize weights to sum to 1.0
 */
export function normalizeWeights(weights: Weights): Weights {
  const sum = Object.values(weights).reduce((a, b) => a + b, 0);

  if (sum === 0) return DEFAULT_WEIGHTS;

  return {
    demand: weights.demand / sum,
    competition: weights.competition / sum,
    localPack: weights.localPack / sum,
    contentGap: weights.contentGap / sum,
    seasonality: weights.seasonality / sum,
  };
}

/**
 * Parse weights from URL query parameters
 */
export function parseWeightsFromQuery(query: Record<string, string | string[] | undefined>): Weights {
  const parsed = {
    demand: parseFloat(query.wD as string) || DEFAULT_WEIGHTS.demand * 100,
    competition: parseFloat(query.wC as string) || DEFAULT_WEIGHTS.competition * 100,
    localPack: parseFloat(query.wL as string) || DEFAULT_WEIGHTS.localPack * 100,
    contentGap: parseFloat(query.wG as string) || DEFAULT_WEIGHTS.contentGap * 100,
    seasonality: parseFloat(query.wS as string) || DEFAULT_WEIGHTS.seasonality * 100,
  };

  // Convert from percentage to decimal
  return normalizeWeights({
    demand: parsed.demand / 100,
    competition: parsed.competition / 100,
    localPack: parsed.localPack / 100,
    contentGap: parsed.contentGap / 100,
    seasonality: parsed.seasonality / 100,
  });
}

/**
 * Convert weights to query string
 */
export function weightsToQueryString(weights: Weights): string {
  const params = new URLSearchParams({
    wD: (weights.demand * 100).toString(),
    wC: (weights.competition * 100).toString(),
    wL: (weights.localPack * 100).toString(),
    wG: (weights.contentGap * 100).toString(),
    wS: (weights.seasonality * 100).toString(),
  });

  return params.toString();
}
