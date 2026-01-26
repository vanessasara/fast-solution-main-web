# Fast Solutions - Icon System Documentation

## Overview
The project uses Lucide React icons for consistent iconography across all services and features. Icons are mapped through a centralized system for easy management.

## Icon Map Location
`/lib/iconMap.ts` - Central icon mapping utility

## Usage

### Using Icon Components Directly
```tsx
import { Code, Monitor, Server } from 'lucide-react';

<Code className="w-6 h-6 text-[#4F46E5]" />
```

### Using the Icon Map (Recommended for Dynamic Icons)
```tsx
import { getIcon } from '@/lib/iconMap';

const IconComponent = getIcon('Code');
<IconComponent className="w-6 h-6 text-[#4F46E5]" />
```

## Standard Icon Sizes
- **Small**: `w-4 h-4` (16px) - For inline text, small buttons
- **Default**: `w-5 h-5` or `w-6 h-6` (20-24px) - For cards, list items
- **Large**: `w-8 h-8` or `w-10 h-10` (32-40px) - For hero sections, large features

## Service Icons

### IT Solutions & Digital Tech
- Primary: `Code`
- Secondary: `Monitor`, `Server`

### Marketing & Advertising
- Primary: `Megaphone`
- Secondary: `BarChart`, `Target`

### Printing & Packaging
- Primary: `Printer`
- Secondary: `Package`, `FileText`

### Hospitality & Tourism App
- Primary: `Hotel`
- Secondary: `Utensils`, `Calendar`

### Soft Skills & Foreign Education
- Primary: `GraduationCap`
- Secondary: `BookOpen`, `Users`

### Travel Agency & Ticketing
- Primary: `Plane`
- Secondary: `Ticket`, `Globe`

### Consultant & Travel Advisory
- Primary: `Compass`
- Secondary: `Briefcase`, `Map`

### Real Estate
- Primary: `Building`
- Secondary: `Home`, `Key`

## Color Guidelines

### Icon Colors
- **Primary Blue**: `text-[#4F46E5]` - Main brand color for most icons
- **Coral/Orange**: `text-[#F97316]` - Accent icons, CTAs, highlights
- **Navy/Dark**: `text-[#1E293B]` - Alternative for contrast
- **Slate**: `text-slate-600` or `text-slate-700` - Body text icons
- **White**: `text-white` - On colored backgrounds

### Icon Backgrounds
When icons need backgrounds:
```tsx
// Light background with primary color
<div className="w-12 h-12 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center">
  <Icon className="w-6 h-6 text-[#4F46E5]" />
</div>

// On hover, background becomes solid
<div className="w-12 h-12 rounded-lg bg-[#4F46E5]/10 hover:bg-[#4F46E5] transition-colors">
  <Icon className="w-6 h-6 text-[#4F46E5] group-hover:text-white transition-colors" />
</div>
```

## Stroke Width
Use consistent stroke width: `strokeWidth={2}` for custom SVGs to match Lucide icons.

## Complete Icon List

### Technology & Development
- `Code` - Programming, development
- `Monitor` - Displays, dashboards
- `Server` - Infrastructure, backend
- `Globe` - Web, internet, global

### Business & Marketing
- `Megaphone` - Marketing, advertising
- `BarChart` - Analytics, statistics
- `Target` - Goals, targeting
- `Briefcase` - Business, professional

### Communication & Social
- `Users` - Team, community, customers
- `Calendar` - Events, scheduling
- `FileText` - Documents, content

### Travel & Hospitality
- `Plane` - Travel, flights
- `Hotel` - Accommodation, hospitality
- `Utensils` - Dining, restaurants
- `Ticket` - Bookings, tickets
- `Compass` - Navigation, exploration
- `Map` - Location, directions

### Education & Learning
- `GraduationCap` - Education, graduation
- `BookOpen` - Learning, courses

### Real Estate & Property
- `Building` - Commercial real estate
- `Home` - Residential properties
- `Key` - Access, ownership

### Production & Services
- `Printer` - Printing services
- `Package` - Packaging, delivery

## Animation Examples

### Icon with Hover Animation
```tsx
<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
```

### Icon with Scale Animation
```tsx
<Code className="w-6 h-6 transition-transform duration-300 hover:scale-110" />
```

### Icon Color Transition
```tsx
<Icon className="w-6 h-6 text-[#4F46E5] transition-colors duration-300 group-hover:text-[#F97316]" />
```

## Best Practices

1. **Consistency**: Use the same icon for the same concept throughout the app
2. **Size**: Keep icons proportional to their context
3. **Color**: Follow the brand color palette
4. **Accessibility**: Add aria-labels when icons convey important information
5. **Performance**: Import only the icons you need

## Examples in Components

### Feature Card with Icon
```tsx
<div className="p-6 border-2 border-slate-200 rounded-xl">
  <div className="w-14 h-14 rounded-xl bg-[#4F46E5]/10 flex items-center justify-center mb-4">
    <Code className="w-7 h-7 text-[#4F46E5]" />
  </div>
  <h3 className="text-xl font-bold mb-2">Feature Title</h3>
  <p className="text-slate-600">Feature description</p>
</div>
```

### Navigation Icon
```tsx
<div className="w-9 h-9 bg-[#4F46E5]/10 rounded-lg flex items-center justify-center">
  <Icon className="w-5 h-5 text-[#4F46E5]" />
</div>
```

### Button with Icon
```tsx
<Button className="gap-2">
  Get Started
  <ArrowRight className="w-4 h-4" />
</Button>
```
