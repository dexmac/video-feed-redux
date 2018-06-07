export const VIDEO_FEED_ENDPOINT = "http://localhost:4000/content/feed/items";
export const FACEBOOK_VIDEO_URL_PREFIX =
  "https://www.facebook.com/facebook/videos/";
export const YOUTUBE_VIDEO_URL_PREFIX = "https://www.youtube.com/embed/";

export const FACEBOOK_VIDEO_SOURCE = "facebook";
export const YOUTUBE_VIDEO_SOURCE = "youtube";
export const URL_VIDEO_SOURCE = "url";
export const QUERY_STRING_PARAM_SOURCES_ON_SERVER = "sources";

export const SELECT_VIDEO_SOURCE_PLACEHOLDER = "Sources to filter by...";
export const NAVBAR_BRAND = "Video Feed";
export const ERR_MISSING_URL_IN_FEED = "Missing video URL in feed item";
export const ERR_UNKNOWN_VIDEO_SOURCE = "Unknown source";
export const ERR_LOADING_VIDEO_PREFIX = "Error loading ";

export const VideoDisplayState = Object.freeze({
  INIT: Symbol("INIT"),
  FETCHING: Symbol("FETCHING"),
  FETCHED: Symbol("FETCHED"),
  ERROR: Symbol("ERROR")
});
