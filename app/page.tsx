'use client';

import HeroSection from '@/components/ui/HeroSection';
import ServiceCard from '@/components/ui/ServiceCard';
import CTASection from '@/components/ui/CTASection';
import StatsSection from '@/components/ui/StatsSection';
import { motion } from 'framer-motion';
import { Truck, Hammer, Trees, Recycle, Building2, Wrench, HardHat, Shield, Users, Award, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      title: 'Civil Engineering',
      description: 'Expert civil engineering solutions including river works, bridge reconstruction, and highway regeneration.',
      icon: Building2,
      href: '/civil-engineering',
      img: '/Civil-Engineering-002.jpg',
    },
    {
      title: 'Plant Hire',
      description: 'High-quality, fully maintained machinery — including Hitachi 360 tracked machines — for groundwork and construction projects across the Isle of Man.',
      icon: Wrench,
      href: '/plant-hire',
      img: '/Plant-Hire-004.jpg',
    },
    {
      title: 'Haulage & Plant Transport',
      description: 'Professional heavy plant transport, aggregate haulage, and oversized load handling services across the Isle of Man.',
      icon: Truck,
      href: '/haulage',
      img: '/Haulage-Plant-Transport-003.jpg',
    },
    {
      title: 'Landscaping & Ponds',
      description: 'Hard and soft landscaping, pond construction, ground preparation, and drainage solutions.',
      icon: Trees,
      href: '/landscaping',
      img: '/Landscaping-and-Ponds-001.jpg',
    },
    {
      title: 'Land Reclamation',
      description: 'Specialist coastal and marine reclamation, brownfield redevelopment, and environmental improvements.',
      icon: HardHat,
      href: '/land-reclamation',
      img: '/Land-Reclamation-001.jpg',
    },
    {
      title: 'Recycling',
      description: 'Sustainable aggregate and green waste recycling, site waste management, and soil screening.',
      icon: Recycle,
      href: '/recycling',
      img: '/Recycling-001.jpg',
    },
    {
      title: 'Demolition',
      description: 'Safe and controlled demolition services including site clearance, soft strip, and land remediation.',
      icon: Hammer,
      href: '/demolition',
      img: '/Demolition-001.jpg',
    },
  ];

  const stats = [
    { value: 25, label: 'Years in Business', suffix: '+' },
    { value: 55, label: 'Local Staff Employed', suffix: '+' },
    { value: 30, label: 'Years\' Experience', suffix: '+' },
    { value: 100, label: 'Manx Workforce', suffix: '%' },
  ];

  const shePoints = [
    {
      icon: Shield,
      title: 'Safety & Health',
      description: 'We strive to achieve the highest standards of safety and health for all employees, contractors, and members of the public — eliminating injury resulting from unsafe activities or poor operating practices.',
    },
    {
      icon: Leaf,
      title: 'Environmental Responsibility',
      description: 'Constantly working to minimise the impact of our operations on the environment through efficient plant management, effective maintenance programmes, and innovative engineering solutions.',
    },
    {
      icon: Award,
      title: 'Modern Fleet Standards',
      description: 'Our entire fleet meets minimum European Standards for emissions, reducing our environmental impact and proactively reducing our carbon footprint.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Over the years our passionate and loyal local team has driven positive outcomes for the community we live and operate in — through direct support, sponsorship, and charitable donations.',
    },
  ];

  return (
    <main>
      {/* HERO */}
      <HeroSection
        title="Welcome to Paul Carey & Sons"
        subtitle="Isle of Man Civil Engineering Specialists"
        description="Family-run since 1999. One of the Island's leading civil engineering contractors — diverse, dynamic, and driven by an ethos of social responsibility."
        primaryCTA={{ text: 'Contact Us', href: '/quote' }}
        secondaryCTA={{ text: 'Our Services', href: '/services' }}
        backgroundImage="/home-hero-background.jpg"
      />

      {/* ABOUT US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/homepage-img-001.jpg"
                  alt="Paul Carey & Sons Scania HIAB truck on site"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <p className="text-[#C1121F] font-semibold text-sm uppercase tracking-wider">About Us</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight">
                One of the Island's Leading Civil Engineering Contractors
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Paul Carey and Sons Ltd are a Manx company based at Ballasalla Farm, Jurby. Over the last two and a half decades we have evolved into one of the Island's leading civil engineering contractors, establishing ourselves as a diverse, dynamic, multi-disciplinary civil engineering company with an enviable reputation and ethos of social responsibility.
              </p>
              <p className="text-gray-700 leading-relaxed">
                PCS was started by Paul as a family business approximately 25 years ago. Whilst still under his sole ownership, the daily activities are now predominantly overseen by his son Aaron Carey in his capacity as Projects Director, closely supported by his management team.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We currently directly employ over 55 staff, all of whom live and contribute to our local Manx economy. Stability and longevity are at the core of our business philosophy, which we strive to achieve for the benefit of our staff and local community.
              </p>
              <Link
                href="/about"
                className="inline-block bg-[#C1121F] text-white px-8 py-3 rounded-lg hover:bg-[#a00f1a] transition-colors font-semibold"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <StatsSection stats={stats} variant="dark" />

      {/* SERVICES */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#C1121F] font-semibold text-sm uppercase tracking-wider mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From civil engineering and demolition to plant hire and recycling, we deliver expert services 
              across all aspects of groundwork and construction across the Isle of Man.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.href}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                backgroundImage={service.img}
                delay={index * 0.08}
                className={index === services.length - 1 ? 'lg:col-span-3' : ''}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block border-2 border-[#111111] text-[#111111] px-8 py-3 rounded-lg hover:bg-[#111111] hover:text-white transition-colors font-semibold"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* SAFETY HEALTH & ENVIRONMENTAL */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <p className="text-[#C1121F] font-semibold text-sm uppercase tracking-wider">Our Commitment</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight">
                Safety, Health & Environmental
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At Paul Carey & Sons our team aims to achieve and maintain the highest standards of Safety, Health & Environmental (SHE) performance, and takes a committed approach to managing the impact of our operation on the environment and within the communities in which we operate.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We strive to achieve the highest standards of safety and health for all employees, contractors, and members of the public and all those who may be affected by our works, thus seeking to eliminate injury or ill health resulting from unsafe activities or poor operating practices.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our policy is to proactively manage SHE issues, aiming to set the standard in our field, encouraging best practice ideas to ensure continuous improvement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/homepage-img-002.jpg"
                  alt="Hitachi excavators working at night"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {shePoints.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F5F5F5] p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="bg-[#C1121F] w-14 h-14 rounded-lg flex items-center justify-center mb-5">
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANT & MACHINERY */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <p className="text-[#C1121F] font-semibold text-sm uppercase tracking-wider">Our Fleet</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Plant & Machinery
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Over the years we have invested considerably in high quality, high-specification plant and equipment, including Scania wagons and Hitachi 360 tracked machines.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our modern fleet of vehicles, plant and machinery are complex pieces of equipment fitted with the latest technologies. They require specialist maintenance undertaken by our own highly skilled, qualified in-house mechanical & electrical engineers — trained to the highest standards to work on Hitachi, Scania, Thwaites, and Bomag machinery.
              </p>
              <p className="text-gray-300 leading-relaxed">
                As a business we continually strive to provide cost effective training and maintenance solutions, embracing the latest technologies to meet current standards and requirements.
              </p>
              <Link
                href="/plant-hire"
                className="inline-block bg-[#C1121F] text-white px-8 py-3 rounded-lg hover:bg-[#a00f1a] transition-colors font-semibold"
              >
                View Plant Hire
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/homepage-img-003.jpg"
                  alt="Paul Carey & Sons plant and machinery on site"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Start Your Project?"
        description="Get in touch with our expert team today for a free consultation and competitive quote."
        primaryCTA={{ text: 'Contact Us', href: '/quote' }}
        secondaryCTA={{ text: 'Contact Us', href: '/contact' }}
        showPhone={true}
        variant="red"
      />
    </main>
  );
}
