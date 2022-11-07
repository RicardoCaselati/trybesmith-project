import { Router } from 'express';
import * as OrderController from '../controllers/order.controller';

const router = Router();

router.get('/', OrderController.orderGetAll.bind(OrderController));

export default router;
