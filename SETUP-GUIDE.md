# LocalBizzList Setup Guide

## Quick Start

This guide will help you get the LocalBizzList application running on your machine.

## Prerequisites

Before you begin, ensure you have:

- **Node.js 18+** installed ([Download](https://nodejs.org/))
- **npm** (comes with Node.js) or **yarn**
- A code editor (VS Code recommended)

## Installation Steps

### 1. Install Dependencies

```bash
cd /Users/ghost/Localbizzlist
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Contentlayer
- All other dependencies

### 2. Add Placeholder Images

Before running the dev server, you'll need to add placeholder images to the `public/images/` directory:

**Required images:**
- `/public/images/plumber-work.jpg` (or any placeholder)
- `/public/images/hvac-installation.jpg`
- `/public/images/hurricane-prep.jpg`
- `/public/images/how-to-hero.jpg`
- `/public/images/businesses/miami-plumbing-logo.png`
- `/public/images/businesses/hvac-logo.png`

**Quick fix for development:**
You can use free placeholder images from:
- https://unsplash.com/
- https://picsum.photos/
- https://placehold.co/

Or add this to temporarily bypass image errors - update the MDX files to use placeholder URLs:

```
featuredImage: "https://picsum.photos/800/600"
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
```

This command will:
1. Process all MDX content with Contentlayer
2. Generate type definitions
3. Build the Next.js application
4. Optimize for production

### 5. Start Production Server

```bash
npm start
```

## Project Structure Overview

```
localbizzlist/
├── app/                      # Next.js 14 App Router
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Home page
│   ├── blog/
│   │   ├── page.tsx        # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx    # Individual blog post
│   ├── businesses/
│   │   ├── page.tsx        # Business directory
│   │   └── [slug]/
│   │       └── page.tsx    # Individual business page
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # Robots.txt configuration
│   └── globals.css         # Global styles
│
├── components/              # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ArticleCard.tsx
│   ├── ArticleGrid.tsx
│   ├── BusinessCard.tsx
│   ├── BusinessGrid.tsx
│   ├── CategoryTag.tsx
│   └── SearchBar.tsx
│
├── content/                 # MDX content files
│   ├── posts/
│   │   ├── how-to/
│   │   ├── cost-guides/
│   │   └── expert-advice/
│   ├── categories/
│   └── businesses/
│
├── lib/
│   └── utils.ts            # Utility functions
│
├── public/
│   └── images/             # Static images
│
├── contentlayer.config.ts  # Contentlayer configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── next.config.js          # Next.js configuration
└── package.json            # Project dependencies
```

## Configuration Files

### contentlayer.config.ts
Defines content models for:
- Posts (blog articles)
- Categories
- Businesses

### tailwind.config.ts
Custom design system with:
- Brand colors (primary, secondary, accent)
- Typography scale
- Spacing system
- Responsive breakpoints

### next.config.js
Next.js configuration with:
- Contentlayer integration
- Image optimization
- Production optimizations

## Content Management

### Adding Blog Posts

1. Create a new `.mdx` file in `content/posts/[category]/`
2. Add frontmatter (title, slug, description, etc.)
3. Write content in MDX
4. Rebuild to see changes

Example structure:
```
content/posts/
├── how-to/
│   └── your-new-post.mdx
├── cost-guides/
│   └── another-post.mdx
└── expert-advice/
    └── expert-post.mdx
```

### Adding Businesses

1. Create a new `.mdx` file in `content/businesses/`
2. Add required frontmatter
3. Add business description and details
4. Rebuild to see changes

## Troubleshooting

### Build Errors

**"Cannot find module 'contentlayer/generated'"**
- Run `npm run dev` first to generate Contentlayer files
- Or run `npx contentlayer build` separately

**Image Loading Errors**
- Ensure all image paths in MDX files exist
- Use absolute paths starting with `/`
- Add placeholder images to `public/images/`

**TypeScript Errors**
- Run `npm run type-check` to find issues
- Ensure all required props are provided
- Check Contentlayer generated types

### Development Issues

**Port 3000 already in use**
```bash
lsof -ti:3000 | xargs kill
# Or use a different port
npm run dev -- -p 3001
```

**Contentlayer not updating**
```bash
# Delete cached files
rm -rf .contentlayer
# Restart dev server
npm run dev
```

**Styles not applying**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

## Testing Checklist

Before deployment, verify:

- [ ] All pages load without errors
- [ ] Navigation works correctly
- [ ] Blog posts display properly
- [ ] Business listings show correctly
- [ ] Images load (or have placeholders)
- [ ] Responsive design works on mobile
- [ ] Links navigate correctly
- [ ] Search functionality (when implemented)
- [ ] SEO metadata is present
- [ ] Sitemap generates correctly

## Deployment

### Vercel (Recommended)

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Next.js and deploys

### Environment Variables

No environment variables are required for basic functionality. For production, you may want to add:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Next Steps

1. **Add Real Content**: Replace sample posts and businesses
2. **Add Images**: Upload real business logos and post images
3. **Customize Design**: Adjust colors and typography in `tailwind.config.ts`
4. **Add Features**: Implement search, filtering, categories
5. **SEO**: Add Google Analytics, Search Console
6. **Performance**: Optimize images, add caching

## Support

For issues:
1. Check this guide
2. Review Next.js docs: https://nextjs.org/docs
3. Review Contentlayer docs: https://contentlayer.dev
4. Check GitHub issues

## Updates

To update dependencies:

```bash
npm update
# Or for major updates
npx npm-check-updates -u
npm install
```

---

**Version**: 1.0.0
**Last Updated**: 2024-01-30