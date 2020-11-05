import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import profileExample from '../../assets/images/profile_example.png';

const Wrapper = styled.div`
  width: ${({ size }) => (size === 'small' ? 60 : 73)}px;
  height: ${({ size }) => (size === 'small' ? 60 : 73)}px;
  border-radius: ${({ size }) => (size === 'small' ? 10 : 20)}px;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.04);
  user-select: none;
  background-image: url(${({ src }) => src});
  background-position: center center;
  background-size: cover;
`;

export default function ProfileIcon({ src, size }) {
  return (
    <Wrapper src={src} size={size} alt="profile_image" />
  );
}

ProfileIcon.propTypes = {
  src: PropTypes.string,
  size: PropTypes.number,
};

ProfileIcon.defaultProps = {
  src: profileExample,
  size: 73,
};
