'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '@/components/Hero';
import { 
  CalendarDaysIcon, 
  HeartIcon, 
  AcademicCapIcon, 
  UserGroupIcon,
  SparklesIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import Navigation from '@/components/Navigation';
import HeroSlider from '@/components/HeroSlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartLine, 
  faHandshake, 
  faBuilding, 
  faBook, 
  faCalculator, 
  faMoneyBillWave,
  faUsers,
  faMapMarkerAlt,
  faLightbulb,
  faLaptop
} from '@fortawesome/free-solid-svg-icons';

// Animation components
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | null;
  fullWidth?: boolean;
  className?: string;
  duration?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = null, 
  fullWidth = false,
  className = "",
  duration = 0.5
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Parallax image component
interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  imgClassName?: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  speed = 0.5,
  imgClassName = '',
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300 * speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0">
        <Image 
          src={src} 
          alt={alt} 
          fill 
          className={`object-cover ${imgClassName}`}
          priority
        />
      </motion.div>
    </div>
  );
};

// Services card component
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, delay = 0 }) => {
  return (
    <FadeIn delay={delay} direction="up" className="h-full">
      <motion.div 
        className="flex flex-col h-full bg-white rounded-xl shadow-sm hover:shadow-md p-6 transition-all duration-300 group"
        whileHover={{ y: -5 }}
      >
        <div className="p-3 bg-emerald-50 rounded-xl w-fit mb-4 text-emerald-600">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 flex-grow mb-4">{description}</p>
        <Link 
          href={link} 
          className="inline-flex items-center font-medium text-emerald-600 group-hover:text-emerald-700"
        >
          Learn more 
          <motion.span 
            className="ml-1 inline-block"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRightIcon className="w-4 h-4" />
          </motion.span>
        </Link>
      </motion.div>
    </FadeIn>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSlider />

      {/* Services Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Accounting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of accounting services tailored to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Self-Employed',
                description: 'Expert tax planning and accounting services for self-employed professionals.',
                icon: faChartLine,
                href: '/services/self-employed',
              },
              {
                title: 'Partnerships',
                description: 'Comprehensive accounting solutions for partnerships and joint ventures.',
                icon: faHandshake,
                href: '/services/partnerships',
              },
              {
                title: 'Limited Companies',
                description: 'Full-service accounting and tax planning for limited companies.',
                icon: faBuilding,
                href: '/services/limited-companies',
              },
              {
                title: 'Bookkeeping',
                description: 'Professional bookkeeping services to keep your finances in order.',
                icon: faBook,
                href: '/services/bookkeeping',
              },
              {
                title: 'Tax Planning',
                description: 'Strategic tax planning to maximize your business efficiency.',
                icon: faCalculator,
                href: '/services/tax-planning',
              },
              {
                title: 'Payroll Services',
                description: 'Comprehensive payroll management for businesses of all sizes.',
                icon: faMoneyBillWave,
                href: '/services/payroll',
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-primary-400 mb-4 text-3xl">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-400 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose QBO Cameron Partnership?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine professional expertise with a personal touch to deliver exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Family-Run Business',
                description: 'Personal service with a family touch, building long-term relationships.',
                icon: faUsers,
              },
              {
                title: 'Local Expertise',
                description: 'Deep understanding of the Chessington business landscape.',
                icon: faMapMarkerAlt,
              },
              {
                title: 'Proactive Approach',
                description: 'We anticipate your needs and provide timely advice.',
                icon: faLightbulb,
              },
              {
                title: 'Modern Technology',
                description: 'Using the latest accounting software for efficient service.',
                icon: faLaptop,
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="text-primary-400 mb-4 text-3xl">
                  <FontAwesomeIcon icon={feature.icon} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Book a free consultation with our team and discover how we can help your business thrive
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary-400 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200 font-medium text-lg"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
} 