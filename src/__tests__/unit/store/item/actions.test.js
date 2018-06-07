import * as types from "../../../../store/actionTypes";
import * as actions from "../../../../store/item/actions";
import { VideoDisplayState } from "../../../../constants/constants";

describe("actions", () => {
  it("should create an action to load a video", () => {
    const item = {};
    const expectedAction = {
      type: types.LOADING_VIDEO,
      payload: {
        item,
        videoDisplayState: VideoDisplayState.FETCHING,
        errorString: ""
      }
    };
    expect(actions.loadVideoAction(item)).toEqual(expectedAction);
  });

  it("should create an action to finish loading video successfully", () => {
    const item = {};
    const expectedAction = {
      type: types.VIDEO_LOADING_SUCCESS,
      payload: {
        item: item,
        videoDisplayState: VideoDisplayState.FETCHED,
        errorString: ""
      }
    };
    expect(actions.videoLoadingSuccess(item)).toEqual(expectedAction);
  });

  it("should create an action to finish loading video erroneously", () => {
    const item = {};
    const errorString = "ERROR";

    const expectedAction = {
      type: types.VIDEO_LOADING_ERROR,
      payload: {
        item: item,
        videoDisplayState: VideoDisplayState.ERROR,
        errorString: errorString
      }
    };
    expect(actions.videoLoadingError({ error: errorString }, item)).toEqual(
      expectedAction
    );
  });
});
