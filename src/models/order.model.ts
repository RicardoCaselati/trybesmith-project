// import { ResultSetHeader } from 'mysql2';
import connection from './connection';

import { Order } from '../interfaces';

// import { IProduct } from '../interfaces';

export async function orderModelGetAll(): Promise<Order[]> {
  const query = `SELECT o.id, o.userId,
  JSON_ARRAYAGG(p.id) AS productsIds
  FROM Trybesmith.Orders AS o
INNER JOIN 
  Trybesmith.Products AS p
ON o.id = p.orderId
GROUP BY o.id;`;

  const [products] = await connection.execute(query);

  return products as Order[];
}

export default { orderModelGetAll };
