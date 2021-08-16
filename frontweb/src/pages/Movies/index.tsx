import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { requestBackend } from "util/requests";
import "./styles.css";

type SpringPage<T> = {
  content: T[];
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  numberOfElements?: number;
  empty: boolean;
};

type Filme = {
  id: number;
  title: string;
  subTitle: string;
  imgUrl: string;
  year: number;
};

const Movies = () => {
  const [page, setPage] = useState<SpringPage<Filme>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: "/movies",
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <div className="container my-4 movies-container">
      <div className="row titulo-container">
        <h1>Tela de listagem de filmes</h1>
      </div>
      <div className="row ">
        {page?.content.map((item) => (
          <div key={item.id} className="col-sm-6 col-lg-3">
            <div className="base-card movie-card">
              <div className="movie-card-imagem-top">
                <img src={item.imgUrl} alt={item.title} />
              </div>
              <div className="movie-card-description-bottom">
                <Link to={"/moviedetail/" + item.id.toString()}>
                  <h4>{item.title}</h4>
                  <h6>{item.year}</h6>
                  <p>{item.subTitle}</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
