import { Router } from 'express';
import * as ProductController from '../controllers/product.controller';

const router = Router();

router.get('/', ProductController.getAll.bind(ProductController));
router.post('/', ProductController.create.bind(ProductController));

export default router;