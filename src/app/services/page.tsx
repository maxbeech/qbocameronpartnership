'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserTie,
  faHandshake,
  faBuilding,
  faBook,
  faChartLine,
  faMoneyBillWave,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: 'Self-Employed',
    description: 'Expert tax planning and accounting services for self-employed professionals. From £55+VAT per month.',
    icon: faUserTie,
    link: '/services/self-employed',
    image: '/media/pexels-sora-shimazaki-5668835-min.jpg',
    features: [
      'QuickBooks licence and support',
      'Auto Entry',
      'Monthly book-keeping',
      'VAT returns',
      'Annual business accounts',
      'Self-assessment tax return',
      'Basic tax planning advice'
    ]
  },
  {
    title: 'Partnerships',
    description: 'Comprehensive accounting solutions for partnerships and joint ventures. From £135+VAT per month.',
    icon: faHandshake,
    link: '/services/partnerships',
    image: '/media/pexels-karolina-grabowska-7875834-min.jpg',
    features: [
      'QuickBooks licence and support',
      'Auto Entry',
      'Monthly book-keeping',
      'VAT returns',
      'Annual business accounts',
      'Corporation tax return',
      'Confirmation statement',
      'Review meetings',
      'Payroll (up to 5 employees)',
      'Self-assessment tax return',
      'Basic tax planning advice'
    ]
  },
  {
    title: 'Limited Companies',
    description: 'Full-service accounting and tax planning for limited companies. From £235+VAT per month.',
    icon: faBuilding,
    link: '/services/limited-companies',
    image: '/media/pexels-august-de-richelieu-4427611-min.jpg',
    features: [
      'QuickBooks licence and support',
      'Auto Entry',
      'Monthly book-keeping',
      'VAT returns',
      'Annual business accounts',
      'Corporation tax return',
      'Confirmation statement',
      'Review meetings',
      'Payroll (up to 5 employees)',
      'Self-assessment tax return',
      'Basic tax planning advice'
    ]
  },
  {
    title: 'Limited Companies Business Complete',
    description: 'Comprehensive accounting and tax services for larger limited companies. From £295+VAT per month.',
    icon: faBuilding,
    link: '/services/limited-companies-complete',
    image: '/media/pexels-a-darmel-7641842-min.jpg',
    features: [
      'QuickBooks licence and support',
      'Auto Entry',
      'Monthly book-keeping',
      'VAT returns',
      'Annual business accounts',
      'Corporation tax return',
      'Confirmation statement',
      'Review meetings',
      'Payroll (up to 10 employees)',
      'Self-assessment tax return',
      'Basic tax planning advice'
    ]
  }
];

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/media/pexels-olly-3760067-min.jpg"
          alt="Business Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="mb-4 text-5xl font-bold">Our Services</h1>
            <p className="text-xl">Comprehensive accounting solutions for businesses of all sizes</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-2 text-3xl text-primary-600">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h3 className="mb-2 text-2xl font-bold">{service.title}</h3>
                <p className="mb-4 text-sm opacity-90">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-block rounded-full bg-white px-6 py-2 text-sm font-semibold text-gray-900 transition-transform hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services Section */}
        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 rounded-lg bg-gray-50 p-8"
        >
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Additional Services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Tax Planning',
                description: 'Strategic tax planning to minimize your tax liability and maximize returns.',
                icon: faChartLine
              },
              {
                title: 'Payroll Services',
                description: 'Comprehensive payroll management for businesses of all sizes.',
                icon: faMoneyBillWave
              },
              {
                title: 'Business Advisory',
                description: 'Expert advice to help your business grow and succeed.',
                icon: faLightbulb
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="rounded-lg bg-white p-6 shadow-md"
              >
                <div className="mb-4 text-3xl text-primary-600">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 rounded-lg bg-blue-600 p-8 text-center text-white"
        >
          <h2 className="mb-4 text-3xl font-bold">Need Help Choosing?</h2>
          <p className="mb-8 text-lg">Book a free consultation and let us guide you to the right solution for your business.</p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white px-8 py-3 text-lg font-semibold text-blue-600 transition-transform hover:scale-105"
          >
            Book Free Consultation
          </Link>
        </motion.section>
      </div>
    </main>
  );
} 