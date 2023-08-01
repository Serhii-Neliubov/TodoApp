import React from "react";
import classes from "./MyError.module.css";

const MyError = ({ setInputError, title }) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.text}>{title}</h2>
      <button className={classes.btn} onClick={() => setInputError(false)}>
        &times;
      </button>
    </div>
  );
};

export default MyError;
