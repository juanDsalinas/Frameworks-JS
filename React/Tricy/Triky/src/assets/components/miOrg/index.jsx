import Agregar from '../../img/add.png'
import '../../css/miOrg/miOrg.css'
import { useState } from 'react'

const MiOrg = (props) => {

    // Estado del Org
    // const [mostrar, setMostrar] = useState(true)
    // const handleClick = () => {
    //     setMostrar(!mostrar)
    // }

    return (
        <section className="orgSection">
            <h3 className='title'>Mi Organizacion</h3>
            <img src={Agregar} alt='Icono para Agregar Departamentos a mi Organizacion' onClick={props.handleMostrar}/>
        </section>
    )
}

export default MiOrg;