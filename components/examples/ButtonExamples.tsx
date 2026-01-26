'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Plus, Edit, Trash2 } from 'lucide-react';

export default function ButtonExamples() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
      <div>
        <h1 className="text-4xl font-bold mb-4">Button Component Examples</h1>
        <p className="text-lg text-slate-600">
          Complete examples of all button variants and use cases
        </p>
      </div>

      {/* Primary Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Primary Buttons</h2>
        <p className="text-slate-600">Use for main CTAs and important actions</p>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="sm">
            Small Primary
          </Button>
          <Button variant="primary" size="default">
            Default Primary
          </Button>
          <Button variant="primary" size="lg">
            Large Primary
          </Button>
          <Button variant="primary" size="lg">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Secondary Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Secondary Buttons</h2>
        <p className="text-slate-600">Use for secondary actions</p>
        <div className="flex flex-wrap gap-4">
          <Button variant="secondary" size="sm">
            Small Secondary
          </Button>
          <Button variant="secondary" size="default">
            Default Secondary
          </Button>
          <Button variant="secondary" size="lg">
            Large Secondary
          </Button>
          <Button variant="secondary" size="lg">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Outline Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Outline Buttons</h2>
        <p className="text-slate-600">Use for tertiary actions, less emphasis</p>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" size="sm">
            Small Outline
          </Button>
          <Button variant="outline" size="default">
            Default Outline
          </Button>
          <Button variant="outline" size="lg">
            Large Outline
          </Button>
          <Button variant="outline" size="lg">
            Request Quote
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Outline Coral Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Outline Coral Buttons</h2>
        <p className="text-slate-600">Alternate outline style with warm color</p>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline-coral" size="sm">
            Small Outline
          </Button>
          <Button variant="outline-coral" size="default">
            Default Outline
          </Button>
          <Button variant="outline-coral" size="lg">
            Large Outline
          </Button>
          <Button variant="outline-coral" size="lg">
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Ghost Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Ghost Buttons</h2>
        <p className="text-slate-600">Subtle actions, text-only with hover underline</p>
        <div className="flex flex-wrap gap-4">
          <Button variant="ghost" size="sm">
            Small Ghost
          </Button>
          <Button variant="ghost" size="default">
            Default Ghost
          </Button>
          <Button variant="ghost" size="lg">
            View Details
          </Button>
        </div>
      </section>

      {/* Icon Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Icon Buttons</h2>
        <p className="text-slate-600">Square buttons for icon-only actions</p>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary" size="icon-sm">
            <Plus className="w-4 h-4" />
          </Button>
          <Button variant="primary" size="icon">
            <Edit className="w-4 h-4" />
          </Button>
          <Button variant="primary" size="icon-lg">
            <Download className="w-5 h-5" />
          </Button>

          <Button variant="secondary" size="icon">
            <Edit className="w-4 h-4" />
          </Button>

          <Button variant="outline" size="icon">
            <Plus className="w-4 h-4" />
          </Button>

          <Button variant="destructive" size="icon">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Real-world Examples */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Real-world Examples</h2>
          <p className="text-slate-600">Common button combinations in actual use</p>
        </div>

        {/* Hero CTA */}
        <div className="p-8 bg-[#FDF7F2] rounded-xl">
          <h3 className="text-xl font-bold mb-4">Hero Section CTA</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>

        {/* Form Actions */}
        <div className="p-8 bg-white border-2 border-slate-200 rounded-xl">
          <h3 className="text-xl font-bold mb-4">Form Actions</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="default">
              Submit Form
            </Button>
            <Button variant="ghost" size="default">
              Cancel
            </Button>
          </div>
        </div>

        {/* Card Actions */}
        <div className="p-8 bg-white border-2 border-slate-200 rounded-xl">
          <h3 className="text-xl font-bold mb-4">Card with Actions</h3>
          <p className="text-slate-600 mb-4">
            This is a card with multiple action buttons for different purposes.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" size="sm">
              Primary Action
            </Button>
            <Button variant="outline" size="sm">
              Secondary Action
            </Button>
            <Button variant="ghost" size="sm">
              View More
            </Button>
          </div>
        </div>

        {/* Download Section */}
        <div className="p-8 bg-gradient-to-r from-[#4F46E5] to-[#6366F1] rounded-xl text-white">
          <h3 className="text-xl font-bold mb-2">Download Our Brochure</h3>
          <p className="text-white/90 mb-6">
            Get detailed information about all our services
          </p>
          <Button variant="primary" size="lg">
            Download PDF
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* States */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Button States</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" disabled>
            Disabled Primary
          </Button>
          <Button variant="secondary" disabled>
            Disabled Secondary
          </Button>
          <Button variant="outline" disabled>
            Disabled Outline
          </Button>
        </div>
      </section>
    </div>
  );
}
