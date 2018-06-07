import React from "react";
import jest from "jest-mock";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
import { VideoSourceSelectionManager } from "../../containers/VideoSourceSelectionManager";
import { mapStateToProps } from "../../containers/VideoSourceSelectionManager";

describe("VideoSourceSelectionManager", () => {
  let props;
  let mountedVideoSourceSelectionManager;

  /**
   * Clearing props before each test
   */
  beforeEach(() => {
    props = {
      selectedSources: ["url"]
    };
    mountedVideoSourceSelectionManager = undefined;
  });

  /**
   * Shallow rendering vs. snapshot test
   */
  it("renders correctly && matches snapshot", () => {
    const tree = shallow(<VideoSourceSelectionManager />);
    expect(tree).toMatchSnapshot();
  });

  /**
   * Mounts the component using Enzyme if it is not mounted yet
   * @returns {object} - returns the mounted component
   */
  const videoSourceSelect = () => {
    if (!mountedVideoSourceSelectionManager) {
      mountedVideoSourceSelectionManager = mount(
        <VideoSourceSelectionManager {...props} />
      );
    }
    return mountedVideoSourceSelectionManager;
  };

  describe("when `fetchVideos` method is defined and a source has been selected", () => {
    beforeEach(() => {
      props.selectedSources = ["url"];
    });

    it("calls the actionOnSelection method & checks mapStateToProps", () => {
      const videoSelect = videoSourceSelect();
      // Need to find better way to mock and call method from actual source
      videoSelect.instance().actionOnSelection([]);
      const initialState = { sourceSelect: props };
      expect(mapStateToProps(initialState)).toEqual(props);
    });
  });
});
