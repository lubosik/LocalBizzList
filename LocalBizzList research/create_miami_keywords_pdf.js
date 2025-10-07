const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function createMiamiOnlyPDF() {
    try {
        const nichesDir = './outputs/niches';
        const files = fs.readdirSync(nichesDir).filter(file => file.endsWith('.json'));
        
        const miamiNicheData = [];
        
        // Extract Miami keywords from all niche files
        files.forEach(file => {
            try {
                const filePath = path.join(nichesDir, file);
                const rawData = fs.readFileSync(filePath, 'utf8');
                const data = JSON.parse(rawData);
                
                // Extract Miami-specific keywords
                const miamiKeywords = [];
                
                // Get keywords from miami_queries array
                if (data.miami_queries) {
                    data.miami_queries.forEach(query => {
                        if (query.toLowerCase().includes('miami')) {
                            miamiKeywords.push({
                                keyword: query,
                                source: 'miami_queries'
                            });
                        }
                    });
                }
                
                // Get keywords from top_keywords array that contain Miami
                if (data.keyword_metrics && data.keyword_metrics.top_keywords) {
                    data.keyword_metrics.top_keywords.forEach(kw => {
                        if (kw.keyword && kw.keyword.toLowerCase().includes('miami')) {
                            miamiKeywords.push({
                                keyword: kw.keyword,
                                search_volume: kw.search_volume || 0,
                                cpc: kw.cpc || 0,
                                competition: kw.competition || 'UNKNOWN',
                                intent: kw.intent || 'UNKNOWN',
                                source: 'top_keywords'
                            });
                        }
                    });
                }
                
                // Get keywords from keyword_metrics.top_keywords directly
                if (data.keyword_metrics && data.keyword_metrics.top_keywords) {
                    data.keyword_metrics.top_keywords.forEach(kw => {
                        if (kw.keyword && kw.keyword.toLowerCase().includes('miami')) {
                            miamiKeywords.push({
                                keyword: kw.keyword,
                                search_volume: kw.search_volume || 0,
                                cpc: kw.cpc || 0,
                                competition: kw.competition || 'UNKNOWN',
                                intent: kw.intent || 'UNKNOWN',
                                source: 'keyword_metrics'
                            });
                        }
                    });
                }
                
                if (miamiKeywords.length > 0) {
                    miamiNicheData.push({
                        niche: data.niche || data.niche_name || 'Unknown Niche',
                        slug: data.slug || file.replace('.json', ''),
                        miami_keywords: miamiKeywords,
                        rankability_score: data.final_scores?.rankability_score || 0,
                        demand_score: data.final_scores?.demand_score || 0,
                        competition_score: data.final_scores?.competition_score || 0
                    });
                }
                
            } catch (error) {
                console.log(`Skipping ${file}: ${error.message}`);
            }
        });
        
        // Sort by rankability score
        miamiNicheData.sort((a, b) => b.rankability_score - a.rankability_score);
        
        // Create HTML content with only Miami keywords
        const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Miami Niche Research - Miami Keywords Only</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.7;
            color: #1a1a1a;
            background: #ffffff;
            font-size: 14px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 30px;
        }
        
        .header {
            text-align: center;
            margin-bottom: 50px;
            padding: 40px 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .header h1 {
            font-size: 2.5em;
            font-weight: 700;
            margin-bottom: 15px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        .header p {
            font-size: 1.2em;
            opacity: 0.9;
            font-weight: 300;
        }
        
        .miami-badge {
            background: #e74c3c;
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-left: 10px;
        }
        
        h1 {
            color: #2c3e50;
            font-size: 2.2em;
            font-weight: 700;
            margin: 40px 0 25px 0;
            padding-bottom: 15px;
            border-bottom: 3px solid #3498db;
            position: relative;
        }
        
        h1::after {
            content: '';
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 50px;
            height: 3px;
            background: #e74c3c;
        }
        
        h2 {
            color: #34495e;
            font-size: 1.8em;
            font-weight: 600;
            margin: 35px 0 20px 0;
            padding-bottom: 10px;
            border-bottom: 2px solid #ecf0f1;
            position: relative;
        }
        
        h2::before {
            content: '📍';
            margin-right: 10px;
        }
        
        h3 {
            color: #2c3e50;
            font-size: 1.4em;
            font-weight: 600;
            margin: 25px 0 15px 0;
            padding-left: 20px;
            border-left: 4px solid #3498db;
        }
        
        .niche-section {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border-left: 5px solid #3498db;
            padding: 25px;
            margin: 25px 0;
            border-radius: 0 10px 10px 0;
            box-shadow: 0 5px 15px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
        }
        
        .niche-section:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.12);
        }
        
        .niche-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .niche-title {
            font-size: 1.5em;
            font-weight: 700;
            color: #2c3e50;
        }
        
        .niche-score {
            background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: 600;
            font-size: 14px;
        }
        
        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }
        
        .metric-card {
            background: white;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
            text-align: center;
            transition: all 0.3s ease;
            border: 1px solid #e9ecef;
        }
        
        .metric-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(0,0,0,0.15);
        }
        
        .metric-value {
            font-size: 24px;
            font-weight: 700;
            color: #3498db;
            margin-bottom: 5px;
        }
        
        .metric-label {
            font-size: 12px;
            color: #6c757d;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .miami-keywords-list {
            background: white;
            border: 1px solid #dee2e6;
            border-radius: 10px;
            padding: 20px;
            margin: 15px 0;
            box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        
        .keyword-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 0;
            border-bottom: 1px solid #f1f3f4;
            transition: all 0.2s ease;
        }
        
        .keyword-item:hover {
            background: #f8f9fa;
            padding-left: 10px;
        }
        
        .keyword-item:last-child {
            border-bottom: none;
        }
        
        .keyword-text {
            font-weight: 600;
            color: #2c3e50;
            font-size: 15px;
        }
        
        .keyword-metrics {
            display: flex;
            gap: 15px;
            font-size: 12px;
        }
        
        .volume {
            color: #27ae60;
            font-weight: 600;
            background: #d4edda;
            padding: 2px 8px;
            border-radius: 12px;
        }
        
        .cpc {
            color: #e74c3c;
            font-weight: 600;
            background: #f8d7da;
            padding: 2px 8px;
            border-radius: 12px;
        }
        
        .competition {
            color: #f39c12;
            font-weight: 600;
            background: #fff3cd;
            padding: 2px 8px;
            border-radius: 12px;
        }
        
        .summary-stats {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 15px;
            margin: 40px 0;
            text-align: center;
        }
        
        .summary-stats h2 {
            color: white;
            border-bottom: 2px solid rgba(255,255,255,0.3);
            margin-bottom: 20px;
        }
        
        .summary-stats h2::before {
            content: '📊';
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        
        .stat-card {
            background: rgba(255,255,255,0.15);
            padding: 20px;
            border-radius: 10px;
            backdrop-filter: blur(10px);
        }
        
        .stat-value {
            font-size: 2em;
            font-weight: 700;
            margin-bottom: 5px;
        }
        
        .stat-label {
            font-size: 14px;
            opacity: 0.9;
        }
        
        .page-break {
            page-break-before: always;
        }
        
        @media print {
            body {
                margin: 0;
                padding: 15px;
                font-size: 12px;
            }
            
            .container {
                padding: 20px 15px;
            }
            
            .page-break {
                page-break-before: always;
            }
            
            .niche-section {
                page-break-inside: avoid;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Miami Niche Research Analysis<span class="miami-badge">Miami Keywords Only</span></h1>
            <p>Comprehensive SEO Feasibility Study - Miami-Specific Keywords Only</p>
        </div>
        
        <div class="summary-stats">
            <h2>Miami Keywords Summary</h2>
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-value">${miamiNicheData.length}</div>
                    <div class="stat-label">Niches with Miami Keywords</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${miamiNicheData.reduce((total, niche) => total + niche.miami_keywords.length, 0)}</div>
                    <div class="stat-label">Total Miami Keywords</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${miamiNicheData.reduce((total, niche) => total + niche.miami_keywords.reduce((sum, kw) => sum + (kw.search_volume || 0), 0), 0)}</div>
                    <div class="stat-label">Total Search Volume</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">$${miamiNicheData.reduce((total, niche) => total + niche.miami_keywords.reduce((sum, kw) => sum + (kw.cpc || 0), 0), 0).toFixed(2)}</div>
                    <div class="stat-label">Total CPC Value</div>
                </div>
            </div>
        </div>
        
        ${miamiNicheData.map(niche => `
            <div class="niche-section">
                <div class="niche-header">
                    <div class="niche-title">${niche.niche}</div>
                    <div class="niche-score">Score: ${niche.rankability_score}</div>
                </div>
                
                <div class="metrics-grid">
                    <div class="metric-card">
                        <div class="metric-value">${niche.miami_keywords.length}</div>
                        <div class="metric-label">Miami Keywords</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-value">${niche.miami_keywords.reduce((sum, kw) => sum + (kw.search_volume || 0), 0)}</div>
                        <div class="metric-label">Total Volume</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-value">$${niche.miami_keywords.reduce((sum, kw) => sum + (kw.cpc || 0), 0).toFixed(2)}</div>
                        <div class="metric-label">Total CPC</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-value">${niche.rankability_score}</div>
                        <div class="metric-label">Rankability</div>
                    </div>
                </div>
                
                <h3>Miami-Specific Keywords</h3>
                <div class="miami-keywords-list">
                    ${niche.miami_keywords.map(kw => `
                        <div class="keyword-item">
                            <div class="keyword-text">${kw.keyword}</div>
                            <div class="keyword-metrics">
                                ${kw.search_volume ? `<span class="volume">Vol: ${kw.search_volume}</span>` : ''}
                                ${kw.cpc ? `<span class="cpc">CPC: $${kw.cpc}</span>` : ''}
                                ${kw.competition && kw.competition !== 'UNKNOWN' ? `<span class="competition">${kw.competition}</span>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('')}
        
        <div class="page-break"></div>
        
        <h1>Top 3 Miami Niches for Quick Ranking</h1>
        
        ${miamiNicheData.slice(0, 3).map((niche, index) => `
            <div class="niche-section">
                <div class="niche-header">
                    <div class="niche-title">#${index + 1}: ${niche.niche}</div>
                    <div class="niche-score">Score: ${niche.rankability_score}</div>
                </div>
                
                <h3>Why This Niche?</h3>
                <ul>
                    <li><strong>High Rankability Score:</strong> ${niche.rankability_score}/100 - Excellent opportunity for quick ranking</li>
                    <li><strong>Miami Keywords:</strong> ${niche.miami_keywords.length} targeted local keywords</li>
                    <li><strong>Search Volume:</strong> ${niche.miami_keywords.reduce((sum, kw) => sum + (kw.search_volume || 0), 0)} total monthly searches</li>
                    <li><strong>CPC Value:</strong> $${niche.miami_keywords.reduce((sum, kw) => sum + (kw.cpc || 0), 0).toFixed(2)} total CPC value</li>
                </ul>
                
                <h3>Top Miami Keywords to Target</h3>
                <div class="miami-keywords-list">
                    ${niche.miami_keywords.slice(0, 10).map(kw => `
                        <div class="keyword-item">
                            <div class="keyword-text">${kw.keyword}</div>
                            <div class="keyword-metrics">
                                ${kw.search_volume ? `<span class="volume">Vol: ${kw.search_volume}</span>` : ''}
                                ${kw.cpc ? `<span class="cpc">CPC: $${kw.cpc}</span>` : ''}
                                ${kw.competition && kw.competition !== 'UNKNOWN' ? `<span class="competition">${kw.competition}</span>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <h3>Week 1 Action Plan</h3>
                <ul>
                    <li>Create landing page targeting "${niche.miami_keywords[0]?.keyword || 'primary keyword'}"</li>
                    <li>Set up Google My Business for Miami location</li>
                    <li>Create content targeting top 5 Miami keywords</li>
                    <li>Build local citations in Miami directories</li>
                    <li>Start link building with Miami-based businesses</li>
                </ul>
            </div>
        `).join('')}
    </div>
</body>
</html>`;

        // Launch browser and create PDF
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
        
        const pdfPath = '/Users/ghost/Downloads/Miami_Niche_Research_Miami_Keywords_Only.pdf';
        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '15mm',
                right: '12mm',
                bottom: '15mm',
                left: '12mm'
            },
            displayHeaderFooter: true,
            headerTemplate: '<div style="font-size: 9px; text-align: center; width: 100%; color: #666; font-family: Inter, sans-serif;">Miami Niche Research - Miami Keywords Only</div>',
            footerTemplate: '<div style="font-size: 9px; text-align: center; width: 100%; color: #666; font-family: Inter, sans-serif;">Page <span class="pageNumber"></span> of <span class="totalPages"></span> | Generated: ' + new Date().toLocaleDateString() + '</div>'
        });
        
        await browser.close();
        
        console.log(`✅ Miami Keywords Only PDF created at: ${pdfPath}`);
        console.log(`📄 File size: ${(fs.statSync(pdfPath).size / 1024 / 1024).toFixed(2)} MB`);
        console.log(`📊 Total niches with Miami keywords: ${miamiNicheData.length}`);
        console.log(`🔍 Total Miami keywords: ${miamiNicheData.reduce((total, niche) => total + niche.miami_keywords.length, 0)}`);
        
    } catch (error) {
        console.error('❌ Error creating Miami keywords PDF:', error);
    }
}

createMiamiOnlyPDF();
