import React from "react";
import { BorderBtn } from "./Pagination.styled";

type PaginationProps = {
  count: number;
  currentPage: number;
  updateCurrentPage: Function;
  onPageChange: Function;
};

const Pagination = (props: PaginationProps) => {
  const pagi = new Array(props.count)
    .fill(0)
    .map((el, ind) => (
      <BorderBtn onClick={() => props.updateCurrentPage(ind + 1)}>
        {ind + 1}
      </BorderBtn>
    ));
  return (
    <div style={{ textAlign: "center", margin: "11px auto" }}>
      <BorderBtn
        onClick={() => props.onPageChange(-1)}
        disabled={props.currentPage === 1}
        data-testid="pre"
      >
        Previous
      </BorderBtn>
      {pagi}
      <BorderBtn
        onClick={() => props.onPageChange(1)}
        disabled={props.currentPage === props.count}
        data-testid="next"
      >
        Next
      </BorderBtn>
    </div>
  );
};

export default Pagination;
