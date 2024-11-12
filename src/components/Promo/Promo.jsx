import TextAll from "../TextAll/TextAll"
import "./Promo.css"

//ASSETS
import estrela from "../../assets/estrela.svg"
import promo from "../../assets/promo.svg"

function Promo(){
    return(
            <div className="secondary-backgroung">
                <div className="container-promo d-flex jc-space-between container">
                    <div className="d-flex fd-row">
                        <div>
                        <img src={estrela}/>
                        </div>
                        <div>
                        <TextAll text="Parceiros selecionados®"/>
                        <TextAll textp="São diversos parceiros selecionados com ofertas que não tem preço."/>
                        </div>
                    </div>
                    <div className="fd-row d-flex jc-content fd-column">
                    <div>
                        <img src={promo}/>
                        </div>
                        <div>
                        <TextAll text="Benefícios Partinership®"/>
                        <TextAll textp="São diversos parceiros selecionados com ofertas que não tem preço."/>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Promo