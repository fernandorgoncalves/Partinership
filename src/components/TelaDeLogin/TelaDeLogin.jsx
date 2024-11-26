import "./TelaDeLogin.css"
import logo from "../../assets/logo.svg"
import Button from "../Button/Button"
import {Link} from 'react-router-dom'

function TelaDeLogin() {
    return (
 main
            <div className="login">
                <div className="container jc-center d-flex al-center">
                        <form action="" className="  container-login d-flex fd-column al-center jc-center">
                        <div className="d-flex al-center fd-column login-input">
                            <Link to={"/"} className='primary-color nav-link'><img src={logo} alt="logo"/></Link>
                                <p>Entrar</p>
                         </div>
                            <div className="d-flex fd-column login-input">
                                <label>E-mail ou CPF</label>
                                <input type="email" placeholder="Digite o seu email" required/> 
                            </div>
                            <div className="d-flex fd-column login-input">
                                <label>Senha</label>
                                <input type="password" placeholder="Digite sua senha" required/>
                            </div>
                        <Button button="Entrar" className="btn-login" ></Button> 
                        </form>
                </div>
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
                            <input type="email" id="email" name="email" placeholder="Ex: joao@gmail.com" required/>
                        </div>
                        <div className="d-flex fd-column al-center">
                           <label id="label-password">Senha:</label>
                            <input type="password" id="senha" name="senha" placeholder="Digite sua senha" required/>
                        </div>
                        <div className="d-flex fd-column al-center">
                            <button className="btn-animado" type="submit">Entrar</button>
                        </div>  
                    </div>
                </form>
            </div>
     main
        </div>
)
}
export default TelaDeLogin;