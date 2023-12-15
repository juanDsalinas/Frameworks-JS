// ESTO SE LLAMA CUSTOM HOOK

import { useState, useEffect } from 'react'

export function useFetch(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [controller, setController]= useState(null);

    useEffect(()=>{
        const abortController = new AbortController();
        setController(abortController);
        setLoading(true);
    // fetch("https://jsonplaceholder.typicode.com/users")
    fetch(url, {signal: abortController.signal})
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error)=> {
            if (error.name === "AbortError") {
                console.log("Request Canceled");
            } else {
                setError(error)
            }
        })
        .finally(()=>setLoading(false));

    // Indicamos que cuando el componente no este visible en pantalla, se cancele la peticion
    // Lo realizamos mediante un Btn
    return () => abortController.abort();
    },[]);

    const handleCancelRequest = () => {
        if (controller) {
            controller.abort();
            setError("Request Canceled");
        }
    }

    // devolvemos un objeto ya que es mas facil de desestructurarlo
    return { data , loading, error, handleCancelRequest };
}


