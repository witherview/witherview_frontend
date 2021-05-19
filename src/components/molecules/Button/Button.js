import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from '@atoms/Icon';

const Btn = styled.div`
  ${({
    isCircle, width, height, size,
  }) => (
    isCircle ? `
      width: ${size}px;
      height: ${size}px;
      border-radius: 100%;
    ` : `
      width: ${width}px;
      height: ${height}px;
      border-radius: 10px;
    `
  )}
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  ${({ theme }) => theme};
  cursor: pointer;
  
  > .text {
    display: inline-block;
    font-family: AppleSDGothicNeoB00;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    margin: 0 8px;
    color: ${({ textColor }) => textColor};
  }
`;

export default function Button({
  prefix,
  suffix,
  disabled,
  text,
  icon = false,
  isCircle = false,
  alt = '',
  theme,
  onClick,
  width = 296,
  height = 60,
  size,
}) {
  const buttonTheme = {
    disabled: 'background-color: #f6f6f6; pointer-events: none;',
    blue: 'background-image : linear-gradient(to bottom, #2323de -16%, #5f5fd9 122%); &: hover { opacity: 70%; };',
    outline: 'background-color: white; border: solid 2px #6e6eff;',
    white: 'background-color: #ffffff;',
  };
  const textColor = {
    disabled: '#3d3d3d;',
    blue: '#ffffff;',
    outline: '#6e6eff;',
    white: '#6e6eff;',
  };

  return (
    <Btn
      theme={disabled ? buttonTheme.disabled : buttonTheme[theme]}
      textColor={disabled ? textColor.disabled : textColor[theme]}
      onClick={onClick}
      width={width}
      height={height}
      size={size}
      isCircle={isCircle}
    >
      {prefix}
      {
        icon
          ? <Icon type={text} isCircle={isCircle} alt={alt} />
          : <span className="text">{text}</span>
      }
      {suffix}
    </Btn>
  );
}

Button.propTypes = {
  prefix: PropTypes.element,
  suffix: PropTypes.element,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  icon: PropTypes.bool,
  isCircle: PropTypes.bool,
  alt: PropTypes.string,
  theme: PropTypes.oneOf([
    'blue',
    'outline',
    'white',
  ]).isRequired,
  onClick: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
  size: PropTypes.number,
};
