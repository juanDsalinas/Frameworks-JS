import Header from "../src/assets/components/header/Header";
import Form from "../src/assets/components/form/Form.jsx";
import MiOrg from "./assets/components/miOrg/index.jsx";
import Equipo from "./assets/components/equipo/index.jsx";
import Footer from "./assets/components/footer/index.jsx";
import { v4 as uuid } from 'uuid';

import { useState } from "react";

export default function App(){
  
  // ESTADOS
  const [mostrarForm, setForm] = useState(true)

  const [colaboradores, setColaboradores] = useState([
    {
      id:uuid(),
      equipo: "FrontEnd",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav:true
    },
    {
      id:uuid(),
      equipo: "Programacion",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav:false
    },
    {
      id:uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav:true
    },
    {
      id:uuid(),
      equipo: "Programacion",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav:true
    },
    {
      id:uuid(),
      equipo: "Innovación y Gestion",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav:false
    }
  ])

  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programacion",
      colorPrimario:"#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"FrontEnd",
      colorPrimario:"#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo:"DevOps",
      colorPrimario:"#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#FDE7E8",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Movil",
      colorPrimario:"#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo:"Innovacion y Gestion",
      colorPrimario:"#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])


  const handleMostrar = () => {
    setForm(!mostrarForm)
  }

  // Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador", colaborador);
    // Spread Operator
    setColaboradores([...colaboradores, colaborador])
  }

  // Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminando Colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id )
      console.log(nuevosColaboradores);
    setColaboradores(nuevosColaboradores);
  }

  // Actualizar Color de Equipos
  const changeColor = (color, id) => {
    console.log("Actualizar Color:", color, id);
    const equiposActualizados = equipos.map((equipo)=>{
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo;
    })
    setEquipos(equiposActualizados);
  }

  // Crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log("el nuevo equipo es: ", nuevoEquipo);
    setEquipos([...equipos, {...nuevoEquipo, id:uuid() }])
  }

  // Like
  const darLike = (id) => {
    console.log("Like de: ", id);
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }

      return colaborador;
    })

    setColaboradores(colaboradoresActualizados)
  }

  return(
    <div>
      <Header/>
      {/* {
        mostrarForm ? <Form/> : <></>
      } */}
      {/* Corto Circuito */}
      {
        mostrarForm && <Form 
          equipos={equipos.map((equipo)=> equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }

      <MiOrg handleMostrar={handleMostrar} />
      
      {
        equipos.map((equipo, index)=> 
          <Equipo 
            key={index} 
            datos={equipo}
            colaboradores={
              colaboradores.filter(
                colaborador => colaborador.equipo === equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={changeColor}
            darLike={darLike}
          />
        )
      }
      <Footer/>
    </div>
  )
}