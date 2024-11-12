'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-montserrat">Đã xảy ra lỗi</h1>
          <p className="text-muted">Vui lòng thử lại sau</p>
          <button
            onClick={reset}
            className="px-8 py-3 bg-vintage-black text-vintage-white hover:bg-accent transition-colors"
          >
            Thử lại
          </button>
        </div>
      </div>
    </div>
  );
} 