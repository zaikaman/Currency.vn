"use client";

import { useCartActions } from "@/hooks/useCart";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';
import Breadcrumb from "@/components/ui/Breadcrumb";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  note: string;
};

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart } = useCartActions();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    note: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (cart.items.length === 0 && !isRedirecting) {
      router.push("/cart");
    }
  }, [cart.items.length, isRedirecting, router]);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.fullName) newErrors.fullName = "Vui lòng nhập họ tên";
    if (!formData.email) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }
    if (!formData.phone) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }
    if (!formData.address) newErrors.address = "Vui lòng nhập địa chỉ";
    if (!formData.city) newErrors.city = "Vui lòng chọn thành phố";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const order = {
        items: cart.items,
        total: cart.total,
        customer: formData,
        orderDate: new Date().toISOString(),
      };
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      await fetch('/api/send-order-confirmation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ order, customer: formData }),
      });
      
      setIsRedirecting(true);
      clearCart();
      toast.success('Đặt hàng thành công!');
      router.push("/thank-you");
      
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error('Có lỗi xảy ra khi đặt hàng. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb 
          items={[
            { label: "Giỏ hàng", href: "/cart" },
            { label: "Thanh toán" }
          ]} 
        />
        <h1 className="text-3xl font-montserrat mb-12">THANH TOÁN</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Checkout */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm mb-2">
                  Họ và tên
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    fullName: e.target.value
                  }))}
                  className="w-full px-4 py-2 bg-[#2A2A2A] border border-vintage-black/10 focus:outline-none focus:border-accent"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      email: e.target.value
                    }))}
                    className="w-full px-4 py-2 bg-[#2A2A2A] border border-vintage-black/10 focus:outline-none focus:border-accent"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm mb-2">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      phone: e.target.value
                    }))}
                    className="w-full px-4 py-2 bg-[#2A2A2A] border border-vintage-black/10 focus:outline-none focus:border-accent"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm mb-2">
                  Địa chỉ
                </label>
                <input
                  type="text"
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    address: e.target.value
                  }))}
                  className="w-full px-4 py-2 bg-[#2A2A2A] border border-vintage-black/10 focus:outline-none focus:border-accent"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>

              <div>
                <label htmlFor="city" className="block text-sm mb-2">
                  Thành phố
                </label>
                <select
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    city: e.target.value
                  }))}
                  className="w-full px-4 py-2 bg-[#2A2A2A] border border-vintage-black/10 focus:outline-none focus:border-accent"
                >
                  <option value="">Chọn thành phố</option>
                  <option value="HCM">TP. Hồ Chí Minh</option>
                  <option value="HN">Hà Nội</option>
                  {/* Thêm các thành phố khác */}
                </select>
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                )}
              </div>

              <div>
                <label htmlFor="note" className="block text-sm mb-2">
                  Ghi chú
                </label>
                <textarea
                  id="note"
                  rows={4}
                  value={formData.note}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    note: e.target.value
                  }))}
                  className="w-full px-4 py-2 bg-[#2A2A2A] border border-vintage-black/10 focus:outline-none focus:border-accent"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-vintage-black text-vintage-white hover:bg-accent transition-colors disabled:opacity-50 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    ĐANG XỬ LÝ...
                  </>
                ) : (
                  'ĐẶT HÀNG'
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-muted/5 p-6 space-y-6 sticky top-6">
              <h2 className="text-xl font-montserrat">ĐƠN HÀNG</h2>
              
              <div className="space-y-4">
                {cart.items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.title} x {item.quantity}</span>
                    <span>{(item.price * item.quantity).toLocaleString('vi-VN')}₫</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-vintage-black/10 space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted">Tạm tính</span>
                  <span>{cart.total.toLocaleString('vi-VN')}₫</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Phí vận chuyển</span>
                  <span>Miễn phí</span>
                </div>
                <div className="flex justify-between font-medium pt-4 border-t border-vintage-black/10">
                  <span>Tổng cộng</span>
                  <span>{cart.total.toLocaleString('vi-VN')}₫</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
