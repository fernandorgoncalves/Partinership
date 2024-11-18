import "./TelaDeLogin.css"
import logo from "../../assets/logo.svg"

function TelaDeLogin() {
    return (
        <div className="container container-login">
            <div className="ImgAndTitle text-center">
                <img src={logo}></img>
                <h1 className=".h1,h2,h3,h4,h5,h6">Entrar</h1>
            </div>
            <div className="container ">
                <form action="">
                    <div className="container input-form form-input">
                        <div className="d-flex fd-column al-center">
                            <label id="label-text">E-mail ou CPF:</label>
                            <input type="email" id="email" name="email" placeholder="Digite Aqui" required/>
                        </div>
                        <div className="d-flex fd-column al-center">
                           <label id="label-password">Senha:</label>
                            <input type="password" id="senha" name="senha" placeholder="Digite Aqui" required/>
                        </div>
                        <div className="d-flex fd-column al-center">
                            <button className="btn-animado al-center" type="submit">Entrar</button>
                        </div>  
                    </div>
                </form>
            </div>
        </div>
)
}
export default TelaDeLogin;