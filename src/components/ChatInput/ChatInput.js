import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 60px;

  & > * {
    white-space: nowrap;
    display: block;
    &:first-child {
      border-radius: 6px 0 0 6px;
    }
    &:last-child {
      border-radius: 0 6px 6px 0;
    }
  }
`;

const InputField = styled.input`
  display: block;
  width: calc(100% - 76px);
  padding: 8px 16px;
  line-height: 25px;
  font-size: 20px;
  font-weight: 500;
  font-family: AppleSDGothicNeoM00;
  border: none;
  border-radius: 6px;
  -webkit-appearance: none;
  color: #3d3d3d;
  background-color: #f6f6f6;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #3d3d3d;
  }
`;

const SubmitBtn = styled.span`
  position: relative;
  width: 60px;
  height: inherit;
  background-image: linear-gradient(to bottom, #2323de -16%, #5f5fd9 122%);
  &::before {
    position: absolute;
    top: calc(50% - 15px);
    left: calc(50% - 7px);
    width: 10px;
    height: 20px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    content: "";
  }
  &:hover {
    opacity: 0.9;
  }
`;

export default function ChatInput() {
  return (
    <Wrapper>
      <InputField placeholder="채팅을 입력해주세요." />
      <SubmitBtn />
    </Wrapper>
  );
}
