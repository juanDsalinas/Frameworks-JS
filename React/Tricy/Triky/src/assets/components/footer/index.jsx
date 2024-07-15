import '../../css/footer/footer.css'
import Logo from '../../img/Logo.png'
import Face from '../../img/facebook.png'
import Tweet from '../../img/twitter.png'
import Insta from '../../img/instagram.png'
import Foot from '../../img/footer.png'

const Footer = () => {
    return(
        <footer className='footer' style={{ backgroundImage: `url(${Foot})` }}>
            <div className='redes'>
                <a href='https://www.aluracursos.com/'>
                    <img src={Face} alt='Facebook' />
                </a>
                <a href='https://www.aluracursos.com/'>
                    <img src={Tweet} alt='twitter' />
                </a>
                <a href='https://www.aluracursos.com/'>
                    <img src={Insta} alt='instagram' />
                </a>
            </div>
            <img src={Logo} alt='org' />
            <strong>Desarrollado por Juan Salinas</strong>
        </footer>
    )
}

export default Footer;