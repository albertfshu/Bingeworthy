import React from "react";
import { Link } from "react-router-dom";

const TVCard = ({ title, media_id, poster }) => {

  if (poster) {
    return (
      <div className="w-60 h-80 mx-auto bg-gray-800 rounded-md p-4 text-center" key={TVCard}>
        <Link to={`/tv/${media_id}`}>
          <img
            className="border hover:shadow-lg shadow-white rounded-md shadow-md h-60 mx-auto"
            src={`https://image.tmdb.org/t/p/original${poster}`}
            alt={title}
          />
          <h5 className="font-bold text-gray-200 mt-3">
            {title[0].toUpperCase() + title.slice(1)}
          </h5>
        </Link>
      </div>
    );
  } else {
    // grey background placeholder if there is no poster
    return (
      <div className="w-60 mx-auto bg-gray-800 rounded-md p-4">
        <Link to={`/tv/${media_id}`}>
          <div className="shadow-md h-60 mx-auto bg-gray-600"></div>
          <h5 className="font-bold text-gray-200 mt-3">
            {title[0].toUpperCase() + title.slice(1)}
          </h5>
        </Link>
      </div>
    );
  }
};

export default TVCard;
