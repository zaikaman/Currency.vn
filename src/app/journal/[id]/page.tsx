"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { journalPosts } from "@/data/journalPosts";

interface JournalPost {
  id: number;
  title: string;
  content: string;
  image: string;
  thumbnail: string;
  date: string;
  category: string;
  author: string;
  tags: string[];
  readingTime: string;
}

export default function JournalPostPage() {
  const params = useParams();
  const [post, setPost] = useState<JournalPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 500));
        const foundPost = journalPosts.find(p => p.id === Number(params.id));
        if (!foundPost) throw new Error("Không tìm thấy bài viết");
        setPost(foundPost);
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
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
              <time>{new Date(post.date).toLocaleDateString('vi-VN')}</time>
              <span>{post.category}</span>
              <span>Bởi {post.author}</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="text-4xl font-montserrat leading-tight">{post.title}</h1>
            <div className="flex gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-muted/10 text-sm rounded">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="aspect-[16/9] bg-muted/10 relative rounded-lg overflow-hidden">
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

          <footer className="border-t border-muted/10 pt-8 mt-16">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium mb-2">Chia sẻ bài viết</h3>
                <div className="flex gap-4">
                  {/* Add social share buttons */}
                </div>
              </div>
              <Link 
                href="/journal"
                className="text-sm hover:text-accent transition-colors"
              >
                ← Quay lại Nhật ký
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
} 