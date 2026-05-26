'use client';

import HeroSection from '@/components/ui/HeroSection';
import CTASection from '@/components/ui/CTASection';
import { motion } from 'framer-motion';
import { Hammer, HardHat, Recycle, ShieldCheck, Wrench, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Hammer,
    title: 'Full & Partial Demolition',
    description: 'Safe dismantling of buildings and structures of all sizes, from small domestic properties to large commercial and industrial buildings.',
  },
  {
    icon: ShieldCheck,
    title: 'Site Clearance',
    description: 'Removal of debris, hazardous materials, and waste to prepare your site for the next phase of development.',
  },
  {
    icon: Wrench,
    title: 'Soft Strip Demolition',
    description: 'Internal stripping for renovations or refurbishments — careful removal of fixtures, fittings, and finishes.',
  },
  {
    icon: Recycle,
    title: 'Recycling & Waste Management',
    description: 'Responsible disposal and material reuse, maximising recycling and minimising waste to landfill.',
  },
  {
    icon: HardHat,
    title: 'Land Remediation',
    description: 'Preparing sites for redevelopment through contamination assessment, soil treatment, and ground stabilisation.',
  },
];

const galleryImages = [
  { src: '/Demolition-008.jpg', alt: 'Demolition works' },
  { src: '/Demolition-001.jpg', alt: 'Demolition site 1' },
  { src: '/Demolition-002.jpg', alt: 'Demolition site 2' },
  { src: '/Demolition-003.jpg', alt: 'Demolition site 3' },
  { src: '/Demolition-004.png', alt: 'Demolition site 4' },
  { src: '/Demolition-005.png', alt: 'Demolition site 5' },
  { src: '/Demolition-006.png', alt: 'Demolition site 6' },
  { src: '/Demolition-007.jpg', alt: 'Demolition site 7' },
];

export default function DemolitionPage() {
  return (
    <main>
      <HeroSection
        title="Demolition"
        subtitle="Home – Demolition"
        description="At Paul Carey & Sons Ltd, we provide safe, efficient, and controlled demolition services across the Isle of Man, handling everything from small-scale structures to large commercial and industrial buildings."
        primaryCTA={{ text: 'Contact Us', href: '/quote' }}
        backgroundImage="/Demolition-008.jpg"
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
                Safe, Efficient & Controlled Demolition
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                With specialist equipment and experienced operators, we ensure every project is completed safely, efficiently, and in compliance with regulations. Whether you need complete site clearance, structural removal, or preparatory work for redevelopment, we deliver a professional service from start to finish.
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
            <h3 className="text-3xl font-bold text-[#111111] mb-8">Demolition Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
        title="Planning a Demolition Project?"
        description="Get a detailed quote from our specialist demolition team today."
        primaryCTA={{ text: 'Contact Us', href: '/quote' }}
        showPhone={true}
        variant="dark"
      />
    </main>
  );
}
