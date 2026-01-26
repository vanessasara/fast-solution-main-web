'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ResponsiveContainer from '@/components/ui/responsive-container';
import ResponsiveGrid from '@/components/ui/responsive-grid';
import { Code, Monitor, Server, Smartphone, Tablet, Monitor as Desktop } from 'lucide-react';

export default function ResponsiveExamples() {
  return (
    <div className="space-y-20">
      {/* Header */}
      <ResponsiveContainer>
        <div>
          <h1 className="text-4xl font-bold mb-4">Responsive Design Examples</h1>
          <p className="text-lg text-slate-600">
            Phase 9: Responsive Design Requirements showcase
          </p>
        </div>
      </ResponsiveContainer>

      {/* Breakpoint Indicators */}
      <ResponsiveContainer>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Breakpoint System</h2>
            <p className="text-slate-600">Resize your browser to see the active breakpoint</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* XS */}
            <Card variant="bordered" className="p-4 block sm:hidden">
              <Smartphone className="w-8 h-8 text-[#4F46E5] mb-2" />
              <p className="font-bold text-sm">XS</p>
              <p className="text-xs text-slate-600">&lt; 640px</p>
            </Card>

            {/* SM */}
            <Card variant="bordered" className="p-4 hidden sm:block md:hidden">
              <Smartphone className="w-8 h-8 text-[#4F46E5] mb-2" />
              <p className="font-bold text-sm">SM</p>
              <p className="text-xs text-slate-600">≥ 640px</p>
            </Card>

            {/* MD */}
            <Card variant="bordered" className="p-4 hidden md:block lg:hidden">
              <Tablet className="w-8 h-8 text-[#4F46E5] mb-2" />
              <p className="font-bold text-sm">MD</p>
              <p className="text-xs text-slate-600">≥ 768px</p>
            </Card>

            {/* LG */}
            <Card variant="bordered" className="p-4 hidden lg:block xl:hidden">
              <Desktop className="w-8 h-8 text-[#4F46E5] mb-2" />
              <p className="font-bold text-sm">LG</p>
              <p className="text-xs text-slate-600">≥ 1024px</p>
            </Card>

            {/* XL */}
            <Card variant="bordered" className="p-4 hidden xl:block 2xl:hidden">
              <Desktop className="w-8 h-8 text-[#4F46E5] mb-2" />
              <p className="font-bold text-sm">XL</p>
              <p className="text-xs text-slate-600">≥ 1280px</p>
            </Card>

            {/* 2XL */}
            <Card variant="bordered" className="p-4 hidden 2xl:block">
              <Desktop className="w-8 h-8 text-[#4F46E5] mb-2" />
              <p className="font-bold text-sm">2XL</p>
              <p className="text-xs text-slate-600">≥ 1536px</p>
            </Card>
          </div>
        </section>
      </ResponsiveContainer>

      {/* Responsive Grids */}
      <ResponsiveContainer>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Responsive Grid Layouts</h2>
            <p className="text-slate-600">Grids adapt to screen size automatically</p>
          </div>

          {/* Services Grid: 1 -> 2 -> 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services Grid (1 → 2 → 4 columns)</h3>
            <ResponsiveGrid variant="services">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} variant="bordered" className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center mb-4">
                    <Code className="w-5 h-5 text-[#4F46E5]" />
                  </div>
                  <h4 className="font-bold mb-2">Service {i}</h4>
                  <p className="text-sm text-slate-600">Description text</p>
                </Card>
              ))}
            </ResponsiveGrid>
          </div>

          {/* Features Grid: 1 -> 2 -> 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Features Grid (1 → 2 → 3 columns)</h3>
            <ResponsiveGrid variant="features">
              {[1, 2, 3].map((i) => (
                <Card key={i} variant="bordered" className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-[#F97316]/10 flex items-center justify-center mb-4">
                    <Monitor className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <h4 className="font-bold mb-2">Feature {i}</h4>
                  <p className="text-sm text-slate-600">Description text</p>
                </Card>
              ))}
            </ResponsiveGrid>
          </div>

          {/* Split Layout: 1 -> 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Split Layout (1 → 2 columns)</h3>
            <ResponsiveGrid variant="split">
              <Card variant="default" className="p-6">
                <h4 className="font-bold mb-2">Left Column</h4>
                <p className="text-sm text-slate-600">Stacks on mobile, side-by-side on desktop</p>
              </Card>
              <Card variant="default" className="p-6">
                <h4 className="font-bold mb-2">Right Column</h4>
                <p className="text-sm text-slate-600">Responsive layout for content and images</p>
              </Card>
            </ResponsiveGrid>
          </div>
        </section>
      </ResponsiveContainer>

      {/* Responsive Typography */}
      <ResponsiveContainer>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Responsive Typography</h2>
            <p className="text-slate-600">Text sizes scale appropriately across devices</p>
          </div>

          <Card variant="default" className="p-8 space-y-6">
            <div>
              <p className="text-xs text-slate-500 mb-2">Hero Heading</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                Hero Title
              </h1>
            </div>

            <div>
              <p className="text-xs text-slate-500 mb-2">H1 Heading</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Main Heading
              </h1>
            </div>

            <div>
              <p className="text-xs text-slate-500 mb-2">H2 Heading</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Section Heading
              </h2>
            </div>

            <div>
              <p className="text-xs text-slate-500 mb-2">Body Text</p>
              <p className="text-base md:text-lg text-slate-600">
                This is body text that scales from base to large on wider screens. It remains readable across all device sizes.
              </p>
            </div>
          </Card>
        </section>
      </ResponsiveContainer>

      {/* Mobile Hero Pattern */}
      <ResponsiveContainer>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Mobile Hero Pattern</h2>
            <p className="text-slate-600">Hero sections stack on mobile, side-by-side on desktop</p>
          </div>

          <Card variant="default" className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-4 text-center lg:text-left">
                <div className="inline-block px-4 py-1 bg-[#4F46E5]/10 text-[#4F46E5] rounded-full text-sm font-semibold">
                  Your Success Partner
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Transform Your <span className="text-[#F97316]">Business</span>
                </h2>
                <p className="text-slate-600 text-base md:text-lg">
                  Comprehensive solutions designed to help you succeed in the digital age.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button variant="primary" size="lg">Get Started</Button>
                  <Button variant="outline" size="lg">Learn More</Button>
                </div>
              </div>

              {/* Right Visual */}
              <div className="aspect-video bg-gradient-to-br from-[#4F46E5] to-[#6366F1] rounded-xl" />
            </div>
          </Card>
        </section>
      </ResponsiveContainer>

      {/* Mobile Form Pattern */}
      <ResponsiveContainer>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Responsive Form</h2>
            <p className="text-slate-600">Forms adapt with full-width inputs and proper spacing</p>
          </div>

          <Card variant="default" className="p-6 md:p-8 max-w-2xl mx-auto">
            <form className="space-y-4 md:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fname">First Name</Label>
                  <Input id="fname" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lname">Last Name</Label>
                  <Input id="lname" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="+92 300 1234567" />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Submit
                </Button>
                <Button variant="ghost" size="lg" className="w-full sm:w-auto">
                  Cancel
                </Button>
              </div>
            </form>
          </Card>
        </section>
      </ResponsiveContainer>

      {/* Touch Targets */}
      <ResponsiveContainer>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Touch-Friendly Tap Targets</h2>
            <p className="text-slate-600">All interactive elements meet minimum 44px touch target</p>
          </div>

          <Card variant="default" className="p-8">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold mb-3">Buttons (44px height minimum)</p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" size="default">Button</Button>
                  <Button variant="outline" size="default">Button</Button>
                  <Button variant="ghost" size="default">Link</Button>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold mb-3">Icon Buttons (44x44px)</p>
                <div className="flex gap-3">
                  <button className="w-11 h-11 rounded-lg bg-[#4F46E5] text-white flex items-center justify-center">
                    <Code className="w-5 h-5" />
                  </button>
                  <button className="w-11 h-11 rounded-lg bg-[#F97316] text-white flex items-center justify-center">
                    <Monitor className="w-5 h-5" />
                  </button>
                  <button className="w-11 h-11 rounded-lg border-2 border-[#4F46E5] text-[#4F46E5] flex items-center justify-center">
                    <Server className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold mb-3">Input Fields (40px height minimum)</p>
                <Input placeholder="Touch-friendly input field" />
              </div>
            </div>
          </Card>
        </section>
      </ResponsiveContainer>

      {/* Responsive Spacing */}
      <ResponsiveContainer>
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Responsive Spacing</h2>
            <p className="text-slate-600">Padding and gaps scale down on mobile</p>
          </div>

          <div className="bg-[#FDF7F2] rounded-xl p-4 sm:p-6 lg:p-8">
            <p className="text-sm text-slate-600 mb-4">
              Container padding: <code>p-4 sm:p-6 lg:p-8</code>
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              <Card variant="default" className="p-4 md:p-6">
                <p className="text-sm">Card padding scales</p>
              </Card>
              <Card variant="default" className="p-4 md:p-6">
                <p className="text-sm">Gap between items scales</p>
              </Card>
            </div>
          </div>
        </section>
      </ResponsiveContainer>
    </div>
  );
}
