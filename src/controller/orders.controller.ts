import { Request, Response } from 'express';
import ordersService from '../service/orders.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const getAllOrders = async (_req:Request, res: Response): Promise<void> => {
  const allOrders = await ordersService.getAllOrders();
  if (allOrders.status !== 'SUCCESSFUL') {
    res.status(mapStatusHTTP(allOrders.status)).json(allOrders.data);
  }
  res.status(mapStatusHTTP('SUCCESSFUL')).json(allOrders.data);
};

export default { getAllOrders };