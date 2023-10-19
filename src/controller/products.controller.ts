import { Request, Response } from 'express';
import productsService from '../service/products.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const getAllProducts = async (_req:Request, res: Response):Promise<void> => {
  const products = await productsService.getAllProducts();
  res.status(mapStatusHTTP('OK')).send(products);
};

const createNewProduct = async (req:Request, res: Response):Promise<void> => {
  const product = await productsService.createNewProduct(req.body);
  res.status(mapStatusHTTP('CREATED')).send(product);
};

export default { getAllProducts, createNewProduct };