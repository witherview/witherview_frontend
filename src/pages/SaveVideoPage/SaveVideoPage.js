/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import ReactHlsPlayer from 'react-hls-player';
import ReactHLS from 'react-hls';

import 'video.js/dist/video-js.css';

import { getVideoApi } from '@repository/requestVideoRepository';
import {
  setUploadedLocation,
  setIsLoading,
} from '@store/Train/train';
import { get } from '@utils/snippet';
import Icon from '@components/Icon';

const VideoContainer = styled.figure`
  width: 470px;
  margin: 50%;

  & video {
    width: 100%;
    border-radius: 20px;
  }
`;

const ControlWrapper = styled.div`
  overflow: hidden;
  background-color: #ffffff;
  width: 100%;
  position: relative;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
  box-sizing: border-box;

  &[data-state="hidden"] {
    display: none;
  }
  &[data-state="visible"] {
    display: block;
  }
`;

const ButtonWrapper = styled.button`
  display: block;
  height: 100%;
  float: left;
  border: none;
  cursor: pointer;
  background: transparent;
  margin: 0;
  padding: 0;

  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.5;
  }
`;

const ProgressWrapper = styled.div`
  display: block;
  width: 80%;
  height: 100%;
  float: left;
  margin-left: 5%;
  padding: 0;

  & progress {
    display: block;
    width: 100%;
    margin-top: 1.125rem;
    border: none;
    overflow: hidden;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    color: #6e6eff;
    cursor: pointer;

    &::-moz-progress-bar {
      background-color: #6e6eff;
    }
    &::-webkit-progress-value {
      background-color: #6e6eff;
    }
    &::-webkit-progress-bar {
      background-color: #d3d3d3;
    }
  }
`;

const CheckPointWrapper = styled.div`
  position: relative;
  background: transparent;

  & > div {
    position: absolute;
    cursor: pointer;
  }
`;

const CheckPoint = styled.div`
  left: calc(${({ point }) => `${point}% - 9px`});
`;

export default function SaveVideoPage() {
  const dispatch = useDispatch();
  const [playPauseBtn, setPlayPauseBtn] = useState(true);
  const { uploadedLocation, isLoading } = useSelector(get('train'));
  const video = useRef();
  const progress = useRef();
  const playpause = useRef();
  const videoControls = useRef();

  // function initVideo(src) {
  //   const player = videojs('video', {
  //     controls: true,
  //     preload: 'auto',
  //     fluid: true,
  //   });

  //   player.src({'src' : 'https://api.witherview.com/videos/test@test.com/self/13.m3u8'});
  // }

  useEffect(() => {
    getVideoApi().then((resp) => {
      dispatch(setIsLoading({ isLoading: false }));
      const { savedLocation } = resp.data.find(
        (elem) => elem.id === 553,
      );
      dispatch(setUploadedLocation({ uploadedLocation: savedLocation }));
    });
  }, []);

  // useEffect(() => {
  //   initVideo(uploadedLocation);
  // }, [uploadedLocation]);

  const loadVideoMetaData = useCallback(
    () => progress.current.setAttribute('max', video.current.duration),
    [],
  );

  const changeButtonState = useCallback(() => {
    if (video.current.paused || video.current.ended) {
      playpause.current.setAttribute('data-state', 'play');
    } else {
      playpause.current.setAttribute('data-state', 'pause');
    }
  }, []);

  const onPlay = useCallback(() => changeButtonState(), []);

  const onPause = useCallback(() => changeButtonState(), []);

  const onPlayPause = useCallback(() => {
    if (video.current.paused || video.current.ended) {
      video.current.play();
    } else {
      video.current.pause();
    }
    setPlayPauseBtn(!playPauseBtn);
  }, [playPauseBtn]);

  const onProgressClck = useCallback((evt) => {
    const pos = (evt.pageX
        - (progress.current.offsetLeft
          + progress.current.offsetParent.offsetLeft))
      / progress.current.offsetWidth;
    video.current.currentTime = pos * video.current.duration;
  }, []);

  const onTimeUpdate = useCallback(() => {
    if (!progress.current.getAttribute('max')) {
      progress.current.setAttribute('max', video.current.duration);
    }
    progress.current.value = video.current.currentTime;
    if (progress.current.max === progress.current.value) {
      setPlayPauseBtn(true);
    }
  }, []);

  return (
    <div>
      {isLoading
        || (
        <div>
          <VideoContainer>
            <ReactHlsPlayer
              url="https://api.witherview.com/videos/test@test.com/self/553.m3u8"
              autoplay
              controls
              width={500}
              height={375}
            />
            <ReactHLS url="https://api.witherview.com/videos/test@test.com/self/553.m3u8" />
            {/* <ReactHlsPlayer
              url="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
              autoplay={false}
              controls
              width={500}
              height={375}
            />
            <ReactHLS url="https://api.witherview.com/videos/test@test.com/self/553.m3u8" /> */}

            {uploadedLocation}
            <ControlWrapper ref={videoControls} data-state="hidden">
              <ButtonWrapper
                ref={playpause}
                type="button"
                data-state="play"
                onClick={onPlayPause}
              >
                <Icon
                  type={playPauseBtn ? 'play_blue' : 'pause'}
                  isCircle
                  alt="play/button"
                />
              </ButtonWrapper>
              <ProgressWrapper>
                <progress
                  ref={progress}
                  value="0"
                  min="0"
                  onClick={onProgressClck}
                />
                <CheckPointWrapper>
                  {[25, 50, 75].map((item) => (
                    <CheckPoint point={item} key={`${item}point`}>
                      <Icon
                        type="arrow_up_blue"
                        alt="section"
                        func={onProgressClck}
                      />
                    </CheckPoint>
                  ))}
                </CheckPointWrapper>
              </ProgressWrapper>
            </ControlWrapper>
          </VideoContainer>
        </div>
        )}
    </div>
  );
}
