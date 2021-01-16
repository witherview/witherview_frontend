import React, { useEffect, useRef } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 22.6vh;
  height: 15.2vh;
  border-radius: 2vh;
  border: solid 0.5vh white;
  position: absolute;
  bottom: 3vh;
  right: 3.2vh;
`;

const WrapVideo = styled.video`
  z-index: 1;
  width: 22.6vh;
  height: 15.2vh;
  border-radius: 2vh;
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
