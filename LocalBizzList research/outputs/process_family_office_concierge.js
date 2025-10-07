// Process Specialized Family Office Concierge Services niche
const { NicheProcessor } = require('./niche_processor.js');

async function processFamilyOfficeConcierge() {
    const nicheName = "Specialized Family Office Concierge Services";
    const cities = ["Miami,Florida,United States", "Fort Lauderdale,Florida,United States", "Boca Raton,Florida,United States", "West Palm Beach,Florida,United States"];
    const language = "en";

    // Real data from API calls
    const familyOfficeConciergeData = {
        keywords: [
            {
                keyword: "concierge",
                search_volume: 90500,
                cpc: 8.94,
                competition_index: 1,
                competition: "LOW",
                keyword_difficulty: 21,
                monthly_searches: {
                    "2025-08": 90500, "2025-07": 110000, "2025-06": 90500, "2025-05": 110000, "2025-04": 110000, "2025-03": 110000,
                    "2025-02": 90500, "2025-01": 110000, "2024-12": 90500, "2024-11": 110000, "2024-10": 90500, "2024-09": 90500
                }
            },
            {
                keyword: "miami concierge services",
                search_volume: 140,
                cpc: 12.93,
                competition_index: 13,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 140, "2025-07": 140, "2025-06": 140, "2025-05": 110, "2025-04": 140, "2025-03": 140,
                    "2025-02": 140, "2025-01": 170, "2024-12": 140, "2024-11": 140, "2024-10": 170, "2024-09": 140
                }
            },
            {
                keyword: "miami luxury concierge",
                search_volume: 40,
                cpc: 7.55,
                competition_index: 11,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 90, "2025-07": 40, "2025-06": 50, "2025-05": 40, "2025-04": 30, "2025-03": 30,
                    "2025-02": 30, "2025-01": 30, "2024-12": 30, "2024-11": 30, "2024-10": 70, "2024-09": 40
                }
            },
            {
                keyword: "personal concierge",
                search_volume: 880,
                cpc: 6.56,
                competition_index: 12,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 720, "2025-07": 720, "2025-06": 720, "2025-05": 720, "2025-04": 880, "2025-03": 880,
                    "2025-02": 720, "2025-01": 880, "2024-12": 880, "2024-11": 1000, "2024-10": 720, "2024-09": 720
                }
            },
            {
                keyword: "senior concierge services",
                search_volume: 880,
                cpc: 4.86,
                competition_index: 17,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 1000, "2025-07": 880, "2025-06": 720, "2025-05": 1000, "2025-04": 1000, "2025-03": 1300,
                    "2025-02": 1000, "2025-01": 720, "2024-12": 590, "2024-11": 720, "2024-10": 720, "2024-09": 720
                }
            },
            {
                keyword: "lifestyle concierge services",
                search_volume: 90,
                cpc: 2.94,
                competition_index: 16,
                competition: "LOW",
                keyword_difficulty: 27,
                monthly_searches: {
                    "2025-08": 70, "2025-07": 90, "2025-06": 210, "2025-05": 140, "2025-04": 90, "2025-03": 90,
                    "2025-02": 90, "2025-01": 70, "2024-12": 40, "2024-11": 40, "2024-10": 30, "2024-09": 40
                }
            },
            {
                keyword: "miami concierge",
                search_volume: 50,
                cpc: 7.9,
                competition_index: 5,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 110, "2025-07": 50, "2025-06": 50, "2025-05": 40, "2025-04": 50, "2025-03": 50,
                    "2025-02": 50, "2025-01": 90, "2024-12": 40, "2024-11": 30, "2024-10": 50, "2024-09": 30
                }
            }
        ],
        serp_data: [
            {
                keyword: "family office concierge services",
                city: "Miami,Florida,United States",
                local_pack_present: false,
                paa_present: true,
                featured_snippet_present: false,
                top_organic_urls: [
                    "https://andsimple.co/insights/lifestyle-concierge-family-offices/",
                    "https://www.maisonbenjamin.com/familyoffices",
                    "https://hamiltoncapitalpartnersllc.com/family-office-lifestyle-concierge/",
                    "https://www.reddit.com/r/fatFIRE/comments/r5w8wm/any_insights_into_family_office_andor_concierge/",
                    "https://reidadvisorsllc.com/family-office/"
                ],
                top_competitor_domain: "www.maisonbenjamin.com",
                directory_presence: [],
                rank_group_1_count: 0 // No local pack results
            }
        ],
        competitor_audit: {
            "www.maisonbenjamin.com": {
                on_page_patterns: "Focus on 'Family Office Concierge Services', 'personalized concierge solutions', 'lifestyle management', 'exclusive access', 'tailored experiences'. Strong emphasis on 'luxury travel', 'one-of-a-kind experiences', 'bespoke services', 'high-touch digital platform'.",
                schema: "Likely Organization and Service schema. Strong service-focused content.",
                internal_linking: "Links to family office platform, services, contact forms, and service categories (events, VIP access, personalized services, wellness, philanthropy).",
                ctas: "Prominent 'Get in touch with us' buttons, contact forms, 'Book Now' for consultations, email contact options.",
                e_e_a_t_signals: "Specialized in family office services, mentions 'high-touch digital platform', 'discerning families', 'next generation leaders', comprehensive service offerings, professional presentation.",
                local_seo: "No specific location targeting visible, focuses on national/international family office market.",
                content_depth: "Detailed service descriptions across multiple categories: Exclusive Events & Experiences, Personalized Services, Educational & Cultural Enrichment, Wellness & Lifestyle, Philanthropic & Social Impact, Custom Entertainment Packages."
            },
            "kaufmanrossin.com": {
                on_page_patterns: "Focus on 'Family Office Services', 'lifestyle management', 'wealth preservation', 'consolidated reporting', 'tailored technical advice'. Strong emphasis on '60 years of experience', 'high-net-worth families', 'multi-family office'.",
                schema: "Likely Organization, Service, and LocalBusiness schema.",
                internal_linking: "Extensive internal linking to service pages, professional profiles, contact information, and related services.",
                ctas: "Multiple contact forms, phone numbers, email addresses, 'Contact Us' buttons, consultation requests.",
                e_e_a_t_signals: "60 years of experience, 'nearly 60 years of experience working with global affluent families', professional team profiles, comprehensive service offerings, established firm reputation.",
                local_seo: "Multiple South Florida locations (Miami, Fort Lauderdale, Boca Raton, Palm Beach), physical addresses, local phone numbers.",
                content_depth: "Comprehensive service descriptions including lifestyle management, accounting, integrated planning, philanthropy, risk management, coordination with 3rd parties."
            }
        },
        rankability_assessment: {
            ease_of_ranking: "MEDIUM",
            keyword_difficulty_avg: 24.0, // Average KD across main keywords
            local_pack_opportunity: "LOW", // No local pack presence
            competition_strength: "MEDIUM", // Established players but niche market
            content_gap_score: 8, // Scale 1-10, where 10 = huge gaps
            barriers_to_entry: [
                "High CPC ($7-13) indicates premium market",
                "Established competitors with strong reputations",
                "Requires high-level expertise and connections",
                "No local pack presence limits local SEO opportunities"
            ],
            opportunities: [
                "Low keyword difficulty (KD 21-27) for main terms",
                "High CPC indicates strong commercial intent",
                "Limited local competition in South Florida",
                "Content gaps in educational and how-to content",
                "Niche market with less competition than broader concierge services"
            ],
            ranking_timeline: "3-6 months for main terms, 6-12 months for competitive terms",
            recommended_strategy: "Focus on educational content about family office services, target long-tail keywords, build authority through thought leadership, emphasize local South Florida connections, create comprehensive service guides"
        }
    };

    const processor = new NicheProcessor();
    const report = await processor.processNiche(
        nicheName,
        familyOfficeConciergeData.keywords,
        familyOfficeConciergeData.serp_data,
        familyOfficeConciergeData.competitor_audit,
        familyOfficeConciergeData.rankability_assessment
    );

    // Save report
    const fs = require('fs');
    const path = require('path');

    const reportPath = path.join(__dirname, 'niches', `${report.slug}.json`);
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    console.log(`✅ Processed ${nicheName}`);
    console.log(`📊 Rankability Score: ${report.scores.total}/100`);
    console.log(`🎯 Ease of Ranking: ${familyOfficeConciergeData.rankability_assessment.ease_of_ranking}`);
    console.log(`📁 Report: ${reportPath}`);
}

processFamilyOfficeConcierge();
