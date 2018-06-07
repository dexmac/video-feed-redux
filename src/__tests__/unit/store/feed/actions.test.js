import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import * as types from "../../../../store/actionTypes";
import * as actions from "../../../../store/feed/actions";
import { VideoDisplayState } from "../../../../constants/constants";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("creates FEED_ITEMS_FETCHED when fetching fetchFeedItemsAction has been done", () => {
    const errorString = "ERROR";
    const items = [{ abc: "abc" }];

    fetchMock.getOnce("http://localhost:4000/content/feed/items", {
      body: { items },
      headers: { "content-type": "application/json" }
    });

    const expectedActions = [
      {
        type: types.FETCHING_FEED_ITEMS,
        payload: {
          feedDisplayState: VideoDisplayState.FETCHING
        }
      },
      {
        type: types.FEED_ITEMS_FETCHED,
        payload: {
          feedDisplayState: VideoDisplayState.FETCHED,
          items: [
            Object.assign(items[0], {
              url: "Unknown source - undefined"
            })
          ]
        }
      }
    ];
    const store = mockStore({ items: [] });
    return store.dispatch(actions.fetchFeedItemsAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("actions", () => {
  it("should create an action to signify we are currently fetching the feed", () => {
    const items = [];
    const expectedAction = {
      type: types.FETCHING_FEED_ITEMS,
      payload: {
        feedDisplayState: VideoDisplayState.FETCHING
      }
    };
    expect(actions.fetchingFeed(items)).toEqual(expectedAction);
  });

  it("should create an action to signify fetching the feed successfully", () => {
    const items = [{ a: "a" }];
    const expectedAction = {
      type: types.FEED_ITEMS_FETCHED,
      payload: {
        items,
        feedDisplayState: VideoDisplayState.FETCHED
      }
    };
    expect(actions.fetchFeedSuccess(items)).toEqual(expectedAction);
  });

  it("should create an action to signify fetching the feed erroneously", () => {
    const items = [{ b: "b" }];
    const errorString = "ERROR";

    const expectedAction = {
      type: types.FEED_ITEMS_FETCH_ERROR,
      payload: {
        feedDisplayState: VideoDisplayState.ERROR,
        errorString
      }
    };
    expect(actions.fetchFeedError({ error: errorString })).toEqual(
      expectedAction
    );
  });
});
