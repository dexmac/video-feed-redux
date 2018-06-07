import React from "react";
import PropTypes from "prop-types";

const VideoItemTitle = ({ title = "" }) => (
  <div className="video-item-title">{title}</div>
);

VideoItemTitle.propTypes = {
  title: PropTypes.string
};

export default VideoItemTitle;
