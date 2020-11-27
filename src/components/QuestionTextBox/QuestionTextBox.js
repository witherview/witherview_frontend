import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Wrapper = styled.div`
  height: 88px;
  width: ${({ width }) => width}px;
  border-radius: 20px;
  background-color: #eef0ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: AppleSDGothicNeoEB00;
  font-size: 36px;
  font-weight: normal;
`;

const WrapPrefix = styled.span`
  font-family: AppleSDGothicNeoEB00;
  color: #0c0c59;
`;

export default function QuestionTextBox({ order, question, width }) {
  return (
    <Wrapper width={width}>
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
  width: PropTypes.number,
};

QuestionTextBox.defaultProps = {
  width: 1024,
};
