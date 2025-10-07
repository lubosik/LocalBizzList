// Process Cybersecurity Integration with Smart Home Security niche
const { NicheProcessor } = require('./niche_processor.js');

// Real data from our API calls
const cybersecuritySmartHomeData = {
  keywords: [
    {
      keyword: "IoT security services",
      search_volume: 170,
      cpc: 0,
      competition_index: 2,
      competition: "LOW",
      monthly_searches: {
        "2025-08": 90,
        "2025-07": 140,
        "2025-06": 210,
        "2025-05": 260,
        "2025-04": 260,
        "2025-03": 210,
        "2025-02": 140,
        "2025-01": 140,
        "2024-12": 110,
        "2024-11": 140,
        "2024-10": 90,
        "2024-09": 90
      }
    }
  ],
  serpData: [
    { type: "organic", rank_absolute: 1, domain: "www.security.org" },
    { type: "organic", rank_absolute: 2, domain: "www.safehome.org" },
    { type: "organic", rank_absolute: 3, domain: "www.reddit.com" },
    { type: "organic", rank_absolute: 5, domain: "home.google.com" },
    { type: "organic", rank_absolute: 7, domain: "www.lorex.com" },
    { type: "organic", rank_absolute: 11, domain: "www.control4.com" },
    { type: "organic", rank_absolute: 13, domain: "www.cnet.com" },
    { type: "organic", rank_absolute: 14, domain: "goabode.com" },
    { type: "organic", rank_absolute: 15, domain: "www.ecobee.com" }
  ],
  competitorData: {
    security_org: {
      domain: "www.security.org",
      title: "Security.org: Security Doesn't Have to be Complicated",
      description: "Security.org simplifies home security and personal safety. Using cutting-edge research, our experts educate and inspire people to stay safe.",
      services: [
        "Home Security Systems Reviews",
        "Security Camera Reviews", 
        "VPN Reviews",
        "Antivirus Software Reviews",
        "Identity Theft Protection Reviews",
        "Smart Home Security Reviews"
      ],
      features: [
        "Expert Research Team",
        "96 Years Combined Experience",
        "600+ Product Reviews",
        "60+ Products Recommended",
        "Comprehensive Comparison Tools",
        "Educational Resources"
      ],
      content_analysis: {
        on_page_patterns: [
          "Expert research and reviews",
          "Comprehensive comparison tools",
          "Educational content focus",
          "Product recommendations",
          "Safety and security emphasis"
        ],
        internal_linking: [
          "Category-specific landing pages",
          "Product review pages",
          "Comparison tools",
          "Educational resources"
        ],
        cta_elements: [
          "Product comparison tools",
          "Review access",
          "Expert consultation",
          "Newsletter signup"
        ],
        e_e_a_t_signals: [
          "96 years combined experience",
          "Expert research team",
          "600+ product reviews",
          "Media recognition",
          "Comprehensive testing methodology"
        ]
      }
    },
    safehome_org: {
      domain: "www.safehome.org",
      title: "Best Smart Home Automation Security Systems in 2025",
      description: "Vivint, ADT, and Abode are the best home security systems with automation—control lights, locks, and thermostats remotely.",
      services: ["Smart Home Security Reviews", "Automation System Reviews", "Security System Comparisons"]
    },
    control4: {
      domain: "www.control4.com",
      title: "Control4: Smart Home Automation & Control Systems",
      description: "Your integrator will help you create scenes, set up automations and manage schedules based on your preferences, plus assist with any updates and adjustments.",
      services: ["Smart Home Automation", "Control Systems", "Integration Services", "Custom Solutions"]
    }
  }
};

async function processCybersecuritySmartHome() {
  const processor = new NicheProcessor();
  
  try {
    const report = await processor.processNiche(
      "Cybersecurity Integration with Smart Home Security",
      cybersecuritySmartHomeData.keywords,
      cybersecuritySmartHomeData.serpData,
      cybersecuritySmartHomeData.competitorData
    );
    
    // Add content plan
    report.contentPlan = processor.generateContentPlan(report, report.scores);
    report.ninetyDayPlan = processor.generate90DayPlan(report, report.scores);
    
    console.log("Cybersecurity Integration with Smart Home Security Report:");
    console.log("=====================================================");
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
processCybersecuritySmartHome().then(report => {
  if (report) {
    // Save the report
    const fs = require('fs');
    const path = require('path');
    
    const outputDir = path.join(__dirname, 'niches');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    fs.writeFileSync(
      path.join(outputDir, 'cybersecurity_integration_with_smart_home_security.json'),
      JSON.stringify(report, null, 2)
    );
    
    console.log("\nReport saved to niches/cybersecurity_integration_with_smart_home_security.json");
  }
});
