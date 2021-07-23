import './styles.css';
import { Movies } from 'assets/types/movie';

type Props = {
    movie: Movies;
}

const MovieCard = ({movie} : Props) => {
    return (
        <div className="movie-card">
            <div className="card-top">
            <img src={movie.imgUrl} alt={movie.title}/>
            </div>
            
            <div className="card-bottom"> 
            <h6>{movie.title}</h6>
            <p>{movie.year}</p>
            </div>
        </div>
    );
}
export default MovieCard;