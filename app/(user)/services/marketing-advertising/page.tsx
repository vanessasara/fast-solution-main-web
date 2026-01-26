import React from 'react';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServicePricing from '@/components/services/ServicePricing';
import ServiceCaseStudies from '@/components/services/ServiceCaseStudies';
import ServiceTestimonial from '@/components/services/ServiceTestimonial';
import RelatedServices from '@/components/services/RelatedServices';
import ServiceCTA from '@/components/services/ServiceCTA';
import { getServiceBySlug } from '@/lib/servicesData';
import { formatRelatedServices } from '@/lib/serviceHelpers';

export default function MarketingAdvertisingPage() {
  const service = getServiceBySlug('marketing-advertising');

  if (!service) {
    return <div>Service not found</div>;
  }

  const relatedServices = formatRelatedServices('marketing-advertising', 3);

  return (
    <main className="min-h-screen">
      <ServiceHero
        category={service.category}
        name={service.name}
        tagline={service.tagline}
        description={service.description}
        heroImage={service.heroImage}
        keyHighlights={service.keyHighlights}
      />

      <ServiceFeatures features={service.features} />

      <ServiceProcess process={service.process} />

      {service.pricing && <ServicePricing pricing={service.pricing} />}

      <ServiceCaseStudies caseStudies={service.caseStudies} />

      <ServiceTestimonial testimonial={service.testimonial} />

      <RelatedServices services={relatedServices} />

      <ServiceCTA
        heading={service.ctaHeading}
        text={service.ctaText}
        serviceName={service.name}
      />
    </main>
  );
}
