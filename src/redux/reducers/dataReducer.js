import {
  AMOUNT_CREDIT,
  LOADING_CONFIRM,
  SET_CONFIRM,
  DELETE_CONFIRM,
  LOADING_NEWS,
  SET_NEWS
} from "../types";

const initialState = {
  news: [],
  confirms: [],
  amount: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AMOUNT_CREDIT:
      return {
        ...state,
        amount: action.amount
      };
    case LOADING_CONFIRM:
      return {
        ...state
      };
    case SET_CONFIRM:
      return {
        ...state,
        confirms: action.payload
      };
    case DELETE_CONFIRM:
      return {
        ...state
      };
    case LOADING_NEWS:
      return {
        ...state
      };
    case SET_NEWS:
      return {
        ...state,
        news: action.payload
      };
    default:
      return state;
  }
}
