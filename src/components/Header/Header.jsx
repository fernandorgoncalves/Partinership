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
                        <li><Link to="/" className='primary-color'>Entre ou Cadastre-se</Link></li>
                    </ul>
<<<<<<< HEAD
                </div>
                <div className="nav-login d-flex align-center">
                    <p><Link to="/login" className='primary-color'>Entre ou Cadastre-se</Link></p>
                </div>       
=======
                </div>      
>>>>>>> 02e78a1790e33c71c0715924930817942ff60c9d
            </div>
        </div>
    )
}
export default Header;  