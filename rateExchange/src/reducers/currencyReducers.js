import { SET_AMOUNT2, SET_AMOUNT1 } from "../actions/types";
const initialState = {
  amount1: 1,
  amount2: 0,
  c1: "USD",
  c2: "CNY"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AMOUNT2:
      return {
        ...state,
        amount2: action.payload
      };
    case SET_AMOUNT1:
      return {
        ...state,
        amount1: action.payload
      };
    default:
      return state;
  }
};
