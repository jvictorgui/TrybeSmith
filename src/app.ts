import express from 'express';
// import loginRouter from './routes/login.routes';
import productsRouter from './routes/products.routes';
import ordersRouter from './routes/orders.routes';
import loginRouter from './routes/login.routes';

const app = express();

app.use(express.json());
app.use(productsRouter);
app.use(ordersRouter);
app.use(loginRouter);
export default app;
