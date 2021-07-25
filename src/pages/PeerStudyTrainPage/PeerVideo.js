import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import M from '@molecules';

const Wrapper = styled.div`
  width: ${({ isTrain }) => (isTrain ? '83.3vh;' : '66.3vh;')}
  height: 59vh;
  position: relative;
`;

const WrapVideo = styled.video`
  width: 98%;
  height: 100%;
  border-radius: 2vh;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.1);
  background-size: cover;
  object-fit: cover;
  overflow: hidden;
  z-index: -1;
  ${({ isTrain }) => !isTrain && 'margin-left: 2%;'}
`;

const WrapButtonGroup = styled.div`
  position: absolute;
  bottom: 3vh;
  left: 3.4vh;
`;

export default function PeerVideo({ peer, name, status, isTrain }) {
  const ref = useRef();

  useEffect(() => {
    ref.current.srcObject = peer.stream;
  }, [peer]);

  return (
    <Wrapper isTrain={isTrain}>
      {peer && (
        <>
          {name ? <M.NameLabel name={name} /> : <></>}
          {status === 'recording' ? <M.RecLabel /> : <></>}
          <WrapVideo muted playsInline autoPlay ref={ref} isTrain={isTrain} />
          {isTrain && (
            <>
              <WrapButtonGroup>
                <M.ButtonGroup />
              </WrapButtonGroup>
              <M.SmallCamView />
            </>
          )}
        </>
      )}
    </Wrapper>
  );
}

PeerVideo.propTypes = {
  peer: PropTypes.object,
  name: PropTypes.string,
  status: PropTypes.string,
  isTrain: PropTypes.bool,
};

PeerVideo.defaultProps = {
  peer: {},
  status: 'stopped',
};
