import { servicesData, getRelatedServices, type ServiceData } from './servicesData';

// Map of service slugs to their icon names (strings)
export const serviceIconNames: Record<string, string> = {
  'it-solutions-digital-tech': 'Code',
  'marketing-advertising': 'Megaphone',
  'printing-packaging': 'Printer',
  'hospitality-tourism-app': 'Hotel',
  'soft-skills-foreign-education': 'GraduationCap',
  'travel-agency-ticketing': 'Plane',
  'consultant-travel-advisory': 'Compass',
  'real-estate': 'Building'
};

// Format related services with icon names
export function formatRelatedServices(currentSlug: string, limit: number = 3) {
  const relatedServices = getRelatedServices(currentSlug, limit);

  return relatedServices.map(service => ({
    slug: service.slug,
    name: service.name,
    description: service.tagline,
    iconName: serviceIconNames[service.slug]
  }));
}
