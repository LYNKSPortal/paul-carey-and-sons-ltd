'use client';

import HeroSection from '@/components/ui/HeroSection';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const whyUs = [
  'Free, no-obligation quotes',
  'Fast response — we\'ll get back to you ASAP',
  'Family-run with a personal approach',
  'Over 25 years of experience',
  'Isle of Man-wide coverage',
  'Small domestic to large commercial projects',
];

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <HeroSection
        title="Get a Quote"
        subtitle="Home – Get a Quote"
        description="Looking for reliable groundworks, plant hire, demolition, haulage, or landscaping services on the Isle of Man? Get in touch today for a free, no-obligation quote."
        height="large"
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
      />

      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">

            {/* FORM */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-10"
              >
                <p className="text-[#C1121F] font-semibold text-sm uppercase tracking-wider mb-3">Free No-Obligation Quote</p>
                <h2 className="text-3xl font-bold text-[#111111] mb-4">Get a Quote</h2>
                <p className="text-gray-600 leading-relaxed mb-2">
                  Simply fill out the form below with your project details, and a member of our team will get back to you as soon as possible. Whether it's a small domestic job or a large-scale commercial project, we're here to provide expert advice and competitive pricing.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8 font-medium">
                  Fill in the form below, and let's get started!
                </p>

                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-green-600" size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#111111] mb-3">Quote Request Received!</h3>
                    <p className="text-gray-600 mb-2">Thank you, {formData.name}. We've received your enquiry.</p>
                    <p className="text-gray-600">A member of our team will get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-transparent"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                      <textarea
                        required
                        rows={7}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C1121F] focus:border-transparent resize-none"
                        placeholder="Tell us about your project — what service you need, location, size, and any other details..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#C1121F] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#a00f1a] transition-colors flex items-center justify-center gap-2 group"
                    >
                      Submit Enquiry
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </motion.div>
            </div>

            {/* SIDEBAR */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#111111] text-white rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  {whyUs.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle className="text-[#C1121F] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-300 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#C1121F] text-white rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold mb-4">Prefer to Talk?</h3>
                <p className="text-red-100 mb-6 text-sm">Call us directly for a quick discussion about your project.</p>
                <div className="space-y-3">
                  {['01624 880581', '07624 495711', '07624 376395'].map((num) => (
                    <a key={num} href={`tel:${num.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                      <Phone size={18} />
                      <span className="font-semibold">{num}</span>
                    </a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-lg font-bold text-[#111111] mb-4">Email Us</h3>
                <div className="space-y-3 mb-6">
                  {['mail@pcsltd.im', 'paul@pcsltd.im', 'aaron@pcsltd.im'].map((email) => (
                    <a key={email} href={`mailto:${email}`} className="flex items-center gap-3 text-gray-600 hover:text-[#C1121F] transition-colors">
                      <Mail size={16} className="text-[#C1121F] flex-shrink-0" />
                      <span className="text-sm">{email}</span>
                    </a>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-bold text-[#111111] mb-3">Opening Hours</h3>
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-[#C1121F] mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-gray-600 space-y-0.5">
                      <p>Mon: 9:00am – 5:00pm</p>
                      <p>Tue: 9:00am – 5:00pm</p>
                      <p>Wed: 9:00am – 5:00pm</p>
                      <p>Thu: 9:00am – 5:00pm</p>
                      <p>Fri: 9:00am – 5:00pm</p>
                      <p>Sat: 10:00am – 2:00pm</p>
                      <p>Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
