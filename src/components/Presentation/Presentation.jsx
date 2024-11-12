import TextAll from "../TextAll/TextAll";
import "./Presentation.css"
import Button from "../Button/Button";

//ASSETS
import venda from "../../assets/Presentation.svg"
import arrow from "../../assets/arrow.svg"

function Presentation(){
    return(
        <div className="secondary-backgroung">
          <div className=" prensentation-container container d-flex ">
            <div className="presentation-text d-flex fd-column">
                <h1>Partnership</h1>
                <TextAll text="O programa de fidelidade da Partnership permite que, a cada 
                compra realizada na loja parceira, profissionais e consultores
                acumulem pontos automaticamente."
                ></TextAll>
                <div className="btn-arrow d-flex">
                <Button button="Cadastre-se"></Button>
                <p className="text-p">Como funciona</p>
                <img src={arrow}/>
                </div>
            </div>
            <div>
                <img src={venda} alt="venda" className="img-fluid"/>
            </div>
          </div>
        </div>
    )
}
export default Presentation;