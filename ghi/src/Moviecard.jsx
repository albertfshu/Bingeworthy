import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ title, media_id, poster }) => {
  const posterUrl = poster
    ? `https://image.tmdb.org/t/p/original${poster}`
    : "https://via.placeholder.com/300";

  if (poster) {
    return (
      <div className="w-60 mx-auto bg-gray-600 p-3 rounded-md">
        <Link to={`/movie/${media_id}`}>
          <img className="shadow-md h-60 mx-auto center" src={posterUrl} alt={title} />
        </Link>
        <h5 className="font-bold text-gray-200 mt-3 text-center">
          {title[0].toUpperCase() + title.slice(1)}
        </h5>
      </div>
    );
  } else {
    // placeholder if there is no poster
    return (
      <div className="w-60 mx-auto bg-gray-800 rounded-md p-4">
        <div className="shadow-md h-60 mx-auto bg-gray-600"></div>
        <h5 className="font-bold text-gray-200 mt-3">
          {title[0].toUpperCase() + title.slice(1)}
        </h5>
        <Link
          to={`/movie/${media_id}`}
          className="block mt-2 text-sm text-white hover:text-teal-700"
        >
          Details
        </Link>
      </div>
    );
  }
};

export default MovieCard;
