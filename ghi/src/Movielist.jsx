import { useGetPopularMoviesQuery } from "./store/apiSlice";
import { useSelector } from "react-redux";
import MovieCard from "./Moviecard";

const MovieList = () => {
  const searchCriteria = useSelector((state) => state.search?.value);
  const { data, isLoading } = useGetPopularMoviesQuery({
    api_key: "0fd8a0e40883c8bc0578f44a534b1ed9",
  });

  console.log(data);

  const filteredMovies = () => {
    if (searchCriteria) {
      return data.results.filter((movie) =>
        movie.original_title.includes(searchCriteria)
      );
    } else {
      return data.results;
    }
  };

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="mt-3">
      <h1>
        Movie List{" "}
        <small className="text-body-secondary">
          {searchCriteria} - SEARCH TERM GOES HERE{" "}
        </small>
      </h1>
      <div className="row mt-3">
        {filteredMovies().map((movie) => (
          <>
            <MovieCard
              key={movie.id}
              title={movie.original_title}
              movie_id={movie.id}
            />
            <p> moviecard</p>
          </>
        ))}
        <MovieCard key="1" title="testDefault" movie_id="1" />
      </div>
    </div>
  );
};
export default MovieList;
