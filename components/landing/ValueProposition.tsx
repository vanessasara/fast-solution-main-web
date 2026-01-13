'use client';

import React from 'react';
import { Zap, Lightbulb, Users, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Quick turnaround on all projects without compromising quality. We value your time as much as you do.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Driven',
    description: 'Latest technologies and modern approaches to keep your business ahead of the competition.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Dedicated support and personalized consultation to ensure your complete satisfaction.',
  },
  {
    icon: CheckCircle,
    title: 'Proven Track Record',
    description: 'Over 1200 successful projects delivered across 8 professional service domains.',
  },
];

export default function ValueProposition() {
  return (
    <section className="bg-[#FDF7F2] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A]">
                Your Success is Our Mission
              </h2>
              <p className="text-lg text-gray-600">
                We combine expertise, innovation, and dedication to deliver exceptional results that drive your business forward.
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#4F46E5] rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 to-transparent" />
            </div>

            {/* Floating stat cards */}
            <div className="absolute top-8 -right-4 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F97316]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#0F172A]">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 -left-4 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#4F46E5]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#0F172A]">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-[#F97316]/20 rounded-full blur-2xl" />
            <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-[#4F46E5]/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
