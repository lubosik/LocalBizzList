// Process Eco-Friendly and Green Roof Installation Services niche
const { NicheProcessor } = require('./niche_processor.js');

async function processGreenRoofInstallation() {
    const nicheName = "Eco-Friendly and Green Roof Installation Services";
    const cities = ["Miami,Florida,United States", "Fort Lauderdale,Florida,United States", "Boca Raton,Florida,United States", "West Palm Beach,Florida,United States"];
    const language = "en";

    // Real data from API calls
    const greenRoofData = {
        keywords: [
            {
                keyword: "green roof installation",
                search_volume: 390,
                cpc: 5.66,
                competition_index: 13,
                competition: "LOW",
                keyword_difficulty: 29,
                monthly_searches: {
                    "2025-08": 320, "2025-07": 390, "2025-06": 480, "2025-05": 590, "2025-04": 590, "2025-03": 480,
                    "2025-02": 320, "2025-01": 390, "2024-12": 390, "2024-11": 390, "2024-10": 390, "2024-09": 320
                }
            },
            {
                keyword: "green roof companies",
                search_volume: 320,
                cpc: 9.88,
                competition_index: 39,
                competition: "MEDIUM",
                keyword_difficulty: 36,
                monthly_searches: {
                    "2025-08": 320, "2025-07": 170, "2025-06": 210, "2025-05": 210, "2025-04": 260, "2025-03": 390,
                    "2025-02": 320, "2025-01": 390, "2024-12": 260, "2024-11": 590, "2024-10": 390, "2024-09": 390
                }
            },
            {
                keyword: "green roof design",
                search_volume: 390,
                cpc: 5.66,
                competition_index: 13,
                competition: "LOW",
                keyword_difficulty: 29,
                monthly_searches: {
                    "2025-08": 320, "2025-07": 390, "2025-06": 480, "2025-05": 590, "2025-04": 590, "2025-03": 480,
                    "2025-02": 320, "2025-01": 390, "2024-12": 390, "2024-11": 390, "2024-10": 390, "2024-09": 320
                }
            },
            {
                keyword: "eco friendly roofing",
                search_volume: 140,
                cpc: 1.50,
                competition_index: 11,
                competition: "LOW",
                keyword_difficulty: 8,
                monthly_searches: {
                    "2025-08": 70, "2025-07": 70, "2025-06": 110, "2025-05": 210, "2025-04": 320, "2025-03": 140,
                    "2025-02": 140, "2025-01": 90, "2024-12": 70, "2024-11": 90, "2024-10": 90, "2024-09": 110
                }
            },
            {
                keyword: "green roof technology",
                search_volume: 70,
                cpc: 6.18,
                competition_index: 17,
                competition: "LOW",
                keyword_difficulty: 32,
                monthly_searches: {
                    "2025-08": 40, "2025-07": 50, "2025-06": 70, "2025-05": 140, "2025-04": 70, "2025-03": 70,
                    "2025-02": 50, "2025-01": 40, "2024-12": 40, "2024-11": 50, "2024-10": 90, "2024-09": 40
                }
            },
            {
                keyword: "green roof modules",
                search_volume: 90,
                cpc: 4.77,
                competition_index: 22,
                competition: "LOW",
                keyword_difficulty: 12,
                monthly_searches: {
                    "2025-08": 40, "2025-07": 40, "2025-06": 90, "2025-05": 140, "2025-04": 140, "2025-03": 110,
                    "2025-02": 90, "2025-01": 70, "2024-12": 70, "2024-11": 50, "2024-10": 110, "2024-09": 70
                }
            }
        ],
        serp_data: [
            {
                keyword: "green roof installation miami",
                city: "Miami,Florida,United States",
                local_pack_present: true,
                paa_present: true,
                featured_snippet_present: false,
                top_organic_urls: [
                    "https://mightyfineroofing.com/miami/miami-green-roofing-systems/",
                    "https://landscaping-miami.com/green-roof-installation/",
                    "https://greenroofspecialists.com/"
                ],
                top_competitor_domain: "greenroofspecialists.com",
                local_pack_businesses: [
                    "Green Home Roofing, Inc (5.0★ 122 reviews)",
                    "A Green Roofers Company Miami (5.0★ 2 reviews)",
                    "Ultra Roof Repair Miami (5.0★ 80 reviews)"
                ],
                related_searches: [
                    "Residential green roof installation miami",
                    "Green roof installation miami cost",
                    "Affordable green roof installation miami"
                ],
                paa_questions: [
                    "How much does a green roof cost to install?",
                    "How expensive is it to install a green roof?",
                    "What are two drawbacks of green roofs?",
                    "Are green roofs worth the cost?"
                ]
            }
        ],
        competitor_audit: {
            "greenroofspecialists.com": {
                on_page_patterns: "Focus on 'Green Roof and Green Wall Technology', 'Sustainable Living', 'Eco-Friendly Building Solutions'. Emphasizes environmental responsibility, energy efficiency, aesthetic appeal, and biodiversity. Clear value proposition: 'Transform Your Property With Green Technology' and 'From Concept to Completion'. Services for both residential and commercial properties.",
                schema: "Likely LocalBusiness schema, possibly ProfessionalService schema.",
                internal_linking: "Links to 'Our Services', 'Contact', 'Schedule a Consultation'. Simple, focused navigation.",
                ctas: "Prominent 'Discover Sustainable Designs' hero CTA, 'Schedule a Consultation' button, 'Reach Out Today' section.",
                e_e_a_t_signals: "Emphasizes expertise ('Specialists' in name), passion for sustainability, comprehensive service offering ('Concept to Completion'), benefits-focused messaging (air quality, energy efficiency, biodiversity). Located in Miami Beach area."
            }
        }
    };

    const processor = new NicheProcessor();
    const report = await processor.processNiche(
        nicheName,
        greenRoofData.keywords,
        greenRoofData.serp_data,
        greenRoofData.competitor_audit
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
    
    // Calculate ease of ranking
    const easeOfRanking = report.scores.total >= 70 ? 'EASY' : 
                          report.scores.total >= 50 ? 'MEDIUM' : 'HARD';
    console.log(`🎯 Ease of Ranking #1: ${easeOfRanking}`);
}

processGreenRoofInstallation().catch(console.error);

