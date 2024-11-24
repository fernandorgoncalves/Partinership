import Button from "../Button/Button";
import "./Contatos.css"

function Contatos(){
    return(
        <section className="d-flex section-contatos">
            <div className="container d-flex fd-column jc-center al-center">
                    <h2 className="titulo-contato">Contato</h2>
                <form action="" className="form-contato d-flex fd-row justify-center align-center">
                    <div className="input-contato d-flex fd-column">
                        <label>Nome</label>
                        <input type="text" />
                    </div>
                    <div className="input-contato d-flex fd-column">
                        <label>Email</label>
                        <input type="email" />
                    </div>
                    <div className="input-contato d-flex fd-column">
                    <label>Telefone</label>
                    <input type="tel" />
                    </div>
                    
                </form>
                    <Button button="Enviar"/>
            </div>

        </section>
    )
}
export default Contatos;
