import * as types from "../../../../store/actionTypes";
import { VideoDisplayState } from "../../../../constants/constants";
import reducer from "../../../../store/item/reducer";

describe("video item reducer", () => {
  it("should return the initial state when called without one", () => {
    const initialState = {
      item: {},
      videoDisplayState: VideoDisplayState.INIT,
      errorString: ""
    };

    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle LOADING_VIDEO", () => {
    expect(
      reducer([], {
        type: types.LOADING_VIDEO
      })
    ).toEqual({
      videoDisplayState: VideoDisplayState.FETCHING
    });
  });

  it("should handle VIDEO_LOADING_SUCCESS", () => {
    expect(
      reducer([], {
        type: types.VIDEO_LOADING_SUCCESS,
        payload: {
          item: ["a"]
        }
      })
    ).toEqual({
      item: ["a"],
      videoDisplayState: VideoDisplayState.FETCHED
    });
  });

  it("should handle VIDEO_LOADING_ERROR", () => {
    const errorString = "ERROR";
    expect(
      reducer([], {
        type: types.VIDEO_LOADING_ERROR,
        payload: {
          item: ["a"],
          errorString: errorString
        }
      })
    ).toEqual({
      item: ["a"],
      videoDisplayState: VideoDisplayState.ERROR,
      errorString: errorString
    });
  });
});
