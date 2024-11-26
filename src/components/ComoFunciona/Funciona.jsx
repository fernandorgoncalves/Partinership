import "./Funciona.css"
//ASSETS
import projetos from "../../assets/projetos.svg"



function Funciona () {

    return (
        <div>
            <div className="secondary-backgroung">
                <div className="container"> 
                    <div className="menuinfo  d-flex fd-column">
                        <h1>O que é a Partinership</h1>
                    <div className="textinfo">
                    Um Programa de pontuação que preza pela parceria, onde o principal objetivo é cuidar do
                    relacionamento comercial, pois acreditamos ser fundamental para impulsionar o crescimento
                    e o sucesso em um mercado cada vez mais competitivo e dinâmico.
                    </div>
                    </div>
                </div>  
            </div>
            <div>
                <div>
                    <div className="container"> 
                        <div className="menuinfo  d-flex fd-column">
                                <h1>Campanha</h1>
                            <div className="textinfo">
                                Adotamos um plano de reconhecimento onde você é
                                o dono dos seus pontos, e poderá usar da forma 
                                que achar conveniente, tendo um período de 18 meses
                                para gasto na One House Anbientes ou no Grupo 
                                Maxi você ganha 1 ponto (R$1,00=1 ponto), e você
                                não depende de sorteiosou estar entre os mais 
                                pontuados para receber seu prêmio.
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="secondary-backgroung">
                    <div className="container"> 
                        <div className="container-participantes  d-flex fd-column">
                                        <h1>Quem pode participar?</h1>
                                        <div className="order-participantes d-flex fd-row">
                                    <div>
                                        <ul>
                                            <li>Arquiteto(a)</li>
                                            <li>Engenheiro(a)</li>
                                            <li>Designers</li>
                                        </ul>
                                    </div>
                                    <div className="projetos">
                                        <img src={projetos} alt="" />
                                    </div>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}
export default Funciona