// Note: Do not update/change the initial state
import {
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_OUT,
} from "./auth.types";

const token = localStorage.getItem("token");
export const authInitalState = {
  loading: false,
  data: {
    token: token || "",
    isAuthenticated: !!token,
  },
  error: false,
};

export const authReducer = (state = authInitalState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGN_IN_LOADING: {
      return { ...authInitalState, loading: true };
    }
    case AUTH_SIGN_IN_SUCCESS: {
      localStorage.setItem("token", payload.token);
      return {
        ...authInitalState,
        data: {
          ...payload,
          isAuthenticated: true,
        },
      };
    }
    case AUTH_SIGN_IN_ERROR: {
      return {
        ...authInitalState,
        error: true,
      };
    }
    case AUTH_SIGN_OUT: {
      localStorage.removeItem("token");
      return authInitalState;
    }
    default: {
      return state;
    }
  }
};
