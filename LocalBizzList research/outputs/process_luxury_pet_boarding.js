// Process Premium Pet Boarding and Luxury Pet Hotels niche
const { NicheProcessor } = require('./niche_processor.js');

async function processLuxuryPetBoarding() {
    const nicheName = "Premium Pet Boarding and Luxury Pet Hotels";
    const cities = ["Miami,Florida,United States", "Fort Lauderdale,Florida,United States", "Boca Raton,Florida,United States", "West Palm Beach,Florida,United States"];
    const language = "en";

    // Real data from API calls
    const luxuryPetBoardingData = {
        keywords: [
            {
                keyword: "luxury pet boarding",
                search_volume: 1000,
                cpc: 0.50,
                competition_index: 14,
                competition: "LOW",
                keyword_difficulty: 10,
                monthly_searches: {
                    "2025-08": 1000, "2025-07": 1000, "2025-06": 1000, "2025-05": 1000, "2025-04": 880, "2025-03": 1000,
                    "2025-02": 880, "2025-01": 1000, "2024-12": 1000, "2024-11": 1000, "2024-10": 1000, "2024-09": 1300
                }
            },
            {
                keyword: "premium pet hotel",
                search_volume: 6600,
                cpc: 2.44,
                competition_index: 24,
                competition: "LOW",
                keyword_difficulty: 9,
                monthly_searches: {
                    "2025-08": 6600, "2025-07": 6600, "2025-06": 6600, "2025-05": 6600, "2025-04": 6600, "2025-03": 6600,
                    "2025-02": 5400, "2025-01": 5400, "2024-12": 6600, "2024-11": 6600, "2024-10": 6600, "2024-09": 6600
                }
            },
            {
                keyword: "dog boarding miami",
                search_volume: 2400,
                cpc: 3.79,
                competition_index: 74,
                competition: "HIGH",
                keyword_difficulty: 15,
                monthly_searches: {
                    "2025-08": 1900, "2025-07": 1900, "2025-06": 2400, "2025-05": 2400, "2025-04": 2400, "2025-03": 3600,
                    "2025-02": 2400, "2025-01": 2900, "2024-12": 2900, "2024-11": 2900, "2024-10": 2900, "2024-09": 2900
                }
            },
            {
                keyword: "dog boarding and training",
                search_volume: 8100,
                cpc: 7.07,
                competition_index: 75,
                competition: "HIGH",
                keyword_difficulty: 7,
                monthly_searches: {
                    "2025-08": 4400, "2025-07": 5400, "2025-06": 5400, "2025-05": 6600, "2025-04": 6600, "2025-03": 8100,
                    "2025-02": 6600, "2025-01": 12100, "2024-12": 8100, "2024-11": 14800, "2024-10": 8100, "2024-09": 8100
                }
            },
            {
                keyword: "long term dog boarding",
                search_volume: 2400,
                cpc: 3.17,
                competition_index: 65,
                competition: "MEDIUM",
                keyword_difficulty: 12,
                monthly_searches: {
                    "2025-08": 1600, "2025-07": 1900, "2025-06": 1900, "2025-05": 2400, "2025-04": 2900, "2025-03": 2900,
                    "2025-02": 2900, "2025-01": 3600, "2024-12": 4400, "2024-11": 1900, "2024-10": 2400, "2024-09": 2400
                }
            },
            {
                keyword: "pet daycare",
                search_volume: 12100,
                cpc: 2.34,
                competition_index: 10,
                competition: "LOW",
                keyword_difficulty: 60,
                monthly_searches: {
                    "2025-08": 1600, "2025-07": 2400, "2025-06": 2900, "2025-05": 9900, "2025-04": 27100, "2025-03": 18100,
                    "2025-02": 40500, "2025-01": 8100, "2024-12": 6600, "2024-11": 2400, "2024-10": 6600, "2024-09": 14800
                }
            }
        ],
        serp_data: [
            {
                keyword: "luxury pet boarding miami",
                city: "Miami,Florida,United States",
                local_pack_present: true,
                paa_present: true,
                featured_snippet_present: false,
                top_organic_urls: [
                    "https://miamipetresort.com/",
                    "https://www.somipetresort.com/",
                    "https://doghotels.com/"
                ],
                top_competitor_domain: "miamipetresort.com",
                local_pack_businesses: [
                    "City Bark Miami (4.8★ 105 reviews)",
                    "Miranda Luxury Dog Hotel (5.0★ 1 review)",
                    "Your Paws R My Paws (4.9★ 85 reviews)"
                ],
                related_searches: [
                    "Luxury pet boarding miami reviews",
                    "Dog boarding Miami",
                    "Luxury pet boarding miami prices",
                    "Best luxury pet boarding miami",
                    "Luxury pet boarding miami beach"
                ],
                paa_questions: [
                    "How much does it cost to board a dog in Miami?",
                    "What is the average cost to board a dog for 10 days?",
                    "Is it okay to leave a dog at a pet hotel?",
                    "Is pet sitting cheaper than boarding?"
                ],
                discussions_forums: [
                    "Dog Boarding/Kennel Recommendations - Miami (Reddit)",
                    "Pet Boarding in Miami? (Reddit)"
                ]
            }
        ],
        competitor_audit: {
            "miamipetresort.com": {
                on_page_patterns: "Focus on 'Luxurious Miami Pet Resort', 'Vacation Destination', 'Colorado-themed', 'Resort-style boarding', 'Doggy Daycare', 'Training', 'Grooming'. Emphasizes exceptional amenities: 'luxurious resort room suites', 'outdoor play areas', 'doggy swimming pool', 'splash pad', 'webcam access'. Highlights convenience (near Miami International Airport), active pet lifestyle, and emergency services via sister location (Doral Centre Animal Hospital).",
                schema: "Likely LocalBusiness schema, possibly PetStore or AnimalShelter schema.",
                internal_linking: "Links to team, pet spa services, Doral Centre Animal Hospital, dog boarding accommodations, grooming gallery, pet day care, pet behavioral training.",
                ctas: "Prominent 'Learn more about Boarding', 'Learn more about Grooming', 'Learn more about Day Care', 'Learn more about Training', 'Contact Doral Centre' button.",
                e_e_a_t_signals: "Branded as 'Miami's Premier Pet Resort', video showcasing facility, accessibility features (ADA compliant), sister location for emergency services, webcam access for pet monitoring, detailed service descriptions, Facebook presence."
            }
        }
    };

    const processor = new NicheProcessor();
    const report = await processor.processNiche(
        nicheName,
        luxuryPetBoardingData.keywords,
        luxuryPetBoardingData.serp_data,
        luxuryPetBoardingData.competitor_audit
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

processLuxuryPetBoarding().catch(console.error);

