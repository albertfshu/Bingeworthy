import {
  useGetPopularMoviesQuery,
  useSearchMoviesQuery,
} from "./store/apiSlice";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import MovieCard from "./Moviecard";

const MovieList = () => {
  const searchCriteria = useSelector((state) => state.search?.value);
  const { data, isLoading } = useGetPopularMoviesQuery();
  const [pageCounter, setPageCounter] = useState(1);
  const [pageScroll, setPageScroll] = useState(0);
  let fullSearch = searchCriteria;

  if (searchCriteria[0] !== '') {
    fullSearch += "&page=" + pageCounter;
  }
  const { data: search, isLoading: isSearchLoading } = useSearchMoviesQuery(fullSearch);



  const handleScrollPageUp = () => {
    setPageScroll((prevPage) => (prevPage + 1));
  };

  const handleScrollPageDown = () => {
    setPageScroll((prevPage) => (prevPage - 1));
  };

  const handlePageUp = () => {
    setPageCounter((prevPage) => (prevPage === data.total_pages ? 1 : prevPage + 1));
  };

  const handlePageDown = () => {
    setPageCounter((prevPage) => (prevPage === 1 ? 1 : prevPage - 1));
  };


  const filteredMovie = () => {
    if (searchCriteria[0] !== '') {
      if (search === undefined) {
        return data.results;
      }
      return search.results;
    } else {
      return data.results;
    }
  };

  if (isLoading || isSearchLoading) return <div>Loading...</div>;

  const loopedMovie = [...filteredMovie(), ...filteredMovie(), ...filteredMovie()]; //store looped Movie shows

  return (
    <div className="movie-list mt-10 bg-cyan-800 w-full h-full rounded-lg relative">
      {(searchCriteria[0] !== '')
        ? (<>
          <div className="text-2xl text-white py-3 ml-5 text-center" style={{ fontFamily: "Impact" }}>
            {searchCriteria[0]} - Movie List - Page {pageCounter}
          </div>
          <div className="grid grid-cols-[1fr,8fr,1fr] ">
            <div><button className={"text-white hover:text-white/25 text-8xl my-auto w-full h-full"} onClick={handlePageDown}>◄</button></div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
              {
                filteredMovie().map((movie) => (
                  <div key={movie.id} className="movie-card w-1/10 px-2">
                    <MovieCard
                      title={movie.original_title}
                      media_id={movie.id}
                      poster={movie.poster_path}
                    />
                  </div>

                ))}
            </div>
            <div><button className={"text-white hover:text-white/25 text-8xl self-center w-full h-full"} onClick={handlePageUp}>►</button></div>
          </div>
        </>
        )
        : (<>
          <div className="movie-card-wrapper max-w-8xl mx-auto overflow-hidden pb-8">
            <div className="text-2xl text-white my-3 ml-5 text-center" style={{ fontFamily: "Impact" }}>TOP 20 POPULAR MOVIES</div>
            <div
              className="movie-card-slide-container flex transition-transform ease-in-out w-auto"
              style={{
                transform: `translateX(-${(pageScroll % 20) * 512}px)`,
              }}
            >
              {loopedMovie.map((movie, index) => (
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
            className={`navigation-arrow arrow-left left-0 top-7 transform -translate-y-1/2 absolute text-white ${pageScroll === 1 ? "hidden" : ""}`}
            onClick={handleScrollPageDown}
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
            onClick={handleScrollPageUp}
            style={{
              width: "30px", // Adjust the width as needed
              height: "30px", // Adjust the height as needed
              backgroundImage: "url('https://i.imgur.com/lDzZt5K.png')",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
          </button>
        </>
        )
      }
    </div >
  );
};

export default MovieList;
