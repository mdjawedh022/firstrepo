import React, { useState } from "react";
import Button from "../Button/Button";


const Slider = ({ data }) => {

  const [page, setPage] = useState(0);

  
  return (
    <div data-testid="slider">
      {data.length !== 0 &&
        data.map((el, index) => {
          if (index === page) {
            return (
              <div key={el.id}>
                <h3 data-testid="question">{el.question}</h3>
                <p data-testid="ans">{el.ans}</p>
              </div>
            );
          }
          return false;
        })}
      <div>
        <Button
          data-testid="prev_btn"
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
        >
          pre
        </Button>
        <Button
          data-testid="next_btn"
          disabled={page === data.length - 1}
          onClick={() => setPage(page + 1)}
        >
          next
        </Button>
      </div>
    </div>
  );
};

export default Slider;
