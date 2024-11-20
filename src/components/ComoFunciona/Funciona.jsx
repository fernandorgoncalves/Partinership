import "./Funciona.css"
import projeto from "../../assets/projetos.svg"
import demonstracao from "../../assets/demonstracaopontos.svg"


function Funciona () {

    return (
        <div>
             <div className="menuinfo"> 
                <h1 id="title">O que é a Partinership</h1><br/>
                <div className="textinfo">
                Um Programa de pontuação que preza pela parceria, onde o principal objetivo é cuidar do <br />
                relacionamento comercial, pois acreditamos ser fundamental para impulsionar o crescimento <br />
                e o sucesso em um mercado cada vez mais competitivo e dinâmico.
                </div>
            </div>  
        
            <div className="column">
                <div id="textparticipar">
                <h1>Quem pode participar?</h1>
                <h1> . Arquiteto (a) </h1>
                <h1> . Engenhreiro (a) </h1>
                <h1> . Designers </h1> 
                </div>
                <div>
                <img id="imagem" width="496" height="449" src={projeto} />
                </div>
            </div> 

            <div className="menuinfo column"  >
                <div className="">
                <img id="imagemponto" width="696" height="649" src={demonstracao}/>
                </div>
                <div className="textinfo">
                <h1>Campanha</h1><br/>
                Adotamos um plano de reconhecimento onde você é <br/> 
                o dono dos seus pontos, e poderá usar da forma <br/>  
                que achar conveniente, tendo um período de 18 meses<br/> 
                para gasto na One House Anbientes ou no Grupo <br/> 
                Maxi você ganha 1 ponto (R$1,00=1 ponto), e você <br/>
                não depende de sorteiosou estar entre os mais <br/>
                pontuados para receber seu prêmio. 
                </div>
            </div>
        </div>
    
    )
}
export default Funciona