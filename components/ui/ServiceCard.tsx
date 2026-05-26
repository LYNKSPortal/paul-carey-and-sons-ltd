'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  backgroundImage?: string;
  delay?: number;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  backgroundImage,
  delay = 0,
  className = '',
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`group relative h-[400px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-[#C1121F]/90 group-hover:via-[#C1121F]/60 transition-all duration-500" />

      <div className="relative h-full flex flex-col justify-end p-8">
        <div className="mb-4">
          <Icon className="text-white" size={48} strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-200 mb-6 line-clamp-3">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center space-x-2 text-white font-semibold group-hover:translate-x-2 transition-transform duration-300"
        >
          <span>Learn More</span>
          <ArrowRight size={20} />
        </Link>
      </div>
    </motion.div>
  );
}
