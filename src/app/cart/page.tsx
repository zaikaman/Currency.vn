"use client";

import { useCartActions } from "@/hooks/useCart";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCartActions();

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-montserrat mb-12">GIỎ HÀNG</h1>
          <div className="text-center py-16">
            <p className="text-muted mb-8">Giỏ hàng của bạn đang trống</p>
            <Link 
              href="/products" 
              className="inline-block px-8 py-3 bg-vintage-black text-vintage-white hover:bg-accent transition-colors"
            >
              TIẾP TỤC MUA SẮM
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-montserrat mb-12">GIỎ HÀNG</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-8">
            {cart.items.map((item) => (
              <div key={item.id} className="flex gap-6 pb-6 border-b border-vintage-black/10">
                <div className="w-24 h-24 bg-muted/10 relative flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className="font-montserrat">{item.title}</h3>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-muted hover:text-accent"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <p className="text-muted mt-2">{item.price.toLocaleString('vi-VN')}₫</p>
                  
                  <div className="flex items-center mt-4">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 border border-vintage-black/10 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="w-12 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 border border-vintage-black/10 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-muted/5 p-6 space-y-6">
              <h2 className="text-xl font-montserrat">TÓM TẮT ĐƠN HÀNG</h2>
              
              <div className="space-y-4 pb-6 border-b border-vintage-black/10">
                <div className="flex justify-between">
                  <span className="text-muted">Tạm tính</span>
                  <span>{cart.total.toLocaleString('vi-VN')}₫</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Phí vận chuyển</span>
                  <span>Miễn phí</span>
                </div>
              </div>
              
              <div className="flex justify-between font-medium">
                <span>Tổng cộng</span>
                <span>{cart.total.toLocaleString('vi-VN')}₫</span>
              </div>

              <Link
                href="/checkout"
                className="block w-full px-8 py-3 bg-vintage-black text-vintage-white text-center hover:bg-accent transition-colors"
              >
                THANH TOÁN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}