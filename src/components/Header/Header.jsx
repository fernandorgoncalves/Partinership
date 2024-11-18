import {Link} from 'react-router-dom'
import "./Header.css"

//assets
import logo from "../../assets/logo.svg"

function Header(){
    return (
        <div className="primary-background">
            <div className="container">
                <div className=" container-nav nav-menu nav-logo ">
                    <ul className='d-flex al-center jc-space-between jc-center '>
                        <img src={logo}></img>
                        <li><Link to={"/"} className='primary-color nav-link'>Home</Link></li>
                        <li><Link to={"/comofunciona"} className='primary-color nav-link'>Como Funciona</Link></li>
                        <li><Link to={"/contato"} className='primary-color nav-link'>Contato</Link></li>
                        <li><Link to="/login" className='primary-color nav-link'>Entre ou Cadastre-se</Link></li>
                    </ul>
                </div>      
            </div>
        </div>
    )
}
export default Header;