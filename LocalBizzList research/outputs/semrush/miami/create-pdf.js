const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function htmlToPdf() {
    try {
        // Read the HTML file
        const htmlPath = path.join(__dirname, 'South-Florida-High-Ticket-Niche-Report.html');
        const htmlContent = fs.readFileSync(htmlPath, 'utf8');
        
        // Launch browser
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        
        // Set content
        await page.setContent(htmlContent, {
            waitUntil: 'networkidle0'
        });
        
        // Generate PDF
        const pdfPath = path.join(__dirname, 'South-Florida-High-Ticket-Niche-Report.pdf');
        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '20mm',
                right: '20mm',
                bottom: '20mm',
                left: '20mm'
            }
        });
        
        await browser.close();
        
        console.log(`PDF created successfully: ${pdfPath}`);
        
    } catch (error) {
        console.error('Error creating PDF:', error);
    }
}

htmlToPdf();
