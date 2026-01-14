'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export interface ProcessStep {
  phase: string;
  description: string;
}

interface ServiceProcessProps {
  process: ProcessStep[];
}

export default function ServiceProcess({ process }: ServiceProcessProps) {
  return (
    <section className="py-20 px-6 bg-[#1E293B] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#F97316] font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            How We <span className="text-[#4F46E5]">Work</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery from start to finish
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting Line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-[#4F46E5] via-[#F97316] to-[#4F46E5] opacity-20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Step Number Badge */}
                <div className="relative z-10 mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#F97316] flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-black text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-[#0F172A] rounded-xl p-6 border border-slate-700 group-hover:border-[#4F46E5] transition-all duration-300 min-h-[180px]">
                  <h3 className="text-xl font-bold mb-3 text-[#F97316]">
                    {step.phase}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (desktop only, between steps) */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 z-0">
                    <ArrowRight className="w-8 h-8 text-[#F97316] opacity-30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-[#F97316] hover:bg-[#EA580C] text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Learn More About Our Process
          </Button>
        </div>
      </div>
    </section>
  );
}
