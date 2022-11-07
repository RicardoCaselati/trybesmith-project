// import jwt from 'jsonwebtoken';
import { UserCredentials } from '../interfaces';
import * as userModel from '../models/user.model';
// import { secret, config } from '../middlewares/jwtConfig';
// import IToken from '../interfaces/IToken';

const MESSAGES = {
  USER_NOT_FOUND: 'User not found',
  UNAUTHORIZED: 'Invalid email or password',
  USER_EXISTS: 'User already exists',
  FORBIDDEN: 'You are not allowed to take this action',
};

export async function login(userCredentials: UserCredentials) {
  const data = await userModel.getByUserName(userCredentials.username);

  if (data === null || data.password !== userCredentials.password) {
    return { status: 403, error: { message: MESSAGES.UNAUTHORIZED } };
  }
  return { status: 200, data: { token: 'fake token' } };
}

export default login;
