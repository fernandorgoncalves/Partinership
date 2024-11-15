import TextAll from "../TextAll/TextAll";
import "./Presentation.css"
import Button from "../Button/Button";

//ASSETS
import venda from "../../assets/presentation.svg"
import arrow from "../../assets/arrow.svg"

function Presentation(){
    return(
        <div className="secondary-backgroung">
          <div className=" container d-flex ">
            <div className="presentation-text d-flex fd-column">
                  <h1>Partnership</h1>
                  <TextAll text="O programa de fidelidade da Partnership permite que, a cada 
                  compra realizada na loja parceira, profissionais e consultores
                  acumulem pontos automaticamente."
                  ></TextAll>
                <div className="btn-arrow d-flex al-center">
                  <Button  button="Cadastre-se"></Button>
                  <TextAll  textp="Como funciona"></TextAll>
                  <img src={arrow} className="arrow-img"/>
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