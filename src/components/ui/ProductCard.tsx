"use client";

import { useCartActions } from "@/hooks/useCart";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ 
  id,
  title, 
  price, 
  image 
}: { 
  id: number;
  title: string; 
  price: number; 
  image: string; 
}) {
  const { addToCart } = useCartActions();

  return (
    <div className="group">
      <Link href={`/products/${id}`}>
        <div className="aspect-square bg-muted/10 overflow-hidden relative">
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="mt-4 mb-2">
          <h3 className="text-sm font-light tracking-wide">{title}</h3>
          <p className="text-sm text-muted">{price.toLocaleString('vi-VN')}₫</p>
        </div>
      </Link>
      <button
        onClick={() => addToCart({ id, title, price, image })}
        className="w-full px-4 py-2 bg-vintage-black text-vintage-white text-sm hover:bg-accent transition-colors"
      >
        THÊM VÀO GIỎ
      </button>
    </div>
  );
}