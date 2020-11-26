import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const FirstText = styled.div`
  font-family: AppleSDGothicNeoEB00;
  font-size: 36px;
`;

const SecondText = styled.div`
  font-size: 24px;
  color: #3d3d3d;
`;

export default function TextBox({ topText, bottomText }) {
  return (
    <Wrapper>
      <FirstText>{topText}</FirstText>
      <SecondText>{bottomText}</SecondText>
    </Wrapper>
  );
}

TextBox.propTypes = {
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
};
