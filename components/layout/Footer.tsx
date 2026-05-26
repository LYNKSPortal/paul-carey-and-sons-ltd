import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const services = [
    { name: 'Civil Engineering', href: '/civil-engineering' },
    { name: 'Plant Hire', href: '/plant-hire' },
    { name: 'Haulage & Transport', href: '/haulage' },
    { name: 'Landscaping & Ponds', href: '/landscaping' },
    { name: 'Land Reclamation', href: '/land-reclamation' },
    { name: 'Recycling', href: '/recycling' },
    { name: 'Demolition', href: '/demolition' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* ROW 1 — Logo + tagline */}
        <div className="flex flex-col items-center text-center mb-12 pb-12 border-b border-gray-800">
          <div className="bg-white rounded-xl px-6 py-3 mb-6 inline-block">
            <img
              src="/logo.png"
              alt="Paul Carey & Sons Ltd"
              className="h-14 w-auto object-contain"
            />
          </div>
          <p className="text-gray-400 max-w-2xl text-base leading-relaxed">
            Family-run since 1999, offering expert groundwork and civil engineering with 30+ years' experience. One of the Isle of Man's leading civil engineering contractors. Proud Construction IOM member.
          </p>
          <div className="flex items-center space-x-2 text-[#C1121F] mt-4">
            <div className="w-10 h-0.5 bg-[#C1121F]"></div>
            <span className="font-semibold text-sm">Est. 1999</span>
            <div className="w-10 h-0.5 bg-[#C1121F]"></div>
          </div>
        </div>

        {/* ROW 2 — Four columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-center sm:text-left">

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href} className="flex justify-center sm:justify-start">
                  <Link href={service.href} className="text-gray-400 hover:text-[#C1121F] transition-colors duration-200">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href} className="flex justify-center sm:justify-start">
                  <Link href={link.href} className="text-gray-400 hover:text-[#C1121F] transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 justify-center sm:justify-start">
                <MapPin className="text-[#C1121F] mt-1 flex-shrink-0" size={18} />
                <div className="text-gray-400 text-sm">
                  <p>Ballasalla Farm</p>
                  <p>Jurby West</p>
                  <p>Isle of Man, IM7 3AS</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Phone className="text-[#C1121F] flex-shrink-0" size={18} />
                <a href="tel:01624880581" className="text-gray-400 hover:text-[#C1121F] transition-colors text-sm">
                  01624 880581
                </a>
              </div>
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Mail className="text-[#C1121F] flex-shrink-0" size={18} />
                <a href="mailto:mail@pcsltd.im" className="text-gray-400 hover:text-[#C1121F] transition-colors text-sm">
                  mail@pcsltd.im
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4">Opening Hours</h4>
            <div className="flex items-start space-x-3 justify-center sm:justify-start">
              <Clock className="text-[#C1121F] mt-0.5 flex-shrink-0" size={18} />
              <div className="text-gray-400 text-sm space-y-0.5">
                <p>Mon: 9:00am – 5:00pm</p>
                <p>Tue: 9:00am – 5:00pm</p>
                <p>Wed: 9:00am – 5:00pm</p>
                <p>Thu: 9:00am – 5:00pm</p>
                <p>Fri: 9:00am – 5:00pm</p>
                <p>Sat: 10:00am – 2:00pm</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT BAR */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Paul Carey & Sons Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:text-[#C1121F] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#C1121F] transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
