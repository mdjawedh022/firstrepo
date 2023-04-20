import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./actionTypes";

const initialState = {
  shoe: [],
  isLoding: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_REQUEST:
      return { ...state, isLoding: true, isError: false };
    case GET_PRODUCT_SUCCESS:
      return { ...state, isLoding: false, isError: false, shoe: payload };
    case GET_PRODUCT_FAILURE:
      return { ...state, isLoding: false, isError: true };
    default:
      return state;
  }
};
