# Checkatrade Blog UI/IA Analysis & Specification

## Overview
Analysis of Checkatrade's blog structure for creating a South Florida local business directory template.

## Page Structure Analysis

### 1. Blog Home Page (`/blog/`)
**Layout Pattern:** Hero + Featured Grid + Promotional Sections

**Key Components:**
- **Hero Section:** Full-width background image with gradient overlay, title, description, search bar
- **Featured Articles Grid:** 3-column responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
- **Article Cards:** Image (16:9 aspect ratio), title, excerpt, category tags, "Read" button
- **Promotional Banners:** Expandable sections for popular content and local tradespeople

**Grid System:**
- Max width: `max-w-screen-lg` (1024px)
- Container padding: `px-4 full:px-0`
- Card grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Card spacing: `gap-6`

### 2. Category Page (`/blog/how-to/`)
**Layout Pattern:** Category Hero + Article Grid + Load More

**Key Components:**
- **Category Hero:** Background image, category title, description, search functionality
- **Article Grid:** Same 3-column responsive pattern as home page
- **Load More Button:** Infinite scroll pattern with "Load more" button
- **Category Tags:** Pill-shaped tags with `bg-accent-extraSoft` background

### 3. Article Pages
**Layout Pattern:** Article Header + Content + Related Posts + Promotional Modules

**Key Components:**
- **Article Header:** Title, breadcrumbs, last updated date, social sharing
- **Table of Contents:** Collapsible navigation for long articles
- **Content Sections:** H1-H4 headings, paragraphs, lists, tables, images
- **Fast Facts Box:** Highlighted information boxes
- **Related Articles:** Embedded article cards within content
- **Postcode Search Module:** Promotional form integration
- **Author/Byline Zone:** Author information and publication details

## Design System Analysis

### Color Roles
```css
/* Primary Colors */
--primary: #FF3F3F (Red)
--primary-fg: #FFFFFF (White)
--primary-int: #E63939 (Darker red for hover)

/* Secondary Colors */
--secondary: #040154 (Dark blue)
--secondary-fg: #FFFFFF (White)
--secondary-int: #03013A (Darker blue for hover)

/* Neutral Colors */
--neutral-0: #FFFFFF (White)
--neutral-20: #F5F5F5 (Light gray)
--neutral-30: #E5E5E5 (Border gray)
--neutral-200: #CCCCCC (Input border)
--neutral-400: #999999 (Disabled)
--neutral-500: #666666 (Hover border)
--neutral-60: #666666 (Text secondary)
--neutral-800: #333333 (Text primary)
--neutral-strong: #000000 (Strong borders)

/* Accent Colors */
--accent-extraSoft: #F0F0F0 (Tag background)
```

### Typography Tokens
```css
/* Headings */
.text-2xl (1.5rem/24px) - Mobile H1
.text-[2.75rem] (2.75rem/44px) - Desktop H1
.text-xl (1.25rem/20px) - Article titles
.text-lg (1.125rem/18px) - Section headings

/* Body Text */
.text-base (1rem/16px) - Primary body text
.text-sm (0.875rem/14px) - Secondary text
.text-xs (0.75rem/12px) - Tags, metadata

/* Font Weights */
.font-medium (500) - Mobile H1
.font-semibold (600) - Desktop H1, article titles
.font-bold (700) - Buttons, CTAs
.font-normal (400) - Body text
```

### Spacing Scale
```css
/* Padding/Margin Scale */
.p-4 (1rem/16px) - Card padding
.px-4 (1rem/16px) - Container horizontal padding
.py-3 (0.75rem/12px) - Input padding
.py-1 (0.25rem/4px) - Button padding
.px-6 (1.5rem/24px) - Button horizontal padding

/* Gap Scale */
.gap-2 (0.5rem/8px) - Small gaps
.gap-4 (1rem/16px) - Medium gaps
.gap-6 (1.5rem/24px) - Large gaps
.gap-8 (2rem/32px) - Section gaps
```

### Breakpoints
```css
/* Tailwind Breakpoints */
sm: 640px - Tablet
md: 768px - Small desktop
lg: 1024px - Desktop
full: 1280px - Large desktop
```

## Component Specifications

### 1. Article Card Component
```typescript
interface ArticleCardProps {
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  category: string;
  categorySlug: string;
  tags?: string[];
  slug: string;
  publishedAt: string;
  readTime?: number;
}
```

**Styling:**
- Container: `h-full overflow-hidden rounded-lg outline outline-1 outline-neutral-30`
- Image: `relative h-48 w-full` (192px height, 16:9 aspect ratio)
- Content: `flex grow flex-col p-4`
- Title: `text-text-neutral-primary font-semibold text-xl leading-7 tracking-tight-1`
- Excerpt: `font-normal text-base leading-6`
- Button: `rounded-full font-bold border text-secondary bg-secondary-fg`

### 2. Category Tag Component
```typescript
interface CategoryTagProps {
  name: string;
  slug: string;
  color?: 'default' | 'accent';
}
```

**Styling:**
- Container: `flex items-center w-fit h-fit rounded-full font-semibold bg-accent-extraSoft py-0.5 text-xs pl-2 pr-2`

### 3. Search Bar Component
```typescript
interface SearchBarProps {
  placeholder: string;
  onSearch: (query: string) => void;
  value: string;
  onChange: (value: string) => void;
}
```

**Styling:**
- Container: `group flex gap-2 justify-center items-center bg-neutral-0 border border-neutral-200 hover:border-neutral-500 rounded cursor-text`
- Input: `outline-none w-full text-neutral-800 py-3`
- Button: `bg-primary text-primary-fg hover:bg-primary-int py-1 min-h-10 h-[42px] rounded-md px-6`

### 4. Hero Section Component
```typescript
interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImage: string;
  showSearch?: boolean;
  searchPlaceholder?: string;
}
```

**Styling:**
- Container: `relative w-full bg-cover bg-center bg-no-repeat bg-gradient-radial from-secondary to-default-800 text-main`
- Content: `relative z-10 mx-auto flex min-h-[340px] max-w-screen-lg items-center px-4 pt-4`
- Title: `font-medium text-2xl leading-8 tracking-tight-2 sm:text-[2.75rem] sm:font-semibold sm:leading-[1.1]`

## SEO & Performance Patterns

### Meta Tags Structure
```html
<title>{articleTitle} | Checkatrade</title>
<meta name="description" content="{articleExcerpt}" />
<meta property="og:title" content="{articleTitle} | Checkatrade" />
<meta property="og:description" content="{articleExcerpt}" />
<meta property="og:image" content="{articleImage}" />
<meta property="og:type" content="article" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{articleTitle} | Checkatrade" />
<meta name="twitter:image" content="{articleImage}" />
```

### Image Optimization
- **Format:** WebP with fallback
- **Quality:** 50% compression
- **Lazy Loading:** `loading="lazy"` attribute
- **Responsive:** `data-nimg="fill"` with `object-fit: cover`
- **Aspect Ratios:** 16:9 for cards, various for hero images

### Performance Hints
- **Image CDN:** Contentful CDN with optimization parameters
- **Font Loading:** System fonts with fallbacks
- **CSS:** Tailwind CSS with purging
- **JavaScript:** Next.js with code splitting

## Navigation & Information Architecture

### Header Navigation
- **Primary:** Home, Categories, Search
- **Secondary:** User account, business listings
- **Mobile:** Hamburger menu with collapsible sections

### Breadcrumb Structure
```
Home > Blog > Category > Article Title
```

### Category Taxonomy
- **How-To Guides** (`/how-to/`)
- **Hiring Guides** (`/hiring-guides/`)
- **Cost Guides** (`/cost-guides/`)
- **Expert Advice** (`/expert-advice/`)
- **Trade News** (`/trade/`)

### Tag System
- **Hub Tags:** Topic-based tags linking to related content
- **Format:** Pill-shaped, clickable, multiple per article
- **Examples:** "Kitchen", "Bathroom", "Plumbing", "Building"

## Page Templates

### 1. Blog Home Template
- Hero section with search
- Featured articles grid
- Category navigation
- Promotional sections
- Footer

### 2. Category Template
- Category hero
- Article grid with pagination
- Sidebar (if applicable)
- Related categories

### 3. Article Template
- Article header with breadcrumbs
- Table of contents
- Article content with embedded modules
- Related articles
- Author information
- Social sharing
- Comments (if applicable)

### 4. Search Results Template
- Search bar
- Results grid
- Filters
- Pagination
- No results state

## Responsive Design Patterns

### Mobile First Approach
- **Base:** Single column layout
- **sm (640px):** Two-column grid
- **lg (1024px):** Three-column grid
- **full (1280px):** Full-width containers

### Image Responsiveness
- **Hero Images:** Full-width with aspect ratio preservation
- **Article Cards:** 16:9 aspect ratio, responsive sizing
- **Content Images:** Responsive with max-width constraints

### Typography Scaling
- **Mobile:** Smaller base font sizes
- **Desktop:** Larger headings, improved line heights
- **Touch Targets:** Minimum 44px for interactive elements

## Accessibility Features

### Semantic HTML
- Proper heading hierarchy (H1-H4)
- Article tags for content
- Navigation landmarks
- Form labels and ARIA attributes

### Keyboard Navigation
- Tab order for interactive elements
- Focus indicators
- Skip links for main content

### Screen Reader Support
- Alt text for images
- ARIA labels for buttons
- Live regions for dynamic content
- Proper form associations

## Content Strategy Patterns

### Article Structure
1. **Hook:** Engaging opening paragraph
2. **Table of Contents:** For long-form content
3. **Fast Facts:** Key information boxes
4. **Main Content:** Structured with subheadings
5. **Related Content:** Embedded article suggestions
6. **Call-to-Action:** Postcode search or contact forms

### Content Types
- **How-To Guides:** Step-by-step instructions
- **Cost Guides:** Pricing information with tables
- **Expert Advice:** Professional insights
- **Hiring Guides:** Selection criteria and tips
- **News Articles:** Industry updates and trends

### Engagement Elements
- **Social Sharing:** Twitter, Facebook, LinkedIn
- **Related Articles:** Contextual content suggestions
- **Newsletter Signup:** Promotional sections
- **Local Search:** Postcode-based service finder
- **Contact Forms:** Lead generation modules
