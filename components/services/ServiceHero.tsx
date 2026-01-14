'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface ServiceHeroProps {
  category: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  keyHighlights: string[];
}

export default function ServiceHero({
  category,
  name,
  tagline,
  description,
  heroImage,
  keyHighlights
}: ServiceHeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#FDF7F2] via-white to-[#FDF7F2]">
      {/* Decorative background shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#4F46E5]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl" />

      {/* Diagonal accent element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-[#4F46E5]/5 to-transparent transform skew-x-12 translate-x-32" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fadeIn">
            <Badge className="bg-[#4F46E5]/10 text-[#4F46E5] hover:bg-[#4F46E5]/20 px-4 py-1.5 text-sm font-semibold">
              {category}
            </Badge>

            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              {name.split(' ').map((word, index) => (
                <span key={index}>
                  {index === name.split(' ').length - 1 ? (
                    <span className="text-[#F97316]">{word}</span>
                  ) : (
                    <span className="text-[#0F172A]">{word} </span>
                  )}
                </span>
              ))}
            </h1>

            <p className="text-2xl text-slate-600 font-medium">
              {tagline}
            </p>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              {description}
            </p>

            {/* Key Highlights */}
            <div className="flex flex-wrap gap-3 pt-4">
              {keyHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-[#F97316]" />
                  <span className="text-sm font-medium text-slate-700">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Button
                size="lg"
                className="bg-[#F97316] hover:bg-[#EA580C] text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white transition-all duration-300"
              >
                Request Quote
              </Button>
            </div>

            {/* Hand-drawn arrow pointing to CTA (decorative) */}
            <svg
              className="absolute -bottom-8 left-32 w-24 h-24 text-[#F97316] opacity-30 hidden lg:block"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 10 Q 30 50 50 40 T 90 60"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M85 55 L 95 60 L 85 65"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Right Image */}
          <div className="relative lg:translate-x-8 animate-fadeIn" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              {/* Orange accent frame (offset) */}
              <div className="absolute -top-6 -left-6 w-full h-full border-4 border-[#F97316] rounded-2xl" />

              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-200">
                <Image
                  src={heroImage}
                  alt={name}
                  width={600}
                  height={700}
                  className="w-full h-[500px] object-cover"
                  priority
                />
              </div>

              {/* Decorative dots pattern */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 grid grid-cols-6 gap-2 opacity-20">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-[#4F46E5]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
