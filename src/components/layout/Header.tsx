"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/logo.png";
import { useState, useEffect } from "react";
import { useCartActions } from "@/hooks/useCart";
import ThemeToggle from '@/components/ui/ThemeToggle';
import CartButton from "@/components/ui/CartButton";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#1A1A1A]/80 backdrop-blur-md border-b border-light-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src={logo} 
              alt="Currency.vn Logo" 
              width={180} 
              height={72} 
              className="w-[140px] md:w-[180px] object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm tracking-wide">
            <Link href="/products" className="hover:text-accent transition-colors">
              SẢN PHẨM
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors">
              GIỚI THIỆU
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              LIÊN HỆ
            </Link>
            <ThemeToggle />
            <CartButton />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-6 md:hidden">
            <ThemeToggle />
            <CartButton />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 transition-colors hover:bg-vintage-black/5 rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div 
              className={`absolute top-full left-0 right-0 bg-white dark:bg-background border-b border-light-border dark:border-vintage-black/10 md:hidden z-50 transform transition-transform duration-300 ${
                isMenuOpen ? 'translate-y-0' : '-translate-y-full'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex flex-col p-4 max-w-7xl mx-auto">
                <Link 
                  href="/products" 
                  className="py-4 hover:text-accent transition-colors border-b border-light-border dark:border-vintage-black/5 text-lg text-black dark:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SẢN PHẨM
                </Link>
                <Link 
                  href="/about" 
                  className="py-3 hover:text-accent transition-colors border-b border-light-border dark:border-vintage-black/5 text-black dark:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  GIỚI THIỆU
                </Link>
                <Link 
                  href="/contact" 
                  className="py-3 hover:text-accent transition-colors text-black dark:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  LIÊN HỆ
                </Link>
              </div>
            </div>
          )}

          {isMenuOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-40 md:hidden" 
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </div>
      </div>
    </header>
  );
}
