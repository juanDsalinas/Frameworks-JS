import { Router, request } from 'express';
import { prisma } from '../db.js';

// creamos un router a partir de express
const router = Router();


router.get('/Categories', async (req, res) => {
    const products = await prisma.category.findMany({
        include: {
            products:true
        }
    })
    res.send(products);
})

router.post('/Categories', async (req, res)=>{
    const newProduct = await prisma.category.create({
        // Indicamos que la data a tomar proviene del json que nos manden
        data:req.body,
    });
    res.json(newProduct);
})

export default router;