import React, { useState } from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 95%;
  height: 6vh;

  & > * {
    white-space: nowrap;
    display: block;
    &:first-child {
      border-radius: 0.6vh 0 0 0.6vh;
    }
    &:last-child {
      border-radius: 0 0.6vh 0.6vh 0;
    }
  }
`;

const InputField = styled.input`
  display: block;
  width: calc(100% - 7.6vh);
  padding: 0.8vh 1.6vh;
  line-height: 2.5vh;
  font-size: 1.5vh;
  font-weight: 500;
  font-family: AppleSDGothicNeoM00;
  border: none;
  border-radius: 1.6vh;
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
  width: 6vh;
  height: inherit;
  background-image: linear-gradient(to bottom, #2323de -16%, #5f5fd9 122%);
  &::before {
    position: absolute;
    top: calc(50% - 1.5vh);
    left: calc(50% - 0.7vh);
    width: 1vh;
    height: 2vh;
    border: solid #ffffff;
    border-width: 0 0.3vh 0.3vh 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    content: '';
  }
  &:hover {
    opacity: 0.9;
  }
`;

export default function ChatInput({ onClick }) {
  const [value, setValue] = useState('');
  return (
    <Wrapper>
      <InputField
        placeholder="채팅을 입력해주세요."
        onChange={(e) => setValue(e.target.value)}
      />
      <SubmitBtn
        onClick={() => {
          onClick(value);
        }}
      />
    </Wrapper>
  );
}

ChatInput.propTypes = {
  onClick: PropTypes.func,
};
