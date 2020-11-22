import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
    width: 107px;
    height: 44px;
    padding-bottom: 3px;
    border-radius: 10px;
    background-color: #fff3ef;
    position: absolute;
    top: 33px;
    right: 33px;
    user-select: none;
    color: #f2886b;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: AppleSDGothicNeoM00;
    font-size: 24px;
`;

const Circle = styled.div`
    width: 18px;
    height: 18px;
    margin-top: 3px;
    border-radius: 9px;
    margin-right: 13px;
    background-color: #f2886b;
`;

export default function RecLabel() {
  return (
    <Wrapper>
      <Circle />
      REC
    </Wrapper>
  );
}
