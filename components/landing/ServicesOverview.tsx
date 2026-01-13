'use client';

import React from 'react';
import { Code, Megaphone, Printer, Hotel, GraduationCap, Plane, MapPin, Building, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

const services = [
  {
    title: 'IT Solutions & Digital Tech',
    description: 'Cutting-edge technology solutions for modern businesses',
    icon: Code,
    link: '/services/it-solutions-digital-tech',
  },
  {
    title: 'Marketing & Advertising',
    description: 'Strategic campaigns that drive growth and engagement',
    icon: Megaphone,
    link: '/services/marketing-advertising',
  },
  {
    title: 'Printing & Packaging',
    description: 'High-quality printing and custom packaging solutions',
    icon: Printer,
    link: '/services/printing-packaging',
  },
  {
    title: 'Hospitality & Tourism App',
    description: 'Digital solutions for hotels and tourism businesses',
    icon: Hotel,
    link: '/services/hospitality-tourism-app',
  },
  {
    title: 'Soft Skills & Foreign Education',
    description: 'Professional development and international education',
    icon: GraduationCap,
    link: '/services/soft-skills-foreign-education',
  },
  {
    title: 'Travel Agency & Ticketing',
    description: 'Complete travel booking and management services',
    icon: Plane,
    link: '/services/travel-agency-ticketing',
  },
  {
    title: 'Consultant & Travel Advisory',
    description: 'Expert guidance for business and travel planning',
    icon: MapPin,
    link: '/services/consultant-travel-advisory',
  },
  {
    title: 'Real Estate',
    description: 'Property solutions from sales to management',
    icon: Building,
    link: '/services/real-estate',
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mt-4 mb-6">
            Comprehensive Solutions for Every Business Need
          </h2>
          <p className="text-lg text-gray-600">
            From technology to real estate, we provide expert services across 8 professional domains to help your business thrive
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href={service.link}
                className="group"
              >
                <Card className="h-full p-6 border-2 border-gray-200 hover:border-[#4F46E5] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex flex-col h-full">
                    <div className="w-14 h-14 bg-[#4F46E5]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#4F46E5] transition-colors">
                      <Icon className="w-7 h-7 text-[#4F46E5] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {service.description}
                    </p>
                    <div className="flex items-center text-[#4F46E5] font-semibold group-hover:text-[#F97316] transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
