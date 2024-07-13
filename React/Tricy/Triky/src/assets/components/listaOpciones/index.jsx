import '../../css/listaOpciones/listaOpciones.css'

const ListaOpciones = (props) => {
    const equipos = [
        "Programacion",
        "FrontEnd",
        "Data Science",
        "DevOps",
        "UX y Diseño",
        "Movil",
        "Innovacion y Gestion"
    ]

    const handleValor = (e) => {
        console.log("Cambio: "+e.target.value);
        props.actualizarValor(e.target.value)
    }

    return (
        <div className='lista-opciones'>
            <label>Equipos</label>
            <select value={props.valor} onChange={handleValor}>
                <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
                {
                    equipos.map((equipo, index)=><option key={index} value={equipo}>{equipo}</option>)
                }    
            </select>
        </div>
    )
}

export default ListaOpciones;