'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers,
  faStar,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';

export default function AboutPage() {
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
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/media/pexels-rdne-7821915.jpg"
          alt="QBO Cameron Partnership Office"
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
            <h1 className="mb-4 text-5xl font-bold">About Us</h1>
            <p className="text-xl">Your Trusted Family-Run Accountancy Firm in Chessington</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Our Story Section */}
        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Our Story</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                The Cameron Partnership is a small independent firm of accountants based in Chessington. Established in 1989, the practise was set up to offer accountancy services to small and medium size businesses.
              </p>
              <p>
                The Cameron Partnership is a family run firm offering local businesses a personal 'one-stop service'. Whether you are self-employed, a partnership or a limited company we provide an economical and efficient service for your business.
              </p>
              <p>
                We are proud to say that most of our existing clients come through personal recommendation. To find out why people recommend us, contact us now for a free, without obligation, initial consultation.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/media/pexels-rdne-8293651.jpg"
                alt="Our Team at Work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Our Values Section */}
        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Personal Touch",
                description: "We treat every client as family, providing personalized attention and care.",
                icon: faUsers
              },
              {
                title: "Professional Excellence",
                description: "Committed to delivering the highest standards of service and expertise.",
                icon: faStar
              },
              {
                title: "Trust & Integrity",
                description: "Building lasting relationships through transparency and honesty.",
                icon: faHandshake
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105"
              >
                <div className="mb-4 text-4xl text-primary-600">
                  <FontAwesomeIcon icon={value.icon} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Why Choose Us</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Local Expertise</h3>
                  <p className="text-gray-600">Deep understanding of the local business landscape in Chessington and surrounding areas.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Family Values</h3>
                  <p className="text-gray-600">Personal attention and care that comes from being a family-run business.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Proven Track Record</h3>
                  <p className="text-gray-600">Years of experience helping businesses and individuals achieve their financial goals.</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/media/pexels-mikhail-nilov-6963857.jpg"
                alt="Our Office Environment"
                fill
                className="object-cover"
              />
            </div>
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
          <h2 className="mb-4 text-3xl font-bold">Ready to Work With Us?</h2>
          <p className="mb-8 text-lg">Experience the difference of working with a family-run accountancy firm that truly cares about your success.</p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white px-8 py-3 text-lg font-semibold text-blue-600 transition-transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </motion.section>
      </div>
    </main>
  );
} 