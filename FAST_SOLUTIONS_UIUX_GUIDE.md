# Fast Solutions - Complete UI/UX Implementation Guide

## Project Overview

**Company:** Fast Solutions  
**Type:** Multi-Service Conglomerate  
**Tech Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, shadcn/ui, Clerk Authentication, Unsplash Images

### Services Offered (8 Total)
1. IT Solutions and Digital Tech
2. Marketing and Advertising
3. Printing and Packaging
4. Hospitality and Tourism App
5. Soft Skills and Foreign Education
6. Travel Agency and Ticketing
7. Consultant and Travel Advisory
8. Real Estate

---

## Design Philosophy

### Core Aesthetic Direction
Adopt a **Professional-Modern-Clean** aesthetic that balances corporate trustworthiness with contemporary freshness. The design should feel premium without being cold, approachable without being casual.

### Primary Color Palette
- **Primary Blue:** #4F46E5 (Indigo-600) - Trust, technology, professionalism
- **Secondary Coral/Orange:** #F97316 (Orange-500) - Energy, action, warmth
- **Accent Navy:** #1E293B (Slate-800) - Depth, authority, contrast
- **Background Cream:** #FDF7F2 - Warmth, sophistication, approachability
- **Pure White:** #FFFFFF - Clean sections, breathing room
- **Text Dark:** #0F172A - High readability, modern feel

### Typography System
- **Display/Headlines:** Use a bold geometric sans-serif (configure via Google Fonts: DM Sans, Plus Jakarta Sans, or Outfit)
- **Body Text:** Clean readable sans-serif (matching family at regular/medium weights)
- **Accent Text:** Consider using the display font in lighter weights for subheadings
- **Avoid:** Inter, Roboto, Arial - these are overused and generic

### Spacing Philosophy
- Embrace generous white space between sections (min 80px-120px vertical padding)
- Use asymmetric layouts where content blocks don't align perfectly
- Create visual breathing room that conveys premium quality

---

## Phase 1: Project Foundation and Global Components

### 1.1 Project Setup
- Initialize Next.js 14+ with App Router and TypeScript
- Install and configure Tailwind CSS with custom color palette in tailwind.config
- Set up shadcn/ui with the following components: Button, Card, Navigation Menu, Sheet, Input, Textarea, Accordion, Badge, Avatar, Separator, Dialog
- Configure Clerk for authentication
- Set up routing structure for all pages

### 1.2 Global Layout Structure
Create a root layout that wraps all pages with consistent header and footer. Implement smooth scroll behavior globally.

### 1.3 Navigation Header Design

**Desktop Navigation Structure:**
- Logo positioned left (Fast Solutions with a distinctive icon mark)
- Center navigation with: Home, About Us, Services (dropdown), Contact
- Right side: Login button (outlined style) transforming to Dashboard button when authenticated

**Services Dropdown (using shadcn Navigation Menu):**
- Implement mega-menu style dropdown
- Display all 8 services in a 2-column or 4-column grid layout
- Each service item shows: Icon, Service Name, Brief one-line description
- Hover states with subtle background color shift
- Links route to /services/[service-slug]

**Mobile Navigation:**
- Hamburger menu icon using shadcn Sheet component
- Full-screen overlay with navigation links
- Services expand as accordion within mobile menu
- Login/Dashboard button prominently placed

**Header Behaviors:**
- Sticky header with backdrop blur effect on scroll
- Subtle shadow appears after scrolling past hero section
- Smooth transition animations for all state changes

### 1.4 Footer Design

**Layout Structure:**
- Full-width dark navy (#1E293B) or deep charcoal background
- 4-column grid on desktop: Company Info, Quick Links, Services, Newsletter
- Company info includes: Logo, brief tagline, social media icons
- Quick links: Home, About, Contact, Privacy Policy, Terms
- Services: List all 8 services with links
- Newsletter: Email input with subscribe button (coral/orange accent)

**Footer Embellishments:**
- Add subtle decorative curve or wave at the top edge
- Include a hand-drawn style arrow pointing to newsletter (referencing the Fenet designs)
- Social icons with hover color transitions
- Bottom bar with copyright and secondary links

---

## Phase 2: Home Page (Services Landing Page)

### 2.1 Hero Section

**Layout Concept:**
- Split-screen asymmetric layout: 55% content left, 45% visual right
- Left side contains headline, description, CTA buttons, and trust badges
- Right side features a floating composition of service-related imagery

**Content Elements:**
- Small badge/tag above headline: "Your Multi-Service Partner"
- Main headline: Large, bold, spanning 2-3 lines with accent color on key words
- Subheadline: 2-3 sentences explaining the breadth of services
- Two CTA buttons: Primary (filled coral/orange) "Explore Services" and Secondary (outlined) "Get Consultation"
- Trust indicators below CTAs: Partner logos or certification badges

**Visual Treatment:**
- Background: Cream/off-white base with subtle gradient or geometric pattern
- Right visual: Collage of high-quality Unsplash images representing different services
- Add decorative elements: Abstract shapes, dots pattern, or subtle grid overlay
- Consider floating cards or elements that create depth

**Animation Directives:**
- Headline text reveals with staggered fade-up animation
- CTA buttons slide in from bottom with slight delay
- Right-side images float in with parallax-like stagger effect
- Trust badges fade in as final element

### 2.2 Partner/Client Logos Section

**Simple Trust Bar:**
- Light gray or white background strip
- Horizontally centered row of grayscale client/partner logos
- Auto-scrolling marquee effect optional
- On hover, logos gain full color
- Small label above: "Trusted by Industry Leaders"

### 2.3 Statistics Counter Section

**Layout:**
- Full-width section with cream or light background
- 4-column grid displaying key metrics
- Large animated counter numbers
- Supporting label text below each number

**Metrics to Display:**
- Years of Experience (15+)
- Projects Delivered (1200+)
- Happy Clients (100+)
- Team Members (3200+)

**Animation:**
- Numbers count up when section scrolls into view
- Implement using intersection observer
- Add subtle "+" suffix with accent color

### 2.4 Services Overview Grid

**Section Header:**
- Small accent-colored label: "What We Offer"
- Main heading: "Comprehensive Solutions for Every Business Need"
- Supporting paragraph explaining service diversity

**Grid Layout:**
- 4-column grid on desktop, 2 on tablet, 1 on mobile
- Each service displayed as interactive card

**Service Card Design:**
- White background with subtle border or shadow
- Icon at top (use Lucide icons via shadcn)
- Service name as card heading
- 2-line description
- "Learn More" link with arrow
- Hover state: Lift effect with shadow increase, accent color border appears

**Services to Display (all 8):**
1. IT Solutions and Digital Tech - Code/Monitor icon
2. Marketing and Advertising - Megaphone/Chart icon
3. Printing and Packaging - Printer/Package icon
4. Hospitality and Tourism App - Hotel/App icon
5. Soft Skills and Foreign Education - GraduationCap/Users icon
6. Travel Agency and Ticketing - Plane/Ticket icon
7. Consultant and Travel Advisory - Compass/Briefcase icon
8. Real Estate - Building/Home icon

### 2.5 Value Proposition Section

**Two-Column Layout:**
- Left column: Stacked feature cards or list
- Right column: Large feature image or app mockup

**Left Column Content (3-4 items):**
- "Fast Delivery" - Quick turnaround on all projects
- "Innovation Driven" - Latest technologies and approaches
- "Customer Focus" - Dedicated support and consultation
- Each item: Icon, heading, brief description

**Right Column Visual:**
- Single large image showing team collaboration or dashboard mockup
- Add floating accent cards with statistics
- Decorative shapes behind image

### 2.6 Featured Services Highlight

**Alternating Layout Section:**
- Two featured services displayed in alternating left-right pattern
- Each block: Large image on one side, content on other

**Content Per Block:**
- Service category tag
- Service name as heading
- 2-3 paragraph description of service benefits
- Bullet points of key features
- CTA button to service page

**Visual Treatment:**
- Images sourced from Unsplash relevant to each service
- Add accent color frame or border to images
- Include floating icons or badges

### 2.7 Process/How We Work Section

**Section Design:**
- Dark navy or charcoal background for contrast
- White text with accent highlights

**Process Steps (4 steps):**
1. Consultation - Understanding your needs
2. Planning - Strategic approach development
3. Execution - Professional implementation
4. Support - Ongoing assistance and optimization

**Visual Representation:**
- Horizontal timeline or connected cards
- Each step: Number badge, icon, title, description
- Connecting lines or arrows between steps
- Consider animated progress indicator on scroll

### 2.8 Testimonials Section

**Layout Options:**
- Carousel slider showing one testimonial at a time
- Or grid of 3 testimonial cards

**Testimonial Card Design:**
- Large quotation mark icon
- Quote text (2-3 sentences)
- Author photo (circular, use avatar placeholder)
- Author name and company/role
- Star rating display

**Interaction:**
- Navigation arrows and dots for carousel
- Auto-play with pause on hover
- Smooth slide transitions

### 2.9 Team Preview Section

**Section Header:**
- "Meet Our Expert Team"
- Brief intro about team expertise

**Team Grid:**
- 4 team members displayed
- Circular or rounded-square photos
- Name and role below each
- Social media icons on hover
- "View All Team" button linking to About page

### 2.10 Latest News/Blog Preview

**Grid Layout:**
- 3-column card grid
- Each card: Image, date tag, title, excerpt, read more link

**Card Design:**
- Image takes top portion with overlay category tag
- Content below with clean typography
- Hover effect on entire card

### 2.11 Call-to-Action Banner

**Full-Width Banner:**
- Vibrant gradient background (coral to orange or blue gradient)
- Centered text content
- Heading: "Ready to Transform Your Business?"
- Subtext: Brief encouragement
- Two buttons: Contact Us (white/light) and Explore Services (outlined)

### 2.12 Newsletter Signup Section

**Split Design:**
- Left: Heading and supporting text about newsletter benefits
- Right: Email input field with subscribe button
- Add decorative hand-drawn arrow pointing to input
- Small "No spam" promise text

---

## Phase 3: About Page

### 3.1 About Hero Section

**Layout:**
- Full-width hero with overlay text
- Large team photo or office image as background
- Text overlay on darker portion: Heading, brief intro

**Content:**
- Small tag: "About Us"
- Main heading: "Building Complete Solutions with Fast Solutions"
- Intro paragraph about company mission

**Visual Treatment:**
- Image with diagonal or angled mask
- Add accent color shape elements
- Decorative lines or arrows

### 3.2 Our Vision Section

**Two-Column Layout:**
- Left: Vision statement and company story text (multiple paragraphs)
- Right: Two stacked images with accent color block element

**Content Focus:**
- Company founding story
- Core values and mission
- What sets the company apart

**Visual Elements:**
- Pull quote highlighted in accent color
- Timeline markers for company history
- Hand-drawn decorative arrow

### 3.3 Company Video Section

**Full-Width Video Block:**
- Large video thumbnail with play button overlay
- Text above: "Let's See Our Promo Video"
- On click: Open video modal or inline play

### 3.4 Full Team Section

**Section Header:**
- "Meet With Our Dedicated Team Members"
- "All Members" button to right

**Team Grid:**
- 4 columns on desktop
- 6-8 team members displayed
- Each: Photo, name, role, social icons

**Team Card Design:**
- Square or slightly rounded photo
- Colored background accent on hover
- Name and title below
- Row of social icons (LinkedIn, Twitter, Instagram)
- Subtle lift animation on hover

### 3.5 Awards and Achievements

**Display Grid:**
- Horizontal row of achievement badges/icons
- Award names and years
- Certification logos

### 3.6 Client Testimonial Feature

**Large Feature Layout:**
- Left: Client photo (larger, with background shape)
- Right: Quote text, client name, company
- Navigation dots for multiple testimonials

### 3.7 FAQ Section

**Layout:**
- Two columns: Left has FAQ heading and search input, Right has accordion
- Use shadcn Accordion component

**FAQ Questions (sample):**
- How do I get started with your services?
- What industries do you serve?
- Do you offer customized solutions?
- What is your typical project timeline?
- How do you handle support after project completion?

**Accordion Styling:**
- Clean borders, generous padding
- Smooth expand/collapse animation
- Accent color on active item

### 3.8 Contact CTA Section

**Embedded Contact Form:**
- Split layout: Form on left (colored background), map on right
- Form fields: Name, Email, Phone, Message
- Submit button with arrow icon
- Use shadcn Input and Button components

---

## Phase 4: Contact Page

### 4.1 Contact Hero

**Simple Hero:**
- Cream/beige background
- Left: "Contact Us" tag, large heading "We'd Love To Hear From You", supporting text
- Right: Visual element or decorative shapes

### 4.2 Contact Information Cards

**Three-Card Row:**
- Address card: Location icon, full address text
- Support card: Phone icon, phone number, email address
- Hours card: Clock icon, operating hours for weekdays and weekends

**Card Design:**
- White background with subtle shadow
- Icon in rounded square or circle
- Clean typography hierarchy

### 4.3 Contact Form and Map Section

**Split Layout:**
- Left half: Colored background (indigo/blue), contact form
- Right half: Dark background with embedded map and small image grid

**Form Design:**
- "Contact Us" tag
- Heading: "Contact Us For Any Query"
- Input fields: Name, Email, Phone, Message (textarea)
- All inputs with underline style on colored background
- Submit button: White background with arrow icon

**Map Side:**
- Embedded Google Map or static map image
- Small gallery of office/project images below map

### 4.4 Additional Contact Methods

**Alternative Options:**
- WhatsApp contact button
- Appointment booking link
- Social media direct links

---

## Phase 5: Individual Service Pages

### Service Page URL Structure
All service pages follow: `/services/[service-slug]`
- `/services/it-solutions-digital-tech`
- `/services/marketing-advertising`
- `/services/printing-packaging`
- `/services/hospitality-tourism-app`
- `/services/soft-skills-foreign-education`
- `/services/travel-agency-ticketing`
- `/services/consultant-travel-advisory`
- `/services/real-estate`

### 5.1 Service Page Hero Template

**Layout Pattern:**
- Angled or diagonal split background
- Left side: Service name, description, key highlights
- Right side: Large service-relevant image with accent frame

**Content Elements:**
- Service category tag
- Large service name heading with accent word highlight
- 2-3 sentence service overview
- Key benefit bullets or tags
- Primary CTA: "Get Started" or "Request Quote"

**Visual Treatment:**
- Background combines cream and dark sections
- Image has orange/coral accent border or frame offset
- Hand-drawn arrow pointing to CTA

### 5.2 Service Features Grid

**Section Design:**
- 6 feature cards in 2-row, 3-column grid
- Each card: Icon, feature name, description
- Cards have bordered style with hover accent

**Feature Card Styling:**
- Centered icon at top
- Bold feature name
- 2-line description
- Subtle border, generous padding
- Hover: Border color changes to accent, slight lift

### 5.3 Process Section

**Horizontal Process Flow:**
- Labeled section: "Process"
- Heading: "That's Our Cool Working Process"
- Image or video thumbnail on left
- Process description text on right
- "Learn More" button

**Alternative Layout:**
- Vertical timeline with numbered steps
- Each step expandable for details

### 5.4 Pricing Section (where applicable)

**Pricing Cards:**
- Three-tier pricing: Starter, Basic/Standard, Premium
- Dark background section for contrast
- Cards: White background, different accent colors per tier

**Card Content:**
- Plan name and monthly price
- Feature list with checkmarks
- "Start Now" CTA button
- Popular/recommended badge on middle tier

**Visual Differentiation:**
- Premium tier has coral/orange accent
- Middle tier slightly elevated or highlighted
- Starter tier clean and simple

### 5.5 Case Studies/Portfolio Section

**Gallery Grid:**
- 4-image masonry or grid layout
- Hover overlay with project name and view button
- Filter tabs by project type if multiple categories

### 5.6 Service-Specific Testimonial

**Featured Testimonial:**
- Large quote block
- Client photo and details
- Specific to that service category

### 5.7 Related Services

**Horizontal Scroll or Grid:**
- 3-4 cards showing other services
- Encourages exploration of full service offering
- Simple card: Icon, name, brief text, link

### 5.8 Service CTA Section

**Conversion-Focused Block:**
- Colored background (service accent color or standard)
- Heading: "Need [Service Name] for Your Business?"
- Supporting text
- Two CTAs: Contact Us, View All Services

---

## Phase 6: Authentication and Dashboard Integration

### 6.1 Clerk Authentication Setup

**Configuration:**
- Install @clerk/nextjs
- Configure environment variables for Clerk keys
- Wrap application with ClerkProvider in root layout

### 6.2 Custom Sign-In Page

**Route:** `/sign-in`

**Design Direction:**
- Match site aesthetic (not default Clerk styling)
- Split layout: Left decorative/branding, right form
- Use shadcn form components styled with Clerk
- Include social login options

**Implementation:**
- Use Clerk's custom pages approach
- Style to match brand colors and typography
- Add company branding and welcome message

### 6.3 Custom Sign-Up Page

**Route:** `/sign-up`

**Similar to Sign-In:**
- Branded design matching site
- Clear value proposition messaging
- Social signup options

### 6.4 Navigation Authentication State

**When User is Logged Out:**
- Show "Login" button (outlined style)
- Clicking navigates to /sign-in

**When User is Logged In:**
- Hide Login button
- Show "Dashboard" button (filled style)
- Optionally show user avatar with dropdown
- Dropdown: Profile, Settings, Logout

### 6.5 Dashboard Page

**Route:** `/dashboard`

**Access Control:**
- Protected route - redirect to sign-in if not authenticated
- Use Clerk's middleware for protection

**Dashboard Design:**
- Leverage existing custom dashboard UI from codebase
- Ensure consistent header/footer with main site
- Apply same color palette and typography

---

## Phase 7: Component Specifications

### 7.1 Button Variants (shadcn Button)

**Primary Button:**
- Coral/orange background (#F97316)
- White text
- Hover: Slightly darker shade
- Include right arrow icon for CTAs

**Secondary Button:**
- Navy background (#1E293B)
- White text
- Hover: Lighter navy

**Outline Button:**
- Transparent background
- Navy or coral border
- Text matches border color
- Hover: Fill with border color, text goes white

**Ghost Button:**
- No background or border
- Text only with hover underline

### 7.2 Card Component Styling

**Default Card:**
- White background
- Subtle shadow (shadow-sm or shadow)
- Rounded corners (rounded-xl)
- Padding: p-6 or p-8

**Bordered Card:**
- White background
- 1px border in gray-200
- No shadow or very light
- Hover: Border accent color

**Elevated Card (on hover):**
- Transform: translateY(-4px)
- Shadow increases
- Smooth transition (300ms ease)

### 7.3 Form Input Styling

**Standard Inputs:**
- Use shadcn Input component
- Full-width within containers
- Clear labels above
- Focus state: Accent color ring

**On Colored Backgrounds:**
- Underline-only style
- Light placeholder text
- White text input
- Focus: White underline glow

### 7.4 Section Headings Pattern

**Consistent Structure:**
- Small uppercase tag/label in accent color
- Large main heading (2xl to 4xl depending on importance)
- Supporting paragraph in gray-600
- Optional CTA button aligned right of heading

### 7.5 Icon System

**Use Lucide Icons (via shadcn):**
- Consistent stroke width
- Size: 24px default, scale for contexts
- Color: Match text or accent color

**Service Icons:**
- IT Solutions: Monitor, Code, Server
- Marketing: Megaphone, BarChart, Target
- Printing: Printer, Package, FileText
- Hospitality: Hotel, Utensils, Calendar
- Education: GraduationCap, BookOpen, Users
- Travel Agency: Plane, Ticket, Globe
- Consultant: Compass, Briefcase, Map
- Real Estate: Building, Home, Key

---

## Phase 8: Animation and Interaction Guidelines

### 8.1 Scroll Animations

**Elements to Animate:**
- Section headings: Fade up on scroll into view
- Cards: Stagger fade up within grids
- Images: Subtle scale or reveal effect
- Statistics: Number count-up animation

**Implementation Approach:**
- Use CSS animations with Intersection Observer
- Apply animation-delay for staggered effects
- Keep animations subtle and fast (300-500ms)

### 8.2 Hover Interactions

**Cards:**
- Transform: translateY(-4px) or scale(1.02)
- Shadow increase
- Border color change to accent
- Transition: 300ms ease

**Buttons:**
- Background color shift
- Subtle scale on click (0.98)
- Arrow icon moves right on hover

**Images:**
- Slight zoom within container
- Overlay appears with info

**Links:**
- Underline appears or grows
- Color shifts to accent

### 8.3 Page Transitions

**Between Pages:**
- Subtle fade transition
- Content slides up slightly on enter
- Keep transitions fast (200-300ms)

### 8.4 Loading States

**Button Loading:**
- Spinner icon replaces text
- Disabled state styling

**Page Loading:**
- Skeleton components for cards
- Subtle pulse animation

---

## Phase 9: Responsive Design Requirements

### 9.1 Breakpoint System

**Tailwind Defaults:**
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

**Key Responsive Adjustments:**
- Navigation collapses to hamburger below lg
- Grids reduce columns: 4→2→1
- Hero splits become stacked on mobile
- Font sizes scale down appropriately
- Padding reduces on mobile

### 9.2 Mobile Navigation

**Sheet Component (shadcn):**
- Full-screen slide-in from right
- Close button clearly visible
- Services section as accordion
- Login/Dashboard button prominent

### 9.3 Mobile Hero Sections

**Stack Layout:**
- Image moves above or below text
- Text centered on mobile
- CTAs stack vertically
- Reduce decorative elements

### 9.4 Mobile Cards and Grids

**Single Column:**
- Cards fill width with appropriate padding
- Maintain readable text sizes
- Touch-friendly tap targets (min 44px)

### 9.5 Mobile Forms

**Full Width:**
- Inputs span full container width
- Larger touch targets for buttons
- Adequate spacing between fields

---

## Phase 10: Image Guidelines

### 10.1 Unsplash Image Selection

**General Guidelines:**
- High resolution, professional quality
- Consistent lighting and tone
- Diverse representation in people
- Authentic, not overly staged

**By Service Category:**

**IT Solutions:**
- Modern office environments with tech
- People working on computers
- Data visualization screens
- Server rooms, clean tech imagery

**Marketing and Advertising:**
- Creative team collaboration
- Campaign planning sessions
- Digital marketing dashboards
- Presentation and brainstorming

**Printing and Packaging:**
- Printing machines in action
- Packaging design samples
- Quality inspection processes
- Finished print products

**Hospitality and Tourism App:**
- Hotel interiors and exteriors
- Restaurant and dining scenes
- Tourism destination landscapes
- Mobile app usage in travel context

**Soft Skills and Foreign Education:**
- Classroom and training settings
- International student groups
- Learning and development scenes
- Global education imagery

**Travel Agency and Ticketing:**
- Airport and travel scenes
- Booking and planning moments
- Destinations and landscapes
- Travel documentation

**Consultant and Travel Advisory:**
- Professional consultation meetings
- Business travel scenes
- Strategy and planning sessions
- Client interaction moments

**Real Estate:**
- Modern building exteriors
- Interior staging shots
- Property tours and viewings
- Urban and suburban properties

### 10.2 Image Treatment

**Consistent Processing:**
- Maintain aspect ratios per context
- Apply subtle color grading to match palette
- Use object-fit: cover for containers
- Add accent color frames where specified

---

## Phase 11: Performance and Optimization

### 11.1 Image Optimization

**Next.js Image Component:**
- Use for all images
- Implement lazy loading
- Specify sizes for responsive loading
- Use appropriate quality settings

### 11.2 Component Lazy Loading

**Dynamic Imports:**
- Heavy sections below fold can be lazy loaded
- Modal contents loaded on demand
- Carousels and complex animations

### 11.3 Font Optimization

**Next.js Font System:**
- Use next/font for Google Fonts
- Preload critical fonts
- Implement font-display: swap

---

## Phase 12: Accessibility Requirements

### 12.1 Semantic HTML

- Use proper heading hierarchy (h1, h2, h3)
- Use semantic elements (nav, main, section, article, footer)
- Form labels properly associated with inputs

### 12.2 Keyboard Navigation

- All interactive elements focusable
- Visible focus states
- Logical tab order
- Skip navigation link

### 12.3 ARIA Labels

- Icons with labels for screen readers
- Form error announcements
- Modal focus trapping
- Live regions for dynamic content

### 12.4 Color Contrast

- Text meets WCAG AA standards
- Interactive elements clearly visible
- Don't rely solely on color for information

---

## Quick Reference: Route Structure

```
/                           → Home (Services Landing Page)
/about                      → About Page
/contact                    → Contact Page
/sign-in                    → Clerk Sign In (custom styled)
/sign-up                    → Clerk Sign Up (custom styled)
/dashboard                  → Protected Dashboard
/services/it-solutions-digital-tech
/services/marketing-advertising
/services/printing-packaging
/services/hospitality-tourism-app
/services/soft-skills-foreign-education
/services/travel-agency-ticketing
/services/consultant-travel-advisory
/services/real-estate
```

---

## Quick Reference: shadcn Components to Install

```
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add navigation-menu
npx shadcn@latest add sheet
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add accordion
npx shadcn@latest add badge
npx shadcn@latest add avatar
npx shadcn@latest add separator
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add form
npx shadcn@latest add label
npx shadcn@latest add skeleton
```

---

## Final Notes

- Prioritize clean code organization with reusable components
- Create consistent component variants before building pages
- Test all interactions on multiple device sizes
- Ensure smooth performance with optimized assets
- Maintain brand consistency across all pages and states
- Document any custom components for future maintenance

This guide provides comprehensive direction for building a professional, visually distinctive multi-service company website that stands apart from generic templates while maintaining excellent usability and modern best practices.
