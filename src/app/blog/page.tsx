'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const blogPosts = [
  {
    title: 'Making Tax Digital: What You Need to Know',
    excerpt: 'Stay compliant with HMRC\'s Making Tax Digital initiative. Learn about the requirements and how to prepare your business for digital tax reporting.',
    category: 'Tax',
    date: 'March 28, 2024',
    image: '/media/pexels-karolina-grabowska-7875834-min.jpg',
    slug: 'making-tax-digital-guide'
  },
  {
    title: 'Self-Employment: A Complete Guide to Getting Started',
    excerpt: 'Everything you need to know about setting up as a self-employed individual, from registering with HMRC to managing your finances effectively.',
    category: 'Business',
    date: 'March 21, 2024',
    image: '/media/pexels-a-darmel-7641842-min.jpg',
    slug: 'self-employment-guide'
  },
  {
    title: 'Understanding Your Tax Return: A Step-by-Step Guide',
    excerpt: 'A comprehensive guide to completing your tax return, including key deadlines, required documentation, and common pitfalls to avoid.',
    category: 'Tax',
    date: 'March 14, 2024',
    image: '/media/pexels-sora-shimazaki-5668835-min.jpg',
    slug: 'understanding-tax-return'
  },
  {
    title: 'Business Expenses: What Can You Claim?',
    excerpt: 'Learn about allowable business expenses and how to claim them correctly on your tax return to maximize your tax efficiency.',
    category: 'Business',
    date: 'March 7, 2024',
    image: '/media/pexels-august-de-richelieu-4427611-min.jpg',
    slug: 'business-expenses-guide'
  }
];

const categories = [
  'All',
  'Tax',
  'Bookkeeping',
  'Technology',
  'Business',
  'Personal Finance'
];

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/media/pexels-olly-3760067-min.jpg"
          alt="Blog and Resources"
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
            <h1 className="mb-4 text-5xl font-bold">Blog & Resources</h1>
            <p className="text-xl">Expert insights and guidance for your financial success</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Categories */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h2 className="mb-3 text-xl font-bold text-gray-900">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                    {post.title}
                  </Link>
                </h2>
                <p className="mb-4 text-gray-600">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Read More
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 rounded-lg bg-blue-600 p-8 text-center text-white"
        >
          <h2 className="mb-4 text-3xl font-bold">Stay Updated</h2>
          <p className="mb-8 text-lg">Subscribe to our newsletter for the latest financial insights and updates.</p>
          <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full px-6 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition-transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </motion.section>
      </div>
    </main>
  );
} 