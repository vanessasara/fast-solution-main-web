'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Skeleton, SkeletonCard, SkeletonText, SkeletonAvatar, SkeletonButton } from '@/components/ui/skeleton';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Code, Monitor, Server, ArrowRight } from 'lucide-react';

export default function AnimationExamples() {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
      <div>
        <h1 className="text-4xl font-bold mb-4">Animation Examples</h1>
        <p className="text-lg text-slate-600">
          Phase 8: Animation and Interaction Guidelines showcase
        </p>
      </div>

      {/* Scroll Animations */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Scroll Reveal Animations</h2>
          <p className="text-slate-600">Elements animate into view as you scroll</p>
        </div>

        <div className="space-y-12">
          <ScrollReveal animation="fadeUp">
            <Card variant="default" className="p-8">
              <h3 className="text-xl font-bold mb-2">Fade Up Animation</h3>
              <p className="text-slate-600">This card fades up when scrolled into view</p>
            </Card>
          </ScrollReveal>

          <ScrollReveal animation="slideInLeft">
            <Card variant="default" className="p-8">
              <h3 className="text-xl font-bold mb-2">Slide In Left</h3>
              <p className="text-slate-600">This card slides in from the left</p>
            </Card>
          </ScrollReveal>

          <ScrollReveal animation="slideInRight">
            <Card variant="default" className="p-8">
              <h3 className="text-xl font-bold mb-2">Slide In Right</h3>
              <p className="text-slate-600">This card slides in from the right</p>
            </Card>
          </ScrollReveal>

          <ScrollReveal animation="scaleIn">
            <Card variant="default" className="p-8">
              <h3 className="text-xl font-bold mb-2">Scale In Animation</h3>
              <p className="text-slate-600">This card scales in when visible</p>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Staggered Grid Animation */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Staggered Grid Animation</h2>
          <p className="text-slate-600">Cards appear with staggered delays</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ScrollReveal animation="fadeUp" delay={0}>
            <Card variant="elevated" className="group p-6">
              <div className="w-12 h-12 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F46E5] transition-colors">
                <Code className="w-6 h-6 text-[#4F46E5] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold mb-2">Feature One</h3>
              <p className="text-slate-600 text-sm">Appears first</p>
            </Card>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" delay={100}>
            <Card variant="elevated" className="group p-6">
              <div className="w-12 h-12 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F46E5] transition-colors">
                <Monitor className="w-6 h-6 text-[#4F46E5] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold mb-2">Feature Two</h3>
              <p className="text-slate-600 text-sm">Appears second</p>
            </Card>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" delay={200}>
            <Card variant="elevated" className="group p-6">
              <div className="w-12 h-12 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F46E5] transition-colors">
                <Server className="w-6 h-6 text-[#4F46E5] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold mb-2">Feature Three</h3>
              <p className="text-slate-600 text-sm">Appears third</p>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Hover Interactions */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Hover Interactions</h2>
          <p className="text-slate-600">Interactive elements with smooth transitions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card Hover - Lift Effect */}
          <Card variant="elevated" className="group p-6">
            <div className="w-14 h-14 rounded-xl bg-[#4F46E5]/10 flex items-center justify-center mb-6 group-hover:bg-[#4F46E5] transition-colors duration-300">
              <Code className="w-7 h-7 text-[#4F46E5] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-[#4F46E5] transition-colors duration-300">
              Lift on Hover
            </h3>
            <p className="text-slate-600 mb-6">
              Card lifts with shadow increase and border accent appears
            </p>
            <div className="mt-6 pt-6 border-t-2 border-transparent group-hover:border-[#F97316] transition-all duration-300" />
          </Card>

          {/* Card Hover - Scale Effect */}
          <div className="group p-6 border-2 border-slate-200 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer">
            <div className="w-14 h-14 rounded-xl bg-[#F97316]/10 flex items-center justify-center mb-6 group-hover:bg-[#F97316] transition-colors duration-300">
              <Monitor className="w-7 h-7 text-[#F97316] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-3">
              Scale on Hover
            </h3>
            <p className="text-slate-600">
              Card scales slightly with shadow increase
            </p>
          </div>
        </div>

        {/* Button Hover Examples */}
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="lg">
            Hover Me
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button variant="outline" size="lg" className="group">
            With Icon Animation
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Loading States */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Loading States</h2>
          <p className="text-slate-600">Spinners and skeleton loading</p>
        </div>

        {/* Loading Spinners */}
        <Card variant="default" className="p-8">
          <h3 className="text-lg font-bold mb-6">Loading Spinners</h3>
          <div className="flex flex-wrap items-center gap-8">
            <LoadingSpinner size="sm" variant="primary" />
            <LoadingSpinner size="default" variant="primary" />
            <LoadingSpinner size="lg" variant="primary" />
            <LoadingSpinner size="default" variant="secondary" />
            <LoadingSpinner size="default" variant="primary" label="Loading..." />
          </div>
        </Card>

        {/* Button Loading State */}
        <Card variant="default" className="p-8">
          <h3 className="text-lg font-bold mb-6">Button Loading State</h3>
          <div className="flex gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => setIsLoading(false), 2000);
              }}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <LoadingSpinner size="sm" variant="white" />
                  <span>Loading...</span>
                </>
              ) : (
                <>Submit Form</>
              )}
            </Button>
          </div>
        </Card>

        {/* Skeleton Loading */}
        <div>
          <h3 className="text-lg font-bold mb-6">Skeleton Loading</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Card variant="default" className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <SkeletonAvatar size="lg" />
                <div className="flex-1">
                  <Skeleton className="h-4 w-32 mb-2" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>
              <SkeletonText lines={3} />
              <div className="mt-4">
                <SkeletonButton />
              </div>
            </Card>

            <Card variant="default" className="p-6">
              <Skeleton className="h-40 w-full mb-4 rounded-lg" />
              <Skeleton className="h-6 w-3/4 mb-2" />
              <SkeletonText lines={2} />
            </Card>
          </div>
        </div>
      </section>

      {/* Image Hover Effects */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Image Hover Effects</h2>
          <p className="text-slate-600">Images with zoom and overlay effects</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="group relative overflow-hidden rounded-xl cursor-pointer">
            <div className="aspect-video bg-gradient-to-br from-[#4F46E5] to-[#6366F1] transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white font-semibold">View Project</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl cursor-pointer">
            <div className="aspect-video bg-gradient-to-br from-[#F97316] to-[#FB923C] transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white font-semibold">View Details</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl cursor-pointer">
            <div className="aspect-video bg-gradient-to-br from-[#1E293B] to-[#334155] transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white font-semibold">Learn More</p>
            </div>
          </div>
        </div>
      </section>

      {/* Page Transition Hint */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Page Transitions</h2>
          <p className="text-slate-600">
            Smooth fade transitions between pages (200-300ms duration)
          </p>
        </div>
      </section>
    </div>
  );
}
