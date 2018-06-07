import * as types from "../../../../store/actionTypes";
import * as actions from "../../../../store/sourceSelect/actions";
import fetchMock from "fetch-mock";

describe("actions", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("should handle video source selection changes", () => {
    const selectedSources = ["url"];

    fetchMock.getOnce("http://localhost:4000/content/feed/items?sources=", {
      body: { items: [] },
      headers: { "content-type": "application/json" }
    });

    const expectedAction = {
      type: types.UPDATE_SOURCE_SELECTION,
      payload: {
        selectedSources
      }
    };
    expect(actions.handleSourceSelectionChange(selectedSources)).toEqual(
      expectedAction
    );

    expect(actions.handleSourceSelectionChange(undefined)).toEqual(undefined);
  });
});
