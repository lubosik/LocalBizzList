const fs = require('fs');

// Read the dashboard.json file
const dashboardData = JSON.parse(fs.readFileSync('./public/dashboard.json', 'utf8'));

// Read the HTML file
let htmlContent = fs.readFileSync('./index.html', 'utf8');

// Find and replace the entire loadData function with a simple version
const loadDataStart = htmlContent.indexOf('async function loadData() {');
const loadDataEnd = htmlContent.indexOf('}', loadDataStart) + 1;

// Find the next function to get the proper end
let braceCount = 0;
let currentPos = loadDataStart;
while (currentPos < htmlContent.length) {
    if (htmlContent[currentPos] === '{') braceCount++;
    if (htmlContent[currentPos] === '}') braceCount--;
    if (braceCount === 0) {
        loadDataEnd = currentPos + 1;
        break;
    }
    currentPos++;
}

// Create a simple loadData function
const simpleLoadData = `async function loadData() {
    try {
        // Use embedded data directly
        const data = ${JSON.stringify(dashboardData, null, 8)};
        nichesData = data.niches || [];
        filteredData = [...nichesData];
        initializeDashboard();
    } catch (error) {
        console.error('Error loading data:', error);
        document.getElementById('niches-tbody').innerHTML = 
            '<tr><td colspan="12" class="error">Failed to load data.</td></tr>';
    }
}`;

// Replace the loadData function
const beforeLoadData = htmlContent.substring(0, loadDataStart);
const afterLoadData = htmlContent.substring(loadDataEnd);

htmlContent = beforeLoadData + simpleLoadData + afterLoadData;

// Write the updated HTML file
fs.writeFileSync('./index.html', htmlContent);
console.log('Successfully simplified loadData function');
console.log(`Data contains ${dashboardData.niches.length} niches`);
