import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { get } from '@utils/snippet';
import profileDefault from '@assets/images/profile_default.png';
import { commonStyles } from '@style';

const { colors } = commonStyles;

const Wrapper = styled.div`
  ${({ isPx, isSmall }) =>
    isPx
      ? `
    width: ${isSmall ? 60 : 73}px;
    height: ${isSmall ? 60 : 73}px;
    border-radius: ${isSmall ? 10 : 20}px;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.04);
  `
      : `
    width: ${isSmall ? 6 : 7.3}vh;
    height: ${isSmall ? 6 : 7.3}vh;
    border-radius: ${isSmall ? 1 : 2}vh;
    box-shadow: 0 0.6vh 1.2vh 0 rgba(0, 0, 0, 0.04);
  `}
  user-select: none;
  background-image: url(${({ src }) => src});
  background-position: center center;
  background-size: cover;
  background-color: ${colors};
`;

export default function ProfileIcon({ src, isSmall, isPx }) {
  const { profileImg } = useSelector(get('auth'));
  return (
    <Wrapper
      src={src || profileImg || profileDefault}
      isSmall={isSmall}
      alt="profile_image"
      isPx={isPx}
    />
  );
}

ProfileIcon.propTypes = {
  src: PropTypes.string,
  isSmall: PropTypes.bool,
  isPx: PropTypes.bool,
};

ProfileIcon.defaultProps = {
  isSmall: false,
};
