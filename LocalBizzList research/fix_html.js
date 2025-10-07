const fs = require('fs');

// Read the HTML file
let htmlContent = fs.readFileSync('./index.html', 'utf8');

// Find the start of the embedded data (after the catch block)
const catchStart = htmlContent.indexOf('} catch (error) {');
const catchEnd = htmlContent.indexOf('console.error(\'Error loading data:\', error);');
const embeddedStart = htmlContent.indexOf('// Try to load data directly from the JSON structure');
const embeddedEnd = htmlContent.indexOf('} catch (fallbackError) {');

if (embeddedStart !== -1 && embeddedEnd !== -1) {
    // Find the end of the fallback catch block
    const fallbackEnd = htmlContent.indexOf('}', embeddedEnd);
    const nextBrace = htmlContent.indexOf('}', fallbackEnd + 1);
    
    // Replace the entire embedded data section with a simple error message
    const beforeEmbedded = htmlContent.substring(0, embeddedStart);
    const afterEmbedded = htmlContent.substring(nextBrace + 1);
    
    const newErrorHandling = `                document.getElementById('niches-tbody').innerHTML = 
                    '<tr><td colspan="12" class="error">Failed to load data. Please check if dashboard.json exists.</td></tr>';`;
    
    htmlContent = beforeEmbedded + newErrorHandling + afterEmbedded;
    
    // Write the updated HTML file
    fs.writeFileSync('./index.html', htmlContent);
    console.log('Successfully removed embedded data from HTML file');
} else {
    console.log('Could not find embedded data section');
}
