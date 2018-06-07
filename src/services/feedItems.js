import { fetchJSON } from "../helpers/fetchJSON";
import * as constants from "../constants/constants";

/**
 * Returns a proper video URL for playback by ReactPlayer component
 * @param item
 * @returns {string}
 */
function videoItemURLBySource(item = {}) {
  switch (item.source) {
    case constants.FACEBOOK_VIDEO_SOURCE:
      return `${constants.FACEBOOK_VIDEO_URL_PREFIX}${item.videoId}/`;
    case constants.YOUTUBE_VIDEO_SOURCE:
      return `${constants.YOUTUBE_VIDEO_URL_PREFIX}${item.videoId}/`;
    case constants.URL_VIDEO_SOURCE:
      return item.url ? item.url : constants.ERR_MISSING_URL_IN_FEED;
    default:
      return constants.ERR_UNKNOWN_VIDEO_SOURCE + " - " + item.source;
  }
}

/**
 * Preparing Video URLs and setting state when done to show videos
 * @param items : object (video items array)
 */
function prepareVideoItemURLs(items = []) {
  items.map(
    item => (item.url = item.url ? item.url : videoItemURLBySource(item))
  );

  return items;
}

/**
 * Fetching videos from feed endpoint + filter in query string & preparing videos for display
 * @param selectedSources - array - types to filter videos by - can be: '' / url / youtube / facebook
 */
export function fetchFeedItems(selectedSources = []) {
  const sourcesToFilter = selectedSources.map(source => source.value);
  const videoEndpointQueryString = selectedSources.length
    ? "?" +
      constants.QUERY_STRING_PARAM_SOURCES_ON_SERVER +
      "=" +
      sourcesToFilter.join(",")
    : "";
  const feedFetchURL = constants.VIDEO_FEED_ENDPOINT + videoEndpointQueryString;

  // Keeping a ref. to videoFeedFetchPromise due to need to cancel the fetch on component un-mounting
  return fetchJSON(feedFetchURL)
    .then(response => {
      let res =
        response && response.items
          ? prepareVideoItemURLs(response.items)
          : response;
      return res;
    })
    .catch(error => {
      return { error };
      // TODO: Cancellation of Fetch promise on Feed fetch failure...
      ///this.onFeedFetchError(err, feedFetchURL);
      // + componentWillUnmount() {
      //     this.videoFeedFetchPromise.cancel();
      //   }
    });
}
