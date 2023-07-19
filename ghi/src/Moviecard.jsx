import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ title, movie_id }) => {
  const imageUrl = `https://api.themoviedb.org/3/movie/${movie_id}/images`;

  return (
    <div className="w-5/6 mx-auto tile bg-teal-500 p-3" key={movie_id}>
      <h5 className="font-bold text-gray-200">
        {title[0].toUpperCase() + title.slice(1)}
      </h5>
      <Link to={`/movie/${movie_id}`}>Details</Link>
    </div>
  );
};

export default MovieCard;
