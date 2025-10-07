// Process Yacht Maintenance and Repair Services niche
const { NicheProcessor } = require('./niche_processor.js');

// Sample data from our API calls
const yachtMaintenanceData = {
  keywords: [
    {
      keyword: "yacht maintenance",
      search_volume: 1000,
      cpc: 3.92,
      competition_index: 6,
      competition: "LOW",
      monthly_searches: {
        "2025-08": 720,
        "2025-07": 880,
        "2025-06": 880,
        "2025-05": 1600,
        "2025-04": 1900,
        "2025-03": 1900,
        "2025-02": 1900,
        "2025-01": 880,
        "2024-12": 590,
        "2024-11": 590,
        "2024-10": 590,
        "2024-09": 480
      }
    },
    {
      keyword: "yacht repair",
      search_volume: 1300,
      cpc: 2.7,
      competition_index: 7,
      competition: "LOW",
      monthly_searches: {
        "2025-08": 590,
        "2025-07": 880,
        "2025-06": 1300,
        "2025-05": 1000,
        "2025-04": 2400,
        "2025-03": 2400,
        "2025-02": 1900,
        "2025-01": 1300,
        "2024-12": 1600,
        "2024-11": 720,
        "2024-10": 590,
        "2024-09": 590
      }
    },
    {
      keyword: "boat maintenance",
      search_volume: 2900,
      cpc: 4.6,
      competition_index: 7,
      competition: "LOW",
      monthly_searches: {
        "2025-08": 2400,
        "2025-07": 2900,
        "2025-06": 3600,
        "2025-05": 3600,
        "2025-04": 3600,
        "2025-03": 2900,
        "2025-02": 2400,
        "2025-01": 1900,
        "2024-12": 1600,
        "2024-11": 2900,
        "2024-10": 1900,
        "2024-09": 2400
      }
    },
    {
      keyword: "marine services",
      search_volume: 9900,
      cpc: 4.63,
      competition_index: 10,
      competition: "LOW",
      monthly_searches: {
        "2025-08": 8100,
        "2025-07": 9900,
        "2025-06": 9900,
        "2025-05": 9900,
        "2025-04": 9900,
        "2025-03": 14800,
        "2025-02": 12100,
        "2025-01": 14800,
        "2024-12": 12100,
        "2024-11": 8100,
        "2024-10": 8100,
        "2024-09": 8100
      }
    },
    {
      keyword: "yacht maintenance miami",
      search_volume: 10,
      cpc: 10.66,
      competition_index: 47,
      competition: "MEDIUM",
      monthly_searches: {
        "2025-08": 10,
        "2025-06": 10,
        "2025-05": 10,
        "2025-04": 10,
        "2025-03": 10,
        "2025-02": 10,
        "2025-01": 10,
        "2024-12": 10,
        "2024-11": 10,
        "2024-10": 10,
        "2024-09": 10
      }
    },
    {
      keyword: "yacht repair fort lauderdale",
      search_volume: 50,
      cpc: 7.31,
      competition_index: 24,
      competition: "LOW",
      monthly_searches: {
        "2025-08": 10,
        "2025-07": 30,
        "2025-06": 20,
        "2025-05": 30,
        "2025-04": 110,
        "2025-03": 70,
        "2025-02": 40,
        "2025-01": 90,
        "2024-12": 140,
        "2024-11": 70,
        "2024-10": 40,
        "2024-09": 20
      }
    },
    {
      keyword: "boat repair services",
      search_volume: 880,
      cpc: 2.39,
      competition_index: 3,
      competition: "LOW",
      monthly_searches: {
        "2025-08": 1600,
        "2025-07": 1000,
        "2025-06": 1000,
        "2025-05": 1000,
        "2025-04": 880,
        "2025-03": 590,
        "2025-02": 720,
        "2025-01": 590,
        "2024-12": 480,
        "2024-11": 320,
        "2024-10": 590,
        "2024-09": 720
      }
    },
    {
      keyword: "marine maintenance",
      search_volume: 720,
      cpc: 6.55,
      competition_index: 7,
      competition: "LOW",
      monthly_searches: {
        "2025-08": 720,
        "2025-07": 720,
        "2025-06": 880,
        "2025-05": 880,
        "2025-04": 720,
        "2025-03": 880,
        "2025-02": 720,
        "2025-01": 590,
        "2024-12": 480,
        "2024-11": 480,
        "2024-10": 590,
        "2024-09": 590
      }
    },
    {
      keyword: "yacht service",
      search_volume: 3600,
      cpc: 2.68,
      competition_index: 11,
      competition: "LOW",
      monthly_searches: {
        "2025-08": 2900,
        "2025-07": 3600,
        "2025-06": 4400,
        "2025-05": 3600,
        "2025-04": 4400,
        "2025-03": 4400,
        "2025-02": 3600,
        "2025-01": 2900,
        "2024-12": 2900,
        "2024-11": 2400,
        "2024-10": 2900,
        "2024-09": 2900
      }
    },
    {
      keyword: "boat maintenance services",
      search_volume: 390,
      cpc: 2.52,
      competition_index: 1,
      competition: "LOW",
      monthly_searches: {
        "2025-08": 720,
        "2025-07": 720,
        "2025-06": 590,
        "2025-05": 480,
        "2025-04": 1000,
        "2025-03": 320,
        "2025-02": 260,
        "2025-01": 260,
        "2024-12": 170,
        "2024-11": 140,
        "2024-10": 110,
        "2024-09": 110
      }
    }
  ],
  serpData: [
    { type: "local_pack", rank_absolute: 1, domain: "Zobel Yacht & Boat", phone: "(954) 850-5190", rating: 5.0 },
    { type: "local_pack", rank_absolute: 2, domain: "marinetekyachts.com", phone: "(305) 781-5203", rating: 5.0 },
    { type: "local_pack", rank_absolute: 3, domain: "yachtscare.com", phone: "(786) 282-5085", rating: 5.0 },
    { type: "organic", rank_absolute: 5, domain: "www.yelp.com" },
    { type: "organic", rank_absolute: 6, domain: "www.miamiyachting.net" },
    { type: "organic", rank_absolute: 7, domain: "starboardyacht.com" },
    { type: "organic", rank_absolute: 8, domain: "belugayachtservices.com" },
    { type: "organic", rank_absolute: 9, domain: "www.myyachtmanagement.com" },
    { type: "organic", rank_absolute: 10, domain: "www.owyg.com" },
    { type: "organic", rank_absolute: 11, domain: "gillenyacht.com" },
    { type: "organic", rank_absolute: 12, domain: "americanyachtmaintenance.com" },
    { type: "organic", rank_absolute: 13, domain: "northpacificyachts.com" }
  ],
  competitorData: {
    marinetek: {
      domain: "marinetekyachts.com",
      title: "Marinetek Yacht Management Co.",
      phone: "(305) 781-5203",
      rating: 5.0,
      description: "Marinetek's crew services and attention to detail are exceptional.",
      services: ["Yacht Management", "Crew Services", "Maintenance"]
    },
    yachts_care: {
      domain: "yachtscare.com",
      title: "Yachts Care, LLC", 
      phone: "(786) 282-5085",
      rating: 5.0,
      description: "Once we notified them, they came back immediately and corrected the problem.",
      services: ["Yacht Care", "Maintenance", "Repair"]
    },
    miami_yachting: {
      domain: "www.miamiyachting.net",
      title: "Yacht Installation & Repairs in Miami | Luxury Services",
      services: ["Expert Yacht Repairs", "Minor Fixes", "Major Overhauls", "Cosmetic & Structural"]
    },
    starboard_yacht: {
      domain: "starboardyacht.com",
      title: "Miami",
      services: ["Yacht Management Services", "Boat Repair", "Yacht Maintenance", "Boat Refits"]
    }
  }
};

async function processYachtMaintenance() {
  const processor = new NicheProcessor();
  
  try {
    const report = await processor.processNiche(
      "Yacht Maintenance and Repair Services",
      yachtMaintenanceData.keywords,
      yachtMaintenanceData.serpData,
      yachtMaintenanceData.competitorData
    );
    
    // Add content plan
    report.contentPlan = processor.generateContentPlan(report, report.scores);
    report.ninetyDayPlan = processor.generate90DayPlan(report, report.scores);
    
    console.log("Yacht Maintenance and Repair Services Report:");
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
processYachtMaintenance().then(report => {
  if (report) {
    // Save the report
    const fs = require('fs');
    const path = require('path');
    
    const outputDir = path.join(__dirname, 'niches');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    fs.writeFileSync(
      path.join(outputDir, 'yacht_maintenance_and_repair_services.json'),
      JSON.stringify(report, null, 2)
    );
    
    console.log("\nReport saved to niches/yacht_maintenance_and_repair_services.json");
  }
});
