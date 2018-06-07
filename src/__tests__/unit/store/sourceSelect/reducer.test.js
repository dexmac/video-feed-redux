import * as types from "../../../../store/actionTypes";
import reducer from "../../../../store/sourceSelect/reducer";

describe("video source selection reducer", () => {
  it("should return the initial state when called without one", () => {
    const initialState = {
      selectedSources: []
    };

    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle UPDATE_SOURCE_SELECTION", () => {
    expect(
      reducer([], {
        type: types.UPDATE_SOURCE_SELECTION,
        payload: {
          selectedSources: ["a", "b"]
        }
      })
    ).toEqual({
      selectedSources: ["a", "b"]
    });
  });
});
