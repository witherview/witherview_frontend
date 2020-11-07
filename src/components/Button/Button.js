/* eslint-disable indent */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 296px;
  height: 60px;
  border-radius: 10px;
  user-select: none;
  ${({ theme }) => (theme === 'blue' ? 'background-image : linear-gradient(to bottom, #2323de -16%, #5f5fd9 122%)'
                  : theme === 'gray' ? 'background-color: #f6f6f6' : '')};
`;

const Text = styled.p`
  display: inline-block;
  font-family: AppleSDGothicNeoB00;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: ${({ theme }) => (theme === 'blue' ? '#ffffff'
                        : theme === 'gray' ? '#3d3d3d' : '#3d3d3d')};
  line-height: 0.9;
`;

export default function Button({ text, theme, func }) {
  return (
    <Box theme={theme} onClick={func}>
      <Text theme={theme}>{text}</Text>
    </Box>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  func: PropTypes.func,
};

Button.defaultProp = {
  text: '버튼',
  theme: 'blue',
  func: () => {},
};
