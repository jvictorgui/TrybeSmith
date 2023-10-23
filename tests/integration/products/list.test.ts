import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import { response } from 'express';
import productsMock from '../../mocks/products.mock';
import ProductModel from '../../../src/database/models/product.model';


chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(() => sinon.restore());
  const allProducts = productsMock.allProducts;
  it('deve retornar uma lista de produtos corretamente', async function () {
    sinon.stub(ProductModel, 'findAll').resolves(allProducts.map(
      (elem) => ProductModel.build(elem),));
    const response = await chai.request(app).get('/products');
    expect(response).to.have.status(200);
    expect(response.body).to.be.an('array');
    expect(response.body).to.have.lengthOf(6);
    expect(response.body).to.deep.equal(allProducts);
  });

});
