"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/logo.png";
import { useState, useEffect } from "react";
import { useCartActions } from "@/hooks/useCart";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCartActions();
  
  const cartItemsCount = cart.items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header className="py-4 md:py-6 px-4 border-b border-vintage-black/10 sticky top-0 bg-background/80 backdrop-blur-md z-40">
      <nav className="max-w-7xl mx-auto flex justify-between items-center relative">
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
          <Link href="/cart" className="hover:text-accent transition-colors relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-6 md:hidden">
          <Link href="/cart" className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Link>
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
            className={`absolute top-full left-0 right-0 bg-background border-b border-vintage-black/10 md:hidden z-50 transform transition-transform duration-300 ${
              isMenuOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex flex-col p-4 max-w-7xl mx-auto">
              <Link 
                href="/products" 
                className="py-4 hover:text-accent transition-colors border-b border-vintage-black/5 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                SẢN PHẨM
              </Link>
              <Link 
                href="/about" 
                className="py-3 hover:text-accent transition-colors border-b border-vintage-black/5"
                onClick={() => setIsMenuOpen(false)}
              >
                GIỚI THIỆU
              </Link>
              <Link 
                href="/contact" 
                className="py-3 hover:text-accent transition-colors"
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
      </nav>
    </header>
  );
}
