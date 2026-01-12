'use client';

import React, { useState, useEffect } from 'react';

export default function RealEstatePage() {
  const [activeProperty, setActiveProperty] = useState('residential');
  const [selectedProject, setSelectedProject] = useState(0);

  const propertyTypes = [
    {
      type: 'residential',
      title: 'Residential Properties',
      description: 'Apartments, villas, townhouses, and family houses',
      icon: '🏡',
      listings: ['Modern Villas', 'Luxury Apartments', 'Family Townhouses', 'Penthouses']
    },
    {
      type: 'commercial',
      title: 'Commercial Properties',
      description: 'Offices, retail facilities and industrial units',
      icon: '🏢',
      listings: ['Office Spaces', 'Retail Shops', 'Warehouses', 'Co-working Spaces']
    },
    {
      type: 'luxury',
      title: 'Luxury & Premium',
      description: 'Unique houses and apartments for modern living',
      icon: '💎',
      listings: ['Luxury Estates', 'Premium Condos', 'Waterfront Villas', 'Golf Course Homes']
    }
  ];

  const projects = [
    {
      name: 'Fast Residencia',
      type: 'Luxury Villas',
      location: 'Lahore',
      status: 'Ready to Move',
      features: ['Gated Community', 'Smart Home Tech', '24/7 Security', 'Clubhouse'],
      price: 'PKR 3.5 Cr onwards',
      image: '🏰'
    },
    {
      name: 'Fast Business Hub',
      type: 'Corporate Spaces',
      location: 'Islamabad',
      status: 'Pre-Launch',
      features: ['Grade A Office', 'High-Speed Elevators', 'Central Location', 'Parking'],
      price: 'PKR 18,000/sq ft',
      image: '🏛️'
    },
    {
      name: 'Fast Commercial Towers',
      type: 'High-Rise',
      location: 'Karachi',
      status: 'Under Construction',
      features: ['Sea View', 'Modern Architecture', 'Investment Opportunity', 'Prime Location'],
      price: 'PKR 2.8 Cr onwards',
      image: '🌆'
    }
  ];

  const services = [
    {
      title: 'Property Consultation',
      description: 'Expert guidance on buying, selling, or investing in properties',
      icon: '🎯',
      process: 'Understanding your unique requirements and budget'
    },
    {
      title: 'Market Research',
      description: 'Comprehensive market analysis and property shortlisting',
      icon: '📊',
      process: 'Filtering the most suitable investment opportunities'
    },
    {
      title: 'Property Visits',
      description: 'Guided site visits to help you make informed decisions',
      icon: '🚗',
      process: 'Detailed property tours with expert insights'
    },
    {
      title: 'Deal Negotiation',
      description: 'Professional negotiation for the best terms and prices',
      icon: '💼',
      process: 'Securing maximum value for your investment'
    },
    {
      title: 'Legal Support',
      description: 'Complete documentation and legal assistance',
      icon: '📄',
      process: 'Hassle-free, documented and secure closure'
    },
    {
      title: 'Property Management',
      description: 'Stress-free management of your property investments',
      icon: '🔑',
      process: 'Ongoing maintenance and tenant management'
    }
  ];

  const marketInsights = [
    {
      title: 'Rising Property Values',
      trend: '+12% YoY',
      description: 'Prime locations showing consistent appreciation',
      color: 'text-green-500'
    },
    {
      title: 'Investment Hotspots',
      trend: 'Top 5 Areas',
      description: 'DHA, Bahria, Gulberg leading the market',
      color: 'text-yellow-500'
    },
    {
      title: 'Rental Yields',
      trend: '6-8% ROI',
      description: 'Strong rental demand in commercial sectors',
      color: 'text-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Luxury Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,204,21,0.1),transparent_50%)]" />
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(250,204,21,0.2) 2px, rgba(250,204,21,0.2) 4px),
                               repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(250,204,21,0.2) 2px, rgba(250,204,21,0.2) 4px)`
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-full backdrop-blur-sm">
              <span className="text-yellow-400 text-2xl">🏛️</span>
              <span className="text-yellow-400 font-bold tracking-wider">FAST REAL ESTATE & BUILDERS</span>
            </div>
            
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
              <span className="block text-white">Building</span>
              <span className="block bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Landmarks
              </span>
              <span className="block text-white">Creating Legacies</span>
            </h1>

            <p className="text-2xl md:text-3xl text-slate-400 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              Your trusted partner in property development, investment, and modern housing solutions. 
              We redefine real estate with <span className="text-yellow-400 font-semibold">integrity, innovation, and quality</span>.
            </p>

            <div className="flex flex-wrap gap-6 justify-center mb-16">
              <button className="group relative px-10 py-5 bg-yellow-500 text-slate-900 font-bold text-lg rounded-none overflow-hidden shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  EXPLORE PROPERTIES
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </span>
                <div className="absolute inset-0 bg-yellow-400 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300" />
              </button>
              <button className="px-10 py-5 border-2 border-yellow-500 text-yellow-400 font-bold text-lg rounded-none hover:bg-yellow-500/10 transition-all duration-300">
                SCHEDULE VIEWING
              </button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { value: '500+', label: 'Properties Sold', icon: '🏠' },
                { value: '₨50Cr+', label: 'Transactions', icon: '💰' },
                { value: '25+', label: 'Years Experience', icon: '⭐' },
                { value: '100%', label: 'Client Trust', icon: '🤝' }
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-2xl blur group-hover:blur-xl transition-all duration-300" />
                  <div className="relative bg-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-yellow-500/20 group-hover:border-yellow-500/50 transition-all duration-300">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-4xl font-black text-yellow-400 mb-2">{stat.value}</div>
                    <div className="text-sm text-slate-400 font-semibold uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-yellow-500/20" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-yellow-500/20" />
      </section>

      {/* Our Vision */}
      <section className="py-32 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6">
                <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">Our Vision</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-6 text-white leading-tight">
                Modern Spaces with
                <span className="block text-yellow-400">Lasting Value</span>
              </h2>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                At Fast Real Estate & Builders, we believe in creating more than just buildings — we create 
                communities, legacies, and investment opportunities that stand the test of time.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                With years of experience in the market and a client-first strategy, we ensure attentive and 
                transparent property deals that are profitable for all. We don't just believe in transactions; 
                we develop lasting relationships based on trust and performance.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-yellow-500 to-amber-600 p-1">
                <div className="w-full h-full bg-slate-900 rounded-3xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-9xl mb-6">🏗️</div>
                    <div className="text-3xl font-black text-yellow-400">QUALITY</div>
                    <div className="text-3xl font-black text-white my-2">×</div>
                    <div className="text-3xl font-black text-yellow-400">TRUST</div>
                    <div className="text-3xl font-black text-white my-2">×</div>
                    <div className="text-3xl font-black text-yellow-400">INNOVATION</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Categories */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              Property <span className="text-yellow-400">Categories</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Explore our extensive database of premium properties
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {propertyTypes.map((category) => (
              <button
                key={category.type}
                onClick={() => setActiveProperty(category.type)}
                className={`px-8 py-4 font-bold text-lg rounded-none transition-all duration-300 ${
                  activeProperty === category.type
                    ? 'bg-yellow-500 text-slate-900 scale-110 shadow-2xl shadow-yellow-500/30'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>

          {propertyTypes.map((category) => (
            activeProperty === category.type && (
              <div key={category.type} className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-900 p-12 border-l-4 border-yellow-500">
                  <h3 className="text-4xl font-black mb-4 text-yellow-400">{category.title}</h3>
                  <p className="text-2xl text-slate-400 mb-8">{category.description}</p>
                  <div className="space-y-4">
                    {category.listings.map((listing, idx) => (
                      <div key={idx} className="flex items-center gap-4 text-xl text-white group cursor-pointer">
                        <span className="text-yellow-400 group-hover:translate-x-2 transition-transform duration-300">▸</span>
                        <span className="group-hover:text-yellow-400 transition-colors duration-300">{listing}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-8 px-8 py-4 bg-yellow-500 text-slate-900 font-bold rounded-none hover:bg-yellow-400 transition-colors duration-300">
                    VIEW ALL LISTINGS
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((num) => (
                    <div
                      key={num}
                      className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 flex items-center justify-center text-6xl group cursor-pointer"
                    >
                      <span className="group-hover:scale-125 transition-transform duration-300">{category.icon}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              Featured <span className="text-yellow-400">Projects</span>
            </h2>
            <p className="text-xl text-slate-400">
              Our landmark developments setting new standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedProject(idx)}
                className={`group relative cursor-pointer transition-all duration-500 ${
                  selectedProject === idx ? 'scale-105' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-3xl blur group-hover:blur-xl transition-all duration-300" />
                <div className="relative bg-slate-800 rounded-3xl overflow-hidden border-2 border-yellow-500/20 group-hover:border-yellow-500 transition-all duration-300">
                  <div className="aspect-[4/3] bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-9xl">
                    {project.image}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-yellow-500 text-slate-900 font-bold text-xs rounded-full">
                        {project.status}
                      </span>
                      <span className="text-slate-400 text-sm">{project.location}</span>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">{project.name}</h3>
                    <p className="text-slate-400 mb-4">{project.type}</p>
                    <div className="text-2xl font-black text-yellow-400 mb-4">{project.price}</div>
                    <button className="w-full py-3 bg-slate-700 text-white font-bold rounded-none hover:bg-yellow-500 hover:text-slate-900 transition-colors duration-300">
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Project Details */}
          <div className="bg-slate-800 rounded-3xl p-8 md:p-12 border border-yellow-500/30">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-4xl font-black text-white mb-4">{projects[selectedProject].name}</h3>
                <p className="text-xl text-slate-400 mb-6">{projects[selectedProject].type} in {projects[selectedProject].location}</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {projects[selectedProject].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-300">
                      <span className="text-yellow-400">✓</span>
                      <span className="font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-3xl font-black text-yellow-400 mb-6">{projects[selectedProject].price}</div>
                <div className="flex gap-4">
                  <button className="flex-1 py-4 bg-yellow-500 text-slate-900 font-bold rounded-none hover:bg-yellow-400 transition-colors duration-300">
                    SCHEDULE VISIT
                  </button>
                  <button className="flex-1 py-4 border-2 border-yellow-500 text-yellow-400 font-bold rounded-none hover:bg-yellow-500/10 transition-colors duration-300">
                    DOWNLOAD BROCHURE
                  </button>
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-yellow-500 to-amber-600 rounded-3xl flex items-center justify-center text-9xl">
                {projects[selectedProject].image}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Process */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              Our <span className="text-yellow-400">Process</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Transparent and straightforward property dealings from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-slate-900 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500 transition-all duration-300"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-4">{service.description}</p>
                <p className="text-sm text-yellow-400 font-semibold italic">{service.process}</p>
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400 font-black group-hover:bg-yellow-500 group-hover:text-slate-900 transition-colors duration-300">
                  {idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20 px-6 bg-yellow-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-slate-900">
              Market Insights
            </h2>
            <p className="text-xl text-slate-800 font-semibold">
              Expert analysis to help you make intelligent investment decisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {marketInsights.map((insight, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className={`text-5xl font-black mb-4 ${insight.color}`}>{insight.trend}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{insight.title}</h3>
                <p className="text-slate-600 leading-relaxed">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-black mb-6 text-white leading-tight">
            Your Dream Property
            <br />
            <span className="text-yellow-400">Awaits</span>
          </h2>
          <p className="text-2xl text-slate-400 mb-12 max-w-3xl mx-auto">
            Connect with our real estate professionals for a one-on-one consultation
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center mb-12">
            <button className="group relative px-12 py-6 bg-yellow-500 text-slate-900 font-black text-xl rounded-none overflow-hidden shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300">
              <span className="relative z-10">FIND YOUR PROPERTY</span>
              <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>
            <button className="px-12 py-6 border-2 border-yellow-500 text-yellow-400 font-black text-xl rounded-none hover:bg-yellow-500/10 transition-all duration-300">
              CONTACT US NOW
            </button>
          </div>

          <div className="flex flex-wrap gap-8 justify-center text-slate-400">
            <div className="flex items-center gap-3">
              <span className="text-3xl">📞</span>
              <div className="text-left">
                <div className="text-sm text-slate-500">Call Us</div>
                <div className="font-bold text-xl text-yellow-400">+92 XXX XXX XXXX</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">📧</span>
              <div className="text-left">
                <div className="text-sm text-slate-500">Email Us</div>
                <div className="font-bold text-xl text-yellow-400">info@fastrealestate.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">📍</span>
              <div className="text-left">
                <div className="text-sm text-slate-500">Visit Office</div>
                <div className="font-bold text-xl text-yellow-400">Islamabad, Pakistan</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
