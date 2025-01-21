'use client'

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteInfo } from '@/config/siteInfo';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-10 md:py-16 px-4 max-w-6xl mx-auto">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-2">Get in Touch</h2>
          <p className="text-primary/80 mb-8 max-w-[680px] mx-auto">
            Have a project in mind or want to stay updated? Let's connect and bring your ideas to life!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left side - Contact Info and Image */}
          <div className="space-y-8">
            <div className="relative">
              <img 
                src="/ctc.jpg" 
                alt="Contact" 
                className="rounded-2xl w-full max-h-[255px] object-cover shadow-lg"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
            </div>

            <div className="space-y-6 p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-primary/80">{siteInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-primary/80">{siteInfo.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-primary font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary transition"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-primary font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary transition"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-primary font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary transition"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;