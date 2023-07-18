import React from "react";
import { Link } from "react-router-dom";

const TVCard = ({ title, movie_id }) => {

  return (
    <div className="mx-auto tile bg-red-500" key={movie_id}>
      <h5 className="font-bold text-gray-200">
        {title[0].toUpperCase() + title.slice(1)}
      </h5>
      <Link to={`/tv/${movie_id}`}>Details</Link>
    </div>
  );
};

export default TVCard;
