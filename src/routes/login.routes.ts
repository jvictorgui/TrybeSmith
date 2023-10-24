import { Router } from 'express';
import loginController from '../controller/login.controller';

const loginRouter = Router();

loginRouter.post('/login', loginController.authLogin);

export default loginRouter;