'use client';

import React from 'react';

export default function PartnerLogos() {
  const logos = [
    'PARTNER 1',
    'PARTNER 2',
    'PARTNER 3',
    'PARTNER 4',
    'PARTNER 5',
    'PARTNER 6',
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Trusted by Industry Leaders
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center border border-gray-300">
                <span className="text-xs font-semibold text-gray-400">{logo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
