// Process Mold Remediation Services niche
const { NicheProcessor } = require('./niche_processor.js');

// Sample data from our API calls
const moldRemediationData = {
  keywords: [
    {
      keyword: "mold remediation services",
      search_volume: 40500,
      cpc: 12.95,
      competition_index: 7,
      competition: "LOW",
      monthly_searches: {
        "2025-08": 110000,
        "2025-07": 110000,
        "2025-06": 74000,
        "2025-05": 49500,
        "2025-04": 27100,
        "2025-03": 33100,
        "2025-02": 18100,
        "2025-01": 9900,
        "2024-12": 8100,
        "2024-11": 12100,
        "2024-10": 3600,
        "2024-09": 5400
      }
    },
    {
      keyword: "mold removal",
      search_volume: 74000,
      cpc: 22.92,
      competition_index: 56,
      competition: "MEDIUM",
      monthly_searches: {
        "2025-08": 74000,
        "2025-07": 74000,
        "2025-06": 60500,
        "2025-05": 60500,
        "2025-04": 74000,
        "2025-03": 74000,
        "2025-02": 60500,
        "2025-01": 74000,
        "2025-12": 74000,
        "2025-11": 90500,
        "2025-10": 90500,
        "2025-09": 60500
      }
    },
    {
      keyword: "black mold removal",
      search_volume: 18100,
      cpc: 15.29,
      competition_index: 69,
      competition: "HIGH",
      monthly_searches: {
        "2025-08": 18100,
        "2025-07": 18100,
        "2025-06": 14800,
        "2025-05": 18100,
        "2025-04": 14800,
        "2025-03": 18100,
        "2025-02": 18100,
        "2025-01": 22200,
        "2025-12": 18100,
        "2025-11": 22200,
        "2025-10": 22200,
        "2025-09": 18100
      }
    },
    {
      keyword: "mold inspection",
      search_volume: 33100,
      cpc: 15.81,
      competition_index: 27,
      competition: "LOW",
      monthly_searches: {
        "2025-08": 49500,
        "2025-07": 40500,
        "2025-06": 40500,
        "2025-05": 33100,
        "2025-04": 33100,
        "2025-03": 40500,
        "2025-02": 27100,
        "2025-01": 27100,
        "2025-12": 22200,
        "2025-11": 27100,
        "2025-10": 27100,
        "2025-09": 22200
      }
    },
    {
      keyword: "mold testing",
      search_volume: 40500,
      cpc: 9.42,
      competition_index: 51,
      competition: "MEDIUM",
      monthly_searches: {
        "2025-08": 49500,
        "2025-07": 49500,
        "2025-06": 40500,
        "2025-05": 33100,
        "2025-04": 33100,
        "2025-03": 40500,
        "2025-02": 33100,
        "2025-01": 33100,
        "2025-12": 33100,
        "2025-11": 33100,
        "2025-10": 40500,
        "2025-09": 33100
      }
    },
    {
      keyword: "mold remediation miami",
      search_volume: 2400,
      cpc: 26.28,
      competition_index: 38,
      competition: "MEDIUM",
      monthly_searches: {
        "2025-08": 1900,
        "2025-07": 1300,
        "2025-06": 1900,
        "2025-05": 2900,
        "2025-04": 2900,
        "2025-03": 3600,
        "2025-02": 4400,
        "2025-01": 2400,
        "2025-12": 2900,
        "2025-11": 1900,
        "2025-10": 1900,
        "2025-09": 1900
      }
    }
  ],
  serpData: [
    { type: "local_pack", rank_absolute: 1, domain: "www.revivewaterdamagerestoration.com" },
    { type: "local_pack", rank_absolute: 2, domain: "www.themoldavengers.com" },
    { type: "local_pack", rank_absolute: 3, domain: "miamimoldspecialists.com" },
    { type: "organic", rank_absolute: 4, domain: "www.yelp.com" },
    { type: "organic", rank_absolute: 5, domain: "miamimoldspecialists.com" },
    { type: "organic", rank_absolute: 6, domain: "bioresponsecorp.com" },
    { type: "organic", rank_absolute: 7, domain: "www.reddit.com" },
    { type: "organic", rank_absolute: 11, domain: "miamimoldspecialists.com" },
    { type: "organic", rank_absolute: 13, domain: "www.puroclean.com" },
    { type: "organic", rank_absolute: 14, domain: "www.angi.com" }
  ],
  competitorData: {
    miamimoldspecialists: {
      domain: "miamimoldspecialists.com",
      title: "Miami Mold",
      description: "FAMILY OWNED AND OPERATED SINCE 1986",
      services: ["Mold Inspection", "Mold Remediation", "Air Quality Restoration", "Environmental Consulting"],
      technology: ["Infrared Drone", "CO2 Hydrogenation", "Electrostatic Disinfecting", "UV LED Technology"],
      guarantees: ["100% Service Guarantee", "100% Exclusive Technology", "100% Organic"],
      phone: "(305) 763-8070",
      location: "Miami, FL 33168"
    }
  }
};

async function processMoldRemediation() {
  const processor = new NicheProcessor();
  
  try {
    const report = await processor.processNiche(
      "Mold Remediation Services",
      moldRemediationData.keywords,
      moldRemediationData.serpData,
      moldRemediationData.competitorData
    );
    
    // Add content plan
    report.contentPlan = processor.generateContentPlan(report, report.scores);
    report.ninetyDayPlan = processor.generate90DayPlan(report, report.scores);
    
    console.log("Mold Remediation Services Report:");
    console.log("=================================");
    console.log(`Rankability Score: ${report.scores.total}/100`);
    console.log(`Verdict: ${report.summary.verdict}`);
    console.log(`Rationale: ${report.rationale}`);
    console.log(`Key Strengths: ${report.summary.keyStrengths.join(', ')}`);
    console.log(`Key Weaknesses: ${report.summary.keyWeaknesses.join(', ')}`);
    console.log(`Total Keywords: ${report.summary.totalKeywords}`);
    console.log(`Average Volume: ${report.summary.averageVolume}`);
    console.log(`Average CPC: $${report.summary.averageCPC}`);
    
    return report;
  } catch (error) {
    console.error("Error processing niche:", error);
    return null;
  }
}

// Run the processing
processMoldRemediation().then(report => {
  if (report) {
    // Save the report
    const fs = require('fs');
    const path = require('path');
    
    const outputDir = path.join(__dirname, 'niches');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    fs.writeFileSync(
      path.join(outputDir, 'mold_remediation_services.json'),
      JSON.stringify(report, null, 2)
    );
    
    console.log("\nReport saved to niches/mold_remediation_services.json");
  }
});
