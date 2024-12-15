import {Link} from 'react-router-dom'
import "./Header.css"

//assets
import logo from "../../assets/logo.svg"

function Header(){
    return 
      main
        <section className="primary-background">
            <div className="container">
                <nav>
                    <ul className=' nav-menu d-flex fd-row jc-space-between al-center '>
                        <div className='d-flex fd-row al-center t-partner'>
                        <img src={logo}></img>
                        <p className='tertiary-color'>Partinership</p>
                        </div>
                        <li><Link to={"/"} className='primary-color nav-link'>Home</Link></li>
                        <li><Link to={"/comofunciona"} className='primary-color nav-link'>Como Funciona</Link></li>
                        <li><Link to={"/contato"} className='primary-color nav-link'>Contato</Link></li>
                        <li><Link to="/login" className='primary-color nav-link'>Entre ou Cadastre-se</Link></li>
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
                        <li><Link to={"/login"} className='primary-color'>Entre ou Cadastre-se</Link></li>
     main
                    </ul>
                </nav>      
                </div>
        </section>
    )
}
export default Header;