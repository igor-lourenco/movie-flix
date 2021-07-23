import MovieCard from "../../components/MovieCard";

const Movie = () => {
  return (
    <>
      <div className="container">
        <h3>Tela de listagem de filmes</h3>
        <div className="row">
          <div className="col-sm-6  col-lg-4 col-xl-3">
            <MovieCard />
          </div>
          <div className="col-sm-6  col-lg-4 col-xl-3">
            <MovieCard />
          </div>
          <div className="col-sm-6  col-lg-4 col-xl-3">
            <MovieCard />
          </div>
          <div className="col-sm-6  col-lg-4 col-xl-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
