import '../../css/campoTexto/campoTexto.css'
import { useState } from 'react'

const CampoTexto = (props) => {
    const handleChange = (e) => {
        props.actualizarValor(e.target.value)
    }

    return (
        <div className='campo-texto'>
            <label>{props.titulo}</label>
            
            <input type="text" 
                placeholder={props.placeholder} 
                required={props.required} 
                value={props.valor}
                onChange={handleChange}
            />
        
        </div>
    )
}

export default CampoTexto;