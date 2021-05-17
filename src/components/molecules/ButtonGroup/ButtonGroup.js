import React from 'react';

import styled from 'styled-components';

import A from '@atoms';

const Wrapper = styled.div`
  width: 21.9vh;
  height: 7.2vh;
  border-radius: 3.9vh;
  -webkit-backdrop-filter: blur(0.53vh);
  backdrop-filter: blur(0.53vh);
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.04);
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const WrapIcon = styled.div`
  width: 5.1vh;
  height: 5.1vh;
  border-radius: 5.1vh;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.1);
  &:hover {
    opacity: 70%;
  }
`;

export default function ButtonGroup() {
  // TODO: redux 붙여서 상태 관리될 것
  return (
    <Wrapper>
      <WrapIcon>
        <A.Icon type="play_blue" isCircle alt="play_blue" />
      </WrapIcon>
      <WrapIcon>
        <A.Icon type="cam" isCircle alt="cam" />
      </WrapIcon>
      <WrapIcon>
        <A.Icon type="audio" isCircle alt="audio" />
      </WrapIcon>
    </Wrapper>
  );
}
