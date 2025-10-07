// Process Preventative Mold Treatment Services niche
const { NicheProcessor } = require('./niche_processor.js');

// Real data from our API calls
const preventativeMoldData = {
  keywords: [
    {
      keyword: "mold prevention services",
      search_volume: 30,
      cpc: 0,
      competition_index: 17,
      competition: "LOW",
      monthly_searches: {
        "2025-08": 10,
        "2025-07": 20,
        "2025-06": 20,
        "2025-05": 20,
        "2025-04": 20,
        "2025-03": 210,
        "2025-02": 20,
        "2025-01": 10,
        "2024-12": 30,
        "2024-11": 10,
        "2024-10": 10,
        "2024-09": 10
      }
    },
    {
      keyword: "mold prevention near me",
      search_volume: 20,
      cpc: 15.59,
      competition_index: 6,
      competition: "LOW",
      monthly_searches: {
        "2025-08": 170,
        "2025-07": 10,
        "2025-06": 20,
        "2025-05": 10,
        "2025-04": 10,
        "2025-03": 20,
        "2025-02": 10,
        "2025-01": 30,
        "2024-12": 10,
        "2024-11": 10,
        "2024-10": 10,
        "2024-09": 10
      }
    }
  ],
  serpData: [
    { type: "local_pack", rank_absolute: 1, domain: "miamimoldservices.com", phone: "(305) 404-2034", rating: 5.0 },
    { type: "local_pack", rank_absolute: 2, domain: "miamimoldspecialists.com", phone: "(305) 763-8070", rating: 4.9 },
    { type: "local_pack", rank_absolute: 3, domain: "www.themoldavengers.com", phone: "(786) 921-6371", rating: 4.9 },
    { type: "organic", rank_absolute: 5, domain: "miamimoldspecialists.com" },
    { type: "organic", rank_absolute: 6, domain: "www.yelp.com" },
    { type: "organic", rank_absolute: 7, domain: "moldonly.com" },
    { type: "organic", rank_absolute: 9, domain: "www.floridapuremaintenance.com" },
    { type: "organic", rank_absolute: 10, domain: "www.floridahealth.gov" },
    { type: "organic", rank_absolute: 11, domain: "www.servpro.com" },
    { type: "organic", rank_absolute: 12, domain: "www.epa.gov" },
    { type: "organic", rank_absolute: 13, domain: "www.rrtfl.com" },
    { type: "organic", rank_absolute: 14, domain: "www.belfor.com" }
  ],
  competitorData: {
    miami_mold_specialists: {
      domain: "miamimoldspecialists.com",
      title: "Miami Mold",
      phone: "(305) 763-8070",
      rating: 4.9,
      description: "Over Three Decades of Excellence in Keeping You and Your Loved Ones Clear & Safe From Mold",
      services: [
        "Mold Inspection",
        "Mold Remediation", 
        "Air Quality Restoration",
        "Environmental Consulting",
        "Clearance Certificates",
        "Solar Airflow Mold Prevention",
        "CO2 Hydrogenation",
        "Electrostatic Disinfecting"
      ],
      features: [
        "100% Service Guarantee",
        "100% Exclusive Technology", 
        "100% Organic, Certified, Licensed & Insured",
        "Over 3 Decades Experience",
        "50,000+ Satisfied Customers",
        "24/7 Client Support",
        "Latest High-Tech Equipment"
      ],
      content_analysis: {
        on_page_patterns: [
          "Comprehensive service descriptions",
          "Technology-focused messaging",
          "Health and safety emphasis",
          "Local market expertise",
          "Certification and licensing highlights"
        ],
        internal_linking: [
          "Service-specific landing pages",
          "Technology showcase pages",
          "Resource and FAQ sections",
          "Contact and location pages"
        ],
        cta_elements: [
          "Phone number prominently displayed",
          "Service request forms",
          "Free consultation offers",
          "Emergency contact information"
        ],
        e_e_a_t_signals: [
          "30+ years in business",
          "Certified and licensed",
          "Local market expertise",
          "Customer testimonials",
          "Media coverage mentions"
        ]
      }
    },
    miami_mold_services: {
      domain: "miamimoldservices.com",
      title: "Miami Mold Services",
      phone: "(305) 404-2034",
      rating: 5.0,
      description: "You can really trust them for mold removal services",
      services: ["Mold Removal", "Mold Remediation", "24/7 Service"]
    },
    mold_avengers: {
      domain: "www.themoldavengers.com",
      title: "The Mold Avengers | Restoration Company Florida",
      phone: "(786) 921-6371",
      rating: 4.9,
      description: "Great company, Fast response they were at my house the very next day",
      services: ["Mold Remediation", "Restoration Services", "Emergency Response"]
    }
  }
};

async function processPreventativeMold() {
  const processor = new NicheProcessor();
  
  try {
    const report = await processor.processNiche(
      "Preventative Mold Treatment Services",
      preventativeMoldData.keywords,
      preventativeMoldData.serpData,
      preventativeMoldData.competitorData
    );
    
    // Add content plan
    report.contentPlan = processor.generateContentPlan(report, report.scores);
    report.ninetyDayPlan = processor.generate90DayPlan(report, report.scores);
    
    console.log("Preventative Mold Treatment Services Report:");
    console.log("===========================================");
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
processPreventativeMold().then(report => {
  if (report) {
    // Save the report
    const fs = require('fs');
    const path = require('path');
    
    const outputDir = path.join(__dirname, 'niches');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    fs.writeFileSync(
      path.join(outputDir, 'preventative_mold_treatment_services.json'),
      JSON.stringify(report, null, 2)
    );
    
    console.log("\nReport saved to niches/preventative_mold_treatment_services.json");
  }
});
