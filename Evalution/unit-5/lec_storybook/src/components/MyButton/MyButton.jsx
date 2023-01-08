import React from "react";

const MyButton = ({ disabled = false, onClick }) => {
  return (
    <div>
      <button disabled={disabled} onClick={onClick}>
        MyButton
      </button>
    </div>
  );
};

// 




export default MyButton;
