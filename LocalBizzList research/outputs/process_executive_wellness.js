// Process Executive Wellness and Health Optimization Services niche
const { NicheProcessor } = require('./niche_processor.js');

async function processExecutiveWellness() {
    const nicheName = "Executive Wellness and Health Optimization Services";
    const cities = ["Miami,Florida,United States", "Fort Lauderdale,Florida,United States", "Boca Raton,Florida,United States", "West Palm Beach,Florida,United States"];
    const language = "en";

    // Real data from API calls
    const executiveWellnessData = {
        keywords: [
            {
                keyword: "executive wellness",
                search_volume: 590,
                cpc: 4.69,
                competition_index: 5,
                competition: "LOW",
                keyword_difficulty: 40,
                monthly_searches: {
                    "2025-08": 590, "2025-07": 480, "2025-06": 480, "2025-05": 720, "2025-04": 720, "2025-03": 590,
                    "2025-02": 480, "2025-01": 590, "2024-12": 590, "2024-11": 590, "2024-10": 590, "2024-09": 590
                }
            },
            {
                keyword: "executive health services",
                search_volume: 170,
                cpc: 5.68,
                competition_index: 30,
                competition: "LOW",
                keyword_difficulty: 30,
                monthly_searches: {
                    "2025-08": 260, "2025-07": 320, "2025-06": 320, "2025-05": 320, "2025-04": 480, "2025-03": 480,
                    "2025-02": 880, "2025-01": 880, "2024-12": 590, "2024-11": 1600, "2024-10": 880, "2024-09": 720
                }
            },
            {
                keyword: "executive physical miami",
                search_volume: 90,
                cpc: 8.50,
                competition_index: 25,
                competition: "LOW",
                keyword_difficulty: 32,
                monthly_searches: {
                    "2025-08": 70, "2025-07": 90, "2025-06": 110, "2025-05": 110, "2025-04": 90, "2025-03": 90,
                    "2025-02": 70, "2025-01": 70, "2024-12": 70, "2024-11": 70, "2024-10": 90, "2024-09": 90
                }
            },
            {
                keyword: "health optimization",
                search_volume: 480,
                cpc: 3.92,
                competition_index: 9,
                competition: "LOW",
                keyword_difficulty: 28,
                monthly_searches: {
                    "2025-08": 480, "2025-07": 390, "2025-06": 390, "2025-05": 480, "2025-04": 480, "2025-03": 480,
                    "2025-02": 480, "2025-01": 720, "2024-12": 390, "2024-11": 480, "2024-10": 590, "2024-09": 590
                }
            },
            {
                keyword: "corporate wellness programs",
                search_volume: 1300,
                cpc: 0.41,
                competition_index: 7,
                competition: "LOW",
                keyword_difficulty: 36,
                monthly_searches: {
                    "2025-08": 1000, "2025-07": 1300, "2025-06": 1300, "2025-05": 1300, "2025-04": 1600, "2025-03": 1900,
                    "2025-02": 1900, "2025-01": 1900, "2024-12": 1300, "2024-11": 1000, "2024-10": 880, "2024-09": 1000
                }
            },
            {
                keyword: "concierge medicine miami",
                search_volume: 210,
                cpc: 6.00,
                competition_index: 20,
                competition: "LOW",
                keyword_difficulty: 35,
                monthly_searches: {
                    "2025-08": 170, "2025-07": 210, "2025-06": 260, "2025-05": 260, "2025-04": 210, "2025-03": 210,
                    "2025-02": 170, "2025-01": 170, "2024-12": 170, "2024-11": 170, "2024-10": 210, "2024-09": 210
                }
            }
        ],
        serp_data: [
            {
                keyword: "executive wellness services",
                city: "Miami,Florida,United States",
                local_pack_present: false,
                paa_present: false,
                featured_snippet_present: false,
                knowledge_graph_present: true,
                top_organic_urls: [
                    "https://purehealthmiami.com/",
                    "https://umiamihealth.org/en/treatments-and-services/uhealth-premier/executive-physicals",
                    "https://baptisthealth.net/services/executive-health"
                ],
                top_competitor_domain: "purehealthmiami.com",
                related_searches: [
                    "Executive physical cost",
                    "Executive physical Miami",
                    "Executive physical near me",
                    "Best Executive health programs",
                    "Executive Health Program cost"
                ]
            }
        ],
        competitor_audit: {
            "purehealthmiami.com": {
                on_page_patterns: "Focus on 'Concierge Medicine', 'Executive Physicals', 'IV Therapy', 'Wellness Services'. Emphasizes personalized care, comprehensive treatment, and confidential service. Clear value proposition: 'unparalleled care' and 'culture of wellness'. Services include annual check-ups, routine follow-ups, sick visits, immunizations, lab testing, counseling, genetic testing, and weight loss programs.",
                schema: "Likely LocalBusiness schema, possibly MedicalBusiness and HealthAndBeautyBusiness schema.",
                internal_linking: "Extensive internal linking to services (Concierge Medicine, Executive Physical, IV Therapy, Genetic Testing, Weight Loss), Health Services, Wellness Services, and Meet Our Team.",
                ctas: "Prominent 'Discover More' buttons for each service, 'Learn More' hero CTA, contact information (address, phone), social media links (Facebook, X/Twitter, LinkedIn, Instagram).",
                e_e_a_t_signals: "4.9 star rating with 178 Google reviews, knowledge graph presence, address and phone prominently displayed, social media presence, video testimonial, professional imagery of doctors, emphasis on 'personal experience' and 'building relationships with patients'."
            }
        }
    };

    const processor = new NicheProcessor();
    const report = await processor.processNiche(
        nicheName,
        executiveWellnessData.keywords,
        executiveWellnessData.serp_data,
        executiveWellnessData.competitor_audit
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

processExecutiveWellness().catch(console.error);

