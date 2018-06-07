import * as types from "../actionTypes.js";
import { VideoDisplayState } from "../../constants/constants";

const initialState = {
  item: {},
  videoDisplayState: VideoDisplayState.INIT,
  errorString: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LOADING_VIDEO:
      return {
        ...state,
        videoDisplayState: VideoDisplayState.FETCHING
      };
    case types.VIDEO_LOADING_SUCCESS:
      return {
        ...state,
        item: action.payload.item,
        videoDisplayState: VideoDisplayState.FETCHED
      };
    case types.VIDEO_LOADING_ERROR:
      return {
        ...state,
        item: action.payload.item,
        videoDisplayState: VideoDisplayState.ERROR,
        errorString: action.payload.errorString
      };
    default:
      return state;
  }
}
