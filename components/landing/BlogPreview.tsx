'use client';

import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'The Future of Digital Transformation in 2026',
    excerpt: 'Explore the latest trends and technologies shaping digital transformation strategies for modern businesses.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
    category: 'Technology',
    date: 'January 10, 2026',
    link: '#',
  },
  {
    title: 'Effective Marketing Strategies for Small Businesses',
    excerpt: 'Discover proven marketing tactics that help small businesses compete with larger competitors.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80',
    category: 'Marketing',
    date: 'January 8, 2026',
    link: '#',
  },
  {
    title: 'Real Estate Investment Tips for 2026',
    excerpt: 'Expert insights on navigating the real estate market and making smart investment decisions.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
    category: 'Real Estate',
    date: 'January 5, 2026',
    link: '#',
  },
];

export default function BlogPreview() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
            Latest Updates
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mt-4 mb-6">
            News & Insights
          </h2>
          <p className="text-lg text-gray-600">
            Stay informed with the latest industry trends, expert insights, and company updates
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              href={post.link}
              className="group"
            >
              <Card className="h-full overflow-hidden border-2 border-gray-200 hover:border-[#4F46E5] hover:shadow-xl transition-all duration-300">
                {/* Image with Category Tag */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />

                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#F97316] text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#4F46E5] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center text-[#4F46E5] font-semibold group-hover:text-[#F97316] transition-colors pt-2">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
