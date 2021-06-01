import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  height: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const FirstText = styled.div`
  font-family: AppleSDGothicNeoEB00;
  font-size: 3.8vh;
  color: ${({ theme: { firstTextColor } }) => firstTextColor};
`;

const SecondText = styled.div`
  font-size: 1.9vh;
  color: ${({ theme: { secondTextColor } }) => secondTextColor};
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
