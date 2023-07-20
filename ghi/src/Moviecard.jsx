import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ title, media_id }) => {
  const imageUrl = `https://api.themoviedb.org/3/movie/${media_id}/images`;

  return (
    <div className="w-5/6 mx-auto tile bg-teal-500 p-3" key={media_id}>
      <h5 className="font-bold text-gray-200">
        {title[0].toUpperCase() + title.slice(1)}
      </h5>
      <Link to={`/movie/${media_id}`}>Details</Link>
    </div>
  );
};

export default MovieCard;
