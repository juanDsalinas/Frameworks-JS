import header  from "../../img/header.png";
import '../../css/header/header.css'

export default function Header(){
    return (
        <header className="Banner">
            <img className="Banner-img" src={header} alt="Header de ORG"/>
        </header>
    )
}