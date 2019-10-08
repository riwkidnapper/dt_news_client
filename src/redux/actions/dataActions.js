import {
  SET_LISTUSERS,
  CLEAR_ERRORS,
  DELETE_USER,
  EDIT_USER,
  SET_ERRORS
  // DELETE_SCREAM,
  // SET_ERRORS,
  // POST_SCREAM,

  // LOADING_UI,
  // SET_SCREAM,
  // STOP_LOADING_UI,
  // SUBMIT_COMMENT
} from "../types";
import axios from "axios";

// Get all screams
export const getUsers = () => dispatch => {
  axios
    .get("/list/users")
    .then(res => {
      dispatch({
        type: SET_LISTUSERS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SET_LISTUSERS,
        payload: []
      });
    });
};

export const deleteUser = userId => {
  return async dispatch => {
    try {
      await axios
        .post("/list/users/delete/" + userId)
        .then(() => {
          dispatch({ type: DELETE_USER, payload: userId });
          return Promise.resolve(true);
        })
        .catch(err => {
          console.log(err);
          return Promise.resolve(false);
        });
    } catch (err) {
      console.log(err);
      return Promise.reject();
    }
  };
};

export const editUser = (userId, editUserdata, history) => dispatch => {
  axios
    .post("/list/users/update/" + userId, editUserdata)
    .then(res => {
      dispatch(getUsers());
      history.push("/admin/user-page");
      dispatch({ type: EDIT_USER });
    })
    .catch(err => {});
};

export const clearErrors = () => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
};
