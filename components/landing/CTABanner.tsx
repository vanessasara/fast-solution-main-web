'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="relative bg-gradient-to-r from-[#4F46E5] via-[#6366F1] to-[#F97316] py-20 lg:py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EA580C] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-semibold">Let's Build Something Amazing Together</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>

          {/* Description */}
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have elevated their business with our comprehensive solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="group px-8 py-6 bg-white text-[#4F46E5] hover:bg-gray-100 rounded-xl text-lg font-semibold shadow-xl"
              asChild
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-[#4F46E5] rounded-xl text-lg font-semibold"
              asChild
            >
              <Link href="#services">
                Explore Services
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1200+</div>
                <div className="text-sm">Projects Delivered</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
