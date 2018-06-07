import * as types from "../actionTypes.js";
import { VideoDisplayState } from "../../constants/constants";

const initialState = {
  items: [],
  feedDisplayState: VideoDisplayState.INIT,
  errorString: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCHING_FEED_ITEMS:
      return {
        ...state,
        feedDisplayState: VideoDisplayState.FETCHING
      };
    case types.FEED_ITEMS_FETCHED:
      return {
        ...state,
        items: action.payload.items,
        feedDisplayState: VideoDisplayState.FETCHED
      };
    case types.FEED_ITEMS_FETCH_ERROR:
      return {
        ...state,
        items: [],
        feedDisplayState: VideoDisplayState.ERROR,
        errorString: action.payload.errorString
      };
    default:
      return state;
  }
}
