"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";

interface JournalPost {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author: string;
}

export default function JournalPostPage() {
  const params = useParams();
  const [post, setPost] = useState<JournalPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Giả lập dữ liệu chi tiết bài viết
        setPost({
          id: Number(params.id),
          title: "Nghệ Thuật Thuộc Da Truyền Thống",
          content: `
            <p>Nghề thuộc da thủ công là một trong những nghề thủ công lâu đời nhất của nhân loại, đòi hỏi sự kiên nhẫn, kỹ thuật tinh xảo và kinh nghiệm được tích lũy qua nhiều năm tháng.</p>
            
            <h2>Lịch Sử Phát Triển</h2>
            <p>Từ thời cổ đại, con người đã biết cách thuộc da động vật để tạo ra các sản phẩm phục vụ đời sống. Qua hàng nghìn năm, kỹ thuật này đã được cải tiến và phát triển, tạo ra những sản phẩm da có chất lượng ngày càng cao.</p>
            
            <h2>Quy Trình Thuộc Da</h2>
            <p>Quy trình thuộc da truyền thống bao gồm nhiều bước phức tạp, từ việc làm sạch, ngâm tẩm, đến xử lý bề mặt. Mỗi bước đều đòi hỏi sự tỉ mỉ và kinh nghiệm của người thợ thủ công.</p>
            
            <h2>Nghệ Nhân Và Tương Lai</h2>
            <p>Ngày nay, dù công nghệ đã phát triển, nhưng giá trị của những sản phẩm da thủ công vẫn được đánh giá cao. Các nghệ nhân vẫn đang nỗ lực bảo tồn và phát triển nghề truyền thống này.</p>
          `,
          image: "https://images.unsplash.com/photo-1531011266462-6d6e6bf6bd88",
          date: "2024-03-15",
          category: "Craft",
          author: "Nguyễn Văn A"
        });
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [params.id]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!post) return <ErrorMessage message="Không tìm thấy bài viết" />;

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <Breadcrumb 
          items={[
            { label: "Nhật ký", href: "/journal" },
            { label: post.title }
          ]} 
        />

        <article className="space-y-8">
          <header className="space-y-4">
            <div className="flex items-center gap-4 text-sm text-muted">
              <time>{new Date(post.date).toLocaleDateString('vi-VN')}</time>
              <span>{post.category}</span>
              <span>Bởi {post.author}</span>
            </div>
            <h1 className="text-3xl font-montserrat">{post.title}</h1>
          </header>

          <div className="aspect-[16/9] bg-muted/10 relative">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div 
            className="prose prose-vintage max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
} 