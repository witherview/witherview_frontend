import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WrapVideo = styled.video`
  height: 40%;
  width: 50%;
`;

export default function PeerVideo({ peer }) {
  const ref = useRef();

  useEffect(() => {
    peer.on('stream', (stream) => {
      ref.current.srcObject = stream;
    });
  }, []);

  return <WrapVideo playsInline autoPlay ref={ref} />;
}

PeerVideo.propTypes = {
  peer: PropTypes,
};

PeerVideo.defaultProp = {
  peer: {},
};
