"use client";

import Image from "next/image";
import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      title: "Ví Da Đứng Classic",
      price: 850000,
      image: "/images/placeholder.png",
    },
    {
      id: 2,
      title: "Ví Da Ngang Minimal",
      price: 750000,
      image: "/images/placeholder.png",
    },
    {
      id: 3,
      title: "Ví Card Holder",
      price: 450000,
      image: "/images/placeholder.png",
    },
  ];

  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 space-y-8 md:space-y-16">
        <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-5xl font-montserrat leading-tight">Thiết kế tối giản kết hợp với kỹ thuật thủ công truyền thống</h2>
            <p className="text-muted text-lg">Sản phẩm đồ da thủ công dành cho người yêu thích phong cách tối giản</p>
            <Link href="/products" 
              className="inline-block px-8 py-3 bg-vintage-black text-vintage-white hover:bg-accent transition-colors"
            >
              KHÁM PHÁ BỘ SƯU TẬP
            </Link>
          </div>
          <div className="relative aspect-[4/5] bg-muted/10 overflow-hidden">
            <Image
              src="/images/hero.jpg"
              alt="Ví da thủ công"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </section>

        <section className="py-16 border-t border-vintage-black/10">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-light">SẢN PHẨM NỔI BẬT</h2>
            <Link href="/products" 
              className="text-sm hover:text-accent transition-colors"
            >
              XEM TẤT CẢ →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </section>

        <section className="py-16 border-t border-vintage-black/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4 p-8">
              <h3 className="text-xl font-light">CHẤT LIỆU CAO CẤP</h3>
              <p className="text-muted">Da bò thật 100% được chọn lọc kỹ càng</p>
            </div>
            <div className="text-center space-y-4 p-8">
              <h3 className="text-xl font-light">THIẾT KẾ TỐI GIẢN</h3>
              <p className="text-muted">Phong cách hiện đại, tinh tế trong từng chi tiết</p>
            </div>
            <div className="text-center space-y-4 p-8">
              <h3 className="text-xl font-light">THỦ CÔNG TRUYỀN THỐNG</h3>
              <p className="text-muted">Được làm thủ công bởi những nghệ nhân lành nghề</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
