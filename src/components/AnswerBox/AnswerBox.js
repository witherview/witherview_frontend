import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 515px;
  height: ${({ height }) => height}px;
  border-radius: 20px;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);
  border: solid 1px #f6f6f6;
`;

const WrapContent = styled.div`
  position: relative;
  height: ${({ height }) => height - 100}px;
  padding: 37px 51px 37px 51px;
  flex: 1;
`;

const WrapTitleText = styled.div`
  font-family: AppleSDGothicNeoB00;
  font-size: 24px;
  color: #6e6eff;
`;

const WrapDate = styled.div`
  padding-top: 5px;
  padding-bottom: 40px;
  font-family: AppleSDGothicNeoM00;
  font-size: 20px;
  color: #d3d3d3;
`;

const WrapAnswer = styled.textarea`
  width: 100%;
  height: ${({ height }) => height - 177}px;
  background-color: white;
  border: 0px;
  font-family: AppleSDGothicNeoM00;
  font-size: 24px;
  color: #3d3d3d;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

const WrapOveray = styled.div`
  position: absolute;
  bottom: 0px;
  height: 61px;
  width: 413px;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) -9%,
    white 64%
  );
`;

const WrapPoint = styled.div`
  position: absolute;
  top: 34px;
  width: 5px;
  height: 64px;
  margin: 0 22px 37px 0;
  background-color: #6e6eff;
`;

export default function AnswerBox({ height, answer, date }) {
  return (
    <Wrapper height={height}>
      <WrapPoint />
      <WrapContent height={height}>
        <WrapTitleText>질문과 관련된 답변입니다.</WrapTitleText>
        <WrapDate>{date || '2020.10.05 최종 수정'}</WrapDate>
        <WrapAnswer readonly disabled height={height} value={answer} />
        <WrapOveray />
      </WrapContent>
    </Wrapper>
  );
}

AnswerBox.propTypes = {
  height: PropTypes.number.isRequired,
  answer: PropTypes.string.isRequired,
  date: PropTypes.string,
};

AnswerBox.defaultProps = {
  date: '2020.10.05 최종 수정',
};
