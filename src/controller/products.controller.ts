import { Request, Response } from 'express';
import productsService from '../service/products.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const getAllProducts = async (_req:Request, res: Response): Promise<void> => {
  const products = await productsService.getAllProducts();
  if (products.status !== 'SUCCESSFUL') {
    res.status(mapStatusHTTP(products.status)).json(products.data);
  }
  res.status(mapStatusHTTP('SUCCESSFUL')).json(products.data);
};

const createNewProduct = async (req: Request, res: Response):Promise<void> => {
  const newProduct = await productsService.createNewProduct(req.body);
  if (newProduct.status !== 'SUCCESSFUL') {
    res.status(mapStatusHTTP(newProduct.status)).json(newProduct.data);
  } else {
    res.status(mapStatusHTTP('CREATED')).json(newProduct.data);
  }
};
export default { getAllProducts, createNewProduct };