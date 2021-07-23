import { ReactComponent as Image } from "assets/images/Desenho.svg";
import { Link } from "react-router-dom";
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
        <div className="login-card">
          <h1>LOGIN</h1>
          <form>
            <div className="mt-4 mb-4">
              <input
                type="text"
                className="form-control base-input"
                placeholder="Email"
                name="username"
              />
            </div>
            <div className="">
              <input
                type="password"
                className="form-control base-input "
                placeholder="Password"
                name="password"
              />
            </div>
            <Link to="/admin/auth/recover" className="login-link-recover">
              Esqueci a senha
            </Link>
            <div className="login-submit">
              <button type="submit" className="btn btn-primary btn-lg">
                <h5>Fazer login</h5>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
