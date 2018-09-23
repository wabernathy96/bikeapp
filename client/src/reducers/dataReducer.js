import {
  GET_DATA_POINTS,
  CLEAR_DATA_POINTS,
  CLUSTER_DATA,
  UNCLUSTER_DATA
} from "../actions/types";

const initialState = {
  dataPoints: {},
  dataActive: false,
  clusterData: false
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
    case CLUSTER_DATA:
      return {
        ...state,
        clusterData: true
      }
    case UNCLUSTER_DATA:
      return {
        ...state,
        clusterData: false
      }
    default:
      return state;
  }
}