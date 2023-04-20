import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./actionTypes";

const initialState = {
  cloths: [],
  isLoding: false,
  isError: false,
};

export const reducer = (state = initialState, { type, cloth }) => {
  switch (type) {
    case GET_PRODUCT_REQUEST:
      return { ...state, isLoding: true, isError: false };
    case GET_PRODUCT_SUCCESS:
      return { ...state, isLoding: false, isError: false, cloths: cloth };
    case GET_PRODUCT_FAILURE:
      return { ...state, isLoding: false, isError: true };
    default:
      return state;
  }
};
