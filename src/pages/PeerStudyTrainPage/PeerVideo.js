import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NameLabel from '@components/CamView/NameLabel';
import RecLabel from '@components/CamView/RecLabel';
import ButtonGroup from '@components/CamView/ButtonGroup';
import SamllCamView from '@components/CamView/SmallCamView';

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

export default function PeerVideo({
  peer,
  name,
  status,
  isTrain,
}) {
  const ref = useRef();

  useEffect(() => {
    peer.on('stream', (stream) => {
      ref.current.srcObject = stream;
    });
  }, []);

  return (
    <Wrapper isTrain={isTrain}>
      {peer && (
        <>
          {name ? <NameLabel name={name} /> : <></>}
          {status === 'recording' ? <RecLabel /> : <></>}
          <WrapVideo
            muted
            playsInline
            autoPlay
            ref={ref}
            isTrain={isTrain}
          />
          {isTrain && (
            <>
              <WrapButtonGroup>
                <ButtonGroup />
              </WrapButtonGroup>
              <SamllCamView />
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
  name: undefined,
  status: 'stopped',
};
