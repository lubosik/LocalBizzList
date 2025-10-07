// Process Non-Surgical Rhinoplasty Options niche
const { NicheProcessor } = require('./niche_processor.js');

async function processNonSurgicalRhinoplasty() {
    const nicheName = "Non-Surgical Rhinoplasty Options";
    const cities = ["Miami,Florida,United States", "Fort Lauderdale,Florida,United States", "Boca Raton,Florida,United States", "West Palm Beach,Florida,United States"];
    const language = "en";

    // Real data from API calls
    const nonSurgicalRhinoplastyData = {
        keywords: [
            {
                keyword: "non surgical rhinoplasty",
                search_volume: 22200,
                cpc: 4.28,
                competition_index: 22,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 18100, "2025-07": 22200, "2025-06": 22200, "2025-05": 27100, "2025-04": 22200, "2025-03": 27100,
                    "2025-02": 18100, "2025-01": 22200, "2024-12": 18100, "2024-11": 18100, "2024-10": 18100, "2024-09": 18100
                }
            },
            {
                keyword: "liquid rhinoplasty",
                search_volume: 14800,
                cpc: 5.83,
                competition_index: 22,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 12100, "2025-07": 14800, "2025-06": 18100, "2025-05": 14800, "2025-04": 14800, "2025-03": 14800,
                    "2025-02": 14800, "2025-01": 14800, "2024-12": 14800, "2024-11": 12100, "2024-10": 12100, "2024-09": 12100
                }
            },
            {
                keyword: "nose filler",
                search_volume: 27100,
                cpc: 4.58,
                competition_index: 32,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 22200, "2025-07": 22200, "2025-06": 22200, "2025-05": 27100, "2025-04": 27100, "2025-03": 27100,
                    "2025-02": 27100, "2025-01": 33100, "2024-12": 27100, "2024-11": 27100, "2024-10": 33100, "2024-09": 27100
                }
            },
            {
                keyword: "liquid nose job",
                search_volume: 14800,
                cpc: 5.83,
                competition_index: 22,
                competition: "LOW",
                monthly_searches: {
                    "2025-08": 12100, "2025-07": 14800, "2025-06": 18100, "2025-05": 14800, "2025-04": 14800, "2025-03": 14800,
                    "2025-02": 14800, "2025-01": 14800, "2024-12": 14800, "2024-11": 12100, "2024-10": 12100, "2024-09": 12100
                }
            },
            {
                keyword: "nose filler miami",
                search_volume: 50,
                cpc: 7.07,
                competition_index: 75,
                competition: "HIGH",
                monthly_searches: {
                    "2025-08": 40, "2025-07": 50, "2025-06": 30, "2025-05": 40, "2025-04": 70, "2025-03": 90,
                    "2025-02": 70, "2025-01": 90, "2024-12": 50, "2024-11": 50, "2024-10": 30, "2024-09": 50
                }
            },
            {
                keyword: "dermal filler rhinoplasty",
                search_volume: 50,
                cpc: 1.04,
                competition_index: 38,
                competition: "MEDIUM",
                monthly_searches: {
                    "2025-08": 40, "2025-07": 50, "2025-06": 50, "2025-05": 50, "2025-04": 40, "2025-03": 70,
                    "2025-02": 70, "2025-01": 40, "2024-12": 40, "2024-11": 70, "2024-10": 40, "2024-09": 50
                }
            }
        ],
        serp_data: [
            {
                keyword: "non surgical rhinoplasty",
                city: "Miami,Florida,United States",
                local_pack_present: true,
                paa_present: true,
                featured_snippet_present: false,
                top_organic_urls: [
                    "https://www.drbustillo.com/cosmetic-procedures/liquid-rhinoplasty",
                    "https://my.clevelandclinic.org/health/treatments/22880-nonsurgical-rhinoplasty-nose-job",
                    "https://www.gablesplasticsurgery.com/non-surgical/non-surgical-rhinoplasty/"
                ],
                top_competitor_domain: "www.drbustillo.com"
            }
        ],
        competitor_audit: {
            "www.drbustillo.com": {
                on_page_patterns: "Focus on 'Liquid Rhinoplasty', 'non-invasive treatment', 'dermal fillers', 'smoother profile without surgery'. Strong emphasis on '15-minute procedure', 'instant results', '12-16 months duration'. Clear calls to action for 'Schedule Now' and consultation booking.",
                schema: "Likely LocalBusiness and Article schema with structured data for procedures and reviews.",
                internal_linking: "Extensive internal linking to procedures, before/after photos, consultation booking, and related services like dermal fillers and surgical rhinoplasty.",
                ctas: "Prominent 'Schedule Now' buttons, phone number (305) 663-3380, consultation booking forms, and 'view more' links to before/after photos.",
                e_e_a_t_signals: "Double board-certified plastic surgeon, 20+ years experience, Castle Connolly Top Doctor for 10+ years, Best Doctor's 2020-2021, fellowship-trained at NYU, extensive before/after gallery, patient testimonials with 4.8/5 ratings, detailed procedure explanations."
            }
        }
    };

    const processor = new NicheProcessor();
    const report = await processor.processNiche(
        nicheName, 
        nonSurgicalRhinoplastyData.keywords, 
        nonSurgicalRhinoplastyData.serp_data, 
        nonSurgicalRhinoplastyData.competitor_audit
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

processNonSurgicalRhinoplasty();
