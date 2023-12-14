import express from "express";

// Importamos las rutas que creamos
import productsRoutes from './routes/products.routes.js';
import categoriesRoutes from './routes/categories.routes.js';

// Creamos una app a partir de la importacion de express
const app = express();

// Indicamos que vamos a enviar y recibir archivos json
app.use(express.json());

// Indicamos que routes vamos a utilizar en nuestra app
app.use('/', productsRoutes);
app.use('/', categoriesRoutes);

// Indicamos que lo vamos a ejecutar en el puerto 3000
app.listen(3000);
console.log('Server on Port',3000);