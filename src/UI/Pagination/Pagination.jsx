import React from "react";
import MyButton from "../MyButton/MyButton";
import { getPagesArray } from "../../utils/pages";

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {pagesArray.map((p) => {
        return (
          <MyButton
            style={page == p ? { border: "1px solid red" } : {}}
            key={p}
            onClick={() => changePage(p)}
          >
            {p}
          </MyButton>
        );
      })}
    </div>
  );
};

export default Pagination;
