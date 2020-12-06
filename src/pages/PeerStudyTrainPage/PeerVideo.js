import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NameLabel from '@components/CamView/NameLabel';
import RecLabel from '@components/CamView/RecLabel';
import ButtonGroup from '@components/CamView/ButtonGroup';
import SamllCamView from '@components/CamView/SmallCamView';

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

const WrapButtonGroup = styled.div`
  position: absolute;
  bottom: 30px;
  left: 34px;
`;

export default function PeerVideo({
  peer,
  width,
  height,
  name,
  status,
  mediaBlobUrl,
}) {
  const ref = useRef();

  useEffect(() => {
    peer.on('stream', (stream) => {
      ref.current.srcObject = stream;
    });
  }, []);

  return (
    <Wrapper width={width} height={height}>
      {peer && (
        <>
          {name ? <NameLabel name={name} /> : <></>}
          {status === 'recording' ? <RecLabel /> : <></>}
          <WrapVideo
            width={width}
            height={height}
            muted
            playsInline
            autoPlay
            ref={ref}
          />
          <WrapButtonGroup>
            <ButtonGroup />
          </WrapButtonGroup>
          {peer && <SamllCamView peerRef={mediaBlobUrl} />}
        </>
      )}
    </Wrapper>
  );
}

PeerVideo.propTypes = {
  peer: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  name: PropTypes.string,
  status: PropTypes.string,
  mediaBlobUrl: PropTypes.string,
};

PeerVideo.defaultProps = {
  peer: {},
  width: 1167,
  height: 590,
  name: undefined,
  status: 'stopped',
  mediaBlobUrl: '',
};
