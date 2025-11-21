# Design Guidelines: All About Plumbing and Backflow

## Design Approach

**Selected Approach:** Professional Service Business Model - Drawing inspiration from successful local service platforms (HomeAdvisor, Thumbtack) combined with trust-building elements typical of veteran-owned businesses. Focus on credibility, accessibility, and conversion optimization.

**Key Principles:**
- Trust and professionalism above all
- Clear, immediate call-to-action visibility
- Mobile-first for on-the-go service requests
- Veteran ownership as a pride point, not gimmick

## Typography

**Font Families:**
- Primary (Headlines): 'Inter' or 'Outfit' - Clean, modern, professional
- Body Text: 'Inter' - Excellent readability
- Accent/CTA: Same as primary for consistency

**Hierarchy:**
- H1 (Hero): text-5xl md:text-6xl lg:text-7xl, font-bold
- H2 (Section Headers): text-3xl md:text-4xl lg:text-5xl, font-bold
- H3 (Service Cards): text-xl md:text-2xl, font-semibold
- Body: text-base md:text-lg, font-normal
- Small/Meta: text-sm, font-medium

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-20 lg:py-24
- Component spacing: space-y-8 md:space-y-12
- Card padding: p-6 md:p-8
- Button padding: px-6 py-3 md:px-8 md:py-4

**Container Strategy:**
- Full-width sections with max-w-7xl inner containers
- Content max-width: max-w-6xl
- Form max-width: max-w-2xl

## Component Library

### Hero Section (Full viewport height: min-h-screen)
- Large background image: Professional plumber at work or modern plumbing installation (high-quality, authentic)
- Overlay with gradient for text readability
- Centered content with:
  - Veteran-owned badge/indicator (subtle, professional)
  - Business name and tagline
  - Primary CTA: "Call Now: (719) XXX-XXXX" with phone icon
  - Secondary CTA: "Schedule Service"
  - Trust indicators: "24/7 Emergency Service • Licensed & Insured • Pueblo's Trusted Since XXXX"
- Buttons with backdrop-blur-sm bg-white/10 treatment over image

### Services Section
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Service cards with:
  - Icon from Heroicons (wrench, beaker, home, building-office)
  - Service title
  - Brief 2-3 sentence description
  - "Learn More" link
- Hover: subtle lift transform and shadow

### Trust Section (2-column on desktop)
- Left: Veteran ownership story (image of owner/team in uniform or with certification)
- Right: Key credentials and certifications in clean list
- Background: subtle alternate section treatment

### Emergency Services Callout
- Full-width banner treatment
- Bold messaging: "24/7 Emergency Plumbing Services"
- Prominent phone number
- Brief response time promise

### Service Area Map Section
- Heading: "Proudly Serving Pueblo, CO"
- Optional embedded map or stylized area indicator
- List of specific neighborhoods/areas served

### Contact Form (Single column, max-w-2xl centered)
- Fields: Name, Phone, Email, Service Type (dropdown), Message
- Large, accessible inputs with proper labels
- Prominent submit button
- Form appears in dedicated section with supporting text about response times

### Footer (Multi-column on desktop: grid-cols-1 md:grid-cols-4)
- Column 1: Business info and veteran badge
- Column 2: Quick links to services
- Column 3: Service areas
- Column 4: Contact info and social links
- Bottom bar: Copyright and license numbers

## Icons
**Library:** Heroicons via CDN
**Usage:** Service cards, contact methods, feature highlights

## Images

**Hero Background:**
- High-quality image of professional plumber working on modern fixtures or pipe installation
- Should convey competence and professionalism
- Authentic, not stock photo feeling

**About/Trust Section:**
- Photo of owner or team, preferably showcasing veteran connection (uniform, flag, certification photo)
- Professional headshot quality

**Service Cards:**
- Optional: Small relevant images for each service category
- If used, maintain consistent aspect ratio and treatment

## Page Structure (8 Sections)

1. **Hero** - Full-screen impact with CTAs
2. **Services Grid** - 6+ service cards in grid
3. **Why Choose Us** - 3-4 key differentiators with icons
4. **Veteran-Owned Story** - 2-column about section
5. **Emergency Services Banner** - Full-width callout
6. **Service Area** - Pueblo, CO focus
7. **Contact Form** - Conversion-focused
8. **Footer** - Comprehensive site navigation

**Critical:** No forced viewport heights beyond hero. Sections flow naturally with consistent py-20 lg:py-24 spacing. Multi-column layouts used strategically in services, features, and footer. Mobile stacks to single column throughout.