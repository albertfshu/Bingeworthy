import React from "react";
import { Link } from "react-router-dom";

const TVCard = ({ title, tv_id }) => {

  return (
    <div className="w-5/6 mx-auto tile bg-red-500 p-3" key={tv_id}>
      <h5 className="font-bold text-gray-200">
        {title[0].toUpperCase() + title.slice(1)}
      </h5>
      <Link to={`/tv/${tv_id}`}>Details</Link>
    </div>
  );
};

export default TVCard;
