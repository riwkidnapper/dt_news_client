import {
  SET_LISTUSERS,
  DELETE_USER,
  LOADING_INDEX,
  SET_INDEX,
  DELETE_INDEX
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

export const editUser = (userId, editUserdata) => dispatch => {
  axios
    .post("/list/users/update/" + userId, editUserdata)
    .then(res => {
      dispatch(getUsers());
    })
    .catch(err => {});
};

// Get all index
export const getIndex = () => dispatch => {
  dispatch({ type: LOADING_INDEX });
  axios
    .get("/data/index")
    .then(res => {
      dispatch({
        type: SET_INDEX,
        payload: res.data
      });
    })
    .catch(err => {});
};

export const editIndex = (data) => dispatch => {
  axios
    .post("/data/index/update", data)
    .then(res => {
      dispatch(getIndex());
    })
    .catch(err => {});
};

export const uploadImage = (data) => dispatch => {
  axios
    .post("/data/index/upload", data)
    .then(res => {
      dispatch(getIndex());
    })
    .catch(err => {});
};

export const deleteImage = url => dispatch => {
  axios
    .post("/data/index/delete", { url: url })
    .then(() => {
      dispatch({ type: DELETE_INDEX, url: url });
    })
    .catch(err => {});
};
