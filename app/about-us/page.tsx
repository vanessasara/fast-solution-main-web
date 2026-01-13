import AboutHero from '@/components/about/AboutHero';
import VisionSection from '@/components/about/VisionSection';
import VideoSection from '@/components/about/VideoSection';
import FullTeamSection from '@/components/about/FullTeamSection';
import AwardsSection from '@/components/about/AwardsSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import FAQSection from '@/components/about/FAQSection';
import CTAContact from '@/components/landing/CTAContact';

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <VisionSection />
      <VideoSection />
      <FullTeamSection />
      <AwardsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTAContact />
    </div>
  );
}
