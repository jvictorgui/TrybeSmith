import ProductModel, { ProductSequelizeModel } from '../database/models/product.model';

const getAllProducts = async ():Promise<ProductSequelizeModel[] > => {
  const products = await ProductModel.findAll();
  return products;
};

export default { getAllProducts };