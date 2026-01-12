import React from 'react';
import Link from 'next/link';
import { Code, Megaphone, Printer, GraduationCap, Plane, FileText, ShoppingCart, Building, Hotel, ArrowRight } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      icon: Code,
      title: "IT Solutions & Digital Tech",
      description: "Custom software, web development, and digital transformation solutions",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      link: "/services/it-solution"
    },
    {
      icon: Megaphone,
      title: "Marketing & Advertising",
      description: "Brand strategy, social media, and performance marketing campaigns",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      link: "/services/marketing"
    },
    {
      icon: Printer,
      title: "Printing & Packaging",
      description: "High-quality printing, custom packaging, and eco-friendly solutions",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      link: "/services/printing"
    },
    {
      icon: GraduationCap,
      title: "Soft Skills & Education",
      description: "IELTS training, personality development, and study abroad guidance",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      link: "/services/education"
    },
    {
      icon: Plane,
      title: "Travel Agency & Ticketing",
      description: "Flight bookings, visa assistance, and comprehensive tour packages",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      link: "/services/travel"
    },
    {
      icon: FileText,
      title: "Consultant & Travel Advisory",
      description: "Visa consultancy, immigration support, and legal advisory services",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      link: "/services/consultancy"
    },
    {
      icon: ShoppingCart,
      title: "Online Store (Dacor Dice)",
      description: "Quality lifestyle products with fast delivery and secure payments",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      link: "/services/online-store"
    },
    {
      icon: Building,
      title: "Real Estate & Builders",
      description: "Modern construction, property consultancy, and investment advisory",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      link: "/services/real-estate"
    },
    {
      icon: Hotel,
      title: "Hospitality & Tourism App",
      description: "Smart hotel bookings, tour packages, and travel companion app",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
      link: "/services/hospitality"
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100 via-purple-50 to-transparent rounded-full filter blur-3xl opacity-40" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-pink-100 via-orange-50 to-transparent rounded-full filter blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
            <span className="text-blue-700 text-sm font-semibold uppercase tracking-wide">Our Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Complete
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Multi-Industry Solutions
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 leading-relaxed">
            Nine specialized divisions working together to deliver comprehensive, innovative solutions across every industry sector.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href={service.link}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-transparent overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Decorative Corner */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500`} />

                {/* Content */}
                <div className="relative space-y-4">
                  {/* Icon Container */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 text-sm font-bold group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-500 group-hover:text-white transition-all duration-300">
                  {index + 1}
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 rounded-2xl p-12 text-center shadow-2xl relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" />
          </div>

          <div className="relative space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold text-white">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our team specializes in custom solutions. Let's discuss how we can help your business grow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-slate-100 transition-all duration-300 hover:shadow-xl hover:scale-105">
                Schedule a Consultation
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                View All Services
              </button>
            </div>
          </div>
        </div>

        {/* Featured Services Highlight */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-3 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="font-bold text-slate-900">Fast Delivery</h4>
            <p className="text-sm text-slate-600">Quick turnaround on all projects without compromising quality</p>
          </div>
          <div className="text-center space-y-3 p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="font-bold text-slate-900">Integrated Solutions</h4>
            <p className="text-sm text-slate-600">Seamless collaboration across all divisions for unified results</p>
          </div>
          <div className="text-center space-y-3 p-6 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">💎</span>
            </div>
            <h4 className="font-bold text-slate-900">Premium Quality</h4>
            <p className="text-sm text-slate-600">International standards maintained across every service</p>
          </div>
        </div>
      </div>
    </section>
  );
}
