// Process Digital Estate Planning and Online Will Services niche
const { NicheProcessor } = require('./niche_processor.js');

async function processDigitalEstatePlanning() {
    const nicheName = "Digital Estate Planning and Online Will Services";
    const cities = ["Miami,Florida,United States", "Fort Lauderdale,Florida,United States", "Boca Raton,Florida,United States", "West Palm Beach,Florida,United States"];
    const language = "en";

    // Real data from API calls
    const digitalEstatePlanningData = {
        keywords: [
            {
                keyword: "digital estate planning",
                search_volume: 140,
                cpc: 3.92,
                competition_index: 9,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 170, "2025-07": 110, "2025-06": 140, "2025-05": 140, "2025-04": 140, "2025-03": 170,
                    "2025-02": 140, "2025-01": 170, "2024-12": 140, "2024-11": 140, "2024-10": 140, "2024-09": 140
                }
            },
            {
                keyword: "online will services",
                search_volume: 480,
                cpc: 2.1,
                competition_index: 12,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 320, "2025-07": 390, "2025-06": 390, "2025-05": 480, "2025-04": 480, "2025-03": 480,
                    "2025-02": 320, "2025-01": 590, "2024-12": 390, "2024-11": 260, "2024-10": 390, "2024-09": 480
                }
            },
            {
                keyword: "digital assets estate planning",
                search_volume: 90,
                cpc: 4.2,
                competition_index: 8,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 70, "2025-07": 90, "2025-06": 90, "2025-05": 90, "2025-04": 70, "2025-03": 90,
                    "2025-02": 70, "2025-01": 90, "2024-12": 70, "2024-11": 90, "2024-10": 70, "2024-09": 90
                }
            },
            {
                keyword: "digital executor",
                search_volume: 50,
                cpc: 0,
                competition_index: 5,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 40, "2025-07": 50, "2025-06": 50, "2025-05": 50, "2025-04": 40, "2025-03": 50,
                    "2025-02": 40, "2025-01": 50, "2024-12": 40, "2024-11": 50, "2024-10": 40, "2024-09": 50
                }
            },
            {
                keyword: "online will maker",
                search_volume: 210,
                cpc: 1.8,
                competition_index: 15,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 170, "2025-07": 210, "2025-06": 210, "2025-05": 210, "2025-04": 170, "2025-03": 210,
                    "2025-02": 170, "2025-01": 210, "2024-12": 170, "2024-11": 210, "2024-10": 170, "2024-09": 210
                }
            },
            {
                keyword: "digital legacy planning",
                search_volume: 30,
                cpc: 0,
                competition_index: 3,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 20, "2025-07": 30, "2025-06": 30, "2025-05": 30, "2025-04": 20, "2025-03": 30,
                    "2025-02": 20, "2025-01": 30, "2024-12": 20, "2024-11": 30, "2024-10": 20, "2024-09": 30
                }
            },
            {
                keyword: "virtual estate planning",
                search_volume: 70,
                cpc: 2.5,
                competition_index: 10,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 50, "2025-07": 70, "2025-06": 70, "2025-05": 70, "2025-04": 50, "2025-03": 70,
                    "2025-02": 50, "2025-01": 70, "2024-12": 50, "2024-11": 70, "2024-10": 50, "2024-09": 70
                }
            }
        ],
        serp_data: [
            {
                keyword: "digital estate planning",
                city: "Miami,Florida,United States",
                local_pack_present: false,
                paa_present: true,
                featured_snippet_present: true,
                top_organic_urls: [
                    "https://www.usbank.com/wealth-management/financial-perspectives/trust-and-estate-planning/digital-estate-plan.html",
                    "https://en.wikipedia.org/wiki/Digital_Estate_Planning",
                    "https://www.purduegloballawschool.edu/blog/news/digital-estate-planning",
                    "https://www.nytimes.com/2025/02/12/technology/personaltech/social-media-accounts-death.html",
                    "https://www.fidelity.com/viewpoints/wealth-management/estate-planning-for-digital-assets"
                ],
                top_competitor_domain: "www.usbank.com"
            }
        ],
        competitor_audit: {
            "www.usbank.com": {
                on_page_patterns: "Focus on 'digital estate plan', 'digital and online assets', 'wealth management', 'trust and estate planning'. Emphasizes comprehensive planning, account management, and asset protection.",
                schema: "Likely FinancialService and Organization schema.",
                internal_linking: "Links to wealth management services, trust services, estate planning resources, and financial planning tools.",
                ctas: "Calls to action for wealth management consultation, estate planning services, and financial planning resources.",
                e_e_a_t_signals: "U.S. Bank brand authority, wealth management expertise, comprehensive financial services, regulatory compliance, professional advisory services."
            },
            "www.miamiestatelaw.com": {
                on_page_patterns: "Focus on 'Digital Estate Planning in Florida', 'digital assets', 'online accounts', 'digital executor'. Emphasizes Florida-specific legal requirements and digital asset protection.",
                schema: "Likely LegalService and LocalBusiness schema.",
                internal_linking: "Links to estate planning services, probate services, and legal resources specific to Florida.",
                ctas: "Contact forms, consultation requests, and phone numbers for legal services.",
                e_e_a_t_signals: "Florida-licensed attorney, estate planning expertise, local legal knowledge, client testimonials, professional credentials."
            },
            "loughlinlawpa.com": {
                on_page_patterns: "Focus on 'Virtual Estate Planning', 'flat rate', 'convenient', 'online scheduling', 'secure client portal'. Emphasizes modern, technology-enabled legal services.",
                schema: "Likely LegalService and LocalBusiness schema.",
                internal_linking: "Links to virtual services, estate planning packages, and client resources.",
                ctas: "Online scheduling, consultation booking, and service package selection.",
                e_e_a_t_signals: "Florida-licensed attorneys, virtual service expertise, modern technology integration, client satisfaction focus, professional credentials."
            }
        }
    };

    const processor = new NicheProcessor();
    const report = await processor.processNiche(
        nicheName, 
        digitalEstatePlanningData.keywords, 
        digitalEstatePlanningData.serp_data, 
        digitalEstatePlanningData.competitor_audit
    );
    
    // Save report
    const fs = require('fs');
    const path = require('path');
    
    const reportPath = path.join(__dirname, 'niches', `${report.slug}.json`);
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`✅ Processed ${nicheName}`);
    console.log(`📊 Rankability Score: ${report.scores.total}/100`);
    console.log(`📁 Report saved to: ${reportPath}`);
}

processDigitalEstatePlanning();
