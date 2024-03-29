import { Router } from 'express';
import productsController from '../controller/products.controller';

const productsRouter = Router();

// Define your routes using the router
productsRouter.get('/products', productsController.getAllProducts);
productsRouter.post('/products', productsController.createNewProduct);
// Export the router
export default productsRouter;
