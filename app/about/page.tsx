'use client';

import HeroSection from '@/components/ui/HeroSection';
import CTASection from '@/components/ui/CTASection';
import { motion } from 'framer-motion';
import { Shield, Users, Leaf, Award, Target, Heart } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Safety & Health',
      description: 'Committed to the highest standards of health, safety, and environmental responsibility on every project.',
    },
    {
      icon: Users,
      title: 'Family Values',
      description: 'A family-run business with deep community roots and a commitment to our local workforce.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Environmental responsibility through recycling, waste management, and sustainable practices.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: '25+ years of delivering high-quality civil engineering and groundwork solutions.',
    },
    {
      icon: Target,
      title: 'Reliability',
      description: 'Stability and longevity in service delivery, building lasting relationships with clients.',
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Supporting local communities and investing in the development of our staff.',
    },
  ];

  const timeline = [
    {
      year: '1999',
      title: 'Company Founded',
      description: 'Paul Carey establishes the business, focusing on groundwork and civil engineering.',
    },
    {
      year: '2005',
      title: 'Fleet Expansion',
      description: 'Significant investment in modern machinery and equipment to serve growing demand.',
    },
    {
      year: '2010',
      title: 'Service Diversification',
      description: 'Expanded services to include plant hire, haulage, and recycling operations.',
    },
    {
      year: '2015',
      title: 'Next Generation',
      description: 'Aaron Carey joins as Projects Director, ensuring family continuity and fresh expertise.',
    },
    {
      year: '2020',
      title: 'Major Projects',
      description: 'Delivered landmark civil engineering projects including bridge reconstructions and highway works.',
    },
    {
      year: 'Today',
      title: 'Leading Contractor',
      description: 'Over 55 staff members, modern fleet, and reputation as one of the Isle of Man\'s leading contractors.',
    },
  ];

  return (
    <main>
      <HeroSection
        title="About Paul Carey & Sons Ltd"
        subtitle="Our Story"
        description="A Manx family business delivering expert civil engineering and groundwork services since 1999."
        height="large"
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#C1121F] font-semibold text-sm uppercase tracking-wider mb-4">Who We Are</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
                Family-Run Excellence Since 1999
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Paul Carey & Sons Ltd are a Manx company based at Ballasalla Farm, Jurby. Over the last 25 years, 
                  the business has evolved into one of the Isle of Man's leading civil engineering contractors.
                </p>
                <p>
                  The company was founded by Paul Carey and remains family-run, with Aaron Carey overseeing daily 
                  operations as Projects Director. This family commitment ensures continuity, expertise, and a 
                  personal approach to every project.
                </p>
                <p>
                  We employ over 55 local staff and focus on stability, longevity, and sustainability. Our team 
                  includes experienced engineers, skilled operators, and dedicated support staff who share our 
                  commitment to excellence.
                </p>
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
                  src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070"
                  alt="Construction equipment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden mt-8">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076"
                  alt="Civil engineering"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#C1121F] font-semibold text-sm uppercase tracking-wider mb-4">Our Values</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F5F5F5] p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="bg-[#C1121F] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#C1121F] font-semibold text-sm uppercase tracking-wider mb-4">Our Journey</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
              25+ Years of Growth & Excellence
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#C1121F] hidden lg:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 bg-white p-8 rounded-xl shadow-lg">
                    <div className="text-[#C1121F] text-3xl font-bold mb-2">{item.year}</div>
                    <h3 className="text-2xl font-bold text-[#111111] mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="hidden lg:block w-8 h-8 bg-[#C1121F] rounded-full border-4 border-white shadow-lg flex-shrink-0" />
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#C1121F] font-semibold text-sm uppercase tracking-wider mb-4">Our Commitment</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
                Safety, Health & Environment
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  At Paul Carey & Sons Ltd, safety is our top priority. We maintain rigorous health and safety 
                  standards across all our operations, ensuring the wellbeing of our staff, clients, and the public.
                </p>
                <p>
                  Our environmental commitment extends beyond compliance. We actively promote recycling, waste 
                  reduction, and sustainable practices in all our projects. Our recycling operations help reduce 
                  the environmental impact of construction and support the Isle of Man's sustainability goals.
                </p>
                <p>
                  We invest heavily in staff training and development, ensuring our team has the skills and 
                  knowledge to deliver projects safely and efficiently while maintaining the highest quality standards.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2070"
                  alt="Safety equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title="Work With a Trusted Partner"
        description="Experience the difference of working with a family-run business committed to excellence."
        primaryCTA={{ text: 'Get a Quote', href: '/quote' }}
        secondaryCTA={{ text: 'Contact Us', href: '/contact' }}
        variant="dark"
      />
    </main>
  );
}
