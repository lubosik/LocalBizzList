# Conversion Layer Specification

## Brand Components Only – DO NOT Touch Calculator Code

---

## 1. Sticky Header CTA

### Component Spec
**File:** `/components/Header.tsx` (already exists—UPDATE only)

**Behaviour:**
- Sticky header with transparent-to-solid background on scroll
- CTA button visible at all viewport widths (mobile+desktop)

**Elements to Add:**

```tsx
// Add to existing Header.tsx navigation
<div className="flex items-center gap-4">
  {/* Existing search icon */}
  <Link
    href="tel:+19545554663"
    className="hidden md:flex items-center gap-2 text-neutral-700 hover:text-primary font-semibold"
  >
    <Phone className="h-4 w-4" />
    (954) 555-HOOD
  </Link>

  <Link
    href="/pricing/instant-quote"
    className="btn-primary px-6 py-2 text-sm"
  >
    Get NFPA Certificate
  </Link>
</div>
```

**Design Tokens (use existing from `tailwind.config.ts`):**
- Button: `.btn-primary` (already defined in `globals.css`)
- Phone link: `text-neutral-700 hover:text-primary`
- Icon: Lucide `Phone` component

**Mobile Behaviour:**
- Hide phone number on `<md` breakpoint
- Keep CTA button visible (collapse text to "Get Quote" on `<sm`)

---

## 2. Short "Get NFPA 96 Certificate" Form

### Component Spec
**File:** `/components/CertificateForm.tsx` (NEW component)

**Placement:**
- Service page: mid-page (after "Why Hood Cleaning Prevents Fires" section)
- Location pages: mid-page (after "Service Coverage" section)

**Form Fields (5 only—keep it short):**

1. **Business Name** (text input, required)
2. **Phone Number** (tel input, required, format: (XXX) XXX-XXXX)
3. **City** (dropdown, options: Miami | Boca Raton | Fort Lauderdale, required)
4. **Kitchen Type** (dropdown, options: Restaurant | Hotel | Country Club | Hospital | Other, required)
5. **Preferred Contact** (radio: Call Me | Text Me, default: Call Me)

**Form Component Structure:**

```tsx
// /components/CertificateForm.tsx
export default function CertificateForm({ source }: { source: string }) {
  const [formData, setFormData] = useState({
    businessName: '',
    phone: '',
    city: '',
    kitchenType: '',
    preferredContact: 'call'
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Cursor to implement form submission (email or API endpoint)
    // Track source parameter for conversion analytics
  }

  return (
    <div className="bg-neutral-50 rounded-lg p-8 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-neutral-800 mb-2">
        Get Your NFPA 96 Certificate
      </h3>
      <p className="text-neutral-600 mb-6">
        Free quote in 60 seconds. No obligation, no pressure.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Form fields here using .input class from globals.css */}

        <button type="submit" className="btn-primary w-full py-3">
          Get Free Quote
        </button>
      </form>

      <p className="text-xs text-neutral-500 mt-4 text-center">
        By submitting, you agree to receive calls/texts. No spam, unsubscribe anytime.
      </p>
    </div>
  )
}
```

**Design Tokens:**
- Container: `bg-neutral-50 rounded-lg p-8`
- Inputs: Use existing `.input` class from `globals.css`
- Button: `.btn-primary w-full py-3`
- Fonts: Use existing Inter font stack

**Behaviour:**
- Form submission → send to email (or webhook—Cursor to implement)
- Include `source` parameter in submission (e.g., "miami-hood", "service-hood") for tracking
- Client-side validation (required fields, phone format)
- Success state: replace form with "Thanks! We'll call you in 15 minutes."

---

## 3. Response-Time Badges

### Component Spec
**File:** `/components/ResponseBadge.tsx` (NEW component)

**Usage:**
- Hero section (all pages)
- Emergency CTA sections (inline callouts)

**Variants:**

```tsx
// /components/ResponseBadge.tsx
type BadgeVariant = '24-7' | 'same-day' | 'city-response'

interface ResponseBadgeProps {
  variant: BadgeVariant
  cityTime?: string // e.g., "30-45 min" for city-specific
}

export default function ResponseBadge({ variant, cityTime }: ResponseBadgeProps) {
  const badges = {
    '24-7': {
      icon: Clock,
      text: '24/7 Emergency Service',
      color: 'bg-accent text-neutral-800'
    },
    'same-day': {
      icon: Zap,
      text: 'Same-Day Emergency',
      color: 'bg-secondary text-secondary-fg'
    },
    'city-response': {
      icon: MapPin,
      text: `${cityTime} Response`,
      color: 'bg-primary text-primary-fg'
    }
  }

  const badge = badges[variant]
  const Icon = badge.icon

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm ${badge.color}`}>
      <Icon className="h-4 w-4" />
      {badge.text}
    </div>
  )
}
```

**Lucide Icons:**
- `Clock` (24/7)
- `Zap` (same-day)
- `MapPin` (city-specific)

**Design Tokens:** Use existing colour classes from Tailwind config

---

## 4. Proof Blocks

### Component Spec
**File:** `/components/ProofBlock.tsx` (NEW component)

**Placement:**
- After process section (all pages)
- Above footer CTA

**Structure:**

```tsx
// /components/ProofBlock.tsx
interface ProofItem {
  icon: LucideIcon
  title: string
  description: string
}

export default function ProofBlock({ items }: { items: ProofItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, idx) => {
        const Icon = item.icon
        return (
          <div key={idx} className="text-center">
            <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
              <Icon className="h-6 w-6 text-primary-fg" />
            </div>
            <h4 className="font-bold text-neutral-800 mb-1">{item.title}</h4>
            <p className="text-sm text-neutral-600">{item.description}</p>
          </div>
        )
      })}
    </div>
  )
}
```

**Example Usage (Service Page):**

```tsx
<ProofBlock items={[
  {
    icon: Award,
    title: 'NFPA 96 Certified',
    description: 'IKECA member technicians'
  },
  {
    icon: Shield,
    title: '$2M Insured',
    description: 'Full liability + workers comp'
  },
  {
    icon: Clock,
    title: '15 Years',
    description: '10,000+ cleanings completed'
  },
  {
    icon: FileCheck,
    title: 'Certified Every Job',
    description: 'Valid for inspections'
  }
]} />
```

**Lucide Icons to Use:**
- `Award` (certifications)
- `Shield` (insurance)
- `Clock` (years/experience)
- `FileCheck` (certificates)
- `Users` (team size)
- `Star` (reviews—if added later)

---

## 5. Instant Estimate Link-CTAs

### Placement & Parameters

**DO NOT modify `/pricing/instant-quote` calculator code.**
**ONLY link to it with source tracking parameters.**

**Link Locations:**

1. **Hero CTA (all pages):**
   ```tsx
   <Link href="/pricing/instant-quote?src=service-hood">
     Get NFPA 96 Certificate
   </Link>
   ```

2. **Mid-page form alternative link:**
   ```tsx
   <p className="text-center text-sm text-neutral-600">
     Prefer to calculate yourself?
     <Link href="/pricing/instant-quote?src=miami-hood-calc" className="text-primary hover:underline">
       Use our instant calculator
     </Link>
   </p>
   ```

3. **Footer CTA (all pages):**
   ```tsx
   <Link href="/pricing/instant-quote?src=service-hood-footer">
     Get Free Estimate
   </Link>
   ```

**Source Parameter Convention:**
- Service page: `?src=service-hood`
- Miami page: `?src=miami-hood`
- Boca page: `?src=boca-hood`
- Fort Lauderdale page: `?src=ftl-hood`
- Add `-footer`, `-form`, `-calc` suffix for placement tracking

**Button Styling:**
- Primary CTA: `.btn-primary` class
- Secondary/text link: `text-primary hover:underline`

---

## 6. CTA Block Component (Reusable)

### Component Spec
**File:** `/components/CTABlock.tsx` (NEW component)

**Placement:**
- Hero (custom per page)
- Footer (same across all pages)

**Structure:**

```tsx
// /components/CTABlock.tsx
interface CTABlockProps {
  headline: string
  subheadline?: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  badges?: React.ReactNode
  variant?: 'hero' | 'footer'
}

export default function CTABlock({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  badges,
  variant = 'footer'
}: CTABlockProps) {
  const bgClass = variant === 'hero' ? 'bg-gradient-to-b from-neutral-50 to-neutral-0' : 'bg-secondary'
  const textClass = variant === 'hero' ? 'text-neutral-800' : 'text-white'

  return (
    <section className={`${bgClass} py-16`}>
      <div className="container text-center">
        <h2 className={`text-3xl font-bold ${textClass} mb-4`}>
          {headline}
        </h2>
        {subheadline && (
          <p className={`text-lg ${variant === 'hero' ? 'text-neutral-600' : 'text-white/90'} mb-8 max-w-2xl mx-auto`}>
            {subheadline}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Link href={primaryCTA.href} className="btn-primary px-8 py-3">
            {primaryCTA.text}
          </Link>

          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className={variant === 'hero' ? 'btn-outline px-8 py-3' : 'text-white hover:underline font-semibold'}
            >
              {secondaryCTA.text}
            </Link>
          )}
        </div>

        {badges && (
          <div className="flex flex-wrap items-center justify-center gap-4">
            {badges}
          </div>
        )}
      </div>
    </section>
  )
}
```

**Example Usage (Footer CTA):**

```tsx
<CTABlock
  variant="footer"
  headline="Get Your NFPA 96 Certificate in 48 Hours"
  subheadline="Instant quote, flexible scheduling, guaranteed compliance."
  primaryCTA={{
    text: 'Get Free Estimate',
    href: '/pricing/instant-quote?src=service-hood-footer'
  }}
  secondaryCTA={{
    text: 'Call Now: (954) 555-HOOD',
    href: 'tel:+19545554663'
  }}
  badges={
    <>
      <ResponseBadge variant="24-7" />
      <span className="text-white/90 text-sm">NFPA 96 Certified</span>
      <span className="text-white/90 text-sm">$2M Insured</span>
    </>
  }
/>
```

---

## 7. Two CTA Blocks Per Page Requirement

### Mandatory Placement:

**Every page MUST have exactly 2 CTA blocks:**

1. **Hero CTA** (above fold)
   - Headline + subheadline + primary button
   - Trust badges (response time, certifications)
   - Variant: `hero`

2. **Footer CTA** (above `<Footer>` component)
   - Headline + subheadline + primary + secondary button
   - Trust badges row
   - Variant: `footer`

**Optional:** Mid-page inline CTA (emergency services callout, form, etc.) does NOT count toward the 2-block requirement.

---

## 8. Design System Summary (Use Existing Brand Tokens)

### Colours (from `tailwind.config.ts`)
- **Primary:** `primary` (CTA buttons, links)
- **Secondary:** `secondary` (footer CTA background)
- **Accent:** `accent` (badges, highlights)
- **Neutral:** `neutral-{0,50,100...900}` (text, backgrounds)

### Typography (from `tailwind.config.ts`)
- **Font Family:** Inter (already loaded in layout)
- **Headings:** `.text-3xl font-bold` (H2), `.text-2xl font-bold` (H3)
- **Body:** `.text-base` (default)

### Components (from `globals.css`)
- **Buttons:** `.btn-primary`, `.btn-secondary`, `.btn-outline`
- **Inputs:** `.input`
- **Cards:** `.card`
- **Container:** `.container` (max-width: 1024px, padding: 1rem)

### Icons
- **Library:** Lucide React (already installed—check `package.json`)
- **Common Icons:** `Phone`, `Clock`, `Zap`, `MapPin`, `Award`, `Shield`, `FileCheck`, `ArrowRight`

---

## 9. Calculator Rule (CRITICAL)

**DO NOT TOUCH `/pricing/instant-quote`**

- Do NOT modify calculator logic
- Do NOT change form fields
- Do NOT alter pricing calculations
- ONLY link to it with `?src=` parameters for tracking

**What IS allowed:**
- Update meta title/description for `/pricing/instant-quote` page
- Add breadcrumb navigation
- Style existing elements using global CSS (if broken)

**What is NOT allowed:**
- Changing calculator inputs
- Modifying quote generation logic
- Altering form validation
- Restructuring the page layout

---

## 10. Component Checklist for Cursor

**New Components to Create:**
- [ ] `/components/CertificateForm.tsx`
- [ ] `/components/ResponseBadge.tsx`
- [ ] `/components/ProofBlock.tsx`
- [ ] `/components/CTABlock.tsx`

**Existing Components to Update:**
- [ ] `/components/Header.tsx` (add phone + CTA button)

**Pages to Build:**
- [ ] `/app/services/restaurant-hood-cleaning/page.tsx`
- [ ] `/app/locations/miami/hood-cleaning/page.tsx`
- [ ] `/app/locations/boca-raton/hood-cleaning/page.tsx`
- [ ] `/app/locations/fort-lauderdale/hood-cleaning/page.tsx`

**Each Page Must Include:**
- [ ] Hero CTA block (above fold)
- [ ] Mid-page `<CertificateForm>` (after section 1 or 2)
- [ ] `<ProofBlock>` (after process section)
- [ ] Footer CTA block (above `<Footer>`)
- [ ] Minimum 2 links to `/pricing/instant-quote?src=...`

---

**Status:** Conversion layer spec complete
**Next:** Acceptance tests & Lighthouse targets
