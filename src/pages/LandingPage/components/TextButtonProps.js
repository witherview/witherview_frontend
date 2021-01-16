import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.span`
  font-family: AppleSDGothicNeoEB00;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: normal;
  text-align: left;
  user-select: none;
  cursor: pointer;
  &: hover {
    color: #6e6eff;
  }
  color: black;
`;

export default function TextButtonProp({ text, onClick }) {
  return <Text onClick={onClick}>{text}</Text>;
}

TextButtonProp.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

TextButtonProp.defaultProp = {
  onClick: () => {},
};
