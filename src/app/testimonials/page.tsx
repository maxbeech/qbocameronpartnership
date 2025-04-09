'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers,
  faHandshake,
  faStar
} from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    name: 'Liz Weaver',
    role: 'Director - One Red Wall Ltd',
    quote: 'Cameron Partnership have provided invaluable accountancy services to us from the inception of our business, back in 2004. We have found Colin and his team extremely helpful, forward thinking and proactive in all aspects of the financial and tax side of our business. In addition to this, they have provided us with an extended service that includes bookkeeping, payroll and even legal services & estate planning.',
    rating: 5
  },
  {
    name: 'Daniel Shayler',
    role: 'Partner - The Shayler Partnership',
    quote: 'Cameron Partnership have been my accountants since 2007 and has been the perfect find for all of my accounting needs and support. Colin and his team place customer satisfaction at the top of his agenda and backed up with all of the knowledge you could ever to know for starting or running a business. Over the years any enquiry or concerns is swiftly dealt with and the support offered is second to none.',
    rating: 5
  },
  {
    name: 'Mark Aplin',
    role: 'Director - Kettonby Care Ltd',
    quote: 'Since being recommended to the Cameron Partnership three years ago, I have been impressed by the speed and quality of the service that I have received from all levels of their organisation. They are prompt, knowledgeable and extremely efficient in all aspects of their work.',
    rating: 5
  }
];

export default function TestimonialsPage() {
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
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/media/pexels-olly-3760067-min.jpg"
          alt="Client Testimonials"
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
            <h1 className="mb-4 text-5xl font-bold">Client Testimonials</h1>
            <p className="text-xl">See what our clients say about our services</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-[1.02]"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blue-100 opacity-50" />
              <div className="relative">
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
                <div className="mb-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.quote}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 rounded-lg bg-blue-600 p-8 text-center text-white"
        >
          <h2 className="mb-4 text-3xl font-bold">Ready to Experience Our Service?</h2>
          <p className="mb-8 text-lg">Join our satisfied clients and discover how we can help your business thrive.</p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white px-8 py-3 text-lg font-semibold text-blue-600 transition-transform hover:scale-105"
          >
            Book Free Consultation
          </Link>
        </motion.section>

        {/* Trust Indicators */}
        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">Why Clients Trust Us</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Expert Team',
                description: 'Our experienced professionals provide expert guidance and support.',
                icon: faUsers
              },
              {
                title: 'Personal Approach',
                description: 'We take the time to understand your unique needs and circumstances.',
                icon: faHandshake
              },
              {
                title: 'Proven Results',
                description: 'Consistently delivering excellent results for our clients.',
                icon: faStar
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="rounded-lg bg-gray-50 p-6 text-center"
              >
                <div className="mb-4 text-4xl text-primary-600">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
} 