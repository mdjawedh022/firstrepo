import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./actionTypes";
import axios from "axios";

const getproductre = () => {
  return { type: GET_PRODUCT_REQUEST };
};
const getproductSuc = (payload) => {
  return { type: GET_PRODUCT_SUCCESS, payload };
};
const getproductfail = () => {
  return { type: GET_PRODUCT_FAILURE };
};

export const getData = () => async (dispatch) => {
  dispatch(getproductre());
  try {
    const data = await axios.get(`http://localhost:0420/shoe`);
    console.log(data);
    dispatch(getproductSuc(data.data));
  } catch (err) {
    dispatch(getproductfail());
    console.log(err);
  }
};
