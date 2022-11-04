export interface IProduct {
  name: string;
  amount: string;
  orderId: number;
}

export interface Product extends IProduct {
  id: number;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface IUser extends UserCredentials {
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface User extends IUser {
  id: number;
}