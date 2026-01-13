'use client';

import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const featuredServices = [
  {
    category: 'Technology',
    title: 'IT Solutions & Digital Tech',
    description: 'Transform your business with cutting-edge technology solutions. Our expert team delivers custom software development, cloud infrastructure, cybersecurity, and digital transformation services that drive innovation and growth.',
    additionalInfo: 'We combine technical expertise with business acumen to create solutions that not only work flawlessly but also deliver measurable ROI. From startups to enterprises, we scale our services to match your needs.',
    features: [
      'Custom Software Development',
      'Cloud Infrastructure & Migration',
      'Cybersecurity Solutions',
      'Digital Transformation Consulting',
    ],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    link: '/services/it-solutions-digital-tech',
  },
  {
    category: 'Business Growth',
    title: 'Marketing & Advertising',
    description: 'Elevate your brand with data-driven marketing strategies that deliver results. We create compelling campaigns across digital and traditional channels, from social media marketing to brand positioning.',
    additionalInfo: 'Our integrated approach combines creative excellence with analytics to ensure every marketing dollar works harder for your business. We build brands that resonate and campaigns that convert.',
    features: [
      'Digital Marketing Strategy',
      'Social Media Management',
      'Brand Development & Positioning',
      'Content Marketing & SEO',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    link: '/services/marketing-advertising',
  },
];

export default function FeaturedServices() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {featuredServices.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content Side */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div>
                  <span className="inline-block px-4 py-2 bg-[#4F46E5]/10 text-[#4F46E5] rounded-full text-sm font-semibold mb-4">
                    {service.category}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <p className="text-gray-600">
                    {service.additionalInfo}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#F97316] rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className="group bg-[#4F46E5] hover:bg-[#4338CA] text-white px-8 py-6 rounded-xl text-lg font-semibold"
                  asChild
                >
                  <Link href={service.link}>
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              {/* Image Side */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  {/* Accent border frame */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#4F46E5]/20 to-[#F97316]/20 rounded-2xl -z-10" />

                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl"
                  />

                  {/* Overlay badge */}
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#F97316] rounded-full animate-pulse" />
                      <span className="text-sm font-semibold text-[#0F172A]">Featured Service</span>
                    </div>
                  </div>
                </div>

                {/* Floating decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F97316]/10 rounded-full blur-2xl -z-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
