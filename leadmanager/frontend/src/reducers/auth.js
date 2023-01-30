import { USER_LOADED, USER_LOADING, AUTH_ERROR } from "../actions/types";
const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: 1,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: 1,
        isLoading: 0,
        user: action.payload,
      };
    case AUTH_ERROR:
      localStorage.remoItem("item");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: 0,
        isLoading: 0,
      };

    default:
      return state;
  }
}
