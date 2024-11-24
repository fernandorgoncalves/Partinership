import "./Footer.css"
import {Link} from 'react-router-dom'


//ASSETS
import logo from "../../assets/logo.svg"
import instagram from "../../assets/instagram.svg"
import whatsapp from "../../assets/whatsapp.svg"
import facebook from "../../assets/facebook.svg"



function Footer(){
    return (
        <div className="primary-background">
                <div className="footer container d-flex fd-row jc-space-between">
                <div className="footer-img-txt d-flex">
                    <img src={logo}/>
                    <h2>Partnership</h2>
                </div>
                    <div>
                        <h3>Programa</h3>
                        <div>
                            <p>Como Funciona</p>
                        </div>
                    </div>
                    <div>
                        <h3>Ajuda</h3>
                        <div>
                            <p>Fale Conosco</p>
                            <p>Quero me tornar um parceiro</p>
                        </div>
                    </div>
                    <div className="footer-rede d-flex fd-column">
                       <h3>Confira nossas Redes</h3>
                    <div className="footer-redes-img img">
                        <img src={instagram} className="instagram"/>
                        <img src={whatsapp}/>
                        <img src={facebook}/>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default Footer;