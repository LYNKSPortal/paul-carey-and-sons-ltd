'use client';

import HeroSection from '@/components/ui/HeroSection';
import CTASection from '@/components/ui/CTASection';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const placeholderProjects = [
  { img: '/Civil-Engineering-001.jpg', category: 'Civil Engineering' },
  { img: '/Plant-Hire-003.jpg', category: 'Plant Hire' },
  { img: '/Haulage-Plant-Transport-004.jpg', category: 'Haulage & Transport' },
  { img: '/Landscaping-and-Ponds-001.jpg', category: 'Landscaping & Ponds' },
  { img: '/Land-Reclamation-003.jpg', category: 'Land Reclamation' },
  { img: '/Demolition-003.jpg', category: 'Demolition' },
];

export default function ProjectsPage() {
  return (
    <main>
      <HeroSection
        title="Our Projects"
        subtitle="Portfolio"
        description="A showcase of civil engineering, groundwork, and environmental projects across the Isle of Man."
        height="large"
        backgroundImage="/Civil-Engineering-003.jpg"
      />

      {/* COMING SOON BANNER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#C1121F]/10 text-[#C1121F] px-5 py-2 rounded-full font-semibold mb-6">
              <Clock size={18} />
              Coming Soon
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
              We're Uploading Our Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We are currently in the process of compiling and uploading our full project portfolio onto the website.
              Check back soon to see a full showcase of our work across the Isle of Man.
            </p>
          </motion.div>

          {/* PLACEHOLDER PROJECT CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {placeholderProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative h-72 rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={project.img}
                  alt={project.category}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/55" />

                {/* Coming soon badge */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
                  <span className="bg-[#C1121F] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2 text-white/80 font-semibold">
                    <Clock size={16} />
                    Coming Soon
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* BOTTOM MESSAGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F5F5F5] rounded-2xl p-10 md:p-14 text-center"
          >
            <p className="text-[#C1121F] font-semibold text-sm uppercase tracking-wider mb-4">In the Meantime</p>
            <h3 className="text-3xl font-bold text-[#111111] mb-4">Want to See What We Can Do?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Our full project gallery is on its way. In the meantime, browse our services or get in touch
              with our team to discuss your project requirements directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-[#C1121F] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#a00f1a] transition-colors"
              >
                View Our Services
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#111111] text-[#111111] px-8 py-3 rounded-xl font-bold hover:bg-[#111111] hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      <CTASection
        title="Ready to Discuss Your Project?"
        description="Our experienced team is on hand to help with any civil engineering or groundwork challenge across the Isle of Man."
        primaryCTA={{ text: 'Contact Us', href: '/contact' }}
        secondaryCTA={{ text: 'Our Services', href: '/services' }}
        variant="dark"
      />
    </main>
  );
}
