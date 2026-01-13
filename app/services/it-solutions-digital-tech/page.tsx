'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ITSolutionsPage() {
  const [activeService, setActiveService] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored solutions that scale with your business',
      icon: '💻',
      features: ['Cloud Native', 'API Development', 'System Integration']
    },
    {
      title: 'Website & E-Commerce',
      description: 'High-performance digital storefronts',
      icon: '🛒',
      features: ['Responsive Design', 'Payment Gateway', 'SEO Optimized']
    },
    {
      title: 'Mobile App Solutions',
      description: 'Native and cross-platform applications',
      icon: '📱',
      features: ['iOS & Android', 'Real-time Sync', 'Push Notifications']
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your business operations',
      icon: '🚀',
      features: ['Process Automation', 'Cloud Migration', 'AI Integration']
    }
  ];
  const serv = [
    {
      title: 'Innovation First',
      description: 'We leverage the latest technologies to keep your business ahead of the curve',
      icon: '⚡'
    },
    {
      title: 'Agile & Adaptive',
      description: 'Fast iterations and continuous improvement ensure your project stays on track',
      icon: '🎯'
    },
    {
      title: 'End-to-End Support',
      description: 'From concept to deployment and beyond, we are with you every step',
      icon: '🛡️'
    }
  ]
  const techStack = [
    'React', 'Next.js', 'Node.js', 'Python', 'AWS', 'Docker',
    'PostgreSQL', 'MongoDB', 'TypeScript', 'GraphQL', 'Kubernetes', 'Redis'
  ];

  const caseStudies = [
    {
      title: 'E-Commerce Platform',
      client: 'Retail Giant',
      result: '300% increase in sales',
      image: '🏪'
    },
    {
      title: 'Banking App',
      client: 'Financial Institution',
      result: '1M+ active users',
      image: '🏦'
    },
    {
      title: 'Healthcare System',
      client: 'Hospital Network',
      result: '50% faster processing',
      image: '🏥'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(250, 204, 21, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(250, 204, 21, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12 animate-fadeIn">
            <div className="inline-block mb-6 px-6 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full backdrop-blur-sm">
              <span className="text-yellow-400 font-semibold tracking-wider text-sm uppercase">
                X Fast Group IT Solutions
              </span>
            </div>
            <h1 className="text-7xl md:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent animate-shimmer">
                Digital Innovation
              </span>
              <br />
              <span className="text-white">That Transforms</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              9+ years of delivering cutting-edge technology solutions that drive measurable business growth
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="group relative px-8 py-4 bg-yellow-400 text-slate-900 font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/50">
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
              <button className="px-8 py-4 border-2 border-yellow-400/50 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400/10 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {[
              { number: '500+', label: 'Projects Delivered' },
              { number: '50+', label: 'Global Clients' },
              { number: '9+', label: 'Years Experience' },
              { number: '98%', label: 'Client Satisfaction' }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-2xl bg-slate-800/50 border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl font-black text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Why Choose <span className="text-yellow-400">FAST IT</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We combine technical excellence with business insight to deliver solutions that matter
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serv.map((value, idx) => (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-yellow-400">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.description}</p>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center">
            Our <span className="text-yellow-400">Core Services</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                onClick={() => setActiveService(idx)}
                className={`group cursor-pointer p-8 rounded-3xl transition-all duration-500 ${activeService === idx
                    ? 'bg-gradient-to-br from-yellow-400/20 to-amber-400/10 border-2 border-yellow-400 scale-105'
                    : 'bg-slate-800/30 border-2 border-slate-700/50 hover:border-yellow-400/30'
                  }`}
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-3xl font-bold mb-3 text-yellow-400">{service.title}</h3>
                <p className="text-slate-300 text-lg mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, fIdx) => (
                    <span
                      key={fIdx}
                      className="px-4 py-2 bg-slate-700/50 rounded-full text-sm border border-yellow-400/20 text-yellow-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center">
            Technology <span className="text-yellow-400">Stack</span>
          </h2>

          <div className="relative">
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="px-6 py-3 bg-slate-800/50 border border-yellow-400/30 rounded-xl text-yellow-400 font-semibold hover:bg-yellow-400/10 hover:scale-110 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center">
            Our <span className="text-yellow-400">Process</span>
          </h2>

          <div className="space-y-8">
            {[
              { phase: 'Discovery', desc: 'Understanding your vision and requirements' },
              { phase: 'Design', desc: 'Creating intuitive user experiences' },
              { phase: 'Development', desc: 'Building robust, scalable solutions' },
              { phase: 'Deployment', desc: 'Launch and continuous optimization' }
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-6 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-2xl font-black text-slate-900 group-hover:scale-110 transition-transform duration-300">
                  {idx + 1}
                </div>
                <div className="flex-1 p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 group-hover:border-yellow-400/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">{step.phase}</h3>
                  <p className="text-slate-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center">
            Success <span className="text-yellow-400">Stories</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">{study.image}</div>
                <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                <p className="text-slate-400 mb-4">{study.client}</p>
                <div className="text-yellow-400 font-bold text-xl">{study.result}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-amber-400/10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-7xl font-black mb-6">
            Ready to <span className="text-yellow-400">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Let's discuss how we can help you achieve your digital goals
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="group relative px-10 py-5 bg-yellow-400 text-slate-900 font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/50">
              <span className="relative z-10">Get Free Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
            <button className="px-10 py-5 border-2 border-yellow-400 text-yellow-400 font-bold text-lg rounded-xl hover:bg-yellow-400/10 transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>

        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-shimmer {
          background-size: 200% 200%;
          animation: shimmer 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
