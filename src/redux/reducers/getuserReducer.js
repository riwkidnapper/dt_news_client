import { SET_LISTUSERS, LOADING_DATA, DELETE_USER } from "../types";

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
    case DELETE_USER:
      let index = state.getUsers.findIndex(
        users => users.getUser.userId === action.payload
      );
      state.getUsers.splice(index, 1);
      return {
        ...state
      };
    default:
      return state;
  }
}
