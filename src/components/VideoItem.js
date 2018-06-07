import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import VideoItemHeader from "./VideoItemHeader";

const VideoItem = ({
  item = {},
  onVideoLoaded = () => {},
  onVideoError = () => {}
}) => (
  <div className="video-item">
    <VideoItemHeader
      title={item.title ? item.title : ""}
      viewsNumber={item.views}
    />
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={item.url ? item.url : null}
        key={item.videoId ? item.videoId : null}
        width="100%"
        height="100%"
        loop={true}
        onError={e => {
          onVideoError(item.url ? e + " for url: " + item.url : e, item);
        }}
        onReady={() => {
          onVideoLoaded(item);
        }}
        playing
        muted
        playsinline
        config={{
          file: {
            attributes: { muted: "true", autoPlay: "true" }
          }
        }}
      />
    </div>
  </div>
);

VideoItem.propTypes = {
  onVideoLoaded: PropTypes.func,
  onVideoError: PropTypes.func,
  item: PropTypes.shape({
    url: PropTypes.string,
    source: PropTypes.string,
    videoId: PropTypes.string,
    title: PropTypes.string,
    views: PropTypes.number
  })
};

export default VideoItem;
