import mickey from "../../../assets/mickey.svg"
import arrow from "../../../assets/arrow.svg"

import "./Beneficios.css"

function Beneficios(){

    return (
        <div className="container">
            <div className="container-beneficios d-flex fd-column">
                <h1>Premiação</h1>
                <div className="container-cards d-flex">
                    
                    <img src={mickey} className="img-beneficios"/>
                    <img src={mickey} className="img-beneficios"/>
                    <img src={mickey} className="img-beneficios"/>
                    <img src={mickey} className="img-beneficios"/>
                    <img src={mickey} className="img-beneficios"/>
                    <img src={mickey} className="img-beneficios"/>
                </div>
            </div>
        </div>
    )
}
export default Beneficios;