"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useCartActions } from "@/hooks/useCart";
import Loading from "@/components/ui/Loading";
import { useState, useEffect } from "react";
import { Product } from '@/types';
import ErrorBoundary from "@/components/ErrorBoundary";
import ErrorMessage from "@/components/ui/ErrorMessage";
import ProductReviews from "@/components/ui/ProductReviews";

export default function ProductDetailPage() {
  return (
    <ErrorBoundary>
      <ProductDetail />
    </ErrorBoundary>
  );
}

function ProductDetail() {
  const params = useParams();
  const { addToCart } = useCartActions();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const productData = {
          id: Number(params.id),
          title: "Ví Da Đứng Classic",
          price: 850000,
          image: "/images/placeholder.png",
          description: "Ví da thủ công với thiết kế đứng cổ điển",
          features: [
            "Da bò thật 100%",
            "Thiết kế đứng truyền thống",
            "Nhiều ngăn đựng tiền và thẻ",
            "Kích thước: 9.5 x 12 cm",
            "Màu sắc: Nâu vintage"
          ]
        };
        setProduct(productData);
      } catch (error) {
        setError(error as Error);
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage message={error.message} retry={() => window.location.reload()} />;
  if (!product) return <ErrorMessage message="Không tìm thấy sản phẩm" />;

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Product Image */}
          <div className="aspect-square bg-muted/10 relative">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-montserrat mb-4">{product.title}</h1>
              <p className="text-2xl text-muted">{product.price.toLocaleString('vi-VN')}₫</p>
            </div>

            <div className="space-y-4">
              <p className="text-muted">{product.description}</p>
              
              <ul className="space-y-2">
                {product.features?.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="w-full px-8 py-3 bg-vintage-black text-vintage-white hover:bg-accent transition-colors"
            >
              THÊM VÀO GIỎ
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <ProductReviews 
          productId={product.id} 
          rating={{ average: 4.7, count: 28 }}
        />
      </div>
    </div>
  );
} 