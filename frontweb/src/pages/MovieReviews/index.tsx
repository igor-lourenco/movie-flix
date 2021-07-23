import "./styles.css";
import Estrela from 'assets/images/Estrela.png';

const MovieReview = () => {
  return (
    <>
      <div className="movie-title">
        <h4>Tela de detalhes do filme</h4>
        <p>Id : 1</p>
      </div>
      <div className="movie-container">
        <form>
          <div className="form-group movie-container-top">
            <input
              type="email"
              className="form-control form-control-lg"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Deixe sua avaliação aqui"
            />
            <button type="submit" className="btn btn-primary btn-lg">
              <h5>Salvar Avaliação</h5>
            </button>
          </div>
          <div className="movie-container-bottom">
            <div className="d-flex movie-comtainer-bottom-title">
            
              <img src={Estrela} alt="Estrela" />
              <h6>Maria silva</h6>
            </div>

            <div className="movie-review">
              <p>
                Gostei muito do filme. Foi muito bom mesmo. Pena que durou
                pouco.
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default MovieReview;
