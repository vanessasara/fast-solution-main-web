'use client'
import React, { useState } from 'react';
import { ShoppingCart, Star, Truck, Shield, RefreshCw, Package, Heart, Search } from 'lucide-react';

const DacorDiceStore = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "Modern Ceramic Vase Set",
      price: 89.99,
      rating: 4.8,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500&q=80",
      category: "decor"
    },
    {
      id: 2,
      name: "Scandinavian Wall Art",
      price: 129.99,
      rating: 4.9,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=500&q=80",
      category: "art"
    },
    {
      id: 3,
      name: "Luxury Throw Pillows",
      price: 49.99,
      rating: 4.7,
      reviews: 312,
      image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&q=80",
      category: "textiles"
    },
    {
      id: 4,
      name: "Ambient Table Lamp",
      price: 159.99,
      rating: 4.9,
      reviews: 276,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80",
      category: "lighting"
    },
    {
      id: 5,
      name: "Botanical Wall Planter",
      price: 39.99,
      rating: 4.6,
      reviews: 198,
      image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=500&q=80",
      category: "decor"
    },
    {
      id: 6,
      name: "Minimalist Clock",
      price: 79.99,
      rating: 4.8,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&q=80",
      category: "decor"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'decor', name: 'Home Decor' },
    { id: 'lighting', name: 'Lighting' },
    { id: 'textiles', name: 'Textiles' },
    { id: 'art', name: 'Wall Art' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-yellow-600 to-amber-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Shop Smart. Live Fast.</h1>
            <p className="text-xl mb-8 text-yellow-50">Transform your space with curated home decor that speaks elegance</p>
            <div className="flex gap-4">
              <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition">
                Shop Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition">
                Download App
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Dacor Dice */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Dacor Dice</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            E-commerce redefined. Dacor Dice brings you a curated collection of premium home decor, lifestyle products, and modern accessories. We believe your living space should reflect your personality, and every product we offer is selected with care, quality, and style in mind.
          </p>
        </div>
      </div>

      {/* Product Categories */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-2 border-yellow-200">
            <Package className="w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Home Decor</h3>
            <p className="text-gray-600">Vases, sculptures, and decorative pieces</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-2 border-yellow-200">
            <Package className="w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Lifestyle Products</h3>
            <p className="text-gray-600">Curated essentials for modern living</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-2 border-yellow-200">
            <Package className="w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Fashion & Accessories</h3>
            <p className="text-gray-600">Style that complements your space</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-2 border-yellow-200">
            <Package className="w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Home & Living</h3>
            <p className="text-gray-600">Everything for a comfortable home</p>
          </div>
        </div>
      </div>

      {/* Why Shop With Us */}
      <div className="bg-gradient-to-r from-yellow-100 to-amber-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Why Shop With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Curated Quality Products</h3>
              <p className="text-gray-600">Every item handpicked for excellence</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">Best value for premium quality</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Authenticity Guarantee</h3>
              <p className="text-gray-600">100% genuine products, always</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Products</h2>
        
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeCategory === cat.id
                  ? 'bg-yellow-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-yellow-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products
            .filter(p => activeCategory === 'all' || p.category === activeCategory)
            .map(product => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                  />
                  <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-yellow-100 transition">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-yellow-600">${product.price}</span>
                    <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Shopping Experience */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Shopping Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Search className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Easy Search</h3>
              <p className="text-sm text-gray-600">Find what you need instantly</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Secure Checkout</h3>
              <p className="text-sm text-gray-600">Your data is protected</p>
            </div>
            <div className="text-center">
              <Truck className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-600">Nationwide shipping</p>
            </div>
            <div className="text-center">
              <RefreshCw className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Easy Returns</h3>
              <p className="text-sm text-gray-600">Hassle-free policy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Amazing quality and fast delivery! The products exceeded my expectations. Highly recommended!"</p>
              <p className="font-bold">- Verified Buyer</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-yellow-600 to-amber-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Start Shopping Today</h2>
          <p className="text-xl text-yellow-50 mb-8">Download our app and get exclusive welcome bonuses</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition">
              Download iOS App
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition">
              Download Android App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DacorDiceStore;
