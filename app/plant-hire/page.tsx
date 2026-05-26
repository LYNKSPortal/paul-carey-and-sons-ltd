'use client';

import HeroSection from '@/components/ui/HeroSection';
import CTASection from '@/components/ui/CTASection';
import { motion } from 'framer-motion';
import { Wrench, CheckCircle, Phone } from 'lucide-react';

const equipment = [
  {
    title: 'Excavators',
    description: 'Full range of excavators from mini-diggers to large tracked excavators suited for all groundwork applications.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076',
    specs: ['Mini excavators (1–3t)', 'Mid-range (5–15t)', 'Large tracked (20t+)', 'Long-reach variants'],
  },
  {
    title: 'Dumpers & Rollers',
    description: 'Site dumpers and compaction rollers available in various capacities for efficient material movement and ground compaction.',
    img: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070',
    specs: ['Site dumpers (1–10t)', 'Ride-on rollers', 'Vibrating plate compactors', 'Walk-behind rollers'],
  },
  {
    title: 'Compact Loaders',
    description: 'Versatile compact loaders ideal for tight spaces and a wide range of loading and material handling tasks.',
    img: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2070',
    specs: ['Skid steer loaders', 'Telehandlers', 'Wheeled loaders', 'Multi-terrain loaders'],
  },
  {
    title: 'Site Clearance Equipment',
    description: 'Specialist site clearance machinery including grabs, breakers, and screening equipment for preparation works.',
    img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2031',
    specs: ['Hydraulic breakers', 'Grabs & sorting attachments', 'Screening plant', 'Crusher attachments'],
  },
];

export default function PlantHirePage() {
  return (
    <main>
      <HeroSection
        title="Reliable Plant Hire Across the Isle of Man"
        subtitle="Plant Hire"
        description="High-quality, fully maintained machinery available for your groundwork and construction projects."
        primaryCTA={{ text: 'Request Plant Hire', href: '/quote' }}
        secondaryCTA={{ text: 'Call Us Now', href: 'tel:01624880581' }}
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#C1121F] font-semibold text-sm uppercase tracking-wider mb-4">Our Fleet</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
              Modern, Well-Maintained Equipment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our fleet is maintained to the highest standards and operated by trained professionals. 
              All equipment comes with full service history and current LOLER/PUWER certification.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {equipment.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F5F5F5] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Wrench className="text-[#C1121F]" size={24} />
                    <h3 className="text-2xl font-bold text-[#111111]">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <ul className="space-y-2">
                    {item.specs.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="text-[#C1121F] flex-shrink-0" size={16} />
                        <span className="text-sm">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GALLERY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="text-[#C1121F] font-semibold text-sm uppercase tracking-wider mb-4">Our Fleet</p>
            <h3 className="text-3xl font-bold text-[#111111] mb-8">Plant Hire Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                '/Plant-Hire-001.jpg',
                '/Plant-Hire-002.jpg',
                '/Plant-Hire-003.jpg',
                '/Plant-Hire-004.jpg',
                '/Plant-Hire-005.jpg',
                '/Plant-Hire-006.jpg',
                '/Plant-Hire-007.jpg',
                '/Plant-Hire-008.jpg',
                '/Plant-Hire-009.jpg',
              ].map((src, index) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <img
                    src={src}
                    alt={`Plant hire ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#111111] rounded-2xl p-10 text-white grid md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">Why Hire From Us?</h3>
              <ul className="space-y-3">
                {[
                  'Fully maintained, modern fleet',
                  'Experienced operators available',
                  'Flexible hire periods',
                  'Isle of Man-wide delivery',
                  'Competitive rates',
                  'Emergency cover available',
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <CheckCircle className="text-[#C1121F] flex-shrink-0" size={20} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <p className="text-gray-300 mb-4 text-lg">Ready to hire? Speak to our team today.</p>
              <a
                href="tel:01624880581"
                className="inline-flex items-center gap-3 bg-[#C1121F] text-white px-8 py-4 rounded-xl hover:bg-[#a00f1a] transition-colors font-bold text-xl"
              >
                <Phone size={24} />
                01624 880581
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Get a Plant Hire Quote"
        description="Tell us what you need and we'll provide a competitive quote tailored to your project."
        primaryCTA={{ text: 'Request a Quote', href: '/quote' }}
        showPhone={true}
        variant="red"
      />
    </main>
  );
}
