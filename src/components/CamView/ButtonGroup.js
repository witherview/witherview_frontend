import React from 'react';

import styled from 'styled-components';

import Icon from '@components/Icon';

const Wrapper = styled.div`
  width: 219px;
  height: 72px;
  border-radius: 39px;
  -webkit-backdrop-filter: blur(5.3px);
  backdrop-filter: blur(5.3px);
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.04);
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const WrapIcon = styled.div`
  width: 51px;
  height: 51px;
  border-radius: 51px;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);
  &:hover {
    opacity: 70%;
  }
`;
export default function ButtonGroup() {
  // TODO: redux 붙여서 상태 관리될 것
  return (
    <Wrapper>
      <WrapIcon>
        <Icon type="play_blue" isCircle alt="play_blue" />
      </WrapIcon>
      <WrapIcon>
        <Icon type="cam" isCircle alt="cam" />
      </WrapIcon>
      <WrapIcon>
        <Icon type="audio" isCircle alt="audio" />
      </WrapIcon>
    </Wrapper>
  );
}
