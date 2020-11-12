import React from 'react';

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

export default function CamView({ src, width, height, name, isRecord }) {
  return (
    <Wrapper width={width} height={height}>
      {
        name ?
          <NameLabel name={name} /> : <></>
      }
      {
        isRecord ?
          <RecLabel /> : <></>
      }
      <WrapVideo width={width} height={height} alt="image_view" controls autoPlay>
        <source
          src={src}
          type="video/mp4" />
      </ WrapVideo>
    </Wrapper>
  );
}

CamView.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  name: PropTypes.string.isRequired,
  isRecord: PropTypes.bool.isRequired,
};

CamView.defaultProps = {
  src: "https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4",
  width: 1167,
  height: 590,
};
