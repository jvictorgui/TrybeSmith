import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

const getAllProducts = async ():Promise<ServiceResponse<Product[]>> => {
  const products = await ProductModel.findAll();
  const data = products.map((product) => product.dataValues);
  if (!products || products.length === 0) {
    return { status: 'NOT_FOUND', data: { message: 'No products found' } };
  }

  return { data, status: 'SUCCESSFUL' };
};
const createNewProduct = async (product:Product):
Promise<ServiceResponse<Product>> => {
  const newProduct = await ProductModel.create(product);
  if (!newProduct) {
    return { status: 'INVALID_DATA', data: { message: 'Could not create product' } };
  }

  return { status: 'CREATED', data: newProduct.dataValues };
};

export default { createNewProduct, getAllProducts };