import "./Promo.css"

//ASSETS
import estrela from "../../../assets/estrela.svg"
import celular from "../../../assets/celular.svg"
import spa from "../../../assets/spa.svg"
import jet from "../../../assets/jet.svg"
import festa from "../../../assets/festa.svg"
import celulart from "../../../assets/celulart.svg"
import gastronomica from "../../../assets/gastronomia.svg"
import computador from "../../../assets/computador.svg"
import spat from "../../../assets/spat.svg"

function Promo(){
    return(
        <div>
        <div className="primary-backgroung">
            <div className="container">
                <div className="d-flex promo-all">
                    <div className="container-promo d-flex fd-column ">
                        <div className=" promo-titulo d-flex fd-row al-center">
                            <div>
                                <img src={estrela}/>
                            </div>
                            <div>
                                <h2 className="gray-1-color">Acelera Partinership</h2 >
                            </div>
                        </div>
                        <div className="container-acelera d-flex fd-column">
                            <p>
                                São premiações que poderão ocorrer durante o andamento da campanha Partnership
                                vigente, acelerando ainda mais a sua chance de viver experiências fantasticas com resgate
                                imediato, e o melhor, sem que seja descontado qualquer ponto da sua jornada dentro do programa.                        
                            </p>
                            <ul>
                                <li>Day SPAs</li>
                                <li>Experiência gastronomica em restaurante e/ou chefes renomados</li>
                                <li>Iphones</li>
                                <li>Jet Ski</li>
                            </ul>
                        </div>
                     </div>
                     <div>
                     <div className="promo-imagens d-flex fd-column al-center">
                            <img src={celular} alt="" />
                            <img src={spa} alt="" />
                            <img src={jet} alt="" />
                        </div>
                    </div>
                </div>  
            </div>
            </div>
            <div className="grey-backgroud">
                <div className="container">
                <div className="promo-mais d-flex fd-row jc-space-between">
                    <div className="img-promo d-flex fd-row">
                        <div className="img-cont d-flex fd-column al-center">
                            <p>Celulares</p>
                            <img src={celulart}/>
                        </div>
                         <div className="img-cont d-flex fd-column al-center">
                            <p>Experiência Gastronômica</p>
                            <img src={gastronomica}/>
                         </div>
                         <div className="img-cont d-flex fd-column al-center">
                            <p>Macbook</p>
                            <img src={computador}/>
                         </div>
                         <div className="img-cont d-flex fd-column al-center">
                            <p>SPAs</p>
                            <img src={spat}/>
                         </div>
                    </div>
                    <div className="img-promo-i d-flex fd-column al-center">
                        <ul >
                            <li>Shows, Palestras,</li>
                            <li>Workshops,</li>
                            <li>Inovação e mais!</li>
                        </ul>
                        <img src={festa}/>
                    </div>
                </div>
                </div>
                </div>  
         </div>   
    )
}
export default Promo