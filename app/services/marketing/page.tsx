'use client';

import React, { useState, useRef, useEffect } from 'react';

export default function MarketingPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      title: 'Brand Strategy',
      tagline: 'Creating Identity',
      items: ['Brand Positioning', 'Visual Identity', 'Brand Guidelines', 'Rebranding']
    },
    {
      title: 'Social Media',
      tagline: 'Building Communities',
      items: ['Content Strategy', 'Platform Management', 'Influencer Marketing', 'Community Growth']
    },
    {
      title: 'Performance Marketing',
      tagline: 'Driving Results',
      items: ['Google Ads', 'Meta Campaigns', 'YouTube Marketing', 'ROI Optimization']
    },
    {
      title: 'Creative Production',
      tagline: 'Making Impact',
      items: ['Video Production', 'Photography', 'Graphic Design', 'Campaign Creation']
    }
  ];

  const campaigns = [
    { name: 'TechNext Solutions', result: '340% Engagement', industry: 'Technology' },
    { name: 'BeautyHaus', result: '2M+ Reach', industry: 'Beauty & Fashion' },
    { name: 'The Coffee Lounge', result: '500% ROI', industry: 'Hospitality' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 'PKR 75,000',
      period: '/month',
      features: ['Social Media Management', 'Basic Content Creation', '2 Campaigns/Month', 'Monthly Analytics']
    },
    {
      name: 'Growth',
      price: 'PKR 150,000',
      period: '/month',
      popular: true,
      features: ['Full Social Media Suite', 'Advanced Content', '4 Campaigns/Month', 'Influencer Collaboration', 'Weekly Reports', 'Dedicated Manager']
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: ['Custom Solutions', 'Unlimited Campaigns', 'Celebrity Collaborations', '24/7 Support', 'Brand Strategy', 'Full Creative Team']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Custom Cursor Effect */}
      <div 
        className="fixed w-6 h-6 rounded-full bg-yellow-400 pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-yellow-400 text-black font-bold rounded-full text-sm transform -rotate-2">
                🎨 FAST MARKETING & ADVERTISING
              </div>
              <h1 className="text-7xl md:text-8xl font-black mb-6 leading-tight">
                <span className="block text-yellow-400 italic transform -skew-y-2">Ideas</span>
                <span className="block transform skew-y-1">Meet</span>
                <span className="block text-yellow-400 italic transform -skew-y-2">Impact</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
                We don't just market brands — we create movements that people remember, share, and love.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="group relative px-8 py-4 bg-yellow-400 text-black font-black rounded-none overflow-hidden transition-all duration-300 hover:scale-105 uppercase tracking-wider">
                  <span className="relative z-10">Let's Create Magic</span>
                  <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
                <button className="px-8 py-4 border-4 border-yellow-400 text-yellow-400 font-black rounded-none hover:bg-yellow-400 hover:text-black transition-all duration-300 uppercase tracking-wider">
                  Our Work
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-600 p-1 transform rotate-3 hover:rotate-6 transition-transform duration-500">
                <div className="w-full h-full bg-black rounded-3xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-9xl mb-4">📢</div>
                    <div className="text-3xl font-black text-yellow-400">YOUR BRAND</div>
                    <div className="text-xl text-gray-400 mt-2">amplified</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center font-black text-black transform rotate-12">
                <div className="text-center">
                  <div className="text-2xl">500+</div>
                  <div className="text-xs">BRANDS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-20 px-6 bg-yellow-400 text-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, black 10px, black 20px)`
          }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-6xl md:text-7xl font-black mb-6 italic">
                Making Brands MEMORABLE
              </h2>
              <p className="text-2xl font-bold mb-4">Not just visible.</p>
              <p className="text-xl leading-relaxed">
                In a world of noise, we create signals. Your brand deserves more than impressions — 
                it deserves impact, engagement, and loyalty that lasts.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['BOLD', 'CREATIVE', 'DATA-DRIVEN', 'RESULTS'].map((word, idx) => (
                <div 
                  key={idx}
                  className="aspect-square bg-black text-yellow-400 flex items-center justify-center text-4xl font-black transform hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer"
                >
                  {word}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-black mb-16 text-center">
            WHAT WE <span className="text-yellow-400 italic">DO</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-8 py-4 font-black text-lg transition-all duration-300 ${
                  activeTab === idx
                    ? 'bg-yellow-400 text-black scale-110'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black p-12 border-4 border-yellow-400">
              <h3 className="text-5xl font-black mb-4 text-yellow-400 italic">
                {services[activeTab].title}
              </h3>
              <p className="text-2xl text-gray-400 mb-8">{services[activeTab].tagline}</p>
              <ul className="space-y-4">
                {services[activeTab].items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-xl">
                    <span className="text-yellow-400 font-black">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-600 transform rotate-6 rounded-3xl" />
              <div className="absolute inset-0 bg-black rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-6">
                    {activeTab === 0 ? '🎯' : activeTab === 1 ? '📱' : activeTab === 2 ? '📊' : '🎬'}
                  </div>
                  <div className="text-3xl font-black text-yellow-400">
                    CREATIVE EXCELLENCE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Process */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-black mb-16 text-center">
            OUR <span className="text-yellow-400">PROCESS</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'STRATEGY', desc: 'Deep dive into your brand DNA' },
              { step: '02', title: 'CREATION', desc: 'Bold concepts that break through' },
              { step: '03', title: 'EXECUTION', desc: 'Precision delivery at scale' },
              { step: '04', title: 'ANALYSIS', desc: 'Data-driven optimization' }
            ].map((phase, idx) => (
              <div key={idx} className="group relative">
                <div className="bg-black border-4 border-yellow-400 p-8 transform group-hover:scale-105 transition-all duration-300">
                  <div className="text-6xl font-black text-yellow-400 mb-4">{phase.step}</div>
                  <h3 className="text-2xl font-black mb-3">{phase.title}</h3>
                  <p className="text-gray-400">{phase.desc}</p>
                </div>
                <div className="absolute inset-0 bg-yellow-400 transform scale-0 group-hover:scale-105 transition-transform duration-300 -z-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Success Stories */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-black mb-16 text-center">
            CAMPAIGN <span className="text-yellow-400 italic">WINS</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {campaigns.map((campaign, idx) => (
              <div 
                key={idx}
                className="group relative bg-gradient-to-br from-gray-900 to-black p-8 border-4 border-gray-800 hover:border-yellow-400 transition-all duration-500 transform hover:scale-105"
              >
                <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-400 text-black font-black text-xs">
                  {campaign.industry}
                </div>
                <h3 className="text-3xl font-black mb-4 mt-8">{campaign.name}</h3>
                <div className="text-5xl font-black text-yellow-400 mb-2">{campaign.result}</div>
                <button className="mt-6 px-6 py-2 bg-white text-black font-black hover:bg-yellow-400 transition-colors duration-300">
                  VIEW CASE →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-6 bg-yellow-400 text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-black mb-4 text-center">FLEXIBLE</h2>
          <h3 className="text-5xl font-black mb-16 text-center italic">Pricing Plans</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <div 
                key={idx}
                className={`relative p-8 transform hover:scale-105 transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-black text-white border-8 border-black scale-105' 
                    : 'bg-white text-black border-4 border-black'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-yellow-400 text-black font-black text-sm">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-3xl font-black mb-4">{plan.name}</h3>
                <div className="mb-8">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="text-xl">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <span className={plan.popular ? 'text-yellow-400' : 'text-black'}>✓</span>
                      <span className="font-semibold">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 font-black text-lg transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-yellow-400 text-black hover:bg-white' 
                    : 'bg-black text-white hover:bg-yellow-400 hover:text-black'
                }`}>
                  GET STARTED
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-black mb-16 text-center">
            WHAT CLIENTS <span className="text-yellow-400 italic">SAY</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Fast Marketing totally changed our digital presence. Their branding strategy gave our firm a new image that resonates perfectly with our target market.",
                author: "Ali Raza",
                role: "CEO, TechNext Solutions"
              },
              {
                quote: "We couldn't believe how fast our social media activity took off! Their content team is creative and knows the psychology of the present generation audience.",
                author: "Sana Khan",
                role: "Founder, BeautyHaus"
              }
            ].map((testimonial, idx) => (
              <div 
                key={idx}
                className="bg-gray-900 p-8 border-l-8 border-yellow-400 transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl text-yellow-400 mb-4">"</div>
                <p className="text-xl mb-6 leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-3xl font-black text-black">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-black text-lg">{testimonial.author}</div>
                    <div className="text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400" />
        <div className="max-w-5xl mx-auto text-center relative z-10 text-black">
          <h2 className="text-7xl md:text-8xl font-black mb-6 italic transform -skew-y-2">
            START YOUR
          </h2>
          <h3 className="text-8xl md:text-9xl font-black mb-8 transform skew-y-2">
            BRAND TRANSFORMATION
          </h3>
          <button className="group relative px-12 py-6 bg-black text-yellow-400 font-black text-2xl overflow-hidden transition-all duration-300 hover:scale-110 uppercase tracking-wider">
            <span className="relative z-10">LET'S TALK →</span>
            <div className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }

        .animate-blob {
          animation: blob 10s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
