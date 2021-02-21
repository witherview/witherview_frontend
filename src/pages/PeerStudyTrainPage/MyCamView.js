import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import M from '@molecules';

const Wrapper = styled.div`
  width: ${({ peers }) => (peers ? '66.3vh;' : '77.3vh;')}
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
  position: relative;
`;

export default function MyCamView({
  name, status, mediaBlobUrl, peers,
}) {
  return (
    <Wrapper peers={peers}>
      {name ? <M.NameLabel name={name} /> : <></>}
      {status === 'recording' ? <M.RecLabel /> : <></>}
      <WrapVideo ref={mediaBlobUrl} alt="image_view" autoPlay muted />
    </Wrapper>
  );
}

MyCamView.propTypes = {
  mediaBlobUrl: PropTypes.object,
  name: PropTypes.string,
  status: PropTypes.string,
  peers: PropTypes.bool,
};

MyCamView.defaultProps = {
  name: undefined,
  status: 'stopped',
};
