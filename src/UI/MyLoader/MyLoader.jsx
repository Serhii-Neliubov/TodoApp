import React from "react";
import classes from "./MyLoader.module.css";

const MyLoader = () => {
  return (
    <div className={classes.container}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default MyLoader;
