'use client';

import HeroSection from '@/components/ui/HeroSection';
import CTASection from '@/components/ui/CTASection';
import { motion } from 'framer-motion';
import { Truck, Package, ArrowLeftRight, AlertTriangle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Truck,
    title: 'Heavy Plant & Machinery Transport',
    description: 'Safe and efficient transport of excavators, dumpers, rollers, and all heavy construction plant across the Isle of Man.',
  },
  {
    icon: Package,
    title: 'Aggregate & Bulk Material Haulage',
    description: 'Reliable haulage of aggregates, soil, sand, gravel, and other bulk materials to and from construction sites.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Site-to-Site Equipment Relocation',
    description: 'Complete site relocation services, moving your plant and materials efficiently between project locations.',
  },
  {
    icon: AlertTriangle,
    title: 'Specialist & Oversized Load Handling',
    description: 'Specialist transport solutions for oversized and abnormal loads with full compliance and safety planning.',
  },
];

const galleryImages = [
  { src: '/Haulage-Plant-Transport-001.jpg', alt: 'Haulage & plant transport 1' },
  { src: '/Haulage-Plant-Transport-002.jpg', alt: 'Haulage & plant transport 2' },
  { src: '/Haulage-Plant-Transport-003.jpg', alt: 'Haulage & plant transport 3' },
  { src: '/Haulage-Plant-Transport-004.jpg', alt: 'Haulage & plant transport 4' },
  { src: '/Haulage-Plant-Transport-005.jpg', alt: 'Haulage & plant transport 5' },
  { src: '/Haulage-Plant-Transport-006.jpg', alt: 'Haulage & plant transport 6' },
  { src: '/Haulage-Plant-Transport-007.jpg', alt: 'Haulage & plant transport 7' },
  { src: '/Haulage-Plant-Transport-008.jpg', alt: 'Haulage & plant transport 8' },
  { src: '/Haulage-Plant-Transport-009.jpg', alt: 'Haulage & plant transport 9' },
  { src: '/Haulage-Plant-Transport-010.jpg', alt: 'Haulage & plant transport 10' },
];

export default function HaulagePage() {
  return (
    <main>
      <HeroSection
        title="Haulage & Plant Transport"
        subtitle="Home – Haulage & Plant Transport"
        description="Need reliable haulage and plant transport across the Isle of Man? At Paul Carey & Sons Ltd, we provide efficient, professional transport solutions for plant machinery, aggregates, and construction materials."
        primaryCTA={{ text: 'Contact Us', href: '/contact' }}
        backgroundImage="/Haulage-Plant-Transport-001.jpg"
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
                Professional Transport Solutions
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                With a fleet of modern, well-equipped transport vehicles, we ensure your machinery and materials are delivered safely, on time, and with minimal disruption. Whether you need a one-off move or ongoing transport services, we're here to help.
              </p>

              <ul className="space-y-4 pt-2">
                {services.map((service) => (
                  <li key={service.title} className="flex items-start gap-4">
                    <CheckCircle className="text-[#C1121F] flex-shrink-0 mt-1" size={22} />
                    <div>
                      <span className="font-semibold text-[#111111]">{service.title}</span>
                      <p className="text-gray-600 text-sm mt-1">{service.description}</p>
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
            <p className="text-[#C1121F] font-semibold text-sm uppercase tracking-wider mb-4">Our Fleet in Action</p>
            <h3 className="text-3xl font-bold text-[#111111] mb-8">Haulage Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
        title="Need Haulage & Plant Transport?"
        description="Contact our team for competitive rates and availability across the Isle of Man."
        primaryCTA={{ text: 'Contact Us', href: '/contact' }}
        showPhone={true}
        variant="dark"
      />
    </main>
  );
}
