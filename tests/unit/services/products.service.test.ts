import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { Request,Response, request, response } from 'express';
import productsService from '../../../src/service/products.service';
import productsController from '../../../src/controller/products.controller';
chai.use(sinonChai); 
describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });
it('devolve erro ao nao enviar o nome do produto', async function () {
  request.body = {
    price: 10,
    orderId: 1
  }
  sinon.stub(productsService, 'createNewProduct').resolves({ status: 'INVALID_DATA', data: { message: 'name is required' } });
  response.status = sinon.stub().returnsThis();
  response.json = sinon.stub().returnsThis();

  await productsController.createNewProduct(request as Request, response as Response);
  expect(response.status).to.be.calledWith(400);
  expect(response.json).to.be.calledWith({ message: 'name is required' });
})
it('devolve erro ao nao enviar o preço do produto', async function () {
//devolve rro ao nao enviar o preco
request.body = {
  name: 'Produto 1',
  orderId: 1
}

sinon.stub(productsService, 'createNewProduct').resolves({ status: 'INVALID_DATA', data: { message: 'price is required' } });
response.status = sinon.stub().returnsThis();
response.json = sinon.stub().returnsThis();

await productsController.createNewProduct(request as Request, response as Response);
expect(response.status).to.be.calledWith(400);
expect(response.json).to.be.calledWith({ message: 'price is required' });


})
it('cria um novo produto com sucesso', async function () {
  request.body = {
    name: 'Produto 1',
    price: '10',
    orderId: 1
  }
  const newProduct = {
    id: 1,
    name: 'Produto 1',
    price: '10',
    orderId: 1
  }
  sinon.stub(productsService, 'createNewProduct').resolves({ status: 'CREATED', data: newProduct });
  response.status = sinon.stub().returnsThis();
  response.json = sinon.stub().returnsThis();

  await productsController.createNewProduct(request as Request, response as Response);
  expect(response.status).to.be.calledWith(201);
  expect(response.json).to.be.calledWith(newProduct);
});
});