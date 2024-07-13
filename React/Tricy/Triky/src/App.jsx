import Header from "../src/assets/components/header/Header";
import Form from "../src/assets/components/form/Form.jsx";
import MiOrg from "./assets/components/miOrg/index.jsx";
import Equipo from "./assets/components/equipo/index.jsx";
import { useState } from "react";

export default function App(){
  const [mostrarForm, setForm] = useState(true)

  const handleMostrar = () => {
    setForm(!mostrarForm)
}

  return(
    <div>
      <Header/>
      {/* {
        mostrarForm ? <Form/> : <></>
      } */}
      {/* Corto Circuito */}
      {mostrarForm && <Form/>}
      <MiOrg handleMostrar={handleMostrar} />
      <Equipo/>
    </div>
  )
}