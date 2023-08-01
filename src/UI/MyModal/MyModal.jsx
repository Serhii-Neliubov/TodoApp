import React from "react";
import classes from "./MyModal.module.css";
const MyModal = ({ children, setModalOpen }) => {
  return (
    <div onClick={() => setModalOpen(false)} className={classes.myModal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={classes.modalContainer}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
