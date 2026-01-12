import React from 'react';
import { Globe, MapPin, Users, TrendingUp, CheckCircle } from 'lucide-react';

export default function GlobalReachSection() {
  const regions = [
    {
      name: "Middle East",
      countries: "UAE, Saudi Arabia, Qatar",
      projects: "150+",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Europe",
      countries: "UK, Germany, Turkey",
      projects: "200+",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "North America",
      countries: "USA, Canada",
      projects: "100+",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Asia Pacific",
      countries: "Malaysia, Singapore, Australia",
      projects: "180+",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const partnerships = [
    "International Technology Suppliers",
    "Global Marketing & Branding Agencies",
    "Foreign Educational Institutions",
    "International Travel & Tourism Boards",
    "Multinational Printing & Packaging Networks",
    "Global Real Estate & Construction Firms"
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
        </div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Globe className="w-4 h-4 text-blue-400" />
            <span className="text-blue-200 text-sm font-semibold uppercase tracking-wide">Global Presence</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Connecting
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Continents Through Innovation
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 leading-relaxed">
            From Pakistan to the world—our strategic partnerships and international collaborations bring global excellence to local markets and Pakistani innovation to international stages.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Map Visual */}
          <div className="relative">
            {/* World Map Representation */}
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&q=80"
                alt="Global Network"
                className="w-full h-96 object-cover rounded-2xl opacity-80"
              />
              
              {/* Overlay Stats */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <Globe className="w-16 h-16 text-blue-400 mx-auto animate-pulse" />
                  <div className="text-5xl font-bold text-white">20+</div>
                  <div className="text-xl text-slate-300">Countries Worldwide</div>
                </div>
              </div>

              {/* Floating Region Badges */}
              <div className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                🌍 Europe
              </div>
              <div className="absolute top-4 right-4 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}>
                🌏 Asia Pacific
              </div>
              <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                🌍 Middle East
              </div>
              <div className="absolute bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce" style={{animationDelay: '1.5s'}}>
                🌎 Americas
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <TrendingUp className="w-8 h-8 text-green-400 mb-2" />
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-slate-300 text-sm">International Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Users className="w-8 h-8 text-blue-400 mb-2" />
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-slate-300 text-sm">Global Partners</div>
              </div>
            </div>
          </div>

          {/* Right: Regions & Details */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-400" />
                Our Global Footprint
              </h3>

              <div className="space-y-4">
                {regions.map((region, index) => (
                  <div 
                    key={index}
                    className="group bg-white/5 rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-white/30"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-white">{region.name}</h4>
                      <span className={`px-3 py-1 bg-gradient-to-r ${region.color} text-white text-sm font-semibold rounded-full`}>
                        {region.projects}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm">{region.countries}</p>
                    <div className={`h-1 mt-3 bg-gradient-to-r ${region.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Key Achievement */}
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">ISO Certified Global Operations</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    All our international partnerships comply with ISO standards, ensuring world-class quality and reliability across borders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Partnerships */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Strategic International Partnerships
            </h3>
            <p className="text-slate-300 text-lg">
              Collaborating with industry leaders worldwide to deliver excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerships.map((partnership, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-slate-200">{partnership}</span>
              </div>
            ))}
          </div>

          {/* Bottom Image Banner */}
          <div className="mt-12 grid md:grid-cols-4 gap-4">
            <div className="h-32 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80"
                alt="City 1"
                className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="h-32 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&q=80"
                alt="City 2"
                className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="h-32 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&q=80"
                alt="City 3"
                className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="h-32 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&q=80"
                alt="City 4"
                className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
            <h4 className="text-2xl font-bold text-white mb-4">
              Ready to Go Global?
            </h4>
            <p className="text-slate-300 mb-6 max-w-xl">
              Let's discuss how our international network can help expand your business across borders
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
              Connect With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
