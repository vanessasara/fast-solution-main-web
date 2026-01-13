'use client';

import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: 'Fast Solutions transformed our digital presence with their exceptional IT services. Their team is professional, responsive, and truly understands our business needs.',
    author: 'Sarah Johnson',
    role: 'CEO, Tech Innovations',
    rating: 5,
    initials: 'SJ',
  },
  {
    quote: 'The marketing strategies they developed for us exceeded all expectations. We saw a 150% increase in engagement within just three months.',
    author: 'Michael Chen',
    role: 'Marketing Director, Growth Co',
    rating: 5,
    initials: 'MC',
  },
  {
    quote: 'Their real estate services helped us find the perfect office space. The entire process was smooth, professional, and stress-free.',
    author: 'Emma Williams',
    role: 'Founder, StartupHub',
    rating: 5,
    initials: 'EW',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it—hear from the businesses we've helped succeed
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 border-2 border-gray-200 hover:border-[#4F46E5] hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-[#4F46E5]/10 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-[#4F46E5]" />
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#F97316] text-[#F97316]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t">
                  <Avatar className="w-12 h-12 bg-[#4F46E5] text-white">
                    <AvatarFallback className="bg-[#4F46E5] text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-[#0F172A]">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
