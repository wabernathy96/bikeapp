import axios from "axios";

import {
  GET_DATA_POINTS,
  CLEAR_DATA_POINTS,
  CLUSTER_DATA,
  UNCLUSTER_DATA
} from "./types.js";


// Add data points from bikewise
export const getDataPoints = () => dispatch => {
  axios
    .get("https://bikewise.org:443/api/v2/locations?proximity=Houston&proximity_square=100&limit=250")
    .then(res =>
      dispatch(
        {
          type: GET_DATA_POINTS,
          payload: res.data
        }
      )
    )
    .catch(res =>
      res.status(400).json({ error: "An error occured while retrieving data points from Bikewise API endpoint" })
    )
}

// Clear data points from bikewise
export const clearDataPoints = () => dispatch => {
  dispatch(
    {
      type: CLEAR_DATA_POINTS,
      payload: {}
    }
  )
}

// Cluster Data
export const clusterData = () => dispatch => {
  dispatch(
    {
      type: CLUSTER_DATA
    }
  )
}

// Uncluster Data
export const unclusterData = () => dispatch => {
  dispatch(
    {
      type: UNCLUSTER_DATA
    }
  )
}
