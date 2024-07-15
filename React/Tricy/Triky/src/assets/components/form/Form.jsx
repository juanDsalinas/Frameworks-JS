import '../../css/form/form.css';
import Campo from '../campo';
import ListaOpciones from '../listaOpciones';
import Boton from '../boton';
import { useState } from "react";


const Form = (props) => {

    // Estados Para capturar los valores de los Inputs
    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")

    // Estados para el Equipo
    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log('Manejar el Envio');
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const menejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario:color })
    }

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el Formulario para crear el Colaborador</h2>
                <Campo 
                    titulo="Nombre" 
                    placeholder="Ingresa tu Nombre" 
                    required 
                    valor={nombre}
                    actualizarValor={setNombre}    
                />
                <Campo 
                    titulo="Puesto" 
                    placeholder="Ingresa tu Puesto" 
                    required 
                    valor={puesto}
                    actualizarValor={setPuesto}
                />
                <Campo 
                    titulo="Foto" 
                    placeholder="Ingresa enlace de tu Foto" 
                    required 
                    valor={foto}
                    actualizarValor={setFoto}    
                />
                <ListaOpciones
                    valor={equipo}
                    actualizarValor={setEquipo}
                    equipos={props.equipos}
                />
                <Boton>Crear</Boton>
            </form>

            <form onSubmit={menejarNuevoEquipo}>
                <h2>Rellena el Formulario para crear el Equipo</h2>
                <Campo 
                    titulo="Titulo" 
                    placeholder="Ingresa tu Titulo" 
                    required 
                    valor={titulo}
                    actualizarValor={setTitulo}    
                />
                <Campo 
                    titulo="Color" 
                    placeholder="Ingresa el Color en Hexadecimal" 
                    required 
                    valor={color}
                    actualizarValor={setColor}
                    type="color"
                />
                <Boton>Crear Equipo</Boton>
            </form>
        </section>
    )
}

export default Form;