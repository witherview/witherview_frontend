import React from 'react';

import styled from 'styled-components';
import Button from '@components/Button/Button';

const Wrapper = styled.div`
  flex: 1;
  flex-direction: column;
`;

const WrapperContent = styled.div`
  height: 100vh;
  display: flex;
`;

const InterviewRoomSection = styled.div`
  width: 1196px;
  margin-bottom: 70px;
`;

const InterviewRoomInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);
  border: solid 1px #f6f6f6;
  background-color: #ffffff;
`;

const ChatWithUser = styled.div`
  width: 474px;
`;

const TextWrapper = styled.div`
  width: 750px;
`;

const RoomTitle = styled.p`
  font-size: 36px;
  font-family: AppleSDGothicNeoEB00;
  color: #6e6eff;
  margin-bottom: 15px;
`;

const DateInfo = styled.p`
  font-size: 24px;
  font-family: AppleSDGothicNeoEB00;
  margin-bottom: 45px;
`;

const Description = styled.p`
  font-size: 24px;
  font-family: AppleSDGothicNeoM00;
  color: #3d3d3d;
`;

const BoxWrapper = styled.div`
  width: 300px;
  & div:first-child {
    margin-bottom: 25px;
  }
`;

export default function InterviewStudyEntry() {
  return (
    <Wrapper>
      <WrapperContent>
        <InterviewRoomSection>
          <InterviewRoomInfo>
            <TextWrapper>
              <RoomTitle>삼성전자 데이터분석 합격자만</RoomTitle>
              <DateInfo>2020년 10월 3일 시간 미정</DateInfo>
              <Description>삼성전자 GSAT 합격자만 오세요. 10월 19일 면접 대비하려고 합니다.</Description>
            </TextWrapper>
            <BoxWrapper>
              <Button text="방 나가기" theme="gray" />
              <Button text="스터디 시작하기" theme="blue" />
            </BoxWrapper>
          </InterviewRoomInfo>
        </InterviewRoomSection>
        <ChatWithUser />
      </WrapperContent>
    </Wrapper>
  );
}
