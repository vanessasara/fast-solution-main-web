'use client';

import React from 'react';
import { MessageSquare, PenTool, Rocket, Headphones } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consultation',
    description: 'Understanding your needs, goals, and challenges to create the perfect solution strategy.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Planning',
    description: 'Strategic approach development with detailed roadmap and clear milestones.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Execution',
    description: 'Professional implementation using best practices and cutting-edge technologies.',
  },
  {
    number: '04',
    icon: Headphones,
    title: 'Support',
    description: 'Ongoing assistance, optimization, and continuous improvement for lasting success.',
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#1E293B] py-20 lg:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#4F46E5] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#F97316] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            How We Work
          </h2>
          <p className="text-lg text-gray-300">
            A proven methodology that ensures quality, efficiency, and exceptional results every time
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative"
              >
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#4F46E5] to-[#F97316]/20 -translate-x-8" />
                )}

                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#4F46E5] rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
