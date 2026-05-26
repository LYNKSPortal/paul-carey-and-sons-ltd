'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  showPhone?: boolean;
  backgroundImage?: string;
  variant?: 'dark' | 'light' | 'red';
}

export default function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  showPhone = true,
  backgroundImage,
  variant = 'dark',
}: CTASectionProps) {
  const variantClasses = {
    dark: 'bg-[#C1121F] text-white',
    light: 'bg-[#F5F5F5] text-[#111111]',
    red: 'bg-[#C1121F] text-white',
  };

  return (
    <section className={`relative py-20 ${backgroundImage ? '' : variantClasses[variant]}`}>
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-black/80" />
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{title}</h2>
          <p className="text-lg sm:text-xl mb-10 opacity-90">{description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className={`${
                  variant === 'light'
                    ? 'bg-[#C1121F] text-white hover:bg-[#a00f1a]'
                    : 'bg-white text-[#111111] hover:bg-gray-100'
                } px-8 py-4 rounded-lg transition-all duration-200 font-semibold text-lg flex items-center space-x-2 group`}
              >
                <span>{primaryCTA.text}</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className={`${
                  variant === 'light'
                    ? 'bg-[#111111] text-white hover:bg-[#1A1A1A]'
                    : 'border-2 border-white text-white hover:bg-white hover:text-[#111111]'
                } px-8 py-4 rounded-lg transition-all duration-200 font-semibold text-lg`}
              >
                {secondaryCTA.text}
              </Link>
            )}
            {showPhone && (
              <a
                href="tel:01624880581"
                className={`${
                  variant === 'light'
                    ? 'border-2 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white'
                    : 'border-2 border-white text-white hover:bg-white hover:text-[#111111]'
                } px-8 py-4 rounded-lg transition-all duration-200 font-semibold text-lg flex items-center space-x-2`}
              >
                <Phone size={20} />
                <span>01624 880581</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
