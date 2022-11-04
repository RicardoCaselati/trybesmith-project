import express from 'express';
import productRoutes from './routes/product.routes';

const app = express();

app.use(express.json());

// Criar rotas aqui
app.use('/products', productRoutes);

export default app;
