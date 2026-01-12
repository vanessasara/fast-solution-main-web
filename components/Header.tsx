'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, Code, Megaphone, Printer, GraduationCap, Plane, MapPin, ShoppingBag, Building, Hotel } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const services = [
  {
    title: "IT Solutions & Digital Tech",
    icon: Code,
    link: "/services/it-solution"
  },
  {
    title: "Marketing & Advertising",
    icon: Megaphone,
    link: "/services/marketing"
  },
  {
    title: "Printing & Packaging",
    icon: Printer,
    link: "/services/printing"
  },
  {
    title: "Hospitality & Tourism App",
    icon: Hotel,
    link: "/services/hospitality"
  },
  {
    title: "Soft Skills & Foreign Education",
    icon: GraduationCap,
    link: "/services/education"
  },
  {
    title: "Travel Agency & Ticketing",
    icon: Plane,
    link: "/services/travel"
  },
  {
    title: "Consultant & Travel Advisory",
    icon: MapPin,
    link: "/services/consultancy"
  },
  {
    title: "Online Store (Dacor Dice)",
    icon: ShoppingBag,
    link: "/services/online-store"
  },
  {
    title: "Real Estate & Builders",
    icon: Building,
    link: "/services/real-estate"
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white border-b transition-shadow duration-300 ${
      scrolled ? 'shadow-md' : 'shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <div className="w-28 h-16 rounded-lg flex items-center justify-center">
              <img src="/logo.png" alt="Company Logo" className="w-full h-full object-contain" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="/about-us" 
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
            >
              About Us
            </a>
            
            {/* Services Dropdown - Desktop */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-slate-700 hover:text-slate-900 font-medium transition-colors outline-none">
                Services
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80" align="start">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <DropdownMenuItem key={index} asChild>
                      <a
                        href={service.link}
                        className="flex items-center gap-3 px-3 py-3 cursor-pointer"
                      >
                        <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-slate-700" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">{service.title}</span>
                      </a>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>

            <a 
              href="/contact" 
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
            >
              Contact
            </a>

            <a 
              href="/login" 
              className="px-6 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Menu - Sheet */}
          <div className="md:hidden">
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] sm:w-[400px] px-0">
                <SheetHeader className="px-6 pb-4">
                  <SheetTitle className="text-left text-xl">Menu</SheetTitle>
                </SheetHeader>
                
                <div className="flex flex-col h-full">
                  {/* Navigation Links */}
                  <div className="flex-1 overflow-y-auto px-6">
                    <div className="space-y-1">
                      <a 
                        href="/about-us" 
                        className="block py-3 text-base font-medium text-slate-900 hover:text-slate-600 transition-colors"
                        onClick={() => setSheetOpen(false)}
                      >
                        About Us
                      </a>
                      
                      <Separator className="my-2" />
                      
                      {/* Services Section */}
                      <div className="py-2">
                        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                          Our Services
                        </h3>
                        <div className="space-y-1">
                          {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                              <a
                                key={index}
                                href={service.link}
                                className="flex items-center gap-3 py-3 px-3 -mx-3 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                                onClick={() => setSheetOpen(false)}
                              >
                                <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <Icon className="w-5 h-5 text-slate-600" />
                                </div>
                                <span className="text-sm font-medium">{service.title}</span>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                      
                      <Separator className="my-2" />
                      
                      <a 
                        href="/contact" 
                        className="block py-3 text-base font-medium text-slate-900 hover:text-slate-600 transition-colors"
                        onClick={() => setSheetOpen(false)}
                      >
                        Contact
                      </a>
                    </div>
                  </div>

                  {/* Bottom CTA */}
                  <div className="p-6 border-t bg-slate-50">
                    <a 
                      href="/login" 
                      className="block w-full px-6 py-3 bg-slate-900 text-white text-center rounded-lg hover:bg-slate-800 transition-colors font-medium"
                      onClick={() => setSheetOpen(false)}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
