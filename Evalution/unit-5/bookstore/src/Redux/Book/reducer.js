import {
  GET_BOOK_ERROR,
  GET_BOOK_REQUEST,
  GET_BOOK_SUCCESS,
} from "./actionType";

const initialState = {
  book: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BOOK_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_BOOK_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GET_BOOK_SUCCESS: {
      return {
        ...state,
        book: payload,
        isLoading: false,
        isError: false,
      };
    }
    default: {
      return state;
    }
  }
};
