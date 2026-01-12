'use client'
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send,} from 'lucide-react'


const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
    });

    const handleSubmit = () => {
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('Please fill in all required fields');
            return;
        }
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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
                                We're Here to Help
                            </span>
                        </div>
                        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                            Get In Touch
                        </h1>
                        <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Let's discuss how we can transform your business together
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <div className="lg:col-span-1">
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 text-white sticky top-8 shadow-2xl">
                            <h2 className="text-3xl font-bold mb-8">Contact Info</h2>

                            <div className="space-y-8">
                                <div className="flex items-start group">
                                    <div className="flex-shrink-0 p-3 bg-yellow-400/20 rounded-xl group-hover:bg-yellow-400/30 transition-colors">
                                        <MapPin className="w-6 h-6 text-yellow-400" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="font-semibold text-yellow-300 mb-2">Location</h3>
                                        <p className="text-gray-300">Karachi, Sindh, Pakistan</p>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="flex-shrink-0 p-3 bg-yellow-400/20 rounded-xl group-hover:bg-yellow-400/30 transition-colors">
                                        <Phone className="w-6 h-6 text-yellow-400" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="font-semibold text-yellow-300 mb-2">Phone</h3>
                                        <p className="text-gray-300">+92 XXX XXXXXXX</p>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="flex-shrink-0 p-3 bg-yellow-400/20 rounded-xl group-hover:bg-yellow-400/30 transition-colors">
                                        <Mail className="w-6 h-6 text-yellow-400" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="font-semibold text-yellow-300 mb-2">Email</h3>
                                        <p className="text-gray-300">info@fastgroup.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="flex-shrink-0 p-3 bg-yellow-400/20 rounded-xl group-hover:bg-yellow-400/30 transition-colors">
                                        <Clock className="w-6 h-6 text-yellow-400" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="font-semibold text-yellow-300 mb-2">Business Hours</h3>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                                            Saturday: 10:00 AM - 4:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 pt-10 border-t border-gray-700">
                                <h3 className="font-semibold text-yellow-300 mb-6">Follow Us</h3>
                                <div className="flex space-x-4">
                                    {['FB', 'TW', 'IN', 'IG'].map((social) => (
                                        <button
                                            key={social}
                                            className="w-12 h-12 bg-yellow-400/20 hover:bg-yellow-400 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 text-yellow-400 hover:text-gray-900 font-bold"
                                        >
                                            {social}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl shadow-2xl p-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-3">Send Us a Message</h2>
                            <p className="text-gray-600 mb-10">Fill out the form below and we'll get back to you as soon as possible.</p>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-3">
                                            Full Name <span className="text-yellow-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all text-gray-900"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-3">
                                            Email Address <span className="text-yellow-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all text-gray-900"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-3">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all text-gray-900"
                                            placeholder="+92 XXX XXXXXXX"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-3">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all text-gray-900"
                                            placeholder="Your Company"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                                        Subject <span className="text-yellow-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all text-gray-900"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                                        Message <span className="text-yellow-500">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all resize-none text-gray-900"
                                        placeholder="Tell us more about your inquiry..."
                                    />
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3 group"
                                >
                                    <span>Send Message</span>
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
