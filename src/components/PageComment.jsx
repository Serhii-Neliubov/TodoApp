import React from "react";

const PageComment = ({ comment }) => {
  return (
    <div>
      <h3>{comment.name}</h3>
      <p>{comment.email}</p>
      <p>{comment.body}</p>
      <hr style={{ margin: "20px 0" }} />
    </div>
  );
};

export default PageComment;
