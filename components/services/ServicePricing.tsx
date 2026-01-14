'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  accentColor?: string;
}

interface ServicePricingProps {
  pricing: PricingTier[];
}

export default function ServicePricing({ pricing }: ServicePricingProps) {
  return (
    <section className="py-20 px-6 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#F97316] font-semibold uppercase tracking-wider text-sm">
              Pricing Plans
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Choose Your <span className="text-[#4F46E5]">Perfect Plan</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Flexible pricing options designed to fit businesses of all sizes
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.map((tier, index) => (
            <Card
              key={index}
              className={`relative p-8 border-2 transition-all duration-300 hover:scale-105 ${
                tier.isPopular
                  ? 'bg-white border-[#F97316] shadow-2xl scale-105 md:translate-y-[-16px]'
                  : 'bg-[#1E293B] border-slate-700 hover:border-[#4F46E5]'
              }`}
            >
              {/* Popular Badge */}
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#F97316] text-white px-6 py-1.5 text-sm font-bold shadow-lg">
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-2xl font-black mb-2 ${
                tier.isPopular ? 'text-[#0F172A]' : 'text-white'
              }`}>
                {tier.name}
              </h3>

              {/* Price */}
              <div className="mb-8">
                <span className={`text-5xl font-black ${
                  tier.isPopular ? 'text-[#4F46E5]' : 'text-[#F97316]'
                }`}>
                  {tier.price}
                </span>
                {tier.period && (
                  <span className={`text-lg ml-2 ${
                    tier.isPopular ? 'text-slate-600' : 'text-slate-400'
                  }`}>
                    {tier.period}
                  </span>
                )}
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                      tier.isPopular ? 'bg-[#F97316]' : 'bg-[#4F46E5]'
                    }`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className={`text-sm font-medium ${
                      tier.isPopular ? 'text-slate-700' : 'text-slate-300'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full py-6 text-lg font-bold transition-all duration-300 ${
                  tier.isPopular
                    ? 'bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-lg'
                    : 'bg-white hover:bg-[#F97316] text-[#0F172A] hover:text-white'
                }`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-slate-400 mt-12 text-sm">
          All plans include free consultation. Custom enterprise solutions available. Contact us for details.
        </p>
      </div>
    </section>
  );
}
