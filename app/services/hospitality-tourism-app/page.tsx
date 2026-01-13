'use client';

import React, { useState } from 'react';

export default function DesigningHospitalityPage() {
  const [activeService, setActiveService] = useState('interior');

  const designServices = {
    interior: {
      title: 'Interior Design',
      tagline: 'Luxury and Comfort Combined',
      description: 'We create interiors that reflect personality, comfort, and purpose. Every element from lighting to textures is meticulously designed to ensure functionality and beauty.',
      features: [
        'Residential Interiors',
        'Commercial Spaces',
        'Hotel & Restaurant Design',
        'Custom Furniture Selection'
      ],
      icon: '🛋️',
      gradient: 'from-amber-400 via-yellow-500 to-amber-600'
    },
    exterior: {
      title: 'Exterior Design',
      tagline: 'Creating Memorable First Impressions',
      description: 'Our exterior designs combine modern architecture with premium materials to ensure buildings stand out with sophistication and character.',
      features: [
        'Facade Design',
        'Landscape Architecture',
        'Lighting Design',
        'Material Selection'
      ],
      icon: '🏛️',
      gradient: 'from-slate-400 via-gray-500 to-slate-600'
    },
    furniture: {
      title: 'Furniture Design',
      tagline: 'Craftsmanship Meets Creativity',
      description: 'Custom furniture that complements your space perfectly. Each piece is a blend of art, comfort, and functionality.',
      features: [
        'Custom-Made Furniture',
        'Luxury Pieces',
        'Space-Specific Design',
        'Artisan Collaboration'
      ],
      icon: '🪑',
      gradient: 'from-yellow-600 via-amber-700 to-yellow-800'
    },
    hospitality: {
      title: 'Hospitality Design',
      tagline: 'Creating Unforgettable Experiences',
      description: 'Designing hotels, restaurants, and resorts that combine comfort, efficiency, and luxury for exceptional guest experiences.',
      features: [
        'Hotel & Resort Design',
        'Restaurant Concepts',
        'Guest Experience Focus',
        'Operational Efficiency'
      ],
      icon: '🏨',
      gradient: 'from-rose-400 via-pink-500 to-rose-600'
    }
  };

  const portfolio = [
    {
      title: 'Luxury Hotel Lobby',
      type: 'Five-Star Hotel',
      location: 'Islamabad',
      image: '🏨',
      description: 'Grand lobby with contemporary elegance'
    },
    {
      title: 'Modern Villa Interior',
      type: 'Residential',
      location: 'Lahore',
      image: '🏡',
      description: 'Sophisticated family home design'
    },
    {
      title: 'Fine Dining Restaurant',
      type: 'Hospitality',
      location: 'Karachi',
      image: '🍽️',
      description: 'Ambient dining experience'
    },
    {
      title: 'Corporate Office',
      type: 'Commercial',
      location: 'Islamabad',
      image: '🏢',
      description: 'Innovative workspace design'
    },
    {
      title: 'Boutique Resort',
      type: 'Hospitality',
      location: 'Northern Areas',
      image: '🏔️',
      description: 'Nature-inspired luxury'
    },
    {
      title: 'Premium Showroom',
      type: 'Commercial',
      location: 'Lahore',
      image: '🏪',
      description: 'High-end retail experience'
    }
  ];

  const designProcess = [
    {
      phase: 'Discovery',
      description: 'Understanding your vision, lifestyle, and preferences',
      icon: '🔍',
      duration: '1-2 Weeks'
    },
    {
      phase: 'Conceptualization',
      description: 'Sketches, mood boards, and 3D renders to visualize design',
      icon: '🎨',
      duration: '2-3 Weeks'
    },
    {
      phase: 'Development',
      description: 'Refining design with materials, colors, and textures',
      icon: '⚙️',
      duration: '3-4 Weeks'
    },
    {
      phase: 'Execution',
      description: 'Skilled artisans bring the design to life with precision',
      icon: '🔨',
      duration: '8-12 Weeks'
    },
    {
      phase: 'Final Touches',
      description: 'Styling, accessorizing, and lighting for perfect atmosphere',
      icon: '✨',
      duration: '1-2 Weeks'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Expert Team',
      description: 'Decades of combined experience in luxury design across various sectors',
      icon: '👥'
    },
    {
      title: 'Custom Solutions',
      description: 'Every design tailored to your preferences, brand, and functionality',
      icon: '🎯'
    },
    {
      title: 'Quality Commitment',
      description: 'Highest standards of craftsmanship and sustainable materials',
      icon: '💎'
    },
    {
      title: 'End-to-End Service',
      description: 'From concept to completion, we manage every detail',
      icon: '🔄'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-stone-900 to-neutral-900 text-white">
      {/* Elegant Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Sophisticated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.15),transparent_70%)]" />
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-8">
              <div className="flex items-center gap-4 px-8 py-4 bg-yellow-500/5 border-2 border-yellow-500/30 backdrop-blur-sm">
                <div className="text-3xl">✦</div>
                <span className="text-yellow-400 font-bold tracking-[0.3em] text-sm">FAST DESIGNING & HOSPITALITY</span>
                <div className="text-3xl">✦</div>
              </div>
            </div>

            <h1 className="text-7xl md:text-8xl lg:text-9xl font-light mb-8 leading-none tracking-tight">
              <span className="block text-white italic">Designing</span>
              <span className="block text-yellow-400 font-bold">DREAMS</span>
              <span className="block text-white italic">Building</span>
              <span className="block text-yellow-400 font-bold">LEGACIES</span>
            </h1>

            <div className="max-w-4xl mx-auto mb-12">
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-8" />
              <p className="text-2xl md:text-3xl text-neutral-300 font-light leading-relaxed">
                Where creativity intersects craftsmanship to create spaces that are 
                <span className="text-yellow-400 font-semibold"> timeless, elegant, and unforgettable</span>
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mt-8" />
            </div>

            <div className="flex flex-wrap gap-6 justify-center">
              <button className="group relative px-12 py-5 bg-transparent border-2 border-yellow-500 text-yellow-400 font-bold text-lg overflow-hidden transition-all duration-500 hover:text-neutral-900">
                <span className="relative z-10 tracking-wider">EXPLORE OUR WORK</span>
                <div className="absolute inset-0 bg-yellow-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
              <button className="px-12 py-5 bg-yellow-500/10 border-2 border-yellow-500/30 text-white font-bold text-lg hover:bg-yellow-500/20 transition-all duration-300 backdrop-blur-sm tracking-wider">
                SCHEDULE CONSULTATION
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Lines */}
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-yellow-500 to-transparent" />
        <div className="absolute top-1/4 right-0 w-32 h-px bg-gradient-to-l from-yellow-500 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-32 h-px bg-gradient-to-r from-yellow-500 to-transparent" />
        <div className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-yellow-500 to-transparent" />
      </section>

      {/* Design Philosophy */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-6 py-2 border border-yellow-500/30 mb-6">
                <span className="text-yellow-400 font-semibold text-sm tracking-widest">OUR PHILOSOPHY</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-light mb-8 leading-tight">
                Luxury Through
                <span className="block text-yellow-400 font-bold text-7xl my-4">SIMPLICITY</span>
              </h2>
              <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                <p>
                  At Fast Designing and Hospitality, we believe that <span className="text-yellow-400 font-semibold">authentic luxury is not loud and overstated</span> — 
                  it is silent, elegant, and eternal.
                </p>
                <p>
                  Every design reflects sophistication balanced with simplicity, making spaces that are both 
                  beautiful and functional. We create environments that inspire, comfort, and endure.
                </p>
                <p className="text-yellow-400 font-semibold italic">
                  "We do not design spaces — we design experiences that touch hearts and build legacies."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '500+', label: 'Projects Completed' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '15+', label: 'Years Experience' },
                { value: '50+', label: 'Expert Team' }
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className="aspect-square bg-neutral-800 border border-yellow-500/20 flex flex-col items-center justify-center hover:border-yellow-500 transition-all duration-500 group"
                >
                  <div className="text-5xl font-bold text-yellow-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-400 font-semibold uppercase tracking-wider text-center px-4">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              Our <span className="text-yellow-400 font-bold">Services</span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Comprehensive design solutions tailored to your vision
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.keys(designServices).map((key) => (
              <button
                key={key}
                onClick={() => setActiveService(key)}
                className={`px-8 py-4 font-semibold transition-all duration-300 ${
                  activeService === key
                    ? 'bg-yellow-500 text-neutral-900 scale-110'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 border border-yellow-500/20'
                }`}
              >
                <span className="mr-2">{designServices[key].icon}</span>
                {designServices[key].title}
              </button>
            ))}
          </div>

          {/* Active Service Display */}
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 bg-gradient-to-br from-neutral-900 to-neutral-800 p-12 border border-yellow-500/30">
              <div className="text-6xl mb-6">{designServices[activeService].icon}</div>
              <h3 className="text-4xl font-bold mb-3 text-yellow-400">
                {designServices[activeService].title}
              </h3>
              <p className="text-xl text-neutral-400 mb-8 italic">
                {designServices[activeService].tagline}
              </p>
              <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                {designServices[activeService].description}
              </p>
              <div className="space-y-4">
                {designServices[activeService].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-lg">
                    <div className="w-2 h-2 bg-yellow-400" />
                    <span className="text-white font-semibold">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className={`aspect-square bg-gradient-to-br ${designServices[activeService].gradient} flex items-center justify-center relative overflow-hidden group`}>
                <div className="text-9xl transform group-hover:scale-125 transition-transform duration-700">
                  {designServices[activeService].icon}
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              Our <span className="text-yellow-400 font-bold">Process</span>
            </h2>
            <p className="text-xl text-neutral-400">
              A journey of collaboration from concept to completion
            </p>
          </div>

          <div className="space-y-12">
            {designProcess.map((step, idx) => (
              <div key={idx} className="group">
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 border-2 border-yellow-500 flex items-center justify-center text-4xl group-hover:bg-yellow-500 group-hover:scale-110 transition-all duration-300">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1 border-l-2 border-neutral-700 pl-8 pb-12 group-hover:border-yellow-500 transition-colors duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-bold text-yellow-400">{step.phase}</h3>
                      <span className="px-4 py-2 bg-neutral-800 border border-yellow-500/30 text-sm font-semibold text-neutral-300">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-lg text-neutral-300 leading-relaxed">{step.description}</p>
                  </div>

                  <div className="hidden lg:block flex-shrink-0 w-16 text-6xl font-bold text-neutral-800 group-hover:text-yellow-500/20 transition-colors duration-300">
                    {(idx + 1).toString().padStart(2, '0')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              Our <span className="text-yellow-400 font-bold">Portfolio</span>
            </h2>
            <p className="text-xl text-neutral-400">
              A legacy of excellence in every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, idx) => (
              <div 
                key={idx}
                className="group relative aspect-[4/3] bg-neutral-800 overflow-hidden border border-yellow-500/20 hover:border-yellow-500 transition-all duration-500"
              >
                <div className="absolute inset-0 flex items-center justify-center text-9xl group-hover:scale-125 transition-transform duration-700">
                  {project.image}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-xs text-yellow-400 font-semibold mb-1 tracking-wider">{project.type}</div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-neutral-400 mb-2">{project.description}</p>
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <span>📍</span>
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              Why Choose <span className="text-yellow-400 font-bold">Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, idx) => (
              <div 
                key={idx}
                className="text-center group"
              >
                <div className="w-24 h-24 mx-auto mb-6 border-2 border-yellow-500/30 flex items-center justify-center text-5xl group-hover:border-yellow-500 group-hover:bg-yellow-500 group-hover:scale-110 transition-all duration-500">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-yellow-400">{reason.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-neutral-950 to-neutral-900 border-t border-yellow-500/20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block px-8 py-3 border-2 border-yellow-500/30">
              <span className="text-yellow-400 font-bold tracking-[0.3em] text-sm">LET'S CREATE TOGETHER</span>
            </div>
          </div>

          <h2 className="text-6xl md:text-7xl font-light mb-6 leading-tight">
            <span className="block text-white italic">Your Vision</span>
            <span className="block text-yellow-400 font-bold text-8xl my-4">OUR CRAFT</span>
          </h2>

          <p className="text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto font-light">
            Transform your space into a masterpiece with Fast Designing & Hospitality
          </p>

          <div className="flex flex-wrap gap-6 justify-center mb-12">
            <button className="group relative px-12 py-6 bg-yellow-500 text-neutral-900 font-bold text-lg overflow-hidden transition-all duration-500">
              <span className="relative z-10 tracking-wider">SCHEDULE CONSULTATION</span>
              <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </button>
            <button className="px-12 py-6 border-2 border-yellow-500 text-yellow-400 font-bold text-lg hover:bg-yellow-500/10 transition-all duration-300 tracking-wider">
              VIEW PORTFOLIO
            </button>
          </div>

          <div className="flex flex-wrap gap-8 justify-center text-neutral-400">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📞</span>
              <div className="text-left">
                <div className="text-xs text-neutral-500 uppercase tracking-wider">Contact</div>
                <div className="font-bold text-lg text-yellow-400">+92 XXX XXX XXXX</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📧</span>
              <div className="text-left">
                <div className="text-xs text-neutral-500 uppercase tracking-wider">Email</div>
                <div className="font-bold text-lg text-yellow-400">info@fastdesigning.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📍</span>
              <div className="text-left">
                <div className="text-xs text-neutral-500 uppercase tracking-wider">Location</div>
                <div className="font-bold text-lg text-yellow-400">Lahore, Pakistan</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
