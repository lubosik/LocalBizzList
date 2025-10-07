const fs = require('fs');

// Read the dashboard.json file
const dashboardData = JSON.parse(fs.readFileSync('./public/dashboard.json', 'utf8'));

// Read the HTML file
let htmlContent = fs.readFileSync('./index.html', 'utf8');

// Find the catch block and replace it with embedded data
const catchStart = htmlContent.indexOf('} catch (error) {');
const catchEnd = htmlContent.indexOf('console.error(\'Error loading data:\', error);');

if (catchStart !== -1 && catchEnd !== -1) {
    // Find the end of the catch block
    const catchBlockEnd = htmlContent.indexOf('}', catchEnd);
    
    // Create the embedded data fallback
    const embeddedData = `
                // Fallback: Use embedded data
                console.log('Using embedded dashboard data');
                const data = ${JSON.stringify(dashboardData, null, 16)};
                nichesData = data.niches || [];
                filteredData = [...nichesData];
                initializeDashboard();`;
    
    // Replace the catch block content
    const beforeCatch = htmlContent.substring(0, catchEnd);
    const afterCatch = htmlContent.substring(catchBlockEnd + 1);
    
    htmlContent = beforeCatch + embeddedData + afterCatch;
    
    // Write the updated HTML file
    fs.writeFileSync('./index.html', htmlContent);
    console.log('Successfully embedded dashboard data in HTML file');
    console.log(`Embedded ${dashboardData.niches.length} niches`);
} else {
    console.log('Could not find catch block to replace');
}
