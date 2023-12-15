import express from 'express';

const app = express()

app.get("/employes", (req, res)=>res.send("Obteniendo Empleados"));
app.post("/employes", (req, res)=>res.send("Creando Empleados"));
app.put("/employes", (req, res)=>res.send("Actualizando Empleados"));
app.delete("/employes", (req, res)=>res.send("Eliminando Empleados"));



app.listen(3000);

console.log('Server on port 3000');