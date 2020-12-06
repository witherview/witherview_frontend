import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import NameLabel from '@components/CamView/NameLabel';
import RecLabel from '@components/CamView/RecLabel';

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
  position: relative;
`;

export default function MyCamView({
  width,
  height,
  name,
  status,
  mediaBlobUrl,
}) {
  return (
    <Wrapper width={width} height={height}>
      {name ? <NameLabel name={name} /> : <></>}
      {status === 'recording' ? <RecLabel /> : <></>}
      <WrapVideo
        ref={mediaBlobUrl}
        width={width}
        height={height}
        alt="image_view"
        autoPlay
        muted
      />
    </Wrapper>
  );
}

MyCamView.propTypes = {
  mediaBlobUrl: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  name: PropTypes.string,
  status: PropTypes.string,
};

MyCamView.defaultProps = {
  width: 1167,
  height: 590,
  name: undefined,
  status: 'stopped',
};
