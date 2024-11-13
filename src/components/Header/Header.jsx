import {Link} from 'react-router-dom'
import "./Header.css"

//assets
import logo from "../../assets/logo.svg"

function Header(){
    return (
        <div className=" container-nav primary-background">
            <div className="container d-flex jc-space-between">
                <div className="nav-logo d-flex">
                    <img src={logo}></img>
                </div>
                <div className="nav-menu">
                    <ul>
                        <li><Link to={"/"} className='primary-color'>Home</Link></li>
                        <li><Link to={"/comofunciona"} className='primary-color'>Como Funciona</Link></li>
                        <li><Link to={"/contato"} className='primary-color'>Contato</Link></li>

                    </ul>
                </div>
                <div className="nav-login d-flex align-center">
                    <p><Link to="/" className='primary-color'>Entre ou Cadastre-se</Link></p>
                </div>       
            </div>
        </div>
    )
}
export default Header;  