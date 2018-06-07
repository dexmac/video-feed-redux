import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFeedItemsAction } from "../store/feed/actions";
import VideoSourceSelectionManager from "../containers/VideoSourceSelectionManager";
import VideoItemManager from "../containers/VideoItemManager";
import { VideoDisplayState } from "../constants/constants";
import store from "../store/store";

/**
 * Fetches and displays multiple video items as a single video feed
 */
export class VideoFeedManager extends Component {
  /**
   * Fetch videos with the selected sources when video source selection changes / on startup
   * @param sources
   */
  fetchVideos = sources => {
    store.dispatch(fetchFeedItemsAction(sources));
  };

  /**
   * Video feed component entry point -
   * Fetching feeds from all sources (URL, facebook & youtube)
   */
  componentDidMount() {
    this.fetchVideos();
  }

  render() {
    let Feed;

    switch (this.props.feedDisplayState) {
      case VideoDisplayState.INIT:
      case VideoDisplayState.FETCHING:
        Feed = <div className="loader" />;
        break;
      case VideoDisplayState.FETCHED:
        Feed = (
          <div className="video-feed-container">
            <VideoSourceSelectionManager fetchVideos={this.fetchVideos} />
            <div className="video-feed">
              {this.props.items.map((item, i) => {
                return <VideoItemManager videoItem={item} key={i} />;
              })}
            </div>
          </div>
        );
        break;
      case VideoDisplayState.ERROR:
        Feed = (
          <div className="video-load-error-text">{this.props.errorString}</div>
        );
        break;
      default:
        Feed = <div />;
    }

    return Feed;
  }
}

function mapStateToProps(state) {
  return {
    items: state.feed.items,
    feedDisplayState: state.feed.feedDisplayState,
    errorString: state.feed.errorString
  };
}

export default connect(mapStateToProps)(VideoFeedManager);
