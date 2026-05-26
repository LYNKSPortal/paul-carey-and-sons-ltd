'use client';

import HeroSection from '@/components/ui/HeroSection';
import CTASection from '@/components/ui/CTASection';
import { motion } from 'framer-motion';
import { HardHat, Users, Leaf, Award, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    icon: HardHat,
    title: 'Safety First',
    description: 'We hold ourselves to the highest safety standards on every site, every day.',
  },
  {
    icon: Users,
    title: 'A Team Built on Trust',
    description: 'Over 55 local staff who take pride in doing excellent work and supporting each other.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Thinking',
    description: 'We operate with long-term responsibility to the land, the community, and the environment.',
  },
  {
    icon: Award,
    title: 'Quality & Craft',
    description: 'We invest in our people and our equipment to deliver the best results on every project.',
  },
];

export default function CareersPage() {
  return (
    <main>
      <HeroSection
        title="Careers"
        subtitle="Join the Team"
        description="Be part of one of the Isle of Man's leading civil engineering contractors."
        height="large"
        backgroundImage="/Haulage-Plant-Transport-003.jpg"
      />

      {/* NO VACANCIES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#C1121F] font-semibold text-sm uppercase tracking-wider mb-4">Current Vacancies</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
                No Positions Available Right Now
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  At this moment in time we are not actively recruiting. However, we are always keen to
                  hear from talented, hard-working individuals who share our values.
                </p>
                <p>
                  If you believe you'd be a great fit for our team, get in touch and tell us about yourself.
                  When a position becomes available that suits your skills and experience, we will be in touch.
                </p>
                <p>
                  We are a family-run business built on trust, dedication, and craft — and we only bring
                  people in who genuinely share that ethos.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:mail@pcsltd.im"
                  className="inline-flex items-center gap-2 bg-[#C1121F] text-white px-6 py-3 rounded-lg hover:bg-[#a00f1a] transition-colors font-semibold"
                >
                  <Mail size={18} />
                  mail@pcsltd.im
                </a>
                <a
                  href="tel:01624880581"
                  className="inline-flex items-center gap-2 border-2 border-[#111111] text-[#111111] px-6 py-3 rounded-lg hover:bg-[#111111] hover:text-white transition-colors font-semibold"
                >
                  <Phone size={18} />
                  01624 880581
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden">
                <img
                  src="/Civil-Engineering-002.jpg"
                  alt="Paul Carey & Sons team on site"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden mt-8">
                <img
                  src="/Plant-Hire-004.jpg"
                  alt="Heavy plant machinery on site"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* WHY WORK WITH US */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[#C1121F] font-semibold text-sm uppercase tracking-wider mb-4">Why Paul Carey & Sons</p>
            <h2 className="text-4xl font-bold text-[#111111]">What We Stand For</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F5F5F5] rounded-2xl p-8"
              >
                <div className="bg-[#C1121F] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* REGISTER INTEREST PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#111111] rounded-2xl p-10 md:p-14 text-center text-white"
          >
            <p className="text-[#C1121F] font-semibold text-sm uppercase tracking-wider mb-4">Stay in the Loop</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Interested in Working With Us?</h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Drop us an email introducing yourself and letting us know what you do. We keep all expressions of
              interest on file — when something comes up that suits you, you'll be the first to hear from us.
            </p>
            <a
              href="mailto:mail@pcsltd.im?subject=Career%20Enquiry"
              className="inline-flex items-center gap-2 bg-[#C1121F] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#a00f1a] transition-colors text-lg"
            >
              <Mail size={20} />
              Send Your Details
            </a>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Want to Know More About Us?"
        description="Learn about our history, values, and the team behind Paul Carey & Sons Ltd."
        primaryCTA={{ text: 'About Us', href: '/about' }}
        secondaryCTA={{ text: 'Contact Us', href: '/contact' }}
        variant="dark"
      />
    </main>
  );
}
