import React from "react";

type PaginationProps = {
  count: number;
  currentPage: number;
  updateCurrentPage: Function;
  handleClick: Function;
};

const Pagination = (props: PaginationProps) => {
  const button = new Array(props.count).fill(0).map((a, i) => (
    <button
      onClick={() => props.updateCurrentPage(i + 1)}
      disabled={props.currentPage === i + 1}
    >
      {i + 1}
    </button>
  ));

  return (
    <div style={{ textAlign: "center", margin: "10px auto" }}>
      <button
        onClick={() => props.handleClick(-1)}
        disabled={props.currentPage === 1}
      >
        Previous
      </button>
      {button}
      <button
        onClick={() => props.handleClick(1)}
        disabled={props.currentPage === props.count}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
