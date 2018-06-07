import React from "react";
import PropTypes from "prop-types";

const VideoItemViewsNumber = ({ viewsNumber }) => (
  <div className="video-item-views-number">
    {viewsNumber >= 0 ? "Views: " + viewsNumber : ""}
  </div>
);

VideoItemViewsNumber.propTypes = {
  viewsNumber: PropTypes.number
};

export default VideoItemViewsNumber;
