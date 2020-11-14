import React, { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import NameLabel from './NameLabel';
import RecLabel from './RecLabel';

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

export default function CamView({ peerRef, width, height, name, status, mediaBlobUrl }) {
  const videoRef = useRef(null);

  const setupStream = () => {
    if (peerRef) {
      videoRef = peerRef
    }
    navigator.mediaDevices.
    getUserMedia({ video: true, audio: true })
    .then((stream) => {
      videoRef.current.srcObject = stream;
    })
    .catch(error => {/* TODO: Handle error */});
  };

  useEffect(() => {
    setupStream()
  }, [peerRef])

  // TODO: 해당 useEffect는 잘 녹화되었는지 테스트 목적 - 실제 서비스에선 제거되어야 함
  useEffect(() => {
    if (status === "stopped") {
      videoRef.current.srcObject = undefined;
    } 
    if (status === "recording") {
      setupStream()
    }
  }, [status])

  return (
    <Wrapper width={width} height={height}>
      {
        name ?
          <NameLabel name={name} /> : <></>
      }
      {
        status === "recording" ?
          <RecLabel /> : <></>
      }
      {/* TODO: src property의 mediaBolbUrl은 잘 녹화되었는지 테스트 목적 - 실제 서비스에선 제거되어야 함*/}
      <WrapVideo src={mediaBlobUrl} ref={videoRef} width={width} height={height} alt="image_view" controls autoPlay loop muted />
    </Wrapper>
  );
}

CamView.propTypes = {
  peerRef: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  mediaBlobUrl: PropTypes.bool.isRequired,
};

CamView.defaultProps = {
  peerRef: undefined,
  width: 1167,
  height: 590,
};
