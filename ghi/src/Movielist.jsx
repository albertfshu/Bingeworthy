import React, { useState } from "react";
import { useGetPopularMoviesQuery, useSearchMoviesQuery } from "./store/apiSlice";
import { useSelector } from "react-redux";
import MovieCard from "./Moviecard";

const MovieList = () => {
  const searchCriteria = useSelector((state) => state.search?.value);
  const { data, isLoading } = useGetPopularMoviesQuery();
  const { data: search, isLoading: isSearchLoading } = useSearchMoviesQuery(searchCriteria);

  const [pageCounter, setPageCounter] = useState(1);
  const moviesPerPage = 8;
  const totalMovies = searchCriteria ? (search?.total_results || 0) : (data?.total_results || 0);
  const totalPages = Math.ceil(totalMovies / moviesPerPage);

  const handlePageUp = () => {
    setPageCounter((prevPage) => (prevPage % totalPages) + 1);
  };

  const handlePageDown = () => {
    setPageCounter((prevPage) => {
      if (prevPage === 1) {
        return totalPages;
      } else {
        return prevPage - 1;
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
    <>
      <div className="text-2xl font-bold text-gray-200 my-3 ml-5">
        {(searchCriteria != '')
          ? <p>{searchCriteria[0]} - Movie List - Page {pageCounter}</p>
          : <p className="bold-font text-white text-center">Top 20 Popular TV Shows</p>
        }
      </div>
      {(searchCriteria != '')
        ? <div className="grid grid-cols-[1fr,8fr,1fr] ">
          <div><button className={"text-white hover:text-white/25 text-8xl my-auto w-full h-full"} onClick={handlePageDown}>◄</button></div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {
              filteredMovies().map((movie) => (
                <MovieCard
                  title={movie.original_title}
                  media_id={movie.id}
                  poster={movie.poster_path}
                />
              ))}
          </div>
          <div><button className={"text-white hover:text-white/25 text-8xl self-center w-full h-full"} onClick={handlePageUp}>►</button></div>
        </div>
        : <div className="movie-list mt-3 relative bg-gray-900">
          <div className="movie-card-wrapper max-w-6xl mx-auto overflow-hidden">
            <div
              className="movie-card-slide-container flex transition-transform ease-in-out"
              style={{
                transform: `translateX(-${(pageCounter - 1) * (100 / (moviesPerPage * 3))}%)`,
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
            className={`navigation-arrow arrow-left left-0 top-1/2 transform -translate-y-1/2 absolute text-white ${pageCounter === 1 ? "hidden" : ""}`}
            onClick={handlePageDown}
            style={{ fontSize: "1.5rem" }}
          >
            ◄
          </button>
          <button
            className="navigation-arrow arrow-right right-0 top-1/2 transform -translate-y-1/2 absolute text-white"
            onClick={handlePageUp}
            style={{ fontSize: "1.5rem" }}
          >
            ►
          </button>
        </div>
      }

    </>
  );
};

export default MovieList;
