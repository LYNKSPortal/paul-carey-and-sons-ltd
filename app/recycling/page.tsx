'use client';

import HeroSection from '@/components/ui/HeroSection';
import CTASection from '@/components/ui/CTASection';
import { motion } from 'framer-motion';
import { Recycle, Leaf, Trash2, Mountain, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Mountain,
    title: 'Aggregate Recycling',
    description: 'Reprocessing materials such as concrete, stone, and asphalt for reuse.',
  },
  {
    icon: Leaf,
    title: 'Green Waste Recycling',
    description: 'Turning garden and landscaping waste into compost or mulch.',
  },
  {
    icon: Trash2,
    title: 'Site Waste Management',
    description: 'Collection, sorting, and responsible disposal of construction waste.',
  },
  {
    icon: Recycle,
    title: 'Muck Away & Soil Screening',
    description: 'Removal of excess soil and debris, with soil screening for reuse.',
  },
];

const galleryImages = [
  { src: '/Recycling-001.jpg', alt: 'Recycling site 1' },
  { src: '/Recycling-002.jpg', alt: 'Recycling site 2' },
  { src: '/Recycling-003.jpg', alt: 'Recycling site 3' },
  { src: '/Recycling-004.jpg', alt: 'Recycling site 4' },
  { src: '/Recycling-005.jpg', alt: 'Recycling site 5' },
  { src: '/Recycling-006.jpg', alt: 'Recycling site 6' },
];

export default function RecyclingPage() {
  return (
    <main>
      <HeroSection
        title="Recycling"
        subtitle="Home – Recycling"
        description="At Paul Carey & Sons Ltd, we are committed to sustainable waste management, providing efficient recycling solutions across the Isle of Man. Our services ensure that construction, demolition, and landscaping waste is handled responsibly, reducing environmental impact while supporting a cleaner, greener future."
        primaryCTA={{ text: 'Contact Us', href: '/quote' }}
        backgroundImage="/Recycling-001.jpg"
      />

      {/* INTRO & SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <p className="text-[#C1121F] font-semibold text-sm uppercase tracking-wider">Our Services</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight">
                Sustainable Recycling & Waste Management
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                We operate with a focus on sustainability, helping businesses and individuals reduce landfill waste while maximizing material reuse. Whether you need site clearance, bulk waste removal, or material recycling, we have the expertise and equipment to handle it efficiently.
              </p>

              <ul className="space-y-4 pt-2">
                {services.map((service) => (
                  <li key={service.title} className="flex items-start gap-4">
                    <CheckCircle className="text-[#C1121F] flex-shrink-0 mt-1" size={22} />
                    <div>
                      <span className="font-semibold text-[#111111]">{service.title}</span>
                      <span className="text-gray-600"> – {service.description}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[#C1121F] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#a00f1a] transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-5 bg-[#F5F5F5] p-6 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="bg-[#C1121F] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#111111] mb-1">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* GALLERY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#C1121F] font-semibold text-sm uppercase tracking-wider mb-4">Our Work</p>
            <h3 className="text-3xl font-bold text-[#111111] mb-8">Recycling Gallery</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {galleryImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Manage Your Site Waste Responsibly"
        description="Talk to our team about recycling and waste management solutions for your project."
        primaryCTA={{ text: 'Contact Us', href: '/quote' }}
        showPhone={true}
        variant="dark"
      />
    </main>
  );
}
