# LocalBizzList - South Florida Business Directory

A modern, full-featured business directory and blog platform built with Next.js 14, TypeScript, Tailwind CSS, and Contentlayer.

## Features

- 🏢 **Business Directory**: Searchable directory of local South Florida businesses
- 📝 **Blog Platform**: MDX-powered blog with categories and tags
- 🎨 **Modern Design**: Responsive design based on Checkatrade's UI patterns
- ⚡ **Performance**: Built with Next.js 14 App Router for optimal performance
- 🔍 **SEO Optimized**: Built-in sitemap, robots.txt, and structured data
- 📱 **Mobile-First**: Fully responsive across all devices
- ♿ **Accessible**: WCAG compliant with semantic HTML and ARIA labels

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Contentlayer + MDX
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
localbizzlist/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── blog/              # Blog pages
│   └── businesses/        # Business directory pages
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ArticleCard.tsx
│   ├── BusinessCard.tsx
│   └── ...
├── content/               # MDX content files
│   ├── posts/            # Blog posts
│   ├── categories/       # Category pages
│   └── businesses/       # Business listings
├── lib/                  # Utility functions
├── public/               # Static assets
└── types/                # TypeScript types
```

## Content Management

### Adding a Blog Post

Create a new `.mdx` file in `content/posts/`:

```mdx
---
title: "Your Post Title"
slug: "your-post-slug"
excerpt: "Brief description"
description: "SEO description"
publishedAt: "2024-01-15"
featuredImage: "/images/post.jpg"
featuredImageAlt: "Alt text"
author: "Author Name"
category: "Category Name"
categorySlug: "category-slug"
tags: ["tag1", "tag2"]
featured: true
---

# Your Content Here

Write your content in MDX format...
```

### Adding a Business

Create a new `.mdx` file in `content/businesses/`:

```mdx
---
name: "Business Name"
slug: "business-slug"
description: "Business description"
category: "Category"
city: "Miami"
state: "FL"
phone: "(305) 555-0123"
website: "https://example.com"
services:
  - "Service 1"
  - "Service 2"
verified: true
featured: true
---

# Business details...
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project can be deployed to:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and deploy

## Customization

### Colors

Edit colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#FF6B35',
    // ...
  },
}
```

### Fonts

Change fonts in `app/layout.tsx`:

```typescript
import { Inter } from 'next/font/google'
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ for South Florida