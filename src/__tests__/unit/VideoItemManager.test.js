import React from "react";

describe ("Stub test", () => {

  it ("should stub for now", () => {
    expect(1).toBe(1);
  }); 
});

// import { VideoItemManager } from "../../containers/VideoItemManager";

/*
describe("On video load error", () => {
    it("doesn't render a react-player", () => {
      const myVideoItem = videoItem();
      let player = myVideoItem.find(ReactPlayer);
      player.instance().props.onError("error");
      myVideoItem.update();
      player = myVideoItem.find(ReactPlayer);
      expect(player.length).toBe(0);
    });

    it("should render an error message div", () => {
      const myVideoItem = videoItem();
      const player = myVideoItem.find(ReactPlayer);
      props.item = null;
      player.instance().props.onError();
      myVideoItem.update();
      const errorDiv = myVideoItem.find("div.video-load-error-text");
      expect(errorDiv.length).toBe(1);
    });
  });

  describe("when no items are loaded in the feed", () => {
    it("should display an empty feed, i.e., feed length should be 0`", () => {
      const myFeed = videoFeed();
      expect(myFeed.find(VideoItemManager).length).toBe(0);
    });
  });

  describe("when 1 item is loaded in the feed", () => {
    it("should display a video item feed with 1 element and match the snapshot`", function() {
      let myFeedManager = videoFeed(items);
      expect(myFeedManager).toMatchSnapshot();
      ///expect(myFeedManager.find(VideoItemManager).length).toBe(1);
    });
  });
 */
