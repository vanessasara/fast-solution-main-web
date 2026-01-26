'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import VisuallyHidden from '@/components/accessibility/VisuallyHidden';
import ResponsiveContainer from '@/components/ui/responsive-container';
import { X, Check, AlertCircle, Info } from 'lucide-react';

export default function AccessibilityExamples() {
  const [showModal, setShowModal] = useState(false);

  return (
    <ResponsiveContainer>
      <div className="space-y-20 py-20">
        <div>
          <h1 className="text-4xl font-bold mb-4">Accessibility Examples</h1>
          <p className="text-lg text-slate-600">
            Phase 12: WCAG AA compliant accessibility features
          </p>
        </div>

        {/* Semantic HTML */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Semantic HTML</h2>
            <p className="text-slate-600">
              Using proper HTML elements for better accessibility
            </p>
          </div>

          <Card variant="default" className="p-6">
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <p className="text-sm font-semibold text-green-800 mb-2">✅ Proper Semantic Structure</p>
                <pre className="text-xs bg-white p-3 rounded overflow-x-auto">
{`<header>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>

<main id="main-content">
  <article>
    <h1>Article Title</h1>
    <p>Content...</p>
  </article>
</main>

<footer>
  <p>&copy; 2026 Company</p>
</footer>`}
                </pre>
              </div>

              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <p className="text-sm font-semibold text-red-800 mb-2">❌ Non-Semantic Structure</p>
                <pre className="text-xs bg-white p-3 rounded overflow-x-auto">
{`<div class="header">
  <div class="nav">
    <div class="nav-item">Home</div>
    <div class="nav-item">About</div>
  </div>
</div>

<div class="content">
  <div class="article">
    <div class="title">Title</div>
    <div class="text">Content...</div>
  </div>
</div>`}
                </pre>
              </div>
            </div>
          </Card>
        </section>

        {/* Heading Hierarchy */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Heading Hierarchy</h2>
            <p className="text-slate-600">
              Logical heading structure (h1 → h2 → h3, no skipping)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card variant="default" className="p-6">
              <p className="text-sm font-semibold text-green-600 mb-4">✅ Correct Hierarchy</p>
              <div className="space-y-2">
                <h1 className="text-2xl font-bold">Page Title (h1)</h1>
                <h2 className="text-xl font-bold">Section Title (h2)</h2>
                <h3 className="text-lg font-bold">Subsection Title (h3)</h3>
                <h3 className="text-lg font-bold">Another Subsection (h3)</h3>
                <h2 className="text-xl font-bold">Another Section (h2)</h2>
              </div>
            </Card>

            <Card variant="default" className="p-6">
              <p className="text-sm font-semibold text-red-600 mb-4">❌ Incorrect Hierarchy</p>
              <div className="space-y-2">
                <h1 className="text-2xl font-bold">Page Title (h1)</h1>
                <h3 className="text-lg font-bold">Skipped h2! (h3)</h3>
                <h2 className="text-xl font-bold">Section Title (h2)</h2>
                <h4 className="text-base font-bold">Skipped h3! (h4)</h4>
              </div>
            </Card>
          </div>
        </section>

        {/* Keyboard Navigation */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Keyboard Navigation</h2>
            <p className="text-slate-600">
              All interactive elements accessible via keyboard
            </p>
          </div>

          <Card variant="default" className="p-6">
            <p className="text-sm text-slate-600 mb-4">
              Try navigating through these elements using Tab key:
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="primary"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    alert('Button activated via keyboard!');
                  }
                }}
              >
                Button 1
              </Button>
              <Button variant="outline">Button 2</Button>
              <Button variant="ghost">Button 3</Button>
              <a
                href="#keyboard-nav"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg border-2 border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white transition-all"
              >
                Link
              </a>
            </div>

            <div className="mt-6 bg-[#FDF7F2] p-4 rounded-lg">
              <p className="text-sm font-semibold mb-2">Focus Indicator</p>
              <p className="text-xs text-slate-600">
                All interactive elements have visible focus indicators (blue ring)
              </p>
            </div>
          </Card>
        </section>

        {/* ARIA Labels */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">ARIA Labels</h2>
            <p className="text-slate-600">
              Proper labeling for assistive technologies
            </p>
          </div>

          <Card variant="default" className="p-6">
            <div className="space-y-6">
              {/* Icon Buttons */}
              <div>
                <p className="text-sm font-semibold mb-3">Icon Buttons with ARIA Labels</p>
                <div className="flex gap-3">
                  <button
                    className="w-10 h-10 rounded-lg bg-[#4F46E5] text-white flex items-center justify-center"
                    aria-label="Close dialog"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <button
                    className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center"
                    aria-label="Confirm selection"
                  >
                    <Check className="w-5 h-5" />
                  </button>
                  <button
                    className="w-10 h-10 rounded-lg bg-[#F97316] text-white flex items-center justify-center"
                    aria-label="Show information"
                  >
                    <Info className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-xs text-slate-600 mt-2">
                  Screen readers announce: "Close dialog button", "Confirm selection button", etc.
                </p>
              </div>

              {/* Form Labels */}
              <div>
                <p className="text-sm font-semibold mb-3">Form Labels</p>
                <div className="space-y-4 max-w-md">
                  <div>
                    <Label htmlFor="email-input">Email Address</Label>
                    <Input
                      id="email-input"
                      type="email"
                      placeholder="you@example.com"
                      aria-describedby="email-help"
                    />
                    <p id="email-help" className="text-xs text-slate-600 mt-1">
                      We'll never share your email
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="password-input">
                      Password
                      <span className="text-red-600 ml-1" aria-label="required">*</span>
                    </Label>
                    <Input
                      id="password-input"
                      type="password"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Color Contrast */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Color Contrast</h2>
            <p className="text-slate-600">
              WCAG AA compliant contrast ratios (4.5:1 for normal text)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card variant="default" className="p-6">
              <p className="text-sm font-semibold text-green-600 mb-4">✅ Good Contrast</p>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border">
                  <p className="text-[#0F172A]">Dark text on white (16.8:1)</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <p className="text-[#475569]">Slate text on white (7.5:1)</p>
                </div>
                <div className="bg-[#4F46E5] p-3 rounded">
                  <p className="text-white">White text on indigo (8.6:1)</p>
                </div>
                <div className="bg-[#F97316] p-3 rounded">
                  <p className="text-white">White text on coral (4.5:1)</p>
                </div>
              </div>
            </Card>

            <Card variant="default" className="p-6">
              <p className="text-sm font-semibold text-red-600 mb-4">❌ Poor Contrast</p>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border">
                  <p className="text-slate-300">Light gray on white (2.1:1) - Fails</p>
                </div>
                <div className="bg-slate-200 p-3 rounded">
                  <p className="text-slate-400">Gray on light gray (2.5:1) - Fails</p>
                </div>
                <div className="bg-yellow-200 p-3 rounded">
                  <p className="text-yellow-400">Yellow on light yellow (1.8:1) - Fails</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Screen Reader Only Content */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Screen Reader Only Content</h2>
            <p className="text-slate-600">
              Visually hidden but accessible to screen readers
            </p>
          </div>

          <Card variant="default" className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-lg bg-[#4F46E5] text-white flex items-center justify-center">
                  <X className="w-5 h-5" />
                  <VisuallyHidden>Close modal</VisuallyHidden>
                </button>
                <p className="text-sm text-slate-600">
                  Icon button with visually hidden text for screen readers
                </p>
              </div>

              <div className="bg-[#FDF7F2] p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">Code Example:</p>
                <pre className="text-xs bg-white p-3 rounded overflow-x-auto">
{`<button>
  <X className="w-5 h-5" />
  <VisuallyHidden>Close modal</VisuallyHidden>
</button>`}
                </pre>
              </div>
            </div>
          </Card>
        </section>

        {/* Form Error States */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Form Error States</h2>
            <p className="text-slate-600">
              Accessible error messaging with ARIA attributes
            </p>
          </div>

          <Card variant="default" className="p-6">
            <form className="space-y-6 max-w-md">
              <div>
                <Label htmlFor="error-email">Email Address</Label>
                <Input
                  id="error-email"
                  type="email"
                  aria-invalid="true"
                  aria-describedby="error-email-error"
                  className="border-red-500"
                />
                <div id="error-email-error" className="flex items-center gap-2 mt-2 text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">Please enter a valid email address</span>
                </div>
              </div>

              <div className="bg-[#FDF7F2] p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">Accessibility Features:</p>
                <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                  <li>aria-invalid="true" marks field as invalid</li>
                  <li>aria-describedby links to error message</li>
                  <li>Icon + text (not color alone)</li>
                  <li>Screen readers announce the error</li>
                </ul>
              </div>
            </form>
          </Card>
        </section>

        {/* Skip Navigation */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Skip Navigation Link</h2>
            <p className="text-slate-600">
              Allow keyboard users to skip repetitive navigation
            </p>
          </div>

          <Card variant="default" className="p-6">
            <div className="space-y-4">
              <div className="bg-[#FDF7F2] p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">How it works:</p>
                <ol className="text-sm text-slate-600 space-y-2 list-decimal list-inside">
                  <li>Tab to the page when it loads</li>
                  <li>First element focused is "Skip to main content" link</li>
                  <li>Pressing Enter jumps to main content</li>
                  <li>Link is visually hidden until focused</li>
                </ol>
              </div>

              <div className="bg-white border p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">Code Example:</p>
                <pre className="text-xs bg-slate-50 p-3 rounded overflow-x-auto">
{`<a
  href="#main-content"
  className="sr-only focus:not-sr-only"
>
  Skip to main content
</a>

<main id="main-content">
  {/* Page content */}
</main>`}
                </pre>
              </div>
            </div>
          </Card>
        </section>

        {/* Motion Preferences */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Reduced Motion</h2>
            <p className="text-slate-600">
              Respecting prefers-reduced-motion settings
            </p>
          </div>

          <Card variant="default" className="p-6">
            <div className="space-y-4">
              <p className="text-sm text-slate-600">
                Users with motion sensitivity can set their OS to prefer reduced motion.
                Our animations respect this preference.
              </p>

              <div className="bg-[#FDF7F2] p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">CSS Implementation:</p>
                <pre className="text-xs bg-white p-3 rounded overflow-x-auto">
{`@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`}
                </pre>
              </div>

              <div className="flex items-start gap-2 text-sm text-slate-600">
                <Info className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#4F46E5]" />
                <p>
                  Test this by enabling "Reduce motion" in your operating system's accessibility settings
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Accessibility Checklist */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Accessibility Checklist</h2>
            <p className="text-slate-600">
              Key requirements for WCAG AA compliance
            </p>
          </div>

          <Card variant="default" className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="font-semibold">✅ Semantic HTML</p>
                <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                  <li>Proper heading hierarchy (h1-h6)</li>
                  <li>Semantic elements (nav, main, article)</li>
                  <li>Landmark roles</li>
                </ul>

                <p className="font-semibold mt-4">✅ Keyboard Navigation</p>
                <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                  <li>All interactive elements focusable</li>
                  <li>Visible focus indicators</li>
                  <li>Logical tab order</li>
                  <li>Skip navigation link</li>
                </ul>

                <p className="font-semibold mt-4">✅ ARIA</p>
                <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                  <li>Proper labels for all inputs</li>
                  <li>ARIA attributes for dynamic content</li>
                  <li>Live regions for updates</li>
                </ul>
              </div>

              <div className="space-y-3">
                <p className="font-semibold">✅ Color & Contrast</p>
                <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                  <li>4.5:1 contrast for normal text</li>
                  <li>3:1 contrast for large text</li>
                  <li>Not relying on color alone</li>
                </ul>

                <p className="font-semibold mt-4">✅ Media</p>
                <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                  <li>Alt text for all images</li>
                  <li>Captions for videos</li>
                  <li>Transcripts available</li>
                </ul>

                <p className="font-semibold mt-4">✅ Forms</p>
                <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                  <li>Labels associated with inputs</li>
                  <li>Error announcements</li>
                  <li>Required field indication</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </ResponsiveContainer>
  );
}
