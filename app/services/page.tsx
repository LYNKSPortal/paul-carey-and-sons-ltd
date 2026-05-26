'use client';

import HeroSection from '@/components/ui/HeroSection';
import CTASection from '@/components/ui/CTASection';
import { motion } from 'framer-motion';
import { Building2, Wrench, Truck, Trees, HardHat, Recycle, Hammer, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Civil Engineering',
    description: 'Comprehensive civil engineering services including river works, bridge reconstructions, highway regeneration, and agricultural pipelines.',
    icon: Building2,
    href: '/civil-engineering',
    img: '/Civil-Engineering-001.jpg',
    features: ['River Works', 'Bridge Reconstruction', 'Highway Regeneration', 'Agricultural Pipelines'],
  },
  {
    title: 'Plant Hire',
    description: 'High-quality, fully maintained machinery available for hire across the Isle of Man for all groundwork and construction projects.',
    icon: Wrench,
    href: '/plant-hire',
    img: '/Plant-Hire-006.jpg',
    features: ['Excavators', 'Dumpers & Rollers', 'Compact Loaders', 'Site Clearance Equipment'],
  },
  {
    title: 'Haulage & Plant Transport',
    description: 'Professional transport solutions for heavy plant, aggregates, and oversized loads across the Isle of Man.',
    icon: Truck,
    href: '/haulage',
    img: '/Haulage-Plant-Transport-005.jpg',
    features: ['Heavy Plant Transport', 'Aggregate Haulage', 'Site-to-Site Relocation', 'Oversized Load Handling'],
  },
  {
    title: 'Landscaping & Ponds',
    description: 'Expert hard and soft landscaping, pond construction, water features, ground preparation, and drainage.',
    icon: Trees,
    href: '/landscaping',
    img: '/Landscaping-and-Ponds-003.jpg',
    features: ['Hard & Soft Landscaping', 'Pond Construction', 'Ground Preparation', 'Turfing & Seeding'],
  },
  {
    title: 'Land Reclamation',
    description: 'Specialist coastal, marine, and brownfield land reclamation including flood risk management and soil stabilisation.',
    icon: HardHat,
    href: '/land-reclamation',
    img: '/Land-Reclamation-005.jpg',
    features: ['Coastal Reclamation', 'Brownfield Redevelopment', 'Flood Risk Management', 'Soil Stabilisation'],
  },
  {
    title: 'Recycling',
    description: 'Sustainable recycling and waste management including aggregate recycling, green waste, and site waste management.',
    icon: Recycle,
    href: '/recycling',
    img: '/Recycling-003.jpg',
    features: ['Aggregate Recycling', 'Green Waste', 'Site Waste Management', 'Muck Away & Soil Screening'],
  },
  {
    title: 'Demolition',
    description: 'Safe and controlled demolition from full structural demolition to soft strip and site clearance, with recycling and remediation.',
    icon: Hammer,
    href: '/demolition',
    img: '/Demolition-003.jpg',
    features: ['Full Demolition', 'Partial Demolition', 'Soft Strip', 'Site Clearance'],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <HeroSection
        title="Our Services"
        subtitle="What We Do"
        description="Comprehensive civil engineering and groundwork services across the Isle of Man."
        height="large"
        backgroundImage="/Haulage-Plant-Transport-002.jpg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#C1121F] font-semibold text-sm uppercase tracking-wider mb-4">Expertise</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
              Comprehensive Civil Engineering Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From groundwork to major infrastructure, we deliver expert services across all areas of civil engineering and construction.
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 !== 0 ? 'md:order-2' : ''}>
                  <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className={index % 2 !== 0 ? 'md:order-1' : ''}>
                  <div className="bg-[#C1121F] w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-[#111111] mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-[#C1121F] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 bg-[#111111] text-white px-6 py-3 rounded-lg hover:bg-[#C1121F] transition-colors font-semibold group"
                  >
                    <span>Explore {service.title}</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Discuss Your Project?"
        description="Our expert team is ready to help with any civil engineering or groundwork challenge."
        primaryCTA={{ text: 'Get a Free Quote', href: '/quote' }}
        secondaryCTA={{ text: 'Contact Us', href: '/contact' }}
        variant="dark"
      />
    </main>
  );
}
