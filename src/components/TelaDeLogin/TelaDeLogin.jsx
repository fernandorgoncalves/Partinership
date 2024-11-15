import "./TelaDeLogin.css"
import logo from "../../assets/logo.svg"

function TelaDeLogin() {
    return (
        <div className="tela-login">
            <div id="LogoAndTitle">
                <img src={logo} />
                <h1>Entrar</h1>
            </div>
            <div className="secao-form">
                <form action="">
                    <label id="primeira-label">E-mail ou CPF:</label> <br />
                    <input type="text" placeholder="Digite Aqui" required/> <br />
                    <label id="segunda-label">Senha:</label> <br />
                    <input type="password" placeholder="Digite Aqui" required/>
                </form>
                <button type="submit">Entrar</button>
            </div>
        </div>

    )
}
export default TelaDeLogin;