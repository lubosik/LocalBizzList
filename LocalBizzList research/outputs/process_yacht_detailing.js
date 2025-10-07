// Process Yacht and Jet Detailing Services niche
const { NicheProcessor } = require('./niche_processor.js');

// Real data from our API calls
const yachtDetailingData = {
  keywords: [
    {
      keyword: "yacht detailing services",
      search_volume: 70,
      cpc: 2.1,
      competition_index: 3,
      competition: "LOW",
      monthly_searches: {
        "2025-08": 110,
        "2025-07": 90,
        "2025-06": 40,
        "2025-05": 30,
        "2025-04": 20,
        "2025-03": 20,
        "2025-02": 40,
        "2025-01": 110,
        "2024-12": 170,
        "2024-11": 50,
        "2024-10": 30,
        "2024-09": 30
      }
    },
    {
      keyword: "boat detailing near me",
      search_volume: 9900,
      cpc: 3.44,
      competition_index: 33,
      competition: "LOW",
      monthly_searches: {
        "2025-08": 8100,
        "2025-07": 9900,
        "2025-06": 9900,
        "2025-05": 12100,
        "2025-04": 14800,
        "2025-03": 12100,
        "2025-02": 8100,
        "2025-01": 6600,
        "2024-12": 5400,
        "2024-11": 5400,
        "2024-10": 8100,
        "2024-09": 9900
      }
    },
    {
      keyword: "marine detailing",
      search_volume: 720,
      cpc: 5.39,
      competition_index: 15,
      competition: "LOW",
      monthly_searches: {
        "2025-08": 590,
        "2025-07": 720,
        "2025-06": 590,
        "2025-05": 880,
        "2025-04": 720,
        "2025-03": 880,
        "2025-02": 880,
        "2025-01": 590,
        "2024-12": 390,
        "2024-11": 590,
        "2024-10": 720,
        "2024-09": 590
      }
    },
    {
      keyword: "yacht detailing miami",
      search_volume: 20,
      cpc: 8.35,
      competition_index: 35,
      competition: "MEDIUM",
      monthly_searches: {
        "2025-08": 20,
        "2025-07": 10,
        "2025-06": 20,
        "2025-05": 10,
        "2025-04": 10,
        "2025-03": 20,
        "2025-02": 10,
        "2025-01": 10,
        "2024-12": 10,
        "2024-11": 20,
        "2024-10": 40,
        "2024-09": 40
      }
    },
    {
      keyword: "boat detailing fort lauderdale",
      search_volume: 210,
      cpc: 7.04,
      competition_index: 18,
      competition: "LOW",
      monthly_searches: {
        "2025-08": 260,
        "2025-07": 590,
        "2025-06": 70,
        "2025-05": 70,
        "2025-04": 110,
        "2025-03": 140,
        "2025-02": 210,
        "2025-01": 260,
        "2024-12": 390,
        "2024-11": 260,
        "2024-10": 140,
        "2024-09": 110
      }
    },
    {
      keyword: "boat detailing cost",
      search_volume: 720,
      cpc: 3.2,
      competition_index: 14,
      competition: "LOW",
      monthly_searches: {
        "2025-08": 720,
        "2025-07": 720,
        "2025-06": 880,
        "2025-05": 1300,
        "2025-04": 1000,
        "2025-03": 880,
        "2025-02": 720,
        "2025-01": 590,
        "2024-12": 480,
        "2024-11": 590,
        "2024-10": 590,
        "2024-09": 720
      }
    },
    {
      keyword: "marine detailing services",
      search_volume: 40,
      cpc: 0,
      competition_index: 4,
      competition: "LOW",
      monthly_searches: {
        "2025-08": 40,
        "2025-07": 50,
        "2025-06": 50,
        "2025-05": 50,
        "2025-04": 30,
        "2025-03": 30,
        "2025-02": 40,
        "2025-01": 30,
        "2024-12": 10,
        "2024-11": 10,
        "2024-10": 30,
        "2024-09": 40
      }
    }
  ],
  serpData: [
    { type: "local_pack", rank_absolute: 1, domain: "www.sosdetailing.com", phone: "(305) 798-0690", rating: 5.0 },
    { type: "local_pack", rank_absolute: 2, domain: "belugayachtservices.com", phone: "(305) 680-6874", rating: 5.0 },
    { type: "local_pack", rank_absolute: 3, domain: "www.miamiyachtdetail.com", phone: "(786) 718-0114", rating: 5.0 },
    { type: "organic", rank_absolute: 4, domain: "www.yelp.com" },
    { type: "organic", rank_absolute: 5, domain: "www.miamiboatdetailing.com" },
    { type: "organic", rank_absolute: 6, domain: "www.sosdetailing.com" },
    { type: "organic", rank_absolute: 8, domain: "sundetailing.com" },
    { type: "organic", rank_absolute: 9, domain: "boatplanet.com" },
    { type: "organic", rank_absolute: 10, domain: "globalyachtdetailing.com" },
    { type: "organic", rank_absolute: 11, domain: "www.tsccarwash.com" },
    { type: "organic", rank_absolute: 12, domain: "freedomyachtservices.com" },
    { type: "organic", rank_absolute: 13, domain: "highseasdetailingco.com" }
  ],
  competitorData: {
    sos_detailing: {
      domain: "www.sosdetailing.com",
      title: "S.O.S. Boat Detailing Miami",
      phone: "(305) 798-0690",
      rating: 5.0,
      description: "Professional Boat & Yacht Maintenance. Consistent, reliable, punctual, detailed.",
      services: [
        "Basic Boat Wash",
        "Detailed Wash",
        "Ceramic & Graphene Coatings",
        "1-6 Step Sanding/Polishing",
        "Chrome/Metal Polish",
        "Vinyl Seat Treatment",
        "Upholstery Cleaning",
        "Canvas Cleaning",
        "Compartment Organization"
      ],
      features: [
        "Miami Based Company",
        "Experienced Workforce",
        "High Quality Service",
        "Affordable Pricing",
        "Customer Satisfaction Priority",
        "Free Consultation",
        "Custom Maintenance Schedules",
        "10% Off Ceramic Coatings"
      ],
      content_analysis: {
        on_page_patterns: [
          "Service-focused messaging",
          "Quality and reliability emphasis",
          "Local market expertise",
          "Customer satisfaction focus",
          "Clear service descriptions"
        ],
        internal_linking: [
          "Service-specific sections",
          "Contact information",
          "Testimonial section",
          "Instagram integration"
        ],
        cta_elements: [
          "Phone number prominently displayed",
          "Free consultation offers",
          "Email contact form",
          "Social media links"
        ],
        e_e_a_t_signals: [
          "7+ years in business",
          "Local Miami presence",
          "Customer testimonials",
          "Professional service descriptions",
          "Contact information transparency"
        ]
      }
    },
    beluga_yacht_services: {
      domain: "belugayachtservices.com",
      title: "Beluga Yacht Detailing Services of Fort Lauderdale",
      phone: "(305) 680-6874",
      rating: 5.0,
      description: "Exceptional detailing, above and beyond service!",
      services: ["Yacht Detailing", "Marine Services", "Fort Lauderdale Area"]
    },
    miami_yacht_detail: {
      domain: "www.miamiyachtdetail.com",
      title: "Miami Yacht Detail Llc",
      phone: "(786) 718-0114",
      rating: 5.0,
      description: "Nako did an excellent work on removing oxidation from my boats gel coat",
      services: ["Yacht Detailing", "Oxidation Removal", "Gel Coat Restoration"]
    }
  }
};

async function processYachtDetailing() {
  const processor = new NicheProcessor();
  
  try {
    const report = await processor.processNiche(
      "Yacht and Jet Detailing Services",
      yachtDetailingData.keywords,
      yachtDetailingData.serpData,
      yachtDetailingData.competitorData
    );
    
    // Add content plan
    report.contentPlan = processor.generateContentPlan(report, report.scores);
    report.ninetyDayPlan = processor.generate90DayPlan(report, report.scores);
    
    console.log("Yacht and Jet Detailing Services Report:");
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
processYachtDetailing().then(report => {
  if (report) {
    // Save the report
    const fs = require('fs');
    const path = require('path');
    
    const outputDir = path.join(__dirname, 'niches');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    fs.writeFileSync(
      path.join(outputDir, 'yacht_and_jet_detailing_services.json'),
      JSON.stringify(report, null, 2)
    );
    
    console.log("\nReport saved to niches/yacht_and_jet_detailing_services.json");
  }
});
