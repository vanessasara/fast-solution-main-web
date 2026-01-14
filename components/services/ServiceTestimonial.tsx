'use client';

import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface ServiceTestimonialProps {
  testimonial: Testimonial;
}

export default function ServiceTestimonial({ testimonial }: ServiceTestimonialProps) {
  // Get initials from author name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-gradient-to-br from-[#4F46E5] to-[#1E293B] rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F97316]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Quote Icon */}
            <div className="mb-8">
              <div className="w-16 h-16 rounded-full bg-[#F97316] flex items-center justify-center">
                <Quote className="w-8 h-8 text-white fill-current" />
              </div>
            </div>

            {/* Quote Text */}
            <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-12 italic">
              "{testimonial.quote}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16 border-4 border-white/20">
                <AvatarFallback className="bg-[#F97316] text-white text-xl font-bold">
                  {getInitials(testimonial.author)}
                </AvatarFallback>
              </Avatar>

              <div>
                <div className="text-xl font-black text-white">
                  {testimonial.author}
                </div>
                <div className="text-sm text-white/80">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex gap-1 mt-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-[#F97316]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
