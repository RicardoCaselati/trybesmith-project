import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const router = Router();

// const userController = new ProductController(); //INSTANCIAR
// userController = objeto
// UserController = classe
// new = instanciar

// router.get('/', authMiddleware, userController.getAll.bind(userController));
// router.post('/login', userController.login.bind(userController));

router.post('/', ProductController.create.bind(ProductController));

export default router;