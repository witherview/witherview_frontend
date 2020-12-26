import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Wrapper = styled.div`
  height: 7.5vh;
  width: 132.6vh;
  border-radius: 2vh;
  background-color: #eef0ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: AppleSDGothicNeoEB00;
  font-size: 3.1vh;
  font-weight: normal;
`;

const WrapPrefix = styled.span`
  font-family: AppleSDGothicNeoEB00;
  color: #0c0c59;
`;

export default function QuestionTextBox({ order, question }) {
  return (
    <Wrapper>
      <WrapPrefix>
        Q
        {order}
        .
      </WrapPrefix>
      {'\u00A0'}
      {question}
    </Wrapper>
  );
}

QuestionTextBox.propTypes = {
  order: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
};
