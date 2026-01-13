'use client'
import React, { useState } from 'react';
import { Plane, MapPin, Hotel, Shield, FileText, Briefcase, Clock, Phone, Mail, Calendar, Globe, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const TravelAdvisoryBooking = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const visaTypes = [
    { type: "Student Visa", icon: "🎓", countries: "All countries", processing: "4-8 weeks" },
    { type: "Business Visa", icon: "💼", countries: "150+ countries", processing: "2-4 weeks" },
    { type: "Family Visa", icon: "👨‍👩‍👧", countries: "All countries", processing: "6-12 weeks" },
    { type: "Work Permit", icon: "🏢", countries: "50+ countries", processing: "8-16 weeks" }
  ];

  const tourPackages = [
    {
      name: "Europe Grand Tour",
      duration: "14 Days",
      price: "$3,499",
      countries: "France, Italy, Switzerland",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=80",
      highlights: ["Eiffel Tower", "Colosseum", "Swiss Alps"]
    },
    {
      name: "Dubai Luxury Package",
      duration: "7 Days",
      price: "$1,899",
      countries: "UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80",
      highlights: ["Burj Khalifa", "Desert Safari", "Palm Jumeirah"]
    },
    {
      name: "Turkey Explorer",
      duration: "10 Days",
      price: "$2,299",
      countries: "Turkey",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&q=80",
      highlights: ["Istanbul", "Cappadocia", "Antalya"]
    }
  ];

  const countries = [
    { name: "United Kingdom", flag: "🇬🇧", services: "Student, Work, Tourist", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=300&q=80" },
    { name: "Canada", flag: "🇨🇦", services: "Immigration, Study, Work", image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=300&q=80" },
    { name: "USA", flag: "🇺🇸", services: "All Visa Types", image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=300&q=80" },
    { name: "Australia", flag: "🇦🇺", services: "PR, Student, Skilled", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=300&q=80" }
  ];

  // Simple calendar component
  const SimpleCalendar = () => {
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const prevMonth = () => {
      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };
    
    const nextMonth = () => {
      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = selectedDate.getDate() === day && 
                        selectedDate.getMonth() === currentMonth.getMonth() && 
                        selectedDate.getFullYear() === currentMonth.getFullYear();
      days.push(
        <button
          key={day}
          onClick={() => setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))}
          className={`p-2 text-center rounded-lg hover:bg-yellow-100 transition ${
            isSelected ? 'bg-yellow-600 text-white' : 'hover:bg-yellow-50'
          }`}
        >
          {day}
        </button>
      );
    }

    return (
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <button onClick={prevMonth} className="p-2 hover:bg-yellow-100 rounded">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h3 className="font-bold text-lg">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h3>
          <button onClick={nextMonth} className="p-2 hover:bg-yellow-100 rounded">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-sm font-semibold text-gray-600 p-2">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {days}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-yellow-600 to-amber-500 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&q=80" 
            alt="Travel"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Navigate Global Opportunities with Confidence</h1>
            <p className="text-xl mb-8 text-yellow-50">Comprehensive visa consultancy, immigration services, and travel solutions - Your journey to the world starts here</p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition">
                Browse Packages
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Globe className="w-16 h-16 text-yellow-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-800 mb-6">What We Do</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            FAST Travel Advisory is your trusted partner for comprehensive visa and immigration consultancy. We provide end-to-end solutions for study abroad, work permits, family visas, and tourist travel - making global mobility simple and stress-free.
          </p>
        </div>
      </div>

      {/* Quick Booking Calendar */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Schedule Your Consultation</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SimpleCalendar />
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Book Your Appointment</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Select Service</label>
                  <select className="w-full p-3 border-2 border-yellow-200 rounded-lg focus:border-yellow-600 focus:outline-none">
                    <option>Visa Consultation</option>
                    <option>Immigration Advisory</option>
                    <option>Study Abroad Counseling</option>
                    <option>Travel Package Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Time Slot</label>
                  <select className="w-full p-3 border-2 border-yellow-200 rounded-lg focus:border-yellow-600 focus:outline-none">
                    <option>09:00 AM - 10:00 AM</option>
                    <option>10:00 AM - 11:00 AM</option>
                    <option>02:00 PM - 03:00 PM</option>
                    <option>04:00 PM - 05:00 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Name</label>
                  <input type="text" className="w-full p-3 border-2 border-yellow-200 rounded-lg focus:border-yellow-600 focus:outline-none" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Contact Number</label>
                  <input type="tel" className="w-full p-3 border-2 border-yellow-200 rounded-lg focus:border-yellow-600 focus:outline-none" placeholder="+92 XXX XXXXXXX" />
                </div>
                <button className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700 transition">
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visa Services Detailed */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Visa Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {visaTypes.map((visa, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition border-2 border-yellow-200">
              <div className="text-5xl mb-4">{visa.icon}</div>
              <h3 className="text-xl font-bold mb-3">{visa.type}</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-yellow-600" />
                  {visa.countries}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-yellow-600" />
                  {visa.processing}
                </p>
              </div>
              <button className="w-full mt-4 bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Detailed Process */}
        <div className="bg-gradient-to-r from-yellow-100 to-amber-100 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Visa Application Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Initial Consultation", desc: "Free assessment of your case" },
              { step: "2", title: "Document Collection", desc: "Guided preparation of all required documents" },
              { step: "3", title: "Application Filing", desc: "Expert submission and tracking" },
              { step: "4", title: "Interview Prep", desc: "Mock sessions and coaching" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg text-center">
                <div className="bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Immigration Consultancy */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Immigration Consultancy</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80" 
                alt="Immigration"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Complete Documentation Support</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Document Verification</h4>
                    <p className="text-gray-600">Thorough review and authentication of all required documents</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Legal Compliance</h4>
                    <p className="text-gray-600">Ensuring all applications meet international immigration standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Family Immigration</h4>
                    <p className="text-gray-600">Specialized support for spouse, children, and parent visas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Study Abroad Advisory */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Study Abroad Advisory</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
              <div className="relative">
                <img src={country.image} alt={country.name} className="w-full h-48 object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute top-4 left-4 text-5xl">{country.flag}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{country.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{country.services}</p>
                <button className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition">
                  Explore Options
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tour Packages */}
      <div className="bg-gradient-to-r from-yellow-100 to-amber-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Featured Tour Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourPackages.map((pkg, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{pkg.countries}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {pkg.duration}
                    </span>
                    <span className="text-2xl font-bold text-yellow-600">{pkg.price}</span>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold mb-2">Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      {pkg.highlights.map((highlight, i) => (
                        <span key={i} className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Corporate Travel Solutions */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <Briefcase className="w-16 h-16 text-yellow-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Corporate Travel Solutions</h2>
          <p className="text-center text-gray-600 mb-8">Comprehensive business travel management for companies of all sizes</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Plane className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
              <h4 className="font-bold mb-2">Flight Management</h4>
              <p className="text-sm text-gray-600">Optimized booking and itinerary planning</p>
            </div>
            <div className="text-center">
              <Hotel className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
              <h4 className="font-bold mb-2">Accommodation</h4>
              <p className="text-sm text-gray-600">Corporate rates and preferred partners</p>
            </div>
            <div className="text-center">
              <FileText className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
              <h4 className="font-bold mb-2">Travel Reports</h4>
              <p className="text-sm text-gray-600">Detailed expense tracking and analysis</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Success Rate */}
      <div className="bg-gradient-to-r from-yellow-600 to-amber-500 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Success Rate</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <p className="text-yellow-50">Visa Approval Rate</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <p className="text-yellow-50">Successful Cases</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-yellow-50">Countries Covered</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <p className="text-yellow-50">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Client Success Stories */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Sarah Ahmed", service: "Canada PR Visa", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" },
            { name: "Ali Hassan", service: "UK Student Visa", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
            { name: "Ayesha Khan", service: "Australia Work Visa", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" }
          ].map((client, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
              <img src={client.image} alt={client.name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="font-bold text-center mb-2">{client.name}</h3>
              <p className="text-center text-sm text-gray-600 mb-4">{client.service}</p>
              <p className="text-center text-sm text-gray-600 italic">"Professional, efficient, and trustworthy. They made the entire process smooth and stress-free!"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-600 to-amber-500 p-12 rounded-xl text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Global Journey?</h2>
            <p className="text-xl mb-8 text-yellow-50">Schedule your expert consultation today and take the first step towards your dreams</p>
            <div className="flex gap-6 justify-center flex-wrap">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">+92-XXX-XXXXXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">info@fasttravel.com</span>
              </div>
            </div>
            <button className="mt-8 bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition">
              Book Consultation Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelAdvisoryBooking;
