import React from "react";
import VideoItemViewsNumber from "../../components/VideoItemViewsNumber";

describe("VideoItemViewsNumber", () => {
  let props;
  let mountedVideoItemViewsNumber;

  /**
   * Clearing props before each test
   */
  beforeEach(() => {
    props = {
      viewsNumber: undefined
    };
    mountedVideoItemViewsNumber = undefined;
  });

  /**
   * Shallow rendering vs. snapshot test
   */
  it("renders correctly && matches snapshot", () => {
    const tree = shallow(<VideoItemViewsNumber />);
    expect(tree).toMatchSnapshot();
  });

  /**
   * Mounts the component using Enzyme if it is not mounted yet
   * @returns {object} - returns the mounted component
   */
  const videoItemViewsNumber = () => {
    if (!mountedVideoItemViewsNumber) {
      mountedVideoItemViewsNumber = mount(<VideoItemViewsNumber {...props} />);
    }
    return mountedVideoItemViewsNumber;
  };

  describe("when `viewsNumber` is defined", () => {
    beforeEach(() => {
      props.viewsNumber = 123123;
    });

    it("sets the rendered `div` text to the same value as `viewsNumber`", () => {
      const myDiv = videoItemViewsNumber().find("div");
      const regExpToFindViewsNumber = new RegExp(
        props.viewsNumber ? props.viewsNumber : null,
        "g"
      );
      expect(myDiv.text()).toMatch(regExpToFindViewsNumber);
    });
  });

  describe("when `viewsNumber` is undefined", () => {
    beforeEach(() => {
      props.viewsNumber = undefined;
    });

    it("sets the rendered `div` text to be an empty string", () => {
      const myDiv = videoItemViewsNumber().find("div");
      expect(myDiv.text()).toBe("");
    });
  });
});
