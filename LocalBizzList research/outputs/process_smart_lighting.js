// Process Smart Outdoor Lighting Solutions niche
const { NicheProcessor } = require('./niche_processor.js');

// Sample data from our API calls
const smartLightingData = {
  keywords: [
    {
      keyword: "smart outdoor lighting",
      search_volume: 6600,
      cpc: 0.89,
      competition_index: 100,
      competition: "HIGH",
      monthly_searches: {
        "2025-08": 5400,
        "2025-07": 3600,
        "2025-06": 3600,
        "2025-05": 4400,
        "2025-04": 4400,
        "2025-03": 5400,
        "2025-02": 4400,
        "2025-01": 5400,
        "2024-12": 8100,
        "2024-11": 12100,
        "2024-10": 8100,
        "2024-09": 6600
      }
    },
    {
      keyword: "outdoor smart lights",
      search_volume: 6600,
      cpc: 0.89,
      competition_index: 100,
      competition: "HIGH",
      monthly_searches: {
        "2025-08": 5400,
        "2025-07": 3600,
        "2025-06": 3600,
        "2025-05": 4400,
        "2025-04": 4400,
        "2025-03": 5400,
        "2025-02": 4400,
        "2025-01": 5400,
        "2024-12": 8100,
        "2024-11": 12100,
        "2024-10": 8100,
        "2024-09": 6600
      }
    },
    {
      keyword: "smart landscape lighting",
      search_volume: 390,
      cpc: 1.82,
      competition_index: 100,
      competition: "HIGH",
      monthly_searches: {
        "2025-08": 390,
        "2025-07": 320,
        "2025-06": 320,
        "2025-05": 390,
        "2025-04": 390,
        "2025-03": 480,
        "2025-02": 320,
        "2025-01": 260,
        "2024-12": 390,
        "2024-11": 590,
        "2024-10": 480,
        "2024-09": 480
      }
    },
    {
      keyword: "outdoor lighting installation",
      search_volume: 4400,
      cpc: 10.17,
      competition_index: 34,
      competition: "MEDIUM",
      monthly_searches: {
        "2025-08": 2400,
        "2025-07": 1600,
        "2025-06": 2400,
        "2025-05": 2900,
        "2025-04": 5400,
        "2025-03": 6600,
        "2025-02": 5400,
        "2025-01": 3600,
        "2024-12": 5400,
        "2024-11": 12100,
        "2024-10": 3600,
        "2024-09": 2400
      }
    },
    {
      keyword: "landscape lighting design",
      search_volume: 1600,
      cpc: 3.47,
      competition_index: 64,
      competition: "MEDIUM",
      monthly_searches: {
        "2025-08": 1000,
        "2025-07": 1300,
        "2025-06": 1600,
        "2025-05": 1600,
        "2025-04": 2900,
        "2025-03": 2400,
        "2025-02": 1600,
        "2025-01": 1300,
        "2024-12": 1000,
        "2024-11": 1300,
        "2024-10": 1600,
        "2024-09": 1600
      }
    },
    {
      keyword: "smart lighting systems",
      search_volume: 5400,
      cpc: 1.22,
      competition_index: 18,
      competition: "LOW",
      monthly_searches: {
        "2025-08": 18100,
        "2025-07": 6600,
        "2025-06": 5400,
        "2025-05": 4400,
        "2025-04": 4400,
        "2025-03": 4400,
        "2025-02": 3600,
        "2025-01": 4400,
        "2024-12": 3600,
        "2024-11": 4400,
        "2024-10": 4400,
        "2024-09": 3600
      }
    }
  ],
  serpData: [
    { type: "organic", rank_absolute: 1, domain: "www.philips-hue.com" },
    { type: "organic", rank_absolute: 2, domain: "shop.gelighting.com" },
    { type: "organic", rank_absolute: 3, domain: "us.govee.com" },
    { type: "organic", rank_absolute: 4, domain: "www.homedepot.com" },
    { type: "organic", rank_absolute: 6, domain: "www.voltlighting.com" },
    { type: "organic", rank_absolute: 8, domain: "www.nytimes.com" },
    { type: "organic", rank_absolute: 10, domain: "www.reddit.com" },
    { type: "organic", rank_absolute: 11, domain: "havenlighting.com" },
    { type: "organic", rank_absolute: 14, domain: "www.wizconnected.com" }
  ],
  competitorData: {
    philips_hue: {
      domain: "www.philips-hue.com",
      title: "Smart LED outdoor lights",
      description: "Guide the way through your outdoor space and set the mood for any occasion with beautiful, powerful smart light.",
      price_range: "$110 to $396",
      features: ["Smart control", "Weather resistant", "Color changing", "App control"]
    },
    govee: {
      domain: "us.govee.com", 
      title: "Smart LED Outdoor Lights",
      features: ["RGBIC technology", "App control", "Weather resistant", "Multiple product lines"]
    },
    volt_lighting: {
      domain: "www.voltlighting.com",
      title: "Smart Landscape Lighting Kits", 
      price_range: "$109 to $1,097",
      features: ["Professional installation", "Low voltage", "Smart control", "Landscape focused"]
    }
  }
};

async function processSmartLighting() {
  const processor = new NicheProcessor();
  
  try {
    const report = await processor.processNiche(
      "Smart Outdoor Lighting Solutions",
      smartLightingData.keywords,
      smartLightingData.serpData,
      smartLightingData.competitorData
    );
    
    // Add content plan
    report.contentPlan = processor.generateContentPlan(report, report.scores);
    report.ninetyDayPlan = processor.generate90DayPlan(report, report.scores);
    
    console.log("Smart Outdoor Lighting Solutions Report:");
    console.log("======================================");
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
processSmartLighting().then(report => {
  if (report) {
    // Save the report
    const fs = require('fs');
    const path = require('path');
    
    const outputDir = path.join(__dirname, 'niches');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    fs.writeFileSync(
      path.join(outputDir, 'smart_outdoor_lighting_solutions.json'),
      JSON.stringify(report, null, 2)
    );
    
    console.log("\nReport saved to niches/smart_outdoor_lighting_solutions.json");
  }
});
