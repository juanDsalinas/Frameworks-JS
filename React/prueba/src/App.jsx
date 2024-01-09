// import { useFetch } from './useFetch';
import {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [producto, setProducto] = useState([]);
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    // Define una función asíncrona para realizar la solicitud a la API
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/Categories`);
        const data = await response.json();
        console.log(data);
        setCharacters(data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    // Llama a la función de solicitud cada vez que 'content' cambia
    fetchData();
  }, []); // El efecto se ejecutará cuando 'content' cambie

  function changeUrl() {
    // Cambiar 'content' al siguiente valor
    setContent((prevContent) => prevContent + 1);
  }

  function lastUrl(){
    setContent((prevContent) => prevContent -1);
  }

  function buscar(id){
    const encontrado = characters.find((character)=> character.id === id);
    setProducto(encontrado.products);
    console.log(producto);
    console.log("PASO DE BUSCAR");
  }

  function hello(id){
    console.log(`Entro ${id}`);
  }

  return (
    <div className='App'>
    <div className='header'>
      <h1>Categories</h1>
      <div className='cart'></div>
    </div>
    <div className='categ'>
    {characters.map((character)=>(
        <button onClick={() => buscar(character.id)} key={character.id} className='nombres'>{character.name}</button>
    ))}
    </div><br/>
    <p>Productos:</p>
    <div className='productos'>
          {
            producto.length > 0 ? (
            <ul>{producto.map((product)=>(<li key={product.id}>{product.name}</li>))}</ul>)
            :(
              <span>No hay productos Disponibles</span>
            )
          }
    </div> 
          {/* {character.products.map((product)=>(<li>{product.name}</li>))} */}
  
    
  </div>
  )
}

export default App;
