import express, { json, text } from 'express';

import Auth from './middleware/Authentication.js';

const app = express();

app.use(json(),text());
app.use((req,res,next)=>{
    console.log("Bienvenido");
    next()
});

app.use(Auth(req.params.id));

app.get('/', (req, res)=>{
    res.send('HI');
});

app.post('/user',(req,res)=>{
    console.log(req.body);
    // Desestructuracion
    const {name,age, ...moreInfo }= req.body;
    console.log(moreInfo);
    res.send(`New user create ${name} and his age is ${age}`);
})

app.put('/:id',(req,res)=>{
    console.log(typeof(+req.params.id));
    if (+req.params.id < 0 ) {
        return res.status(502).send("ID Invalido");
    }
    res.send("Actualizado");
})

app.listen(3000)
console.log('Server on port 3000');