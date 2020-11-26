import React, { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import NameLabel from './NameLabel';
import RecLabel from './RecLabel';
import SmallCamView from './SmallCamView';

const Wrapper = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  position: relative;
`;

const WrapVideo = styled.video`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 20px;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);
  background-size: cover;
  object-fit: cover;
  overflow: hidden;
  z-index: -1;
`;

export default function CamView({
  oneOnOne,
  peerRef,
  width,
  height,
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
    <Wrapper width={width} height={height}>
      {name ? <NameLabel name={name} /> : <></>}
      {status === 'recording' ? <RecLabel /> : <></>}
      {/* TODO: src property의 mediaBolbUrl은 잘 녹화되었는지 테스트 목적 - 실제 서비스에선 제거되어야 함 */}
      <WrapVideo
        src={mediaBlobUrl}
        ref={videoRef}
        width={width}
        height={height}
        alt="image_view"
        autoPlay
        loop
        muted
      />
      {oneOnOne ? <SmallCamView peerRef={peerRef} /> : <></>}
    </Wrapper>
  );
}

CamView.propTypes = {
  oneOnOne: PropTypes.bool,
  peerRef: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  name: PropTypes.string,
  status: PropTypes.string.isRequired,
  mediaBlobUrl: PropTypes.string,
};

CamView.defaultProps = {
  oneOnOne: false,
  peerRef: undefined,
  width: 1167,
  height: 590,
  name: undefined,
  mediaBlobUrl: undefined,
};
