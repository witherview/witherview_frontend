import React from 'react';
import styled from 'styled-components';

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 82px;
  height: 46px;
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eef0ff;
  border-radius: 23px;
  -webkit-transition: .4s;
  transition: .4s;
  &::before {
    position: absolute;
    content: "";
    height: 36px;
    width: 36px;
    left: 4px;
    bottom: 4px;
    background-image: linear-gradient(to bottom, #2323de, #4848da);
    border-radius: 50%;
    -webkit-transition: .4s;
    transition: .4s;
  }
  input:checked + &::before {
    -webkit-transform: translateX(36px);
    -ms-transform: translateX(36px);
    transform: translateX(36px);
  }
`;

export default function ToggleButton() {
  return (
    <Switch>
      <Input type="checkbox" />
      <Slider />
    </Switch>
  );
}
