import React, { Component } from "react";

class CommentList extends Component {
  render(){
    const commentNodes = this.props.data.map(comment => {
      return (
        <Comment author={comment.title} key={comment.id}>
          {comment.description}
        </Comment>
      );
    });
    return <div className="commentList">{commentNodes}</div>;
  }
}

export default CommentList;
