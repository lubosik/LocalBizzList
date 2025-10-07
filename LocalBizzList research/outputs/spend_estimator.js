const fs = require('fs');
const path = require('path');

// Load Miami configuration
const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'miami_config.json'), 'utf8'));

// Niche list from the requirements
const niches = [
  "Mold Remediation Services",
  "Smart Outdoor Lighting Solutions", 
  "Preventative Mold Treatment Services",
  "Yacht Maintenance and Repair Services",
  "Yacht and Jet Detailing Services",
  "Cybersecurity integration with smart home security",
  "Custom Smart Wine Cellars",
  "Non-Surgical Rhinoplasty Options",
  "Smart Home Installation",
  "Specialized Family Office Concierge Services",
  "Digital Estate Planning and Online Will Services",
  "Tax Advisory for Cryptocurrency and Digital Assets",
  "Niche Tax Advisory for Real Estate Investors",
  "Digital Estate Planning Services",
  "Specialized Elder Law Consulting",
  "Metal Roof Maintenance and Inspection Services",
  "Roofing Inspection and Maintenance Plans",
  "Outdoor kitchen design consultation and customization services",
  "High-tech smart home remodeling",
  "Pool Automation and Smart Pool Technology Installations"
];

function estimateSpendPerNiche() {
  const estimates = [];
  
  for (const niche of niches) {
    const estimate = {
      niche: niche,
      keywords: config.keywords_per_niche_cap,
      serp_queries: config.serp_queries_cap,
      firecrawl_pages: config.firecrawl_pages_per_niche,
      costs: {
        keyword_overview: (config.keywords_per_niche_cap / 1000) * config.estimated_costs.keyword_overview_per_1000,
        bulk_difficulty: (config.keywords_per_niche_cap / 1000) * config.estimated_costs.bulk_difficulty_per_1000,
        serp_organic: config.serp_queries_cap * config.estimated_costs.serp_organic_per_query,
        related_keywords: (config.keywords_per_niche_cap / 1000) * config.estimated_costs.related_keywords_per_1000,
        keyword_ideas: (config.keywords_per_niche_cap / 1000) * config.estimated_costs.keyword_ideas_per_1000,
        ads_search_volume: (config.keywords_per_niche_cap / 1000) * config.estimated_costs.ads_search_volume_per_1000
      }
    };
    
    estimate.total_cost = Object.values(estimate.costs).reduce((sum, cost) => sum + cost, 0);
    estimates.push(estimate);
  }
  
  return estimates;
}

function printEstimates() {
  const estimates = estimateSpendPerNiche();
  const totalEstimated = estimates.reduce((sum, est) => sum + est.total_cost, 0);
  
  console.log('=== MIAMI NICHE RESEARCH SPEND ESTIMATE ===');
  console.log(`Location: ${config.location_name} (${config.location_code})`);
  console.log(`Language: ${config.language_code}`);
  console.log(`Budget Cap: $${config.budget_cap}`);
  console.log(`Total Niches: ${niches.length}`);
  console.log('');
  
  console.log('Per-Niche Estimates:');
  console.log('Niche | Keywords | SERP | Firecrawl | Total Cost');
  console.log('------|----------|------|-----------|-----------');
  
  estimates.forEach(est => {
    console.log(`${est.niche.substring(0, 30)}... | ${est.keywords} | ${est.serp_queries} | ${est.firecrawl_pages} | $${est.total_cost.toFixed(2)}`);
  });
  
  console.log('');
  console.log(`Total Estimated Spend: $${totalEstimated.toFixed(2)}`);
  console.log(`Budget Utilization: ${((totalEstimated / config.budget_cap) * 100).toFixed(1)}%`);
  
  if (totalEstimated > config.budget_cap) {
    console.log('⚠️  WARNING: Estimated spend exceeds budget cap!');
    console.log('Recommendation: Reduce keywords per niche to 300 and SERP queries to 5');
    
    // Calculate reduced estimates
    const reducedEstimates = estimateSpendPerNiche().map(est => {
      const reduced = {
        ...est,
        keywords: 300,
        serp_queries: 5,
        costs: {
          keyword_overview: (300 / 1000) * config.estimated_costs.keyword_overview_per_1000,
          bulk_difficulty: (300 / 1000) * config.estimated_costs.bulk_difficulty_per_1000,
          serp_organic: 5 * config.estimated_costs.serp_organic_per_query,
          related_keywords: (300 / 1000) * config.estimated_costs.related_keywords_per_1000,
          keyword_ideas: (300 / 1000) * config.estimated_costs.keyword_ideas_per_1000,
          ads_search_volume: (300 / 1000) * config.estimated_costs.ads_search_volume_per_1000
        }
      };
      reduced.total_cost = Object.values(reduced.costs).reduce((sum, cost) => sum + cost, 0);
      return reduced;
    });
    
    const reducedTotal = reducedEstimates.reduce((sum, est) => sum + est.total_cost, 0);
    console.log(`Reduced Total: $${reducedTotal.toFixed(2)} (${((reducedTotal / config.budget_cap) * 100).toFixed(1)}% of budget)`);
  }
  
  return estimates;
}

// Run the estimator
if (require.main === module) {
  printEstimates();
}

module.exports = { estimateSpendPerNiche, printEstimates };
