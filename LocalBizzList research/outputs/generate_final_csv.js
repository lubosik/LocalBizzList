// Generate final CSV with all niche results
const fs = require('fs');
const path = require('path');

function generateFinalCSV() {
    const nichesDir = path.join(__dirname, 'niches');
    const files = fs.readdirSync(nichesDir).filter(file => file.endsWith('.json'));
    
    const results = [];
    
    files.forEach(file => {
        const filePath = path.join(nichesDir, file);
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        
        results.push({
            rank: 0, // Will be set after sorting
            niche_name: data.name,
            rankability_score: data.scores.total,
            demand_score: data.scores.subScores.demand,
            competition_score: data.scores.subScores.competition,
            local_pack_score: data.scores.subScores.localPack,
            content_gap_score: data.scores.subScores.contentGap,
            seasonality_score: data.scores.subScores.seasonality,
            total_keywords: data.summary.totalKeywords,
            average_volume: data.summary.averageVolume,
            average_cpc: data.summary.averageCPC,
            verdict: data.summary.verdict,
            ease_of_ranking: data.scores.total >= 70 ? 'EASY' : data.scores.total >= 50 ? 'MODERATE' : 'HARD',
            key_strengths: data.summary.keyStrengths.join('; '),
            key_weaknesses: data.summary.keyWeaknesses.join('; '),
            recommendations: data.recommendations.join('; ')
        });
    });
    
    // Sort by rankability score (descending)
    results.sort((a, b) => b.rankability_score - a.rankability_score);
    
    // Set ranks
    results.forEach((result, index) => {
        result.rank = index + 1;
    });
    
    // Generate CSV
    const headers = [
        'Rank',
        'Niche Name',
        'Rankability Score',
        'Demand Score',
        'Competition Score',
        'Local Pack Score',
        'Content Gap Score',
        'Seasonality Score',
        'Total Keywords',
        'Average Volume',
        'Average CPC',
        'Verdict',
        'Ease of Ranking',
        'Key Strengths',
        'Key Weaknesses',
        'Recommendations'
    ];
    
    const csvRows = [headers.join(',')];
    
    results.forEach(result => {
        const row = [
            result.rank,
            `"${result.niche_name}"`,
            result.rankability_score,
            result.demand_score,
            result.competition_score,
            result.local_pack_score,
            result.content_gap_score,
            result.seasonality_score,
            result.total_keywords,
            result.average_volume,
            result.average_cpc,
            result.verdict,
            result.ease_of_ranking,
            `"${result.key_strengths}"`,
            `"${result.key_weaknesses}"`,
            `"${result.recommendations}"`
        ];
        csvRows.push(row.join(','));
    });
    
    const csvContent = csvRows.join('\n');
    const csvPath = path.join(__dirname, 'final_niche_rankings.csv');
    
    fs.writeFileSync(csvPath, csvContent);
    
    console.log('✅ Final CSV generated successfully!');
    console.log(`📁 Saved to: ${csvPath}`);
    console.log(`📊 Total niches processed: ${results.length}`);
    
    // Show top 5
    console.log('\n🏆 Top 5 Niches by Rankability Score:');
    results.slice(0, 5).forEach(result => {
        console.log(`${result.rank}. ${result.niche_name} - ${result.rankability_score}/100 (${result.ease_of_ranking})`);
    });
    
    return results;
}

generateFinalCSV();
