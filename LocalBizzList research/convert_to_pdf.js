const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function convertMarkdownToPDF() {
    try {
        // Read the markdown file
        const markdownContent = fs.readFileSync('/Users/ghost/Downloads/Miami_Niche_Research_Complete_Analysis.md', 'utf8');
        
        // Convert markdown to HTML
        const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Miami Niche Research Complete Analysis</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: white;
        }
        
        h1 {
            color: #2c3e50;
            border-bottom: 3px solid #3498db;
            padding-bottom: 10px;
            margin-top: 30px;
        }
        
        h2 {
            color: #34495e;
            border-bottom: 2px solid #ecf0f1;
            padding-bottom: 8px;
            margin-top: 25px;
        }
        
        h3 {
            color: #2c3e50;
            margin-top: 20px;
        }
        
        h4 {
            color: #7f8c8d;
            margin-top: 15px;
        }
        
        .niche-section {
            background: #f8f9fa;
            border-left: 4px solid #3498db;
            padding: 15px;
            margin: 20px 0;
            border-radius: 0 5px 5px 0;
        }
        
        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin: 15px 0;
        }
        
        .metric-card {
            background: white;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            text-align: center;
        }
        
        .metric-value {
            font-size: 24px;
            font-weight: bold;
            color: #3498db;
        }
        
        .metric-label {
            font-size: 14px;
            color: #7f8c8d;
            margin-top: 5px;
        }
        
        .keyword-list {
            background: white;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 15px;
            margin: 10px 0;
        }
        
        .keyword-item {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid #ecf0f1;
        }
        
        .keyword-item:last-child {
            border-bottom: none;
        }
        
        .competitor-list {
            background: white;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 15px;
            margin: 10px 0;
        }
        
        .competitor-item {
            padding: 10px 0;
            border-bottom: 1px solid #ecf0f1;
        }
        
        .competitor-item:last-child {
            border-bottom: none;
        }
        
        .competitor-domain {
            font-weight: bold;
            color: #2c3e50;
        }
        
        .competitor-rating {
            color: #27ae60;
            font-weight: bold;
        }
        
        .top-3-section {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 10px;
            margin: 30px 0;
        }
        
        .top-3-section h2 {
            color: white;
            border-bottom: 2px solid rgba(255,255,255,0.3);
        }
        
        .recommendation-card {
            background: rgba(255,255,255,0.1);
            padding: 20px;
            border-radius: 8px;
            margin: 15px 0;
            backdrop-filter: blur(10px);
        }
        
        .recommendation-title {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        
        .strategy-list {
            background: white;
            border-radius: 5px;
            padding: 15px;
            margin: 10px 0;
        }
        
        .strategy-list li {
            margin: 8px 0;
        }
        
        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .comparison-table th {
            background: #3498db;
            color: white;
            padding: 15px;
            text-align: left;
            font-weight: bold;
        }
        
        .comparison-table td {
            padding: 12px 15px;
            border-bottom: 1px solid #ecf0f1;
        }
        
        .comparison-table tr:nth-child(even) {
            background: #f8f9fa;
        }
        
        .comparison-table tr:hover {
            background: #e8f4f8;
        }
        
        .score-high {
            color: #27ae60;
            font-weight: bold;
        }
        
        .score-medium {
            color: #f39c12;
            font-weight: bold;
        }
        
        .score-low {
            color: #e74c3c;
            font-weight: bold;
        }
        
        .page-break {
            page-break-before: always;
        }
        
        @media print {
            body {
                margin: 0;
                padding: 15px;
            }
            
            .page-break {
                page-break-before: always;
            }
        }
    </style>
</head>
<body>
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
        .replace(/`(.+?)`/g, '<code>$1</code>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/^(?!<[h1-4]|<div|<li|<table|<tr|<td|<th)(.+)$/gm, '<p>$1</p>')
    }
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
        
        // Generate PDF
        const pdfPath = '/Users/ghost/Downloads/Miami_Niche_Research_Complete_Analysis.pdf';
        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '20mm',
                right: '15mm',
                bottom: '20mm',
                left: '15mm'
            },
            displayHeaderFooter: true,
            headerTemplate: '<div style="font-size: 10px; text-align: center; width: 100%; color: #666;">Miami Niche Research Complete Analysis</div>',
            footerTemplate: '<div style="font-size: 10px; text-align: center; width: 100%; color: #666;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>'
        });
        
        await browser.close();
        
        console.log(`✅ PDF successfully created at: ${pdfPath}`);
        console.log(`📄 File size: ${(fs.statSync(pdfPath).size / 1024 / 1024).toFixed(2)} MB`);
        
    } catch (error) {
        console.error('❌ Error creating PDF:', error);
    }
}

convertMarkdownToPDF();
