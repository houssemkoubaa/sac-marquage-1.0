import { LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/types";
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
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: 1,
        isLoading: 0,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
      localStorage.removeItem("item");
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
