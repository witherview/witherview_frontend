import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

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
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.04);
  background-color: #f6f6f6;
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
    background-color: #d3d3d3;
    border-radius: 50%;
    -webkit-transition: .4s;
    transition: .4s;
  }
  input:checked + & {
    background-color: #eef0ff;
  }
  input:checked + &::before {
    background-image: linear-gradient(to bottom, #2323de, #4848da);
    -webkit-transform: translateX(36px);
    -ms-transform: translateX(36px);
    transform: translateX(36px);
  }
`;

export default function ToggleButton({
  className,
}) {
  return (
    <Switch>
      <Input type="checkbox" className={className} />
      <Slider />
    </Switch>
  );
}

ToggleButton.propTypes = {
  className: PropTypes.string,
};

ToggleButton.defaultProps = {
  className: '',
};
