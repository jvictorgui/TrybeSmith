import express from 'express';
// import loginRouter from './routes/login.routes';
import productsRouter from './routes/products.routes';

const app = express();

app.use(express.json());
// app.use(loginRouter);
app.use(productsRouter);
export default app;
