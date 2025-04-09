'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const slides = [
    {
      type: 'video',
      src: '/media/home_hero_slider/7841650-sd_960_540_30fps.mp4',
    },
    {
      type: 'video',
      src: '/media/home_hero_slider/7821854-sd_960_540_30fps.mp4',
    },
    {
      type: 'video',
      src: '/media/home_hero_slider/8298010-sd_960_540_25fps.mp4',
    },
    {
      type: 'video',
      src: '/media/home_hero_slider/7822017-sd_960_540_30fps.mp4',
    },
    {
      type: 'video',
      src: '/media/home_hero_slider/7822028-sd_960_540_30fps.mp4',
    },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const isVideo = (type: string) => type === 'video';

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark overlay */}
      <div className="absolute inset-0 bg-[url('/media/pattern.svg')] opacity-10 z-20" /> {/* Pattern overlay */}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          {isVideo(slides[currentSlide].type) ? (
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              {isClient && (
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="absolute w-full h-full object-cover"
                  style={{ objectPosition: 'center' }}
                >
                  <source src={slides[currentSlide].src} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              )}
            </div>
          ) : (
            <Image
              src={slides[currentSlide].src}
              alt="Hero slide"
              fill
              className="object-cover"
              priority
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Content overlay */}
      <div className="relative z-30 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Expert Accounting Solutions for Your Business
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-8"
          >
            Family-run accountancy firm providing personalized financial services in Chessington and surrounding areas
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="bg-primary-400 text-white px-8 py-3 rounded-full hover:bg-primary-500 transition-colors duration-200 font-medium text-lg"
            >
              Book a Free Consultation
            </a>
            <a
              href="/services"
              className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-full hover:bg-white/20 transition-colors duration-200 font-medium text-lg"
            >
              Explore Our Services
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider; 