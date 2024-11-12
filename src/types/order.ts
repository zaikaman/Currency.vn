export interface OrderItem {
  title: string;
  quantity: number;
  price: number;
}

export interface Customer {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  note?: string;
}

export interface Order {
  items: OrderItem[];
  total: number;
  customer: Customer;
  orderDate: string;
} 