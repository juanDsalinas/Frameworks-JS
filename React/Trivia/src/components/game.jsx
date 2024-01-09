import {react} from 'react';
import '../styles/game.css';

const Testimonio = (props) =>{

    return (
        <div className='padre'>
            {/* <h2>Bienvenido, Pregunta #{props.count}</h2> */}
            <div>
                <h4 className='tematica'>Tematica : {props.name}</h4>
                {/* Utiliza map para recorrer el array de descripciones */}
                {/* <div className='quests'>
                    {props.desc.map((descripcion, index) => (
                        <div key={index}>{descripcion}</div>
                    ))}
                </div> */}
                <div className='quests'>
                    
                    <div onClick={props.evento} className='one'>{props.desc[0]}</div>
                    <div onClick={props.evento} className='dos'>{props.desc[1]}</div>
                    <div onClick={props.evento} className='dos'>{props.desc[2]}</div>
                    <div onClick={props.evento} className='one'>{props.desc[3]}</div>

                </div>
            
            </div>
        </div>
    );
}

export default Testimonio;