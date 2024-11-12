import { useCart } from '@/contexts/CartContext';
import { toast } from 'react-hot-toast';
import { Product, CartItem } from '@/types';

export function useCartActions() {
  const { state, dispatch } = useCart();

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
    toast.success('Đã thêm vào giỏ hàng');
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
    toast.success('Đã xóa khỏi giỏ hàng');
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
    toast.success('Đã cập nhật số lượng');
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return {
    cart: state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };
}
