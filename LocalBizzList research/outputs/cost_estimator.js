// Cost Estimator for DataForSEO API Usage
// Based on DataForSEO pricing: ~$0.01-0.05 per request depending on endpoint

const COST_PER_REQUEST = {
  'serp_organic_live_advanced': 0.05,
  'keywords_data_google_ads_search_volume': 0.01,
  'dataforseo_labs_google_related_keywords': 0.02,
  'dataforseo_labs_google_keyword_ideas': 0.02,
  'keywords_data_google_trends_explore': 0.01
};

const BUDGET_LIMIT = 50.00;
const DOWNSHIFT_THRESHOLD = 40.00; // Start downshifting at $40

class CostEstimator {
  constructor() {
    this.totalSpent = 0;
    this.requests = [];
    this.downshiftActive = false;
  }

  estimateRequest(endpoint, count = 1) {
    const cost = COST_PER_REQUEST[endpoint] * count;
    this.requests.push({ endpoint, count, cost, timestamp: new Date() });
    this.totalSpent += cost;
    return cost;
  }

  canProceed(endpoint, count = 1) {
    const projectedCost = this.totalSpent + this.estimateRequest(endpoint, count);
    return projectedCost <= BUDGET_LIMIT;
  }

  shouldDownshift() {
    return this.totalSpent >= DOWNSHIFT_THRESHOLD || this.downshiftActive;
  }

  activateDownshift() {
    this.downshiftActive = true;
    console.log(`⚠️  Downshift activated at $${this.totalSpent.toFixed(2)}`);
  }

  getStatus() {
    return {
      totalSpent: this.totalSpent,
      remaining: BUDGET_LIMIT - this.totalSpent,
      downshiftActive: this.downshiftActive,
      requests: this.requests.length
    };
  }

  logStatus() {
    const status = this.getStatus();
    console.log(`💰 Cost Status: $${status.totalSpent.toFixed(2)} spent, $${status.remaining.toFixed(2)} remaining, ${status.requests} requests`);
    if (status.downshiftActive) {
      console.log('🔻 Downshift mode: Using Miami-only SERP sampling and reduced keyword limits');
    }
  }
}

module.exports = { CostEstimator, COST_PER_REQUEST, BUDGET_LIMIT };
