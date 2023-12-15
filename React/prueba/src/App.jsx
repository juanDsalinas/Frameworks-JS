import { useFetch } from './useFetch';
import {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [content, setContent] = useState(1);
  const [url, setUrl] = useState(`https://rickandmortyapi.com/api/character/?page=${content}`)
  const {data, loading, error, fetchData,handleCancelRequest} = useFetch(url)
  // const [clicks, setClicks] = useState(0);


  function changeUrl() {
    // Cambiar 'content' al siguiente valor
    setContent((prevContent) => prevContent + 1);
  }


  useEffect(() => {
    // Cuando cambia 'content', actualiza la URL y realiza la solicitud
    setUrl(`https://rickandmortyapi.com/api/character/?page=${content}`);
    fetchData();

    // Limpiar efecto al desmontar el componente
    return () => handleCancelRequest();
  }, [content, fetchData, handleCancelRequest]);



  // https://rickandmortyapi.com/api/character/?page=2

  console.log(data);
  console.log(content);
  return (
    <div className='App'>
      <h1>Fetch Rick And Morty Api</h1>
      {/* <button onClick={changeUrl(2)}>Previous</button> */}
      <button onClick={handleCancelRequest}>Cancel Request</button>
      <div className='card'>
        <ul>
          {error && <li>Error: {error}</li>}
          {loading && <li>Loading...</li>}
          {data?.results.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      </div>
      <button onClick={changeUrl}>Next</button>
    </div>
  )
}

export default App
