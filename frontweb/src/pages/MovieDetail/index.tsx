import { AxiosRequestConfig } from "axios";
import { useCallback } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avaliacoes from "../../components/Avaliacoes";
import Cardavaliacao from "components/CardAvaliacoes";
import { requestBackend, temRoles } from "util/requests";
import "./styles.css";
import { Avaliacao } from "assets/types/Avaliacao";
import { Movie } from "assets/types/movie";

type UrlParams = {
  movieId: string;
};

type ListaAvaliacoes = Avaliacao[];

const Moviedetail = () => {

  const { movieId } = useParams<UrlParams>();
  const [ movie, setMovie] = useState<Movie>();
  const [ listaAvaliacoes, setListaAvaliacoes] = useState<ListaAvaliacoes>();

  const obtemDadosFilme = useCallback(() => {
    const params : AxiosRequestConfig = {
      url: `/movies/${movieId}`,
      withCredentials: true,
    };
 
    requestBackend(params).then((response) => {
      setMovie(response.data);
    });
  },[movieId]);

  const obtemAvaliacoes = useCallback(() => {
    const params : AxiosRequestConfig = {
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setListaAvaliacoes(response.data);  
    });
    
  },[movieId]);

  useEffect(() => {
    obtemDadosFilme();
    obtemAvaliacoes();
  },[obtemAvaliacoes, obtemDadosFilme]);

  return (
    <div className="moviedetail-container">
      <div className="moviedetail-titulo-container">
        <h2>Detalhes do filme {movie?.id} - {movie?.title}</h2>
        <p>{movie?.synopsis}</p>
      </div>

      {temRoles(["ROLE_MEMBER"]) && (
        <div className="avaliacao-container">
          <Cardavaliacao movieId={movieId} onNewReview={obtemAvaliacoes}/>
        </div>
      )}
      <div className="card base-card lista-avaliacoes-container">
      {listaAvaliacoes?.length !== 0 ?
        listaAvaliacoes?.map((aval) => (
          <Avaliacoes key={aval.id} avaliacao={aval}/>
        ))
       : <h4 className="sem-avaliacao">Não existem avaliações</h4>}
      </div>
    </div>
  );
};

export default Moviedetail;