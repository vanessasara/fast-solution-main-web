import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  const services = [
    { name: 'IT Solutions & Digital Tech', href: '/services/it-solutions-digital-tech' },
    { name: 'Marketing & Advertising', href: '/services/marketing-advertising' },
    { name: 'Printing & Packaging', href: '/services/printing-packaging' },
    { name: 'Hospitality & Tourism', href: '/services/hospitality-tourism-app' },
    { name: 'Soft Skills & Education', href: '/services/soft-skills-foreign-education' },
    { name: 'Travel & Ticketing', href: '/services/travel-agency-ticketing' },
    { name: 'Consultant & Advisory', href: '/services/consultant-travel-advisory' },
    { name: 'Real Estate', href: '/services/real-estate' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-[#1E293B] text-white relative">
      {/* Decorative wave at top */}
      <div className="absolute top-0 left-0 right-0 h-8 -mt-8">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 48h1440V0c-240 48-480 48-720 24C480 0 240 0 0 24v24z" fill="#1E293B"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Fast Solutions</h4>
            <p className="text-gray-400 mb-6">
              Your trusted multi-service partner delivering excellence across IT, marketing, hospitality, education, travel, and real estate.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F97316] transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-[#F97316] transition-colors">Home</a></li>
              <li><a href="/about-us" className="text-gray-400 hover:text-[#F97316] transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-[#F97316] transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#F97316] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#F97316] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 5).map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="text-gray-400 hover:text-[#F97316] transition-colors text-sm">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe to get the latest updates and offers.
            </p>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#F97316]"
                />
              </div>
              <Button className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <p className="text-xs text-gray-500">No spam, unsubscribe anytime</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Fast Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-[#F97316] transition-colors">Sitemap</a>
            <a href="#" className="text-gray-400 hover:text-[#F97316] transition-colors">Cookies</a>
            <a href="#" className="text-gray-400 hover:text-[#F97316] transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
