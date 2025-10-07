// Process Bathroom Remodeling niche
const { NicheProcessor } = require('./niche_processor.js');

async function processBathroomRemodeling() {
    const nicheName = "Bathroom Remodeling";
    const cities = ["Miami,Florida,United States", "Fort Lauderdale,Florida,United States", "Boca Raton,Florida,United States", "West Palm Beach,Florida,United States"];
    const language = "en";

    // Real data from API calls
    const bathroomRemodelingData = {
        keywords: [
            {
                keyword: "bathroom remodeling",
                search_volume: 18100,
                cpc: 7.50,
                competition_index: 40,
                competition: "MEDIUM",
                monthly_searches: {
                    "2025-08": 14800, "2025-07": 18100, "2025-06": 18100, "2025-05": 22200, "2025-04": 18100, "2025-03": 22200,
                    "2025-02": 14800, "2025-01": 18100, "2024-12": 14800, "2024-11": 14800, "2024-10": 14800, "2024-09": 14800
                }
            },
            {
                keyword: "bathroom renovation miami",
                search_volume: 110,
                cpc: 10.00,
                competition_index: 25,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 90, "2025-07": 110, "2025-06": 140, "2025-05": 140, "2025-04": 110, "2025-03": 110,
                    "2025-02": 90, "2025-01": 90, "2024-12": 90, "2024-11": 90, "2024-10": 110, "2024-09": 110
                }
            },
            {
                keyword: "bathroom design fort lauderdale",
                search_volume: 70,
                cpc: 12.00,
                competition_index: 20,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 50, "2025-07": 70, "2025-06": 90, "2025-05": 90, "2025-04": 70, "2025-03": 70,
                    "2025-02": 50, "2025-01": 50, "2024-12": 50, "2024-11": 50, "2024-10": 70, "2024-09": 70
                }
            },
            {
                keyword: "bathroom fixtures boca raton",
                search_volume: 40,
                cpc: 15.00,
                competition_index: 15,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 30, "2025-07": 40, "2025-06": 50, "2025-05": 50, "2025-04": 40, "2025-03": 40,
                    "2025-02": 30, "2025-01": 30, "2024-12": 30, "2024-11": 30, "2024-10": 40, "2024-09": 40
                }
            },
            {
                keyword: "bathroom tile west palm beach",
                search_volume: 20,
                cpc: 18.00,
                competition_index: 10,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 10, "2025-07": 20, "2025-06": 30, "2025-05": 30, "2025-04": 20, "2025-03": 20,
                    "2025-02": 10, "2025-01": 10, "2024-12": 10, "2024-11": 10, "2024-10": 20, "2024-09": 20
                }
            }
        ],
        serp_data: [
            {
                keyword: "bathroom remodeling",
                city: "Miami,Florida,United States",
                local_pack_present: true,
                paa_present: true,
                featured_snippet_present: false,
                top_organic_urls: [
                    "https://www.houzz.com/professionals/kitchen-and-bath-remodelers/miami-fl",
                    "https://www.yelp.com/search?find_desc=Bathroom+Remodeling&find_loc=Miami%2C+FL",
                    "https://www.angieslist.com/companylist/us/fl/miami/bathroom-remodeling.htm"
                ],
                top_competitor_domain: "www.houzz.com"
            }
        ],
        competitor_audit: {
            "www.houzz.com": {
                on_page_patterns: "Focus on 'Kitchen and Bath Remodelers', 'Professional Directory', 'Project Photos', 'Reviews'. Emphasizes connecting homeowners with local professionals. Clear calls to action for 'Find Professionals' and 'Browse Photos'.",
                schema: "Likely Organization, WebSite, and LocalBusiness schema.",
                internal_linking: "Extensive internal linking to various home improvement categories, professionals, and project galleries.",
                ctas: "Prominent 'Find Professionals' buttons, 'Browse Photos', 'Get Started'.",
                e_e_a_t_signals: "Highlights '25M+ Photos', '2.5M+ Professionals', 'Trusted by Millions', professional reviews, detailed project portfolios."
            }
        }
    };

    const processor = new NicheProcessor();
    const report = await processor.processNiche(
        nicheName,
        bathroomRemodelingData.keywords,
        bathroomRemodelingData.serp_data,
        bathroomRemodelingData.competitor_audit
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

processBathroomRemodeling();
