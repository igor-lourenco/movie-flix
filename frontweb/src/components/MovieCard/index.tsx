import './styles.css';
import MovieImg from 'assets/images/MovieImage.png';

const MovieCard = () => {
    return (
        <div className="movie-card">
            <div className="card-top">
            <img src={MovieImg} alt="Nome do filme" />
            </div>
            
            <div className="card-bottom"> 
            <h6>Nome do filme</h6>
            <p>gênero</p>
            </div>
        </div>
    );
}
export default MovieCard;