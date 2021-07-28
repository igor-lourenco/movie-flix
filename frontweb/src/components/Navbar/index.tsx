import "./styles.css";
import { Link } from "react-router-dom";
import {
  getTokenData,
  isAuthenticated,
  removeAuthData,
  TokenData,
} from "util/requests";
import { useState } from "react";
import { useEffect } from "react";
import history from "util/history";

type AuthData = {
  authenticated: boolean;
  tokenData?: TokenData;
};

const Navbar = () => {
  const [authData, setAuthData] = useState<AuthData>({ authenticated: false });

  useEffect(() => {
    if (isAuthenticated()) {
      //se tiver autenticado
      setAuthData({
        authenticated: true, //retorna verdadeiro
        tokenData: getTokenData(), //pega o token decodificado
      });
    } else {
      setAuthData({
        authenticated: false, //senao retorna falso
      });
    }
  }, []);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); //pra não haver navegação do link
    removeAuthData(); //remove o token do localStorage
    setAuthData({
      authenticated: false, //autenticação passa a ser falso
    });
    history.replace("/"); // e redireciona o usuário pra tela de login
  };

  return (
    <nav className="bg-primary main-nav">
      <div className="nav-text">
        <Link to="/" className="nav-logo">
          <h4>MovieFlix</h4>
        </Link>
      </div>
      <div className="nav-authenticad">
        {authData.authenticated ? (
          <a href="#logout" onClick={handleLogoutClick}>
            <h4>Sair</h4>
          </a>
        ) : (
          <div></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
