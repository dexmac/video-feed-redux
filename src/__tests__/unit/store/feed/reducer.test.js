import * as types from "../../../../store/actionTypes";
import { VideoDisplayState } from "../../../../constants/constants";
import reducer from "../../../../store/feed/reducer";

describe("video feed reducer", () => {
  it("should return the initial state when called without one", () => {
    const initialState = {
      items: [],
      feedDisplayState: VideoDisplayState.INIT,
      errorString: ""
    };

    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCHING_FEED_ITEMS", () => {
    expect(
      reducer([], {
        type: types.FETCHING_FEED_ITEMS
      })
    ).toEqual({
      feedDisplayState: VideoDisplayState.FETCHING
    });
  });

  it("should handle FEED_ITEMS_FETCHED", () => {
    expect(
      reducer([], {
        type: types.FEED_ITEMS_FETCHED,
        payload: {
          items: ["a"]
        }
      })
    ).toEqual({
      items: ["a"],
      feedDisplayState: VideoDisplayState.FETCHED
    });
  });

  it("should handle FEED_ITEMS_FETCH_ERROR", () => {
    const errorString = "ERROR";
    expect(
      reducer([], {
        type: types.FEED_ITEMS_FETCH_ERROR,
        payload: {
          errorString: errorString
        }
      })
    ).toEqual({
      items: [],
      feedDisplayState: VideoDisplayState.ERROR,
      errorString: errorString
    });
  });
});
