import '../../css/campoTexto/campo.css'
import { useState } from 'react'

const Campo = (props) => {
    const handleChange = (e) => {
        props.actualizarValor(e.target.value)
    }

    const { type="text" } = props
    console.log(type);

    return (
        <div className={`campo campo-${type}`}>
            <label>{props.titulo}</label>
            
            <input
                placeholder={props.placeholder} 
                required={props.required} 
                value={props.valor}
                onChange={handleChange}
                type={type}
            />
        
        </div>
    )
}

export default Campo;