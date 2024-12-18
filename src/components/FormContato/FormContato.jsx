import Button from "../Button/Button";
import "./FormContato.css"

function FormContato(){
    return(
        <section className="d-flex">
            <div className="container d-flex fd-column jc-center al-center section-contatos">
                    <h2 className="titulo-contato">Contato</h2>
                <form action="" className="form-contato d-flex fd-row justify-center align-center">
                    <div className="input-contato d-flex fd-column">
                        <label>Nome</label>
                        <input type="text"  placeholder="Digite seu nome"/>
                    </div>
                    <div className="input-contato d-flex fd-column">
                        <label>Email</label>
                        <input type="email" placeholder="Digite seu email" />
                    </div>
                    <div className="input-contato d-flex fd-column">
                    <label>Telefone</label>
                    <input type="tel" placeholder="Digite seu telefone" />
                    </div>
                </form>
                    <Button button="Enviar"/>
            </div>
        </section>
    )
}
export default FormContato;
