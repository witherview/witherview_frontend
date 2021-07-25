import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import profileExample from '@assets/images/profile_example.png';
import A from '@atoms';

const Wrapper = styled.div`
  height: 7.3vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Name = styled.div`
  font-family: AppleSDGothicNeoM00;
  font-size: 2vh;
  padding-left: 2.5vh;
  user-select: none;
  color: #3d3d3d;
  line-height: 1.5;
  .name {
    font-family: AppleSDGothicNeoB00;
  }
`;

export default function ProfileInfoContainer({ name, participateRate, src }) {
  return (
    <Wrapper>
      <A.ProfileIcon src={src} isSmall />
      <Name>
        <div className="name">{name}</div>
        <div>
          {participateRate}
          %의 참여도
        </div>
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
