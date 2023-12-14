import { Router, json, request } from 'express';
import { prisma } from '../db.js';

// creamos un router a partir de express
const router = Router();

router.get('/Products', async (req, res) => {
    const products = await prisma.product.findMany({
        include: {
            category :true,
        }
    });
    res.send(products);
})

router.get('/Products/:id', async (req, res)=>{
    const oneProduct = await prisma.product.findFirst({
        where: {
            // parceamos el id ya que viene de tipo String
            id: +req.params.id
        },
        include: {
            category :true,
        }
    })
    
    if(!oneProduct){
        return res.status(404).json({error: "Producto no encontrado"})
    }

    res.send(oneProduct);
})

router.post('/Products', async (req, res)=>{
    const newProduct = await prisma.product.create({
        data:req.body,
    })
    res.json(newProduct);
})


router.delete('/Products/:id', async (req, res)=>{
    const deleteProduct = await prisma.product.delete({
        where: {
            // parceamos el id ya que viene de tipo String
            id: +req.params.id
        }
    })
    
    if(!deleteProduct){
        return res.status(404).json({error: "Producto no encontrado"})
    }

    res.send({"message":"Producto eliminado Satisfactoriamente", "status":200, "product":deleteProduct});
})


router.put('/Products/:id', async (req, res)=>{
    const updateProduct = await prisma.product.update({
        where: {
            // parceamos el id ya que viene de tipo String
            id: +req.params.id
        },
        data:req.body
    })
    
    console.log(updateProduct);

    res.send({"status":200,"message":"Producto actualizado Satisfactoriamente"});
})





export default router;