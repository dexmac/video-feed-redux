import React, { Component } from "react";
import PropTypes from "prop-types";
import VideoSourceSelect from "../components/VideoSourceSelect";
import { connect } from "react-redux";
import store from "../store/store";
import { handleSourceSelectionChange } from "../store/sourceSelect/actions";

/**
 * Handles video source selection and filtering of videos based on types
 */
export class VideoSourceSelectionManager extends Component {
  actionOnSelection = selectedSources => {
    store.dispatch(handleSourceSelectionChange(selectedSources));
  };

  render() {
    const selectedValues = this.props.selectedSources
      ? this.props.selectedSources.map(source => source.value)
      : [];

    return (
      <VideoSourceSelect
        selectedValues={selectedValues}
        actionOnSelection={this.actionOnSelection}
      />
    );
  }
}

VideoSourceSelect.propTypes = {
  selectedSources: PropTypes.array
};

export function mapStateToProps(state) {
  return {
    selectedSources: state.sourceSelect.selectedSources
  };
}

export default connect(mapStateToProps)(VideoSourceSelectionManager);
