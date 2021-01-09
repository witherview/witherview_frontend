import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${({ isSmall }) => (isSmall ? 6 : 7.3)}vh;
  height: ${({ isSmall }) => (isSmall ? 6 : 7.3)}vh;
  border-radius: ${({ isSmall }) => (isSmall ? 1 : 2)}vh;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(0, 0, 0, 0.04);
  user-select: none;
  background-image: url(${({ src }) => src});
  background-position: center center;
  background-size: cover;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export default function ProfileIcon({ src, isSmall }) {
  return <Wrapper src={src} isSmall={isSmall} alt="profile_image" />;
}

ProfileIcon.propTypes = {
  src: PropTypes.string,
  isSmall: PropTypes.bool,
};

ProfileIcon.defaultProps = {
  isSmall: false,
};
