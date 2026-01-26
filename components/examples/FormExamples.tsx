'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Send } from 'lucide-react';

export default function FormExamples() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
      <div>
        <h1 className="text-4xl font-bold mb-4">Form Component Examples</h1>
        <p className="text-lg text-slate-600">
          Complete examples of form inputs, textareas, and form patterns
        </p>
      </div>

      {/* Standard Inputs */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Standard Inputs</h2>
          <p className="text-slate-600">Default inputs for white/light backgrounds</p>
        </div>

        <Card variant="default" className="p-8 max-w-2xl">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                variant="default"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                variant="default"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+92 300 1234567"
                variant="default"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message here..."
                variant="default"
                rows={4}
              />
            </div>

            <Button variant="primary" size="lg" type="button">
              Submit Form
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
        </Card>
      </section>

      {/* Underline Inputs */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Underline Inputs</h2>
          <p className="text-slate-600">For colored backgrounds (navy, indigo, etc.)</p>
        </div>

        <div className="bg-[#4F46E5] p-8 rounded-2xl max-w-2xl">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name2" className="text-white font-medium">Full Name</Label>
              <Input
                id="name2"
                type="text"
                placeholder="John Doe"
                variant="underline"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email2" className="text-white font-medium">Email Address</Label>
              <Input
                id="email2"
                type="email"
                placeholder="john@example.com"
                variant="underline"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone2" className="text-white font-medium">Phone Number</Label>
              <Input
                id="phone2"
                type="tel"
                placeholder="+92 300 1234567"
                variant="underline"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message2" className="text-white font-medium">Message</Label>
              <Textarea
                id="message2"
                placeholder="Your message here..."
                variant="underline"
                rows={4}
              />
            </div>

            <Button variant="primary" size="lg" type="button" className="bg-white text-[#4F46E5] hover:bg-slate-100">
              Send Message
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </section>

      {/* Contact Form - Split Layout */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Contact Form - Split Layout</h2>
          <p className="text-slate-600">Form on colored background with info cards</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Form */}
          <div className="bg-gradient-to-br from-[#4F46E5] to-[#6366F1] p-8 rounded-2xl">
            <div className="mb-6">
              <span className="text-white/80 font-semibold uppercase tracking-wider text-sm">
                Contact Us
              </span>
              <h3 className="text-3xl font-bold text-white mt-2 mb-2">
                Let's Work Together
              </h3>
              <p className="text-white/90">
                Fill out the form and we'll get back to you within 24 hours.
              </p>
            </div>

            <form className="space-y-6">
              <Input
                type="text"
                placeholder="Your Name"
                variant="underline"
              />
              <Input
                type="email"
                placeholder="Email Address"
                variant="underline"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                variant="underline"
              />
              <Textarea
                placeholder="Tell us about your project..."
                variant="underline"
                rows={4}
              />
              <Button variant="primary" size="lg" className="w-full">
                Send Message
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Right - Info */}
          <div className="space-y-6">
            <Card variant="bordered" className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#4F46E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                  <p className="text-slate-600">+92 300 1234567</p>
                  <p className="text-slate-600">+92 321 7654321</p>
                </div>
              </div>
            </Card>

            <Card variant="bordered" className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#F97316]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600">info@fastsolutions.com</p>
                  <p className="text-slate-600">support@fastsolutions.com</p>
                </div>
              </div>
            </Card>

            <Card variant="bordered" className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#4F46E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Office</h4>
                  <p className="text-slate-600">
                    123 Business Street<br />
                    Karachi, Pakistan
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Form */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Newsletter Signup</h2>
          <p className="text-slate-600">Simple newsletter subscription form</p>
        </div>

        <div className="bg-[#FDF7F2] p-8 rounded-2xl max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-slate-600">
                Get the latest updates, news, and exclusive offers delivered to your inbox.
              </p>
            </div>

            <form className="space-y-4">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  variant="default"
                  className="flex-1"
                />
                <Button variant="primary" type="button">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-slate-500">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Search Form */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Search Form</h2>
          <p className="text-slate-600">Simple search input patterns</p>
        </div>

        <div className="space-y-4 max-w-2xl">
          {/* Search with button */}
          <div className="flex gap-2">
            <Input
              type="search"
              placeholder="Search services, projects..."
              variant="default"
              className="flex-1"
            />
            <Button variant="primary">
              Search
            </Button>
          </div>

          {/* Search with icon inside */}
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <Input
              type="search"
              placeholder="Search..."
              variant="default"
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Form States */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Form States</h2>
          <p className="text-slate-600">Disabled and error states</p>
        </div>

        <Card variant="default" className="p-8 max-w-2xl">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="disabled">Disabled Input</Label>
              <Input
                id="disabled"
                type="text"
                placeholder="This input is disabled"
                variant="default"
                disabled
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="disabled-textarea">Disabled Textarea</Label>
              <Textarea
                id="disabled-textarea"
                placeholder="This textarea is disabled"
                variant="default"
                disabled
                rows={3}
              />
            </div>
          </form>
        </Card>
      </section>
    </div>
  );
}
