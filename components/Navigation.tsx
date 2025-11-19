'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-lg border-b border-slate-200/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo/Brand */}
      <div className="flex-shrink-0 flex items-center gap-2">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center">
          <span className="text-white font-bold text-lg">R</span>
        </div>
        <span className="hidden sm:inline text-lg font-semibold text-slate-900">RetailPro</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1">
        <a href="/" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
          Home
        </a>
        <a href="#about" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
          About
        </a>
        <a href="#portfolio" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
          Portfolio
        </a>
      </div>

      {/* CTA Buttons */}
      <div className="hidden md:flex items-center gap-3">
        <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-200">
          Sign In
        </button>
        <button className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-blue-500/20">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors duration-200">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    {/* Minimal accent dots - decorative element */}
    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-1.5">
      <div className="w-1 h-1 rounded-full bg-blue-500/30"></div>
      <div className="w-1 h-1 rounded-full bg-teal-500/30"></div>
      <div className="w-1 h-1 rounded-full bg-blue-500/30"></div>
    </div>
  </div>
</nav>
  );
}