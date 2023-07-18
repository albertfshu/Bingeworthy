import {
    useGetPopularTVQuery,
    useSearchTVQuery,
} from "./store/apiSlice";
import { useSelector } from "react-redux"
import MovieCard from "./MovieCard";

const TVlist = () => {
    const searchCriteria = useSelector((state) => state.search?.value);
    const { data, isLoading } = useGetPopularTVQuery();
    const { data: search, isSearchLoading } = useSearchTVQuery(searchCriteria);

    useEffect(() => {
        { data: search, isSearchLoading } = useSearchTVQuery(searchCriteria);
    })
    console.log(data);

    const searchCriteriaToLowercase = searchCriteria.toLowerCase();

    const filteredMovies = () => {
        if (searchCriteria && data) {
            return data.results.filter((movie) =>
                movie.original_title.toLowerCase().includes(searchCriteriaToLowercase)
            );
        } else {
            return data.results;
        }
    };

    if (isLoading) return <div>Loading...</div>;
    return (
        <div className="mt-3">
            <h1>
                TV List
                <small className="text-body-secondary">
                    {searchCriteria}
                </small>
            </h1>
            <div className="grid grid-cols-4 gap-8">
                {filteredMovies().map((movie) => (
                    <MovieCard
                        key={movie.id}
                        title={movie.original_title}
                        movie_id={movie.id}
                    />
                ))}
            </div>
        </div>
    )
}
