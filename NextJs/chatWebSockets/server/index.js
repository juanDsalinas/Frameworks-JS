// tenemos que activar que reconozca los modulos desde el package.json
import  express  from "express";
import http from "http";
// Creamos un servidor de webSockets
import { Server as SocketServer } from "socket.io";

const app = express()
// Servidor HTTP
const server = http.createServer(app)

// Otra forma de conectar el front con el back
// Servidor Socket
// const io  = new SocketServer(server,{
//     cors:{
//         origin:"http://localhost:5173"
//     }
// })

const io  = new SocketServer(server)

io.on('connection', socket => {
    console.log(socket.id);

    // Escucha al frontend
    socket.on('message',(body)=>{
        // console.log(data);

        // Enviar al frontend la data que tiene el back pero no al mismo usuario sino a los demas
        socket.broadcast.emit('message',{
            body,
            from: socket.id.slice(6)
        })
    })
})

server.listen(3000)
console.log('Server on port', 3000);
