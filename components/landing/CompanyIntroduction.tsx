import React from 'react';
import { Award, TrendingUp, Users, Globe } from 'lucide-react';

export default function CompanyIntroduction() {
  const achievements = [
    {
      icon: Award,
      value: "15+",
      label: "Years of Excellence",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      value: "200%",
      label: "Growth Rate",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      value: "500+",
      label: "Team Members",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      value: "20+",
      label: "Countries Served",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                    alt="Team Collaboration"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white font-semibold">
                    Innovation Team
                  </div>
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                    alt="Modern Office"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white font-semibold">
                    Global Presence
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-48 rounded-2xl overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                    alt="Strategy Meeting"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white font-semibold">
                    Strategic Growth
                  </div>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                    alt="Technology Innovation"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white font-semibold">
                    Tech Excellence
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                  #1
                </div>
                <div>
                  <div className="font-bold text-slate-900">Industry Leader</div>
                  <div className="text-sm text-slate-600">Multi-sector innovation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-blue-700 text-sm font-semibold uppercase tracking-wide">About FAST Group</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                A History of
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Innovation & Integrity
                </span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                FAST Group of Companies stands among Pakistan's most innovative and diverse business enterprises. Founded on uncompromising integrity, professionalism, and advancement, we've evolved from modest origins into a powerhouse delivering excellence across multiple industries.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our philosophy is simple yet powerful: <strong className="text-slate-900">Faster, Smarter, Stronger.</strong> We don't just offer services—we create ecosystems where every solution helps our clients move with greater speed, intelligence, and impact. From IT solutions to real estate, education to e-commerce, each division works toward sustainable solutions that exceed expectations.
              </p>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-transparent hover:-translate-y-1"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                    <div className="relative space-y-2">
                      <Icon className={`w-8 h-8 bg-gradient-to-br ${item.color} bg-clip-text text-transparent`} />
                      <div className="text-3xl font-bold text-slate-900">{item.value}</div>
                      <div className="text-sm text-slate-600">{item.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎯</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
                  <p className="text-slate-700 leading-relaxed">
                    To generate long-term value through customer-centric innovation, operational excellence, and ethical leadership—helping clients transform challenges into opportunities and ambitions into achievements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
