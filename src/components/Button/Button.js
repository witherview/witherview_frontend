/* eslint-disable indent */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width}px;
  height: 60px;
  border-radius: 10px;
  user-select: none;
  ${({ theme }) => theme === 'blue'
    && `&: hover {
    opacity: 70%;
    }`}
  ${({ theme }) => (theme === 'blue'
      ? 'background-image : linear-gradient(to bottom, #2323de -16%, #5f5fd9 122%);'
      : theme === 'gray'
      ? 'background-color: #f6f6f6; pointer-events: none;'
      : theme === 'outline'
      ? 'background-color: white; border: solid 2px #6e6eff;'
      : theme === 'white'
      ? 'background-color: #ffffff;'
      : '')};
`;

const Text = styled.p`
  display: inline-block;
  font-family: AppleSDGothicNeoB00;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: ${({ theme }) => (theme === 'blue'
      ? '#ffffff;'
      : theme === 'gray'
      ? '#3d3d3d;'
      : theme === 'outline'
      ? '#6e6eff;'
      : theme === 'white'
      ? '#6e6eff;'
      : '#3d3d3d;')};
`;

export default function Button({
 text, theme, func, width = 296,
}) {
  return (
    <Box theme={theme} onClick={func} width={width}>
      <Text theme={theme}>{text}</Text>
    </Box>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  func: PropTypes.func,
  width: PropTypes.number,
};

Button.defaultProp = {
  text: '버튼',
  theme: 'blue',
  func: () => {},
  width: 296,
};
