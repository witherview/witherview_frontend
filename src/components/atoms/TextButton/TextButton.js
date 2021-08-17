import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.span`
  font-family: ${({ clicked }) =>
    clicked ? 'AppleSDGothicNeoEB00' : 'AppleSDGothicNeoM00'};
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: normal;
  text-align: left;
  user-select: none;
  cursor: pointer;
  color: ${({ clicked }) => (clicked ? '#0c0c59' : '#3d3d3d')};
`;

export default function TextButton({ text }) {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  return (
    <Text onClick={handleClicked} clicked={clicked}>
      {text}
    </Text>
  );
}

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
};

TextButton.defaultProp = {
  text: '이공계_공기업',
};
