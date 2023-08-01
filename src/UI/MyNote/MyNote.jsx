import React from "react";

const MyNote = ({ title, body }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ marginBottom: 0 }}>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default MyNote;
