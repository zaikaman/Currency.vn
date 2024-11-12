"use client";

import Breadcrumb from "@/components/ui/Breadcrumb";

export default function WarrantyPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb 
          items={[
            { label: "Bảo hành" }
          ]} 
        />
        
        <h1 className="text-3xl font-montserrat mb-12">CHÍNH SÁCH BẢO HÀNH</h1>

        <div className="prose prose-vintage max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6">Thời Gian Bảo Hành</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-muted/5">
                <h3 className="text-xl mb-4">Bảo Hành Tiêu Chuẩn</h3>
                <ul className="space-y-2">
                  <li>12 tháng cho các lỗi về đường chỉ, khóa kéo</li>
                  <li>6 tháng cho các lỗi về da, màu sắc</li>
                  <li>Áp dụng với hóa đơn mua hàng chính hãng</li>
                </ul>
              </div>
              <div className="p-6 bg-muted/5">
                <h3 className="text-xl mb-4">Bảo Hành Mở Rộng</h3>
                <ul className="space-y-2">
                  <li>Thêm 6 tháng bảo hành khi đăng ký thành viên</li>
                  <li>Giảm 30% phí sửa chữa sau thời gian bảo hành</li>
                  <li>Vệ sinh sản phẩm miễn phí 2 lần/năm</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6">Điều Kiện Bảo Hành</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-accent flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-medium mb-2">Sản Phẩm Chính Hãng</h3>
                  <p className="text-muted">Sản phẩm phải được mua trực tiếp từ currency.vn hoặc đại lý ủy quyền</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-accent flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-medium mb-2">Hóa Đơn Mua Hàng</h3>
                  <p className="text-muted">Cần có hóa đơn mua hàng hoặc thẻ bảo hành khi yêu cầu bảo hành</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-accent flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-medium mb-2">Tình Trạng Sản Phẩm</h3>
                  <p className="text-muted">Lỗi phải do nhà sản xuất, không áp dụng với các trường hợp hư hỏng do sử dụng</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-6">Quy Trình Bảo Hành</h2>
            <ol className="space-y-6">
              <li className="flex items-center space-x-4">
                <span className="w-8 h-8 rounded-full bg-vintage-black text-vintage-white flex items-center justify-center flex-shrink-0">1</span>
                <span>Liên hệ với chúng tôi qua hotline hoặc email</span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="w-8 h-8 rounded-full bg-vintage-black text-vintage-white flex items-center justify-center flex-shrink-0">2</span>
                <span>Gửi sản phẩm và hóa đơn mua hàng đến trung tâm bảo hành</span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="w-8 h-8 rounded-full bg-vintage-black text-vintage-white flex items-center justify-center flex-shrink-0">3</span>
                <span>Nhận thông báo xác nhận và thời gian dự kiến</span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="w-8 h-8 rounded-full bg-vintage-black text-vintage-white flex items-center justify-center flex-shrink-0">4</span>
                <span>Nhận sản phẩm đã được bảo hành</span>
              </li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
} 