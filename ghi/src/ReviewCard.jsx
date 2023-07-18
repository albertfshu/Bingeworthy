import React from "react";
import { Link } from "react-router-dom";

const ReviewCard = ({ title, data }) => {
  return (
    <div className="mx-auto tile bg-teal-500" key={movie_id}>
      <h5 className="font-bold text-gray-200">
        {title[0].toUpperCase() + title.slice(1)}
      </h5>
      <a>Edit</a>
      {/* modal edit? */}
      <a>Delete</a>
      {/*  modal delete? */}
      <p>
        {data.commentor_id}
        {data.post_date}
      </p>
      <p>{data.comment}</p>
    </div>
  );
};

export default ReviewCard;
