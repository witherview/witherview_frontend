import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 226px;
  height: 152px;
  border-radius: 20px;
  border: solid 5px white;
  position: absolute;
  bottom: 30px;
  right: 32px;
`;

const WrapVideo = styled.video`
  z-index: 1;
  width: 226px;
  height: 152px;
  border-radius: 20px;
  object-fit: cover;
`;

export default function SmallCamView() {
  const userVideo = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        userVideo.current.srcObject = stream;
      });
  }, []);

  return (
    <Wrapper>
      <WrapVideo ref={userVideo} alt="peer_cam" autoPlay muted />
    </Wrapper>
  );
}
