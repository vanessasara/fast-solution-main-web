import {
  Code,
  Megaphone,
  Printer,
  Hotel,
  GraduationCap,
  Plane,
  Compass,
  Building,
  type LucideIcon
} from 'lucide-react';
import { servicesData, getRelatedServices, type ServiceData } from './servicesData';

// Map of service slugs to their icons
export const serviceIcons: Record<string, LucideIcon> = {
  'it-solutions-digital-tech': Code,
  'marketing-advertising': Megaphone,
  'printing-packaging': Printer,
  'hospitality-tourism-app': Hotel,
  'soft-skills-foreign-education': GraduationCap,
  'travel-agency-ticketing': Plane,
  'consultant-travel-advisory': Compass,
  'real-estate': Building
};

// Format related services with icons
export function formatRelatedServices(currentSlug: string, limit: number = 3) {
  const relatedServices = getRelatedServices(currentSlug, limit);

  return relatedServices.map(service => ({
    slug: service.slug,
    name: service.name,
    description: service.tagline,
    icon: serviceIcons[service.slug]
  }));
}
