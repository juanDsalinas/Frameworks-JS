import { rgbToHex } from '@mui/material';
import '../../css/equipo/equipo.css'
import Colaborador from '../colaborador'
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, darLike } = props
    const nuevocolor = hexToRgba(colorPrimario, 0.6)
    

    return (
        <>
            {
                colaboradores.length > 0 && 
                <section className='equipo' style={{ backgroundColor:nuevocolor }}>
                    <input 
                        type="color"
                        className='input-color'
                        value={colorPrimario}
                        onChange={(evento)=>{
                            actualizarColor(evento.target.value, id);
                        }}
                    />
                    <h3 style={{borderBottom: `4px solid ${colorPrimario}`}}>{titulo}</h3>
                    <div className="colaboradores">
                        {
                            colaboradores.map((colaborador, index)=> 
                                <Colaborador 
                                    datos={colaborador} 
                                    key={index} 
                                    colorPrimario={colorPrimario}
                                    eliminarColaborador={eliminarColaborador}
                                    darLike={darLike}
                                />
                            )
                        }
                    </div>
                </section>
            }
        </>
    )
}

export default Equipo;