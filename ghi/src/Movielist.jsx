import {
  useGetPopularMoviesQuery,
  useSearchMoviesQuery,
} from "./store/apiSlice";
import { useSelector } from "react-redux";
import MovieCard from "./Moviecard";

const MovieList = () => {
  const searchCriteria = useSelector((state) => state.search?.value);
  const { data, isLoading } = useGetPopularMoviesQuery();
  const { data: search, isLoading: isSearchLoading } = useSearchMoviesQuery(searchCriteria)

  console.log(data);
  console.log(search);

  const searchCriteriaToLowercase = searchCriteria.toLowerCase();

  const filteredMovies = () => {
    if (searchCriteria) {
      // return data.results.filter((movie) =>
      //   movie.original_title.toLowerCase().includes(searchCriteriaToLowercase)
      // )
      return search.results;
    } else {
      return data.results;
    }
  };

  if (isLoading || isSearchLoading) return <div>Loading...</div>;
  return (
    <div className="mt-3">
      <h2 className="text-2xl font-bold text-gray-200"> Searching for {searchCriteria} </h2>
      <h1 className="text-gray-200">
        Movie List{" "}
      </h1>
      <div className="grid grid-cols-4 gap-8">
        {
          filteredMovies().map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.original_title}
              movie_id={movie.id}
            />
          ))}
      </div>
    </div>
  );
};
export default MovieList;
