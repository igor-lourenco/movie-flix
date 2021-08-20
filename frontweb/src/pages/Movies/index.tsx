import { Movie } from "assets/types/movie";
import { SpringPage } from "assets/types/spring";
import { AxiosRequestConfig } from "axios";
import Filter, { MovieFilterData } from "components/Filter";
import Pagination from "components/Pagination";
import { useCallback } from "react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { requestBackend } from "util/requests";
import "./styles.css";

type ControlComponentsData = {
  activePage: number;
  filterData : MovieFilterData;
}

const Movies = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();
  const [controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>(
    {//mantém o estado dos dados de todos os componentes que fazem algum controle da listagem
    activePage: 0,
    filterData: { genre: null}
  });

  const handlePageChange = (pageNumber: number) => { //atualiza o estado que o componente devolve
    setControlComponentsData({activePage: pageNumber, filterData: controlComponentsData.filterData})
  }

  const handleSubmitFilter = (data : MovieFilterData) => {
    setControlComponentsData({activePage: 0, filterData: data})

  }

  
  const getMovies = useCallback(() => {
    const params: AxiosRequestConfig = {
      url: "/movies",
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
        size: 4,
        genreId: controlComponentsData.filterData.genre?.id
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div className="container my-4 movies-container">
      <div className="row titulo-container">
        <Filter onSubmitFilter={handleSubmitFilter} />
      </div>
      <div className="row ">
        {page?.content.map((item) => (
          <div key={item.id} className="col-sm-6 col-lg-3">
            <div className="base-card movie-card">
            <Link to={"/moviedetail/" + item.id.toString()}>
              <div className="movie-card-imagem-top">
                <img src={item.imgUrl} alt={item.title} />
              </div>
              <div className="movie-card-description-bottom">
                
                  <h4>{item.title}</h4>
                  <h6>{item.year}</h6>
                  <p>{item.subTitle}</p>
              </div>
                </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <Pagination pageCount={page ? page.totalPages : 0} range={3}
        onChange={handlePageChange}
        forcePage={page?.number} />
      </div>
    </div>
  );
};

export default Movies;
