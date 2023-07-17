import { useGetPopularMoviesQuery } from "./store/apiSlice";
import { useSelector } from 'react-redux';
import MovieCard from "./Moviecard";

const MovieList = () => {
    const searchCriteria = useSelector((state) => state.search?.value)
    const { data,isLoading } = useGetPopularMoviesQuery({
        api_key: "0fd8a0e40883c8bc0578f44a534b1ed9"
    })

    const filteredMovies = () => {
        if (searchCriteria) {
            return data.filter(movie => movie.title.includes(searchCriteria));
        } else {
            return [];
        }
    };

    if (isLoading) return <div>Loading...</div>
    return (
        <div className='mt-3'>
        <h1>
            Movie List{' '}
            <small className='text-body-secondary'>{searchCriteria}</small>
        </h1>
            <div className="row mt-3">
                {filteredMovies().map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
        </div>
    )
    }
export default MovieList;
