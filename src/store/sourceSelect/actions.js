import * as types from "../actionTypes";
import store from "../store";
import { fetchFeedItemsAction } from "../feed/actions";

/**
 * Handle Source selection change - re-fetching videos and displaying based on new filter
 * @param selectedSources
 */
export function handleSourceSelectionChange(selectedSources) {
  if (typeof selectedSources === "object") {
    // Filtering videos based on selected / empty source
    store.dispatch(fetchFeedItemsAction(selectedSources));

    // Updating select box to reflect new change
    return {
      type: types.UPDATE_SOURCE_SELECTION,
      payload: {
        selectedSources
      }
    };
  } else {
    console.warn("Error - selected sources not an object ", selectedSources);
  }
}
