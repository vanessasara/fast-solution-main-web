'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative bg-[#FDF7F2] overflow-hidden">
      {/* Decorative geometric pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #4F46E5 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - 55% */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#4F46E5]/10 rounded-full border border-[#4F46E5]/20"
              style={{
                animation: 'fadeUp 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              <div className="w-2 h-2 bg-[#F97316] rounded-full animate-pulse" />
              <span className="text-[#4F46E5] text-sm font-semibold">Your Multi-Service Partner</span>
            </div>

            {/* Main Headline */}
            <div
              className="space-y-4"
              style={{
                animation: 'fadeUp 0.8s ease-out 0.2s forwards',
                opacity: 0
              }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight">
                Comprehensive Solutions for{' '}
                <span className="text-[#4F46E5]">Every Business Need</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                From IT and Marketing to Real Estate and Education—Fast Solutions delivers excellence across 8 professional services. Your trusted partner for growth and innovation.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4"
              style={{
                animation: 'fadeUp 1s ease-out 0.4s forwards',
                opacity: 0
              }}
            >
              <Button
                className="group px-8 py-6 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="#services">
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 border-2 border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white rounded-xl text-lg font-semibold transition-all"
                asChild
              >
                <a href="/contact">Get Consultation</a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              className="pt-6 space-y-4"
              style={{
                animation: 'fadeUp 1.2s ease-out 0.6s forwards',
                opacity: 0
              }}
            >
              <p className="text-sm text-gray-500 font-medium">Trusted by Industry Leaders</p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="w-24 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200">
                  <span className="text-xs font-semibold text-gray-400">LOGO</span>
                </div>
                <div className="w-24 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200">
                  <span className="text-xs font-semibold text-gray-400">LOGO</span>
                </div>
                <div className="w-24 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200">
                  <span className="text-xs font-semibold text-gray-400">LOGO</span>
                </div>
                <div className="w-24 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200">
                  <span className="text-xs font-semibold text-gray-400">LOGO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual - 45% */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative h-[600px]">
              {/* Decorative accent shape */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#F97316]/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#4F46E5]/20 rounded-full blur-3xl" />

              {/* Floating Image Cards */}
              <div
                className="absolute top-0 right-0 w-72 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                style={{
                  animation: 'floatIn 1s ease-out 0.5s forwards',
                  opacity: 0,
                  transform: 'translateY(20px)'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                  alt="Business analytics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4F46E5]/80 to-transparent flex items-end p-4">
                  <span className="text-white font-semibold text-sm">IT Solutions</span>
                </div>
              </div>

              <div
                className="absolute top-32 left-0 w-64 h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                style={{
                  animation: 'floatIn 1s ease-out 0.7s forwards',
                  opacity: 0,
                  transform: 'translateY(20px)'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F97316]/80 to-transparent flex items-end p-4">
                  <span className="text-white font-semibold text-sm">Marketing</span>
                </div>
              </div>

              <div
                className="absolute bottom-20 right-4 w-56 h-36 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                style={{
                  animation: 'floatIn 1s ease-out 0.9s forwards',
                  opacity: 0,
                  transform: 'translateY(20px)'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80"
                  alt="Real estate"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/80 to-transparent flex items-end p-4">
                  <span className="text-white font-semibold text-sm">Real Estate</span>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#F97316] rounded-full" />
              <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-[#4F46E5] rounded-full" />
              <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[#F97316] rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}
