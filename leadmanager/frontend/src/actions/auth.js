import axios from "axios";
import { config } from "react-transition-group";
import { returnErrors } from "./messages";
import { USER_LOADED, USER_LOADING, AUTH_ERROR } from "./types";
//check token and load user
export const loadUser = () => (dispatch, getState) => {
  //user loading
  dispatch({ type: USER_LOADING });
  //get token from state
  const token = getState().auth.token;
  //Header
  const config = {
    Headers: {
      "Content-type": "application/json",
    },
  };

  //if token add to headers config
  if (token) {
    config.headers["AUTHERIZATION"] = `Token ${token}`;
  }
  axios
    .get("/api/auth/user", config)
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};
