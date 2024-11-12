export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description?: string;
  features?: string[];
}

export interface CartItem extends Product {
  quantity: number;
} 