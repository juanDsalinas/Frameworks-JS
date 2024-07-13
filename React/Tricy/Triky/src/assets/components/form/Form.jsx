import '../../css/form/form.css';
import CampoTexto from '../campoTexto';
import ListaOpciones from '../listaOpciones';
import Boton from '../boton';
import { useState } from "react";


const Form = () => {

    // Estados Para capturar los valores de los Inputs
    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log('Manejar el Envio');
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosAEnviar);
    }

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el Formulario para crear el Colaborador</h2>
                <CampoTexto 
                    titulo="Nombre" 
                    placeholder="Ingresa tu Nombre" 
                    required 
                    valor={nombre}
                    actualizarValor={setNombre}    
                />
                <CampoTexto 
                    titulo="Puesto" 
                    placeholder="Ingresa tu Puesto" 
                    required 
                    valor={puesto}
                    actualizarValor={setPuesto}
                />
                <CampoTexto 
                    titulo="Foto" 
                    placeholder="Ingresa enlace de tu Foto" 
                    required 
                    valor={foto}
                    actualizarValor={setFoto}    
                />
                <ListaOpciones
                    valor={equipo}
                    actualizarValor={setEquipo}
                />
                <Boton/>
            </form>
        </section>
    )
}

export default Form;