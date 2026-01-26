'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { getIcon } from '@/lib/iconMap';

interface RelatedService {
  slug: string;
  name: string;
  description: string;
  iconName: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
}

export default function RelatedServices({ services }: RelatedServicesProps) {
  return (
    <section className="py-20 px-6 bg-[#FDF7F2]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="mb-2">
              <span className="text-[#F97316] font-semibold uppercase tracking-wider text-sm">
                Explore More
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A]">
              Related <span className="text-[#4F46E5]">Services</span>
            </h2>
          </div>

          <Button
            asChild
            variant="outline"
            className="hidden md:flex border-2 border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white"
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = getIcon(service.iconName);
            return (
              <Card
                key={index}
                className="group p-6 border-2 border-slate-200 hover:border-[#4F46E5] transition-all duration-300 hover:shadow-xl bg-white"
              >
                <Link href={`/services/${service.slug}`} className="block">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F46E5] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#4F46E5] group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#4F46E5] transition-colors duration-300">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center text-[#F97316] font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </Card>
            );
          })}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 md:hidden">
          <Button
            asChild
            variant="outline"
            className="w-full border-2 border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white"
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
