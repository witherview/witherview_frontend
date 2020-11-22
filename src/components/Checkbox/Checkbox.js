import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

const Wrapper = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 36px;
  width: 36px;
  background-color: #ffffff;
  border: solid 3px #d6d6d6;
  border-radius: 10px;
  &::after {
    top: 3px;
    left: 12px;
    width: 10px;
    height: 20px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    content: "";
    position: absolute;
    display: none;
  }
  label:hover input ~ & {
    background-color: #f0f0f0;
  }
  label input:checked ~ & {
    background-color: #5f5fd9;
    border-color: #5f5fd9;
  }
  label input:checked ~ &::after {
    display: block;
  }
`;

export default function Checkbox({
  className,
}) {
  return (
    <Wrapper>
      <Input type="checkbox" className={className} />
      <Checkmark />
    </Wrapper>
  );
}

Checkbox.propTypes = {
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  className: '',
};
