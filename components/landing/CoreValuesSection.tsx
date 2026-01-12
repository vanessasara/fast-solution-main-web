import React from 'react';
import { Shield, Lightbulb, Award, Users, Leaf } from 'lucide-react';

export default function CoreValuesSection() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Building trust through transparency, honesty, and ethical business practices in every interaction.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      iconBg: "bg-blue-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Shaping the future with cutting-edge technology, creative thinking, and forward-looking solutions.",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      iconBg: "bg-purple-500"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering outstanding quality in every detail—from smallest projects to million-dollar ventures.",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      iconBg: "bg-orange-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building valuable partnerships based on mutual trust, respect, and shared success.",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      iconBg: "bg-green-500"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Growing responsibly with eco-friendly practices that benefit society and protect our planet.",
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50",
      iconBg: "bg-teal-500"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
            <span className="text-blue-700 text-sm font-semibold uppercase tracking-wide">Our Core Values</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Built on
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Principles That Matter
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 leading-relaxed">
            Every decision, partnership, and project at FAST Group is guided by our unwavering commitment to these five core values that define who we are.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-transparent hover:-translate-y-2">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.bgColor} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative space-y-4">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed">
                      {value.description}
                    </p>

                    {/* Decorative Line */}
                    <div className={`h-1 w-16 bg-gradient-to-r ${value.color} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                </div>

                {/* Floating Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center text-white font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                  {index + 1}
                </div>
              </div>
            );
          })}

          {/* CTA Card */}
          <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 flex flex-col justify-center items-center text-center text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="space-y-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold">Ready to Partner?</h3>
              <p className="text-white/90 leading-relaxed">
                Join hundreds of businesses who trust FAST Group for innovative, ethical, and results-driven solutions.
              </p>
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-slate-100 transition-colors duration-300 hover:shadow-xl">
                Get Started Today
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-2xl p-8 shadow-2xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">100%</div>
              <div className="text-slate-300">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">24/7</div>
              <div className="text-slate-300">Support Available</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">ISO</div>
              <div className="text-slate-300">Certified Standards</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">0%</div>
              <div className="text-slate-300">Compromise on Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
