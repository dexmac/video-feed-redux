import React from "react";
import VideoItemHeader from "../../components/VideoItemHeader";

describe("VideoItemHeader", () => {
  let props;
  let mountedVideoItemHeader;

  /**
   * Clearing props before each test
   */
  beforeEach(() => {
    props = {
      title: undefined,
      viewsNumber: undefined
    };
    mountedVideoItemHeader = undefined;
  });

  /**
   * Shallow rendering vs. snapshot test
   */
  it("renders correctly && matches snapshot", () => {
    const tree = shallow(<VideoItemHeader />);
    expect(tree).toMatchSnapshot();
  });

  /**
   * Mounts the component using Enzyme if it is not mounted yet
   * @returns {object} - returns the mounted component
   */
  const videoItemHeader = () => {
    if (!mountedVideoItemHeader) {
      mountedVideoItemHeader = mount(<VideoItemHeader {...props} />);
    }
    return mountedVideoItemHeader;
  };

  describe("when `title` && 'views' are defined", () => {
    beforeEach(() => {
      props.viewsNumber = 12345;
      props.title = "myTitle";
    });

    it("sets the rendered child component props to the same values", () => {
      const viewsNumber = videoItemHeader().find("VideoItemViewsNumber");
      expect(viewsNumber.props().viewsNumber).toEqual(12345);

      const title = videoItemHeader().find("VideoItemTitle");
      expect(title.props().title).toEqual("myTitle");
    });
  });

  describe("when `title` && 'views' are undefined", () => {
    beforeEach(() => {
      props.viewsNumber = undefined;
      props.title = undefined;
    });

    it("sets the rendered child component props to empty string", () => {
      const viewsNumber = videoItemHeader().find("VideoItemViewsNumber");
      expect(viewsNumber.props().viewsNumber).toEqual(undefined);

      const title = videoItemHeader().find("VideoItemTitle");
      expect(title.props().title).toEqual("");
    });
  });
});
