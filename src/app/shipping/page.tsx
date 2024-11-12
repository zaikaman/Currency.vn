"use client";

import Breadcrumb from "@/components/ui/Breadcrumb";

export default function ShippingPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb 
          items={[
            { label: "Vận chuyển" }
          ]} 
        />
        
        <h1 className="text-3xl font-montserrat mb-12">CHÍNH SÁCH VẬN CHUYỂN</h1>

        <div className="prose prose-vintage max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6">Phí Vận Chuyển</h2>
            <ul className="space-y-4">
              <li>Miễn phí vận chuyển cho tất cả đơn hàng trên toàn quốc</li>
              <li>Thời gian vận chuyển: 2-3 ngày làm việc với nội thành và 3-5 ngày với các tỉnh thành khác</li>
              <li>Đối tác vận chuyển: Giao Hàng Nhanh, GHTK, Viettel Post</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6">Quy Trình Vận Chuyển</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-muted/5">
                <div className="text-3xl font-light mb-4">1</div>
                <h3 className="text-xl mb-2">Xác Nhận Đơn Hàng</h3>
                <p className="text-muted">Đơn hàng được xác nhận và đóng gói trong vòng 24h</p>
              </div>
              <div className="text-center p-6 bg-muted/5">
                <div className="text-3xl font-light mb-4">2</div>
                <h3 className="text-xl mb-2">Bàn Giao Vận Chuyển</h3>
                <p className="text-muted">Đơn hàng được bàn giao cho đơn vị vận chuyển</p>
              </div>
              <div className="text-center p-6 bg-muted/5">
                <div className="text-3xl font-light mb-4">3</div>
                <h3 className="text-xl mb-2">Giao Hàng</h3>
                <p className="text-muted">Đơn vị vận chuyển giao hàng đến địa chỉ của bạn</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-6">Lưu Ý</h2>
            <ul className="space-y-4">
              <li>Vui lòng kiểm tra kỹ sản phẩm khi nhận hàng</li>
              <li>Không nhận hàng nếu phát hiện package bị rách hoặc có dấu hiệu bị mở</li>
              <li>Liên hệ ngay với chúng tôi nếu có bất kỳ vấn đề gì về vận chuyển</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
} 