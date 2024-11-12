export default function ContactPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-light mb-12">LIÊN HỆ</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-light mb-4">THÔNG TIN LIÊN HỆ</h2>
              <div className="space-y-2 text-muted">
                <p>Email: hello@currency.vn</p>
                <p>Điện thoại: 0123 456 789</p>
                <p>Địa chỉ: 123 Đường ABC, Quận XYZ, TP.HCM</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-light mb-4">GIỜ LÀM VIỆC</h2>
              <div className="space-y-2 text-muted">
                <p>Thứ 2 - Thứ 6: 9:00 - 18:00</p>
                <p>Thứ 7: 9:00 - 12:00</p>
                <p>Chủ nhật: Nghỉ</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-light mb-2">Họ và tên</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-[#2A2A2A] border border-vintage-black/10 focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-light mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-[#2A2A2A] border border-vintage-black/10 focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-light mb-2">Tin nhắn</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 bg-[#2A2A2A] border border-vintage-black/10 focus:outline-none focus:border-accent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-vintage-black text-vintage-white hover:bg-accent transition-colors"
            >
              GỬI TIN NHẮN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 