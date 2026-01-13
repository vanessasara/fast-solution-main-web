'use client';

import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function NewsletterSignup() {
  return (
    <section className="bg-[#FDF7F2] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4F46E5]/10 rounded-full">
              <Mail className="w-4 h-4 text-[#4F46E5]" />
              <span className="text-[#4F46E5] text-sm font-semibold">Stay Updated</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A]">
              Subscribe to Our Newsletter
            </h2>

            <p className="text-lg text-gray-600">
              Get the latest industry insights, expert tips, and exclusive offers delivered straight to your inbox. Join our community of forward-thinking professionals.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-6 h-6 bg-[#4F46E5] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Weekly industry insights and trends</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-6 h-6 bg-[#4F46E5] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Exclusive offers and early access</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-6 h-6 bg-[#4F46E5] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Expert tips and best practices</span>
              </li>
            </ul>
          </div>

          {/* Right - Form */}
          <div className="relative">
            {/* Decorative arrow pointing to input */}
            <div className="hidden lg:block absolute -left-20 top-1/2 -translate-y-1/2 text-[#F97316]">
              <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 30C20 25 35 20 50 25C60 28 65 35 75 35M75 35L65 30M75 35L65 40"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
              <form className="space-y-4">
                <div>
                  <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="newsletter-email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-14 px-4 text-base border-2 border-gray-300 focus:border-[#4F46E5] rounded-xl"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-xl text-lg font-semibold group"
                >
                  Subscribe Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-center text-gray-500">
                  <svg className="w-4 h-4 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  No spam, unsubscribe anytime. We respect your privacy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
