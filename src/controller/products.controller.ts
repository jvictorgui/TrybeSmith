import { Request, Response } from 'express';
import productsService from '../service/products.service';

const getAllProducts = async (_req:Request, res: Response):Promise<void> => {
  const products = await productsService.getAllProducts();
  res.status(200).send(products);
};

export default { getAllProducts };