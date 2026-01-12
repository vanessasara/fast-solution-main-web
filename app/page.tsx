import CompanyIntroduction from '@/components/landing/CompanyIntroduction';
import CoreValuesSection from '@/components/landing/CoreValuesSection';
import CTAContact from '@/components/landing/CTAContact';
import GlobalReachSection from '@/components/landing/GlobalReachSection';
import HeroSection from '@/components/landing/HeroSection';
import ServicesGrid from '@/components/landing/ServicesGrid';
import WhyChooseFAST from '@/components/landing/WhyChooseFAST';

export default function Page() {
  return (
    <div>
      <HeroSection/>
      <CompanyIntroduction/>
      <CoreValuesSection/>
      <ServicesGrid/>
      <WhyChooseFAST/>
      <GlobalReachSection/>
      <CTAContact/>
    </div>
  );
}
