// Scoring System for SEO Feasibility Study
// Calculates rankability scores based on weighted factors

class ScoringSystem {
  constructor() {
    this.weights = {
      demand: 0.25,        // Search volume, CPC
      competition: 0.35,   // KD, SERP composition
      localPack: 0.15,     // Map pack presence, directory ranking
      contentGap: 0.15,    // Underserved queries, commercial intent
      seasonality: 0.10    // Trend stability
    };
  }

  // Calculate demand score (0-100)
  calculateDemandScore(keywords) {
    if (!keywords || keywords.length === 0) return 0;
    
    const totalVolume = keywords.reduce((sum, kw) => sum + (kw.search_volume || 0), 0);
    const avgCPC = keywords.reduce((sum, kw) => sum + (kw.cpc || 0), 0) / keywords.length;
    
    // Normalize volume (0-100 scale, assuming max 100k monthly searches)
    const volumeScore = Math.min(100, (totalVolume / 100000) * 100);
    
    // CPC bonus (higher CPC = higher commercial value)
    const cpcScore = Math.min(50, avgCPC * 2); // Max 50 points for CPC
    
    return Math.min(100, volumeScore + cpcScore);
  }

  // Calculate competition score (0-100, lower is better)
  calculateCompetitionScore(keywords, serpData) {
    if (!keywords || keywords.length === 0) return 100; // High competition if no data
    
    // Average keyword difficulty
    const avgKD = keywords.reduce((sum, kw) => sum + (kw.competition_index || 50), 0) / keywords.length;
    
    // SERP composition penalty
    let serpPenalty = 0;
    if (serpData) {
      const govMegaPublishers = ['gov', 'wikipedia', 'webmd', 'mayoclinic', 'healthline'];
      const hasGovMega = serpData.some(result => 
        govMegaPublishers.some(domain => result.domain && result.domain.includes(domain))
      );
      if (hasGovMega) serpPenalty = 20;
    }
    
    // Lower KD = lower competition = higher score
    const kdScore = Math.max(0, 100 - avgKD);
    
    return Math.max(0, kdScore - serpPenalty);
  }

  // Calculate local pack friendliness score (0-100)
  calculateLocalPackScore(serpData) {
    if (!serpData) return 50; // Neutral if no data
    
    const localPackResults = serpData.filter(result => result.type === 'local_pack');
    const directoryResults = serpData.filter(result => 
      result.domain && (
        result.domain.includes('yelp') || 
        result.domain.includes('angie') || 
        result.domain.includes('thumbtack') ||
        result.domain.includes('homeadvisor')
      )
    );
    
    // Local pack presence (50 points max)
    const localPackScore = localPackResults.length > 0 ? 50 : 0;
    
    // Directory ranking in top 3 (50 points max)
    const top3Directories = directoryResults.filter(result => result.rank_absolute <= 3);
    const directoryScore = Math.min(50, top3Directories.length * 16.67);
    
    return localPackScore + directoryScore;
  }

  // Calculate content gap score (0-100)
  calculateContentGapScore(keywords) {
    if (!keywords || keywords.length === 0) return 50;
    
    const commercialIntent = ['cost', 'price', 'quote', 'estimate', 'near me', 'best', 'top'];
    const informationalIntent = ['how to', 'what is', 'guide', 'tips', 'vs', 'comparison'];
    
    let commercialCount = 0;
    let informationalCount = 0;
    
    keywords.forEach(kw => {
      const keyword = kw.keyword.toLowerCase();
      if (commercialIntent.some(intent => keyword.includes(intent))) {
        commercialCount++;
      }
      if (informationalIntent.some(intent => keyword.includes(intent))) {
        informationalCount++;
      }
    });
    
    // Higher commercial intent = higher score
    const commercialScore = Math.min(60, (commercialCount / keywords.length) * 100);
    
    // Some informational content is good for authority
    const infoScore = Math.min(40, (informationalCount / keywords.length) * 100);
    
    return commercialScore + infoScore;
  }

  // Calculate seasonality score (0-100)
  calculateSeasonalityScore(keywords) {
    if (!keywords || keywords.length === 0) return 50;
    
    // Calculate variance in monthly searches
    let totalVariance = 0;
    let validKeywords = 0;
    
    keywords.forEach(kw => {
      if (kw.monthly_searches) {
        const searches = Object.values(kw.monthly_searches).map(Number);
        if (searches.length > 1) {
          const mean = searches.reduce((a, b) => a + b, 0) / searches.length;
          const variance = searches.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / searches.length;
          totalVariance += variance;
          validKeywords++;
        }
      }
    });
    
    if (validKeywords === 0) return 50; // Neutral if no data
    
    const avgVariance = totalVariance / validKeywords;
    const avgVolume = keywords.reduce((sum, kw) => sum + (kw.search_volume || 0), 0) / keywords.length;
    
    // Lower variance relative to volume = more stable = higher score
    const stability = Math.max(0, 100 - (avgVariance / avgVolume) * 100);
    
    return Math.min(100, stability);
  }

  // Calculate overall rankability score
  calculateRankabilityScore(nicheData) {
    const demand = this.calculateDemandScore(nicheData.keywords);
    const competition = this.calculateCompetitionScore(nicheData.keywords, nicheData.serpData);
    const localPack = this.calculateLocalPackScore(nicheData.serpData);
    const contentGap = this.calculateContentGapScore(nicheData.keywords);
    const seasonality = this.calculateSeasonalityScore(nicheData.keywords);
    
    const totalScore = 
      demand * this.weights.demand +
      competition * this.weights.competition +
      localPack * this.weights.localPack +
      contentGap * this.weights.contentGap +
      seasonality * this.weights.seasonality;
    
    return {
      total: Math.round(totalScore),
      subScores: {
        demand: Math.round(demand),
        competition: Math.round(competition),
        localPack: Math.round(localPack),
        contentGap: Math.round(contentGap),
        seasonality: Math.round(seasonality)
      },
      weights: this.weights
    };
  }

  // Generate rationale for the score
  generateRationale(nicheData, scores) {
    const factors = [];
    
    if (scores.subScores.demand > 70) {
      factors.push(`Strong search demand (${scores.subScores.demand}/100)`);
    } else if (scores.subScores.demand < 30) {
      factors.push(`Low search demand (${scores.subScores.demand}/100)`);
    }
    
    if (scores.subScores.competition > 70) {
      factors.push(`Low competition (${scores.subScores.competition}/100)`);
    } else if (scores.subScores.competition < 30) {
      factors.push(`High competition (${scores.subScores.competition}/100)`);
    }
    
    if (scores.subScores.localPack > 70) {
      factors.push(`Strong local pack presence (${scores.subScores.localPack}/100)`);
    } else if (scores.subScores.localPack < 30) {
      factors.push(`Limited local pack opportunities (${scores.subScores.localPack}/100)`);
    }
    
    if (scores.subScores.contentGap > 70) {
      factors.push(`Good content gap opportunities (${scores.subScores.contentGap}/100)`);
    } else if (scores.subScores.contentGap < 30) {
      factors.push(`Limited content gap opportunities (${scores.subScores.contentGap}/100)`);
    }
    
    if (scores.subScores.seasonality > 70) {
      factors.push(`Stable search trends (${scores.subScores.seasonality}/100)`);
    } else if (scores.subScores.seasonality < 30) {
      factors.push(`Volatile search trends (${scores.subScores.seasonality}/100)`);
    }
    
    return factors.join('; ');
  }
}

module.exports = { ScoringSystem };
