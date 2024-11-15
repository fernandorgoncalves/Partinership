import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import projetos from "../assets/projetos.svg"


function ComoFunciona(){
    return (
        <div>
            <Header/>
            <div class="secondary-backgroung">
                <div class="container d-flex ">
                <div class="d-flex fd-column presentation-text ">
                <h1>O que é a Partinership</h1>
                    <div class="text">
                    Um Programa de pontuação que preza pela parceria, onde o principal objetivo é cuidar do <br />
                     relacionamento comercial, pois acreditamos ser fundamental para impulsionar o crescimento <br />
                     e o sucesso em um mercado cada vez mais competitivo e dinâmico.
                    </div>
                </div>
                </div>
            </div>  
        
            <div class="container container-promo fd-column d-flex">
                <h1>Quem pode participar?</h1>
                <h1> . Arquiteto (a) </h1>
                <h1> . Engenhreiro (a) </h1>
                <h1> . Designers </h1> 
                <img src={projetos}></img>
            </div> 

            <div class="secondary-backgroung">
                <div class="container d-flex ">
                <div class="d-flex fd-column presentation-text ">
                <h1>Campanha</h1>
                    <div class="text">
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
            </div>
            

            
                           
                            <Footer/>
        </div>    
    )
}
export default ComoFunciona;
