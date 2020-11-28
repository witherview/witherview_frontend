import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import Icon from '../Icon';
import ProfileIcon from '../ProfileIcon';
import profileExample from '../../assets/images/profile_example.png';

const Wrapper = styled.div`
  @media only screen and (max-width: 480px) {
    display: none;
  }

  position: absolute;
  top: 53px;
  right: 105px;
  height: 73px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Name = styled.div`
  font-family: AppleSDGothicNeoEB00;
  font-size: 20px;
  padding-left: 29px;
  padding-right: 10px;
  user-select: none;
  color: #3d3d3d;
`;

export default function ProfileMenuContainer({ name, src }) {
  return (
    <Wrapper>
      <ProfileIcon src={src} />
      <Name>{name || 'Unknown'}</Name>
      <Icon type="arrow_down_grey" alt="arrow_down_grey" />
    </Wrapper>
  );
}

ProfileMenuContainer.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
};

ProfileMenuContainer.defaultProps = {
  name: '홍길동',
  src: profileExample,
};
