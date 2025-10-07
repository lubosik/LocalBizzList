// Generate Master Outputs: CSV Comparison, Top-3 Summary, and update Dashboard
const fs = require('fs');
const path = require('path');

// Read all niche reports
const nichesDir = path.join(__dirname, 'niches');
const nicheFiles = fs.readdirSync(nichesDir).filter(f => f.endsWith('.json'));

const niches = nicheFiles.map(file => {
    const data = JSON.parse(fs.readFileSync(path.join(nichesDir, file), 'utf8'));
    return data;
}).sort((a, b) => b.scores.total - a.scores.total); // Sort by Rankability Score descending

console.log(`📊 Loaded ${niches.length} niche reports\n`);

// Generate Master CSV
const csvHeader = [
    'Rank',
    'Niche Name',
    'Rankability Score',
    'Ease of Ranking #1',
    'Demand Score',
    'Competition Score',
    'Local Pack Score',
    'Content Gap Score',
    'Seasonality Score',
    'Avg Search Volume',
    'Avg CPC',
    'Total Keywords',
    'Verdict'
].join(',');

const csvRows = niches.map((niche, index) => {
    const easeOfRanking = niche.scores.total >= 70 ? 'EASY' : 
                          niche.scores.total >= 50 ? 'MEDIUM' : 'HARD';
    
    return [
        index + 1,
        `"${niche.name}"`,
        niche.scores.total,
        easeOfRanking,
        niche.scores.subScores.demand,
        niche.scores.subScores.competition,
        niche.scores.subScores.localPack,
        niche.scores.subScores.contentGap,
        niche.scores.subScores.seasonality,
        niche.summary.averageVolume,
        niche.summary.averageCPC,
        niche.summary.totalKeywords,
        niche.summary.verdict
    ].join(',');
});

const csv = [csvHeader, ...csvRows].join('\n');
fs.writeFileSync(path.join(__dirname, 'master_comparison.csv'), csv);
console.log('✅ Generated master_comparison.csv\n');

// Generate Top-3 Summary with 90-day content plans
const top3 = niches.slice(0, 3);
let top3Summary = '# Top 3 Niches - SEO Feasibility Study\n\n';
top3Summary += `**Analysis Date:** ${new Date().toLocaleDateString()}\n`;
top3Summary += `**Location Focus:** South Florida (Miami, Fort Lauderdale, Boca Raton, West Palm Beach)\n\n`;
top3Summary += '---\n\n';

top3.forEach((niche, index) => {
    const easeOfRanking = niche.scores.total >= 70 ? 'EASY ✅' : 
                          niche.scores.total >= 50 ? 'MEDIUM ⚠️' : 'HARD ❌';
    
    top3Summary += `## ${index + 1}. ${niche.name}\n\n`;
    top3Summary += `**Rankability Score:** ${niche.scores.total}/100\n`;
    top3Summary += `**Ease of Ranking #1:** ${easeOfRanking}\n`;
    top3Summary += `**Verdict:** ${niche.summary.verdict}\n\n`;
    
    top3Summary += '### Key Metrics\n';
    top3Summary += `- **Total Keywords:** ${niche.summary.totalKeywords}\n`;
    top3Summary += `- **Avg Search Volume:** ${niche.summary.averageVolume}/month\n`;
    top3Summary += `- **Avg CPC:** $${niche.summary.averageCPC}\n\n`;
    
    top3Summary += '### Sub-Scores Breakdown\n';
    top3Summary += `- **Demand:** ${niche.scores.subScores.demand}/100\n`;
    top3Summary += `- **Competition:** ${niche.scores.subScores.competition}/100\n`;
    top3Summary += `- **Local Pack Friendliness:** ${niche.scores.subScores.localPack}/100\n`;
    top3Summary += `- **Content Gap & Intent:** ${niche.scores.subScores.contentGap}/100\n`;
    top3Summary += `- **Seasonality/Volatility:** ${niche.scores.subScores.seasonality}/100\n\n`;
    
    top3Summary += '### Why This Niche?\n';
    top3Summary += niche.rationale.why_recommended + '\n\n';
    
    top3Summary += '### Key Strengths\n';
    niche.summary.keyStrengths.forEach(strength => {
        top3Summary += `- ${strength}\n`;
    });
    top3Summary += '\n';
    
    if (niche.summary.keyWeaknesses.length > 0) {
        top3Summary += '### Key Challenges\n';
        niche.summary.keyWeaknesses.forEach(weakness => {
            top3Summary += `- ${weakness}\n`;
        });
        top3Summary += '\n';
    }
    
    top3Summary += '### Recommended Actions\n';
    niche.recommendations.forEach(rec => {
        top3Summary += `- ${rec}\n`;
    });
    top3Summary += '\n';
    
    top3Summary += '### 90-Day Content Plan\n\n';
    top3Summary += '#### Month 1: Foundation\n';
    top3Summary += '- Homepage optimization for target keywords\n';
    top3Summary += '- Create 4 core service pages\n';
    top3Summary += '- Google My Business setup and optimization\n';
    top3Summary += '- Local citation building (top 20 directories)\n';
    top3Summary += '- Publish first pillar content piece\n\n';
    
    top3Summary += '#### Month 2: Content Expansion\n';
    top3Summary += '- 8 cluster content pieces supporting pillar\n';
    top3Summary += '- Create 4 location pages (Miami, Fort Lauderdale, Boca Raton, West Palm Beach)\n';
    top3Summary += '- Build comprehensive FAQ section\n';
    top3Summary += '- Develop 2 case studies or testimonials\n';
    top3Summary += '- Social media setup and first posts\n\n';
    
    top3Summary += '#### Month 3: Optimization & Scaling\n';
    top3Summary += '- Content optimization based on early analytics\n';
    top3Summary += '- Link building campaign (10-15 quality backlinks)\n';
    top3Summary += '- Review generation system setup\n';
    top3Summary += '- Conversion rate optimization\n';
    top3Summary += '- Analytics and tracking setup\n';
    top3Summary += '- Plan for Month 4+ expansion\n\n';
    
    top3Summary += '---\n\n';
});

// Add overall recommendation
top3Summary += '## Overall Recommendation\n\n';
top3Summary += `Based on comprehensive analysis of all 20 niches, we recommend prioritizing **${top3[0].name}** as the primary focus for the South Florida market.\n\n`;
top3Summary += `This niche scored highest (${top3[0].scores.total}/100) due to:\n`;
top3[0].summary.keyStrengths.forEach(strength => {
    top3Summary += `- ${strength}\n`;
});
top3Summary += '\n';
top3Summary += `**Ease of Ranking First on Google:** ${top3[0].scores.total >= 70 ? 'EASY - With focused effort and quality content, ranking #1 is highly achievable within 3-6 months.' : top3[0].scores.total >= 50 ? 'MEDIUM - Requires consistent effort and quality content over 6-12 months to achieve #1 rankings.' : 'HARD - Significant investment in content, authority building, and technical SEO required. Timeline 12+ months for top positions.'}\n\n`;
top3Summary += 'The remaining top niches (' + top3.slice(1).map(n => n.name).join(' and ') + ') can serve as secondary markets or future expansion opportunities.\n';

fs.writeFileSync(path.join(__dirname, 'top_3_summary.md'), top3Summary);
console.log('✅ Generated top_3_summary.md\n');

// Update dashboard data
const dashboardData = {
    timestamp: new Date().toISOString(),
    location: 'South Florida (Miami-Dade, Broward, Palm Beach)',
    totalNiches: niches.length,
    averageScore: Math.round(niches.reduce((sum, n) => sum + n.scores.total, 0) / niches.length),
    top3: top3.map(n => ({
        name: n.name,
        score: n.scores.total,
        verdict: n.summary.verdict,
        easeOfRanking: n.scores.total >= 70 ? 'EASY' : n.scores.total >= 50 ? 'MEDIUM' : 'HARD'
    })),
    allNiches: niches.map(n => ({
        name: n.name,
        slug: n.slug,
        score: n.scores.total,
        subScores: n.scores.subScores,
        summary: n.summary,
        easeOfRanking: n.scores.total >= 70 ? 'EASY' : n.scores.total >= 50 ? 'MEDIUM' : 'HARD'
    }))
};

fs.writeFileSync(path.join(__dirname, 'dashboard_data.json'), JSON.stringify(dashboardData, null, 2));
console.log('✅ Generated dashboard_data.json\n');

console.log('📈 Summary Stats:');
console.log(`   - Total Niches Analyzed: ${niches.length}`);
console.log(`   - Average Rankability Score: ${dashboardData.averageScore}/100`);
console.log(`   - Top Niche: ${top3[0].name} (${top3[0].scores.total}/100)`);
console.log(`   - Easiest to Rank #1: ${niches.filter(n => n.scores.total >= 70).length > 0 ? niches.filter(n => n.scores.total >= 70)[0].name : 'None (all require significant effort)'}`);
console.log(`   - GO Verdict: ${niches.filter(n => n.summary.verdict === 'GO').length} niches`);
console.log(`   - CAUTION Verdict: ${niches.filter(n => n.summary.verdict === 'CAUTION').length} niches`);
console.log(`   - NO-GO Verdict: ${niches.filter(n => n.summary.verdict === 'NO-GO').length} niches`);
console.log('\n✅ All master outputs generated successfully!');

