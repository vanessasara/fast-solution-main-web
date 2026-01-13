import HeroSection from '@/components/landing/HeroSection';
import PartnerLogos from '@/components/landing/PartnerLogos';
import StatsCounter from '@/components/landing/StatsCounter';
import ServicesOverview from '@/components/landing/ServicesOverview';
import ValueProposition from '@/components/landing/ValueProposition';
import FeaturedServices from '@/components/landing/FeaturedServices';
import ProcessSection from '@/components/landing/ProcessSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import TeamPreview from '@/components/landing/TeamPreview';
import BlogPreview from '@/components/landing/BlogPreview';
import CTABanner from '@/components/landing/CTABanner';
import NewsletterSignup from '@/components/landing/NewsletterSignup';

export default function Page() {
  return (
    <div>
      <HeroSection />
      <PartnerLogos />
      <StatsCounter />
      <ServicesOverview />
      <ValueProposition />
      <FeaturedServices />
      <ProcessSection />
      <TestimonialsSection />
      <TeamPreview />
      <BlogPreview />
      <CTABanner />
      <NewsletterSignup />
    </div>
  );
}
