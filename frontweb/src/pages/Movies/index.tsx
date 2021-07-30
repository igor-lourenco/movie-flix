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
    <div className="movies-container">
      <div className="titulo-container">
        <h1>Tela de listagem de filmes</h1>
      </div>
      <div className="lista-container">
        {page?.content.map((item) => (
          <div className="list-group" key={item.id}>
            <Link to={"/moviedetail/" + item.id.toString()} className="list-group-item list-group-item-action list-group-item-dark lista">{item.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;