'use client';

import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    socials: {
      linkedin: '#',
      twitter: '#',
      email: 'sarah@fastsolutions.com',
    },
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    socials: {
      linkedin: '#',
      twitter: '#',
      email: 'michael@fastsolutions.com',
    },
  },
  {
    name: 'Emma Williams',
    role: 'Head of Marketing',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    socials: {
      linkedin: '#',
      twitter: '#',
      email: 'emma@fastsolutions.com',
    },
  },
  {
    name: 'David Rodriguez',
    role: 'Operations Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    socials: {
      linkedin: '#',
      twitter: '#',
      email: 'david@fastsolutions.com',
    },
  },
];

export default function TeamPreview() {
  return (
    <section className="bg-[#FDF7F2] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mt-4 mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-gray-600">
            Talented professionals dedicated to delivering excellence and driving your success
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Social Icons - Show on Hover */}
                  <div className="absolute inset-x-0 bottom-0 p-6 flex gap-3 justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <a
                      href={member.socials.linkedin}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#4F46E5] hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.socials.twitter}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#4F46E5] hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.socials.email}`}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#F97316] hover:text-white transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>

                {/* Accent Border */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#4F46E5] rounded-2xl transition-colors duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            variant="outline"
            className="px-8 py-6 border-2 border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white rounded-xl text-lg font-semibold"
            asChild
          >
            <Link href="/about-us">
              View All Team Members
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
