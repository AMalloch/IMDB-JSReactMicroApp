import React from "react";

const Movie = (props) => (
  <div className="movie">
    <h3 className="movieTitle">{props.title}</h3>
    <h4 className="cmovieDescription">{props.children}</h4>
  </div>
);

export default Movie;
