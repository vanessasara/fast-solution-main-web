'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import OptimizedImage from '@/components/ui/optimized-image';
import ResponsiveContainer from '@/components/ui/responsive-container';

export default function ImageExamples() {
  return (
    <ResponsiveContainer>
      <div className="space-y-20 py-20">
        <div>
          <h1 className="text-4xl font-bold mb-4">Image Guidelines Examples</h1>
          <p className="text-lg text-slate-600">
            Phase 10: Optimized image handling with Next.js Image component
          </p>
        </div>

        {/* Basic Optimized Images */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Optimized Images</h2>
            <p className="text-slate-600">
              Using Next.js Image component with automatic optimization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card variant="default" className="p-4">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop"
                alt="IT Solutions - Modern office with technology equipment"
                width={600}
                height={400}
                quality="default"
                aspectRatio="landscape"
                rounded="lg"
              />
              <h3 className="text-lg font-bold mt-4 mb-2">IT Solutions</h3>
              <p className="text-sm text-slate-600">Modern office technology</p>
            </Card>

            <Card variant="default" className="p-4">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
                alt="Marketing - Creative team collaboration"
                width={600}
                height={400}
                quality="default"
                aspectRatio="landscape"
                rounded="lg"
              />
              <h3 className="text-lg font-bold mt-4 mb-2">Marketing</h3>
              <p className="text-sm text-slate-600">Creative team collaboration</p>
            </Card>

            <Card variant="default" className="p-4">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop"
                alt="Real Estate - Modern building exterior"
                width={600}
                height={400}
                quality="default"
                aspectRatio="landscape"
                rounded="lg"
              />
              <h3 className="text-lg font-bold mt-4 mb-2">Real Estate</h3>
              <p className="text-sm text-slate-600">Modern building exterior</p>
            </Card>
          </div>
        </section>

        {/* Image with Accent Frame */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Images with Accent Frames</h2>
            <p className="text-slate-600">
              Colored borders offset for visual interest
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <OptimizedImage
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop"
              alt="Hospitality - Hotel interior design"
              width={600}
              height={700}
              quality="high"
              aspectRatio="portrait"
              accentFrame="coral"
              rounded="lg"
            />

            <OptimizedImage
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop"
              alt="Education - International classroom setting"
              width={600}
              height={700}
              quality="high"
              aspectRatio="portrait"
              accentFrame="indigo"
              rounded="lg"
            />
          </div>
        </section>

        {/* Different Aspect Ratios */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Aspect Ratios</h2>
            <p className="text-slate-600">
              Consistent aspect ratios for better layouts
            </p>
          </div>

          <div className="space-y-6">
            {/* Square */}
            <div>
              <p className="text-sm font-semibold mb-3">Square (1:1)</p>
              <div className="grid grid-cols-4 gap-4 max-w-2xl">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&auto=format&fit=crop"
                  alt="Printing services equipment"
                  width={200}
                  height={200}
                  aspectRatio="square"
                  rounded="lg"
                />
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&auto=format&fit=crop"
                  alt="Travel and tourism destination"
                  width={200}
                  height={200}
                  aspectRatio="square"
                  rounded="lg"
                />
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?w=400&auto=format&fit=crop"
                  alt="Business consultation meeting"
                  width={200}
                  height={200}
                  aspectRatio="square"
                  rounded="lg"
                />
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&auto=format&fit=crop"
                  alt="Real estate property"
                  width={200}
                  height={200}
                  aspectRatio="square"
                  rounded="lg"
                />
              </div>
            </div>

            {/* Landscape */}
            <div>
              <p className="text-sm font-semibold mb-3">Landscape (16:9)</p>
              <OptimizedImage
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop"
                alt="Technology workspace"
                width={1200}
                height={675}
                aspectRatio="landscape"
                rounded="lg"
                className="max-w-4xl"
              />
            </div>

            {/* Hero */}
            <div>
              <p className="text-sm font-semibold mb-3">Hero (2:1)</p>
              <OptimizedImage
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop"
                alt="Marketing campaign planning"
                width={1200}
                height={600}
                aspectRatio="hero"
                rounded="lg"
                className="max-w-4xl"
              />
            </div>
          </div>
        </section>

        {/* Loading Priority */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Loading Strategy</h2>
            <p className="text-slate-600">
              Priority loading for above-fold images, lazy loading for below-fold
            </p>
          </div>

          <Card variant="default" className="p-6">
            <div className="space-y-4">
              <div className="bg-[#FDF7F2] p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">Above Fold (Priority Load)</p>
                <p className="text-xs text-slate-600 mb-3">
                  Use <code className="bg-white px-2 py-1 rounded">loading="eager"</code> or <code className="bg-white px-2 py-1 rounded">priority</code>
                </p>
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop"
                  alt="Hero image - Technology workspace"
                  width={800}
                  height={450}
                  loading="eager"
                  quality="high"
                  aspectRatio="landscape"
                  rounded="lg"
                />
              </div>

              <div className="bg-slate-100 p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">Below Fold (Lazy Load)</p>
                <p className="text-xs text-slate-600 mb-3">
                  Use <code className="bg-white px-2 py-1 rounded">loading="lazy"</code> (default)
                </p>
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
                  alt="Below fold image - Marketing team"
                  width={800}
                  height={450}
                  loading="lazy"
                  aspectRatio="landscape"
                  rounded="lg"
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Image Quality Settings */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Quality Settings</h2>
            <p className="text-slate-600">
              Different quality levels for different use cases
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card variant="default" className="p-4">
              <p className="text-sm font-semibold mb-3">High Quality (90)</p>
              <p className="text-xs text-slate-600 mb-3">For hero images, portfolios</p>
              <OptimizedImage
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop"
                alt="High quality image example"
                width={400}
                height={300}
                quality="high"
                aspectRatio="landscape"
                rounded="lg"
              />
            </Card>

            <Card variant="default" className="p-4">
              <p className="text-sm font-semibold mb-3">Default Quality (75)</p>
              <p className="text-xs text-slate-600 mb-3">For most content images</p>
              <OptimizedImage
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop"
                alt="Default quality image example"
                width={400}
                height={300}
                quality="default"
                aspectRatio="landscape"
                rounded="lg"
              />
            </Card>

            <Card variant="default" className="p-4">
              <p className="text-sm font-semibold mb-3">Low Quality (60)</p>
              <p className="text-xs text-slate-600 mb-3">For thumbnails, previews</p>
              <OptimizedImage
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop"
                alt="Low quality image example"
                width={400}
                height={300}
                quality="low"
                aspectRatio="landscape"
                rounded="lg"
              />
            </Card>
          </div>
        </section>

        {/* Alt Text Best Practices */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Alt Text Best Practices</h2>
            <p className="text-slate-600">
              Descriptive, concise alt text for accessibility
            </p>
          </div>

          <Card variant="default" className="p-6">
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div>
                  <p className="text-sm font-semibold text-green-600 mb-2">✅ Good Alt Text</p>
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&auto=format&fit=crop"
                    alt="Diverse international students collaborating in modern classroom with laptops"
                    width={400}
                    height={300}
                    aspectRatio="landscape"
                    rounded="lg"
                  />
                  <p className="text-xs text-slate-600 mt-2 bg-slate-100 p-2 rounded">
                    alt="Diverse international students collaborating in modern classroom with laptops"
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-red-600 mb-2">❌ Poor Alt Text</p>
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&auto=format&fit=crop"
                    alt="Image"
                    width={400}
                    height={300}
                    aspectRatio="landscape"
                    rounded="lg"
                  />
                  <p className="text-xs text-slate-600 mt-2 bg-red-50 p-2 rounded">
                    alt="Image" - Too generic, not descriptive
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </ResponsiveContainer>
  );
}
