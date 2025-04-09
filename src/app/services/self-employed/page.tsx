'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFileLines,
  faBook,
  faChartLine,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    title: 'Self Assessment Tax Returns',
    description: 'Expert preparation and submission of your self-assessment tax returns, ensuring compliance and maximizing your tax efficiency.',
    icon: faFileLines
  },
  {
    title: 'Bookkeeping',
    description: 'Professional bookkeeping services to keep your financial records organized and up-to-date.',
    icon: faBook
  },
  {
    title: 'Tax Planning',
    description: 'Strategic tax planning to help you minimize your tax liability and maximize your take-home pay.',
    icon: faChartLine
  },
  {
    title: 'Business Advisory',
    description: 'Expert advice on business structure, growth strategies, and financial management.',
    icon: faLightbulb
  }
];

const benefits = [
  'Peace of mind knowing your taxes are handled correctly',
  'More time to focus on growing your business',
  'Expert advice on tax efficiency and compliance',
  'Regular updates on your financial position',
  'Access to professional accounting software',
  'Support with HMRC communications'
];

export default function SelfEmployedPage() {
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
          src="/media/pexels-sora-shimazaki-5668835-min.jpg"
          alt="Self-Employed Accounting Services"
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
            <h1 className="mb-4 text-5xl font-bold">Self-Employed Services</h1>
            <p className="text-xl">Expert accounting solutions for self-employed professionals</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                As a self-employed professional, you need an accountant who understands your unique challenges and can help you navigate the complexities of running your own business. At QBO Cameron Partnership, we specialize in providing comprehensive accounting services tailored specifically for self-employed individuals.
              </p>
              <p>
                Our team of experienced accountants will handle all aspects of your financial affairs, from bookkeeping and tax returns to business advisory services, allowing you to focus on what you do best - running your business.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/media/pexels-karolina-grabowska-7875834-min.jpg"
                alt="Self-Employed Professional"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Features Grid */}
        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="rounded-lg bg-white p-6 shadow-lg"
              >
                <div className="mb-4 text-4xl text-primary-600">
                  <FontAwesomeIcon icon={feature.icon} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20 rounded-lg bg-gray-50 p-8"
        >
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Why Choose Our Self-Employed Services?</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="flex items-start space-x-4"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                  ✓
                </div>
                <p className="text-lg text-gray-600">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="rounded-lg bg-blue-600 p-8 text-center text-white"
        >
          <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mb-8 text-lg">Book a free consultation to discuss how we can help your self-employed business thrive.</p>
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