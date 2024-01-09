import { Router, json, request } from 'express';
import { prisma } from '../db.js';

const router = Router();

router.get('/Cart', async(req, res)=>{
    const carts = await prisma.cart.findMany()

    res.send(carts) ;
})

router.get('/Cart/:id', async(req, res)=>{
    const oneItem = await prisma.cart.findFirst({
        where:{
            idCart: +req.params.id
        },
    })

    res.send(oneItem);
})

// Trae los items del carrito by Id of User
router.get('/Carts/:id', async (req, res)=>{
    const listItems = await prisma.cart.findMany({
        where: {
            idUserFK: +req.params.id,
        },
    });
    res.send(listItems);
})

router.post('/Cart', async(req,res)=>{
    const newCart = await prisma.cart.create({
        data: req.body,
    });
    console.log(newCart);
    res.json(newCart);
})

// ---------------------------------------------------

router.put('/Cart/:id', async (req,res)=>{
    const updateItem = await prisma.cart.update({
        where:{
            idCart: +req.params.id
        },
        data: req.body
    })

    res.send({"status":200,"message":"Item actualizado correctamente"});
})

router.delete('/Cart/:id',async(req, res)=>{
    const deleteProduct = await prisma.cart.delete({
        where:{
            idCart: +req.params.id
        }
    })

    if (!deleteProduct) {
        return res.status(404).json({"error":"Item no encontrado"})
    }

    res.send({"message":"Item eliminado satisfactoriamente"});
})

export default router;