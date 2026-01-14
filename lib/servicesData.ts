import {
  Code,
  Megaphone,
  Printer,
  Hotel,
  GraduationCap,
  Plane,
  Compass,
  Building,
  Monitor,
  Server,
  BarChart,
  Target,
  Package,
  FileText,
  Utensils,
  Calendar,
  BookOpen,
  Users,
  Ticket,
  Globe,
  Briefcase,
  Map,
  Home,
  Key
} from 'lucide-react';

export interface ServiceFeature {
  icon: any;
  title: string;
  description: string;
}

export interface ProcessStep {
  phase: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  accentColor?: string;
}

export interface CaseStudy {
  title: string;
  client: string;
  result: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface ServiceData {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  heroImage: string;
  keyHighlights: string[];
  features: ServiceFeature[];
  process: ProcessStep[];
  pricing?: PricingTier[];
  caseStudies: CaseStudy[];
  testimonial: Testimonial;
  ctaHeading: string;
  ctaText: string;
}

export const servicesData: ServiceData[] = [
  {
    slug: 'it-solutions-digital-tech',
    name: 'IT Solutions and Digital Tech',
    tagline: 'Transform Your Business with Cutting-Edge Technology',
    category: 'Technology',
    description: 'Comprehensive digital transformation services that modernize your operations, enhance productivity, and drive innovation through custom software, cloud solutions, and advanced IT infrastructure.',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop',
    keyHighlights: [
      '9+ years of IT excellence',
      '500+ successful projects',
      '24/7 technical support',
      'Latest technology stack'
    ],
    features: [
      {
        icon: Monitor,
        title: 'Custom Software Development',
        description: 'Tailored applications built to your exact specifications using modern frameworks and best practices.'
      },
      {
        icon: Server,
        title: 'Cloud Infrastructure',
        description: 'Scalable cloud solutions on AWS, Azure, and Google Cloud with seamless migration services.'
      },
      {
        icon: Code,
        title: 'Web & Mobile Apps',
        description: 'Responsive web applications and native mobile apps for iOS and Android platforms.'
      },
      {
        icon: Users,
        title: 'IT Consulting',
        description: 'Strategic technology advisory to align IT initiatives with your business goals.'
      },
      {
        icon: Target,
        title: 'DevOps & CI/CD',
        description: 'Automated deployment pipelines and infrastructure as code for rapid development cycles.'
      },
      {
        icon: Briefcase,
        title: 'Digital Transformation',
        description: 'End-to-end modernization of legacy systems and business processes.'
      }
    ],
    process: [
      {
        phase: 'Discovery & Analysis',
        description: 'We deep-dive into your business requirements, technical constraints, and goals to create a comprehensive project roadmap.'
      },
      {
        phase: 'Architecture & Design',
        description: 'Our architects design scalable, secure solutions with detailed technical specifications and UI/UX mockups.'
      },
      {
        phase: 'Agile Development',
        description: 'Iterative development with regular sprints, demos, and feedback loops to ensure alignment with your vision.'
      },
      {
        phase: 'Deployment & Support',
        description: 'Smooth production rollout with comprehensive testing, training, and ongoing maintenance support.'
      }
    ],
    pricing: [
      {
        name: 'Starter',
        price: 'PKR 150,000',
        period: '/month',
        features: [
          'Basic web application',
          'Up to 5 pages/modules',
          'Responsive design',
          'Database integration',
          '3 months support',
          'Basic hosting setup'
        ]
      },
      {
        name: 'Professional',
        price: 'PKR 350,000',
        period: '/month',
        isPopular: true,
        accentColor: 'orange',
        features: [
          'Advanced web/mobile app',
          'Unlimited pages/modules',
          'Custom integrations',
          'Cloud infrastructure',
          '6 months support',
          'DevOps setup',
          'Security audit',
          'Performance optimization'
        ]
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        features: [
          'Full digital transformation',
          'Multi-platform solutions',
          'Microservices architecture',
          'Dedicated team',
          'Lifetime support',
          'SLA guarantees',
          'Training programs',
          'Priority 24/7 assistance'
        ]
      }
    ],
    caseStudies: [
      {
        title: 'E-Commerce Platform Overhaul',
        client: 'Retail Chain Ltd.',
        result: '300% increase in online sales',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop'
      },
      {
        title: 'Banking Mobile App',
        client: 'Financial Services Corp',
        result: '1M+ active users in 6 months',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop'
      },
      {
        title: 'Healthcare Management System',
        client: 'Hospital Network',
        result: '50% faster patient processing',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop'
      },
      {
        title: 'Logistics Tracking Platform',
        client: 'Transport Co.',
        result: 'Real-time tracking for 10K+ shipments',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop'
      }
    ],
    testimonial: {
      quote: 'Fast Solutions transformed our entire digital infrastructure. Their team delivered a robust, scalable platform that has revolutionized how we serve our customers. The level of expertise and professionalism is unmatched.',
      author: 'Ahmed Khan',
      role: 'CTO',
      company: 'TechVision Inc.'
    },
    ctaHeading: 'Need IT Solutions for Your Business?',
    ctaText: 'Let\'s discuss how our technology expertise can drive your digital transformation and accelerate growth.'
  },
  {
    slug: 'marketing-advertising',
    name: 'Marketing and Advertising',
    tagline: 'Amplify Your Brand Voice Across All Channels',
    category: 'Marketing',
    description: 'Data-driven marketing strategies that build brand awareness, engage your audience, and drive measurable business results through digital campaigns, social media, and creative content.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop',
    keyHighlights: [
      '200+ successful campaigns',
      'ROI-focused strategies',
      'Multi-channel expertise',
      'Creative excellence'
    ],
    features: [
      {
        icon: Target,
        title: 'Brand Strategy',
        description: 'Comprehensive brand positioning, identity development, and messaging frameworks that resonate.'
      },
      {
        icon: Megaphone,
        title: 'Digital Marketing',
        description: 'SEO, SEM, PPC campaigns optimized for maximum reach and conversion across all platforms.'
      },
      {
        icon: Users,
        title: 'Social Media Management',
        description: 'Content creation, community engagement, and influencer partnerships that build loyal audiences.'
      },
      {
        icon: BarChart,
        title: 'Performance Analytics',
        description: 'Real-time campaign tracking, A/B testing, and data insights to optimize marketing spend.'
      },
      {
        icon: FileText,
        title: 'Content Marketing',
        description: 'Blog posts, videos, infographics, and whitepapers that establish thought leadership.'
      },
      {
        icon: Monitor,
        title: 'Marketing Automation',
        description: 'Email campaigns, lead nurturing, and CRM integration for streamlined customer journeys.'
      }
    ],
    process: [
      {
        phase: 'Market Research',
        description: 'In-depth analysis of your target audience, competitors, and market trends to inform strategy.'
      },
      {
        phase: 'Strategy Development',
        description: 'Customized marketing roadmap with clear objectives, KPIs, and channel selection.'
      },
      {
        phase: 'Creative Execution',
        description: 'Compelling campaigns designed and launched across selected channels with A/B testing.'
      },
      {
        phase: 'Optimization & Reporting',
        description: 'Continuous monitoring, performance analysis, and strategy refinement for maximum ROI.'
      }
    ],
    pricing: [
      {
        name: 'Starter',
        price: 'PKR 75,000',
        period: '/month',
        features: [
          'Social media management (2 platforms)',
          'Basic content creation (8 posts/month)',
          '1 campaign per month',
          'Monthly analytics report',
          'Community management',
          'Basic SEO optimization'
        ]
      },
      {
        name: 'Growth',
        price: 'PKR 175,000',
        period: '/month',
        isPopular: true,
        accentColor: 'orange',
        features: [
          'Full social media suite (5 platforms)',
          'Advanced content (20 posts/month)',
          '4 campaigns per month',
          'Influencer collaborations',
          'Weekly reports & insights',
          'Dedicated account manager',
          'PPC advertising management',
          'Content calendar planning'
        ]
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        features: [
          'Comprehensive marketing strategy',
          'Unlimited campaigns',
          'Celebrity partnerships',
          '24/7 campaign management',
          'Full creative team',
          'Brand development',
          'Event marketing',
          'PR & media relations'
        ]
      }
    ],
    caseStudies: [
      {
        title: 'Product Launch Campaign',
        client: 'Tech Startup',
        result: '5M+ impressions in first month',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop'
      },
      {
        title: 'Rebranding Initiative',
        client: 'Retail Brand',
        result: '400% increase in brand awareness',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop'
      },
      {
        title: 'Social Media Growth',
        client: 'Fashion Brand',
        result: '250K new followers in 3 months',
        image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&auto=format&fit=crop'
      },
      {
        title: 'Lead Generation Campaign',
        client: 'B2B Services',
        result: '600+ qualified leads',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop'
      }
    ],
    testimonial: {
      quote: 'The marketing team at Fast Solutions completely transformed our brand presence. Their creative campaigns generated unprecedented engagement and our sales have tripled since we started working together.',
      author: 'Sara Ahmed',
      role: 'Marketing Director',
      company: 'BeautyHub Pakistan'
    },
    ctaHeading: 'Ready to Amplify Your Brand?',
    ctaText: 'Let\'s create marketing campaigns that capture attention, drive engagement, and deliver measurable results.'
  },
  {
    slug: 'printing-packaging',
    name: 'Printing and Packaging',
    tagline: 'Premium Print Solutions for Your Brand',
    category: 'Production',
    description: 'High-quality commercial printing and custom packaging solutions that bring your brand to life with precision, creativity, and attention to detail.',
    heroImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&auto=format&fit=crop',
    keyHighlights: [
      'State-of-the-art printing',
      'Custom packaging design',
      'Fast turnaround times',
      'Eco-friendly options'
    ],
    features: [
      {
        icon: Printer,
        title: 'Commercial Printing',
        description: 'Brochures, flyers, posters, and business stationery with superior quality and color accuracy.'
      },
      {
        icon: Package,
        title: 'Custom Packaging',
        description: 'Bespoke product packaging design and manufacturing that protects and showcases your products.'
      },
      {
        icon: FileText,
        title: 'Large Format Printing',
        description: 'Banners, billboards, and signage for events, retail spaces, and outdoor advertising.'
      },
      {
        icon: Target,
        title: 'Label & Sticker Printing',
        description: 'Custom labels and stickers for products, promotions, and branding applications.'
      },
      {
        icon: Briefcase,
        title: 'Corporate Materials',
        description: 'Professional letterheads, business cards, folders, and presentation materials.'
      },
      {
        icon: Globe,
        title: 'Sustainable Solutions',
        description: 'Eco-friendly printing with recycled materials and environmentally conscious processes.'
      }
    ],
    process: [
      {
        phase: 'Design Consultation',
        description: 'Understanding your vision, brand guidelines, and printing requirements.'
      },
      {
        phase: 'Proof & Approval',
        description: 'Digital proofs and physical samples for your review before full production.'
      },
      {
        phase: 'Production',
        description: 'Expert printing with quality control at every stage of the process.'
      },
      {
        phase: 'Delivery',
        description: 'Timely delivery with careful packaging to ensure your materials arrive perfect.'
      }
    ],
    caseStudies: [
      {
        title: 'Product Packaging Redesign',
        client: 'Food & Beverage Co.',
        result: '60% increase in shelf appeal',
        image: 'https://images.unsplash.com/photo-1594843310364-59d1c86040ed?w=800&auto=format&fit=crop'
      },
      {
        title: 'Event Branding Materials',
        client: 'Corporate Event',
        result: '5,000+ printed materials',
        image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&auto=format&fit=crop'
      },
      {
        title: 'Retail Signage Campaign',
        client: 'Retail Chain',
        result: '100+ store rollout',
        image: 'https://images.unsplash.com/photo-1586339277448-d91a2cca7093?w=800&auto=format&fit=crop'
      },
      {
        title: 'Brand Stationery Suite',
        client: 'Law Firm',
        result: 'Complete identity system',
        image: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=800&auto=format&fit=crop'
      }
    ],
    testimonial: {
      quote: 'The print quality from Fast Solutions is exceptional. They handled our complex packaging requirements with professionalism and delivered ahead of schedule. Our products have never looked better.',
      author: 'Muhammad Bilal',
      role: 'Operations Manager',
      company: 'Premium Foods Ltd.'
    },
    ctaHeading: 'Need Professional Printing Services?',
    ctaText: 'Let\'s bring your vision to life with high-quality printing and packaging solutions that make your brand stand out.'
  },
  {
    slug: 'hospitality-tourism-app',
    name: 'Hospitality and Tourism App',
    tagline: 'Digital Solutions for the Modern Traveler',
    category: 'Technology',
    description: 'Custom mobile and web applications for hotels, restaurants, and tourism businesses that enhance guest experiences and streamline operations.',
    heroImage: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&auto=format&fit=crop',
    keyHighlights: [
      'User-friendly interfaces',
      'Real-time bookings',
      'Multi-language support',
      'Payment integration'
    ],
    features: [
      {
        icon: Hotel,
        title: 'Hotel Management System',
        description: 'Complete property management with booking, check-in, and guest service features.'
      },
      {
        icon: Utensils,
        title: 'Restaurant Ordering Apps',
        description: 'Digital menus, table reservations, and contactless ordering for modern dining experiences.'
      },
      {
        icon: Calendar,
        title: 'Booking & Reservations',
        description: 'Real-time availability, instant confirmations, and automated reminders for guests.'
      },
      {
        icon: Globe,
        title: 'Tourism Platforms',
        description: 'Destination guides, tour packages, and activity bookings all in one platform.'
      },
      {
        icon: Users,
        title: 'Guest Engagement',
        description: 'Loyalty programs, feedback systems, and personalized recommendations.'
      },
      {
        icon: BarChart,
        title: 'Analytics Dashboard',
        description: 'Business insights, occupancy rates, and revenue tracking for data-driven decisions.'
      }
    ],
    process: [
      {
        phase: 'Requirements Gathering',
        description: 'Understanding your property, services, and unique hospitality challenges.'
      },
      {
        phase: 'UX Design',
        description: 'Creating intuitive interfaces that delight guests and simplify staff workflows.'
      },
      {
        phase: 'Development & Integration',
        description: 'Building robust apps with payment gateways, booking engines, and third-party integrations.'
      },
      {
        phase: 'Launch & Training',
        description: 'Deployment with comprehensive staff training and ongoing technical support.'
      }
    ],
    pricing: [
      {
        name: 'Basic',
        price: 'PKR 200,000',
        period: '/one-time',
        features: [
          'Mobile app (iOS or Android)',
          'Basic booking system',
          'Menu/service display',
          'Contact information',
          '3 months support',
          'Basic analytics'
        ]
      },
      {
        name: 'Professional',
        price: 'PKR 450,000',
        period: '/one-time',
        isPopular: true,
        accentColor: 'orange',
        features: [
          'Cross-platform app',
          'Advanced booking engine',
          'Payment integration',
          'Push notifications',
          'Loyalty program',
          'Multi-language support',
          '6 months support',
          'Custom branding'
        ]
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        features: [
          'Full management suite',
          'Multi-property support',
          'Staff management tools',
          'Advanced analytics',
          'CRM integration',
          'Custom features',
          'Lifetime support',
          'Dedicated team'
        ]
      }
    ],
    caseStudies: [
      {
        title: 'Hotel Booking App',
        client: '5-Star Hotel Chain',
        result: '80% of bookings now digital',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop'
      },
      {
        title: 'Restaurant Ordering System',
        client: 'Fine Dining Restaurant',
        result: '50% reduction in wait times',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop'
      },
      {
        title: 'Tourism Discovery Platform',
        client: 'Travel Agency',
        result: '10K+ app downloads',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop'
      },
      {
        title: 'Guest Services App',
        client: 'Resort & Spa',
        result: '95% guest satisfaction',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop'
      }
    ],
    testimonial: {
      quote: 'Our hotel app developed by Fast Solutions has revolutionized guest experiences. Check-ins are seamless, room service orders have increased, and our guests love the convenience.',
      author: 'Fatima Sheikh',
      role: 'General Manager',
      company: 'Grand Royale Hotels'
    },
    ctaHeading: 'Transform Your Hospitality Business?',
    ctaText: 'Let\'s create digital experiences that elevate guest satisfaction and streamline your operations.'
  },
  {
    slug: 'soft-skills-foreign-education',
    name: 'Soft Skills and Foreign Education',
    tagline: 'Empower Your Global Journey',
    category: 'Education',
    description: 'Comprehensive training programs and foreign education consulting that prepare individuals for international opportunities and professional excellence.',
    heroImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&auto=format&fit=crop',
    keyHighlights: [
      'Expert trainers',
      'University partnerships',
      'Visa assistance',
      'Career guidance'
    ],
    features: [
      {
        icon: GraduationCap,
        title: 'Foreign Education Consulting',
        description: 'University selection, application support, and admission guidance for top international institutions.'
      },
      {
        icon: BookOpen,
        title: 'Soft Skills Training',
        description: 'Leadership, communication, teamwork, and emotional intelligence workshops.'
      },
      {
        icon: Users,
        title: 'Language Courses',
        description: 'IELTS, TOEFL, and foreign language training for academic and professional success.'
      },
      {
        icon: Briefcase,
        title: 'Career Counseling',
        description: 'Resume building, interview prep, and career path guidance from industry experts.'
      },
      {
        icon: Globe,
        title: 'Visa & Immigration',
        description: 'Complete assistance with student visa applications and immigration procedures.'
      },
      {
        icon: Target,
        title: 'Pre-Departure Orientation',
        description: 'Cultural preparation, accommodation guidance, and settling-in support for students.'
      }
    ],
    process: [
      {
        phase: 'Assessment & Counseling',
        description: 'Understanding your goals, academic background, and preferred study destinations.'
      },
      {
        phase: 'Application Preparation',
        description: 'Document preparation, essay writing, and application submission to selected universities.'
      },
      {
        phase: 'Training & Testing',
        description: 'Language proficiency courses and soft skills workshops to ensure readiness.'
      },
      {
        phase: 'Visa & Departure',
        description: 'Visa application support and pre-departure briefings for a smooth transition.'
      }
    ],
    caseStudies: [
      {
        title: 'Student Placement Program',
        client: 'Educational Institute',
        result: '150+ students placed abroad',
        image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop'
      },
      {
        title: 'Corporate Soft Skills Training',
        client: 'Multinational Corporation',
        result: '500+ employees trained',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop'
      },
      {
        title: 'IELTS Preparation Course',
        client: 'Language Center',
        result: '90% pass rate above 7.0',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop'
      },
      {
        title: 'University Partnership',
        client: 'UK Universities',
        result: 'Direct admission pathways',
        image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&auto=format&fit=crop'
      }
    ],
    testimonial: {
      quote: 'Fast Solutions guided me through every step of my journey to study in the UK. From university selection to visa approval, their expertise made what seemed impossible, achievable. I\'m now pursuing my dream degree.',
      author: 'Hassan Ali',
      role: 'International Student',
      company: 'University of Manchester'
    },
    ctaHeading: 'Ready to Start Your Global Journey?',
    ctaText: 'Let\'s help you achieve your education and career goals with expert guidance and comprehensive support.'
  },
  {
    slug: 'travel-agency-ticketing',
    name: 'Travel Agency and Ticketing',
    tagline: 'Your Gateway to Seamless Travel',
    category: 'Travel',
    description: 'Complete travel booking services for flights, hotels, and vacation packages with competitive rates and personalized service.',
    heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop',
    keyHighlights: [
      'Best price guarantee',
      '24/7 customer support',
      'Global destinations',
      'Flexible bookings'
    ],
    features: [
      {
        icon: Plane,
        title: 'Flight Bookings',
        description: 'Domestic and international flights with access to all major airlines and best fares.'
      },
      {
        icon: Hotel,
        title: 'Hotel Reservations',
        description: 'Wide selection of accommodations from budget to luxury worldwide.'
      },
      {
        icon: Ticket,
        title: 'Visa Services',
        description: 'Tourist and business visa processing for all major destinations.'
      },
      {
        icon: Globe,
        title: 'Holiday Packages',
        description: 'Curated vacation packages with flights, hotels, and activities included.'
      },
      {
        icon: Calendar,
        title: 'Group Travel',
        description: 'Customized group tours for families, corporate teams, and special occasions.'
      },
      {
        icon: Target,
        title: 'Travel Insurance',
        description: 'Comprehensive travel insurance coverage for peace of mind during your journey.'
      }
    ],
    process: [
      {
        phase: 'Consultation',
        description: 'Understanding your travel preferences, budget, and requirements.'
      },
      {
        phase: 'Itinerary Planning',
        description: 'Creating customized travel plans with the best flight and accommodation options.'
      },
      {
        phase: 'Booking & Documentation',
        description: 'Securing reservations and handling all necessary travel documents.'
      },
      {
        phase: 'Travel Support',
        description: '24/7 assistance during your trip for any changes or emergencies.'
      }
    ],
    caseStudies: [
      {
        title: 'Corporate Group Booking',
        client: 'Tech Company',
        result: '200+ employees to Dubai',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop'
      },
      {
        title: 'Honeymoon Package',
        client: 'Luxury Travel',
        result: '100% satisfaction rate',
        image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&auto=format&fit=crop'
      },
      {
        title: 'Umrah Group Tour',
        client: 'Religious Travel',
        result: '500+ pilgrims facilitated',
        image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&auto=format&fit=crop'
      },
      {
        title: 'European Tour Package',
        client: 'Family Vacation',
        result: '15-day seamless experience',
        image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&auto=format&fit=crop'
      }
    ],
    testimonial: {
      quote: 'Fast Solutions made our family vacation to Europe absolutely stress-free. From flights to hotels to daily tours, everything was perfectly organized. Their attention to detail and customer service is outstanding.',
      author: 'Ayesha Malik',
      role: 'Travel Enthusiast',
      company: 'Satisfied Customer'
    },
    ctaHeading: 'Ready to Plan Your Next Adventure?',
    ctaText: 'Let our travel experts create the perfect itinerary for your dream vacation or business travel needs.'
  },
  {
    slug: 'consultant-travel-advisory',
    name: 'Consultant and Travel Advisory',
    tagline: 'Strategic Guidance for Your Journey',
    category: 'Consulting',
    description: 'Expert consultation services combining business advisory with travel planning to support your international ventures and explorations.',
    heroImage: 'https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?w=1200&auto=format&fit=crop',
    keyHighlights: [
      'Expert consultants',
      'Tailored strategies',
      'Global network',
      'Proven track record'
    ],
    features: [
      {
        icon: Compass,
        title: 'Business Consulting',
        description: 'Strategic planning, market entry strategies, and operational excellence guidance.'
      },
      {
        icon: Briefcase,
        title: 'Travel Advisory',
        description: 'Expert advice on destinations, safety, logistics, and cultural considerations.'
      },
      {
        icon: Map,
        title: 'Market Research',
        description: 'In-depth analysis of target markets for international business expansion.'
      },
      {
        icon: Users,
        title: 'Corporate Travel Management',
        description: 'Comprehensive business travel solutions with cost optimization and policy compliance.'
      },
      {
        icon: Target,
        title: 'Risk Assessment',
        description: 'Travel risk evaluation, security briefings, and crisis management planning.'
      },
      {
        icon: Globe,
        title: 'Destination Development',
        description: 'Tourism consulting for destinations, hotels, and travel businesses.'
      }
    ],
    process: [
      {
        phase: 'Discovery Session',
        description: 'Initial consultation to understand your business objectives and travel requirements.'
      },
      {
        phase: 'Analysis & Strategy',
        description: 'Thorough research and strategic recommendations tailored to your goals.'
      },
      {
        phase: 'Implementation Planning',
        description: 'Detailed roadmaps and action plans with clear milestones and deliverables.'
      },
      {
        phase: 'Ongoing Support',
        description: 'Continuous guidance, monitoring, and adjustments to ensure success.'
      }
    ],
    caseStudies: [
      {
        title: 'International Expansion',
        client: 'Manufacturing Firm',
        result: 'Successful entry into 3 markets',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop'
      },
      {
        title: 'Corporate Travel Program',
        client: 'Multinational Corp',
        result: '30% cost savings',
        image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&auto=format&fit=crop'
      },
      {
        title: 'Tourism Strategy',
        client: 'Regional Tourism Board',
        result: '50% increase in visitors',
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop'
      },
      {
        title: 'Risk Mitigation Plan',
        client: 'NGO Operations',
        result: 'Safe operations in 20+ countries',
        image: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?w=800&auto=format&fit=crop'
      }
    ],
    testimonial: {
      quote: 'The consulting team at Fast Solutions provided invaluable insights for our Middle East expansion. Their travel advisory services ensured our executives were well-prepared and safe throughout the process.',
      author: 'Omar Farooq',
      role: 'CEO',
      company: 'Global Ventures Ltd.'
    },
    ctaHeading: 'Need Expert Advisory Services?',
    ctaText: 'Let\'s discuss how our consulting expertise can support your business goals and travel requirements.'
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    tagline: 'Find Your Perfect Property',
    category: 'Real Estate',
    description: 'Comprehensive real estate services for buying, selling, and renting residential and commercial properties with expert guidance.',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop',
    keyHighlights: [
      'Extensive portfolio',
      'Market expertise',
      'Legal assistance',
      'Investment advice'
    ],
    features: [
      {
        icon: Building,
        title: 'Property Sales',
        description: 'Residential and commercial properties with complete documentation and legal support.'
      },
      {
        icon: Home,
        title: 'Rental Services',
        description: 'Find perfect rental properties or list your property with our extensive tenant network.'
      },
      {
        icon: Key,
        title: 'Property Management',
        description: 'Complete management services for property owners including maintenance and tenant relations.'
      },
      {
        icon: Target,
        title: 'Investment Consulting',
        description: 'Expert advice on property investments, market trends, and ROI analysis.'
      },
      {
        icon: Map,
        title: 'Location Analysis',
        description: 'Detailed neighborhood insights, amenities, and future development plans.'
      },
      {
        icon: Briefcase,
        title: 'Commercial Real Estate',
        description: 'Office spaces, retail properties, and industrial facilities for businesses.'
      }
    ],
    process: [
      {
        phase: 'Requirements Gathering',
        description: 'Understanding your property needs, budget, location preferences, and timeline.'
      },
      {
        phase: 'Property Search',
        description: 'Curating properties that match your criteria with virtual and physical viewings.'
      },
      {
        phase: 'Negotiation & Documentation',
        description: 'Handling price negotiations and all legal paperwork for a smooth transaction.'
      },
      {
        phase: 'Post-Sale Support',
        description: 'Assistance with property transfer, utilities setup, and ongoing management services.'
      }
    ],
    caseStudies: [
      {
        title: 'Luxury Villa Sale',
        client: 'High-Net-Worth Individual',
        result: 'Sold 20% above asking price',
        image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&auto=format&fit=crop'
      },
      {
        title: 'Commercial Complex',
        client: 'Investment Group',
        result: 'PKR 500M property deal',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop'
      },
      {
        title: 'Housing Society Development',
        client: 'Developer',
        result: '200+ units sold in 6 months',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop'
      },
      {
        title: 'Rental Portfolio Management',
        client: 'Property Investor',
        result: '98% occupancy rate',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop'
      }
    ],
    testimonial: {
      quote: 'Fast Solutions helped us find our dream home in the perfect neighborhood. Their knowledge of the market and dedication to our needs made the entire process smooth and enjoyable.',
      author: 'Kamran Hussain',
      role: 'Homeowner',
      company: 'Satisfied Client'
    },
    ctaHeading: 'Looking for Your Perfect Property?',
    ctaText: 'Let our real estate experts help you find, invest in, or manage properties that meet your exact needs.'
  }
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find(service => service.slug === slug);
}

// Helper function to get related services (excluding current service)
export function getRelatedServices(currentSlug: string, limit: number = 3): ServiceData[] {
  return servicesData
    .filter(service => service.slug !== currentSlug)
    .slice(0, limit);
}
