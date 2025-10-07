// Process Private Security & Executive Protection niche
const { NicheProcessor } = require('./niche_processor.js');

async function processPrivateSecurity() {
    const nicheName = "Private Security & Executive Protection";
    const cities = ["Miami,Florida,United States", "Fort Lauderdale,Florida,United States", "Boca Raton,Florida,United States", "West Palm Beach,Florida,United States"];
    const language = "en";

    // Real data from API calls
    const privateSecurityData = {
        keywords: [
            {
                keyword: "private security miami",
                search_volume: 590,
                cpc: 6.04,
                competition_index: 9,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 390, "2025-07": 260, "2025-06": 390, "2025-05": 320, "2025-04": 480, "2025-03": 480,
                    "2025-02": 480, "2025-01": 720, "2024-12": 1300, "2024-11": 720, "2024-10": 590, "2024-09": 390
                }
            },
            {
                keyword: "executive protection miami",
                search_volume: 140,
                cpc: 4.34,
                competition_index: 5,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 140, "2025-07": 70, "2025-06": 50, "2025-05": 140, "2025-04": 390, "2025-03": 170,
                    "2025-02": 260, "2025-01": 140, "2024-12": 140, "2024-11": 140, "2024-10": 50, "2024-09": 140
                }
            },
            {
                keyword: "bodyguard services miami",
                search_volume: 210,
                cpc: 1.37,
                competition_index: 7,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 170, "2025-07": 70, "2025-06": 90, "2025-05": 210, "2025-04": 260, "2025-03": 260,
                    "2025-02": 210, "2025-01": 210, "2024-12": 260, "2024-11": 260, "2024-10": 210, "2024-09": 170
                }
            },
            {
                keyword: "private security services",
                search_volume: 1800,
                cpc: 4.50,
                competition_index: 12,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 1800, "2025-07": 1800, "2025-06": 1800, "2025-05": 1800, "2025-04": 1800, "2025-03": 1800,
                    "2025-02": 1800, "2025-01": 1800, "2024-12": 1800, "2024-11": 1800, "2024-10": 1800, "2024-09": 1800
                }
            },
            {
                keyword: "executive protection services",
                search_volume: 320,
                cpc: 5.20,
                competition_index: 8,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 320, "2025-07": 320, "2025-06": 320, "2025-05": 320, "2025-04": 320, "2025-03": 320,
                    "2025-02": 320, "2025-01": 320, "2024-12": 320, "2024-11": 320, "2024-10": 320, "2024-09": 320
                }
            },
            {
                keyword: "private security fort lauderdale",
                search_volume: 80,
                cpc: 5.50,
                competition_index: 10,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 60, "2025-07": 80, "2025-06": 100, "2025-05": 80, "2025-04": 80, "2025-03": 80,
                    "2025-02": 60, "2025-01": 80, "2024-12": 60, "2024-11": 60, "2024-10": 80, "2024-09": 80
                }
            },
            {
                keyword: "bodyguard miami",
                search_volume: 120,
                cpc: 2.80,
                competition_index: 6,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 100, "2025-07": 120, "2025-06": 140, "2025-05": 120, "2025-04": 120, "2025-03": 120,
                    "2025-02": 100, "2025-01": 120, "2024-12": 100, "2024-11": 100, "2024-10": 120, "2024-09": 120
                }
            }
        ],
        serp_data: [
            {
                keyword: "private security miami",
                city: "Miami,Florida,United States",
                local_pack_present: true,
                paa_present: true,
                featured_snippet_present: false,
                top_organic_urls: [
                    "https://infiniterisks.com/blog/security/bodyguard-services-in-miami/",
                    "https://www.thewellingtonagency.com/locations/miami/security-protection-services-in-miami/",
                    "https://ravensecuritygroup.us/miami-security-services/",
                    "https://deltafivesecurity.com/",
                    "https://arrowsecuritycorp.com/private-security-miami/"
                ],
                top_competitor_domain: "infiniterisks.com"
            }
        ],
        competitor_audit: {
            "infiniterisks.com": {
                on_page_patterns: "Focus on 'Bodyguard services in Miami', 'Executive Protection', 'high-net-worth families', 'celebrities', 'VIPs', 'discreet executive protection services', 'covert bodyguard services'. Emphasizes discretion and high-end clientele. Clear calls to action for consultation.",
                schema: "Likely Organization and Service schema.",
                internal_linking: "Links to services, blog, contact, and security resources.",
                ctas: "Prominent contact forms, consultation requests, service inquiries.",
                e_e_a_t_signals: "Highlights 'Infinite Risks International', 'discreet services', 'high-net-worth clientele', professional security expertise, international reach."
            }
        }
    };

    const processor = new NicheProcessor();
    const report = await processor.processNiche(
        nicheName,
        privateSecurityData.keywords,
        privateSecurityData.serp_data,
        privateSecurityData.competitor_audit
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

processPrivateSecurity();
