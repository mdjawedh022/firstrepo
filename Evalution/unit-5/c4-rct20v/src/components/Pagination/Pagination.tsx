import React from "react";

type PaginationProps = {
  count: number;
  currentPage: number;
  updateCurrentPage: (val: number) => void;
};

const Pagination = (props: PaginationProps , 
  
  label:"Pagination"
  ) => {

  return <div
  style={{
    "marginLeft":"28em",
    "marginBottom": "10em" 
  }}>
    <h1

    >Pagination </h1>
    
    <button disabled={props.currentPage <= 1} onClick={() => props.updateCurrentPage(props.currentPage - 1)}
    
    >
      Perious 
    </button>


    <button>
      {props.currentPage}
    </button>

    
    <button disabled={props.currentPage > props.count} onClick={() => props.updateCurrentPage(props.currentPage + 1)}>
      next
    </button>

  </div>;
};

export default Pagination;
