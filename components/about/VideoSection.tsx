'use client';

import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="bg-[#FDF7F2] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
              Company Overview
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mt-4 mb-6">
              Let's See Our Promo Video
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes Fast Solutions your trusted partner for business success
            </p>
          </div>

          {/* Video Thumbnail */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer" onClick={() => setIsOpen(true)}>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80"
                alt="Video thumbnail"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/40 to-transparent" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#F97316] rounded-full animate-ping opacity-75" />
                  <div className="relative w-24 h-24 bg-[#F97316] hover:bg-[#EA580C] rounded-full flex items-center justify-center shadow-2xl transition-all group-hover:scale-110">
                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>

              {/* Text Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  15+ Years of Excellence
                </h3>
                <p className="text-gray-300">
                  Watch how we transform businesses across 8 professional services
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-[#4F46E5] rounded-full opacity-50" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#F97316]/20 rounded-full blur-2xl" />
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black border-none">
          <div className="relative pt-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Company Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
