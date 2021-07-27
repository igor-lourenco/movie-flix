import "./styles.css";
import Estrela from 'assets/images/Estrela.png';
import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL, requestBackend } from "util/requests";
import { Movies } from "assets/types/movie";
import { useState, useEffect  } from "react";
import { useParams } from "react-router-dom";

type urlParams = {
    movieId: string
  }

const MovieReview = () => { //ProductDetails

  const {movieId} = useParams<urlParams>(); //captura os parametros da url 
  const [movie, setMovie] = useState<Movies>();

  
  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}/reviews`).then(response => {
     // setMovie(response.data) //pega os dados da requisicao e coloca na const setMovie
        
      const params: AxiosRequestConfig = {
        withCredentials:true
      }

      requestBackend(params).then((response) => {
        setMovie(response.data);
      });
  
    });
  }, [movieId]);
    

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
              <p>{movie?.reviews}
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default MovieReview;
