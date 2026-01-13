'use client';

import React from 'react';

export default function AboutHero() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#1E293B]/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-2 bg-[#F97316] text-white rounded-full text-sm font-semibold mb-6">
            About Us
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Building Complete Solutions with{' '}
            <span className="text-[#F97316]">Fast Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            For over 15 years, we've been delivering excellence across 8 professional services, transforming businesses with innovation, dedication, and expertise.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border-4 border-[#F97316]/30 rounded-full" />
      <div className="absolute bottom-20 right-40 w-2 h-24 bg-[#4F46E5]" style={{ transform: 'rotate(15deg)' }} />
    </section>
  );
}
