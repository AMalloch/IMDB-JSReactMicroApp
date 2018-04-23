import React, { Component } from "react";
import MovieList from "../components/MovieList";
import '../App.css';

class MovieBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [{ id: 1, title: "Terminator 137", length: "102min", showtimes: "2:10 pm | 4:25 | 6:40 | 9:00", description: "I think Arnie is a bit past it now."}, { id:2, title: "Man on a ledge", length: "94 min", showtimes: "11:30 am | 4:15 pm | 6:30 | 8:45", description: "Whoever came up with that title really should write novels."}]
    };
  }
  render(){
    return (
      <div className="movie-box">
        <h2>Movies</h2>
        <MovieList data={this.state.data} />
    </div>
    );
  }
};


export default MovieBox;
