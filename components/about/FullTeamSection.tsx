'use client';

import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    name: 'Emma Williams',
    role: 'Head of Marketing',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    name: 'David Rodriguez',
    role: 'Operations Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    name: 'Lisa Anderson',
    role: 'Chief Financial Officer',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    name: 'James Wilson',
    role: 'Head of Real Estate',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    name: 'Sophia Martinez',
    role: 'Head of Education Services',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    name: 'Robert Taylor',
    role: 'Travel & Tourism Director',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
];

export default function FullTeamSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
              Leadership Team
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mt-4">
              Meet With Our Dedicated Team Members
            </h2>
          </div>
          <Button
            variant="outline"
            className="mt-6 md:mt-0 border-2 border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white px-6 py-6 rounded-xl font-semibold"
          >
            All Members
          </Button>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Colored background accent on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4F46E5]/90 via-[#4F46E5]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Social Icons */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex gap-3 justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href={member.socials.linkedin}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#F97316] hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.socials.twitter}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#F97316] hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={member.socials.instagram}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#F97316] hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#0F172A] mb-1 group-hover:text-[#4F46E5] transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#F97316] rounded-2xl transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
