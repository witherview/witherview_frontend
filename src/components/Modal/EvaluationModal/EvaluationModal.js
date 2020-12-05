import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { hideModal } from '@store/Modal/modal';
import Icon from '@components/Icon';
import Button from '@components/Button';
import { MODALS } from '@utils/constant';

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

const SmallBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30.6px;
    height: 30.6px;
    margin: 0 12.5px;
    border-radius: 8px;
    background-color: rgba(211,211,211,0.4);
    font-family: AppleSDGothicNeoM00;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
`;

const BigBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin: 0 12.5px;
    border-radius: 10px;
    background-color: rgba(211,211,211);
    font-family: AppleSDGothicNeoM00;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
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
    height: ${({height})=> height}px;
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
    .${({evaluate})=>evaluate} {
        font-weight: bold;
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

export default function EvaluationModal() {
    const dispatch = useDispatch();
    const [score, setScore] = useState(9);
    const [evaluate, setEvaluate] = useState("");

    const handleCount = (val) => {
        setScore(score+val);
    }

    const handleEvaluate = (val) => {
        setEvaluate(val);
    }

    const handleButtonClick = () => {
        // TODO: api연동
        dispatch(hideModal(MODALS.EVALUATION_MODAL))
    }

    return(
        <Wrapper>
            <IconWrapper>
                <Icon type="cancel_blue" alt="" func={()=>dispatch(hideModal(MODALS.EVALUATION_MODAL))} />
            </IconWrapper>
            <ResultText>
                면접 최종 평가
            </ResultText>
            <ScoreText>
                홍길동님의 면접 점수를 입력해주세요.
            </ScoreText>
            <ScoreWrapper>
                <Icon type="previous" func={()=>handleCount(-1)}/>
                <Margin />
                <SmallBox>
                    <Text height={16}>
                        {(score-2)%10+1}
                    </Text>
                </SmallBox>
                <BigBox>
                    <Text height={23}>
                        {(score-1)%10+1}
                    </Text>
                </BigBox>
                <ScoreBox>
                    <Text height={23}>
                        {score%10+1}
                    </Text>
                </ScoreBox>
                <BigBox>
                    <Text height={23}>
                        {(score+1)%10+1}
                    </Text>
                </BigBox>
                <SmallBox>
                    <Text height={16}>
                        {(score+2)%10+1}
                    </Text>
                </SmallBox>
                <Margin />
                <Icon type="next_blue" alt="" func={()=>handleCount(1)}/>
            </ScoreWrapper>
            <EvaluateWrapper>
                <EvaluateBox onClick={()=>handleEvaluate("pass")}  evaluate={evaluate}>
                    <Icon type="thumb_up_white" alt=""/>
                    <EvaluateText className="pass">
                        합격이에요!
                    </EvaluateText>
                </EvaluateBox>
                <EvaluateBox onClick={()=>handleEvaluate("fail")}  evaluate={evaluate}>
                    <Icon type="thumb_down_white" alt=""/>
                    <EvaluateText className="fail">
                        불합격이에요..
                    </EvaluateText>
                </EvaluateBox>
            </EvaluateWrapper>
            <Button text="평가 완료" theme="blue" func={handleButtonClick} />
        </Wrapper>
    )
}