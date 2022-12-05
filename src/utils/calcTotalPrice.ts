import { CartItem } from '../redux/cart/types';

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, current) => sum + current.price * current.count, 0);
};
