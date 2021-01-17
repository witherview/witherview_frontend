import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 10.7vh;
  height: 4.4vh;
  padding-bottom: 0.3vh;
  border-radius: 1vh;
  background-color: #fff3ef;
  position: absolute;
  top: 3.3vh;
  right: 3.3vh;
  user-select: none;
  color: #f2886b;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: AppleSDGothicNeoM00;
  font-size: 1.9vh;
`;

const Circle = styled.div`
  width: 1.8vh;
  height: 1.8vh;
  margin-top: 0.3vh;
  border-radius: 0.9vh;
  margin-right: 1.3vh;
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
