import { Request, Response } from 'express';
import productsService from '../service/products.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export const getAllProducts = async (_req:Request, res: Response):Promise<void> => {
  const products = await productsService.getAllProducts();
  res.status(mapStatusHTTP('OK')).send(products);
};

export default { getAllProducts };