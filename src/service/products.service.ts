import ProductModel, { 
  ProductInputtableTypes,
  ProductSequelizeModel } from '../database/models/product.model';
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
const createNewProduct = async (product:ProductInputtableTypes):
Promise<ProductSequelizeModel> => {
  const newProduct = ProductModel.create(product);
  return newProduct;
};

export default { createNewProduct, getAllProducts };