import { Movies } from "assets/types/movie";
import MovieCard from "../../components/MovieCard";
import {Link} from 'react-router-dom';

const Movie = () => {

  const movie : Movies = {
    "id": 1,
    "title": "Bob Esponja",
    "subTitle": "O Incrível Resgate",
    "year": 2020,
    "imgUrl": "https://image.tmdb.org/t/p/w533_and_h300_bestv2/wu1uilmhM4TdluKi2ytfz8gidHf.jpg",
    "synopsis": "Onde está Gary? Segundo Bob Esponja, Gary foi \"caracolstrado\" pelo temível Rei Poseidon e levado para a cidade perdida de Atlantic City. Junto a Patrick Estrela, ele sai em uma missão de resgate ao querido amigo, e nesta jornada os dois vão conhecer novos personagens e viver inimagináveis aventuras.",
    "genreId": 1,
    "reviews": []
}
  

  return (
    <>
      <div className="container">
        <h3>Tela de listagem de filmes</h3>
        <div className="row">
          <div className="col-sm-6  col-lg-4 col-xl-3">
            <Link to="/movies/1">
            <MovieCard movie={movie}/>
            </Link>
          </div>
          <div className="col-sm-6  col-lg-4 col-xl-3">
            <Link to="/movies/1">
            <MovieCard movie={movie}/>
            </Link>
          </div>
          <div className="col-sm-6  col-lg-4 col-xl-3">
            <Link to="/movies/1">
            <MovieCard movie={movie}/>
            </Link>
          </div>
         
         
        </div>
      </div>
    </>
  );
};

export default Movie;
