'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function BlogPostPage() {
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
          src="/media/pexels-karolina-grabowska-7875834-min.jpg"
          alt="Understanding Self-Assessment Tax Returns"
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
            <div className="mb-4">
              <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold">
                Tax
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
              Understanding Self-Assessment Tax Returns: A Complete Guide
            </h1>
            <p className="text-lg text-gray-200">April 15, 2024 • 10 min read</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.article
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg mx-auto"
        >
          <p className="lead">
            Self-assessment tax returns can be complex and overwhelming, especially for those new to self-employment or running a business. In this comprehensive guide, we'll break down everything you need to know about self-assessment tax returns, from deadlines to deductions.
          </p>

          <h2>What is a Self-Assessment Tax Return?</h2>
          <p>
            A self-assessment tax return is a form that you need to complete and submit to HMRC if you're self-employed, a sole trader, or have additional income that isn't taxed through PAYE. It's your way of telling HMRC about your income and any tax reliefs you're entitled to.
          </p>

          <h2>Who Needs to Complete a Self-Assessment?</h2>
          <ul>
            <li>Self-employed sole traders</li>
            <li>Partners in a business partnership</li>
            <li>Company directors</li>
            <li>Individuals with multiple sources of income</li>
            <li>Those with income from property</li>
            <li>Individuals with significant investment income</li>
          </ul>

          <h2>Key Deadlines to Remember</h2>
          <p>
            Missing deadlines can result in penalties, so it's crucial to be aware of the important dates:
          </p>
          <ul>
            <li>31st October (paper returns)</li>
            <li>31st January (online returns)</li>
            <li>31st July (second payment on account)</li>
          </ul>

          <h2>What Records Should You Keep?</h2>
          <p>
            Maintaining accurate records is essential for completing your tax return correctly. You should keep:
          </p>
          <ul>
            <li>All business income and expenses</li>
            <li>Bank statements and receipts</li>
            <li>Mileage records</li>
            <li>Home office expenses</li>
            <li>Any other relevant documentation</li>
          </ul>

          <h2>Common Deductions and Allowances</h2>
          <p>
            Understanding what you can claim as business expenses is crucial for reducing your tax bill. Common deductions include:
          </p>
          <ul>
            <li>Office costs and equipment</li>
            <li>Travel and subsistence</li>
            <li>Professional fees and subscriptions</li>
            <li>Use of home as office</li>
            <li>Vehicle expenses</li>
          </ul>

          <h2>Tips for a Smooth Self-Assessment Process</h2>
          <ol>
            <li>Keep your records up to date throughout the year</li>
            <li>Set aside money for your tax bill</li>
            <li>Consider using accounting software</li>
            <li>Don't leave it until the last minute</li>
            <li>Seek professional help if needed</li>
          </ol>

          <h2>Need Help with Your Self-Assessment?</h2>
          <p>
            While it's possible to complete your self-assessment tax return yourself, many people find it beneficial to seek professional help. At QBO Cameron Partnership, we offer expert guidance and support throughout the process, ensuring your tax return is accurate and optimized for tax efficiency.
          </p>

          <div className="my-8 rounded-lg bg-blue-50 p-6">
            <h3 className="text-xl font-bold text-blue-900">Ready to Get Started?</h3>
            <p className="mt-2 text-blue-800">
              Book a free consultation with our team of experts to discuss your self-assessment needs and discover how we can help you navigate the process with confidence.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block rounded-full bg-blue-600 px-6 py-2 text-white transition-transform hover:scale-105"
            >
              Book Free Consultation
            </Link>
          </div>
        </motion.article>

        {/* Related Posts */}
        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="mb-8 text-2xl font-bold text-gray-900">Related Articles</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: '5 Essential Bookkeeping Tips for Small Businesses',
                image: '/media/pexels-a-darmel-7641842-min.jpg',
                slug: 'essential-bookkeeping-tips'
              },
              {
                title: 'Making Tax Digital: What You Need to Know',
                image: '/media/pexels-sora-shimazaki-5668835-min.jpg',
                slug: 'making-tax-digital-guide'
              }
            ].map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slug}`}
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
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
} 