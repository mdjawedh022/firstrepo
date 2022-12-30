import React from "react";
import { Button, ButtonGroup, Center, Select } from "@chakra-ui/react";

const Pagination = ({ handleClick, handlePrev,handleLimit,handleFs,handleLs }) => {
  // TODO: Remove below const and instead import them from chakra

  return (
    <Center>
      <ButtonGroup>
        <Button data-cy="pagination-first-button" onClick={handleFs}>First</Button>
        <Button data-cy="pagination-previous-button" onClick={handlePrev}>
          Prev
        </Button>
        <Select data-cy="pagination-limit-select" onChange={handleLimit}>
          <option data-cy="pagination-limit-3" value="3">3</option>
          <option data-cy="pagination-limit-6" value="6">6</option>
          <option data-cy="pagination-limit-9" value="9">9</option>
        </Select>
        <Button data-cy="pagination-next-button" onClick={handleClick}>
          Next
        </Button>
        <Button data-cy="pagination-last-button" onClick={handleLs}>Last</Button>
      </ButtonGroup>
    </Center>
  );
};

export default Pagination;
