import React from "react";
import VideoItemTitle from "../../components/VideoItemTitle";

describe("VideoItemTitle", () => {
  let props;
  let mountedVideoItemTitle;

  /**
   * Clearing props before each test
   */
  beforeEach(() => {
    props = {
      title: undefined
    };
    mountedVideoItemTitle = undefined;
  });

  /**
   * Shallow rendering vs. snapshot test
   */
  it("renders correctly && matches snapshot", () => {
    const tree = shallow(<VideoItemTitle />);
    expect(tree).toMatchSnapshot();
  });

  /**
   * Mounts the component using Enzyme if it is not mounted yet
   * @returns {object} - returns the mounted component
   */
  const videoItemTitle = () => {
    if (!mountedVideoItemTitle) {
      mountedVideoItemTitle = mount(<VideoItemTitle {...props} />);
    }
    return mountedVideoItemTitle;
  };

  describe("when `title` is defined", () => {
    beforeEach(() => {
      props.title = "myTitle";
    });

    it("sets the rendered `div` text to the same value as `title`", () => {
      const myDiv = videoItemTitle().find("div");
      expect(myDiv.text()).toBe(props.title);
    });
  });

  describe("when `title` is undefined", () => {
    beforeEach(() => {
      props.title = undefined;
    });

    it("sets the rendered `div` text to be an empty string", () => {
      const myDiv = videoItemTitle().find("div");
      expect(myDiv.text()).toBe("");
    });
  });
});
