import React from 'react';
import { Target, Users, DollarSign, Zap, Clock, Award, TrendingUp, Shield } from 'lucide-react';

export default function WhyChooseFAST() {
  const benefits = [
    {
      icon: Target,
      title: "360° Multi-Industry Solutions",
      description: "Get everything under one roof—from IT and marketing to real estate and education. Our integrated ecosystem ensures consistency, efficiency, and seamless collaboration across all sectors.",
      stat: "9+ Divisions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Expert Industry-Focused Teams",
      description: "Work with seasoned professionals who bring decades of experience, cutting-edge innovation, and strategic problem-solving to every project from concept to completion.",
      stat: "500+ Experts",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective & Measurable Results",
      description: "Maximize ROI with our efficient project management and strategic pricing. Every solution is built around measurable KPIs so you can track real growth in real-time.",
      stat: "30% Cost Savings",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Cutting-Edge Technology & Innovation",
      description: "Stay ahead with AI-driven insights, automation, and digital transformation solutions. We combine technical prowess with creative flair to deliver future-proof results.",
      stat: "Latest Tech",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Clock,
      title: "On-Time Delivery Commitment",
      description: "Meet your deadlines with confidence. Our superior project management systems and dedicated teams ensure timely delivery without any compromise on quality.",
      stat: "98% On-Time",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Long-Term Partnership Approach",
      description: "Build lasting relationships with continuous support, regular consultation, and adaptive strategies that keep you competitive as markets evolve.",
      stat: "85% Retention",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
            <Award className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 text-sm font-semibold uppercase tracking-wide">Why Choose FAST</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            The
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              FAST Advantage
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 leading-relaxed">
            More than just a service provider—we're your strategic partner committed to your success through innovation, integrity, and measurable impact.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-transparent overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Decorative Corner Element */}
                <div className={`absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br ${benefit.color} opacity-10 rounded-full transform group-hover:scale-150 transition-transform duration-700`} />

                <div className="relative">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {benefit.title}
                        </h3>
                        <div className={`flex-shrink-0 px-3 py-1 rounded-full bg-gradient-to-r ${benefit.color} text-white text-sm font-semibold shadow-lg`}>
                          {benefit.stat}
                        </div>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="text-slate-300 text-lg">
                Our numbers speak for themselves—proven results across every sector
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-2 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-4xl font-bold text-white">200%</div>
                <div className="text-slate-300">Average Growth Rate</div>
              </div>
              <div className="text-center space-y-2 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <Award className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-4xl font-bold text-white">15+</div>
                <div className="text-slate-300">Years Excellence</div>
              </div>
              <div className="text-center space-y-2 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <Users className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                <div className="text-4xl font-bold text-white">1000+</div>
                <div className="text-slate-300">Happy Clients</div>
              </div>
              <div className="text-center space-y-2 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-4xl font-bold text-white">100%</div>
                <div className="text-slate-300">Quality Assured</div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-slate-100 transition-all duration-300 hover:shadow-xl hover:scale-105">
                Start Your Success Story Today
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Preview */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-slate-700 italic mb-4">
              "FAST Group transformed our digital presence completely. Their integrated approach saved us time and delivered exceptional results."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full" />
              <div>
                <div className="font-semibold text-slate-900">Sarah Ahmed</div>
                <div className="text-sm text-slate-600">CEO, Tech Innovations</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-slate-700 italic mb-4">
              "The professionalism and expertise of FAST Group is unmatched. They're not just vendors, they're true partners in growth."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full" />
              <div>
                <div className="font-semibold text-slate-900">Michael Khan</div>
                <div className="text-sm text-slate-600">Director, Global Ventures</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-slate-700 italic mb-4">
              "From marketing to real estate, FAST Group's multi-industry expertise has been invaluable for our expansion strategy."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full" />
              <div>
                <div className="font-semibold text-slate-900">Ayesha Malik</div>
                <div className="text-sm text-slate-600">Founder, Lifestyle Co.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
