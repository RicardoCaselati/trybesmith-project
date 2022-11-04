import { ResultSetHeader } from 'mysql2';
import connection from './connection';

import { IProduct, Product } from '../interfaces';
// import { IUser } from '../interfaces/IUser';
// import { ILogin } from '../interfaces/ILogin';

async function create(product: IProduct): Promise<Product> {
  const { name, amount } = product;

  const query = `INSERT INTO Trybesmith.Products (name, amount)
    VALUES (?, ?)`;
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: Product = { ...product, id };
  return newProduct;
}

export default { create };
// export default class UserModel {
//   private connection = mysql; //atributo

// async getAll(): Promise<IUser[]> {
//   const [rows] = await this.connection.execute<IUser[] & RowDataPacket[]>(`
//     SELECT
//       id, name, email
//     FROM users
//   `);

//   return rows
// }

// public async getUserByEmailAndPassword(login: ILogin): Promise<IUser[]> {
//   const { email, password } = login;
//   const [rows] = await this.connection.execute<(
//     IUser[] & RowDataPacket[])>(
//       'SELECT * FROM users WHERE email=? AND password=?',
//       [email, password],
//     );

//   return rows;
// }

// public async create(user: IUser): Promise<IUser> {
//   const { name, email, password } = user;
//   console.log(user)
//   const result = await this.connection.execute<ResultSetHeader>(
//     'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
//     [name, email, password],
//   );
//   const [dataInserted] = result;
//   const { insertId } = dataInserted;
//   return { id: insertId, ...user };
// }
// }