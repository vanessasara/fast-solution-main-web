
import { Building2, Users, Target, Award, CheckCircle, Sparkles, TrendingUp, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-amber-500/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="px-6 py-2 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full text-yellow-300 text-sm font-semibold">
                9 Years of Excellence
              </span>
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
              About Fast Group
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Innovating Tomorrow, Today - Leading Multi-Industry Excellence Since 2016
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: Award, number: '9+', label: 'Years Experience', color: 'from-yellow-400 to-amber-500' },
            { icon: Building2, number: '9', label: 'Business Divisions', color: 'from-amber-500 to-orange-500' },
            { icon: Users, number: '1000+', label: 'Happy Clients', color: 'from-yellow-500 to-amber-600' },
            { icon: Globe, number: '50+', label: 'Team Members', color: 'from-amber-400 to-yellow-500' }
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                <div className={`inline-flex p-4 bg-gradient-to-br ${stat.color} rounded-xl mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Who We Are */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">Our Story</span>
            <h2 className="text-5xl font-bold text-gray-900 mt-6 mb-6">Who We Are</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Welcome to Fast Group of Companies, a company that has earned the trust of business excellence in diversification. With 9 years of proven track record since 2016, we are an innovative, progressive organization motivated by innovation, integrity, and impact.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              We operate in various fields such as technology, real estate, marketing, education, travel, and e-commerce with one objective: to offer solutions that are unmatched in quality and efficiency to the world.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl group-hover:bg-yellow-400/20 transition-all duration-500"></div>
            <div className="relative">
              <Target className="w-16 h-16 text-yellow-400 mb-6" />
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become a multi-industry leader by being innovative, full of integrity, and excellence - by providing effective solutions that help in the social, economic, and technological development.
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl p-12 text-gray-900 overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl group-hover:bg-white/30 transition-all duration-500"></div>
            <div className="relative">
              <Sparkles className="w-16 h-16 text-gray-900 mb-6" />
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-900 text-lg leading-relaxed">
                To develop sustainable business ecosystems through incorporation of sophisticated technology, customer-focused services, and products of value in all areas of operation.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">What Drives Us</span>
            <h2 className="text-5xl font-bold text-gray-900 mt-6 mb-6">Our Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: 'Integrity', desc: 'Transparent and honest in all dealings', icon: CheckCircle },
              { title: 'Innovation', desc: 'Embracing change and creativity', icon: Sparkles },
              { title: 'Dedication', desc: 'Commitment to our promises', icon: Award },
              { title: 'Customer Focus', desc: 'Clients at the heart of everything', icon: Users },
              { title: 'Growth', desc: 'Continuous development and improvement', icon: TrendingUp }
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-yellow-400">
                  <div className="inline-flex p-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Business Divisions */}
        <div>
          <div className="text-center mb-12">
            <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">Our Portfolio</span>
            <h2 className="text-5xl font-bold text-gray-900 mt-6 mb-6">Business Divisions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Fast IT Solutions & Digital Tech', tagline: 'Digital ideas become reality', gradient: 'from-blue-500 to-indigo-600' },
              { name: 'Fast Marketing & Advertising', tagline: 'Where imaginations come to conversion', gradient: 'from-purple-500 to-pink-600' },
              { name: 'Fast Printing & Packaging', tagline: 'Your brand speaks volumes', gradient: 'from-green-500 to-emerald-600' },
              { name: 'Fast Soft Skills & Foreign Education', tagline: 'Boundless education, skillful growth', gradient: 'from-orange-500 to-red-600' },
              { name: 'Fast Travel Agency & Ticketing', tagline: 'Your journey begins with us', gradient: 'from-cyan-500 to-blue-600' },
              { name: 'Fast Consultant & Travel Agency', tagline: 'Expert guidance, seamless journeys', gradient: 'from-teal-500 to-cyan-600' },
              { name: 'Fast Online Stores Dacor Dice', tagline: 'Shop smart. Live fast', gradient: 'from-yellow-500 to-amber-600' },
              { name: 'Fast Real Estate & Builders', tagline: 'Building trust, one project at a time', gradient: 'from-slate-600 to-gray-700' },
              { name: 'Fast Hospitality & Tourism', tagline: 'Where comfort meets convenience', gradient: 'from-rose-500 to-pink-600' }
            ].map((company, idx) => (
              <div key={idx} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${company.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className={`w-12 h-1 bg-gradient-to-r ${company.gradient} mb-6 rounded-full`}></div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg leading-snug">{company.name}</h4>
                  <p className="text-yellow-600 italic text-sm font-medium">{company.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage
