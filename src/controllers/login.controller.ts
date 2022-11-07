import { Request, Response } from 'express';

import { UserCredentials } from '../interfaces';
import * as loginService from '../services/login.service';

export async function login(req: Request, res: Response) {
  const userCredentials = req.body as UserCredentials;
  const { status, data, error } = await loginService.login(userCredentials);

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}

export default login;
