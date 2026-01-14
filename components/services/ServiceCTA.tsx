'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface ServiceCTAProps {
  heading: string;
  text: string;
  serviceName: string;
}

export default function ServiceCTA({ heading, text, serviceName }: ServiceCTAProps) {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#4F46E5] via-[#6366F1] to-[#4F46E5] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F97316]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
          {heading}
        </h2>

        {/* Description Text */}
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          {text}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#F97316] hover:bg-[#EA580C] text-white shadow-2xl hover:shadow-3xl transition-all duration-300 group px-8"
          >
            <Link href="/contact">
              <MessageCircle className="mr-2 w-5 h-5" />
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-[#4F46E5] backdrop-blur-sm transition-all duration-300 px-8"
          >
            <Link href="/services">
              View All Services
            </Link>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-black text-white mb-1">9+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white mb-1">1200+</div>
              <div className="text-sm text-white/80">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white mb-1">100+</div>
              <div className="text-sm text-white/80">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* Small print */}
        <p className="text-white/60 text-sm mt-8">
          Free consultation available • No obligation • Quick response time
        </p>
      </div>
    </section>
  );
}
