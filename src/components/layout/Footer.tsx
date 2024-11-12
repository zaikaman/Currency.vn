import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-vintage-black/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-8 md:py-16">
          <div className="space-y-4">
            <h3 className="text-xl font-light tracking-[0.2em]">CURRENCY.VN</h3>
            <p className="text-sm text-muted">
              Thương hiệu đồ da thủ công cao cấp, kết hợp giữa thiết kế tối giản và kỹ thuật truyền thống
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-light uppercase tracking-wider">Sản phẩm</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/products" className="hover:text-accent transition-colors">Ví Da Đứng</Link></li>
              <li><Link href="/products" className="hover:text-accent transition-colors">Ví Da Ngang</Link></li>
              <li><Link href="/products" className="hover:text-accent transition-colors">Card Holder</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-light uppercase tracking-wider">Thông tin</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/about" className="hover:text-accent transition-colors">Về Chúng Tôi</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Liên Hệ</Link></li>
              <li><Link href="/shipping" className="hover:text-accent transition-colors">Vận Chuyển</Link></li>
              <li><Link href="/warranty" className="hover:text-accent transition-colors">Bảo Hành</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-light uppercase tracking-wider">Liên hệ</h4>
            <div className="space-y-2 text-sm text-muted">
              <p>69/68 Đ. Đặng Thuỳ Trâm, Phường 13</p>
              <p>Bình Thạnh, TP.HCM 70000</p>
              <p>028 7105 9999</p>
              <div className="flex items-center gap-2">
                <a 
                  href="https://www.instagram.com/currency.vn/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  @currency.vn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-vintage-black/10 text-center text-sm text-muted">
          <p>© 2024 currency.vn. Thiết kế bởi currency Team.</p>
        </div>
      </div>
    </footer>
  );
}
