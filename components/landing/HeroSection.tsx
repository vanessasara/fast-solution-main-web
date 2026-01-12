'use client'
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          alt="Technology Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/90 to-slate-900/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-blue-200 text-sm font-medium">Pakistan's Leading Multi-Industry Powerhouse</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Empowering Industries.
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Building Futures.
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                FAST Group delivers innovative solutions across IT, Marketing, Real Estate, Education, Travel, and beyond—transforming businesses with speed, intelligence, and excellence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="space-y-1">
                <div className="text-3xl lg:text-4xl font-bold text-white">9+</div>
                <div className="text-sm text-slate-400">Industry Divisions</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl lg:text-4xl font-bold text-white">1000+</div>
                <div className="text-sm text-slate-400">Projects Delivered</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl lg:text-4xl font-bold text-white">50+</div>
                <div className="text-sm text-slate-400">Global Partners</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#services"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Play className="w-5 h-5" />
                Watch Video
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="text-slate-400 text-sm">Trusted by leading brands</div>
              <div className="flex gap-4 opacity-60">
                <div className="w-20 h-8 bg-white/10 rounded backdrop-blur-sm" />
                <div className="w-20 h-8 bg-white/10 rounded backdrop-blur-sm" />
                <div className="w-20 h-8 bg-white/10 rounded backdrop-blur-sm" />
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Floating Cards */}
              <div className="absolute -top-10 -right-10 w-64 h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl rounded-2xl border border-white/10 p-6 animate-float">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-white font-semibold">Digital Innovation</h3>
                  <p className="text-slate-300 text-sm">Cutting-edge IT solutions for modern businesses</p>
                </div>
              </div>

              <div className="absolute top-32 -left-10 w-64 h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl border border-white/10 p-6 animate-float" style={{animationDelay: '1s'}}>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h3 className="text-white font-semibold">Global Reach</h3>
                  <p className="text-slate-300 text-sm">International partnerships across continents</p>
                </div>
              </div>

              <div className="absolute bottom-10 right-10 w-64 h-48 bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-xl rounded-2xl border border-white/10 p-6 animate-float" style={{animationDelay: '2s'}}>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-white font-semibold">Faster, Smarter</h3>
                  <p className="text-slate-300 text-sm">Solutions that drive measurable results</p>
                </div>
              </div>

              {/* Center Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
