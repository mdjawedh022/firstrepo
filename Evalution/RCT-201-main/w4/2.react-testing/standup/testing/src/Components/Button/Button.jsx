import React from "react";

const Button = ({ children, onClick, disabled }) => {
  return (
    <div>
      <button disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
