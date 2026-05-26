'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
      >
        {/* MAIN NAV ROW */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-28">
            <Link href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Paul Carey & Sons Ltd"
                className="h-auto w-40 lg:w-[300px] object-contain"
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-[#111111] hover:text-[#C1121F] transition-colors font-medium">Home</Link>
              <Link href="/about" className="text-[#111111] hover:text-[#C1121F] transition-colors font-medium">About</Link>
              <Link href="/services" className="text-[#111111] hover:text-[#C1121F] transition-colors font-medium">Services</Link>
              <Link href="/projects" className="text-[#111111] hover:text-[#C1121F] transition-colors font-medium">Projects</Link>
              <Link href="/careers" className="text-[#111111] hover:text-[#C1121F] transition-colors font-medium">Careers</Link>
              <Link
                href="/contact"
                className="bg-[#C1121F] text-white px-6 py-2.5 rounded-lg hover:bg-[#a00f1a] transition-colors font-semibold"
              >
                Contact Us
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-[#111111] p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* RED ACCENT STRIPE */}
        <div className="w-full bg-[#C1121F]" style={{ height: '8px' }} />
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/60" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-[#1A1A1A] shadow-2xl overflow-y-auto">
              <div className="pt-24 px-6 pb-10">
                <div className="flex flex-col space-y-1">
                  {[
                    { href: '/', label: 'Home' },
                    { href: '/about', label: 'About' },
                    { href: '/services', label: 'All Services' },
                    { href: '/projects', label: 'Projects' },
                    { href: '/careers', label: 'Careers' },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white text-lg py-3 hover:text-[#C1121F] transition-colors font-medium border-b border-gray-800">
                      {link.label}
                    </Link>
                  ))}
                  <div className="pt-2 pb-1">
                    <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-2">Services</p>
                  </div>
                  {[
                    { href: '/civil-engineering', label: 'Civil Engineering' },
                    { href: '/plant-hire', label: 'Plant Hire' },
                    { href: '/haulage', label: 'Haulage & Transport' },
                    { href: '/landscaping', label: 'Landscaping & Ponds' },
                    { href: '/land-reclamation', label: 'Land Reclamation' },
                    { href: '/recycling', label: 'Recycling' },
                    { href: '/demolition', label: 'Demolition' },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 py-2 hover:text-[#C1121F] transition-colors pl-3 border-b border-gray-800/50">
                      {link.label}
                    </Link>
                  ))}
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white text-lg py-3 hover:text-[#C1121F] transition-colors font-medium border-b border-gray-800">
                    Contact
                  </Link>
                  <div className="pt-4">
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}
                      className="block bg-[#C1121F] text-white px-6 py-3 rounded-lg hover:bg-[#a00f1a] transition-colors font-semibold text-center">
                      Contact Us
                    </Link>
                  </div>
                  <div className="pt-6 border-t border-gray-700 mt-4">
                    <a href="tel:01624880581" className="flex items-center space-x-3 text-white hover:text-[#C1121F] transition-colors">
                      <Phone size={20} />
                      <span>01624 880581</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href="tel:01624880581"
        className="fixed bottom-6 right-6 z-40 lg:hidden bg-[#C1121F] text-white p-4 rounded-full shadow-lg hover:bg-[#a00f1a] transition-colors"
        aria-label="Call us"
      >
        <Phone size={24} />
      </a>
    </>
  );
}
