'use client';

import React, { useState, useEffect } from 'react';

export default function TravelAgencyPage() {
  const [activeDestination, setActiveDestination] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', destination: '' });

  const destinations = [
    {
      name: 'Dubai',
      tagline: 'Luxury & Adventure',
      price: 'From PKR 85,000',
      features: ['5-Star Hotels', 'Desert Safari', 'Burj Khalifa', 'City Tours'],
      gradient: 'from-amber-400 to-orange-500',
      emoji: '🏙️'
    },
    {
      name: 'Turkey',
      tagline: 'History & Culture',
      price: 'From PKR 120,000',
      features: ['Historic Sites', 'Hot Air Balloon', 'Local Cuisine', 'Shopping'],
      gradient: 'from-red-500 to-pink-500',
      emoji: '🕌'
    },
    {
      name: 'Malaysia',
      tagline: 'Tropical Paradise',
      price: 'From PKR 95,000',
      features: ['Beach Resorts', 'Island Hopping', 'Cultural Tours', 'Shopping'],
      gradient: 'from-blue-500 to-cyan-500',
      emoji: '🏝️'
    },
    {
      name: 'Thailand',
      tagline: 'Beaches & Temples',
      price: 'From PKR 110,000',
      features: ['Phuket Beaches', 'Bangkok Tours', 'Island Paradise', 'Thai Cuisine'],
      gradient: 'from-purple-500 to-pink-500',
      emoji: '🏖️'
    }
  ];

  const services = [
    {
      icon: '✈️',
      title: 'Flight Bookings',
      description: 'Best rates on domestic and international flights',
      features: ['Instant Confirmation', 'Flexible Dates', 'Best Price Guarantee']
    },
    {
      icon: '🏨',
      title: 'Hotel Reservations',
      description: 'Worldwide accommodation at unbeatable prices',
      features: ['Verified Properties', '24/7 Support', 'Exclusive Deals']
    },
    {
      icon: '🎫',
      title: 'Holiday Packages',
      description: 'All-inclusive stress-free vacation planning',
      features: ['Customizable Tours', 'Family Packages', 'Group Discounts']
    },
    {
      icon: '💑',
      title: 'Honeymoon Specials',
      description: 'Romantic getaways designed for couples',
      features: ['Luxury Stays', 'Private Tours', 'Special Amenities']
    },
    {
      icon: '🎢',
      title: 'Adventure Tours',
      description: 'Thrilling experiences for adventure seekers',
      features: ['Safari Tours', 'Trekking', 'Water Sports']
    },
    {
      icon: '💼',
      title: 'Corporate Travel',
      description: 'Efficient business travel management',
      features: ['Business Class', 'Conference Bookings', 'Expense Management']
    }
  ];

  const testimonials = [
    {
      name: 'Ahmed & Fatima',
      trip: 'Maldives Honeymoon',
      rating: 5,
      review: 'Fast Travel Agency made our dream honeymoon a reality! Everything was perfectly planned from flights to resort booking. Highly recommended!',
      location: 'Karachi'
    },
    {
      name: 'Sarah Khan',
      trip: 'Dubai Family Tour',
      rating: 5,
      review: 'Excellent service! They handled everything including visa, hotels, and tours. Our family had an amazing time in Dubai thanks to their planning.',
      location: 'Lahore'
    },
    {
      name: 'Bilal Ahmed',
      trip: 'Turkey Business Trip',
      rating: 5,
      review: 'Professional and reliable. They arranged my entire business trip to Turkey seamlessly. Will definitely use their services again.',
      location: 'Islamabad'
    }
  ];

  const specialOffers = [
    {
      title: 'Early Bird Special',
      discount: '20% OFF',
      description: 'Book 60 days in advance',
      color: 'bg-green-500'
    },
    {
      title: 'Family Package',
      discount: '30% OFF',
      description: 'For groups of 4+',
      color: 'bg-blue-500'
    },
    {
      title: 'Last Minute Deal',
      discount: '15% OFF',
      description: 'Book within 7 days',
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/20 via-amber-300/20 to-orange-400/20" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute top-40 right-20 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-yellow-400 text-gray-900 font-bold rounded-full text-sm uppercase tracking-wider shadow-lg">
              🌍 Fast Travel Agency
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="block text-gray-900">Your Journey</span>
              <span className="block bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                Starts Here
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto font-medium">
              Transform your travel dreams into unforgettable memories with our expert planning, 
              unbeatable prices, and 24/7 support
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {[
                { number: '15K+', label: 'Happy Travelers' },
                { number: '100+', label: 'Destinations' },
                { number: '24/7', label: 'Support' },
                { number: '98%', label: 'Satisfaction' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl transform hover:scale-110 transition-all duration-300">
                  <div className="text-4xl font-black text-yellow-500 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="group relative px-10 py-5 bg-yellow-500 text-white font-bold text-lg rounded-full overflow-hidden shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300">
                <span className="relative z-10">Book Your Trip Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>
              <button className="px-10 py-5 bg-white border-4 border-yellow-500 text-gray-900 font-bold text-lg rounded-full hover:bg-yellow-50 transition-all duration-300 shadow-xl">
                Explore Packages
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-4 border-yellow-500 rounded-full flex items-start justify-center p-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Popular <span className="text-yellow-500">Destinations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover breathtaking locations with our curated travel packages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {destinations.map((destination, idx) => (
              <div
                key={idx}
                onClick={() => setActiveDestination(idx)}
                className={`group relative cursor-pointer rounded-3xl overflow-hidden transform transition-all duration-500 ${
                  activeDestination === idx ? 'scale-105 shadow-2xl' : 'hover:scale-105'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${destination.gradient} transition-transform duration-500 group-hover:scale-110`} />
                <div className="relative z-10 p-8 text-white h-80 flex flex-col justify-between">
                  <div>
                    <div className="text-7xl mb-4">{destination.emoji}</div>
                    <h3 className="text-3xl font-black mb-2">{destination.name}</h3>
                    <p className="text-lg font-semibold opacity-90">{destination.tagline}</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-4">{destination.price}</div>
                    <button className="w-full py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-yellow-400 transition-colors duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Destination Details */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-4xl font-black mb-4">{destinations[activeDestination].name} Package</h3>
                <p className="text-xl text-gray-600 mb-6">{destinations[activeDestination].tagline}</p>
                <div className="space-y-3 mb-8">
                  {destinations[activeDestination].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-yellow-500 text-2xl">✓</span>
                      <span className="text-lg font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-3xl font-black text-yellow-500 mb-6">
                  {destinations[activeDestination].price}
                </div>
                <button className="px-8 py-4 bg-yellow-500 text-white font-bold rounded-full hover:bg-yellow-600 transition-colors duration-300 shadow-lg">
                  Book This Package
                </button>
              </div>
              <div className={`aspect-square rounded-3xl bg-gradient-to-br ${destinations[activeDestination].gradient} flex items-center justify-center text-9xl`}>
                {destinations[activeDestination].emoji}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Our <span className="text-yellow-500">Services</span>
            </h2>
            <p className="text-xl text-gray-600">
              Complete travel solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-transparent hover:border-yellow-500"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <span className="text-yellow-500">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Process */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              How It <span className="text-yellow-500">Works</span>
            </h2>
            <p className="text-xl text-gray-600">
              Your journey from booking to adventure in 4 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Plan Your Trip', desc: 'Share your travel dreams and preferences', icon: '📝' },
              { step: '02', title: 'Customize Package', desc: 'We create a perfect itinerary for you', icon: '🎯' },
              { step: '03', title: 'Book & Confirm', desc: 'Secure your trip with easy payment options', icon: '✅' },
              { step: '04', title: 'Travel & Enjoy', desc: '24/7 support throughout your journey', icon: '✈️' }
            ].map((phase, idx) => (
              <div key={idx} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 text-white font-black text-2xl mb-6 shadow-xl">
                    {phase.step}
                  </div>
                  <div className="text-6xl mb-4">{phase.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-1 bg-gradient-to-r from-yellow-400 to-amber-500 -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
              Special Offers
            </h2>
            <p className="text-xl text-gray-800 font-semibold">
              Save more on your dream vacation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialOffers.map((offer, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className={`inline-block px-6 py-3 ${offer.color} text-white font-black text-3xl rounded-full mb-6`}>
                  {offer.discount}
                </div>
                <h3 className="text-2xl font-black mb-3">{offer.title}</h3>
                <p className="text-gray-600 text-lg mb-6">{offer.description}</p>
                <button className="w-full py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-yellow-500 transition-colors duration-300">
                  Claim Offer
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Traveler <span className="text-yellow-500">Stories</span>
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-yellow-500">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-2xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.review}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.trip}</div>
                    <div className="text-xs text-yellow-600 font-semibold">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="py-32 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-black mb-6">
            Ready for Your Next
            <br />
            <span className="text-yellow-400">Adventure?</span>
          </h2>
          <p className="text-2xl mb-12 text-gray-300">
            Let our travel experts create your perfect journey
          </p>
          
          <div className="bg-white rounded-3xl p-8 text-gray-900">
            <h3 className="text-3xl font-bold mb-6">Quick Inquiry</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="px-6 py-4 border-2 border-gray-300 rounded-full focus:border-yellow-500 outline-none font-semibold"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-6 py-4 border-2 border-gray-300 rounded-full focus:border-yellow-500 outline-none font-semibold"
              />
            </div>
            <input
              type="text"
              placeholder="Dream Destination"
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-full focus:border-yellow-500 outline-none font-semibold mb-6"
            />
            <button className="w-full py-5 bg-yellow-500 text-white font-black text-lg rounded-full hover:bg-yellow-600 transition-colors duration-300 shadow-xl">
              Get Free Consultation
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 justify-center">
            <div className="flex items-center gap-3">
              <span className="text-3xl">📞</span>
              <div className="text-left">
                <div className="text-sm text-gray-400">Call Us</div>
                <div className="font-bold text-xl">+92 XXX XXX XXXX</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">📧</span>
              <div className="text-left">
                <div className="text-sm text-gray-400">Email Us</div>
                <div className="font-bold text-xl">info@fasttravel.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }

        .animate-blob {
          animation: blob 10s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
