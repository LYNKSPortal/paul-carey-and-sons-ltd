'use client';

import HeroSection from '@/components/ui/HeroSection';
import CTASection from '@/components/ui/CTASection';
import { motion } from 'framer-motion';
import { Waves, Building2, ShieldCheck, Mountain, Leaf, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Waves,
    title: 'Coastal & Marine Reclamation',
    description: 'Restoring and reinforcing shorelines, creating usable land from coastal or tidal zones.',
  },
  {
    icon: Building2,
    title: 'Brownfield Redevelopment',
    description: 'Preparing and revitalising previously developed land for new construction.',
  },
  {
    icon: ShieldCheck,
    title: 'Flood Risk Management',
    description: 'Raising land levels and improving drainage to mitigate flooding.',
  },
  {
    icon: Mountain,
    title: 'Soil Stabilisation & Remediation',
    description: 'Enhancing ground conditions for safe, sustainable development.',
  },
  {
    icon: Leaf,
    title: 'Environmental Improvements',
    description: 'Working alongside local authorities to support ecological restoration and infrastructure planning.',
  },
];

const galleryImages = [
  '/Land-Reclamation-001.jpg',
  '/Land-Reclamation-002.jpg',
  '/Land-Reclamation-003.jpg',
  '/Land-Reclamation-004.jpg',
  '/Land-Reclamation-005.jpg',
  '/Land-Reclamation-006.jpg',
  '/Land-Reclamation-007.jpg',
  '/Land-Reclamation-008.jpg',
  '/Land-Reclamation-009.jpg',
  '/Land-Reclamation-010.jpg',
  '/Land-Reclamation-011.jpg',
  '/Land-Reclamation-012.jpg',
  '/Land-Reclamation-013.jpg',
  '/Land-Reclamation-014.jpg',
  '/Land-Reclamation-015.jpg',
  '/Land-Reclamation-016.jpg',
  '/Land-Reclamation-017.jpg',
  '/Land-Reclamation-018.jpg',
  '/Land-Reclamation-019.jpg',
  '/Land-Reclamation-020.jpg',
  '/Land-Reclamation-021.jpg',
  '/Land-Reclamation-022.jpg',
  '/Land-Reclamation-023.jpg',
  '/Land-Reclamation-024.jpg',
  '/Land-Reclamation-025.jpg',
  '/Land-Reclamation-026.jpg',
];

export default function LandReclamationPage() {
  return (
    <main>
      <HeroSection
        title="Land Reclamation"
        subtitle="Home – Land Reclamation"
        description="At Paul Carey & Sons Ltd, we offer expert land reclamation services across the Isle of Man, helping to transform underused or environmentally challenged areas into valuable, functional land for commercial, industrial, and public use."
        primaryCTA={{ text: 'Contact Us', href: '/contact' }}
        backgroundImage="/Land-Reclamation-001.jpg"
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
              <p className="text-[#C1121F] font-semibold text-sm uppercase tracking-wider">Our Capabilities</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight">
                Expert Land Reclamation Across the Isle of Man
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                With a strong track record in delivering durable, high-quality infrastructure, we ensure all projects are completed safely, on time, and to industry standards. Our experienced team is equipped to handle everything from small-scale groundwork to large civil engineering contracts.
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
            <h3 className="text-3xl font-bold text-[#111111] mb-8">Land Reclamation Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 8) * 0.06 }}
                  className="aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <img
                    src={src}
                    alt={`Land reclamation ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Planning a Land Reclamation Project?"
        description="Our specialist team can advise on the most effective and sustainable approach for your site."
        primaryCTA={{ text: 'Contact Us', href: '/contact' }}
        showPhone={true}
        variant="dark"
      />
    </main>
  );
}
