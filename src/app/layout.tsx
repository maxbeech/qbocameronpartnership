'use client';

import { Inter, Poppins } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        {/* Navigation */}
        <nav
          className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/media/logo.svg"
                  alt="QBO Cameron Partnership"
                  width={200}
                  height={50}
                  className="h-12 w-auto"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex md:items-center md:space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${
                      pathname === item.href
                        ? 'text-blue-600'
                        : isScrolled
                        ? 'text-gray-900 hover:text-blue-600'
                        : 'text-white hover:text-blue-200'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
                >
                  Book Consultation
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden"
              >
                <div className="space-y-1 bg-white px-2 pb-3 pt-2 shadow-lg">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block rounded-md px-3 py-2 text-base font-medium ${
                        pathname === item.href
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-900 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    className="block rounded-md bg-blue-600 px-3 py-2 text-center text-base font-medium text-white hover:bg-blue-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book Consultation
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Main Content */}
        {children}

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-4">
              {/* Company Info */}
              <div>
                <Image
                  src="/media/logo.svg"
                  alt="QBO Cameron Partnership"
                  width={200}
                  height={50}
                  className="mb-4 h-12 w-auto brightness-0 invert"
                />
                <p className="text-sm text-gray-400">
                  Expert accounting services for businesses and individuals in Chessington and surrounding areas.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                <ul className="space-y-2">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/services/self-employed"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Self-Employed
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/partnerships"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Partnerships
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/limited-companies"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Limited Companies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/bookkeeping"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Bookkeeping
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>123 Business Street</li>
                  <li>Chessington, Surrey</li>
                  <li>KT9 1AB</li>
                  <li>020 1234 5678</li>
                  <li>info@qbocameronpartnership.co.uk</li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 border-t border-gray-800 pt-8">
              <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                <p className="text-sm text-gray-400">
                  © {new Date().getFullYear()} QBO Cameron Partnership. All rights reserved.
                </p>
                <div className="flex space-x-6">
                  <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 