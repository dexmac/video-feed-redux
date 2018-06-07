import React from "react";
import VideoItemTitle from "./VideoItemTitle";
import VideoItemViewsNumber from "./VideoItemViewsNumber";
import PropTypes from "prop-types";

const VideoItemHeader = ({ title = "", viewsNumber }) => (
  <div className="video-item-header">
    <VideoItemTitle className="video-item-title" title={title} />
    <VideoItemViewsNumber
      className="video-item-views-number"
      viewsNumber={viewsNumber}
    />
  </div>
);

VideoItemHeader.propTypes = {
  title: PropTypes.string,
  viewsNumber: PropTypes.number
};

export default VideoItemHeader;
