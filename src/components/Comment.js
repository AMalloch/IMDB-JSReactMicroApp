import React from "react";

const Comment = (props) => (
  <div className="comment">
    <h4 className="commentTitle">{props.title}</h4>
    <p className="commentDescription">{props.children}</p>
  </div>
);

export default Comment;
