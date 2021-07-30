import { ReactComponent as ImgPrincipal } from "assets/images/Desenho.svg";
import Cardlogin from "components/CardLogin";
import { estaAutenticado } from "util/requests";
import "./styles.css";
import history from 'util/history';

const Home = () => {
  return (
    <div className="geral-container container-fluid">
      <div className="left-container">
        <h1>Avalie filmes</h1>
        <p>Diga o que você achou do seu filme favorito</p>
        <div className="img-container">
          <ImgPrincipal />
        </div>
      </div>
      {!estaAutenticado() ? (
      <div className="right-container">
        <Cardlogin />
      </div>) : (history.push("/movies"))
      }
    </div>
  );
};

export default Home;