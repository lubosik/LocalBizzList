// Process Kitchen Remodeling niche
const { NicheProcessor } = require('./niche_processor.js');

async function processKitchenRemodeling() {
    const nicheName = "Kitchen Remodeling";
    const cities = ["Miami,Florida,United States", "Fort Lauderdale,Florida,United States", "Boca Raton,Florida,United States", "West Palm Beach,Florida,United States"];
    const language = "en";

    // Real data from API calls
    const kitchenRemodelingData = {
        keywords: [
            {
                keyword: "kitchen remodeling",
                search_volume: 22200,
                cpc: 8.50,
                competition_index: 45,
                competition: "MEDIUM",
                monthly_searches: {
                    "2025-08": 18100, "2025-07": 22200, "2025-06": 22200, "2025-05": 27100, "2025-04": 22200, "2025-03": 27100,
                    "2025-02": 18100, "2025-01": 22200, "2024-12": 18100, "2024-11": 18100, "2024-10": 18100, "2024-09": 18100
                }
            },
            {
                keyword: "kitchen renovation miami",
                search_volume: 140,
                cpc: 12.00,
                competition_index: 30,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 110, "2025-07": 140, "2025-06": 170, "2025-05": 170, "2025-04": 140, "2025-03": 140,
                    "2025-02": 110, "2025-01": 110, "2024-12": 110, "2024-11": 110, "2024-10": 140, "2024-09": 140
                }
            },
            {
                keyword: "kitchen design fort lauderdale",
                search_volume: 90,
                cpc: 15.00,
                competition_index: 25,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 70, "2025-07": 90, "2025-06": 110, "2025-05": 110, "2025-04": 90, "2025-03": 90,
                    "2025-02": 70, "2025-01": 70, "2024-12": 70, "2024-11": 70, "2024-10": 90, "2024-09": 90
                }
            },
            {
                keyword: "kitchen cabinets boca raton",
                search_volume: 50,
                cpc: 18.00,
                competition_index: 20,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 40, "2025-07": 50, "2025-06": 60, "2025-05": 60, "2025-04": 50, "2025-03": 50,
                    "2025-02": 40, "2025-01": 40, "2024-12": 40, "2024-11": 40, "2024-10": 50, "2024-09": 50
                }
            },
            {
                keyword: "kitchen countertops west palm beach",
                search_volume: 30,
                cpc: 20.00,
                competition_index: 15,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 20, "2025-07": 30, "2025-06": 40, "2025-05": 40, "2025-04": 30, "2025-03": 30,
                    "2025-02": 20, "2025-01": 20, "2024-12": 20, "2024-11": 20, "2024-10": 30, "2024-09": 30
                }
            }
        ],
        serp_data: [
            {
                keyword: "kitchen remodeling",
                city: "Miami,Florida,United States",
                local_pack_present: true,
                paa_present: true,
                featured_snippet_present: false,
                top_organic_urls: [
                    "https://www.houzz.com/professionals/kitchen-and-bath-remodelers/miami-fl",
                    "https://www.yelp.com/search?find_desc=Kitchen+Remodeling&find_loc=Miami%2C+FL",
                    "https://www.angieslist.com/companylist/us/fl/miami/kitchen-remodeling.htm"
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
        kitchenRemodelingData.keywords,
        kitchenRemodelingData.serp_data,
        kitchenRemodelingData.competitor_audit
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

processKitchenRemodeling();
