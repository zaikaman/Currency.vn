import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-montserrat mb-6">CẢM ƠN BẠN ĐÃ ĐẶT HÀNG</h1>
        <p className="text-muted mb-8">
          Chúng tôi sẽ sớm liên hệ với bạn để xác nhận đơn hàng.
        </p>
        <Link
          href="/products"
          className="inline-block px-8 py-3 bg-vintage-black text-vintage-white hover:bg-accent transition-colors"
        >
          TIẾP TỤC MUA SẮM
        </Link>
      </div>
    </div>
  );
} 