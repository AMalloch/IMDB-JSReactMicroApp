import React, { Component } from "react";
import Movie from "./Movie";

class MovieList extends Component {
  render(){
    const movieNodes = this.props.data.map(movie => {
      return (
        <Movie title={movie.title} key={movie.id}>
          <div className="movieLength">Length: {movie.length}</div>
          <div className="movieShowtime">Showtimes: {movie.showtimes}</div>
          <div className="movieDescription">Description: {movie.description}</div>
        </Movie>
      );
    });
    return <div className="movieList">{movieNodes}</div>;
  }
}

export default MovieList;
