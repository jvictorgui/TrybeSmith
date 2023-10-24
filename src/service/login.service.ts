import bcrypt from 'bcryptjs';
import jwt from '../auth/jwt';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Token } from '../types/Token';
  
async function authLoginService(username: string, password: string): 
Promise<ServiceResponse<Token>> {
  if (!username || !password) {
    return { status: 'INVALID_DATA', data: { message: '"username" and "password" are required' } };
  }
  const getLogin = await UserModel.findOne({ where: { username } });
  if (!getLogin || !bcrypt.compareSync(password, getLogin.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }
  
  const { id } = getLogin.dataValues;
  const token = jwt.sign({ id, username });
  return { status: 'SUCCESSFUL', data: { token } };
}
  
export default { authLoginService };