import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./actionType";

const loginRequestAction = () => {
  return { type: USER_LOGIN_REQUEST };
};

const loginSuccessAction = (payload) => {
  return { type: USER_LOGIN_SUCCESS, payload };
};

const loginFailAction = () => {
  return { type: USER_LOGIN_FAIL };
};

export const login = (userData) => (dispatch) => {
  dispatch(loginRequestAction());
  return axios
    .post(`https://reqres.in/api/login`, userData)
    .then((res) => {
      dispatch(loginSuccessAction(res.data.token));
    })
    .catch((e) => {
      dispatch(loginFailAction());
      alert(e, "fetching wrong");
    });
};
