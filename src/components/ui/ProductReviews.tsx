import { Review } from '@/types/product';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';

interface ProductReviewsProps {
  productId: number;
  rating: {
    average: number;
    count: number;
  };
  reviews?: Review[];
}

export default function ProductReviews({ productId, rating, reviews: initialReviews }: ProductReviewsProps) {
  const [reviews] = useState<Review[]>(initialReviews || [
    {
      id: 1,
      productId: productId,
      userName: "Minh Anh",
      rating: 5,
      comment: "Chất lượng sản phẩm tuyệt vời, đóng gói cẩn thận.",
      createdAt: "2024-03-15",
      isVerified: true
    },
    {
      id: 2,
      productId: productId,
      userName: "Hoàng Nam",
      rating: 4,
      comment: "Ví đẹp, da thật. Tuy nhiên hơi dày so với mong đợi.",
      createdAt: "2024-03-10",
      isVerified: true
    },
    {
      id: 3,
      productId: productId,
      userName: "Thu Hà",
      rating: 5,
      comment: "Rất hài lòng với sản phẩm, sẽ ủng hộ shop dài dài.",
      createdAt: "2024-03-05",
      isVerified: true
    }
  ]);

  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 5,
    userName: '',
    comment: ''
  });

  const renderStars = (rating: number, interactive = false) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => interactive && setNewReview({...newReview, rating: star})}
            className={`${star <= rating ? 'text-accent' : 'text-muted'} ${interactive ? 'hover:scale-110 transition-transform' : ''}`}
          >
            {star <= rating ? (
              <StarIcon className="w-5 h-5" />
            ) : (
              <StarOutlineIcon className="w-5 h-5" />
            )}
          </button>
        ))}
      </div>
    );
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // Giả lập gửi đánh giá
    alert('Cảm ơn bạn đã gửi đánh giá!');
    setShowReviewForm(false);
    setNewReview({ rating: 5, userName: '', comment: '' });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-montserrat mb-2">ĐÁNH GIÁ SẢN PHẨM</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-medium">{rating.average.toFixed(1)}</span>
              {renderStars(rating.average)}
            </div>
            <span className="text-sm text-muted">({rating.count} đánh giá)</span>
          </div>
        </div>
        <button
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="px-6 py-2 bg-vintage-black text-vintage-white hover:bg-accent transition-colors text-sm"
        >
          {showReviewForm ? 'HỦY' : 'VIẾT ĐÁNH GIÁ'}
        </button>
      </div>

      {showReviewForm && (
        <form onSubmit={handleSubmitReview} className="bg-muted/5 p-6 space-y-6">
          <div>
            <label className="block text-sm mb-2">Đánh giá của bạn</label>
            {renderStars(newReview.rating, true)}
          </div>

          <div>
            <label htmlFor="userName" className="block text-sm mb-2">Tên của bạn</label>
            <input
              type="text"
              id="userName"
              value={newReview.userName}
              onChange={(e) => setNewReview({...newReview, userName: e.target.value})}
              className="w-full px-4 py-2 bg-[#2A2A2A] border border-vintage-black/10 focus:outline-none focus:border-accent"
              required
            />
          </div>

          <div>
            <label htmlFor="comment" className="block text-sm mb-2">Nhận xét</label>
            <textarea
              id="comment"
              value={newReview.comment}
              onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
              rows={4}
              className="w-full px-4 py-2 bg-[#2A2A2A] border border-vintage-black/10 focus:outline-none focus:border-accent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-3 bg-vintage-black text-vintage-white hover:bg-accent transition-colors"
          >
            GỬI ĐÁNH GIÁ
          </button>
        </form>
      )}

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-muted/5 p-6 rounded-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">{review.userName}</span>
                  {review.isVerified && (
                    <span className="bg-accent/10 text-accent text-xs px-2 py-0.5 rounded">
                      Đã mua hàng
                    </span>
                  )}
                </div>
                {renderStars(review.rating)}
              </div>
              <span className="text-sm text-muted">
                {new Date(review.createdAt).toLocaleDateString('vi-VN')}
              </span>
            </div>
            <p className="text-muted">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
