import * as types from "../actionTypes";
import { VideoDisplayState } from "../../constants/constants";

// TODO: Unify video item and video feed load, success and error into single thunk-middleware
// https://redux.js.org/recipes/reducing-boilerplate

export function loadVideoAction(item) {
  return {
    type: types.LOADING_VIDEO,
    payload: {
      item: item,
      videoDisplayState: VideoDisplayState.FETCHING,
      errorString: ""
    }
  };
}

export function videoLoadingSuccess(item) {
  return {
    type: types.VIDEO_LOADING_SUCCESS,
    payload: {
      item: item,
      videoDisplayState: VideoDisplayState.FETCHED,
      errorString: ""
    }
  };
}

export function videoLoadingError(errJSON, item) {
  const errorString = errJSON.error;
  return {
    type: types.VIDEO_LOADING_ERROR,
    payload: {
      item: item,
      videoDisplayState: VideoDisplayState.ERROR,
      errorString
    }
  };
}
