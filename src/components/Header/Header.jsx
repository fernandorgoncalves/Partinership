import { Link } from 'react-router-dom';
import './Header.css';

// Assets
import logo from '../../assets/logo.svg';

function Header() {
    return (
        <header className="primary-background">
            <div className="container">
                <nav className="d-flex">
                    <div className=" nav-menu d-flex fd-row al-center  t-partner">
                        <img src={logo} alt="Logo" className="logo" />
                        <p className="tertiary-color">Partnership</p>
                    </div>
                    <ul className="nav-menu d-flex fd-row jc-space-between al-center">
                        <li>
                            <Link to="/" className="primary-color nav-link">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/comofunciona" className="primary-color nav-link">
                                Como Funciona
                            </Link>
                        </li>
                        <li>
                            <Link to="/contato" className="primary-color nav-link">
                                Contato
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" className="primary-color nav-link">
                                Entre ou Cadastre-se
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
