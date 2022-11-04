import { IProduct } from '../interfaces';
import productModel from '../models/product.model';

// const MESSAGES = {
//   PRODUCT_NOT_FOUND: 'Product not found',
// };

async function create(product: IProduct) {
  const data = await productModel.create(product);
  return { status: 201, data };
}

export default { create };
