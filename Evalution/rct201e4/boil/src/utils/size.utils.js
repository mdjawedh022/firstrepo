import { rem } from "polished";

/* units */
const sizeUnit = 8;

/* sizes */
const createSize = (size) => rem(`${size * sizeUnit}px`);

const sizes = {
  xs: createSize(2),
  sm: createSize(3),
  md: createSize(4),
  lg: createSize(5),
};

export const size = (size) => {
  if (typeof sizes[size] !== "undefined") {
    return sizes[size];
  } else {
    return sizes["md"];
  }
};
