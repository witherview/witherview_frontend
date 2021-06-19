import React, { useState } from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 8.2vh;
  height: 4.6vh;
  ${({ disabled }) => disabled && 'pointer-events: none; opacity: 0.5;'}
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
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.04);
  background-color: #f6f6f6;
  border-radius: 2.3vh;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  &::before {
    position: absolute;
    content: '';
    height: 3.6vh;
    width: 3.6vh;
    left: 0.4vh;
    bottom: 0.4vh;
    background-color: #d3d3d3;
    border-radius: 50%;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  input:checked + & {
    background-color: #eef0ff;
  }
  input:checked + &::before {
    background-image: linear-gradient(to bottom, #2323de, #4848da);
    -webkit-transform: translateX(3.6vh);
    -ms-transform: translateX(3.6vh);
    transform: translateX(3.6vh);
  }
`;

export default function ToggleButton({
  className,
  funcActive,
  funcDeactive,
  disabled,
}) {
  const [checked, setChecked] = useState(true);

  const handleFunction = (e) => {
    if (e.target.checked) {
      setChecked(true);
      return funcActive();
    }
    setChecked(false);
    return funcDeactive();
  };

  return (
    <Switch disabled={disabled}>
      <Input
        type="checkbox"
        className={className}
        onChange={handleFunction}
        checked={checked}
      />
      <Slider />
    </Switch>
  );
}

ToggleButton.propTypes = {
  className: PropTypes.string,
  funcActive: PropTypes.func,
  funcDeactive: PropTypes.func,
  disabled: PropTypes.bool,
};

ToggleButton.defaultProps = {
  className: '',
  funcActive: () => {},
  funcDeactive: () => {},
};
