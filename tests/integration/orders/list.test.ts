import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model'
import app from '../../../src/app';
import ordersMock from '../../mocks/orders.mock';
import ProductModel from '../../../src/database/models/product.model';
chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  it('deve fazer um requisição com sucesso', async function () {
    sinon.stub(OrderModel, 'findAll').resolves(
      ordersMock.dbOrders
        .map((order) => OrderModel.build(order, {
          include: [ { model: ProductModel, as: 'productIds', attributes: ['id'] } ]
        })));

    const response = (await OrderModel.findAll()).map((order) => order.dataValues);
    console.log('response', response);
    const httpResponse = await chai.request(app).get('/orders');

    console.log(httpResponse.body);
    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(ordersMock.responseOrders);
    expect(httpResponse.body).to.be.an('array');
    expect(httpResponse.body).to.have.lengthOf(3);
    
  });
});