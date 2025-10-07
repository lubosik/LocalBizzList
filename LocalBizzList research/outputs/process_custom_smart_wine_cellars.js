// Process Custom Smart Wine Cellars niche
const { NicheProcessor } = require('./niche_processor.js');

// Real data from our API calls
const customSmartWineCellarsData = {
  keywords: [
    {
      keyword: "wine cellar installation",
      search_volume: 480,
      cpc: 13.02,
      competition_index: 12,
      competition: "LOW",
      monthly_searches: {
        "2025-08": 1000,
        "2025-07": 1300,
        "2025-06": 720,
        "2025-05": 320,
        "2025-04": 260,
        "2025-03": 320,
        "2025-02": 260,
        "2025-01": 390,
        "2024-12": 320,
        "2024-11": 260,
        "2024-10": 260,
        "2024-09": 260
      }
    },
    {
      keyword: "wine cellar cooling system",
      search_volume: 3600,
      cpc: 5.39,
      competition_index: 100,
      competition: "HIGH",
      monthly_searches: {
        "2025-08": 4400,
        "2025-07": 2900,
        "2025-06": 2900,
        "2025-05": 2900,
        "2025-04": 2900,
        "2025-03": 3600,
        "2025-02": 2900,
        "2025-01": 3600,
        "2024-12": 3600,
        "2024-11": 5400,
        "2024-10": 4400,
        "2024-09": 3600
      }
    },
    {
      keyword: "wine cellar contractors",
      search_volume: 170,
      cpc: 7.12,
      competition_index: 10,
      competition: "LOW",
      monthly_searches: {
        "2025-08": 210,
        "2025-07": 140,
        "2025-06": 170,
        "2025-05": 210,
        "2025-04": 210,
        "2025-03": 390,
        "2025-02": 320,
        "2025-01": 210,
        "2024-12": 90,
        "2024-11": 110,
        "2024-10": 90,
        "2024-09": 90
      }
    }
  ],
  serpData: [
    { type: "organic", rank_absolute: 1, domain: "www.customwinecellarsmiamifl.com" },
    { type: "organic", rank_absolute: 2, domain: "coolwinecellar.com" },
    { type: "organic", rank_absolute: 3, domain: "thegrapepursuit.com" },
    { type: "organic", rank_absolute: 4, domain: "www.customwinecellarsmiami.com" },
    { type: "organic", rank_absolute: 5, domain: "www.winecellarinternational.com" },
    { type: "local_pack", rank_absolute: 6, domain: "cellart.us", phone: "(786) 241-4024", rating: 5.0 },
    { type: "local_pack", rank_absolute: 7, domain: "www.cettavino.com", phone: "(786) 250-5521", rating: 5.0 },
    { type: "local_pack", rank_absolute: 8, domain: "customwinecellarsmiamifl.com", phone: "(305) 517-7353" },
    { type: "organic", rank_absolute: 10, domain: "vintageview.com" },
    { type: "organic", rank_absolute: 11, domain: "www.cellarprocoolingsystems.com" },
    { type: "organic", rank_absolute: 13, domain: "winecellarhq.com" },
    { type: "organic", rank_absolute: 14, domain: "www.josephandcurtis.com" }
  ],
  competitorData: {
    custom_wine_cellars_miami_fl: {
      domain: "www.customwinecellarsmiamifl.com",
      title: "Best Designers, Custom Wine Cellars, Residential/Commercial",
      phone: "(305) 517-7353",
      description: "Custom Wine Cellars Miami Florida are specialists in the design and construction of all types of wine cellar projects.",
      services: [
        "Custom Wine Cellar Design",
        "Wine Cellar Construction",
        "Residential Wine Cellars",
        "Commercial Wine Cellars",
        "Wine Cellar Cooling Systems",
        "Wine Racking Systems",
        "Contemporary Wine Cellars",
        "Traditional Wine Cellars",
        "Hybrid Wine Cellars"
      ],
      features: [
        "21 Years Experience (Since 1999)",
        "Full-Service Team",
        "Certified and Insured Professionals",
        "Multiple Cooling System Brands",
        "Custom Design Solutions",
        "Nationwide Installation",
        "Budget and Style Flexibility",
        "Complete Project Supervision"
      ],
      content_analysis: {
        on_page_patterns: [
          "Experience and expertise emphasis",
          "Comprehensive service descriptions",
          "Design gallery showcase",
          "Local market focus",
          "Professional certification highlights"
        ],
        internal_linking: [
          "Design gallery pages",
          "Service-specific landing pages",
          "Contact and consultation forms",
          "About and team pages"
        ],
        cta_elements: [
          "Phone number prominently displayed",
          "Contact form access",
          "Design consultation offers",
          "Gallery viewing prompts"
        ],
        e_e_a_t_signals: [
          "21 years in business",
          "Certified and insured professionals",
          "Nationwide installation experience",
          "Comprehensive service portfolio",
          "Local market expertise"
        ]
      }
    },
    cool_wine_cellar: {
      domain: "coolwinecellar.com",
      title: "Custom Wine Cellars Design Experts miami florida",
      description: "Unlock the full potential of your wine collection with our tailored wine cellar design and installation services.",
      services: ["Wine Cellar Design", "Installation Services", "Custom Solutions"]
    },
    wine_cellar_international: {
      domain: "www.winecellarinternational.com",
      title: "Wine Cellar International, Residential & Commercial Cellars",
      description: "We have many completed residential and commercial wine cellar installations throughout Florida.",
      services: ["Residential Wine Cellars", "Commercial Wine Cellars", "Cooling Systems", "Wine Racks", "Wine Cellar Doors"]
    }
  }
};

async function processCustomSmartWineCellars() {
  const processor = new NicheProcessor();
  
  try {
    const report = await processor.processNiche(
      "Custom Smart Wine Cellars",
      customSmartWineCellarsData.keywords,
      customSmartWineCellarsData.serpData,
      customSmartWineCellarsData.competitorData
    );
    
    // Add content plan
    report.contentPlan = processor.generateContentPlan(report, report.scores);
    report.ninetyDayPlan = processor.generate90DayPlan(report, report.scores);
    
    console.log("Custom Smart Wine Cellars Report:");
    console.log("===============================");
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
processCustomSmartWineCellars().then(report => {
  if (report) {
    // Save the report
    const fs = require('fs');
    const path = require('path');
    
    const outputDir = path.join(__dirname, 'niches');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    fs.writeFileSync(
      path.join(outputDir, 'custom_smart_wine_cellars.json'),
      JSON.stringify(report, null, 2)
    );
    
    console.log("\nReport saved to niches/custom_smart_wine_cellars.json");
  }
});
