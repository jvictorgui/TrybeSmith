import { Request, Response } from 'express';
import loginService from '../service/login.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const authLogin = async (request: Request, response: Response): Promise<Response> => {
  const { username, password } = request.body;
  const loginResponse = await loginService.authLoginService(username, password);
  if (loginResponse.status !== 'SUCCESSFUL') {
    return response.status(mapStatusHTTP(loginResponse.status)).json(loginResponse.data);
  }
  return response.status(mapStatusHTTP(loginResponse.status)).json(loginResponse.data);
};

export default {
  authLogin,
};