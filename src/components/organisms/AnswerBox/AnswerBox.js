import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 51.5vh;
  height: 59vh;
  border-radius: 2vh;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.1);
  border: solid 0.1vh #f6f6f6;
`;

const WrapContent = styled.div`
  position: relative;
  height: 49vh;
  padding: 3.7vh 5.1vh 3.7vh 5.1vh;
  flex: 1;
`;

const WrapTitleText = styled.div`
  font-family: AppleSDGothicNeoB00;
  font-size: 1.9vh;
  color: #6e6eff;
`;

const WrapDate = styled.div`
  padding-top: 0.5vh;
  padding-bottom: 4vh;
  font-family: AppleSDGothicNeoM00;
  font-size: 1.5vh;
  color: #d3d3d3;
`;

const WrapAnswer = styled.textarea`
  width: 100%;
  height: 41.3vh;
  background-color: white;
  border: 0;
  font-family: AppleSDGothicNeoM00;
  font-size: 1.9vh;
  color: #3d3d3d;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

const WrapOveray = styled.div`
  position: absolute;
  bottom: 0;
  height: 6.1vh;
  width: 41.3vh;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) -9%,
    white 64%
  );
`;

const WrapPoint = styled.div`
  position: absolute;
  top: 3.4vh;
  width: 0.5vh;
  height: 6.4vh;
  margin: 0 2.2vh 3.7vh 0;
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
