import React, { useState } from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { get } from '@utils/snippet';

import A from '@atoms';
import M from '@molecules';

const Wrapper = styled.div`
  flex: 1;
  flex-direction: column;
`;

const WrapContent = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WrapContainer = styled.div`
  width: 80%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 9vh;
`;

const WrapSubContainer = styled.div`
  display: flex;
  .${({ first }) => first} {
    border: solid 0.3vh #5f5fd9;
    color: #5f5fd9;
  }
`;

const WrapToggle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TextButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 20vh;
  height: 12.7vh;
  margin-right: 6vh;
  border-radius: 1vh;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.1);
  border: solid 0.1vh #f6f6f6;
  background-color: #ffffff;
  .${({ first }) => first} {
    border: none;
    color: #5f5fd9;
  }
`;

const Margin = styled.span`
  width: 6vh;
`;

const WrapText = styled.div`
  display: flex;
  margin-left: auto;
  font-family: AppleSDGothicNeoB00;
  font-size: 1.9vh;
  color: #6e6eff;
  ${({ padding }) =>
    padding ? 'padding-bottom: 2vh' : 'padding-right: 2.5vh'};
`;

const Text = styled.div`
  font-family: AppleSDGothicNeoEB00;
  font-size: 2.5vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;

const InnerText = styled.div`
  font-family: AppleSDGothicNeoB00;
  font-size: 2.5vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.93;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;

const WrapButton = styled.div`
  ${({ theme: { button } }) => button}
`;

export default function PeerStudySettingPage({ setStepTrain }) {
  const [first, setFirst] = useState();
  const { standardTime } = useSelector(get('train'));

  const handleFirst = (val) => {
    setFirst(val);
  };

  return (
    <Wrapper>
      <WrapContent>
        <M.TextBox
          topText="환경설정을 시작하겠습니다."
          bottomText="질문 제한 시간을 설정하고 스터디 면접 시간을 선택해주세요."
        />
        <WrapContainer>
          <WrapToggle>
            <Text>스터디 면접 시간</Text>
            <WrapText>질문 제한 시간 설정</WrapText>
            {/* TODO: 질문 제한 시간 토글 기능 넣어야 함 */}
            <A.ToggleButton />
          </WrapToggle>
          <WrapSubContainer>
            <M.TimeButton time={30} unit="분" />
            <Margin />
            <M.TimeButton time={45} unit="분" />
            <Margin />
            <M.TimeButton time={60} unit="분" />
            <Margin />
            <TextButton>
              <InnerText>무한</InnerText>
            </TextButton>
            <TextButton>
              <InnerText>직접 입력</InnerText>
            </TextButton>
          </WrapSubContainer>
          <WrapToggle>
            <Text>스터디 면접 시간</Text>
          </WrapToggle>
          <WrapSubContainer first={first}>
            <TextButton
              className="host"
              first={first}
              onClick={() => handleFirst('host')}
            >
              <InnerText className="host">호스트</InnerText>
            </TextButton>
            <TextButton
              className="guest"
              first={first}
              onClick={() => handleFirst('guest')}
            >
              <InnerText className="guest">상대방</InnerText>
            </TextButton>
          </WrapSubContainer>
        </WrapContainer>
        <WrapButton>
          <A.Button
            theme={first && standardTime > 0 ? 'blue' : 'gray'}
            text="다음"
            func={setStepTrain}
          />
        </WrapButton>
      </WrapContent>
    </Wrapper>
  );
}

PeerStudySettingPage.propTypes = {
  setStepTrain: PropTypes.func,
};
