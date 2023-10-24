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
    // Stub the ProductModel.findAll method to return the allProducts array
    sinon.stub(ProductModel, 'findAll').resolves(allProducts.map(
      (elem) => ProductModel.build(elem),));
    // Make a request to the /products endpoint
    const response = await chai.request(app).get('/products');
    // Check that the response has a status code of 200
    expect(response).to.have.status(200);
    // Check that the response body is an array
    expect(response.body).to.be.an('array');
    // Check that the response body has a length of 6
    expect(response.body).to.have.lengthOf(6);
    // Check that the response body is equal to the allProducts array
    expect(response.body).to.deep.equal(allProducts);
  });
});