"use client";

import ProductCard from "@/components/ui/ProductCard";
import ProductFilters from "@/components/ui/ProductFilters";
import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { useState, useEffect } from "react";
import { Product } from '@/types';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    priceRange: 'all',
    sortBy: 'default'
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProducts([
          {
            id: 1,
            title: "Ví Da Đứng Classic",
            price: 850000,
            image: "/images/placeholder.png",
            description: "Ví da thủ công với thiết kế đứng cổ điển"
          },
          {
            id: 2,
            title: "Ví Da Ngang Minimal",
            price: 750000,
            image: "/images/placeholder.png",
            description: "Ví da ngang tối giản cho người dùng hiện đại"
          },
          {
            id: 3,
            title: "Ví Card Holder",
            price: 450000,
            image: "/images/placeholder.png",
            description: "Ví đựng card nhỏ gọn"
          }
        ]);
      } catch (error) {
        setError(error as Error);
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filterProducts = (products: Product[]) => {
    let filtered = [...products];

    // Apply search filter
    filtered = filtered.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Apply price range filter
    switch (filters.priceRange) {
      case 'under500':
        filtered = filtered.filter(p => p.price < 500000);
        break;
      case '500to1000':
        filtered = filtered.filter(p => p.price >= 500000 && p.price <= 1000000);
        break;
      case 'above1000':
        filtered = filtered.filter(p => p.price > 1000000);
        break;
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    return filtered;
  };

  const filteredProducts = filterProducts(products);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage message={error.message} retry={() => window.location.reload()} />;

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-light mb-12">BỘ SƯU TẬP</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters Column */}
          <div className="space-y-8">
            {/* Search Input */}
            <div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 bg-[#2A2A2A] border border-vintage-black/10 focus:outline-none focus:border-accent"
                />
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
            </div>

            <ProductFilters onFilterChange={setFilters} />
          </div>

          {/* Products Grid */}
          <div className="md:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted">Không tìm thấy sản phẩm phù hợp</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
