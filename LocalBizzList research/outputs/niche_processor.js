// Niche Processor for SEO Feasibility Study
// Processes individual niches and generates reports

const { ScoringSystem } = require('./scoring_system.js');

class NicheProcessor {
  constructor() {
    this.scoringSystem = new ScoringSystem();
    this.costEstimator = require('./cost_estimator.js').CostEstimator;
  }

  // Process a single niche
  async processNiche(nicheName, keywords, serpData, competitorData) {
    const slug = nicheName.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '_');
    
    const nicheData = {
      name: nicheName,
      slug: slug,
      keywords: keywords,
      serpData: serpData,
      competitorData: competitorData,
      processedAt: new Date().toISOString()
    };
    
    // Calculate scores
    const scores = this.scoringSystem.calculateRankabilityScore(nicheData);
    const rationale = this.scoringSystem.generateRationale(nicheData, scores);
    
    // Generate report data
    const report = {
      ...nicheData,
      scores: scores,
      rationale: rationale,
      summary: this.generateSummary(nicheData, scores),
      recommendations: this.generateRecommendations(nicheData, scores)
    };
    
    return report;
  }

  // Generate executive summary
  generateSummary(nicheData, scores) {
    const totalKeywords = nicheData.keywords ? nicheData.keywords.length : 0;
    const avgVolume = nicheData.keywords ? 
      nicheData.keywords.reduce((sum, kw) => sum + (kw.search_volume || 0), 0) / totalKeywords : 0;
    const avgCPC = nicheData.keywords ? 
      nicheData.keywords.reduce((sum, kw) => sum + (kw.cpc || 0), 0) / totalKeywords : 0;
    
    return {
      totalKeywords: totalKeywords,
      averageVolume: Math.round(avgVolume),
      averageCPC: Math.round(avgCPC * 100) / 100,
      rankabilityScore: scores.total,
      verdict: scores.total >= 70 ? 'GO' : scores.total >= 50 ? 'CAUTION' : 'NO-GO',
      keyStrengths: this.getKeyStrengths(scores),
      keyWeaknesses: this.getKeyWeaknesses(scores)
    };
  }

  // Get key strengths
  getKeyStrengths(scores) {
    const strengths = [];
    if (scores.subScores.demand > 70) strengths.push('High search demand');
    if (scores.subScores.competition > 70) strengths.push('Low competition');
    if (scores.subScores.localPack > 70) strengths.push('Strong local pack presence');
    if (scores.subScores.contentGap > 70) strengths.push('Good content opportunities');
    if (scores.subScores.seasonality > 70) strengths.push('Stable search trends');
    return strengths;
  }

  // Get key weaknesses
  getKeyWeaknesses(scores) {
    const weaknesses = [];
    if (scores.subScores.demand < 30) weaknesses.push('Low search demand');
    if (scores.subScores.competition < 30) weaknesses.push('High competition');
    if (scores.subScores.localPack < 30) weaknesses.push('Limited local pack opportunities');
    if (scores.subScores.contentGap < 30) weaknesses.push('Limited content opportunities');
    if (scores.subScores.seasonality < 30) weaknesses.push('Volatile search trends');
    return weaknesses;
  }

  // Generate recommendations
  generateRecommendations(nicheData, scores) {
    const recommendations = [];
    
    if (scores.subScores.demand < 50) {
      recommendations.push('Focus on long-tail keywords with higher commercial intent');
    }
    
    if (scores.subScores.competition > 70) {
      recommendations.push('Opportunity to capture market share with quality content');
    }
    
    if (scores.subScores.localPack > 70) {
      recommendations.push('Optimize for local SEO and Google My Business');
    }
    
    if (scores.subScores.contentGap > 70) {
      recommendations.push('Create comprehensive content covering underserved queries');
    }
    
    if (scores.subScores.seasonality < 50) {
      recommendations.push('Monitor seasonal trends and adjust content strategy accordingly');
    }
    
    return recommendations;
  }

  // Generate content plan
  generateContentPlan(nicheData, scores) {
    const plan = {
      pillarPages: [],
      clusterPages: [],
      locationPages: [],
      leadMagnets: []
    };
    
    // Generate pillar page ideas
    plan.pillarPages = [
      `Complete Guide to ${nicheData.name}`,
      `How to Choose the Best ${nicheData.name}`,
      `${nicheData.name} Cost Guide`,
      `Common ${nicheData.name} Problems and Solutions`
    ];
    
    // Generate cluster page ideas
    plan.clusterPages = [
      `What is ${nicheData.name}?`,
      `Benefits of Professional ${nicheData.name}`,
      `${nicheData.name} vs DIY Solutions`,
      `Signs You Need ${nicheData.name}`,
      `How Long Does ${nicheData.name} Take?`,
      `${nicheData.name} Safety Considerations`
    ];
    
    // Generate location pages
    const cities = ['Miami', 'Fort Lauderdale', 'Boca Raton', 'West Palm Beach'];
    plan.locationPages = cities.map(city => 
      `${nicheData.name} in ${city}, Florida`
    );
    
    // Generate lead magnet ideas
    plan.leadMagnets = [
      `${nicheData.name} Checklist`,
      `${nicheData.name} Cost Calculator`,
      `Free ${nicheData.name} Assessment`,
      `${nicheData.name} Buyer's Guide`
    ];
    
    return plan;
  }

  // Generate 90-day content plan
  generate90DayPlan(nicheData, scores) {
    const plan = {
      month1: [],
      month2: [],
      month3: []
    };
    
    // Month 1: Foundation
    plan.month1 = [
      'Homepage optimization',
      'Service pages creation',
      'Google My Business setup',
      'Local citations building',
      'First pillar page publication'
    ];
    
    // Month 2: Content expansion
    plan.month2 = [
      'Cluster content creation',
      'Location pages development',
      'FAQ section building',
      'Case studies creation',
      'Social media setup'
    ];
    
    // Month 3: Optimization
    plan.month3 = [
      'Content optimization',
      'Link building campaign',
      'Review generation',
      'Conversion optimization',
      'Analytics setup'
    ];
    
    return plan;
  }
}

module.exports = { NicheProcessor };
