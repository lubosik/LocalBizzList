// Process Private Chef Services niche
const { NicheProcessor } = require('./niche_processor.js');

async function processPrivateChefServices() {
    const nicheName = "Private Chef Services";
    const cities = ["Miami,Florida,United States", "Fort Lauderdale,Florida,United States", "Boca Raton,Florida,United States", "West Palm Beach,Florida,United States"];
    const language = "en";

    // Real data from API calls
    const privateChefServicesData = {
        keywords: [
            {
                keyword: "private chef miami",
                search_volume: 1300,
                cpc: 5.45,
                competition_index: 63,
                competition: "MEDIUM",
                monthly_searches: {
                    "2025-08": 880, "2025-07": 1000, "2025-06": 1000, "2025-05": 1300, "2025-04": 1300, "2025-03": 1300,
                    "2025-02": 1300, "2025-01": 1600, "2024-12": 1000, "2024-11": 1300, "2024-10": 1600, "2024-09": 1600
                }
            },
            {
                keyword: "personal chef miami",
                search_volume: 390,
                cpc: 5.92,
                competition_index: 55,
                competition: "MEDIUM",
                monthly_searches: {
                    "2025-08": 260, "2025-07": 320, "2025-06": 390, "2025-05": 320, "2025-04": 390, "2025-03": 390,
                    "2025-02": 390, "2025-01": 480, "2024-12": 320, "2024-11": 320, "2024-10": 390, "2024-09": 480
                }
            },
            {
                keyword: "private chef services",
                search_volume: 3600,
                cpc: 3.76,
                competition_index: 3,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 5400, "2025-07": 8100, "2025-06": 9900, "2025-05": 6600, "2025-04": 4400, "2025-03": 3600,
                    "2025-02": 2400, "2025-01": 2400, "2024-12": 1300, "2024-11": 1000, "2024-10": 720, "2024-09": 720
                }
            },
            {
                keyword: "personal chef",
                search_volume: 8100,
                cpc: 3.92,
                competition_index: 29,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 8100, "2025-07": 6600, "2025-06": 9900, "2025-05": 8100, "2025-04": 8100, "2025-03": 8100,
                    "2025-02": 6600, "2025-01": 8100, "2024-12": 8100, "2024-11": 6600, "2024-10": 8100, "2024-09": 6600
                }
            },
            {
                keyword: "private chef fort lauderdale",
                search_volume: 90,
                cpc: 4.50,
                competition_index: 25,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 70, "2025-07": 90, "2025-06": 110, "2025-05": 90, "2025-04": 90, "2025-03": 90,
                    "2025-02": 70, "2025-01": 90, "2024-12": 70, "2024-11": 70, "2024-10": 90, "2024-09": 90
                }
            },
            {
                keyword: "private chef boca raton",
                search_volume: 50,
                cpc: 3.80,
                competition_index: 20,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 40, "2025-07": 50, "2025-06": 60, "2025-05": 50, "2025-04": 50, "2025-03": 50,
                    "2025-02": 40, "2025-01": 50, "2024-12": 40, "2024-11": 40, "2024-10": 50, "2024-09": 50
                }
            },
            {
                keyword: "private chef west palm beach",
                search_volume: 30,
                cpc: 3.20,
                competition_index: 15,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 20, "2025-07": 30, "2025-06": 40, "2025-05": 30, "2025-04": 30, "2025-03": 30,
                    "2025-02": 20, "2025-01": 30, "2024-12": 20, "2024-11": 20, "2024-10": 30, "2024-09": 30
                }
            }
        ],
        serp_data: [
            {
                keyword: "private chef miami",
                city: "Miami,Florida,United States",
                local_pack_present: true,
                paa_present: true,
                featured_snippet_present: false,
                top_organic_urls: [
                    "https://www.takeachef.com/en-us/private-chef/miami",
                    "https://www.tpcemiami.com/",
                    "https://thestaver.com/",
                    "https://www.foodfireknives.com/miami-private-chefs/",
                    "https://www.lavishgastronomyprive.com/"
                ],
                top_competitor_domain: "www.takeachef.com"
            }
        ],
        competitor_audit: {
            "www.takeachef.com": {
                on_page_patterns: "Focus on 'Private Chef in Miami', 'diverse cuisine', 'menu design', 'cooking', 'serving', 'cleanup'. Emphasizes customization and event services. Clear calls to action for booking.",
                schema: "Likely LocalBusiness and Service schema.",
                internal_linking: "Extensive internal linking to chef profiles, locations, and booking system.",
                ctas: "Prominent 'Book a Chef' buttons, location selection, chef browsing.",
                e_e_a_t_signals: "Highlights 'Trusted by Thousands', '4.8/5 rating', '9878 reviews', detailed chef profiles, customer testimonials."
            }
        }
    };

    const processor = new NicheProcessor();
    const report = await processor.processNiche(
        nicheName,
        privateChefServicesData.keywords,
        privateChefServicesData.serp_data,
        privateChefServicesData.competitor_audit
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

processPrivateChefServices();
