import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { commonStyles } from '@style';

const Wrapper = styled.div`
  width: 117.8vh;
  height: 11.5vh;
  background-color: ${commonStyles.colors.paleLilac};
  display: flex;
  align-items: center;
  padding: 0 5.6vh;
  justify-content: space-between;

  p.description {
    font-family: AppleSDGothicNeoB00;
    font-size: 1.8vh;
    text-align: left;
    color: ${commonStyles.colors.cornflower};
  }

  div.label {
    font-family: AppleSDGothicNeoB00;
    font-size: 2vh;
    color: #3d3d3d;
    display: flex;
  }

  div.mr-7 {
    margin-right: 7vh;
  }

  span.score {
    font-family: TitilliumWebBold;
    vertical-align: sub;
    font-size: 4vh;
    padding: 0 1vh 0 2.6vh;
    color: ${commonStyles.colors.darkIndigo};
  }

  div.is-passed {
    border-radius: 10px;
    border: solid 2px ${commonStyles.colors.cornflower};
    background-color: ${commonStyles.colors.cornflower};
    display: inline-flex;
    width: 11.8vh;
    height: 4vh;
    font-family: AppleSDGothicNeoM00;
    font-size: 2vh;
    text-align: center;
    color: #ffffff;
    justify-content: center;
    vertical-align: middle;
    align-items: center;
    margin-left: 2.5vh;
  }
`;

export default function FeedbackContainerFooter({ score }) {
  const isPassed = true; // TODO: 기준 설정 필요

  return (
    <Wrapper>
      <p className="description">
        면접 점수와 합격 유무 기준은 상대방의 주관적 평가입니다.
      </p>
      <div className="label">
        <div className="mr-7">
          현재 면접 점수 <span className="score">{score}</span>점
        </div>
        <div>
          합격 유무
          <div className="is-passed">{isPassed ? '합격' : '불합격'}</div>
        </div>
      </div>
    </Wrapper>
  );
}

FeedbackContainerFooter.propTypes = {
  score: PropTypes.number,
};

FeedbackContainerFooter.defaultProps = {
  score: 8,
};
