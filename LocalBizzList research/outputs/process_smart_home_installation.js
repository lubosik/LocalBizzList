// Process Smart Home Installation niche
const { NicheProcessor } = require('./niche_processor.js');

async function processSmartHomeInstallation() {
    const nicheName = "Smart Home Installation";
    const cities = ["Miami,Florida,United States", "Fort Lauderdale,Florida,United States", "Boca Raton,Florida,United States", "West Palm Beach,Florida,United States"];
    const language = "en";

    // Real data from API calls
    const smartHomeInstallationData = {
        keywords: [
            {
                keyword: "smart home",
                search_volume: 22200,
                cpc: 6.57,
                competition_index: 63,
                competition: "MEDIUM",
                keyword_difficulty: 82,
                monthly_searches: {
                    "2025-08": 18100, "2025-07": 18100, "2025-06": 18100, "2025-05": 22200, "2025-04": 22200, "2025-03": 27100,
                    "2025-02": 22200, "2025-01": 27100, "2024-12": 22200, "2024-11": 22200, "2024-10": 22200, "2024-09": 33100
                }
            },
            {
                keyword: "smart home devices",
                search_volume: 60500,
                cpc: 3.13,
                competition_index: 8,
                competition: "LOW",
                keyword_difficulty: 62,
                monthly_searches: {
                    "2025-08": 135000, "2025-07": 110000, "2025-06": 110000, "2025-05": 49500, "2025-04": 40500, "2025-03": 49500,
                    "2025-02": 22200, "2025-01": 49500, "2024-12": 49500, "2024-11": 22200, "2024-10": 12100, "2024-09": 12100
                }
            },
            {
                keyword: "home automation",
                search_volume: 14800,
                cpc: 7.04,
                competition_index: 12,
                competition: "LOW",
                keyword_difficulty: 80,
                monthly_searches: {
                    "2025-08": 14800, "2025-07": 18100, "2025-06": 18100, "2025-05": 14800, "2025-04": 12100, "2025-03": 22200,
                    "2025-02": 14800, "2025-01": 18100, "2024-12": 14800, "2024-11": 14800, "2024-10": 14800, "2024-09": 14800
                }
            },
            {
                keyword: "smart home automation",
                search_volume: 4400,
                cpc: 6.59,
                competition_index: 3,
                competition: "LOW",
                keyword_difficulty: 75,
                monthly_searches: {
                    "2025-08": 14800, "2025-07": 5400, "2025-06": 5400, "2025-05": 5400, "2025-04": 6600, "2025-03": 2400,
                    "2025-02": 1900, "2025-01": 2400, "2024-12": 5400, "2024-11": 4400, "2024-10": 1900, "2024-09": 1300
                }
            },
            {
                keyword: "smart home systems",
                search_volume: 8100,
                cpc: 8.71,
                competition_index: 29,
                competition: "LOW",
                keyword_difficulty: 56,
                monthly_searches: {
                    "2025-08": 6600, "2025-07": 9900, "2025-06": 12100, "2025-05": 5400, "2025-04": 5400, "2025-03": 6600,
                    "2025-02": 5400, "2025-01": 6600, "2024-12": 6600, "2024-11": 8100, "2024-10": 22200, "2024-09": 5400
                }
            },
            {
                keyword: "home automation systems",
                search_volume: 4400,
                cpc: 6.13,
                competition_index: 30,
                competition: "LOW",
                keyword_difficulty: 61,
                monthly_searches: {
                    "2025-08": 5400, "2025-07": 4400, "2025-06": 4400, "2025-05": 4400, "2025-04": 4400, "2025-03": 5400,
                    "2025-02": 3600, "2025-01": 5400, "2024-12": 4400, "2024-11": 4400, "2024-10": 3600, "2024-09": 3600
                }
            },
            {
                keyword: "smart home technology",
                search_volume: 4400,
                cpc: 5.48,
                competition_index: 24,
                competition: "LOW",
                keyword_difficulty: 45,
                monthly_searches: {
                    "2025-08": 3600, "2025-07": 2900, "2025-06": 3600, "2025-05": 3600, "2025-04": 3600, "2025-03": 8100,
                    "2025-02": 4400, "2025-01": 3600, "2024-12": 4400, "2024-11": 6600, "2024-10": 5400, "2024-09": 2900
                }
            }
        ],
        serp_data: [
            {
                keyword: "smart home installation",
                city: "Miami,Florida,United States",
                local_pack_present: true,
                local_pack_providers: 4,
                paa_present: true,
                featured_snippet_present: false,
                top_organic_urls: [
                    "https://www.bestbuy.com/site/services/smart-home-services/pcmcat748300595063.c?id=pcmcat748300595063",
                    "https://www.yelp.com/search?find_desc=Smart+Home+Installation&find_loc=Miami+Beach%2C+FL",
                    "https://www.reddit.com/r/smarthome/comments/1ctih4z/company_to_install_smart_home_system/"
                ],
                top_competitor_domain: "smarthomestudio.co",
                directory_presence: ["Yelp", "Best Buy"],
                rank_group_1_count: 3 // Three local pack results in top positions
            }
        ],
        competitor_audit: {
            "smarthomestudio.co": {
                on_page_patterns: "Focus on 'Smart Home Automation', 'Home Automation Solutions', 'Smart Lighting', 'Cameras & Security', 'Video & Sound', 'Temperature Control', 'Connectivity'. Strong emphasis on 'Certified Partner', 'Residential & Commercial', 'Miami areas served', 'Seamless integration'.",
                schema: "Likely LocalBusiness, Organization, FAQPage schema. Strong location targeting.",
                internal_linking: "Extensive internal linking to service pages (Smart Lighting, Cameras, Video & Sound), area pages (Aventura, Bal Harbor, Brickell, etc.), testimonials.",
                ctas: "Prominent phone numbers '(786) 882-3755', 'Call Now' buttons, 'Get a quote' popups, 'Request a FREE ESTIMATE' form, 'Talk To A Smart Home Specialist'.",
                e_e_a_t_signals: "Certified partners (Matter, Apple HomeKit, Amazon Alexa, Google Assistant), customer testimonials with 5.0 Google rating, extensive service area coverage, professional installation process documentation, brand partnerships (Brilliant, Sonos, Lutron, etc.).",
                local_seo: "Comprehensive area pages for Miami-Dade (Aventura, Bal Harbor, Brickell, etc.), Broward (Fort Lauderdale, Boca Raton, etc.), Palm Beach (West Palm Beach, etc.). Physical address: 3565 SW 1st Ave, Miami, FL 33145.",
                content_depth: "Detailed service descriptions, 4-step process (Strategic Planning, Setup & Configuration, Technology Supply, Integration & Support), residential vs commercial solutions."
            }
        },
        rankability_assessment: {
            ease_of_ranking: "MEDIUM-HARD",
            keyword_difficulty_avg: 67.2, // Average KD across main keywords
            local_pack_opportunity: "HIGH", // Strong local pack presence
            competition_strength: "MEDIUM-HIGH", // Established players but not mega-brands
            content_gap_score: 7, // Scale 1-10, where 10 = huge gaps
            barriers_to_entry: [
                "High keyword difficulty (KD 56-82) for main terms",
                "Established local competitors with strong reviews",
                "Best Buy and national brands present",
                "Requires technical expertise and certifications"
            ],
            opportunities: [
                "Strong local pack presence (4 providers visible)",
                "High CPC ($5-8) indicates commercial intent",
                "Multiple service categories to target (lighting, security, thermostats)",
                "Geo-modified long-tails are less competitive",
                "Content gaps in 'how-to' and educational content"
            ],
            ranking_timeline: "6-12 months for local pack, 12-18 months for competitive organic terms",
            recommended_strategy: "Focus on local SEO + Google Business Profile optimization, target geo-modified terms (e.g., 'smart home installation miami'), create educational content, build local citations, emphasize certifications and E-E-A-T"
        }
    };

    const processor = new NicheProcessor();
    const report = await processor.processNiche(
        nicheName,
        smartHomeInstallationData.keywords,
        smartHomeInstallationData.serp_data,
        smartHomeInstallationData.competitor_audit,
        smartHomeInstallationData.rankability_assessment
    );

    // Save report
    const fs = require('fs');
    const path = require('path');

    const reportPath = path.join(__dirname, 'niches', `${report.slug}.json`);
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    console.log(`✅ Processed ${nicheName}`);
    console.log(`📊 Rankability Score: ${report.scores.total}/100`);
    console.log(`🎯 Ease of Ranking: ${smartHomeInstallationData.rankability_assessment.ease_of_ranking}`);
    console.log(`📁 Report: ${reportPath}`);
}

processSmartHomeInstallation();

