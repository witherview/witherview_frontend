import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import profileExample from '@assets/images/profile_example.png';

const Wrapper = styled.div`
  width: ${({ isSmall }) => (isSmall ? 60 : 73)}px;
  height: ${({ isSmall }) => (isSmall ? 60 : 73)}px;
  border-radius: ${({ isSmall }) => (isSmall ? 10 : 20)}px;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.04);
  user-select: none;
  background-image: url(${({ src }) => src});
  background-position: center center;
  background-size: cover;
`;

export default function ProfileIcon({ src, isSmall }) {
  return (
    <Wrapper src={src} isSmall={isSmall} alt="profile_image" />
  );
}

ProfileIcon.propTypes = {
  src: PropTypes.string,
  isSmall: PropTypes.bool,
};

ProfileIcon.defaultProps = {
  src: profileExample,
  isSmall: false,
};
