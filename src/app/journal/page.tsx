"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";

interface JournalPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

export default function JournalPage() {
  const [posts, setPosts] = useState<JournalPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPosts([
          {
            id: 1,
            title: "Nghệ Thuật Thuộc Da Truyền Thống",
            excerpt: "Khám phá quy trình thuộc da thủ công từ những nghệ nhân lành nghề với kỹ thuật truyền thống...",
            image: "/images/journal/leather-craft.jpeg",
            date: "2024-03-15",
            category: "Craft"
          },
          {
            id: 2,
            title: "Xu Hướng Thiết Kế Tối Giản 2024",
            excerpt: "Những xu hướng thiết kế ví da tối giản đang được ưa chuộng trong năm 2024...",
            image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7",
            date: "2024-03-10",
            category: "Design"
          },
          {
            id: 3,
            title: "Chọn Lựa Da Thật Chất Lượng",
            excerpt: "Hướng dẫn cách nhận biết và chọn lựa các loại da thật chất lượng cao...",
            image: "/images/journal/leather-pick.jpg",
            date: "2024-03-05",
            category: "Material"
          },
          {
            id: 4,
            title: "Phỏng Vấn Nghệ Nhân Da Thủ Công",
            excerpt: "Cuộc trò chuyện với nghệ nhân có hơn 30 năm kinh nghiệm trong nghề da...",
            image: "/images/journal/leather-craft-master.jpg",
            date: "2024-02-28",
            category: "Interview"
          },
          {
            id: 5,
            title: "Bảo Quản Đồ Da Đúng Cách",
            excerpt: "Những bí quyết giúp sản phẩm da luôn bền đẹp theo thời gian...",
            image: "/images/journal/leather-care.jpg",
            date: "2024-02-20",
            category: "Care"
          },
          {
            id: 6,
            title: "Từ Bản Vẽ Đến Thành Phẩm",
            excerpt: "Hành trình sáng tạo một chiếc ví da từ những nét phác thảo đầu tiên...",
            image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338",
            date: "2024-02-15",
            category: "Design"
          },
          {
            id: 7,
            title: "Sự Kết Hợp Giữa Truyền Thống và Hiện Đại",
            excerpt: "Cách chúng tôi kết hợp kỹ thuật thủ công truyền thống với thiết kế đương đại...",
            image: "/images/journal/leather-tra-mod.jpg",
            date: "2024-02-10",
            category: "Craft"
          },
          {
            id: 8,
            title: "Màu Sắc Trong Thiết Kế Da",
            excerpt: "Nghệ thuật phối màu và ý nghĩa của từng gam màu trong thiết kế sản phẩm da...",
            image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261",
            date: "2024-02-05",
            category: "Design"
          },
          {
            id: 9,
            title: "Quy Trình Sản Xuất Bền Vững",
            excerpt: "Cam kết của chúng tôi với quy trình sản xuất thân thiện với môi trường...",
            image: "https://images.unsplash.com/photo-1509762774605-f07235a08f1f",
            date: "2024-01-30",
            category: "Sustainability"
          },
          {
            id: 10,
            title: "Gặp Gỡ Đội Ngũ Thiết Kế",
            excerpt: "Trò chuyện với những người đứng sau các thiết kế độc đáo của Currency...",
            image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
            date: "2024-01-25",
            category: "Team"
          },
          {
            id: 11,
            title: "Cảm Hứng Từ Kiến Trúc",
            excerpt: "Khám phá cách kiến trúc đô thị ảnh hưởng đến thiết kế sản phẩm của chúng tôi...",
            image: "https://images.unsplash.com/photo-1511914678378-2906b1f69dcf",
            date: "2024-01-20",
            category: "Inspiration"
          },
          {
            id: 12,
            title: "Tương Lai Của Nghề Da Thủ Công",
            excerpt: "Dự đoán về xu hướng và sự phát triển của nghề da thủ công trong tương lai...",
            image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
            date: "2024-01-15",
            category: "Future"
          },
        ]);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb 
          items={[
            { label: "Nhật ký" }
          ]} 
        />
        
        <h1 className="text-3xl font-montserrat mb-12">NHẬT KÝ</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/journal/${post.id}`} className="group">
              <div className="aspect-[4/3] bg-muted/10 overflow-hidden relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-4 text-sm text-muted">
                  <time>{new Date(post.date).toLocaleDateString('vi-VN')}</time>
                  <span>{post.category}</span>
                </div>
                <h2 className="text-lg font-light group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 