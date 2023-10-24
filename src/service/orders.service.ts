import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';
import { ServiceResponse } from '../types/ServiceResponse';

// const getAllOrders = async ():Promise<ServiceResponse<Order[]>> => {
//   const allOrders = await OrderModel.findAll({
//     include: {
//       model: ProductModel,
//       as: 'productIds',
//       attributes: ['id'],
//     },
//   });
//   const data = allOrders.map((order) => order.dataValues);
//   return { data, status: 'SUCCESSFUL' };
// };

const getAllOrders = async (): Promise<ServiceResponse<Order[]>> => {
  const allOrders = await OrderModel.findAll({
    include: { model: ProductModel, as: 'productIds', attributes: ['id'] },
  });

  const data = allOrders.map((order) => {
    const id = order.dataValues.id ?? 0;
    return {
      id,
      userId: order.dataValues.userId,
      productIds: order.dataValues.productIds?.map((prod) => (typeof prod 
        !== 'number' ? prod.id : prod)) || [],
    };
  });

  return { data, status: 'SUCCESSFUL' };
};

export default { getAllOrders };