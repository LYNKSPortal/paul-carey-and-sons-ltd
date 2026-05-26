'use client';

import HeroSection from '@/components/ui/HeroSection';
import CTASection from '@/components/ui/CTASection';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const civilSections = [
  {
    id: 'river-works',
    title: 'River Works',
    intro: 'At Paul Carey & Sons Ltd, we offer expert civil engineering services across the Isle of Man, with a strong focus on river works and watercourse management. We deliver high-quality, sustainable solutions for commercial, industrial, and public sector projects involving rivers and waterways.',
    body: 'With a proven record in delivering robust, environmentally conscious river works, we ensure all projects are completed safely, on time, and in compliance with environmental regulations. Our experienced team works closely with local authorities and stakeholders to protect communities and enhance natural waterways.',
    services: [
      { title: 'Riverbank Stabilisation', desc: 'Preventing erosion through reinforced banks and natural stabilisation methods' },
      { title: 'Flood Defence & Management', desc: 'Construction of flood barriers, levees, and diversion channels' },
      { title: 'Culverts & Bridges', desc: 'Design and installation of culverts, footbridges, and vehicular crossings' },
      { title: 'Watercourse Maintenance', desc: 'Dredging, debris clearance, and flow regulation to protect local ecosystems' },
      { title: 'Environmental Enhancements', desc: 'Ecologically sensitive solutions to support biodiversity and water quality' },
    ],
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070',
      'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2031',
      'https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070',
    ],
  },
  {
    id: 'agricultural-pipelines',
    title: 'Agricultural Pipelines',
    intro: 'At Paul Carey & Sons Ltd, we provide specialist civil engineering services across the Isle of Man, including the design and installation of agricultural pipeline systems. We support farmers, landowners, and agricultural businesses with efficient, reliable infrastructure tailored to rural environments.',
    body: 'With extensive experience working in rural and agricultural settings, our team delivers high-performance pipeline systems that meet the unique demands of the farming sector. We ensure all works are completed safely, efficiently, and with minimal impact to the land.',
    services: [
      { title: 'Water Supply Networks', desc: 'Installation of underground water pipelines for livestock and irrigation' },
      { title: 'Slurry & Wastewater Systems', desc: 'Durable pipeline solutions for slurry transport and waste management' },
      { title: 'Field Drainage', desc: 'Improving land productivity through effective surface and subsurface drainage' },
      { title: 'Utility Ducting', desc: 'Installation of ducting for power, communications, and other essential services' },
      { title: 'Trenchless & Open-Cut Methods', desc: 'Minimising disruption to farmland with modern installation techniques' },
    ],
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2232',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070',
    ],
  },
  {
    id: 'highway-pipelines',
    title: 'Highway Pipelines',
    intro: 'At Paul Carey & Sons Ltd, we specialise in civil engineering services across the Isle of Man, including the installation of essential pipeline infrastructure within highway environments. We work with local authorities, contractors, and utility providers to deliver safe, efficient, and durable solutions beneath and alongside road networks.',
    body: 'With a strong focus on safety, compliance, and minimising traffic disruption, our experienced team delivers highway pipeline works to the highest industry standards. We ensure projects are completed efficiently, with careful coordination and full regulatory compliance.',
    services: [
      { title: 'Drainage Systems', desc: 'Installation of surface water drainage, culverts, and attenuation solutions' },
      { title: 'Utility Ducting', desc: 'Provision and installation of ducting for power, telecoms, and fibre optics' },
      { title: 'Water & Sewer Mains', desc: 'Trenching and laying of clean water and foul sewer pipelines' },
      { title: 'Road Crossings & Sleeving', desc: 'Safe and compliant installation of pipelines beneath highways' },
      { title: 'Reinstatement Works', desc: 'Full road surface restoration and compliance with highway specifications' },
    ],
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2086',
      'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2070',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070',
    ],
  },
  {
    id: 'bridge-reconstructions',
    title: 'Bridge Reconstructions',
    intro: 'The works comprise the removal and replacement of Pulrose River Bridge, service diversion and renewals, and associated highway reconstruction. A number of critical electrical and telecom services are present within the highway and within the existing deck structure — the maintenance and diversion of these is integral to the method of construction. To alleviate flood risk issues the height of the new bridge deck will be raised.',
    body: '',
    services: [
      { title: 'Replace existing bridge deck, beams and piers', desc: 'Remove central pier, modify existing abutments and river training walls to support raised deck level' },
      { title: 'Traffic management', desc: '' },
      { title: 'Service diversions', desc: 'Maintain and divert existing telecom, electric and water services within bridge structure; permanently divert gas main to alternative route' },
      { title: 'Temporary access', desc: 'Provide temporary access into bowl and riverside for duration of works' },
      { title: 'Retaining walls & structures', desc: 'Modify/install retaining walls to support raised carriageway levels' },
      { title: 'Carriageway reconstruction', desc: 'Reconstruct carriageway to accommodate raised deck level and reconstruct access to bowl and riverside industrial estate' },
      { title: 'Cycleway construction', desc: 'Minor highway alignment changes to allow addition of cycleway where practicable' },
      { title: 'Street lighting renewal', desc: 'Renew street lighting within work extents' },
    ],
    images: [
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070',
    ],
  },
  {
    id: 'highway-regeneration',
    title: 'Highway Regeneration',
    intro: 'The East Quay highway regeneration works run from Shore Road/Victoria Road opposite the pumping station on Peel Promenade, along the whole length of East Quay to Peel Harbour Bridge. The intention is that the regeneration project follows the current MUA scheme for the installation of rising mains along East Quay.',
    body: 'The proposed flood defence wall extends along East Quay from Station Place to The Peel Harbour Bridge. Flood protection along the remainder of East Quay to Weatherglass Corner / Victoria Road will be progressed at a later date.',
    services: [
      { title: 'Harbour-side road', desc: 'A harbour side road with a life of 40+ years, capable of supporting crane/HIAB operations and unrestricted quayside access' },
      { title: 'High-specification footway', desc: 'Construction of the land side footway to a high specification and aesthetic finish' },
      { title: 'Utility renewals', desc: 'Renewal of public utilities as required' },
      { title: 'Street & harbour lighting', desc: 'Street lighting to enhance the night time experience; harbour lighting to Client\'s Ports Division requirements' },
      { title: 'Flood defences', desc: 'Installation of flood defences that do not detract from the ambience of the harbour area' },
      { title: 'Natural stone paving', desc: 'Rojo Moncayo red sandstone to widened footways; reclaimed Peel sandstone for inside facing of flood wall' },
      { title: 'Carriageway reconstruction', desc: 'Carriageways reconstructed in standard black bitmac' },
      { title: 'Access & mooring infrastructure', desc: 'Access ladders, flood gates, mooring rings and bollards incorporated with the flood wall' },
    ],
    images: [
      'https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2070',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070',
    ],
  },
];

export default function CivilEngineeringPage() {
  return (
    <main>
      <HeroSection
        title="Civil Engineering"
        subtitle="Home – Civil Engineering"
        description="Expert civil engineering services across the Isle of Man — from river works and agricultural pipelines to bridge reconstruction and highway regeneration."
        primaryCTA={{ text: 'Get a Quote', href: '/quote' }}
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* JUMP LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 mb-20"
          >
            {civilSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="bg-[#F5F5F5] text-[#111111] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#C1121F] hover:text-white transition-colors"
              >
                {s.title}
              </a>
            ))}
          </motion.div>

          <div className="space-y-28">
            {civilSections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {/* SECTION HEADER */}
                <div className="mb-10">
                  <p className="text-[#C1121F] font-semibold text-sm uppercase tracking-wider mb-3">Civil Engineering</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">{section.title}</h2>
                  <p className="text-gray-700 leading-relaxed max-w-4xl">{section.intro}</p>
                  {section.body && <p className="text-gray-700 leading-relaxed max-w-4xl mt-4">{section.body}</p>}
                </div>

                {/* SERVICES LIST + IMAGE */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <ul className="space-y-4">
                    {section.services.map((s) => (
                      <li key={s.title} className="flex items-start gap-4 bg-[#F5F5F5] p-4 rounded-xl">
                        <CheckCircle className="text-[#C1121F] flex-shrink-0 mt-0.5" size={20} />
                        <div>
                          <span className="font-semibold text-[#111111]">{s.title}</span>
                          {s.desc && <p className="text-gray-600 text-sm mt-0.5">{s.desc}</p>}
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* GALLERY */}
                  <div className="space-y-4">
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                      <img src={section.images[0]} alt={section.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {section.images.slice(1).map((img, i) => (
                        <div key={i} className="aspect-video rounded-xl overflow-hidden shadow-lg">
                          <img src={img} alt={`${section.title} ${i + 2}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/quote"
                    className="inline-block bg-[#C1121F] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#a00f1a] transition-colors"
                  >
                    Get a Quote
                  </Link>
                </div>

                {index < civilSections.length - 1 && (
                  <div className="mt-20 border-t border-gray-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Start Your Civil Engineering Project"
        description="Talk to our expert team about your requirements across the Isle of Man."
        primaryCTA={{ text: 'Get a Quote', href: '/quote' }}
        showPhone={true}
        variant="dark"
      />
    </main>
  );
}
