import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

const Wrapper = styled.input`
  height: 50px;
  width: ${({ width }) => width}px;
  border: none;
  border-bottom: 2px solid #9e9e9e;
  font-size: 20px;
  font-family: AppleSDGothicNeoM00;
  line-height: 1.7;
  text-align: left;
  color: #9e9e9e;
  &:focus {
    outline: none;
    border-bottom: 2px solid #5f5fd9;
    color: #3d3d3d;
  }
`;

export default function InputBar({
  disabled,
  autoFocus,
  value,
  className,
  placeholder,
  onChange,
  name,
  type,
  width,
}) {
  return (
    <Wrapper
      disabled={disabled}
      autoFocus={autoFocus}
      value={value}
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      width={width}
    />
  );
}

InputBar.propTypes = {
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.number,
};

InputBar.defaultProps = {
  disabled: false,
  autoFocus: false,
  value: '',
  className: '',
  placeholder: '',
  onChange: () => {},
  name: '',
  type: '',
  width: 553,
};
