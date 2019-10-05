import { SET_LISTUSERS, LOADING_DATA } from "../types";
const initialState = {
  getUsers: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_LISTUSERS:
      return {
        ...state,
        getUsers: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
