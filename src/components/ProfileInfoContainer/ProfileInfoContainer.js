import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import ProfileIcon from '../ProfileIcon';

import profileExample from '../../assets/images/profile_example.png';

const Wrapper = styled.div`
  height: 73px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Name = styled.div`
  font-family: AppleSDGothicNeoEB00;
  font-size: 20px;
  padding-left: 25px;
  user-select: none;
  color: #3d3d3d;
`;

const NameBelow = styled.div`
  font-family: AppleSDGothicNeoM00;
`;

export default function ProfileInfoContainer({ name, participateRate, src }) {
  return (
    <Wrapper>
      <ProfileIcon src={src} isSmall />
      <Name>
        <div>{name}</div>
        <NameBelow>
          {participateRate}
          %의 참여도
        </NameBelow>
      </Name>
    </Wrapper>
  );
}

ProfileInfoContainer.propTypes = {
  name: PropTypes.string,
  participateRate: PropTypes.number,
  src: PropTypes.string,
};

ProfileInfoContainer.defaultProps = {
  name: '홍길동',
  participateRate: 99,
  src: profileExample,
};
