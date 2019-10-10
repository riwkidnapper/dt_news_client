import { LOADING_INDEX, SET_INDEX, DELETE_INDEX } from "../types";

const initialState = {
  payload: {
    title: "",
    subtitle: "",
    detail: "",
    image: [],
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_INDEX:
      return {
        ...state
      };
    case SET_INDEX:
      return {
        ...state,
        payload: action.payload
      };
    case DELETE_INDEX:
      let index = state.payload.image.findIndex(
        url => url === action.url
      );
      state.payload.image.splice(index, 1);
      return {
        ...state
      };
    default:
      return state;
  }
}