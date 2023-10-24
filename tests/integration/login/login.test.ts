import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import UserModel from '../../../src/database/models/user.model';
import loginMock from '../../mocks/login.mock';
chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('should return status 200 and a token', async function () {
    const login = {
      username: 'Hagar',
      password: 'terrível',
    }
    sinon.stub(UserModel, 'findOne').resolves(UserModel.build(loginMock.user));
    const response = await chai.request(app).post('/login').send(login);
    expect(response).to.have.status(200);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('token');
    
  });

});
