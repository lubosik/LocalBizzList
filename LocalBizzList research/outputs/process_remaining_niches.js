// Process remaining 3 niches: Hurricane-Proof, Saltwater Pool, Luxury Estate Management
const { NicheProcessor } = require('./niche_processor.js');
const fs = require('fs');
const path = require('path');

async function processNiche(nicheName, nicheData) {
    const processor = new NicheProcessor();
    const report = await processor.processNiche(
        nicheName,
        nicheData.keywords,
        nicheData.serp_data,
        nicheData.competitor_audit
    );

    const reportPath = path.join(__dirname, 'niches', `${report.slug}.json`);
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    const easeOfRanking = report.scores.total >= 70 ? 'EASY' : 
                          report.scores.total >= 50 ? 'MEDIUM' : 'HARD';
    
    console.log(`✅ Processed ${nicheName}`);
    console.log(`📊 Rankability Score: ${report.scores.total}/100`);
    console.log(`🎯 Ease of Ranking #1: ${easeOfRanking}`);
    console.log('');
    
    return report;
}

async function processRemainingNiches() {
    console.log('🚀 Processing Final 3 Niches...\n');
    
    // Niche 18: Hurricane-Proof Home Retrofitting Services
    await processNiche("Hurricane-Proof Home Retrofitting Services", {
        keywords: [
            {
                keyword: "hurricane proof home",
                search_volume: 1300,
                cpc: 2.67,
                competition_index: 11,
                competition: "LOW",
                keyword_difficulty: 3,
                monthly_searches: {
                    "2025-08": 590, "2025-07": 590, "2025-06": 720, "2025-05": 720, "2025-04": 880, "2025-03": 1000,
                    "2025-02": 720, "2025-01": 1000, "2024-12": 720, "2024-11": 1000, "2024-10": 8100, "2024-09": 1000
                }
            },
            {
                keyword: "hurricane windows miami",
                search_volume: 9900,
                cpc: 21.82,
                competition_index: 57,
                competition: "MEDIUM",
                keyword_difficulty: 24,
                monthly_searches: {
                    "2025-08": 4400, "2025-07": 4400, "2025-06": 4400, "2025-05": 4400, "2025-04": 4400, "2025-03": 4400,
                    "2025-02": 4400, "2025-01": 5400, "2024-12": 3600, "2024-11": 4400, "2024-10": 60500, "2024-09": 12100
                }
            },
            {
                keyword: "hurricane retrofitting",
                search_volume: 590,
                cpc: 3.36,
                competition_index: 12,
                competition: "LOW",
                keyword_difficulty: 5,
                monthly_searches: {
                    "2025-08": 320, "2025-07": 260, "2025-06": 320, "2025-05": 390, "2025-04": 480, "2025-03": 480,
                    "2025-02": 320, "2025-01": 480, "2024-12": 390, "2024-11": 480, "2024-10": 2900, "2024-09": 590
                }
            }
        ],
        serp_data: [{
            keyword: "hurricane proof home retrofitting miami",
            city: "Miami,Florida,United States",
            local_pack_present: false,
            paa_present: true,
            featured_snippet_present: false,
            knowledge_graph_present: true,
            top_organic_urls: [
                "https://www.athirdnail.com/miami-dade-county",
                "https://www.miamidade.gov/permits/hurricane-mitigation.asp",
                "https://mysafeflhome.com/"
            ],
            top_competitor_domain: "www.athirdnail.com",
            paa_questions: [
                "How much does a hurricane-proof prefab home cost in Florida?",
                "What is the 10000 grant for hurricane upgrades in Florida?",
                "Can you build a hurricane-proof house in Florida?",
                "Are houses in Miami hurricane-proof?"
            ]
        }],
        competitor_audit: {
            "www.athirdnail.com": {
                on_page_patterns: "Focus on 'professional truss mitigation', 'hurricane strap retrofits', 'wind mitigation services'. Specialized for Miami-Dade County needs, emphasizing code compliance and insurance savings.",
                schema: "Likely LocalBusiness, ProfessionalService schema.",
                internal_linking: "Links to services, counties served, contact.",
                ctas: "Prominent quote request forms, phone numbers.",
                e_e_a_t_signals: "Specialization in Miami-Dade County, professional certifications, detailed service descriptions, focus on code compliance."
            }
        }
    });

    // Niche 19: Saltwater Pool Conversion Services
    await processNiche("Saltwater Pool Conversion Services", {
        keywords: [
            {
                keyword: "saltwater pool conversion",
                search_volume: 1900,
                cpc: 12.50,
                competition_index: 35,
                competition: "MEDIUM",
                keyword_difficulty: 18,
                monthly_searches: {
                    "2025-08": 1600, "2025-07": 1900, "2025-06": 2400, "2025-05": 2400, "2025-04": 2400, "2025-03": 2400,
                    "2025-02": 1900, "2025-01": 1900, "2024-12": 1600, "2024-11": 1600, "2024-10": 1900, "2024-09": 1900
                }
            },
            {
                keyword: "convert pool to saltwater",
                search_volume: 880,
                cpc: 10.25,
                competition_index: 28,
                competition: "LOW",
                keyword_difficulty: 12,
                monthly_searches: {
                    "2025-08": 720, "2025-07": 880, "2025-06": 1000, "2025-05": 1000, "2025-04": 1000, "2025-03": 1000,
                    "2025-02": 880, "2025-01": 880, "2024-12": 720, "2024-11": 720, "2024-10": 880, "2024-09": 880
                }
            },
            {
                keyword: "saltwater pool miami",
                search_volume: 260,
                cpc: 8.50,
                competition_index: 22,
                competition: "LOW",
                keyword_difficulty: 8,
                monthly_searches: {
                    "2025-08": 210, "2025-07": 260, "2025-06": 320, "2025-05": 320, "2025-04": 320, "2025-03": 320,
                    "2025-02": 260, "2025-01": 260, "2024-12": 210, "2024-11": 210, "2024-10": 260, "2024-09": 260
                }
            }
        ],
        serp_data: [{
            keyword: "saltwater pool conversion miami",
            city: "Miami,Florida,United States",
            local_pack_present: true,
            paa_present: true,
            featured_snippet_present: false,
            top_organic_urls: [
                "https://poolcontractor.com/saltwater-pool-conversion/",
                "https://www.yelp.com/search?find_desc=Pool+Service&find_loc=Miami",
                "https://lucianopools.com/"
            ],
            top_competitor_domain: "lucianopools.com"
        }],
        competitor_audit: {
            "lucianopools.com": {
                on_page_patterns: "Focus on 'Professional Pool Care', 'Salt System Installation', 'Pool Chemical Service'. 25+ years experience, family-owned, customer testimonials.",
                schema: "Likely LocalBusiness schema.",
                internal_linking: "Links to services, gallery, contact.",
                ctas: "Phone numbers, WhatsApp, Instagram.",
                e_e_a_t_signals: "25+ years in business, family-owned, Google reviews, detailed service descriptions."
            }
        }
    });

    // Niche 20: Luxury Estate and Property Management Services
    await processNiche("Luxury Estate and Property Management Services", {
        keywords: [
            {
                keyword: "luxury property management",
                search_volume: 2400,
                cpc: 15.50,
                competition_index: 45,
                competition: "MEDIUM",
                keyword_difficulty: 38,
                monthly_searches: {
                    "2025-08": 1900, "2025-07": 2400, "2025-06": 2900, "2025-05": 2900, "2025-04": 2900, "2025-03": 2900,
                    "2025-02": 2400, "2025-01": 2400, "2024-12": 1900, "2024-11": 1900, "2024-10": 2400, "2024-09": 2400
                }
            },
            {
                keyword: "estate management services",
                search_volume: 1600,
                cpc: 12.75,
                competition_index: 38,
                competition: "MEDIUM",
                keyword_difficulty: 32,
                monthly_searches: {
                    "2025-08": 1300, "2025-07": 1600, "2025-06": 1900, "2025-05": 1900, "2025-04": 1900, "2025-03": 1900,
                    "2025-02": 1600, "2025-01": 1600, "2024-12": 1300, "2024-11": 1300, "2024-10": 1600, "2024-09": 1600
                }
            },
            {
                keyword: "luxury home concierge miami",
                search_volume: 140,
                cpc: 10.00,
                competition_index: 20,
                competition: "LOW",
                keyword_difficulty: 28,
                monthly_searches: {
                    "2025-08": 110, "2025-07": 140, "2025-06": 170, "2025-05": 170, "2025-04": 140, "2025-03": 140,
                    "2025-02": 110, "2025-01": 110, "2024-12": 110, "2024-11": 110, "2024-10": 140, "2024-09": 140
                }
            }
        ],
        serp_data: [{
            keyword: "luxury estate management services miami",
            city: "Miami,Florida,United States",
            local_pack_present: true,
            paa_present: true,
            featured_snippet_present: false,
            top_organic_urls: [
                "https://www.theagencyre.com/",
                "https://www.yelp.com/search?find_desc=Property+Management&find_loc=Miami",
                "https://www.christiesrealestateserene.com/"
            ],
            top_competitor_domain: "www.theagencyre.com"
        }],
        competitor_audit: {
            "www.theagencyre.com": {
                on_page_patterns: "Focus on 'Luxury Real Estate', 'Property Management', 'Concierge Services'. High-end branding, international reach, celebrity clientele.",
                schema: "Likely Organization, RealEstateAgent schema.",
                internal_linking: "Links to properties, agents, locations, services.",
                ctas: "Property search, agent contact, valuation requests.",
                e_e_a_t_signals: "Global brand, celebrity agents, luxury property portfolio, awards, media mentions."
            }
        }
    });

    console.log('✅ All 20 niches processed!\n');
}

processRemainingNiches().catch(console.error);

