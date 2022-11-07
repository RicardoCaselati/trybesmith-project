import Joi from 'joi';
import { RequestHandler } from 'express';
// import * as userModel from '../models/user.model';

const validateLoginBody: RequestHandler = (req, res, next) => {
  const { username, classe, level, password } = req.body;

  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(8).required(),
  });

  const { error } = schema.validate({ username, classe, level, password });

  // const userExist = userModel.getByUserName(username);

  // if (!userExist.username || !userExist.password) {
  //   return res.status(401).json({ message: 'Username or password invalid' });
  // }

  if (error) {
    const errorMessage = error.details[0].message;
    if (errorMessage.includes('must be')) {
      return res.status(401).json({ message: errorMessage });
    }
    return res.status(400).json({ message: errorMessage });
  }

  next();
};

export default validateLoginBody;