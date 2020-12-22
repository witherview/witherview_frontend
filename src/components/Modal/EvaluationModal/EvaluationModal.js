import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hideModal } from '@store/Modal/modal';
import Icon from '@components/Icon';
import Button from '@components/Button';
import { MODALS } from '@utils/constant';
import { postGroupFeedback } from '@repository/groupRepository';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 616px;
  height: 639px;
  border-radius: 10px;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.04);
  background-color: #ffffff;
`;

const IconWrapper = styled.div`
  margin-left: auto;
  margin-right: 36px;
  margin-top: 36px;
`;

const ResultText = styled.div`
  margin-top: 10px;
  font-family: AppleSDGothicNeoEB00;
  font-size: 36px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;

const ScoreText = styled.div`
  margin-top: 35px;
  font-family: AppleSDGothicNeoB00;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  letter-spacing: normal;
  text-align: center;
  color: #3d3d3d;
`;

const ScoreWrapper = styled.div`
  display: flex;
  height: 54px;
  align-items: center;
  margin-top: 25px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => (size === 'big' ? '40px' : '36.5px')};
  height: ${({ size }) => (size === 'big' ? '40px' : '36.5px')};
  margin: 0 12.5px;
  border-radius: 8px;
  background-color: rgba(
    211,
    211,
    211,
    ${({ size }) => (size === 'big' ? '1' : '0.4')}
  );
  font-family: AppleSDGothicNeoM00;
  font-size: ${({ size }) => (size === 'big' ? '20px' : '14px')};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

const ScoreBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 53px;
  height: 53px;
  margin: 0 12.5px;
  border-radius: 10px;
  box-shadow: 0 6px 9px 0 rgba(4, 4, 161, 0.04);
  background-image: linear-gradient(to bottom, #2323de -16%, #5f5fd9 122%);
  font-family: AppleSDGothicNeoM00;
  font-size: 27px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

const Text = styled.div`
  height: ${({ height }) => height}px;
`;

const Margin = styled.div`
  width: 30px;
`;

const EvaluateWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 40px;
`;

const EvaluateBox = styled.div`
  display: flex;
  margin: 0 60px;
  flex-direction: column;
  align-items: center;
  .${({ evaluate }) => evaluate} {
    font-weight: 700;
  }
`;

const EvaluateText = styled.div`
  margin-top: 20px;
  font-family: AppleSDGothicNeoM00;
  font-size: 20px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: center;
  color: #3d3d3d;
`;

export default function EvaluationModal({ roomId }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [score, setScore] = useState(9);
  const [evaluate, setEvaluate] = useState('');

  const handleCount = (val) => {
    setScore(score + val);
  };

  const handleEvaluate = (val) => {
    setEvaluate(val);
  };

  const handleButtonClick = () => {
    const data = {
      id: roomId,
      passOrFail: evaluate === 'pass',
      score,
      targetUser: 0, // TODO: change this properly
    };

    postGroupFeedback(data).then(() => {
      dispatch(hideModal(MODALS.EVALUATION_MODAL));
      history.push('/group-study');
    }).catch((error) => {
      console.error(error);
    });
  };

  const calScore = (val) => ((score + val) % 10) + 1;

  return (
    <Wrapper>
      <IconWrapper>
        <Icon
          type="cancel_blue"
          alt=""
          func={() => dispatch(hideModal(MODALS.EVALUATION_MODAL))}
        />
      </IconWrapper>
      <ResultText>면접 최종 평가</ResultText>
      <ScoreText>홍길동님의 면접 점수를 입력해주세요.</ScoreText>
      <ScoreWrapper>
        <Icon type="previous" func={() => handleCount(-1)} />
        <Margin />
        <Box>
          <Text height={16}>{calScore(-2)}</Text>
        </Box>
        <Box size="big">
          <Text height={19}>{calScore(-1)}</Text>
        </Box>
        <ScoreBox>
          <Text height={23}>{calScore(0)}</Text>
        </ScoreBox>
        <Box size="big">
          <Text height={19}>{calScore(1)}</Text>
        </Box>
        <Box>
          <Text height={16}>{calScore(2)}</Text>
        </Box>
        <Margin />
        <Icon type="next_blue" alt="" func={() => handleCount(1)} />
      </ScoreWrapper>
      <EvaluateWrapper>
        <EvaluateBox onClick={() => handleEvaluate('pass')} evaluate={evaluate}>
          <Icon
            type={evaluate === 'pass' ? 'thumb_up_big' : 'thumb_up_white'}
            alt=""
          />
          <EvaluateText className="pass">합격이에요!</EvaluateText>
        </EvaluateBox>
        <EvaluateBox onClick={() => handleEvaluate('fail')} evaluate={evaluate}>
          <Icon
            type={evaluate === 'fail' ? 'thumb_down_big' : 'thumb_down_white'}
            alt=""
          />
          <EvaluateText className="fail">불합격이에요..</EvaluateText>
        </EvaluateBox>
      </EvaluateWrapper>
      <Button text="평가 완료" theme="blue" func={handleButtonClick} />
    </Wrapper>
  );
}

EvaluationModal.propTypes = {
  roomId: PropTypes.string.isRequired,
};
