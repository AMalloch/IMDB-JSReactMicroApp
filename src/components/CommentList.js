import React, { Component } from "react";
import Comment from "./Comment";

class CommentList extends Component {
  render(){
    const commentNodes = this.props.data.map(comment => {
      return (
        <Comment title={comment.title} key={comment.id}>
          {comment.description}
        </Comment>
      );
    });
    return <div className="commentList">{commentNodes}</div>;
  }
}

export default CommentList;
