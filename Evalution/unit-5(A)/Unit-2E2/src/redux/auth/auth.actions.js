// Auth Actions here
import {
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_OUT,
} from "./auth.types";
import axios from "axios";
// import { useParams } from "react-router-dom";

export const login = (params) => (dispatch) => {
  dispatch({ type: AUTH_SIGN_IN_LOADING });
  axios
    .post("https://reqres.in/api/login", {
      email: params.email,
      password: params.password,
    })
    .then((res) => {
      return dispatchEvent({ type: AUTH_SIGN_IN_SUCCESS, payload: res.data });
    })
    .catch(() => dispatch({ type: AUTH_SIGN_IN_ERROR }));
};

export const logout = () => ({ type: AUTH_SIGN_OUT });
