import React, { Component } from "react";
import CommentList from "../components/CommentList";

class CommentBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [{ id: 1, title: "Terminator 137", description: "I think Arnie is a bit past it now."}, { id:2, title: "Man on a ledge", description: "Whoever came up with that title really should write novels."}]
    };
  }
  render(){
    return (
      <div className="comment-box">
        <h2>Movies</h2>
        <CommentList data={this.state.data} />
    </div>
    );
  }
};


export default CommentBox;
