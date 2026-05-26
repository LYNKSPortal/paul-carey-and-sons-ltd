'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  backgroundImage?: string;
  height?: 'full' | 'large' | 'medium';
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage = '/images/hero-bg.jpg',
  height = 'full',
}: HeroSectionProps) {
  const heightClasses = {
    full: 'h-screen',
    large: 'h-[600px] md:h-[700px]',
    medium: 'h-[400px] md:h-[500px]',
  };

  return (
    <div className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[#C1121F] font-semibold text-sm md:text-base uppercase tracking-wider mb-4"
            >
              {subtitle}
            </motion.p>
          )}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className="bg-[#C1121F] text-white px-8 py-4 rounded-lg hover:bg-[#a00f1a] transition-all duration-200 font-semibold text-lg flex items-center space-x-2 group"
                >
                  <span>{primaryCTA.text}</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="bg-white text-[#111111] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg"
                >
                  {secondaryCTA.text}
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
