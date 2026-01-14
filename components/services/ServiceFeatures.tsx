'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { type LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  features: Feature[];
}

export default function ServiceFeatures({ features }: ServiceFeaturesProps) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#F97316] font-semibold uppercase tracking-wider text-sm">
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-6">
            Our <span className="text-[#4F46E5]">Core Features</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to meet your unique needs and drive measurable results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group p-8 border-2 border-slate-200 hover:border-[#4F46E5] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer bg-white"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#4F46E5]/10 flex items-center justify-center mb-6 group-hover:bg-[#4F46E5] transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#4F46E5] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#4F46E5] transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative bottom border on hover */}
                <div className="mt-6 pt-6 border-t-2 border-transparent group-hover:border-[#F97316] transition-all duration-300" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
