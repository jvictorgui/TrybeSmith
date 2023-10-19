import ProductModel, { 
  ProductInputtableTypes,
  ProductSequelizeModel } from '../database/models/product.model';

const getAllProducts = async ():Promise<ProductSequelizeModel[] > => {
  const products = await ProductModel.findAll();
  return products;
};
const createNewProduct = async (product:ProductInputtableTypes):
Promise<ProductSequelizeModel> => {
  const newProduct = ProductModel.create(product);
  return newProduct;
};

export default { createNewProduct, getAllProducts };