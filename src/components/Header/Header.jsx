import {Link} from 'react-router-dom'
import "./Header.css"

//assets
import logo from "../../assets/logo.svg"

function Header(){
    return (
        <div className=" primary-background">
            <div className="container d-flex jc-space-between">
                <div className="nav-logo d-flex">
                    <img src={logo}></img>
                </div>
                <div className="nav-menu primary-color">
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/comofunciona"}>Como Funciona</Link></li>
                        <li><Link to={"/contato"}>Contato</Link></li>
                    </ul>
                </div>
                <div className="nav-login d-flex align-center primary-color">
                    <p><Link to="/">Entre ou Cadastre-se</Link></p>
                </div>       
            </div>
        </div>
    )
}
export default Header;  