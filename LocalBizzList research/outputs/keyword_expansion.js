// Keyword Expansion Script for South Florida SEO Feasibility Study
// Generates comprehensive keyword lists for all 20 niches

const niches = [
  "Mold Remediation Services",
  "Smart Outdoor Lighting Solutions", 
  "Preventative Mold Treatment Services",
  "Yacht Maintenance and Repair Services",
  "Yacht and Jet Detailing Services",
  "Cybersecurity integration with smart home security",
  "Custom Smart Wine Cellars",
  "Non-Surgical Rhinoplasty Options",
  "Smart Home Installation",
  "Specialized Family Office Concierge Services",
  "Digital Estate Planning and Online Will Services",
  "Tax Advisory for Cryptocurrency and Digital Assets",
  "Niche Tax Advisory for Real Estate Investors",
  "Digital Estate Planning Services",
  "Specialized Elder Law Consulting",
  "Metal Roof Maintenance and Inspection Services",
  "Roofing Inspection and Maintenance Plans",
  "Outdoor kitchen design consultation and customization services",
  "High-tech smart home remodeling",
  "Pool Automation and Smart Pool Technology Installations"
];

const cities = ["Miami", "Fort Lauderdale", "Boca Raton", "West Palm Beach"];

// Generate comprehensive keyword variations for each niche
function generateKeywordsForNiche(niche, cities) {
  const keywords = [];
  
  // Base variations
  const baseVariations = [
    niche,
    niche.toLowerCase(),
    niche.replace(/Services?/g, "").trim(),
    niche.replace(/Services?/g, "Company").trim(),
    niche.replace(/Services?/g, "Contractor").trim(),
    niche.replace(/Services?/g, "Professional").trim()
  ];
  
  // Intent variations
  const intentModifiers = {
    commercial: ["cost", "price", "quote", "estimate", "rates", "pricing", "affordable", "cheap", "budget"],
    local: ["near me", "local", "in my area", "close to me", "nearby"],
    informational: ["how to", "what is", "guide", "tips", "best practices", "checklist", "vs", "comparison"],
    emergency: ["emergency", "urgent", "same day", "24/7", "immediate", "fast", "quick"],
    quality: ["best", "top", "professional", "licensed", "certified", "experienced", "reliable", "trusted"]
  };
  
  // Generate combinations
  baseVariations.forEach(base => {
    // Add city-specific variations
    cities.forEach(city => {
      keywords.push({
        keyword: `${base} ${city}`,
        intent: "Local",
        priority: "High",
        city: city
      });
      
      keywords.push({
        keyword: `${base} near me ${city}`,
        intent: "Local", 
        priority: "High",
        city: city
      });
    });
    
    // Add commercial intent variations
    intentModifiers.commercial.forEach(modifier => {
      keywords.push({
        keyword: `${base} ${modifier}`,
        intent: "Commercial",
        priority: "High",
        city: "All"
      });
      
      cities.forEach(city => {
        keywords.push({
          keyword: `${base} ${modifier} ${city}`,
          intent: "Commercial",
          priority: "High", 
          city: city
        });
      });
    });
    
    // Add local intent variations
    intentModifiers.local.forEach(modifier => {
      keywords.push({
        keyword: `${base} ${modifier}`,
        intent: "Local",
        priority: "High",
        city: "All"
      });
    });
    
    // Add informational intent variations
    intentModifiers.informational.forEach(modifier => {
      keywords.push({
        keyword: `${modifier} ${base}`,
        intent: "Informational",
        priority: "Medium",
        city: "All"
      });
    });
    
    // Add emergency variations for relevant niches
    if (niche.includes("Mold") || niche.includes("Emergency") || niche.includes("Repair")) {
      intentModifiers.emergency.forEach(modifier => {
        keywords.push({
          keyword: `${modifier} ${base}`,
          intent: "Commercial",
          priority: "High",
          city: "All"
        });
        
        cities.forEach(city => {
          keywords.push({
            keyword: `${modifier} ${base} ${city}`,
            intent: "Commercial",
            priority: "High",
            city: city
          });
        });
      });
    }
    
    // Add quality variations
    intentModifiers.quality.forEach(modifier => {
      keywords.push({
        keyword: `${modifier} ${base}`,
        intent: "Commercial",
        priority: "Medium",
        city: "All"
      });
    });
  });
  
  // Add specific service variations based on niche
  addNicheSpecificKeywords(niche, keywords, cities);
  
  return keywords;
}

function addNicheSpecificKeywords(niche, keywords, cities) {
  const nicheSpecific = {
    "Mold Remediation Services": [
      "black mold removal", "toxic mold cleanup", "mold inspection", "mold testing",
      "water damage mold", "basement mold removal", "attic mold remediation"
    ],
    "Smart Outdoor Lighting Solutions": [
      "LED landscape lighting", "smart security lights", "motion sensor lights",
      "solar outdoor lighting", "smart garden lights", "outdoor smart bulbs"
    ],
    "Yacht Maintenance and Repair Services": [
      "yacht engine repair", "marine maintenance", "boat detailing", "yacht cleaning",
      "marine electrical", "yacht painting", "marine plumbing"
    ],
    "Smart Home Installation": [
      "smart thermostat installation", "home automation setup", "smart security system",
      "smart lighting installation", "home theater installation", "smart door locks"
    ],
    "Pool Automation and Smart Pool Technology Installations": [
      "smart pool pump", "automated pool cleaning", "smart pool heater",
      "pool automation system", "smart pool lights", "automated pool cover"
    ]
  };
  
  if (nicheSpecific[niche]) {
    nicheSpecific[niche].forEach(specific => {
      keywords.push({
        keyword: specific,
        intent: "Commercial",
        priority: "High",
        city: "All"
      });
      
      cities.forEach(city => {
        keywords.push({
          keyword: `${specific} ${city}`,
          intent: "Local",
          priority: "High",
          city: city
        });
      });
    });
  }
}

// Generate keywords for all niches
const allKeywords = {};

niches.forEach(niche => {
  const slug = niche.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '_');
  
  allKeywords[slug] = {
    niche: niche,
    keywords: generateKeywordsForNiche(niche, cities)
  };
});

// Export the results
console.log("Generated keywords for all niches:");
Object.keys(allKeywords).forEach(slug => {
  console.log(`\n${allKeywords[slug].niche}: ${allKeywords[slug].keywords.length} keywords`);
});

module.exports = { allKeywords, niches, cities };
