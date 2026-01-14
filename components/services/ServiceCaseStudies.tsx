'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye } from 'lucide-react';

export interface CaseStudy {
  title: string;
  client: string;
  result: string;
  image: string;
}

interface ServiceCaseStudiesProps {
  caseStudies: CaseStudy[];
}

export default function ServiceCaseStudies({ caseStudies }: ServiceCaseStudiesProps) {
  return (
    <section className="py-20 px-6 bg-[#FDF7F2]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#F97316] font-semibold uppercase tracking-wider text-sm">
              Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-6">
            Our <span className="text-[#4F46E5]">Portfolio</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real results for real clients - see how we've helped businesses achieve their goals
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer bg-white"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <Image
                  src={study.image}
                  alt={study.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <Button
                    size="sm"
                    className="bg-[#F97316] hover:bg-[#EA580C] text-white shadow-lg"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Case Study
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm font-semibold text-[#4F46E5] mb-2">
                  {study.client}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#4F46E5] transition-colors duration-300">
                  {study.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-[#F97316]">
                    {study.result}
                  </span>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#F97316] group-hover:translate-x-2 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white transition-all duration-300"
          >
            View All Case Studies
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
