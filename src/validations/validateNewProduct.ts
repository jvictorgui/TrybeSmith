import { Product } from '../types/Product';

const validateNewProduct = (product:Product):string | null => {
  if (!product.name) return 'name is required';
  if (!product.price) return 'price is required';
  if (!product.orderId) return 'orderId is required';
  return null;
};

export default validateNewProduct;