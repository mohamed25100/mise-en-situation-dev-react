import React from 'react';
import YouTube from 'react-youtube';

const WIDTH = "500";
const HEIGHT = "300";

export function VideoPlayer1() {
  const opts = {
    width: WIDTH,
    height: HEIGHT,
    playerVars: {

      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return <YouTube videoId="GsZhStn1OgI" opts={opts} onReady={_onReady} />;
}

export function VideoPlayer2() {
  const opts = {
    width: WIDTH,
    height: HEIGHT,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return <YouTube videoId="HG-peM37juo" opts={opts} onReady={_onReady} />;
}

export function VideoPlayer3() {
  const opts = {
    width: WIDTH,
    height: HEIGHT,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return <YouTube videoId="03CmiZWN9nA" opts={opts} onReady={_onReady} />;
}
