const puppeteer = require('puppeteer');
const fs = require('fs');

async function createEnhancedPDF() {
    try {
        // Read the markdown file
        const markdownContent = fs.readFileSync('/Users/ghost/Downloads/Miami_Niche_Research_Complete_Analysis.md', 'utf8');
        
        // Enhanced HTML with better styling and structure
        const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Miami Niche Research Complete Analysis</title>
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
            content: '▶';
            color: #3498db;
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
        
        h4 {
            color: #7f8c8d;
            font-size: 1.2em;
            font-weight: 500;
            margin: 20px 0 10px 0;
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
        
        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        
        .metric-card {
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            text-align: center;
            transition: all 0.3s ease;
            border: 1px solid #e9ecef;
        }
        
        .metric-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        
        .metric-value {
            font-size: 28px;
            font-weight: 700;
            color: #3498db;
            margin-bottom: 8px;
        }
        
        .metric-label {
            font-size: 13px;
            color: #6c757d;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .keyword-list {
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
            font-weight: 500;
            color: #2c3e50;
        }
        
        .keyword-metrics {
            display: flex;
            gap: 15px;
            font-size: 13px;
        }
        
        .volume {
            color: #27ae60;
            font-weight: 600;
        }
        
        .cpc {
            color: #e74c3c;
            font-weight: 600;
        }
        
        .competitor-list {
            background: white;
            border: 1px solid #dee2e6;
            border-radius: 10px;
            padding: 20px;
            margin: 15px 0;
            box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        
        .competitor-item {
            padding: 15px 0;
            border-bottom: 1px solid #f1f3f4;
            transition: all 0.2s ease;
        }
        
        .competitor-item:hover {
            background: #f8f9fa;
            padding-left: 10px;
        }
        
        .competitor-item:last-child {
            border-bottom: none;
        }
        
        .competitor-domain {
            font-weight: 600;
            color: #2c3e50;
            font-size: 16px;
            margin-bottom: 5px;
        }
        
        .competitor-rating {
            color: #27ae60;
            font-weight: 600;
            background: #d4edda;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 12px;
        }
        
        .competitor-strengths {
            margin-top: 8px;
            font-size: 13px;
            color: #6c757d;
        }
        
        .top-3-section {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px;
            border-radius: 15px;
            margin: 40px 0;
            box-shadow: 0 15px 35px rgba(0,0,0,0.2);
        }
        
        .top-3-section h2 {
            color: white;
            border-bottom: 2px solid rgba(255,255,255,0.3);
            font-size: 2em;
            margin-bottom: 30px;
        }
        
        .top-3-section h2::before {
            content: '🏆';
            margin-right: 10px;
        }
        
        .recommendation-card {
            background: rgba(255,255,255,0.15);
            padding: 25px;
            border-radius: 12px;
            margin: 20px 0;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
        }
        
        .recommendation-title {
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 15px;
            color: #fff;
        }
        
        .recommendation-score {
            background: rgba(255,255,255,0.2);
            padding: 8px 15px;
            border-radius: 20px;
            font-weight: 600;
            display: inline-block;
            margin-bottom: 15px;
        }
        
        .strategy-list {
            background: rgba(255,255,255,0.1);
            border-radius: 8px;
            padding: 20px;
            margin: 15px 0;
        }
        
        .strategy-list li {
            margin: 10px 0;
            padding-left: 10px;
        }
        
        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 25px 0;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .comparison-table th {
            background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
            color: white;
            padding: 18px 15px;
            text-align: left;
            font-weight: 600;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .comparison-table td {
            padding: 15px;
            border-bottom: 1px solid #f1f3f4;
            font-size: 13px;
        }
        
        .comparison-table tr:nth-child(even) {
            background: #f8f9fa;
        }
        
        .comparison-table tr:hover {
            background: #e8f4f8;
        }
        
        .score-high {
            color: #27ae60;
            font-weight: 700;
            background: #d4edda;
            padding: 4px 8px;
            border-radius: 6px;
        }
        
        .score-medium {
            color: #f39c12;
            font-weight: 700;
            background: #fff3cd;
            padding: 4px 8px;
            border-radius: 6px;
        }
        
        .score-low {
            color: #e74c3c;
            font-weight: 700;
            background: #f8d7da;
            padding: 4px 8px;
            border-radius: 6px;
        }
        
        .page-break {
            page-break-before: always;
        }
        
        .toc {
            background: #f8f9fa;
            padding: 25px;
            border-radius: 10px;
            margin: 30px 0;
            border-left: 4px solid #3498db;
        }
        
        .toc h3 {
            color: #2c3e50;
            margin-bottom: 15px;
            border-left: none;
            padding-left: 0;
        }
        
        .toc ul {
            list-style: none;
        }
        
        .toc li {
            margin: 8px 0;
            padding-left: 20px;
            position: relative;
        }
        
        .toc li::before {
            content: '•';
            color: #3498db;
            position: absolute;
            left: 0;
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
            <h1>Miami Niche Research Complete Analysis</h1>
            <p>Comprehensive SEO Feasibility Study for 36 High-Potential Local Business Niches</p>
        </div>
        
        ${markdownContent
            .replace(/^# (.+)$/gm, '<h1>$1</h1>')
            .replace(/^## (.+)$/gm, '<h2>$1</h2>')
            .replace(/^### (.+)$/gm, '<h3>$1</h3>')
            .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
            .replace(/^\*\*(.+?)\*\*: (.+)$/gm, '<div class="metric-card"><div class="metric-value">$2</div><div class="metric-label">$1</div></div>')
            .replace(/^\* (.+)$/gm, '<li>$1</li>')
            .replace(/^\- (.+)$/gm, '<li>$1</li>')
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.+?)\*/g, '<em>$1</em>')
            .replace(/`(.+?)`/g, '<code style="background: #f1f3f4; padding: 2px 6px; border-radius: 4px; font-family: monospace;">$1</code>')
            .replace(/\n\n/g, '</p><p>')
            .replace(/^(?!<[h1-4]|<div|<li|<table|<tr|<td|<th)(.+)$/gm, '<p>$1</p>')
        }
    </div>
</body>
</html>`;

        // Launch browser
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        
        // Set content and wait for it to load
        await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
        
        // Generate enhanced PDF
        const pdfPath = '/Users/ghost/Downloads/Miami_Niche_Research_Enhanced_Analysis.pdf';
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
            headerTemplate: '<div style="font-size: 9px; text-align: center; width: 100%; color: #666; font-family: Inter, sans-serif;">Miami Niche Research Complete Analysis</div>',
            footerTemplate: '<div style="font-size: 9px; text-align: center; width: 100%; color: #666; font-family: Inter, sans-serif;">Page <span class="pageNumber"></span> of <span class="totalPages"></span> | Generated: ' + new Date().toLocaleDateString() + '</div>'
        });
        
        await browser.close();
        
        console.log(`✅ Enhanced PDF successfully created at: ${pdfPath}`);
        console.log(`📄 File size: ${(fs.statSync(pdfPath).size / 1024 / 1024).toFixed(2)} MB`);
        
    } catch (error) {
        console.error('❌ Error creating enhanced PDF:', error);
    }
}

createEnhancedPDF();
