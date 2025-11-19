'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
  {/* Main Footer Content */}
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
    <div className="grid md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
      {/* Brand Section */}
      <div className="flex flex-col">
        <h3 className="text-white text-xl font-bold mb-6">Retail Business</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Empowering retail excellence through innovative solutions and trusted expertise.
        </p>
        <div className="flex gap-4 mt-6">
          <a href="#facebook" className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300">
            <svg fill="currentColor" viewBox="0 0 24 24" aria-label="Facebook">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#twitter" className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300">
            <svg fill="currentColor" viewBox="0 0 24 24" aria-label="Twitter">
              <path d="M23.953 4.57a10 10 0 002.856-3.51 10 10 0 01-2.866.86c1.05-.649 1.855-1.676 2.236-2.898a10 10 0 01-3.177 1.218 5 5 0 00-8.514 4.56 14.202 14.202 0 01-10.3-5.147 5 5 0 001.549 6.659 5.002 5.002 0 01-2.266-.616v.06a5 5 0 004.008 4.905 5 5 0 01-2.228.084 5.007 5.007 0 004.67 3.478 10.02 10.02 0 01-6.177 2.13c-.398 0-.79-.023-1.175-.067a14.201 14.201 0 007.713 2.262c9.256 0 14.336-7.666 14.336-14.322 0-.218-.005-.435-.015-.649a10.207 10.207 0 002.506-2.605z"/>
            </svg>
          </a>
          <a href="#instagram" className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300">
            <svg fill="currentColor" viewBox="0 0 24 24" aria-label="Instagram">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
            </svg>
          </a>
          <a href="#linkedin" className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300">
            <svg fill="currentColor" viewBox="0 0 24 24" aria-label="LinkedIn">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-col">
        <h4 className="text-white text-lg font-semibold mb-6">Services</h4>
        <ul className="space-y-2">
          <li>
            <a href="#inventory" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Inventory Management
            </a>
          </li>
          <li>
            <a href="#pos" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              POS Systems
            </a>
          </li>
          <li>
            <a href="#analytics" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Sales Analytics
            </a>
          </li>
          <li>
            <a href="#crm" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Customer Management
            </a>
          </li>
          <li>
            <a href="#integration" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              E-Commerce Integration
            </a>
          </li>
        </ul>
      </div>

      {/* Company Section */}
      <div className="flex flex-col">
        <h4 className="text-white text-lg font-semibold mb-6">Company</h4>
        <ul className="space-y-2">
          <li>
            <a href="/" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              About Us
            </a>
          </li>
          <li>
            <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#blog" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Blog
            </a>
          </li>
          <li>
            <a href="#careers" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Careers
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col">
        <h4 className="text-white text-lg font-semibold mb-6">Get in Touch</h4>
        <div className="space-y-4">
          <div>
            <p className="text-gray-400 text-sm mb-1">Email</p>
            <a href="mailto:hello@retailbusiness.com" className="text-white hover:text-blue-400 transition-colors duration-300 text-sm font-medium">
              hello@retailbusiness.com
            </a>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Phone</p>
            <a href="tel:+1-800-123-4567" className="text-white hover:text-blue-400 transition-colors duration-300 text-sm font-medium">
              +1 (800) 123-4567
            </a>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Hours</p>
            <p className="text-gray-300 text-sm">
              Mon - Fri: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-gray-400 text-sm">
        © 2025 Retail Business Solutions. All rights reserved.
      </p>
      <div className="flex gap-6">
        <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
          Privacy Policy
        </a>
        <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
          Terms of Service
        </a>
        <a href="#cookies" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
          Cookie Policy
        </a>
      </div>
    </div>
  </div>
</footer>
  );
}