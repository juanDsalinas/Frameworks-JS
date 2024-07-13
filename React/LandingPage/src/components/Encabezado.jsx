import { useState } from 'react'
import '../assets/css/encabezado.css'
import logo from '../assets/Nike.png'

export function Encabezado (){

    // Manejo del Estado De la Barra de Busqueda
    const [active,setActivate] = useState(false)
    const activo = active ? 'Landing-input-activate': 'Landing-input'
    const handleActivacion = () => {
        setActivate(!active)
        console.log('Se cambio es estado a: '+{activo});
    }

    return(
        <section>
            {/* Header */}
            <section className='Encabezado'>
                <header className="Landing-Header">
                    <ul>
                        <li>
                            <a className="Ham-Bar" href="#">
                                <i className="fa-solid fa-bars-staggered"></i>
                            </a>
                        </li>
                        <li>
                            <img className='Landing-Logo' src={logo} alt="Logo de Nike"/>
                        </li>
                        <li className='Landing-Search'>
                                <div>
                                    <input className={activo} type="text" placeholder='Search...'/>
                                    <i onClick={handleActivacion} className="fa-sharp fa-solid fa-magnifying-glass"></i>    
                                </div>
                        </li>
                    </ul>
                </header>
            </section>

            {/* Shoe Section */}
            <section className='Section-Shoe'>
                <div className="Section-Shoe-text">
                    <div className="Section-Shoe-text-1">
                        <h1>Nike Epik</h1>
                        <h2>REACT FLYING</h2>
                    </div>
                    <div className="Section-Shoe-Slide">

                    </div>
                    <div className="Section-Shoe-addCard">
                        <a href="#">Add To Card 
                            <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="Section-Shoe-image">

                </div>
            </section>
        </section>
    )
}