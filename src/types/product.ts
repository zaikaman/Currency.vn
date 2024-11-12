export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description?: string;
  features?: string[];
  rating?: {
    average: number;
    count: number;
  };
  reviews?: Review[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  id: number;
  productId: number;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
  isVerified?: boolean;
} 