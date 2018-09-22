import {
  GET_DATA_POINTS,
  CLEAR_DATA_POINTS,
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
        dataActive: true
      };
    case CLEAR_DATA_POINTS:
      return {
        ...state,
        dataPoints: action.payload,
        dataActive: false
      };
    default:
      return state;
  }
}