import express from "express";
import cors from 'cors';

// Importamos las rutas que creamos
import productsRoutes from './routes/products.routes.js';
import categoriesRoutes from './routes/categories.routes.js';
import cartRoutes from './routes/cart.routes.js';

// Creamos una app a partir de la importacion de express
const app = express();

// Indicamos que vamos a enviar y recibir archivos json
app.use(express.json(), cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));

// Indicamos que routes vamos a utilizar en nuestra app
app.use('/', productsRoutes);
app.use('/', categoriesRoutes);
app.use('/', cartRoutes);

// Indicamos que lo vamos a ejecutar en el puerto 3000
app.listen(3000);
console.log('Server on Port',3000);