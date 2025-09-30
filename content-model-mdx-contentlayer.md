# Content Model for MDX/Contentlayer - Localbizzlist

## Overview
Content model for South Florida local business directory based on Checkatrade's structure, optimized for MDX/Contentlayer integration.

## Core Content Types

### 1. Post (Article)
```typescript
// contentlayer.config.ts
export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    slug: {
      type: 'string',
      description: 'The slug of the post',
      required: true,
    },
    excerpt: {
      type: 'string',
      description: 'The excerpt of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'SEO description',
      required: true,
    },
    publishedAt: {
      type: 'date',
      description: 'The date the post was published',
      required: true,
    },
    updatedAt: {
      type: 'date',
      description: 'The date the post was last updated',
      required: false,
    },
    featuredImage: {
      type: 'string',
      description: 'The featured image URL',
      required: true,
    },
    featuredImageAlt: {
      type: 'string',
      description: 'Alt text for featured image',
      required: true,
    },
    author: {
      type: 'string',
      description: 'The author of the post',
      required: true,
    },
    authorBio: {
      type: 'string',
      description: 'Author biography',
      required: false,
    },
    authorImage: {
      type: 'string',
      description: 'Author profile image URL',
      required: false,
    },
    category: {
      type: 'string',
      description: 'The category of the post',
      required: true,
    },
    categorySlug: {
      type: 'string',
      description: 'The category slug',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'Tags for the post',
      required: false,
    },
    readTime: {
      type: 'number',
      description: 'Estimated reading time in minutes',
      required: false,
    },
    featured: {
      type: 'boolean',
      description: 'Whether the post is featured',
      required: false,
      default: false,
    },
    draft: {
      type: 'boolean',
      description: 'Whether the post is a draft',
      required: false,
      default: false,
    },
    tableOfContents: {
      type: 'boolean',
      description: 'Whether to show table of contents',
      required: false,
      default: true,
    },
    fastFacts: {
      type: 'list',
      of: {
        type: 'object',
        fields: {
          title: { type: 'string', required: true },
          content: { type: 'string', required: true },
        },
      },
      description: 'Fast facts for the post',
      required: false,
    },
    relatedPosts: {
      type: 'list',
      of: { type: 'string' },
      description: 'Related post slugs',
      required: false,
    },
    seo: {
      type: 'object',
      fields: {
        title: { type: 'string', required: false },
        description: { type: 'string', required: false },
        keywords: { type: 'list', of: { type: 'string' }, required: false },
        canonical: { type: 'string', required: false },
        noindex: { type: 'boolean', required: false, default: false },
      },
      description: 'SEO metadata',
      required: false,
    },
    social: {
      type: 'object',
      fields: {
        twitterTitle: { type: 'string', required: false },
        twitterDescription: { type: 'string', required: false },
        twitterImage: { type: 'string', required: false },
        facebookTitle: { type: 'string', required: false },
        facebookDescription: { type: 'string', required: false },
        facebookImage: { type: 'string', required: false },
      },
      description: 'Social media metadata',
      required: false,
    },
    business: {
      type: 'object',
      fields: {
        serviceArea: { type: 'string', required: false },
        businessType: { type: 'string', required: false },
        priceRange: { type: 'string', required: false },
        contactInfo: {
          type: 'object',
          fields: {
            phone: { type: 'string', required: false },
            email: { type: 'string', required: false },
            website: { type: 'string', required: false },
          },
          required: false,
        },
      },
      description: 'Business-specific information',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post.slug}`,
    },
    categoryUrl: {
      type: 'string',
      resolve: (post) => `/blog/${post.categorySlug}`,
    },
    readingTime: {
      type: 'number',
      resolve: (post) => {
        // Calculate reading time based on word count
        const wordsPerMinute = 200;
        const wordCount = post.body.raw.split(/\s+/).length;
        return Math.ceil(wordCount / wordsPerMinute);
      },
    },
  },
}));
```

### 2. Category
```typescript
export const Category = defineDocumentType(() => ({
  name: 'Category',
  filePathPattern: `categories/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    name: {
      type: 'string',
      description: 'The name of the category',
      required: true,
    },
    slug: {
      type: 'string',
      description: 'The slug of the category',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the category',
      required: true,
    },
    heroImage: {
      type: 'string',
      description: 'The hero image URL',
      required: true,
    },
    heroImageAlt: {
      type: 'string',
      description: 'Alt text for hero image',
      required: true,
    },
    color: {
      type: 'string',
      description: 'Category color theme',
      required: false,
      default: 'primary',
    },
    icon: {
      type: 'string',
      description: 'Category icon name',
      required: false,
    },
    featured: {
      type: 'boolean',
      description: 'Whether the category is featured',
      required: false,
      default: false,
    },
    order: {
      type: 'number',
      description: 'Display order',
      required: false,
      default: 0,
    },
    seo: {
      type: 'object',
      fields: {
        title: { type: 'string', required: false },
        description: { type: 'string', required: false },
        keywords: { type: 'list', of: { type: 'string' }, required: false },
      },
      description: 'SEO metadata',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (category) => `/blog/${category.slug}`,
    },
    postCount: {
      type: 'number',
      resolve: (category) => {
        // This would be calculated at build time
        return 0;
      },
    },
  },
}));
```

### 3. Tag
```typescript
export const Tag = defineDocumentType(() => ({
  name: 'Tag',
  filePathPattern: `tags/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    name: {
      type: 'string',
      description: 'The name of the tag',
      required: true,
    },
    slug: {
      type: 'string',
      description: 'The slug of the tag',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the tag',
      required: false,
    },
    color: {
      type: 'string',
      description: 'Tag color theme',
      required: false,
      default: 'accent',
    },
    featured: {
      type: 'boolean',
      description: 'Whether the tag is featured',
      required: false,
      default: false,
    },
    order: {
      type: 'number',
      description: 'Display order',
      required: false,
      default: 0,
    },
    seo: {
      type: 'object',
      fields: {
        title: { type: 'string', required: false },
        description: { type: 'string', required: false },
        keywords: { type: 'list', of: { type: 'string' }, required: false },
      },
      description: 'SEO metadata',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (tag) => `/blog/tag/${tag.slug}`,
    },
    postCount: {
      type: 'number',
      resolve: (tag) => {
        // This would be calculated at build time
        return 0;
      },
    },
  },
}));
```

### 4. Business (Local Business Directory)
```typescript
export const Business = defineDocumentType(() => ({
  name: 'Business',
  filePathPattern: `businesses/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    name: {
      type: 'string',
      description: 'The name of the business',
      required: true,
    },
    slug: {
      type: 'string',
      description: 'The slug of the business',
      required: true,
    },
    description: {
      type: 'string',
      description: 'Business description',
      required: true,
    },
    category: {
      type: 'string',
      description: 'Business category',
      required: true,
    },
    subcategory: {
      type: 'string',
      description: 'Business subcategory',
      required: false,
    },
    location: {
      type: 'object',
      fields: {
        address: { type: 'string', required: true },
        city: { type: 'string', required: true },
        state: { type: 'string', required: true },
        zipCode: { type: 'string', required: true },
        coordinates: {
          type: 'object',
          fields: {
            lat: { type: 'number', required: true },
            lng: { type: 'number', required: true },
          },
          required: true,
        },
      },
      description: 'Business location information',
      required: true,
    },
    contact: {
      type: 'object',
      fields: {
        phone: { type: 'string', required: false },
        email: { type: 'string', required: false },
        website: { type: 'string', required: false },
        socialMedia: {
          type: 'object',
          fields: {
            facebook: { type: 'string', required: false },
            instagram: { type: 'string', required: false },
            twitter: { type: 'string', required: false },
            linkedin: { type: 'string', required: false },
          },
          required: false,
        },
      },
      description: 'Contact information',
      required: true,
    },
    services: {
      type: 'list',
      of: { type: 'string' },
      description: 'Services offered',
      required: true,
    },
    pricing: {
      type: 'object',
      fields: {
        range: { type: 'string', required: false },
        currency: { type: 'string', required: false, default: 'USD' },
        notes: { type: 'string', required: false },
      },
      description: 'Pricing information',
      required: false,
    },
    hours: {
      type: 'object',
      fields: {
        monday: { type: 'string', required: false },
        tuesday: { type: 'string', required: false },
        wednesday: { type: 'string', required: false },
        thursday: { type: 'string', required: false },
        friday: { type: 'string', required: false },
        saturday: { type: 'string', required: false },
        sunday: { type: 'string', required: false },
        notes: { type: 'string', required: false },
      },
      description: 'Business hours',
      required: false,
    },
    images: {
      type: 'list',
      of: {
        type: 'object',
        fields: {
          url: { type: 'string', required: true },
          alt: { type: 'string', required: true },
          caption: { type: 'string', required: false },
        },
      },
      description: 'Business images',
      required: false,
    },
    logo: {
      type: 'string',
      description: 'Business logo URL',
      required: false,
    },
    verified: {
      type: 'boolean',
      description: 'Whether the business is verified',
      required: false,
      default: false,
    },
    featured: {
      type: 'boolean',
      description: 'Whether the business is featured',
      required: false,
      default: false,
    },
    rating: {
      type: 'number',
      description: 'Average rating (1-5)',
      required: false,
    },
    reviewCount: {
      type: 'number',
      description: 'Number of reviews',
      required: false,
      default: 0,
    },
    seo: {
      type: 'object',
      fields: {
        title: { type: 'string', required: false },
        description: { type: 'string', required: false },
        keywords: { type: 'list', of: { type: 'string' }, required: false },
      },
      description: 'SEO metadata',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (business) => `/businesses/${business.slug}`,
    },
    categoryUrl: {
      type: 'string',
      resolve: (business) => `/businesses/category/${business.category}`,
    },
    fullAddress: {
      type: 'string',
      resolve: (business) => 
        `${business.location.address}, ${business.location.city}, ${business.location.state} ${business.location.zipCode}`,
    },
  },
}));
```

## Contentlayer Configuration

```typescript
// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  // ... Post definition above
}));

export const Category = defineDocumentType(() => ({
  // ... Category definition above
}));

export const Tag = defineDocumentType(() => ({
  // ... Tag definition above
}));

export const Business = defineDocumentType(() => ({
  // ... Business definition above
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Category, Tag, Business],
  mdx: {
    remarkPlugins: [
      // Add remark plugins for enhanced MDX support
    ],
    rehypePlugins: [
      // Add rehype plugins for HTML processing
    ],
  },
});
```

## File Structure

```
content/
├── posts/
│   ├── how-to/
│   │   ├── hire-plumber-south-florida.mdx
│   │   ├── kitchen-remodel-cost-miami.mdx
│   │   └── find-reliable-contractor.mdx
│   ├── cost-guides/
│   │   ├── bathroom-remodel-cost.mdx
│   │   ├── pool-installation-cost.mdx
│   │   └── roofing-cost-guide.mdx
│   ├── expert-advice/
│   │   ├── hurricane-preparation-tips.mdx
│   │   ├── energy-efficient-homes.mdx
│   │   └── smart-home-technology.mdx
│   └── business-news/
│       ├── local-business-spotlight.mdx
│       ├── industry-trends-2024.mdx
│       └── economic-outlook.mdx
├── categories/
│   ├── how-to.mdx
│   ├── cost-guides.mdx
│   ├── expert-advice.mdx
│   └── business-news.mdx
├── tags/
│   ├── plumbing.mdx
│   ├── electrical.mdx
│   ├── hvac.mdx
│   ├── roofing.mdx
│   ├── kitchen.mdx
│   ├── bathroom.mdx
│   ├── pool.mdx
│   ├── landscaping.mdx
│   └── smart-home.mdx
└── businesses/
    ├── miami/
    │   ├── abc-plumbing.mdx
    │   ├── miami-electric.mdx
    │   └── south-beach-contractors.mdx
    ├── fort-lauderdale/
    │   ├── broward-hvac.mdx
    │   └── ft-lauderdale-roofing.mdx
    └── west-palm-beach/
        ├── palm-beach-pool.mdx
        └── west-palm-landscaping.mdx
```

## Example MDX Files

### Post Example
```mdx
---
title: "How to Hire a Reliable Plumber in South Florida"
slug: "hire-plumber-south-florida"
excerpt: "Learn the essential steps to find and hire a trustworthy plumber in South Florida, including what to look for and questions to ask."
description: "Complete guide to hiring a reliable plumber in South Florida. Get tips on vetting contractors, checking licenses, and ensuring quality work."
publishedAt: "2024-01-15"
updatedAt: "2024-01-20"
featuredImage: "/images/plumber-south-florida.jpg"
featuredImageAlt: "Professional plumber working in South Florida home"
author: "Sarah Johnson"
authorBio: "Sarah is a home improvement expert with over 10 years of experience in South Florida."
authorImage: "/images/authors/sarah-johnson.jpg"
category: "How-To Guides"
categorySlug: "how-to"
tags: ["plumbing", "contractors", "home-improvement", "south-florida"]
readTime: 8
featured: true
tableOfContents: true
fastFacts:
  - title: "Average Cost"
    content: "$150-300 for basic plumbing repairs in South Florida"
  - title: "License Required"
    content: "All plumbers must be licensed by the Florida Department of Business and Professional Regulation"
  - title: "Response Time"
    content: "Most emergency plumbers respond within 2-4 hours"
relatedPosts:
  - "plumbing-emergency-tips"
  - "water-heater-maintenance"
  - "drain-cleaning-diy"
seo:
  title: "How to Hire a Reliable Plumber in South Florida | Localbizzlist"
  description: "Complete guide to hiring a reliable plumber in South Florida. Get tips on vetting contractors, checking licenses, and ensuring quality work."
  keywords: ["plumber", "South Florida", "contractor", "home improvement", "plumbing"]
  canonical: "https://localbizzlist.com/blog/hire-plumber-south-florida"
social:
  twitterTitle: "How to Hire a Reliable Plumber in South Florida"
  twitterDescription: "Complete guide to hiring a trustworthy plumber in South Florida. Essential tips and questions to ask."
  twitterImage: "/images/social/plumber-guide-twitter.jpg"
business:
  serviceArea: "South Florida"
  businessType: "Service Provider"
  priceRange: "$150-300"
  contactInfo:
    phone: "(305) 555-0123"
    email: "info@localbizzlist.com"
    website: "https://localbizzlist.com"
---

# How to Hire a Reliable Plumber in South Florida

Finding a trustworthy plumber in South Florida can be challenging, especially with the unique challenges of our climate and building codes. This comprehensive guide will help you make an informed decision.

## Table of Contents

1. [Understanding South Florida Plumbing Needs](#understanding-south-florida-plumbing-needs)
2. [What to Look for in a Plumber](#what-to-look-for-in-a-plumber)
3. [Questions to Ask Before Hiring](#questions-to-ask-before-hiring)
4. [Red Flags to Avoid](#red-flags-to-avoid)
5. [Getting Quotes and Estimates](#getting-quotes-and-estimates)
6. [Understanding Costs](#understanding-costs)

## Understanding South Florida Plumbing Needs

South Florida's unique climate and building requirements create specific plumbing challenges:

- **Hurricane-resistant systems** for storm preparation
- **Saltwater corrosion** protection for coastal properties
- **High humidity** affecting pipe condensation
- **Older homes** with outdated plumbing systems

## What to Look for in a Plumber

### Licensing and Insurance
- Valid Florida plumbing license
- General liability insurance
- Workers' compensation coverage
- Bonding for larger projects

### Experience and Specialization
- Local South Florida experience
- Knowledge of local building codes
- Specialization in your specific needs
- References from local customers

## Questions to Ask Before Hiring

1. **Are you licensed and insured?**
2. **How long have you been working in South Florida?**
3. **Can you provide local references?**
4. **What is your response time for emergencies?**
5. **Do you offer warranties on your work?**
6. **How do you handle permits and inspections?**

## Red Flags to Avoid

- Unlicensed contractors
- Pressure to make immediate decisions
- Requests for full payment upfront
- Lack of local references
- No written estimates or contracts

## Getting Quotes and Estimates

Always get at least three written estimates that include:
- Detailed scope of work
- Materials and labor costs
- Timeline for completion
- Warranty information
- Payment schedule

## Understanding Costs

Typical plumbing costs in South Florida:
- **Emergency calls:** $150-300
- **Basic repairs:** $100-250
- **Fixture installation:** $200-500
- **Pipe replacement:** $1,000-3,000
- **Water heater installation:** $800-2,500

## Conclusion

Hiring the right plumber in South Florida requires research, patience, and attention to detail. By following this guide, you'll be well-equipped to make an informed decision that protects your home and investment.

---

*Looking for a reliable plumber in South Florida? [Search our directory](/businesses/category/plumbing) to find verified local professionals.*
```

### Category Example
```mdx
---
name: "How-To Guides"
slug: "how-to"
description: "Step-by-step guides for home improvement projects and hiring contractors in South Florida"
heroImage: "/images/categories/how-to-hero.jpg"
heroImageAlt: "Home improvement tools and materials"
color: "primary"
icon: "wrench"
featured: true
order: 1
seo:
  title: "How-To Guides for South Florida Home Improvement | Localbizzlist"
  description: "Comprehensive step-by-step guides for home improvement projects and hiring contractors in South Florida"
  keywords: ["how-to", "home improvement", "contractors", "South Florida", "guides"]
---

# How-To Guides

Learn how to tackle home improvement projects and hire the right contractors in South Florida with our comprehensive step-by-step guides.

## What You'll Find Here

Our how-to guides cover everything from basic DIY projects to complex home improvements, all tailored to South Florida's unique climate and building requirements.

### Topics Covered
- Hiring contractors and tradespeople
- DIY home improvement projects
- Maintenance and repair guides
- Safety and preparation tips
- Cost estimation and budgeting

### South Florida Specific
- Hurricane preparation and safety
- Saltwater corrosion prevention
- High humidity considerations
- Local building codes and permits
- Energy efficiency in hot climates

## Getting Started

Whether you're a first-time homeowner or an experienced DIYer, our guides provide the knowledge you need to make informed decisions about your home improvement projects.

[Browse all how-to guides](/blog/how-to/)
```

### Tag Example
```mdx
---
name: "Plumbing"
slug: "plumbing"
description: "Everything related to plumbing services, repairs, and installations in South Florida"
color: "blue"
featured: true
order: 1
seo:
  title: "Plumbing Services and Tips in South Florida | Localbizzlist"
  description: "Comprehensive plumbing guides, tips, and service providers in South Florida"
  keywords: ["plumbing", "plumber", "South Florida", "repairs", "installation"]
---

# Plumbing

Everything you need to know about plumbing services, repairs, and installations in South Florida.

## Common Plumbing Issues in South Florida

- **Saltwater corrosion** affecting pipes and fixtures
- **High humidity** causing condensation and mold
- **Hurricane damage** to plumbing systems
- **Older homes** with outdated plumbing

## Services Covered

- Emergency plumbing repairs
- Pipe installation and replacement
- Fixture installation and repair
- Water heater services
- Drain cleaning and maintenance
- Leak detection and repair

## Local Considerations

South Florida's unique climate and building requirements mean plumbing work here requires specialized knowledge and experience.

[Find local plumbers](/businesses/category/plumbing)
```

### Business Example
```mdx
---
name: "ABC Plumbing Services"
slug: "abc-plumbing-services"
description: "Reliable plumbing services in Miami-Dade County with 15+ years of experience"
category: "Plumbing"
subcategory: "Residential Plumbing"
location:
  address: "123 Main Street"
  city: "Miami"
  state: "FL"
  zipCode: "33101"
  coordinates:
    lat: 25.7617
    lng: -80.1918
contact:
  phone: "(305) 555-0123"
  email: "info@abcplumbing.com"
  website: "https://abcplumbing.com"
  socialMedia:
    facebook: "https://facebook.com/abcplumbing"
    instagram: "https://instagram.com/abcplumbing"
services:
  - "Emergency plumbing repairs"
  - "Pipe installation and replacement"
  - "Fixture installation"
  - "Water heater services"
  - "Drain cleaning"
  - "Leak detection"
pricing:
  range: "$150-300"
  currency: "USD"
  notes: "Free estimates for projects over $500"
hours:
  monday: "7:00 AM - 6:00 PM"
  tuesday: "7:00 AM - 6:00 PM"
  wednesday: "7:00 AM - 6:00 PM"
  thursday: "7:00 AM - 6:00 PM"
  friday: "7:00 AM - 6:00 PM"
  saturday: "8:00 AM - 4:00 PM"
  sunday: "Emergency only"
  notes: "24/7 emergency service available"
images:
  - url: "/images/businesses/abc-plumbing-1.jpg"
    alt: "ABC Plumbing team at work"
    caption: "Our experienced team in action"
  - url: "/images/businesses/abc-plumbing-2.jpg"
    alt: "ABC Plumbing service van"
    caption: "Fully equipped service vehicles"
logo: "/images/businesses/abc-plumbing-logo.png"
verified: true
featured: true
rating: 4.8
reviewCount: 127
seo:
  title: "ABC Plumbing Services - Miami Plumbing Contractor | Localbizzlist"
  description: "Reliable plumbing services in Miami-Dade County. 15+ years experience, 24/7 emergency service, licensed and insured."
  keywords: ["plumber", "Miami", "plumbing services", "emergency plumbing", "contractor"]
---

# ABC Plumbing Services

**Reliable plumbing services in Miami-Dade County with 15+ years of experience**

## About Us

ABC Plumbing Services has been serving the Miami-Dade County area for over 15 years. We specialize in residential and commercial plumbing services, from emergency repairs to complete system installations.

## Our Services

### Emergency Plumbing
- 24/7 emergency response
- Same-day service for urgent repairs
- Leak detection and repair
- Burst pipe repairs

### Installation Services
- New fixture installation
- Pipe replacement and repair
- Water heater installation
- Garbage disposal installation

### Maintenance Services
- Drain cleaning and maintenance
- Water pressure testing
- Pipe inspection
- Preventive maintenance programs

## Why Choose ABC Plumbing?

- **Licensed and Insured:** Fully licensed by the State of Florida
- **Experienced Team:** 15+ years of local experience
- **24/7 Emergency Service:** Available when you need us most
- **Satisfaction Guarantee:** 100% satisfaction guarantee on all work
- **Free Estimates:** No-obligation estimates for projects over $500

## Service Areas

We serve all of Miami-Dade County, including:
- Miami
- Miami Beach
- Coral Gables
- Aventura
- Doral
- Homestead

## Contact Information

**Phone:** (305) 555-0123  
**Email:** info@abcplumbing.com  
**Website:** [abcplumbing.com](https://abcplumbing.com)

**Address:** 123 Main Street, Miami, FL 33101

## Business Hours

- **Monday-Friday:** 7:00 AM - 6:00 PM
- **Saturday:** 8:00 AM - 4:00 PM
- **Sunday:** Emergency service only
- **24/7 Emergency:** Available for urgent repairs

---

*ABC Plumbing Services is a verified business on Localbizzlist. [Read reviews and get a quote](/businesses/abc-plumbing-services)*
```

## TypeScript Types

```typescript
// types/content.ts
export interface Post {
  _id: string;
  _raw: any;
  type: 'Post';
  title: string;
  slug: string;
  excerpt: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  featuredImage: string;
  featuredImageAlt: string;
  author: string;
  authorBio?: string;
  authorImage?: string;
  category: string;
  categorySlug: string;
  tags?: string[];
  readTime?: number;
  featured?: boolean;
  draft?: boolean;
  tableOfContents?: boolean;
  fastFacts?: Array<{
    title: string;
    content: string;
  }>;
  relatedPosts?: string[];
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
    canonical?: string;
    noindex?: boolean;
  };
  social?: {
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
    facebookTitle?: string;
    facebookDescription?: string;
    facebookImage?: string;
  };
  business?: {
    serviceArea?: string;
    businessType?: string;
    priceRange?: string;
    contactInfo?: {
      phone?: string;
      email?: string;
      website?: string;
    };
  };
  url: string;
  categoryUrl: string;
  readingTime: number;
  body: {
    raw: string;
    code: string;
  };
}

export interface Category {
  _id: string;
  _raw: any;
  type: 'Category';
  name: string;
  slug: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  color?: string;
  icon?: string;
  featured?: boolean;
  order?: number;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  url: string;
  postCount: number;
  body: {
    raw: string;
    code: string;
  };
}

export interface Tag {
  _id: string;
  _raw: any;
  type: 'Tag';
  name: string;
  slug: string;
  description?: string;
  color?: string;
  featured?: boolean;
  order?: number;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  url: string;
  postCount: number;
  body: {
    raw: string;
    code: string;
  };
}

export interface Business {
  _id: string;
  _raw: any;
  type: 'Business';
  name: string;
  slug: string;
  description: string;
  category: string;
  subcategory?: string;
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  contact: {
    phone?: string;
    email?: string;
    website?: string;
    socialMedia?: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
      linkedin?: string;
    };
  };
  services: string[];
  pricing?: {
    range?: string;
    currency?: string;
    notes?: string;
  };
  hours?: {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
    notes?: string;
  };
  images?: Array<{
    url: string;
    alt: string;
    caption?: string;
  }>;
  logo?: string;
  verified?: boolean;
  featured?: boolean;
  rating?: number;
  reviewCount?: number;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  url: string;
  categoryUrl: string;
  fullAddress: string;
  body: {
    raw: string;
    code: string;
  };
}
```

## Utility Functions

```typescript
// lib/content.ts
import { allPosts, allCategories, allTags, allBusinesses } from 'contentlayer/generated';
import type { Post, Category, Tag, Business } from '@/types/content';

export function getPost(slug: string): Post | undefined {
  return allPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(categorySlug: string): Post[] {
  return allPosts.filter((post) => post.categorySlug === categorySlug);
}

export function getPostsByTag(tagSlug: string): Post[] {
  return allPosts.filter((post) => post.tags?.includes(tagSlug));
}

export function getFeaturedPosts(): Post[] {
  return allPosts.filter((post) => post.featured);
}

export function getCategory(slug: string): Category | undefined {
  return allCategories.find((category) => category.slug === slug);
}

export function getTag(slug: string): Tag | undefined {
  return allTags.find((tag) => tag.slug === slug);
}

export function getBusiness(slug: string): Business | undefined {
  return allBusinesses.find((business) => business.slug === slug);
}

export function getBusinessesByCategory(category: string): Business[] {
  return allBusinesses.filter((business) => business.category === category);
}

export function getBusinessesByLocation(city: string): Business[] {
  return allBusinesses.filter((business) => 
    business.location.city.toLowerCase() === city.toLowerCase()
  );
}

export function searchBusinesses(query: string): Business[] {
  const lowercaseQuery = query.toLowerCase();
  return allBusinesses.filter((business) =>
    business.name.toLowerCase().includes(lowercaseQuery) ||
    business.description.toLowerCase().includes(lowercaseQuery) ||
    business.services.some(service => 
      service.toLowerCase().includes(lowercaseQuery)
    )
  );
}
```

This content model provides a comprehensive foundation for a South Florida local business directory with blog functionality, optimized for MDX/Contentlayer integration.
