import {
  GET_DATA_POINTS,
  CLEAR_DATA,
  PASS_ERRORS
} from "../actions/types";

const initialState = {
  dataPoints: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DATA_POINTS:
      return {
        ...state,
        dataPoints: action.payload,
      }
    default:
      return state;
  }
}