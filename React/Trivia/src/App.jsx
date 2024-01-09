import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Testimonio from './components/game';

function App() {
  const [count, setCount] = useState(0)
  const [frase, setFrase] = useState('Tematica');
  const [preguntas, setPreguntas] = useState(['Opcion1','Opcion2','Opcion3','Opcion4',]);

  
  // setFrase()

  const handleTitle = (e) =>{
    let titles = ['Comida famosa de brazil', 'pais famoso de europa', 'ANIMALES', 'MASCOTAS'];
    let questions = [['comida1', 'comida2','comida3','comida4'], ['pais1', 'pais2','pais3','pais4'], ['animal1','animal2','animal3','animal4'],['perro1', 'perro2','perro3','perro4']];
    let correctas = ['pais1','comida2','animal3','perro4'];
    let numAleatorio = Math.floor(Math.random() * titles.length);
    console.log(titles[numAleatorio]);
    console.log(questions[numAleatorio]);
    setFrase(titles[numAleatorio]);
    setPreguntas(questions[numAleatorio]);
    console.log("OJITO");
    console.log(preguntas);
    console.log("WEEEEEEEEEEEYYYYYYYYYYYYY");
    console.log(e.target.textContent);
    let letra = e.target.textContent;
    for (let it=0; it<questions.length; it++) {
      for (let i= 0; i<4; i++) {
        // console.log(questions[i]);
        if (letra === correctas[i]) {
          console.log("SIIIIIIIIUUUUU");
          setCount((count) => count + 1)
          i=100;
          it=1000;
        }
        
      }
      
    }
    console.log(count);
  }

  const changeInitial = () => {
    let titles = ['COMIDAS', 'PAISES', 'ANIMALES', 'MASCOTAS'];
    let questions = [['comida1', 'comida2','comida3','comida4'], ['pais1', 'pais2','pais3','pais4'], ['animal1','animal2','animal3','animal4'],['perro1', 'perro2','perro3','perro4']];
    let correctas = ['comida2','pais1','animal3','perro4'];
    let numAleatorio = Math.floor(Math.random() * titles.length);
    console.log(titles[numAleatorio]);
    console.log(questions[numAleatorio]);
    setFrase(titles[numAleatorio]);
    setPreguntas(questions[numAleatorio]);
    console.log("OJITO");
    console.log(preguntas);
  }

  return (
    <>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      <h2 className='points'>Puntos: {count}</h2>
      <Testimonio count={count} name={frase} desc={preguntas} evento={handleTitle}/>
      <button className='btn' onClick={() => changeInitial()}>
        Changes Quest
      </button>
    </>
  )
}

export default App
