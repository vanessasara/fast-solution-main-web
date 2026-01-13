'use client'
import React, { useState } from 'react';
import { GraduationCap, Globe, Users, BookOpen, Award, CheckCircle, MessageSquare, Target, TrendingUp, Calendar } from 'lucide-react';

const SoftSkillsEducation = () => {
  const [activeTab, setActiveTab] = useState('ielts');

  const successStories = [
    { name: "Ahmed Khan", score: "8.5 IELTS", destination: "UK - Oxford University", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
    { name: "Fatima Ali", score: "8.0 IELTS", destination: "Canada - University of Toronto", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" },
    { name: "Hassan Raza", score: "7.5 IELTS", destination: "USA - MIT", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" }
  ];

  const countries = [
    { name: "United Kingdom", unis: "50+ Universities", flag: "🇬🇧", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=300&q=80" },
    { name: "Canada", unis: "40+ Institutions", flag: "🇨🇦", image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=300&q=80" },
    { name: "United States", unis: "100+ Colleges", flag: "🇺🇸", image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=300&q=80" },
    { name: "Europe", unis: "60+ Universities", flag: "🇪🇺", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=300&q=80" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-yellow-600 to-amber-500 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80" 
            alt="Education"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Empowering Global Achievers</h1>
            <p className="text-xl mb-8 text-yellow-50">Your bridge between ambition and opportunity - IELTS training, soft skills development, and study abroad guidance</p>
            <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition">
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <GraduationCap className="w-16 h-16 text-yellow-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At FAST Group, we are committed to bridging the gap between ambition and opportunity. We empower individuals with world-class IELTS training, essential soft skills development, and comprehensive study abroad guidance to help you achieve your global dreams.
          </p>
        </div>
      </div>

      {/* IELTS & Language Training */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">IELTS & Language Training</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80" 
                alt="IELTS Training"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Expert-Led IELTS Preparation</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Comprehensive Course Structure</h4>
                    <p className="text-gray-600">All four modules covered: Listening, Reading, Writing, and Speaking with proven strategies</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Certified Expert Instructors</h4>
                    <p className="text-gray-600">Learn from trainers with 9.0 band scores and international certifications</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Outstanding Success Rates</h4>
                    <p className="text-gray-600">92% of our students achieve their target band scores on first attempt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-6 rounded-xl">
              <BookOpen className="w-12 h-12 text-yellow-600 mb-4" />
              <h4 className="font-bold text-lg mb-2">Personalized Learning</h4>
              <p className="text-gray-600">Small batch sizes ensuring individual attention</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-6 rounded-xl">
              <Target className="w-12 h-12 text-yellow-600 mb-4" />
              <h4 className="font-bold text-lg mb-2">Mock Tests</h4>
              <p className="text-gray-600">Weekly practice tests under exam conditions</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-6 rounded-xl">
              <Award className="w-12 h-12 text-yellow-600 mb-4" />
              <h4 className="font-bold text-lg mb-2">Study Materials</h4>
              <p className="text-gray-600">Comprehensive books and online resources</p>
            </div>
          </div>
        </div>
      </div>

      {/* Soft Skills Development */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Soft Skills Development</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-yellow-200">
            <MessageSquare className="w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Communication Skills</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-600" />
                Public speaking and presentation skills
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-600" />
                Business communication and email etiquette
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-600" />
                Effective interpersonal communication
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-yellow-200">
            <Users className="w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Leadership Training</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-600" />
                Team management and collaboration
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-600" />
                Decision-making and problem-solving
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-600" />
                Conflict resolution and negotiation
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-yellow-200">
            <TrendingUp className="w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Personality Development</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-600" />
                Confidence building and self-esteem
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-600" />
                Time management and productivity
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-600" />
                Professional grooming and etiquette
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-yellow-200">
            <Target className="w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Career Counseling</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-600" />
                Professional resume and CV writing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-600" />
                Interview preparation and mock sessions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-600" />
                Career path guidance and planning
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Study Abroad Programs */}
      <div className="bg-gradient-to-r from-yellow-100 to-amber-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Study Abroad Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                <img src={country.image} alt={country.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-4xl mb-2">{country.flag}</div>
                  <h3 className="text-xl font-bold mb-2">{country.name}</h3>
                  <p className="text-gray-600 mb-4">{country.unis}</p>
                  <button className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition">
                    Explore Programs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visa Application Support */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Visa Application Support</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Step-by-Step Guidance</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="bg-yellow-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm">1</span>
                    <span className="text-gray-600">Document preparation and verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-yellow-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm">2</span>
                    <span className="text-gray-600">Application form completion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-yellow-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm">3</span>
                    <span className="text-gray-600">Interview preparation and coaching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-yellow-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm">4</span>
                    <span className="text-gray-600">Post-visa travel assistance</span>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&q=80" 
                  alt="Visa Support"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Student Success Stories */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Student Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <div key={idx} className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl shadow-lg border-2 border-yellow-200">
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold text-center mb-2">{story.name}</h3>
                <div className="text-center mb-2">
                  <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {story.score}
                  </span>
                </div>
                <p className="text-center text-gray-600 text-sm">{story.destination}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Expert Counselors */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Expert Counselors</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold mb-1">Expert Counselor</h3>
              <p className="text-sm text-gray-600 mb-2">10+ Years Experience</p>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, j) => (
                  <Award key={j} className="w-4 h-4 text-yellow-600" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Workshops & Events */}
      <div className="bg-gradient-to-r from-yellow-100 to-amber-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Upcoming Workshops & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Calendar className="w-10 h-10 text-yellow-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">IELTS Preparation Masterclass</h3>
              <p className="text-gray-600 mb-4">Free 2-hour intensive session covering all modules</p>
              <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition">
                Register Now
              </button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Calendar className="w-10 h-10 text-yellow-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Study Abroad Seminar</h3>
              <p className="text-gray-600 mb-4">Meet university representatives from UK, Canada & USA</p>
              <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: "What is the duration of IELTS preparation course?", a: "Our comprehensive course runs for 6-8 weeks with flexible timing options" },
            { q: "Do you provide visa guarantee?", a: "While we cannot guarantee visa approval, our 95% success rate speaks for our expertise" },
            { q: "What are the fees for soft skills training?", a: "We offer customized packages starting from affordable rates with installment options" }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-yellow-600 to-amber-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-yellow-50 mb-8">Book your free consultation with our expert counselors today</p>
          <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoftSkillsEducation;
