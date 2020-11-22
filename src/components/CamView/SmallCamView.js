import React from 'react';

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
    width: 226px;
    height: 152px;
    border-radius: 20px;
    object-fit: cover;
`;

export default function SmallCamView({ peerRef }) {
  return (
    <Wrapper>
      <WrapVideo ref={peerRef} alt="peer_cam" autoPlay muted />
    </Wrapper>
  );
}

SmallCamView.propTypes = {
  peerRef: PropTypes.object.isRequired,
};
