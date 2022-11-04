import { Router } from 'express';
import * as ProductController from '../controllers/product.controller';

const router = Router();

// const userController = new ProductController(); //INSTANCIAR
// userController = objeto
// UserController = classe
// new = instanciar

// router.post('/login', userController.login.bind(userController));

router.get('/', ProductController.getAll.bind(ProductController));
router.post('/', ProductController.create.bind(ProductController));

export default router;