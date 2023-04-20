import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./actionTypes";
import axios from "axios";

const getproductre = () => {
  return { type: GET_PRODUCT_REQUEST };
};
const getproductSuc = (cloth) => {
  return { type: GET_PRODUCT_SUCCESS, cloth };
};
const getproductfail = () => {
  return { type: GET_PRODUCT_FAILURE };
};

export const getDataCloths = () => async (dispatch) => {
  dispatch(getproductre());
  try {
    const data = await axios.get(`http://localhost:420/cloths`);
    console.log(data);
    dispatch(getproductSuc(data.data));
  } catch (err) {
    dispatch(getproductfail());
    console.log(err);
  }
};
