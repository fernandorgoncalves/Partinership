import "./Contato.css"

function Contatos() {
    return (
        <div className="container">
            <div className="title-contato text-center">
                <h1 className="h1,h2,h3,h4,h5,h6">Contatos</h1>
            </div>
            <div className="form-contact ">
                <form action="">
                    <div className=" text-form form-input">
                        <div className="al-center d-flex  fd-column jc-center">
                            <label className="label-name">Nome:</label>
                            <input type="text" name="Nome" placeholder="Digite seu nome" required/>
                        </div>
                        <div className="al-center d-flex fd-column jc-center">
                            <label className="label-email">Email:</label>
                            <input type="email" name="E-mail" placeholder="Ex: joao@gmail.com" required/>
                        </div>
                        <div className="al-center d-flex fd-column jc-center">
                            <label className="label-telefone">Telefone:</label>
                            <input type="tel" name="Telefone" placeholder="Ex: (21) 99999-9999" required/>
                        </div>
                        <div className="d-flex fd-column al-center">
                            <button className="btn-animado" type="submit">Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Contatos;
