'use client';

import React, { useState, useEffect } from 'react';

export default function PrintingPackagingPage() {
  const [activeCategory, setActiveCategory] = useState('printing');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const printingServices = [
    {
      title: 'Offset Printing',
      description: 'High-volume printing with exceptional consistency and color accuracy',
      features: ['Bulk Production', 'Cost-Effective', 'Premium Quality', 'Pantone Matching'],
      icon: '🖨️'
    },
    {
      title: 'Digital Printing',
      description: 'Fast turnaround for short runs with vibrant, precise results',
      features: ['Quick Delivery', 'Variable Data', 'Photo Quality', 'No Setup Cost'],
      icon: '⚡'
    },
    {
      title: 'Screen Printing',
      description: 'Durable prints perfect for textiles and promotional items',
      features: ['Long-lasting', 'Vibrant Colors', 'Versatile Materials', 'Bulk Friendly'],
      icon: '🎨'
    }
  ];

  const packagingServices = [
    {
      title: 'Custom Boxes',
      description: 'Rigid boxes, folding cartons, and product-specific packaging',
      image: '📦'
    },
    {
      title: 'Labels & Stickers',
      description: 'Waterproof, die-cut, metallic and clear labels for brand identity',
      image: '🏷️'
    },
    {
      title: 'Luxury Packaging',
      description: 'Premium materials with embossing, foiling, and custom finishes',
      image: '💎'
    },
    {
      title: 'Eco-Friendly Options',
      description: 'Sustainable, biodegradable and recyclable packaging solutions',
      image: '🌱'
    }
  ];

  const finishingOptions = [
    'Embossing', 'Foil Stamping', 'Spot UV', 'Die Cutting',
    'Matte Lamination', 'Gloss Lamination', 'Soft Touch', 'Window Patching'
  ];

  const industries = [
    { name: 'Food & Beverage', icon: '🍕', color: 'from-orange-500 to-red-500' },
    { name: 'Cosmetics & Beauty', icon: '💄', color: 'from-pink-500 to-purple-500' },
    { name: 'Pharmaceuticals', icon: '💊', color: 'from-blue-500 to-cyan-500' },
    { name: 'Retail & Fashion', icon: '👗', color: 'from-yellow-500 to-amber-500' },
    { name: 'Electronics', icon: '📱', color: 'from-gray-500 to-slate-600' },
    { name: 'Corporate Gifts', icon: '🎁', color: 'from-green-500 to-emerald-500' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
    
      {/* Hero Section - Magazine Style */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1 bg-yellow-100 text-yellow-800 font-bold text-sm uppercase tracking-wider">
                Est. Islamabad
              </div>
              <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Where <span className="text-yellow-500 italic">Precision</span>
                <br />Meets
                <br /><span className="text-yellow-500 italic">Creativity</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At Print Fast, we believe great ideas deserve great prints. From concept to completion, 
                we bring your vision to life with state-of-the-art printing technology and unmatched 
                attention to detail.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Explore Services
                </button>
                <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-bold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-yellow-400 to-amber-500 p-1">
                <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-9xl mb-4">🎨</div>
                    <div className="text-3xl font-black text-gray-900">Quality</div>
                    <div className="text-3xl font-black text-yellow-500">Innovation</div>
                    <div className="text-3xl font-black text-gray-900">Speed</div>
                  </div>
                </div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-white p-6 rounded-2xl shadow-2xl">
                <div className="text-4xl font-black">15K+</div>
                <div className="text-sm font-semibold">Projects Completed</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-gray-900 text-white p-6 rounded-2xl shadow-2xl">
                <div className="text-4xl font-black">98%</div>
                <div className="text-sm font-semibold">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-30 -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-30 -z-10" />
      </section>

      {/* Our Promise Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              Our <span className="text-yellow-500">Promise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality, sustainability, and impact drive everything we create
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality Assurance',
                description: 'Every product undergoes rigorous quality control. From pre-press to finishing, we ensure flawless results that exceed expectations.',
                icon: '✓',
                color: 'bg-green-500'
              },
              {
                title: 'Speed & Reliability',
                description: 'True to our name, Print Fast delivers exceptional turnaround times without compromising quality. Your deadlines are our priority.',
                icon: '⚡',
                color: 'bg-yellow-500'
              },
              {
                title: 'Eco-Conscious',
                description: 'We use sustainable materials and eco-friendly inks, reducing environmental impact while maintaining premium print quality.',
                icon: '🌱',
                color: 'bg-emerald-500'
              }
            ].map((promise, idx) => (
              <div 
                key={idx}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-transparent hover:border-yellow-500"
              >
                <div className={`w-16 h-16 ${promise.color} rounded-full flex items-center justify-center text-3xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {promise.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{promise.title}</h3>
                <p className="text-gray-600 leading-relaxed">{promise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-20 px-6" id="services">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-12 text-center">
            Our <span className="text-yellow-500">Services</span>
          </h2>

          {/* Category Toggle */}
          <div className="flex justify-center gap-4 mb-16">
            <button
              onClick={() => setActiveCategory('printing')}
              className={`px-8 py-4 font-bold text-lg rounded-full transition-all duration-300 ${
                activeCategory === 'printing'
                  ? 'bg-yellow-500 text-white shadow-lg scale-110'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Printing Services
            </button>
            <button
              onClick={() => setActiveCategory('packaging')}
              className={`px-8 py-4 font-bold text-lg rounded-full transition-all duration-300 ${
                activeCategory === 'packaging'
                  ? 'bg-yellow-500 text-white shadow-lg scale-110'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Packaging Solutions
            </button>
          </div>

          {/* Printing Services */}
          {activeCategory === 'printing' && (
            <div className="grid md:grid-cols-3 gap-8">
              {printingServices.map((service, idx) => (
                <div 
                  key={idx}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-yellow-500 transition-all duration-300 hover:shadow-xl group"
                >
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Packaging Services */}
          {activeCategory === 'packaging' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packagingServices.map((service, idx) => (
                <div 
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-500 p-1"
                >
                  <div className="bg-white rounded-2xl p-6 h-full transition-all duration-300 group-hover:bg-yellow-50">
                    <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                      {service.image}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Premium Finishing Options */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              Premium <span className="text-yellow-500">Finishing</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Elevate your prints with our exclusive finishing techniques
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {finishingOptions.map((option, idx) => (
              <div
                key={idx}
                className="group relative p-6 bg-gray-800 rounded-xl border-2 border-gray-700 hover:border-yellow-500 transition-all duration-300 text-center cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-amber-500 transform scale-0 group-hover:scale-100 transition-transform duration-300 opacity-10" />
                <div className="relative z-10 font-bold text-lg">{option}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              Industries We <span className="text-yellow-500">Serve</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, idx) => (
              <div
                key={idx}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} transition-transform duration-500 group-hover:scale-110`} />
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 text-center text-white">
                  <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <div className="font-bold text-sm">{industry.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Process */}
      <section className="py-20 px-6 bg-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              Quality <span className="text-yellow-500">Assurance</span>
            </h2>
            <p className="text-xl text-gray-600">
              Our rigorous process ensures perfection in every print
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 'Design Consultation', icon: '💬', desc: 'Converting thoughts into layouts' },
              { step: 'Pre-Press & Proofing', icon: '🔍', desc: 'Ensuring color, size, and alignment perfection' },
              { step: 'Production', icon: '⚙️', desc: 'Skilled operators on latest equipment' },
              { step: 'Finishing', icon: '✨', desc: 'Precision and creativity in final touches' }
            ].map((phase, idx) => (
              <div key={idx} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-yellow-500 rounded-full flex items-center justify-center text-4xl transform hover:rotate-12 transition-transform duration-300 shadow-lg">
                  {phase.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{phase.step}</h3>
                <p className="text-gray-600 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-20 px-6" id="portfolio">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              Our <span className="text-yellow-500">Work</span>
            </h2>
            <p className="text-xl text-gray-600">
              Excellence in every project we deliver
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Luxury Brand Packaging', type: 'Cosmetics', image: '💄' },
              { title: 'Corporate Stationery', type: 'Business', image: '📄' },
              { title: 'Product Labels', type: 'Food & Beverage', image: '🏷️' },
              { title: 'Marketing Collateral', type: 'Advertising', image: '📰' },
              { title: 'Custom Invitations', type: 'Events', image: '💌' },
              { title: 'Book Publishing', type: 'Publishing', image: '📚' }
            ].map((project, idx) => (
              <div
                key={idx}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center text-8xl group-hover:scale-125 transition-transform duration-500">
                  {project.image}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-sm font-semibold text-yellow-500 mb-1">{project.type}</div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 text-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-black mb-6">
            Great Ideas Deserve
            <br />
            <span className="italic">Great Prints</span>
          </h2>
          <p className="text-2xl mb-10 font-semibold">
            Let's bring your vision to life with precision and speed
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-10 py-5 bg-gray-900 text-white font-bold text-lg rounded-full hover:bg-black transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Request Custom Quote
            </button>
            <button className="px-10 py-5 bg-white text-gray-900 font-bold text-lg rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              +92 XXX XXX XXXX
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
