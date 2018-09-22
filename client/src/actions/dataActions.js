import axios from "axios";

import {
  GET_DATA_POINTS,
  CLEAR_DATA_POINTS,
  PASS_ERRORS
} from "./types.js";


// Add data points from bikewise
export const getDataPoints = () => dispatch => {
  axios
    .get("https://bikewise.org:443/api/v2/locations?proximity=Houston&proximity_square=100&all=true")
    .then(res =>
      dispatch(
        {
          type: GET_DATA_POINTS,
          payload: res.data
        }
      )
    )
    .catch(err =>
      dispatch(
        {
          type: PASS_ERRORS,
          payload: {
            dataPointsError: "An error occured while retrieving data points from Bikewise API endpoint"
          }
        }
      )
    )
}

// Clear data points from bikewise
export const clearDataPoints = res => dispatch => {
  dispatch(
    {
      type: CLEAR_DATA_POINTS,
      payload: {}
    }
  )
}


