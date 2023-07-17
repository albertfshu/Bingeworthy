import { Link } from 'react-router-dom';

const MovieCard = ({ title, movie_id }) => {
    const imageUrl = `https://api.themoviedb.org/3/movie/${movie_id}/images`


    return (
        <div className="col-3">
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{title[0].toUpperCase() + title.slice(1)}</h5>
                    <Link to={`/movie/${movie_id}`}>Details</Link>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;
