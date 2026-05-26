'use client';

import HeroSection from '@/components/ui/HeroSection';
import CTASection from '@/components/ui/CTASection';
import { motion } from 'framer-motion';
import { Trees, Droplets, Shovel, Leaf, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Trees,
    title: 'Hard & Soft Landscaping',
    description: 'Patios, driveways, pathways, and planting — comprehensive landscaping combining hard surfaces with soft landscape design.',
  },
  {
    icon: Droplets,
    title: 'Pond & Water Feature Installation',
    description: 'From natural wildlife ponds to ornamental water features — expert design and construction for residential, commercial, and agricultural clients.',
  },
  {
    icon: Shovel,
    title: 'Ground Preparation & Drainage',
    description: 'Ensuring a solid foundation for any outdoor project — excavation, levelling, soil improvement, and drainage installation.',
  },
  {
    icon: Leaf,
    title: 'Turfing & Seeding',
    description: 'High-quality lawn installation and regeneration — turf laying, grass seeding, wildflower planting, and amenity grassland.',
  },
];

const galleryImages = [
  '/Landscaping-and-Ponds-001.jpg',
  '/Landscaping-and-Ponds-002.jpg',
  '/Landscaping-and-Ponds-003.jpg',
  '/Landscaping-and-Ponds-004.jpg',
  '/Landscaping-and-Ponds-005.jpg',
  '/Landscaping-and-Ponds-006.jpg',
];

export default function LandscapingPage() {
  return (
    <main>
      <HeroSection
        title="Landscaping & Ponds"
        subtitle="Home – Landscaping & Ponds"
        description="Transform your outdoor space with expert landscaping and pond construction from Paul Carey & Sons Ltd. We offer a complete range of services to enhance gardens, commercial spaces, and rural landscapes across the Isle of Man."
        primaryCTA={{ text: 'Contact Us', href: '/contact' }}
        backgroundImage="/Landscaping-and-Ponds-001.jpg"
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
                Expert Landscaping Across the Isle of Man
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                With our expertise in groundworks and landscaping, we deliver high-quality finishes that blend seamlessly with the surrounding environment. Whether you're looking for a stunning garden transformation, a peaceful pond, or functional outdoor space, we have the skills and equipment to bring your vision to life.
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
            <p className="text-[#C1121F] font-semibold text-sm uppercase tracking-wider mb-4">Our Work</p>
            <h3 className="text-3xl font-bold text-[#111111] mb-8">Landscaping Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <img
                    src={src}
                    alt={`Landscaping and ponds ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Transform Your Outdoor Space"
        description="Speak to our landscaping team about your project requirements across the Isle of Man."
        primaryCTA={{ text: 'Contact Us', href: '/contact' }}
        showPhone={true}
        variant="dark"
      />
    </main>
  );
}
