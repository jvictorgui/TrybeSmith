import express from 'express';
// import loginRouter from './routes/login.routes';
import productsRouter from './routes/products.routes';
import ordersRouter from './routes/orders.routes';

const app = express();

app.use(express.json());
// app.use(loginRouter);
app.use(productsRouter);
app.use(ordersRouter);
export default app;
