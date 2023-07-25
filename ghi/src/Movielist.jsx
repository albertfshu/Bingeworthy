import React, { useState } from "react";
import { useGetPopularMoviesQuery, useSearchMoviesQuery } from "./store/apiSlice";
import { useSelector } from "react-redux";
import MovieCard from "./Moviecard";

const MovieList = () => {
  const searchCriteria = useSelector((state) => state.search?.value);
  const { data, isLoading } = useGetPopularMoviesQuery();
  const { data: search, isLoading: isSearchLoading } = useSearchMoviesQuery(searchCriteria);

  const [pageCounter, setPageCounter] = useState(1);
  const moviesPerPage = 20;
  const totalMovies = searchCriteria ? (search?.total_results || 0) : (data?.total_results || 0);
  const totalPages = Math.ceil(totalMovies / moviesPerPage);

  const handlePageUp = () => {
    setPageCounter((prevPage) => (prevPage % totalPages) + 5);
  };

  const handlePageDown = () => {
    setPageCounter((prevPage) => {
      if (prevPage === 5) {
        return totalPages;
      } else {
        return prevPage - 5;
      }
    });
  };

  const filteredMovies = () => {
    if (searchCriteria) {
      return search?.results || [];
    } else {
      return data?.results || [];
    }
  };

  if (isLoading || isSearchLoading) return <div>Loading...</div>;

  // Additional copies of movie posters to create seamless loop
  const loopedMovies = [...filteredMovies(), ...filteredMovies(), ...filteredMovies()];

  return (
    <div className="movie-list mt-10 mb-10 bg-cyan-800 w-full rounded-lg relative">
      <div className="movie-card-wrapper max-w-8xl mx-auto overflow-hidden">
        <div className="text-2xl text-white my-3 ml-5 text-center" style={{ fontFamily: "Impact" }}>TOP 20 POPULAR MOVIES</div>
        <div
          className="movie-card-slide-container flex transition-transform ease-in-out w-auto"
          style={{
            transform: `translateX(-${(pageCounter - 1) * (100 / (moviesPerPage * 8))}%)`,
          }}
        >
          {loopedMovies.map((movie, index) => (
            <div key={index} className="movie-card w-1/10 px-2">
              <MovieCard
                title={movie.original_title}
                media_id={movie.id}
                poster={movie.poster_path}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className={`navigation-arrow arrow-left left-0 top-7 transform -translate-y-1/2 absolute text-white ${pageCounter === 1 ? "hidden" : ""}`}
        onClick={handlePageDown}
        style={{
          width: "30px", // Adjust the width as needed
          height: "30px", // Adjust the height as needed
          backgroundImage: "url('https://i.imgur.com/Og4W6uT.png')",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
      </button>
      <button
        className="navigation-arrow arrow-right right-0 top-7 transform -translate-y-1/2 absolute text-white"
        onClick={handlePageUp}
        style={{
          width: "30px", // Adjust the width as needed
          height: "30px", // Adjust the height as needed
          backgroundImage: "url('https://i.imgur.com/lDzZt5K.png')",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
      </button>
      {/* Additional div for the border-like bottom */}
      <div
        className="absolute w-full bottom-0 left-0 bg-cyan-800"
        style={{ height: "8px" }} // Adjust the height as needed
      ></div>
    </div>
  );
};

export default MovieList;
