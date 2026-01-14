'use client'
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, MessageCircle, Calendar, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all required fields');
            return;
        }
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-white">
            {/* 4.1 Contact Hero */}
            <section className="relative bg-[#FDF7F2] overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-20 right-10 w-32 h-32 bg-[#F97316]/10 rounded-full blur-2xl" />
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#4F46E5]/10 rounded-full blur-2xl" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4F46E5]/10 rounded-full border border-[#4F46E5]/20">
                                <span className="text-[#4F46E5] text-sm font-semibold">Contact Us</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight">
                                We'd Love To Hear{' '}
                                <span className="text-[#4F46E5]">From You</span>
                            </h1>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                Have a question or want to work together? We're here to help bring your ideas to life. Get in touch with our team and let's start a conversation.
                            </p>
                        </div>

                        {/* Right Visual - Decorative shapes */}
                        <div className="relative h-80 lg:h-96 hidden lg:block">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-[#4F46E5] rounded-2xl opacity-10 transform rotate-12" />
                            <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#F97316] rounded-2xl opacity-10 transform -rotate-6" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border-4 border-[#4F46E5]/20 rounded-2xl transform rotate-45" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4.2 Contact Information Cards */}
            <section className="relative -mt-12 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Address Card */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-[#4F46E5]/10 rounded-xl flex items-center justify-center mb-4">
                                <MapPin className="w-7 h-7 text-[#4F46E5]" />
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A] mb-2">Our Location</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Karachi, Sindh,<br />
                                Pakistan
                            </p>
                        </div>

                        {/* Support Card */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-[#F97316]/10 rounded-xl flex items-center justify-center mb-4">
                                <Phone className="w-7 h-7 text-[#F97316]" />
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A] mb-2">Contact Support</h3>
                            <p className="text-gray-600 mb-1">+92 XXX XXXXXXX</p>
                            <p className="text-gray-600">info@fastsolutions.com</p>
                        </div>

                        {/* Hours Card */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-[#1E293B]/10 rounded-xl flex items-center justify-center mb-4">
                                <Clock className="w-7 h-7 text-[#1E293B]" />
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A] mb-2">Business Hours</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Monday - Friday: 9:00 AM - 6:00 PM<br />
                                Saturday: 10:00 AM - 4:00 PM<br />
                                Sunday: Closed
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4.3 Contact Form and Map Section */}
            <section className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
                        {/* Left - Contact Form */}
                        <div className="bg-[#4F46E5] p-8 lg:p-12">
                            <div className="mb-2">
                                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-xs font-semibold">
                                    Get In Touch
                                </span>
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                                Contact Us For Any Query
                            </h2>
                            <p className="text-white/80 mb-8">
                                Fill out the form and our team will get back to you within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        className="w-full bg-transparent border-b-2 border-white/30 px-0 py-3 text-white placeholder-white/60 focus:border-white focus:outline-none transition-colors"
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        className="w-full bg-transparent border-b-2 border-white/30 px-0 py-3 text-white placeholder-white/60 focus:border-white focus:outline-none transition-colors"
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Your Phone"
                                        className="w-full bg-transparent border-b-2 border-white/30 px-0 py-3 text-white placeholder-white/60 focus:border-white focus:outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message"
                                        rows={4}
                                        className="w-full bg-transparent border-b-2 border-white/30 px-0 py-3 text-white placeholder-white/60 focus:border-white focus:outline-none transition-colors resize-none"
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="group px-8 py-6 bg-white text-[#4F46E5] hover:bg-gray-100 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                                >
                                    Send Message
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </form>
                        </div>

                        {/* Right - Map and Images */}
                        <div className="bg-[#1E293B] p-8 lg:p-12">
                            {/* Map placeholder */}
                            <div className="bg-gray-700 rounded-xl h-64 mb-6 flex items-center justify-center overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02956899235!2d66.9294!3d24.8608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    className="rounded-xl"
                                />
                            </div>

                            {/* Small image grid */}
                            <div className="grid grid-cols-3 gap-3">
                                <div className="h-24 bg-gray-600 rounded-lg overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80"
                                        alt="Office"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="h-24 bg-gray-600 rounded-lg overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&q=80"
                                        alt="Team"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="h-24 bg-gray-600 rounded-lg overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80"
                                        alt="Workspace"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4.4 Additional Contact Methods */}
            <section className="py-16 bg-[#FDF7F2]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4">
                            More Ways to Connect
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Choose your preferred method to reach out to us
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/92XXXXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <MessageCircle className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A] mb-2">WhatsApp Chat</h3>
                            <p className="text-gray-600 text-sm">Get instant replies via WhatsApp</p>
                        </a>

                        {/* Appointment Booking */}
                        <a
                            href="/appointment"
                            className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 bg-[#F97316] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Calendar className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A] mb-2">Book Appointment</h3>
                            <p className="text-gray-600 text-sm">Schedule a meeting with our team</p>
                        </a>

                        {/* Social Media */}
                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <div className="w-12 h-12 bg-[#4F46E5] rounded-xl flex items-center justify-center mb-4">
                                <Mail className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A] mb-4">Follow Us</h3>
                            <div className="flex gap-3">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-[#4F46E5]/10 rounded-lg flex items-center justify-center hover:bg-[#4F46E5] hover:text-white text-[#4F46E5] transition-all"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-[#4F46E5]/10 rounded-lg flex items-center justify-center hover:bg-[#4F46E5] hover:text-white text-[#4F46E5] transition-all"
                                >
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-[#4F46E5]/10 rounded-lg flex items-center justify-center hover:bg-[#4F46E5] hover:text-white text-[#4F46E5] transition-all"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-[#4F46E5]/10 rounded-lg flex items-center justify-center hover:bg-[#4F46E5] hover:text-white text-[#4F46E5] transition-all"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
