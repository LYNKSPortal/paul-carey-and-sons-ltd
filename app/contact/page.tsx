'use client';

import HeroSection from '@/components/ui/HeroSection';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const phones = ['01624 880581', '07624 495711', '07624 376395'];
const emails = ['mail@pcsltd.im', 'paul@pcsltd.im', 'aaron@pcsltd.im'];
const hours = [
  { day: 'Mon', time: '9:00am – 5:00pm' },
  { day: 'Tue', time: '9:00am – 5:00pm' },
  { day: 'Wed', time: '9:00am – 5:00pm' },
  { day: 'Thu', time: '9:00am – 5:00pm' },
  { day: 'Fri', time: '9:00am – 5:00pm' },
  { day: 'Sat', time: '10:00am – 2:00pm' },
  { day: 'Sun', time: 'Closed' },
];

export default function ContactPage() {
  return (
    <main>
      <HeroSection
        title="Contact Us"
        subtitle="Home – Contact Us"
        description="Get in touch with our team. We're here to help with any enquiries about our services across the Isle of Man."
        height="large"
        backgroundImage="/Haulage-Plant-Transport-008.jpg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* CONTACT CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">

            {/* CALL US */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-[#F5F5F5] rounded-2xl p-8 hover:shadow-xl transition-shadow"
            >
              <div className="bg-[#C1121F] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Phone className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#111111] mb-4">Call Us</h3>
              <div className="space-y-2">
                {phones.map((num) => (
                  <a key={num} href={`tel:${num.replace(/\s/g, '')}`} className="block text-gray-600 hover:text-[#C1121F] transition-colors font-medium">
                    {num}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* EMAIL US */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#F5F5F5] rounded-2xl p-8 hover:shadow-xl transition-shadow"
            >
              <div className="bg-[#C1121F] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#111111] mb-4">Email Us</h3>
              <div className="space-y-2">
                {emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className="block text-gray-600 hover:text-[#C1121F] transition-colors text-sm font-medium">
                    {email}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* ADDRESS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#F5F5F5] rounded-2xl p-8 hover:shadow-xl transition-shadow"
            >
              <div className="bg-[#C1121F] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#111111] mb-4">Our Address</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ballasalla Farm<br />
                Jurby West<br />
                Isle of Man<br />
                IM7 3AS
              </p>
              <a
                href="https://maps.google.com/?q=Ballasalla+Farm+Jurby+West+Isle+of+Man+IM7+3AS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C1121F] font-semibold text-sm hover:gap-3 transition-all"
              >
                View on Maps
                <ArrowRight size={16} />
              </a>
            </motion.div>

            {/* OPENING HOURS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#F5F5F5] rounded-2xl p-8 hover:shadow-xl transition-shadow"
            >
              <div className="bg-[#C1121F] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Clock className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#111111] mb-4">Opening Hours</h3>
              <div className="space-y-1">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between text-sm">
                    <span className="font-medium text-[#111111]">{day}</span>
                    <span className={time === 'Closed' ? 'text-[#C1121F] font-semibold' : 'text-gray-600'}>{time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* MAP + CTA */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#F5F5F5] rounded-2xl overflow-hidden h-96 flex items-center justify-center"
            >
              <div className="text-center p-8">
                <MapPin className="text-[#C1121F] mx-auto mb-4" size={56} />
                <h4 className="font-bold text-[#111111] text-xl mb-2">Ballasalla Farm</h4>
                <p className="text-gray-600 mb-6">Jurby West, Isle of Man, IM7 3AS</p>
                <a
                  href="https://maps.google.com/?q=Ballasalla+Farm+Jurby+West+Isle+of+Man+IM7+3AS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C1121F] text-white px-7 py-3 rounded-xl font-bold hover:bg-[#a00f1a] transition-colors"
                >
                  Open in Google Maps
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-[#111111] rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-2">Ready to Get Started?</h4>
                <p className="text-gray-400 mb-6 text-sm">Call us directly for a free, no-obligation discussion about your project.</p>
                <div className="space-y-3 mb-6">
                  {phones.map((num) => (
                    <a key={num} href={`tel:${num.replace(/\s/g, '')}`} className="flex items-center gap-3 text-white hover:text-[#C1121F] transition-colors">
                      <Phone size={18} className="text-[#C1121F]" />
                      <span className="font-semibold">{num}</span>
                    </a>
                  ))}
                </div>
                <a
                  href="tel:01624880581"
                  className="inline-flex items-center gap-2 bg-[#C1121F] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#a00f1a] transition-colors group"
                >
                  Call 01624 880581
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="bg-[#F5F5F5] rounded-2xl p-8">
                <h4 className="text-xl font-bold text-[#111111] mb-4">Email Us Directly</h4>
                <div className="space-y-3">
                  {emails.map((email) => (
                    <a key={email} href={`mailto:${email}`} className="flex items-center gap-3 text-gray-600 hover:text-[#C1121F] transition-colors">
                      <Mail size={18} className="text-[#C1121F] flex-shrink-0" />
                      <span className="font-medium">{email}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FULL-WIDTH MAP */}
      <div className="w-full h-[450px] md:h-[550px]">
        <iframe
          src="https://maps.google.com/maps?q=Ballasalla+Farm,+Jurby+West,+Isle+of+Man,+IM7+3AS&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Paul Carey & Sons Ltd — Ballasalla Farm, Jurby West, Isle of Man"
        />
      </div>
    </main>
  );
}
