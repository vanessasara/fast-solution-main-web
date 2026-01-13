'use client';

import React from 'react';
import { Award, Trophy, Star, Shield, Target, Zap } from 'lucide-react';

const awards = [
  {
    icon: Trophy,
    title: 'Best Multi-Service Provider',
    year: '2025',
    organization: 'Industry Excellence Awards',
  },
  {
    icon: Award,
    title: 'Innovation in Technology',
    year: '2024',
    organization: 'Tech Innovation Summit',
  },
  {
    icon: Star,
    title: 'Customer Service Excellence',
    year: '2024',
    organization: 'Business Excellence Forum',
  },
  {
    icon: Shield,
    title: 'Most Trusted Brand',
    year: '2023',
    organization: 'Consumer Trust Index',
  },
  {
    icon: Target,
    title: 'Market Leadership Award',
    year: '2023',
    organization: 'Business Leaders Council',
  },
  {
    icon: Zap,
    title: 'Fastest Growing Company',
    year: '2022',
    organization: 'Growth Excellence Awards',
  },
];

const certifications = [
  { name: 'ISO 9001:2015', type: 'Quality Management' },
  { name: 'ISO 27001', type: 'Information Security' },
  { name: 'PMP Certified', type: 'Project Management' },
  { name: 'AWS Partner', type: 'Cloud Services' },
];

export default function AwardsSection() {
  return (
    <section className="bg-[#FDF7F2] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
            Recognition
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mt-4 mb-6">
            Awards & Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders worldwide
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#4F46E5] to-[#6366F1] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[#F97316] mb-1">
                      {award.year}
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-2 group-hover:text-[#4F46E5] transition-colors">
                      {award.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {award.organization}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-[#0F172A] mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-xl border-2 border-gray-200 hover:border-[#4F46E5] transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto bg-[#4F46E5]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#4F46E5] transition-colors">
                  <Shield className="w-10 h-10 text-[#4F46E5] group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-bold text-[#0F172A] mb-1">{cert.name}</h4>
                <p className="text-sm text-gray-600">{cert.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
