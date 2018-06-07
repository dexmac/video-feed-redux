import React from "react";
import PropTypes from "prop-types";
import * as constants from "../constants/constants";
import Select from "react-select";
import "react-select/dist/react-select.css";

const VideoSourceSelect = ({ selectedValues, actionOnSelection }) => (
  <Select
    name="video-source-select"
    multi
    value={selectedValues}
    placeholder={constants.SELECT_VIDEO_SOURCE_PLACEHOLDER}
    onChange={actionOnSelection}
    options={[
      {
        value: constants.URL_VIDEO_SOURCE,
        label: constants.URL_VIDEO_SOURCE
      },
      {
        value: constants.YOUTUBE_VIDEO_SOURCE,
        label: constants.YOUTUBE_VIDEO_SOURCE
      },
      {
        value: constants.FACEBOOK_VIDEO_SOURCE,
        label: constants.FACEBOOK_VIDEO_SOURCE
      }
    ]}
  />
);

VideoSourceSelect.propTypes = {
  selectedValues: PropTypes.array,
  actionOnSelection: PropTypes.func.isRequired // onchange handler, supplied by feed manager
};

export default VideoSourceSelect;
