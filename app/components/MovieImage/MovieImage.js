import React from "react";
import "./style.scss";


const MovieImage = ({ image, date}) => (
  <div className="movie-image">
    <img src={`https://image.tmdb.org/t/p/w500${image}`} />
    <div className="dateTime">
      <p>Published</p>
      <time dateTime={date}>{date}</time>
    </div>
  </div>
);

export default MovieImage;