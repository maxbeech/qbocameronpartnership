import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'], 
  variable: '--font-poppins' 
})

export const metadata: Metadata = {
  title: 'Bisley Base | Childcare & Preschool in Surrey',
  description: 'Bisley Base offers exceptional childcare and preschool services in Surrey, with breakfast clubs, after-school care, and holiday clubs in a nurturing environment.',
  keywords: 'Bisley Base, childcare Surrey, preschool Bisley, after school club, breakfast club, holiday club, Ofsted Outstanding, wraparound care',
  icons: {
    icon: '/media/favicon.png',
    apple: '/media/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>
          {children}
        </main>
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center mb-12">
              <Image
                src="/media/logo.svg"
                alt="The Cameron Partnership Logo"
                width={200}
                height={80}
                className="w-auto h-16 mb-4"
              />
              <h2 className="text-2xl font-bold text-emerald-400 mb-2">The Cameron Partnership</h2>
              <p className="text-gray-400 text-center max-w-2xl">
                A family-run firm of chartered accountants based in Chessington, providing expert accountancy services to small and medium-sized businesses since 1989.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-emerald-400">Location</h3>
                <p className="text-gray-400">Suite 37, Chessington Business Centre</p>
                <p className="text-gray-400">Cox Lane, Chessington</p>
                <p className="text-gray-400">Surrey KT9 1SD</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-emerald-400">Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/services/accountancy" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">Accountancy Services</Link></li>
                  <li><Link href="/services/tax-planning" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">Tax Planning</Link></li>
                  <li><Link href="/services/bookkeeping" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">Bookkeeping</Link></li>
                  <li><Link href="/services/payroll" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">Payroll Services</Link></li>
                  <li><Link href="/services/business-advisory" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">Business Advisory</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-emerald-400">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">About Us</Link></li>
                  <li><Link href="/resources/tax-tips" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">Tax Tips</Link></li>
                  <li><Link href="/resources/business-guides" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">Business Guides</Link></li>
                  <li><Link href="/resources/news" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">News & Updates</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-emerald-400">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400">
                    <span className="font-medium text-white">Phone:</span> 020 8390 8407
                  </li>
                  <li className="text-gray-400">
                    <span className="font-medium text-white">Email:</span> mail@cameronpartnership.co.uk
                  </li>
                  <li className="flex space-x-4 mt-6">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110" aria-label="Facebook">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} The Cameron Partnership. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors duration-300">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-emerald-400 transition-colors duration-300">Terms & Conditions</Link>
                <Link href="/sitemap.xml" className="hover:text-emerald-400 transition-colors duration-300">Sitemap</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 