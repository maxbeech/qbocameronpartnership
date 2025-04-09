'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaPinterestP, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    },
  };

  const footerAnimationDelayed = (delay: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.5,
      },
    },
  });

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnimation}
          >
            <h3 className="text-xl font-serif font-medium mb-6">The Cameron Partnership</h3>
            <p className="text-gray-300 mb-4">
              A family-run firm of chartered accountants based in Chessington, providing expert accountancy services to small and medium-sized businesses since 1989.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
          
          {/* Column 2: Services */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnimationDelayed(0.2)}
          >
            <h3 className="text-xl font-serif font-medium mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/accountancy" className="text-gray-300 hover:text-accent transition-colors">
                  Accountancy Services
                </Link>
              </li>
              <li>
                <Link href="/services/tax-planning" className="text-gray-300 hover:text-accent transition-colors">
                  Tax Planning
                </Link>
              </li>
              <li>
                <Link href="/services/bookkeeping" className="text-gray-300 hover:text-accent transition-colors">
                  Bookkeeping
                </Link>
              </li>
              <li>
                <Link href="/services/payroll" className="text-gray-300 hover:text-accent transition-colors">
                  Payroll Services
                </Link>
              </li>
              <li>
                <Link href="/services/business-advisory" className="text-gray-300 hover:text-accent transition-colors">
                  Business Advisory
                </Link>
              </li>
            </ul>
          </motion.div>
          
          {/* Column 3: Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnimationDelayed(0.3)}
          >
            <h3 className="text-xl font-serif font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/resources/tax-tips" className="text-gray-300 hover:text-accent transition-colors">
                  Tax Tips
                </Link>
              </li>
              <li>
                <Link href="/resources/business-guides" className="text-gray-300 hover:text-accent transition-colors">
                  Business Guides
                </Link>
              </li>
              <li>
                <Link href="/resources/news" className="text-gray-300 hover:text-accent transition-colors">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          
          {/* Column 4: Contact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnimationDelayed(0.4)}
          >
            <h3 className="text-xl font-serif font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 text-accent mr-3 mt-1" />
                <span className="text-gray-300">
                  Suite 37, Chessington Business Centre<br />
                  Cox Lane, Chessington<br />
                  Surrey KT9 1SD
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="h-4 w-4 text-accent mr-3" />
                <a href="tel:+442083908407" className="text-gray-300 hover:text-accent transition-colors">
                  020 8390 8407
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-4 w-4 text-accent mr-3" />
                <a href="mailto:mail@cameronpartnership.co.uk" className="text-gray-300 hover:text-accent transition-colors">
                  mail@cameronpartnership.co.uk
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Opening Hours</h4>
              <p className="text-gray-300 text-sm">
                Monday - Friday: 9:00am - 5:00pm<br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} The Cameron Partnership. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Designed with <span className="text-accent">♥</span> in Surrey
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 