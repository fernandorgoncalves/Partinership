
import "./Presentation.css"
import Button from "../../Button/Button"

//ASSETS
import arrow from "../../../assets/arrow.svg"
import venda from '../../../assets/Presentation.svg'
import { Link } from "react-router-dom"


function Presentation(){
    return(
        <section className="secondary-backgroung ">
          <div  className="container d-flex">
            <div className="container-text d-flex fd-column">
                  <h1>Partinership</h1>
                    <p>
                     Um Programa de pontuação que preza pela parceria, onde o
                     principal objetivo é cuidar do relacionamento comercial, pois
                      acreditamos ser fundamental para impulsionar o crescimento e
                      o sucesso em um mercado cada vez mais competitivo e 
                      dinâmico.
                    </p>
                    <div className="container-button d-flex fd-row">
                      <Button button="Cadastre-se"/>
                      <span><Link to={"/comofunciona"} className='gray-1-color'>Como Funciona</Link></span>
                      <img src={arrow} alt="" />
                    </div>
            </div>
            <div className="container-img d-flex">
                  <img src={venda} alt=""></img>
            </div>
            </div>
        </section>
    )
}
export default Presentation;