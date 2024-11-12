import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-light mb-12">VỀ CHÚNG TÔI</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <p className="text-lg text-muted">
              currency.vn là thương hiệu chuyên thiết kế và sản xuất các sản phẩm đồ da thủ công cao cấp tại Việt Nam.
            </p>
            <p className="text-lg text-muted">
              Chúng tôi tin rằng một chiếc ví không chỉ là vật dụng hàng ngày mà còn là biểu tượng của phong cách sống tối giản và bền vững.
            </p>
            <p className="text-lg text-muted">
              Mỗi sản phẩm của currency.vn đều được chế tác thủ công tỉ mỉ bởi những nghệ nhân lành nghề, sử dụng chất liệu da bò thật 100% được chọn lọc kỹ càng.
            </p>
          </div>
          <div className="relative aspect-square bg-muted/10 overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="Quy trình sản xuất thủ công"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 