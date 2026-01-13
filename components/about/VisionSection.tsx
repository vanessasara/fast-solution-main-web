'use client';

import React from 'react';
import { Quote } from 'lucide-react';

export default function VisionSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Story & Vision */}
          <div className="space-y-6">
            <div>
              <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mt-4 mb-6">
                Building the Future Together
              </h2>
            </div>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Founded in 2009, Fast Solutions began with a simple yet powerful vision: to provide comprehensive, high-quality services across multiple industries under one trusted brand.
              </p>
              <p>
                Over the past 15+ years, we've grown from a small team with big dreams to a multi-service powerhouse serving thousands of clients worldwide. Our journey has been marked by continuous innovation, unwavering commitment to excellence, and a deep dedication to our clients' success.
              </p>
              <p>
                Today, we stand as a testament to what's possible when passion meets expertise. With 8 professional service divisions and a team of over 3,200 talented professionals, we're not just building businesses—we're building lasting relationships and creating impact that matters.
              </p>
            </div>

            {/* Pull Quote */}
            <div className="relative bg-[#FDF7F2] border-l-4 border-[#F97316] p-6 rounded-r-xl">
              <Quote className="absolute top-4 right-4 w-12 h-12 text-[#F97316]/20" />
              <p className="text-xl font-semibold text-[#0F172A] italic">
                "Our success is measured not by the services we provide, but by the dreams we help realize and the futures we help build."
              </p>
              <p className="text-gray-600 mt-4 font-medium">
                — Fast Solutions Leadership Team
              </p>
            </div>

            {/* Timeline Markers */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="w-2 h-2 bg-[#4F46E5] rounded-full mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#0F172A]">2009</div>
                <div className="text-sm text-gray-600">Founded</div>
              </div>
              <div className="text-center">
                <div className="w-2 h-2 bg-[#F97316] rounded-full mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#0F172A]">2015</div>
                <div className="text-sm text-gray-600">Expanded Services</div>
              </div>
              <div className="text-center">
                <div className="w-2 h-2 bg-[#4F46E5] rounded-full mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#0F172A]">2026</div>
                <div className="text-sm text-gray-600">Industry Leader</div>
              </div>
            </div>
          </div>

          {/* Right - Images */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Second Image - Stacked */}
            <div className="absolute -bottom-10 -right-10 w-64 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
                alt="Office environment"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Accent Color Block */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#F97316]/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#4F46E5]/20 rounded-full blur-2xl -z-10" />

            {/* Decorative arrow */}
            <div className="absolute top-1/2 -left-16 text-[#F97316] hidden xl:block">
              <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M30 10C35 25 40 40 30 55C25 65 15 70 10 75M10 75L15 70M10 75L5 70"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
