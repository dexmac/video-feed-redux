import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../store/item/actions";
import store from "../store/store";
import VideoItem from "../components/VideoItem";
import { VideoDisplayState } from "../constants/constants";
import { ERR_LOADING_VIDEO_PREFIX } from "../constants/constants";

/**
 * Handles loading and displaying of video
 */
export class VideoItemManager extends Component {
  /**
   * Load the video item when component mounts
   */
  componentWillMount() {
    store.dispatch(actions.loadVideoAction(this.props.videoItem));
  }

  /**
   * Dispatch a loading success action when ReactPlayer successfully loads video
   * @param item
   */
  onVideoLoaded = item => {
    store.dispatch(actions.videoLoadingSuccess(item));
  };

  /**
   * Dispatch a loading error action - when ReactPlayer returns an error loading the video
   * @param error
   * @param item
   */
  onVideoError = (error, item) => {
    store.dispatch(actions.videoLoadingError(error, item));
  };

  render() {
    const VideoPlayer = (
      <VideoItem
        item={this.props.videoItem}
        onVideoError={this.onVideoError}
        onVideoLoaded={this.onVideoLoaded}
      />
    );

    let VideoItemDisplay;

    switch (this.props.videoDisplayState) {
      case VideoDisplayState.INIT:
      case VideoDisplayState.FETCHING:
      case VideoDisplayState.FETCHED:
        VideoItemDisplay = VideoPlayer;
        break;
      case VideoDisplayState.ERROR:
        VideoItemDisplay = (
          <div className="video-load-error-text">
            {ERR_LOADING_VIDEO_PREFIX} : {this.props.errorString}
          </div>
        );
        break;
      default:
        VideoItemDisplay = <div>ERROR: VideoItemManager - Unknown State</div>;
    }

    return <div>{VideoItemDisplay}</div>;
  }
}

VideoItemManager.propTypes = {
  videoItem: PropTypes.object
};

function mapStateToProps(state) {
  return {
    item: state.item.item,
    videoDisplayState: state.item.videoDisplayState,
    errorString: state.item.errorString
  };
}

export default connect(mapStateToProps)(VideoItemManager);
