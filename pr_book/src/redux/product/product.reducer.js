import {
  GET_PRODUCT_ERR,
  GET_PRODUCT_REQ,
  GET_PRODUCT_SUC,
} from "./product.actionTypes";

const initialState = {
  products: [],
  isloading: false,
  iserror: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_REQ:
      return { ...state, isloading: true, iserror: false };
    case GET_PRODUCT_SUC:
      return { ...state, isloading: false, iserror: false, products: payload };
    case GET_PRODUCT_ERR:
      return { ...state, isloading: false, iserror: true };
    default:
      return state;
  }
};
