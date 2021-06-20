import React, { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import M from '@molecules';

import { cleanUpStream } from '@utils/snippet';

const Wrapper = styled.div`
  height: 59vh;
  width: ${({ isShowAnswer }) => (isShowAnswer ? '77.3' : '132.6')}vh;
  position: relative;
`;

const WrapVideo = styled.video`
  height: 100%;
  width: 100%;
  border-radius: 2vh;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.1);
  background-size: cover;
  object-fit: cover;
  overflow: hidden;
  z-index: -1;
`;

export default function CamView({
  oneOnOne,
  peerRef,
  isShowAnswer,
  name,
  status,
  mediaBlobUrl,
}) {
  const videoRef = useRef(null);

  const setupStream = () => {
    if (!oneOnOne && peerRef) {
      videoRef.current = peerRef;
    }
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => () => cleanUpStream(videoRef.current.srcObject), []);

  useEffect(() => {
    setupStream();
  }, [peerRef]);

  // TODO: 해당 useEffect는 잘 녹화되었는지 테스트 목적 - 실제 서비스에선 제거되어야 함
  useEffect(() => {
    if (status === 'stopped') {
      videoRef.current.srcObject = undefined;
    }
    if (status === 'recording') {
      setupStream();
    }
  }, [status]);

  return (
    <Wrapper isShowAnswer={isShowAnswer}>
      {name ? <M.NameLabel name={name} /> : <></>}
      {status === 'recording' ? <M.RecLabel /> : <></>}
      {/* TODO: src property의 mediaBolbUrl은 잘 녹화되었는지 테스트 목적 - 실제 서비스에선 제거되어야 함 */}
      <WrapVideo
        src={mediaBlobUrl}
        ref={videoRef}
        isShowAnswer={isShowAnswer}
        alt="image_view"
        autoPlay
        loop
        muted
      />
      {oneOnOne ? <M.SmallCamView peerRef={peerRef} /> : <></>}
    </Wrapper>
  );
}

CamView.propTypes = {
  oneOnOne: PropTypes.bool,
  peerRef: PropTypes.object,
  isShowAnswer: PropTypes.bool,
  name: PropTypes.string,
  status: PropTypes.string,
  mediaBlobUrl: PropTypes.string,
};

CamView.defaultProps = {
  oneOnOne: false,
  peerRef: undefined,
  name: undefined,
  status: 'stopped',
  mediaBlobUrl: undefined,
};
