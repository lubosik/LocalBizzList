# Frontmatter YAML Schema & Examples

## Canonical Schema Definition

```yaml
---
# Core Metadata
type: "service" | "location"               # Page type
title: string                               # SEO title (55-60 chars)
h1: string                                  # Visual H1 (can differ from title)
slug: string                                # URL slug
description: string                         # Meta description (150-160 chars)

# Service Information
service_name: string                        # "Restaurant Hood Cleaning"
service_slug: string                        # "restaurant-hood-cleaning"
service_category: string                    # "Commercial Kitchen Maintenance"

# Geographic Data (location pages only)
city: string                                # "Miami"
city_slug: string                           # "miami"
state: "FL"
county: string                              # "Miami-Dade"
service_areas: string[]                     # Neighborhoods/zones covered

# Coverage & Response
coverage_time: string                       # "24/7 Emergency + Scheduled"
response_time: string                       # "Same-day for emergencies"
arrival_bands:                              # City-specific timing
  downtown: string                          # "30-45 min"
  north: string
  south: string
  west: string

# Industry Targeting
industries: string[]                        # ["Fine Dining", "QSR Chains", "Hotels"]
usage_classes:                              # NFPA 96 frequency table
  - type: string                            # "High Volume (QSR, 24hr)"
    interval: string                        # "Quarterly (every 3 months)"
  - type: string
    interval: string

# Problems & Solutions
common_problems:
  - problem: string                         # "Grease fires from neglected hoods"
    solution: string                        # "To-bare-metal cleaning, NFPA compliance"
  - problem: string
    solution: string

# Process Steps
process_steps:
  - step: number                            # 1
    title: string                           # "Pre-Cleaning Inspection"
    description: string                     # "Document current grease levels..."
    duration: string                        # "15-20 min"
    photo_callout: string                   # "[[PHOTO: inspector with grease depth gauge]]"
  - step: number
    title: string
    description: string
    duration: string
    photo_callout: string

# Proof & Trust
proof:
  certifications: string[]                  # ["NFPA 96 Certified", "IKECA Member"]
  years_experience: number                  # 15
  insurance: string                         # "$2M General Liability"
  licenses: string[]                        # ["State Fire Marshal License FML-1234"]
  guarantees: string[]                      # ["Certificate of Completion", "Photo Documentation"]

# FAQs
faqs:
  - question: string
    answer: string                          # OR "[[FAQ_ANSWER_TODO]]" for Cursor
    schema_eligible: boolean                # true = include in FAQ schema
  - question: string
    answer: string
    schema_eligible: boolean

# Conversion Elements
cta:
  primary_phone: string                     # "(954) 555-HOOD"
  primary_text: string                      # "Get NFPA 96 Certificate"
  secondary_phone: string                   # "(954) 555-4663" (clickable)
  emergency_badge: string                   # "24/7 Emergency Service"
  estimate_link: string                     # "/pricing/instant-quote?src=service-hood"

# City-Specific Meta (location pages only)
city_meta:
  inspector_notes: string                   # "Miami-Dade requires quarterly for high-volume"
  landmarks: string[]                       # ["Miami Int'l Airport", "Brickell City Centre"]
  routes: string                            # "I-95, US-1, Palmetto Expressway"
  neighborhoods: string[]                   # ["Brickell", "Wynwood", "Little Havana"]
  mall_dock_notes: string                   # "Bayside, Aventura Mall - loading dock access required"
  competitive_gap: string                   # "Thin local pages lack NFPA detail"

# Publishing
published: boolean                          # true
featured: boolean                           # true (for nav/homepage)
publishedAt: string                         # "2025-10-07"
updatedAt: string                           # "2025-10-07"
---
```

---

## Example 1: Global Service Page

```yaml
---
type: "service"
title: "Restaurant Hood Cleaning | NFPA 96 Certified | South Florida"
h1: "Restaurant Hood Cleaning & Exhaust System Degreasing"
slug: "restaurant-hood-cleaning"
description: "NFPA 96 certified hood cleaning for South Florida restaurants. To-bare-metal degreasing, compliance certificates, 24/7 emergency service. Miami, Boca, Fort Lauderdale."

service_name: "Restaurant Hood Cleaning"
service_slug: "restaurant-hood-cleaning"
service_category: "Commercial Kitchen Fire Prevention"

coverage_time: "24/7 Emergency + Scheduled Maintenance"
response_time: "Same-day emergency, 48hr scheduled"
service_areas:
  - "Miami-Dade County"
  - "Broward County"
  - "Palm Beach County (Boca Raton)"

industries:
  - "Fine Dining Restaurants"
  - "Quick Service Restaurants (QSR)"
  - "Hotels & Resorts"
  - "Hospitals & Healthcare"
  - "Country Clubs"
  - "Commercial Bakeries"

usage_classes:
  - type: "High Volume (24hr operations, QSR)"
    interval: "Quarterly (every 3 months)"
  - type: "Moderate Volume (Full-service restaurants)"
    interval: "Semi-Annually (every 6 months)"
  - type: "Low Volume (Churches, seasonal)"
    interval: "Annually (every 12 months)"

common_problems:
  - problem: "Grease fires from neglected exhaust systems"
    solution: "To-bare-metal cleaning of hoods, ducts, fans per NFPA 96"
  - problem: "Failed health inspections due to grease buildup"
    solution: "Pre-inspection cleaning + compliance certification"
  - problem: "Insurance claims denied for lack of maintenance records"
    solution: "Timestamped certificates with photo documentation"
  - problem: "Exhaust fan motor failure from grease saturation"
    solution: "Fan plenum cleaning, bearing service, belt replacement"
  - problem: "Smoke/odour backing into dining areas"
    solution: "Duct airflow restoration, rooftop fan deep clean"

process_steps:
  - step: 1
    title: "Pre-Cleaning Inspection & Documentation"
    description: "Measure grease depth in ducts, photograph current state, identify fire hazards. Review last cleaning date and NFPA compliance status."
    duration: "15-20 minutes"
    photo_callout: "[[PHOTO: Inspector with grease depth gauge in duct]]"

  - step: 2
    title: "Kitchen Prep & Safety Setup"
    description: "Cover appliances, set up containment barriers, shut off exhaust fans. Coordinate with kitchen staff to minimise disruption."
    duration: "10-15 minutes"
    photo_callout: "[[PHOTO: Plastic sheeting over cook line]]"

  - step: 3
    title: "Hood & Filter Degreasing"
    description: "Remove and soak filters in hot alkaline solution. Hand-scrape hood interior to bare metal, pressure wash with 180°F water and USDA-approved degreasers."
    duration: "45-60 minutes per hood"
    photo_callout: "[[PHOTO: Before/after hood interior comparison]]"

  - step: 4
    title: "Duct & Plenum Cleaning"
    description: "Access ducts via roof hatches or wall panels. Scrape grease deposits, vacuum residue, pressure wash to bare metal from bottom to roof fan."
    duration: "1-3 hours (varies by duct length)"
    photo_callout: "[[PHOTO: Technician in duct with scraper tool]]"

  - step: 5
    title: "Exhaust Fan & Rooftop Service"
    description: "Degrease fan blades, motor housing, and discharge plenum. Clean grease cups, check belt tension, lubricate bearings."
    duration: "30-45 minutes per fan"
    photo_callout: "[[PHOTO: Cleaned fan blades vs. greasy blades]]"

  - step: 6
    title: "Final Inspection & Certification"
    description: "Post-cleaning photography, grease depth verification (≤ NFPA limits). Issue Certificate of Performance with technician signature, timestamp, and next service due date."
    duration: "10-15 minutes"
    photo_callout: "[[PHOTO: Sample NFPA 96 certificate]]"

proof:
  certifications:
    - "NFPA 96 Certified Technicians"
    - "IKECA (International Kitchen Exhaust Cleaning Association) Member"
  years_experience: 15
  insurance: "$2,000,000 General Liability + Workers' Comp"
  licenses:
    - "Florida State Fire Marshal License #FML-12345"
    - "Broward County Fire Prevention Permit"
  guarantees:
    - "Certificate of Performance (required for insurance)"
    - "Before/After Photo Documentation"
    - "30-Day Workmanship Guarantee"

faqs:
  - question: "How often does NFPA 96 require hood cleaning?"
    answer: "[[FAQ_ANSWER_TODO]]"
    schema_eligible: true

  - question: "What's included in to-bare-metal cleaning?"
    answer: "[[FAQ_ANSWER_TODO]]"
    schema_eligible: true

  - question: "Can you clean during business hours?"
    answer: "[[FAQ_ANSWER_TODO]]"
    schema_eligible: true

  - question: "Do you provide same-day emergency cleaning?"
    answer: "[[FAQ_ANSWER_TODO]]"
    schema_eligible: true

  - question: "What happens if we fail a health inspection for grease?"
    answer: "[[FAQ_ANSWER_TODO]]"
    schema_eligible: true

cta:
  primary_phone: "(954) 555-HOOD"
  primary_text: "Get NFPA 96 Certificate Today"
  secondary_phone: "(954) 555-4663"
  emergency_badge: "24/7 Emergency Response"
  estimate_link: "/pricing/instant-quote?src=service-hood"

published: true
featured: true
publishedAt: "2025-10-07"
updatedAt: "2025-10-07"
---
```

---

## Example 2: Miami Location Page

```yaml
---
type: "location"
title: "Hood Cleaning Miami | NFPA 96 Certified | 24/7 Emergency Service"
h1: "Restaurant Hood Cleaning in Miami, FL"
slug: "miami-hood-cleaning"
description: "Miami's trusted NFPA 96 hood cleaning service. Serving Brickell, Wynwood, Downtown. Same-day emergency, bi-lingual crews, health dept compliance. Call (305) 555-HOOD."

service_name: "Restaurant Hood Cleaning"
service_slug: "restaurant-hood-cleaning"
service_category: "Commercial Kitchen Fire Prevention"

city: "Miami"
city_slug: "miami"
state: "FL"
county: "Miami-Dade"

service_areas:
  - "Brickell & Downtown Miami"
  - "Wynwood & Edgewater"
  - "Little Havana & Coral Way"
  - "Miami Beach & South Beach"
  - "Coconut Grove"
  - "Midtown & Design District"
  - "Airport West (MIA corridor)"
  - "Doral & Sweetwater"

coverage_time: "24/7 Emergency + Scheduled Night Service"
response_time: "30-90 min emergency, next-day scheduled"

arrival_bands:
  downtown: "30-45 min (Brickell, Financial District)"
  north: "45-60 min (Aventura, North Miami Beach)"
  south: "50-70 min (Pinecrest, Kendall)"
  west: "40-55 min (Doral, Sweetwater)"
  beach: "35-50 min (Miami Beach, South Beach)"

industries:
  - "Fine Dining (Brickell, Design District)"
  - "High-Volume QSR (Airport corridor, US-1)"
  - "Hotel Kitchens (South Beach, Downtown)"
  - "Hospital Foodservice (Jackson, Baptist Health)"
  - "Cruise Terminal Commissaries (PortMiami)"

usage_classes:
  - type: "High Volume (24hr diners, hotel kitchens)"
    interval: "Quarterly per Miami-Dade Fire Code"
  - type: "Moderate Volume (Full-service restaurants)"
    interval: "Semi-Annually"
  - type: "Low Volume (Country clubs, seasonal)"
    interval: "Annually"

common_problems:
  - problem: "Miami-Dade Health Dept violations for grease accumulation"
    solution: "Pre-inspection cleaning with same-day certificate issuance"
  - problem: "Humidity accelerates grease oxidation and odours"
    solution: "Moisture-resistant coatings, frequent duct cleaning"
  - problem: "High-rise building rooftop access challenges"
    solution: "Certified rope-access technicians, cherry picker coordination"
  - problem: "Multi-lingual kitchen staff communication barriers"
    solution: "Bi-lingual (English/Spanish) crew leaders"
  - problem: "24hr operations require after-hours cleaning"
    solution: "11pm-6am service windows, silent pressure washing"

process_steps:
  - step: 1
    title: "Site Assessment & Miami-Dade Code Review"
    description: "Verify compliance with Miami-Dade Fire Prevention Code amendments. Photograph grease levels, measure duct depth, confirm last inspection date."
    duration: "15-20 minutes"
    photo_callout: "[[PHOTO: Grease depth measurement in Miami hotel kitchen]]"

  - step: 2
    title: "Kitchen Coordination & Bi-Lingual Briefing"
    description: "Meet with chef/manager (English or Spanish). Coordinate timing around service hours, set up containment for humid climate."
    duration: "10-15 minutes"
    photo_callout: "[[PHOTO: Crew briefing with restaurant staff]]"

  - step: 3
    title: "Hood & Filter Degreasing (High-Humidity Protocol)"
    description: "Extra hot water (190°F) to counter Miami humidity. Remove filters, alkaline soak, hand-scrape hood to bare metal."
    duration: "45-60 minutes"
    photo_callout: "[[PHOTO: Miami Beach restaurant hood before/after]]"

  - step: 4
    title: "Vertical Duct Cleaning (High-Rise Buildings)"
    description: "Rope-access or ladder access for multi-storey ducts. Scrape, vacuum, pressure wash to rooftop. Common in Brickell towers."
    duration: "2-4 hours (high-rises)"
    photo_callout: "[[PHOTO: Technician in vertical duct, Brickell high-rise]]"

  - step: 5
    title: "Rooftop Fan Service (Coastal Corrosion Check)"
    description: "Saltwater air causes fan corrosion—inspect blades, motor mounts. Degrease, check bearings, apply anti-corrosion spray."
    duration: "30-45 minutes"
    photo_callout: "[[PHOTO: Corroded vs. serviced rooftop fan, Miami]]"

  - step: 6
    title: "Certificate Issuance & Health Dept Upload"
    description: "Issue Miami-Dade compliant Certificate of Performance. Optional: upload to health dept portal for inspection readiness."
    duration: "10 minutes"
    photo_callout: "[[PHOTO: Sample certificate with Miami-Dade compliance note]]"

proof:
  certifications:
    - "NFPA 96 Certified (Miami-Dade Recognised)"
    - "IKECA Member"
  years_experience: 15
  insurance: "$2M General Liability (Miami-Dade Certificate on File)"
  licenses:
    - "Florida State Fire Marshal License #FML-12345"
    - "Miami-Dade Fire Prevention Business Tax Receipt"
  guarantees:
    - "Certificate Valid for Health Inspections"
    - "Before/After Photos (emailed within 24hrs)"
    - "30-Day Re-Clean Guarantee"

faqs:
  - question: "Does Miami-Dade require more frequent hood cleaning than NFPA 96?"
    answer: "[[FAQ_ANSWER_TODO]]"
    schema_eligible: true

  - question: "Can you service high-rise buildings in Brickell?"
    answer: "[[FAQ_ANSWER_TODO]]"
    schema_eligible: true

  - question: "Do you have Spanish-speaking crews?"
    answer: "Yes, all our Miami crew leaders are bi-lingual (English/Spanish) to coordinate seamlessly with kitchen staff."
    schema_eligible: true

  - question: "How fast can you respond to a grease fire emergency in Miami Beach?"
    answer: "[[FAQ_ANSWER_TODO]]"
    schema_eligible: true

  - question: "Can you upload our certificate to the Miami-Dade health portal?"
    answer: "[[FAQ_ANSWER_TODO]]"
    schema_eligible: true

  - question: "What's the average cost for a hood cleaning in Miami?"
    answer: "[[FAQ_ANSWER_TODO]]"
    schema_eligible: false

  - question: "Do you service PortMiami cruise terminal commissaries?"
    answer: "[[FAQ_ANSWER_TODO]]"
    schema_eligible: true

  - question: "How do you handle rooftop access in downtown high-rises?"
    answer: "[[FAQ_ANSWER_TODO]]"
    schema_eligible: true

  - question: "Can you work overnight for 24-hour diners?"
    answer: "[[FAQ_ANSWER_TODO]]"
    schema_eligible: true

  - question: "What's included in your Certificate of Performance?"
    answer: "[[FAQ_ANSWER_TODO]]"
    schema_eligible: true

cta:
  primary_phone: "(305) 555-HOOD"
  primary_text: "Get Miami NFPA Certificate"
  secondary_phone: "(305) 555-4663"
  emergency_badge: "30-Min Response in Brickell/Downtown"
  estimate_link: "/pricing/instant-quote?src=miami-hood"

city_meta:
  inspector_notes: "Miami-Dade County requires quarterly cleaning for high-volume kitchens (>12hrs/day operation). Health inspectors check Certificate of Performance date."
  landmarks:
    - "Miami International Airport (MIA)"
    - "Brickell City Centre"
    - "PortMiami Cruise Terminals"
    - "American Airlines Arena"
    - "Bayside Marketplace"
  routes: "I-95, US-1 (Biscayne Blvd), Palmetto Expressway (826), Dolphin Expressway (836)"
  neighborhoods:
    - "Brickell"
    - "Wynwood"
    - "Little Havana"
    - "South Beach"
    - "Coconut Grove"
    - "Edgewater"
    - "Design District"
    - "Doral"
  mall_dock_notes: "Bayside Marketplace, Aventura Mall, Dolphin Mall—loading dock access required. Coordinate with property management 48hrs ahead."
  competitive_gap: "Local competitors show thin content lacking NFPA detail, no bi-lingual service callouts, weak Local Pack signals (missing NAP consistency)."

published: true
featured: true
publishedAt: "2025-10-07"
updatedAt: "2025-10-07"
---
```

---

## Schema Usage Notes for Cursor

1. **Type Branching:**
   - `type: "service"` → Omit `city`, `county`, `city_meta`, `arrival_bands`
   - `type: "location"` → Include all city-specific fields

2. **FAQ Placeholders:**
   - Use `[[FAQ_ANSWER_TODO]]` where Cursor should fetch long-tail answers from Semrush/Perplexity
   - `schema_eligible: true` → Include in JSON-LD FAQPage schema
   - `schema_eligible: false` → Display on page but exclude from schema (pricing questions, etc.)

3. **Photo Callouts:**
   - `[[PHOTO: description]]` indicates where to place images
   - Cursor should replace with actual image paths once assets are provided

4. **CTA Links:**
   - All `estimate_link` values append `?src={page}` for conversion tracking
   - Do NOT modify `/pricing/instant-quote` calculator logic—only link to it

5. **City Meta:**
   - `competitive_gap` informs content strategy—highlight these gaps in copy
   - `inspector_notes` should appear in "Local Requirements" section

---

**Files Generated:** 2 (Service example + Location example)
**Ready for:** Cursor to replicate across remaining 2 cities (Boca Raton, Fort Lauderdale)
