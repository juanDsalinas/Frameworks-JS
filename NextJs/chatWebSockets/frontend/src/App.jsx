import io from 'socket.io-client'
import { useState, useEffect } from "react";
const socket = io("/")

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);



  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(message);
    const newMessage = {
      body: message,
      from: 'Me'
    }
    
    setMessages([...messages,newMessage])
    socket.emit('message',message)
  }

  useEffect(()=>{
    socket.on('message', recibeMessage);
      
    return()=>{
      socket.off('message',recibeMessage);
    }
  },[]);

  // Utilizamos este esta para que nos traiga todo lo que ya esta + lo nuevo
  const recibeMessage = message => 
    setMessages((state) => [...state,message])

  return (
    <div className='h-screen bg-zinc-800 text-white flex items-center justify-center'>
      <form onSubmit={handleSubmit} className='bg-zinc-900 p-10'>
        <h2 className='text-2xl font-bold my-2'>Chat React</h2>
        <input type="text" placeholder='Write your message...'
          className='border-2 border-zinc-500 p-2 w-full text-black'
          // indicamos que cuando se teclee algo en el input se actualice el estado que creamos
          onChange={(e) => setMessage(e.target.value)}/>

        <button className='p-2 px-4 bg-black mt-2 rounded-md'>Send</button>
        <ul>
          {
            messages.map((message,i)=>(
              <li key={i} className={
                `my-2 p-2 table rounded-md ${message.from === "Me" ?
                'bg-sky-700 ml-auto':'bg-black'}`
              }
              ><span className='text-xs text-slate-200 block'>{message.from}</span>
              <span className='text-sm'>{message.body}</span>
              </li>
            ))
          }
        </ul>
      </form>
      
    </div>
  )
}

export default App