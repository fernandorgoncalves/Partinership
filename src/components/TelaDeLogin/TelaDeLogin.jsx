import "./TelaDeLogin.css";
import logo from "../../assets/logo.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function TelaDeLogin() {
  return (
    <div className="login">
      <div className=" ">
        <form className="container-login d-flex fd-column al-center jc-center">
          <div className="d-flex al-center fd-column login-input">
            <Link to={"/"} className="primary-color nav-link">
              <img src={logo} alt="logo" />
            </Link>
            <p>Entrar</p>
          </div>
          <div className="d-flex fd-column login-input">
            <label>E-mail ou CPF</label>
            <input type="email" placeholder="Digite o seu email" required />
          </div>
          <div className="d-flex fd-column login-input">
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha" required />
          </div>
          <Button button="Entrar" className="btn-login"
          
          
          ><Link to={"/pontosusuarios"} ></Link></Button>
        </form>
      </div>
    </div>
  );
}

export default TelaDeLogin;
