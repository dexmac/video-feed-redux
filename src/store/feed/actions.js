import * as types from "../actionTypes";
import { VideoDisplayState } from "../../constants/constants";
import { fetchFeedItems } from "../../services/feedItems";

/**
 * Thunk to fetch feed items asynchronously
 * @param sources
 * @returns {Function}
 */
export function fetchFeedItemsAction(sources = []) {
  return dispatch => {
    dispatch(fetchingFeed());
    return fetchFeedItems(sources)
      .then(retVal => {
        if (typeof retVal === "object" && retVal.length) {
          dispatch(fetchFeedSuccess(retVal));
        } else {
          dispatch(fetchFeedError(retVal));
        }
      })
      .catch(error => {
        dispatch(
          fetchFeedError({
            error: "Caught Error While Fetching Feed: " + error
          })
        );
      });
  };
}

export function fetchingFeed() {
  return {
    type: types.FETCHING_FEED_ITEMS,
    payload: {
      feedDisplayState: VideoDisplayState.FETCHING
    }
  };
}

export function fetchFeedSuccess(items) {
  return {
    type: types.FEED_ITEMS_FETCHED,
    payload: {
      items,
      feedDisplayState: VideoDisplayState.FETCHED
    }
  };
}

export function fetchFeedError(errJSON = {}) {
  const errorString = errJSON.error ? errJSON.error : "Unknown Error";
  return {
    type: types.FEED_ITEMS_FETCH_ERROR,
    payload: {
      feedDisplayState: VideoDisplayState.ERROR,
      errorString
    }
  };
}
