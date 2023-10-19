import { Router } from 'express';
import ProductsController from '../controller/products.controller';

const productsRouter = Router();

// Define your routes using the router
productsRouter.get('/', ProductsController.getAllProducts);
// Export the router
export default productsRouter; 
