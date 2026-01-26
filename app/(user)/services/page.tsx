import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  TrendingUp, 
  Printer, 
  GraduationCap, 
  Plane, 
  FileText, 
  ShoppingBag, 
  Building2, 
  Hotel,
  Sparkles,
  Target,
  Users
} from 'lucide-react';

export default function ServicesPage() {

  const services = [
    {
      icon: Code,
      title: "IT Solutions & Digital Tech",
      tagline: "Digital ideas become reality, and at a fast, accurate and meaningful rate.",
      description: "Custom software, web development, and digital transformation solutions",
      color: "from-blue-500 to-cyan-500",
      bgPattern: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      link: "/services/it-solutions"
    },
    {
      icon: TrendingUp,
      title: "Marketing & Advertising",
      tagline: "Where imaginations come to conversion.",
      description: "Brand strategy, social media, and performance marketing campaigns",
      color: "from-purple-500 to-pink-500",
      bgPattern: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop",
      link: "/services/marketing"
    },
    {
      icon: Printer,
      title: "Printing & Packaging",
      tagline: "Your brand needs to be packaged in a way that it speaks more than it reads.",
      description: "High-quality printing, custom packaging, and eco-friendly solutions",
      color: "from-orange-500 to-red-500",
      bgPattern: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&h=600&fit=crop",
      link: "/services/printing"
    },
    {
      icon: GraduationCap,
      title: "Soft Skills & Education",
      tagline: "Boundless education, skillful skills.",
      description: "IELTS training, personality development, and study abroad guidance",
      color: "from-green-500 to-emerald-500",
      bgPattern: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      link: "/services/education"
    },
    {
      icon: Plane,
      title: "Travel Agency & Ticketing",
      tagline: "Your journey begins with us.",
      description: "Flight bookings, visa assistance, and comprehensive tour packages",
      color: "from-teal-500 to-cyan-500",
      bgPattern: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
      link: "/services/travel"
    },
    {
      icon: FileText,
      title: "Consultant & Travel Advisory",
      tagline: "We consult. We guide. We will take you there.",
      description: "Visa consultancy, immigration support, and legal advisory services",
      color: "from-indigo-500 to-blue-500",
      bgPattern: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      link: "/services/consultancy"
    },
    {
      icon: ShoppingBag,
      title: "Online Store (Dacor Dice)",
      tagline: "Shop smart. Live fast.",
      description: "Quality lifestyle products with fast delivery and secure payments",
      color: "from-pink-500 to-rose-500",
      bgPattern: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
      link: "/services/online-store"
    },
    {
      icon: Building2,
      title: "Real Estate & Builders",
      tagline: "Creating trust, project after project.",
      description: "Modern construction, property consultancy, and investment advisory",
      color: "from-amber-500 to-orange-500",
      bgPattern: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      link: "/services/real-estate"
    },
    {
      icon: Hotel,
      title: "Hospitality & Tourism App",
      tagline: "Where comfort meets convenience.",
      description: "Smart hotel bookings, tour packages, and travel companion app",
      color: "from-violet-500 to-purple-500",
      bgPattern: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      link: "/services/hospitality"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop" 
            alt="Business" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/90"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center space-y-6 max-w-4xl">
            <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Fast Group of Companies
            </h1>
            <p className="text-2xl md:text-3xl text-yellow-400 font-semibold">
              Innovating Tomorrow, Today
            </p>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
              An innovative organization motivated by innovation, integrity, and impact across technology, real estate, marketing, education, travel and e-commerce.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Who We Are</h2>
            <div className="space-y-4 text-slate-600">
              <p className="text-lg leading-relaxed">
                A Sole Proprietorship uniting various ventures with one visionary leader. All our sub-companies share the mission to empower people, transform businesses and create a sustainable future.
              </p>
              <p className="text-lg leading-relaxed">
                We believe in progress, innovation, and service. Committed to excellence and customer satisfaction in local and international markets.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Core Identity */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Target className="w-12 h-12 mx-auto mb-6 text-blue-600" />
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Power of One Vision</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Every project starts with a vision to unite efficiency, creativity, and reliability. We blend contemporary tactics and practical skill to create brands, build companies, and enhance lives.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Users className="w-12 h-12 mx-auto mb-6 text-slate-700" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Our Sub-Companies</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Each branch is a guarantee of quality, confidence and development.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <a 
                key={index}
                href={service.link}
                className="block"
              >
                <Card 
                  className="group border-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white cursor-pointer h-full"
                >
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.bgPattern} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-85`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border-2 border-white/30">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl text-slate-900 leading-tight">
                      {service.title}
                    </CardTitle>
                    <Badge className={`bg-gradient-to-r ${service.color} text-white border-none text-xs mt-2 w-fit`}>
                      {service.tagline}
                    </Badge>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </div>

      {/* Vision, Mission, Values */}
      <div className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=800&fit=crop" 
            alt="Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white shadow-xl">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-200 leading-relaxed">
                  To become a multi-industry leader through innovation, integrity, and excellence - providing solutions for social, economic, and technological development.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white shadow-xl">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-200 leading-relaxed">
                  To develop sustainable business ecosystems through sophisticated technology, customer-focused services, and valuable products.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white shadow-xl">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-200">
                  <li>• <span className="font-semibold">Integrity:</span> Transparent and honest</li>
                  <li>• <span className="font-semibold">Innovation:</span> Open to change</li>
                  <li>• <span className="font-semibold">Dedication:</span> Delivering promises</li>
                  <li>• <span className="font-semibold">Customer Focus:</span> You at the center</li>
                  <li>• <span className="font-semibold">Growth:</span> People, partners, planet</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <div className="space-y-6">
          <p className="text-xl text-slate-700 leading-relaxed">
            Our sub-companies share a common vision of a smarter, faster and better tomorrow. We are here to serve you with greatness and enthusiasm.
          </p>
          <div className="pt-4">
            <p className="text-3xl md:text-4xl font-bold text-slate-900">
              Fast Group of Companies
            </p>
            <p className="text-xl text-slate-600 mt-3">
              Moving Innovation. Delivering Trust. Defining the Future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
