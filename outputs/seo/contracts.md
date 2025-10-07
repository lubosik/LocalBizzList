# SEO Contracts: Titles, Metas, Schema & Internal Links

## Page Titles & Meta Descriptions

### 1. Global Service Page
**URL:** `/services/restaurant-hood-cleaning/`

**Title (58 chars):**
```
Restaurant Hood Cleaning | NFPA 96 Certified | South Florida
```

**Meta Description (157 chars):**
```
NFPA 96 certified hood cleaning for South Florida restaurants. To-bare-metal degreasing, compliance certificates, 24/7 emergency service. Miami, Boca, Fort Lauderdale.
```

**Focus Keywords:** restaurant hood cleaning, NFPA 96 cleaning, commercial kitchen exhaust cleaning

---

### 2. Miami Location Page
**URL:** `/locations/miami/hood-cleaning/`

**Title (59 chars):**
```
Hood Cleaning Miami | NFPA 96 Certified | 24/7 Emergency Service
```

**Meta Description (159 chars):**
```
Miami's trusted NFPA 96 hood cleaning service. Serving Brickell, Wynwood, Downtown. Same-day emergency, bi-lingual crews, health dept compliance. Call (305) 555-HOOD.
```

**Focus Keywords:** hood cleaning miami, restaurant hood cleaning miami fl, NFPA 96 miami

---

### 3. Boca Raton Location Page
**URL:** `/locations/boca-raton/hood-cleaning/`

**Title (60 chars):**
```
Hood Cleaning Boca Raton | Country Club Certified | NFPA 96 FL
```

**Meta Description (160 chars):**
```
Boca Raton's NFPA 96 hood cleaning experts. Serving country clubs, Mizner Park, luxury hotels. White-glove service, acquisition specialists. Call (561) 555-HOOD.
```

**Focus Keywords:** hood cleaning boca raton, restaurant hood cleaning boca raton fl, NFPA 96 boca

---

### 4. Fort Lauderdale Location Page
**URL:** `/locations/fort-lauderdale/hood-cleaning/`

**Title (60 chars):**
```
Hood Cleaning Fort Lauderdale | Broward Licensed | TWIC Crews
```

**Meta Description (160 chars):**
```
Fort Lauderdale's Broward County licensed hood cleaners. Serving Las Olas, Port Everglades cruise terminals, A1A beach corridor. TWIC-certified. (954) 555-HOOD.
```

**Focus Keywords:** hood cleaning fort lauderdale, restaurant hood cleaning fort lauderdale fl, NFPA 96 broward

---

## JSON-LD Schema Snippets

### 1. Global Service Page Schema

#### Service Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Restaurant Hood Cleaning",
  "provider": {
    "@type": "LocalBusiness",
    "name": "LocalBizzList Hood Cleaning",
    "image": "https://localbizzlist.com/images/logo.png",
    "telephone": "+1-954-555-4663",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "FL",
      "addressCountry": "US"
    }
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Miami",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    },
    {
      "@type": "City",
      "name": "Boca Raton",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    },
    {
      "@type": "City",
      "name": "Fort Lauderdale",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Hood Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "NFPA 96 Hood Cleaning",
          "description": "To-bare-metal cleaning of hoods, ducts, fans per NFPA 96 standard"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Hood Cleaning",
          "description": "24/7 same-day emergency response for grease fires and failed inspections"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Certificate of Performance",
          "description": "NFPA 96 compliant certification for fire marshal and health department inspections"
        }
      }
    ]
  },
  "audience": {
    "@type": "Audience",
    "name": "Commercial Kitchens",
    "description": "Restaurants, hotels, hospitals, country clubs, cruise terminals"
  }
}
```

#### BreadcrumbList Schema (Service Page)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://localbizzlist.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://localbizzlist.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Restaurant Hood Cleaning",
      "item": "https://localbizzlist.com/services/restaurant-hood-cleaning"
    }
  ]
}
```

#### FAQPage Schema (Service Page)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How often does NFPA 96 require hood cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[ANSWER FROM FAQ SECTION - Cursor to populate]"
      }
    },
    {
      "@type": "Question",
      "name": "What's included in to-bare-metal cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[ANSWER FROM FAQ SECTION]"
      }
    },
    {
      "@type": "Question",
      "name": "Can you clean during business hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[ANSWER FROM FAQ SECTION]"
      }
    }
  ]
}
```

---

### 2. Miami Location Page Schema

#### LocalBusiness Schema (Miami)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "LocalBizzList Hood Cleaning - Miami",
  "@id": "https://localbizzlist.com/locations/miami/hood-cleaning",
  "image": "https://localbizzlist.com/images/miami-hood-cleaning.jpg",
  "telephone": "+1-305-555-4663",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Miami",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.7617,
    "longitude": -80.1918
  },
  "url": "https://localbizzlist.com/locations/miami/hood-cleaning",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "areaServed": {
    "@type": "City",
    "name": "Miami",
    "containedInPlace": {
      "@type": "AdministrativeArea",
      "name": "Miami-Dade County"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Miami Hood Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "NFPA 96 Hood Cleaning Miami",
          "areaServed": ["Brickell", "Wynwood", "South Beach", "Downtown Miami", "Coral Gables"]
        }
      }
    ]
  },
  "slogan": "Miami's Trusted NFPA 96 Hood Cleaning Service"
}
```

#### BreadcrumbList Schema (Miami Page)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://localbizzlist.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Locations",
      "item": "https://localbizzlist.com/locations"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Miami",
      "item": "https://localbizzlist.com/locations/miami"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Hood Cleaning",
      "item": "https://localbizzlist.com/locations/miami/hood-cleaning"
    }
  ]
}
```

#### FAQPage Schema (Miami - top 5 schema-eligible questions)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Miami-Dade require more frequent hood cleaning than NFPA 96?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[ANSWER FROM FAQ SECTION - emphasise quarterly mandate]"
      }
    },
    {
      "@type": "Question",
      "name": "Can you service high-rise buildings in Brickell?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[ANSWER FROM FAQ SECTION - rope-access certification]"
      }
    },
    {
      "@type": "Question",
      "name": "Do you have Spanish-speaking crews?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes—all our Miami crew leaders are bi-lingual (English/Spanish). We coordinate seamlessly with your kitchen staff, no communication barriers."
      }
    },
    {
      "@type": "Question",
      "name": "How fast can you respond to a grease fire emergency in Miami Beach?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[ANSWER FROM FAQ SECTION - 35-50min response]"
      }
    },
    {
      "@type": "Question",
      "name": "Can you upload our certificate to the Miami-Dade health portal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[ANSWER FROM FAQ SECTION - optional upload service]"
      }
    }
  ]
}
```

---

### 3. Boca Raton Location Page Schema

#### LocalBusiness Schema (Boca Raton)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "LocalBizzList Hood Cleaning - Boca Raton",
  "@id": "https://localbizzlist.com/locations/boca-raton/hood-cleaning",
  "image": "https://localbizzlist.com/images/boca-hood-cleaning.jpg",
  "telephone": "+1-561-555-4663",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Boca Raton",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.3683,
    "longitude": -80.1289
  },
  "url": "https://localbizzlist.com/locations/boca-raton/hood-cleaning",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "areaServed": {
    "@type": "City",
    "name": "Boca Raton",
    "containedInPlace": {
      "@type": "AdministrativeArea",
      "name": "Palm Beach County"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Boca Raton Hood Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Country Club Hood Cleaning",
          "areaServed": ["Mizner Park", "Town Center", "Royal Palm Place", "Delray Beach"]
        }
      }
    ]
  },
  "slogan": "Boca's Premium Hood Cleaning Service"
}
```

#### BreadcrumbList + FAQPage (same structure as Miami, adjust city name)

---

### 4. Fort Lauderdale Location Page Schema

#### LocalBusiness Schema (Fort Lauderdale)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "LocalBizzList Hood Cleaning - Fort Lauderdale",
  "@id": "https://localbizzlist.com/locations/fort-lauderdale/hood-cleaning",
  "image": "https://localbizzlist.com/images/ftl-hood-cleaning.jpg",
  "telephone": "+1-954-555-4663",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Fort Lauderdale",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.1224,
    "longitude": -80.1373
  },
  "url": "https://localbizzlist.com/locations/fort-lauderdale/hood-cleaning",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "areaServed": {
    "@type": "City",
    "name": "Fort Lauderdale",
    "containedInPlace": {
      "@type": "AdministrativeArea",
      "name": "Broward County"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Fort Lauderdale Hood Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Port Everglades Hood Cleaning",
          "areaServed": ["Las Olas", "Fort Lauderdale Beach", "Port Everglades", "Hollywood"]
        }
      }
    ]
  },
  "slogan": "Fort Lauderdale's Port-Certified Hood Cleaning Experts"
}
```

#### BreadcrumbList + FAQPage (same structure as Miami, adjust city name)

---

## Internal Linking Map

### 1. Service Page Links OUT to:
- **City Pages (contextual anchors):**
  - "hood cleaning in Miami" → `/locations/miami/hood-cleaning/`
  - "Boca Raton hood service" → `/locations/boca-raton/hood-cleaning/`
  - "Fort Lauderdale restaurants" → `/locations/fort-lauderdale/hood-cleaning/`

- **Pricing Page (CTA anchors):**
  - "Get instant quote" → `/pricing/instant-quote?src=service-hood`
  - "Calculate your estimate" → `/pricing/instant-quote?src=service-hood`

- **Home (breadcrumb):**
  - "Home" → `/`

### 2. Miami Page Links OUT to:
- **Service Page (contextual anchor):**
  - "Learn more about our NFPA 96 process" → `/services/restaurant-hood-cleaning/`
  - "Restaurant hood cleaning" → `/services/restaurant-hood-cleaning/`

- **Other City Pages (contextual anchors):**
  - "Boca Raton hood cleaning" → `/locations/boca-raton/hood-cleaning/`
  - "Fort Lauderdale service" → `/locations/fort-lauderdale/hood-cleaning/`

- **Pricing Page (CTA anchors):**
  - "Get Miami estimate" → `/pricing/instant-quote?src=miami-hood`

- **Home (breadcrumb):**
  - "Home" → `/`

### 3. Boca Raton Page Links OUT to:
- **Service Page (contextual anchor):**
  - "Restaurant hood cleaning" → `/services/restaurant-hood-cleaning/`

- **Other City Pages (contextual anchors):**
  - "Miami hood cleaning" → `/locations/miami/hood-cleaning/`
  - "Fort Lauderdale" → `/locations/fort-lauderdale/hood-cleaning/`

- **Pricing Page (CTA anchors):**
  - "Get Boca estimate" → `/pricing/instant-quote?src=boca-hood`

- **Home (breadcrumb):**
  - "Home" → `/`

### 4. Fort Lauderdale Page Links OUT to:
- **Service Page (contextual anchor):**
  - "Restaurant hood cleaning" → `/services/restaurant-hood-cleaning/`

- **Other City Pages (contextual anchors):**
  - "Miami hood cleaning" → `/locations/miami/hood-cleaning/`
  - "Boca Raton service" → `/locations/boca-raton/hood-cleaning/`

- **Pricing Page (CTA anchors):**
  - "Get Fort Lauderdale estimate" → `/pricing/instant-quote?src=ftl-hood`

- **Home (breadcrumb):**
  - "Home" → `/`

---

## Navigation Integration

### Header Navigation (add to `/components/Header.tsx`)
```tsx
<nav>
  <Link href="/services/restaurant-hood-cleaning">Hood Cleaning</Link>
  <Link href="/pricing/instant-quote">Get Quote</Link>
  <Link href="tel:+19545554663">(954) 555-HOOD</Link>
</nav>
```

### Footer Links (add to `/components/Footer.tsx`)
```tsx
<section>
  <h4>Services</h4>
  <Link href="/services/restaurant-hood-cleaning">Restaurant Hood Cleaning</Link>
</section>

<section>
  <h4>Service Areas</h4>
  <Link href="/locations/miami/hood-cleaning">Miami</Link>
  <Link href="/locations/boca-raton/hood-cleaning">Boca Raton</Link>
  <Link href="/locations/fort-lauderdale/hood-cleaning">Fort Lauderdale</Link>
</section>
```

---

## URL Structure Summary

```
/
├── /services/
│   └── /restaurant-hood-cleaning/          [Service Page]
│
├── /locations/
│   ├── /miami/
│   │   └── /hood-cleaning/                 [Miami Location]
│   │
│   ├── /boca-raton/
│   │   └── /hood-cleaning/                 [Boca Location]
│   │
│   └── /fort-lauderdale/
│       └── /hood-cleaning/                 [Fort Lauderdale Location]
│
└── /pricing/
    └── /instant-quote/                     [Calculator - DO NOT TOUCH]
```

---

## Schema Implementation Notes for Cursor

1. **Placement:** Add JSON-LD scripts to `<head>` of each page using Next.js `<Script>` component with `type="application/ld+json"`

2. **FAQ Schema:** Only populate with answers marked `schema_eligible: true` in frontmatter

3. **LocalBusiness Coordinates:** Use city center coords (provided above). For production, consider actual business address.

4. **Phone Numbers:**
   - Miami: (305) 555-HOOD → +1-305-555-4663
   - Boca: (561) 555-HOOD → +1-561-555-4663
   - Fort Lauderdale: (954) 555-HOOD → +1-954-555-4663
   - **Note:** These are placeholder numbers. Replace with real numbers before launch.

5. **Image URLs:** Replace placeholder image URLs with actual hosted images once assets are uploaded.

6. **BreadcrumbList:** Ensure each position increments correctly and matches actual nav structure.

---

**Status:** SEO contracts complete
**Next:** Copy scaffolds with brand tone
