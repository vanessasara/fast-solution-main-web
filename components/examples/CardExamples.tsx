'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Monitor, Server, ArrowRight } from 'lucide-react';

export default function CardExamples() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
      <div>
        <h1 className="text-4xl font-bold mb-4">Card Component Examples</h1>
        <p className="text-lg text-slate-600">
          Complete examples of all card variants and use cases
        </p>
      </div>

      {/* Default Cards */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Default Cards</h2>
          <p className="text-slate-600">Standard content containers with shadow</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card variant="default" className="p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Default Card</h3>
            <p className="text-slate-600">
              This is a default card with white background and subtle shadow.
            </p>
          </Card>

          <Card variant="default" className="p-6">
            <div className="w-10 h-10 rounded-lg bg-[#4F46E5] flex items-center justify-center mb-4">
              <Code className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">With Icon</h3>
            <p className="text-slate-600">Card with an icon at the top.</p>
          </Card>

          <Card variant="default" className="p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">With Button</h3>
            <p className="text-slate-600 mb-4">Card with action button.</p>
            <Button variant="outline" size="sm">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Card>
        </div>
      </section>

      {/* Bordered Cards */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Bordered Cards</h2>
          <p className="text-slate-600">Cleaner look with border, changes color on hover</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card variant="bordered" className="p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Bordered Card</h3>
            <p className="text-slate-600">
              Hover over this card to see the border change color.
            </p>
          </Card>

          <Card variant="bordered" className="p-6">
            <div className="w-10 h-10 rounded-lg bg-[#F97316]/10 flex items-center justify-center mb-4">
              <Monitor className="w-5 h-5 text-[#F97316]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">With Icon</h3>
            <p className="text-slate-600">Bordered card with icon accent.</p>
          </Card>

          <Card variant="bordered" className="p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Interactive</h3>
            <p className="text-slate-600 mb-4">Border highlights on hover.</p>
            <Button variant="ghost" size="sm">
              View Details
            </Button>
          </Card>
        </div>
      </section>

      {/* Elevated Cards */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Elevated Cards</h2>
          <p className="text-slate-600">Interactive cards that lift on hover</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card variant="elevated" className="p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Elevated Card</h3>
            <p className="text-slate-600">
              Hover to see the card lift with shadow increase.
            </p>
          </Card>

          <Card variant="elevated" className="p-6">
            <div className="w-10 h-10 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center mb-4">
              <Server className="w-5 h-5 text-[#4F46E5]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Clickable</h3>
            <p className="text-slate-600">Perfect for clickable items.</p>
          </Card>

          <Card variant="elevated" className="p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">With Action</h3>
            <p className="text-slate-600 mb-4">Elevated card with button.</p>
            <div className="flex items-center text-[#F97316] font-semibold text-sm">
              <span>Explore</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </Card>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Feature Cards</h2>
          <p className="text-slate-600">Complete feature cards with icons and interactions</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card variant="elevated" className="group p-8">
            <div className="w-14 h-14 rounded-xl bg-[#4F46E5]/10 flex items-center justify-center mb-6 group-hover:bg-[#4F46E5] transition-colors">
              <Code className="w-7 h-7 text-[#4F46E5] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#4F46E5] transition-colors">
              Custom Development
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Tailored applications built to your exact specifications using modern frameworks.
            </p>
            <div className="mt-6 pt-6 border-t-2 border-transparent group-hover:border-[#F97316] transition-all" />
          </Card>

          <Card variant="elevated" className="group p-8">
            <div className="w-14 h-14 rounded-xl bg-[#4F46E5]/10 flex items-center justify-center mb-6 group-hover:bg-[#4F46E5] transition-colors">
              <Monitor className="w-7 h-7 text-[#4F46E5] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#4F46E5] transition-colors">
              Cloud Solutions
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Scalable cloud infrastructure on AWS, Azure, and Google Cloud platforms.
            </p>
            <div className="mt-6 pt-6 border-t-2 border-transparent group-hover:border-[#F97316] transition-all" />
          </Card>

          <Card variant="elevated" className="group p-8">
            <div className="w-14 h-14 rounded-xl bg-[#4F46E5]/10 flex items-center justify-center mb-6 group-hover:bg-[#4F46E5] transition-colors">
              <Server className="w-7 h-7 text-[#4F46E5] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#4F46E5] transition-colors">
              DevOps & CI/CD
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Automated deployment pipelines and infrastructure as code for rapid cycles.
            </p>
            <div className="mt-6 pt-6 border-t-2 border-transparent group-hover:border-[#F97316] transition-all" />
          </Card>
        </div>
      </section>

      {/* Service Cards */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Service Cards</h2>
          <p className="text-slate-600">Cards for services with "Learn More" links</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card variant="elevated" className="group p-6">
            <div className="w-12 h-12 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F46E5] transition-colors">
              <Code className="w-6 h-6 text-[#4F46E5] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#4F46E5] transition-colors">
              IT Solutions
            </h3>
            <p className="text-slate-600 text-sm mb-4 line-clamp-2">
              Transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex items-center text-[#F97316] font-semibold text-sm group-hover:gap-2 transition-all">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Card>

          <Card variant="elevated" className="group p-6">
            <div className="w-12 h-12 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F46E5] transition-colors">
              <Monitor className="w-6 h-6 text-[#4F46E5] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#4F46E5] transition-colors">
              Marketing
            </h3>
            <p className="text-slate-600 text-sm mb-4 line-clamp-2">
              Data-driven marketing strategies that deliver measurable results.
            </p>
            <div className="flex items-center text-[#F97316] font-semibold text-sm group-hover:gap-2 transition-all">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Card>

          <Card variant="elevated" className="group p-6">
            <div className="w-12 h-12 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F46E5] transition-colors">
              <Server className="w-6 h-6 text-[#4F46E5] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#4F46E5] transition-colors">
              Real Estate
            </h3>
            <p className="text-slate-600 text-sm mb-4 line-clamp-2">
              Find your perfect property with expert guidance and support.
            </p>
            <div className="flex items-center text-[#F97316] font-semibold text-sm group-hover:gap-2 transition-all">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Card>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Pricing Cards</h2>
          <p className="text-slate-600">Cards for pricing tiers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card variant="bordered" className="p-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
              <div className="mb-4">
                <span className="text-4xl font-black text-[#0F172A]">PKR 150K</span>
                <span className="text-slate-600">/month</span>
              </div>
              <ul className="space-y-2 mb-6 text-left">
                <li className="flex items-center gap-2 text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span>Basic web application</span>
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span>Up to 5 pages</span>
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span>3 months support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Start Now
              </Button>
            </div>
          </Card>

          <Card variant="elevated" className="p-6 border-2 border-[#F97316]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="bg-[#F97316] text-white px-4 py-1 rounded-full text-sm font-semibold">
                Popular
              </span>
            </div>
            <div className="text-center pt-4">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Professional</h3>
              <div className="mb-4">
                <span className="text-4xl font-black text-[#0F172A]">PKR 350K</span>
                <span className="text-slate-600">/month</span>
              </div>
              <ul className="space-y-2 mb-6 text-left">
                <li className="flex items-center gap-2 text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span>Advanced application</span>
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span>Unlimited pages</span>
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span>6 months support</span>
                </li>
              </ul>
              <Button variant="primary" className="w-full">
                Start Now
              </Button>
            </div>
          </Card>

          <Card variant="bordered" className="p-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise</h3>
              <div className="mb-4">
                <span className="text-4xl font-black text-[#0F172A]">Custom</span>
              </div>
              <ul className="space-y-2 mb-6 text-left">
                <li className="flex items-center gap-2 text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span>Full transformation</span>
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span>Dedicated team</span>
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span>Lifetime support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Contact Us
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
