import { Movies } from "assets/types/movie";
import MovieCard from "../../components/MovieCard";
import {Link} from 'react-router-dom';
import { isAuthenticated } from "util/requests";

const Movie = () => {

  const movie : Movies = {
    "id": 1,
    "title": "Bob Esponja",
    "subTitle": "O Incrível Resgate",
    "year": 2020,
    "imgUrl": "https://image.tmdb.org/t/p/w533_and_h300_bestv2/wu1uilmhM4TdluKi2ytfz8gidHf.jpg",
    reviews : []
   
}
  

  return (
    <>
      <div className="container">
        <h3>Tela de listagem de filmes</h3>
        <div className="row">
        <h1>{isAuthenticated() ? 'autenticado' : 'não autenticado'}</h1>
          <div className="col-sm-6  col-lg-4 col-xl-3">
            <Link to="/movies/1/reviews">
            <MovieCard movie={movie}/>
            </Link>
          </div>
          <div className="col-sm-6  col-lg-4 col-xl-3">
            <Link to="/movies/2/reviews">
            <MovieCard movie={movie}/>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
