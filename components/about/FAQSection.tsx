'use client';

import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How do I get started with your services?',
    answer: 'Getting started is simple! Contact us through our website, phone, or email. We\'ll schedule a free consultation to understand your needs and recommend the best solutions. Our team will guide you through every step of the process.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We serve a wide range of industries including technology, real estate, education, travel and tourism, marketing, hospitality, consulting, and e-commerce. Our diverse portfolio allows us to bring cross-industry insights to every project.',
  },
  {
    question: 'Do you offer customized solutions?',
    answer: 'Absolutely! Every business is unique, and we believe in tailored solutions. Our team works closely with you to understand your specific requirements and develops customized strategies that align with your goals and budget.',
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on scope and complexity. Simple projects may take 2-4 weeks, while comprehensive solutions can take 2-6 months. We provide detailed timeline estimates during the initial consultation and keep you updated throughout.',
  },
  {
    question: 'How do you handle support after project completion?',
    answer: 'We offer comprehensive post-project support including maintenance packages, training sessions, and 24/7 technical assistance. Our relationship doesn\'t end at project delivery—we\'re committed to your long-term success.',
  },
  {
    question: 'What makes Fast Solutions different from competitors?',
    answer: 'Our multi-service approach sets us apart. Instead of working with multiple vendors, you get all services under one roof with consistent quality. We combine 15+ years of experience with innovative solutions and dedicated customer support.',
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes! We work with clients globally. Our team is experienced in cross-cultural communication and can accommodate different time zones. We use modern collaboration tools to ensure seamless project management regardless of location.',
  },
  {
    question: 'What are your payment terms?',
    answer: 'We offer flexible payment structures including milestone-based payments, monthly retainers, and project-based pricing. Specific terms are discussed during the proposal stage and customized to your business needs.',
  },
];

export default function FAQSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-1">
            <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mt-4 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Find answers to common questions about our services and processes
            </p>

            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search questions..."
                className="pl-12 h-14 border-2 border-gray-300 focus:border-[#4F46E5] rounded-xl"
              />
            </div>

            <div className="mt-8 p-6 bg-[#FDF7F2] rounded-xl">
              <h3 className="font-bold text-[#0F172A] mb-2">Still have questions?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Can't find the answer you're looking for? Our team is here to help.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center text-[#4F46E5] font-semibold hover:text-[#F97316] transition-colors"
              >
                Contact Support
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border-2 border-gray-200 rounded-xl px-6 data-[state=open]:border-[#4F46E5] transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold text-[#0F172A] hover:text-[#4F46E5]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
