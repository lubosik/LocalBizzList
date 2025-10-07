// Process Concierge Medicine & Executive Wellness niche
const { NicheProcessor } = require('./niche_processor.js');

async function processConciergeMedicine() {
    const nicheName = "Concierge Medicine & Executive Wellness";
    const cities = ["Miami,Florida,United States", "Fort Lauderdale,Florida,United States", "Boca Raton,Florida,United States", "West Palm Beach,Florida,United States"];
    const language = "en";

    // Real data from API calls
    const conciergeMedicineData = {
        keywords: [
            {
                keyword: "concierge medicine miami",
                search_volume: 720,
                cpc: 7.05,
                competition_index: 39,
                competition: "MEDIUM",
                monthly_searches: {
                    "2025-08": 390, "2025-07": 480, "2025-06": 480, "2025-05": 590, "2025-04": 720, "2025-03": 1000,
                    "2025-02": 1300, "2025-01": 590, "2024-12": 880, "2024-11": 590, "2024-10": 590, "2024-09": 720
                }
            },
            {
                keyword: "executive health miami",
                search_volume: 140,
                cpc: 8.50,
                competition_index: 30,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 110, "2025-07": 140, "2025-06": 170, "2025-05": 170, "2025-04": 140, "2025-03": 140,
                    "2025-02": 110, "2025-01": 110, "2024-12": 110, "2024-11": 110, "2025-10": 140, "2025-09": 140
                }
            },
            {
                keyword: "concierge medicine",
                search_volume: 2400,
                cpc: 6.50,
                competition_index: 25,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 2400, "2025-07": 2400, "2025-06": 2400, "2025-05": 2400, "2025-04": 2400, "2025-03": 2400,
                    "2025-02": 2400, "2025-01": 2400, "2024-12": 2400, "2024-11": 2400, "2024-10": 2400, "2024-09": 2400
                }
            },
            {
                keyword: "executive health programs",
                search_volume: 1300,
                cpc: 8.50,
                competition_index: 30,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 1000, "2025-07": 1300, "2025-06": 1600, "2025-05": 1600, "2025-04": 1300, "2025-03": 1300,
                    "2025-02": 1000, "2025-01": 1000, "2024-12": 1000, "2024-11": 1000, "2024-10": 1300, "2024-09": 1300
                }
            },
            {
                keyword: "concierge doctor miami",
                search_volume: 90,
                cpc: 7.50,
                competition_index: 35,
                competition: "MEDIUM",
                monthly_searches: {
                    "2025-08": 70, "2025-07": 90, "2025-06": 110, "2025-05": 90, "2025-04": 90, "2025-03": 90,
                    "2025-02": 70, "2025-01": 90, "2024-12": 70, "2024-11": 70, "2024-10": 90, "2024-09": 90
                }
            },
            {
                keyword: "private medical care miami",
                search_volume: 50,
                cpc: 6.80,
                competition_index: 20,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 40, "2025-07": 50, "2025-06": 60, "2025-05": 50, "2025-04": 50, "2025-03": 50,
                    "2025-02": 40, "2025-01": 50, "2024-12": 40, "2024-11": 40, "2024-10": 50, "2024-09": 50
                }
            },
            {
                keyword: "executive physical miami",
                search_volume: 30,
                cpc: 8.00,
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
                keyword: "concierge medicine miami",
                city: "Miami,Florida,United States",
                local_pack_present: true,
                paa_present: true,
                featured_snippet_present: false,
                top_organic_urls: [
                    "https://umiamihealth.org/en/treatments-and-services/uhealth-premier/concierge-medicine",
                    "https://www.corehealthmiami.com/",
                    "https://www.msmc.com/concierge-medicine/",
                    "https://baptisthealth.net/services/concierge-medicine",
                    "https://miamedicine.com/"
                ],
                top_competitor_domain: "umiamihealth.org"
            }
        ],
        competitor_audit: {
            "umiamihealth.org": {
                on_page_patterns: "Focus on 'Concierge Medicine', 'UHealth Premier', 'premier office visits', 'complete examination', 'convenient visit'. Emphasizes comprehensive care and accessibility. Clear calls to action for membership.",
                schema: "Likely Organization, MedicalBusiness, and Service schema.",
                internal_linking: "Extensive internal linking to services, doctors, locations, and patient resources.",
                ctas: "Prominent 'Learn More' buttons, 'Find a Doctor', 'Schedule Appointment'.",
                e_e_a_t_signals: "Highlights 'University of Miami Health System', 'premier medical care', 'board-certified physicians', academic medical center credentials."
            }
        }
    };

    const processor = new NicheProcessor();
    const report = await processor.processNiche(
        nicheName,
        conciergeMedicineData.keywords,
        conciergeMedicineData.serp_data,
        conciergeMedicineData.competitor_audit
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

processConciergeMedicine();
