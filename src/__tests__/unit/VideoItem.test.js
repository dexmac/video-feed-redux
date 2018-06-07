import React from "react";
import jest from "jest-mock";
import VideoItem from "../../components/VideoItem";
import VideoItemHeader from "../../components/VideoItemHeader";
import ReactPlayer from "react-player";

describe("VideoItem", () => {
  let props;
  let mountedVideoItem;

  /**
   * Clearing props before each test
   */
  beforeEach(() => {
    props = {
      item: {}
    };
    mountedVideoItem = undefined;
  });

  /**
   * Shallow rendering vs. snapshot test
   */
  it("renders correctly && matches snapshot", () => {
    const tree = shallow(<VideoItem />);
    expect(tree).toMatchSnapshot();
  });

  /**
   * Mounts the component using Enzyme if it is not mounted yet
   * @returns {object} - returns the mounted component
   */
  const videoItem = () => {
    if (!mountedVideoItem) {
      mountedVideoItem = mount(<VideoItem {...props} />);
    }
    return mountedVideoItem;
  };

  describe("when `title` is defined", () => {
    beforeEach(() => {
      props.item.title = "myTitle";
    });

    it("sets the rendered text to the same value as `title`", () => {
      const header = videoItem().find(VideoItemHeader);
      expect(header.props().title).toBe(props.item.title);
    });
  });

  describe("when `title` is undefined", () => {
    beforeEach(() => {
      props.item.title = undefined;
    });

    it("sets the rendered text to empty", () => {
      const header = videoItem().find(VideoItemHeader);
      expect(header.props().title).toBe("");
    });
  });

  describe("when `views` is defined", () => {
    beforeEach(() => {
      props.item.views = 12345;
    });

    it("sets the rendered text to the same value as `views`", () => {
      const header = videoItem().find(VideoItemHeader);
      expect(header.props().viewsNumber).toBe(props.item.views);
    });
  });

  describe("when `views` is undefined", () => {
    beforeEach(() => {
      props.item.views = undefined;
    });

    it("sets the rendered text to empty", () => {
      const header = videoItem().find(VideoItemHeader);
      expect(header.props().viewsNumber).toBe(undefined);
    });
  });

  describe("when `url` is defined", () => {
    beforeEach(() => {
      props.item.url = "myURL";
    });

    it("sets the rendered text to the same value as `url`", () => {
      const player = videoItem().find(ReactPlayer);
      expect(player.props().url).toBe(props.item.url);
    });
  });

  describe("when `url` is undefined", () => {
    beforeEach(() => {
      props.item.url = undefined;
    });

    it("sets the rendered text to be null", () => {
      const player = videoItem().find(ReactPlayer);
      expect(player.props().url).toBe(null);
    });
  });

  describe("when an item is rendered", () => {
    beforeEach(() => {
      props.item.url = undefined;
      props.item.videoId = "test";
    });

    it("always renders wrapper div around video player", () => {
      const wrapperDiv = videoItem().find("div.player-wrapper");
      expect(wrapperDiv.length).toBe(1);
    });

    it("always renders a react player first", () => {
      const player = videoItem().find(ReactPlayer);
      expect(player.length).toBe(1);
    });

    it("Should run onload and onerror methods without crashing", () => {
      const player = videoItem()
        .find(ReactPlayer)
        .instance().props;
      player.onReady();
      player.onError();
      props.item.url = "test";
      player.onError();
    });
  });
});
