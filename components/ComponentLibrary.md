# Fast Solutions - Component Library Documentation

## Phase 7: Component Specifications

This document provides comprehensive examples and usage guidelines for all UI components in the Fast Solutions project.

---

## Button Component

### Import
```tsx
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
```

### Variants

#### Primary Button (Coral/Orange)
**Usage**: Main CTAs, important actions
```tsx
<Button variant="primary" size="lg">
  Get Started
  <ArrowRight className="w-4 h-4" />
</Button>
```
- Background: `#F97316` (Coral/Orange)
- Text: White
- Hover: Darker coral `#EA580C`
- Includes scale effect on click

#### Secondary Button (Navy)
**Usage**: Secondary actions, alternative CTAs
```tsx
<Button variant="secondary" size="lg">
  Learn More
</Button>
```
- Background: `#1E293B` (Navy)
- Text: White
- Hover: Lighter navy `#334155`

#### Outline Button (Navy Border)
**Usage**: Tertiary actions, less emphasis
```tsx
<Button variant="outline" size="default">
  Request Quote
</Button>
```
- Border: `#4F46E5` (Indigo)
- Text: `#4F46E5`
- Hover: Fills with `#4F46E5`, text becomes white

#### Outline Button (Coral Border)
**Usage**: Alternate outline style with warm color
```tsx
<Button variant="outline-coral" size="default">
  Contact Us
</Button>
```
- Border: `#F97316` (Coral)
- Text: `#F97316`
- Hover: Fills with `#F97316`, text becomes white

#### Ghost Button
**Usage**: Subtle actions, inline links
```tsx
<Button variant="ghost">
  View Details
</Button>
```
- No background or border
- Text with hover underline
- Color shifts to `#4F46E5` on hover

### Button Sizes
```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>

<Button size="icon"><Icon /></Button>
<Button size="icon-sm"><Icon /></Button>
<Button size="icon-lg"><Icon /></Button>
```

### Complete Example
```tsx
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

// CTA Section
<div className="flex gap-4">
  <Button variant="primary" size="lg">
    Get Started
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </Button>

  <Button variant="outline" size="lg">
    Download Brochure
    <Download className="w-4 h-4" />
  </Button>
</div>
```

---

## Card Component

### Import
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
```

### Variants

#### Default Card
**Usage**: Standard content containers with shadow
```tsx
<Card variant="default" className="p-6">
  <h3 className="font-bold mb-2">Card Title</h3>
  <p className="text-slate-600">Card content goes here</p>
</Card>
```
- White background
- Subtle shadow (`shadow-sm`)
- Rounded corners (`rounded-xl`)

#### Bordered Card
**Usage**: Cleaner look, hover interactions
```tsx
<Card variant="bordered" className="p-6">
  <h3 className="font-bold mb-2">Card Title</h3>
  <p className="text-slate-600">Card content goes here</p>
</Card>
```
- White background
- 1px border in `border-slate-200`
- Hover: Border changes to `#4F46E5`

#### Elevated Card
**Usage**: Interactive cards, clickable items
```tsx
<Card variant="elevated" className="p-6">
  <h3 className="font-bold mb-2">Card Title</h3>
  <p className="text-slate-600">Card content goes here</p>
</Card>
```
- Lifts on hover (`hover:-translate-y-1`)
- Shadow increases on hover
- Cursor: pointer
- Smooth 300ms transition

### Feature Card Example
```tsx
<Card variant="elevated" className="group p-8">
  {/* Icon */}
  <div className="w-14 h-14 rounded-xl bg-[#4F46E5]/10 flex items-center justify-center mb-6 group-hover:bg-[#4F46E5] transition-colors">
    <Code className="w-7 h-7 text-[#4F46E5] group-hover:text-white transition-colors" />
  </div>

  {/* Title */}
  <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#4F46E5] transition-colors">
    Feature Title
  </h3>

  {/* Description */}
  <p className="text-slate-600 leading-relaxed">
    Feature description explaining the benefit.
  </p>

  {/* Decorative bottom border */}
  <div className="mt-6 pt-6 border-t-2 border-transparent group-hover:border-[#F97316] transition-all" />
</Card>
```

---

## Input Component

### Import
```tsx
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
```

### Variants

#### Standard Input (Default)
**Usage**: Standard forms on white/light backgrounds
```tsx
<div className="space-y-2">
  <Label htmlFor="email">Email Address</Label>
  <Input
    id="email"
    type="email"
    placeholder="you@example.com"
    variant="default"
  />
</div>
```
- Full-width with padding
- Clear label above
- Border with focus ring in `#4F46E5`
- Height: 40px (h-10)

#### Underline Input (On Colored Backgrounds)
**Usage**: Forms on colored backgrounds (navy, indigo, etc.)
```tsx
<div className="bg-[#4F46E5] p-8 rounded-xl">
  <div className="space-y-2">
    <Label htmlFor="name" className="text-white">Full Name</Label>
    <Input
      id="name"
      type="text"
      placeholder="John Doe"
      variant="underline"
    />
  </div>
</div>
```
- Underline-only style
- White text on colored background
- Light placeholder text
- Focus: White underline glow

### Form Example
```tsx
<form className="space-y-6">
  {/* Standard inputs */}
  <div className="space-y-2">
    <Label htmlFor="name">Your Name</Label>
    <Input id="name" placeholder="Enter your name" />
  </div>

  <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="you@example.com" />
  </div>

  <div className="space-y-2">
    <Label htmlFor="message">Message</Label>
    <Textarea id="message" placeholder="Your message..." rows={4} />
  </div>

  <Button variant="primary" size="lg" type="submit">
    Send Message
    <ArrowRight className="w-4 h-4" />
  </Button>
</form>
```

### Contact Form on Colored Background
```tsx
<div className="bg-[#4F46E5] p-8 rounded-xl">
  <form className="space-y-6">
    <div className="space-y-2">
      <Label className="text-white">Name</Label>
      <Input variant="underline" placeholder="Your name" />
    </div>

    <div className="space-y-2">
      <Label className="text-white">Email</Label>
      <Input variant="underline" type="email" placeholder="Your email" />
    </div>

    <Button variant="primary" size="lg" className="bg-white text-[#4F46E5] hover:bg-slate-100">
      Submit
      <ArrowRight className="w-4 h-4" />
    </Button>
  </form>
</div>
```

---

## Section Heading Component

### Import
```tsx
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
```

### Basic Usage

#### Left-Aligned (Default)
```tsx
<SectionHeading
  tag="What We Offer"
  title="Comprehensive Solutions"
  description="We provide end-to-end services designed to meet your unique business needs and drive measurable results."
/>
```

#### Center-Aligned
```tsx
<SectionHeading
  tag="Our Services"
  title={<>Complete Solutions for <span className="text-[#4F46E5]">Every Need</span></>}
  description="From IT to Real Estate, we've got you covered with professional expertise."
  align="center"
/>
```

#### With Action Button
```tsx
<SectionHeading
  tag="Latest Projects"
  title="Our Recent Work"
  description="Explore our portfolio of successful projects and client success stories."
  action={
    <Button variant="outline">
      View All Projects
      <ArrowRight className="w-4 h-4" />
    </Button>
  }
/>
```

### Styling Options

#### Custom Title with Accent
```tsx
<SectionHeading
  tag="About Us"
  title={
    <>
      Building <span className="text-[#F97316]">Complete Solutions</span>
      {' '}with Fast Solutions
    </>
  }
  description="Your trusted partner for comprehensive business services."
/>
```

### Complete Section Example
```tsx
<section className="py-20 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <SectionHeading
      tag="What We Offer"
      title={<>Our <span className="text-[#4F46E5]">Core Features</span></>}
      description="Comprehensive solutions designed to meet your unique needs and drive measurable results."
      align="center"
    />

    {/* Content Grid */}
    <div className="grid md:grid-cols-3 gap-8">
      {/* Cards go here */}
    </div>
  </div>
</section>
```

---

## Icon System

### Import Icons
```tsx
import { Code, Monitor, Server, ArrowRight } from 'lucide-react';
// Or use the icon map
import { getIcon } from '@/lib/iconMap';
```

### Icon Sizes
```tsx
// Small (16px)
<Code className="w-4 h-4" />

// Default (20-24px)
<Code className="w-5 h-5" /> // or w-6 h-6

// Large (32-40px)
<Code className="w-8 h-8" /> // or w-10 h-10
```

### Icon Colors
```tsx
// Primary brand color
<Code className="w-6 h-6 text-[#4F46E5]" />

// Accent coral
<ArrowRight className="w-4 h-4 text-[#F97316]" />

// Navy/Dark
<Monitor className="w-6 h-6 text-[#1E293B]" />

// Slate gray
<Server className="w-5 h-5 text-slate-600" />

// White (on dark backgrounds)
<Code className="w-6 h-6 text-white" />
```

### Icon with Background
```tsx
{/* Light background */}
<div className="w-12 h-12 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center">
  <Code className="w-6 h-6 text-[#4F46E5]" />
</div>

{/* With hover effect */}
<div className="w-12 h-12 rounded-lg bg-[#4F46E5]/10 hover:bg-[#4F46E5] transition-colors group">
  <Code className="w-6 h-6 text-[#4F46E5] group-hover:text-white transition-colors" />
</div>
```

### Icon Animations
```tsx
{/* Slide animation */}
<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />

{/* Scale animation */}
<Code className="w-6 h-6 transition-transform hover:scale-110" />

{/* Color transition */}
<Monitor className="w-6 h-6 text-[#4F46E5] transition-colors hover:text-[#F97316]" />
```

---

## Common Patterns

### Service Card
```tsx
<Card variant="elevated" className="group p-6">
  <div className="w-12 h-12 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F46E5] transition-colors">
    <Code className="w-6 h-6 text-[#4F46E5] group-hover:text-white transition-colors" />
  </div>

  <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#4F46E5] transition-colors">
    IT Solutions
  </h3>

  <p className="text-slate-600 text-sm mb-4">
    Transform your business with cutting-edge technology solutions.
  </p>

  <div className="flex items-center text-[#F97316] font-semibold text-sm">
    <span>Learn More</span>
    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
  </div>
</Card>
```

### CTA Banner
```tsx
<section className="py-20 px-6 bg-gradient-to-r from-[#4F46E5] to-[#6366F1]">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
      Ready to Transform Your Business?
    </h2>
    <p className="text-xl text-white/90 mb-8">
      Let's discuss how we can help you achieve your goals
    </p>
    <div className="flex flex-wrap gap-4 justify-center">
      <Button variant="primary" size="lg">
        Contact Us
        <ArrowRight className="w-4 h-4" />
      </Button>
      <Button variant="outline-coral" size="lg" className="bg-white border-white text-[#4F46E5] hover:bg-slate-100">
        Explore Services
      </Button>
    </div>
  </div>
</section>
```

### Contact Form Section
```tsx
<section className="py-20 px-6">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
    {/* Left - Colored form */}
    <div className="bg-[#4F46E5] p-8 rounded-2xl">
      <SectionHeading
        tag="Contact Us"
        title={<span className="text-white">Get in Touch</span>}
        description="We'd love to hear from you"
        className="mb-8"
      />

      <form className="space-y-6">
        <Input variant="underline" placeholder="Your Name" />
        <Input variant="underline" type="email" placeholder="Email Address" />
        <Textarea variant="underline" placeholder="Your Message" rows={4} />

        <Button variant="primary" size="lg" className="w-full">
          Send Message
          <ArrowRight className="w-4 h-4" />
        </Button>
      </form>
    </div>

    {/* Right - Info */}
    <div>
      {/* Contact information cards */}
    </div>
  </div>
</section>
```

---

## Color Reference

### Brand Colors
- **Primary Blue/Indigo**: `#4F46E5` - `text-[#4F46E5]`, `bg-[#4F46E5]`
- **Coral/Orange**: `#F97316` - `text-[#F97316]`, `bg-[#F97316]`
- **Navy**: `#1E293B` - `text-[#1E293B]`, `bg-[#1E293B]`
- **Cream**: `#FDF7F2` - `bg-[#FDF7F2]`

### Neutrals
- **White**: `#FFFFFF` - `bg-white`, `text-white`
- **Dark Text**: `#0F172A` - `text-[#0F172A]`
- **Slate**: Tailwind slate scale - `text-slate-600`, `border-slate-200`

### Usage
- Buttons: Primary = Coral, Secondary = Navy, Outline = Indigo
- Icons: Indigo backgrounds with accent highlights
- Text: Dark slate for body, white on colored backgrounds
- Borders: Light slate for cards, accent colors on hover

---

## Best Practices

1. **Consistency**: Use the same variant for the same purpose across the app
2. **Spacing**: Follow Tailwind's spacing scale (4, 6, 8, 12, 16, 20, 24)
3. **Typography**: Bold headings (font-bold, font-black), regular body (font-normal, font-medium)
4. **Transitions**: Always use `transition-all duration-300` for smooth animations
5. **Accessibility**: Include proper labels, aria-labels, and focus states
6. **Responsive**: Use responsive breakpoints (sm:, md:, lg:, xl:)
