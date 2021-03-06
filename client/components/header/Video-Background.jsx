import React, { Component, PropTypes } from 'react';
import classnames from 'classnames/bind';

import style from './video-background.styl';
import poster from './poster.png';
import videoWebm from './bg-video.webm';
import videoMP4 from './bg-video.mp4';

const cx = classnames.bind(style);
const videoId = 'Video';
const propTypes = {
  poster: PropTypes.string
};

class BackgroundVideo extends Component {
  componentWillUnmount() {
    const doc = typeof window !== 'undefined' ?
      window.document :
      { getElementById: () => {} };
    const video = doc.getElementById(videoId);

    if (video) {
      video.pause();
      video.src = '';
      video.load();
    }
  }

  render() {
    return (
      <div>
        <video
          autoPlay={ true }
          className={ cx('background-video') }
          id={ videoId }
          muted={ true }
          poster={ poster }
          >
          <source
            src={ videoWebm }
            type='video/webm'
          />
          <source
            src={ videoMP4 }
            type='video/mp4'
          />
        </video>
        <div className={ cx('background-video-overlay') } />
      </div>
    );
  }
}

BackgroundVideo.propTypes = propTypes;
BackgroundVideo.displayName = 'BackgroundVideo';
export default BackgroundVideo;
