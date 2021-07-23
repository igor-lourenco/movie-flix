import { ReactComponent as Image } from "assets/images/Desenho.svg";
import "./styles.css";

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-banner-container">
        <h1>Avalie Filmes</h1>
        <p>Diga o que você achou do seu filme favorito</p>
        <Image />
      </div>
      <div className="auth-form-container">
        <h1>Card Login</h1>
      </div>
    </div>
  );
};

export default Auth;
