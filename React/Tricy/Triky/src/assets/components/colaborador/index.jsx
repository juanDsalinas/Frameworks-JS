import '../../css/colaborador/colaborador.css'
import { AiFillCloseCircle } from "react-icons/ai";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, darLike } = props

    return(
        <div className="colaborador">
            <AiFillCloseCircle className='eliminar' onClick={() => eliminarColaborador(id)}/>
            <div className="encabezado" style={{backgroundColor:colorPrimario}}>
                <img src={foto} alt={nombre} />
            </div>
            <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                {
                    fav ? <IoIosHeart color="red" onClick={() => darLike(id)} /> : <IoIosHeartEmpty onClick={() => darLike(id)}/>
                }
            </div>
        </div>
    )
}

export default Colaborador;