import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import ChatInput from '../ChatInput/ChatInput';

const Wrapper = styled.div`
  width: 487px;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);
  border-radius: 20px;
  background-color: #ffffff;
`;

const WrapperHeader = styled.div`
  display: flex;
  padding: 29px 31px 32px 31px;
  box-sizing: border-box;
  background-color: #ffffff;
  border: solid 1px #f6f6f6;
  border-radius: 20px 20px 0 0;
`;

const UserInfo = styled.div`
  text-align: left;
  margin-top: 5px;
  margin-left: 30px;

  & > * {
    font-size: 15px;
    font-family: AppleSDGothicNeoM00;
    color: #d3d3d3;
  }
  & p:first-child {
    font-size: 24px;
    font-family: AppleSDGothicNeoB00;
    color: #000000;
    margin-bottom: 8px;
  }
`;

const WrapperContent = styled.div`
  height: ${({ setInterviewer }) => (setInterviewer ? 345 : 467)}px;
  overflow-y: scroll;
`;

const ChatMessageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0 18px 0 37px;
  margin: 25px 0;
`;

const TimeInfo = styled.div`
  color: #d3d3d3;
  font-family: AppleSDGothicNeoM00;
  font-size: 14px;
  margin-right: 15px;
`;

const MessageText = styled.div`
  width: 70%;
  padding: 23px 43px 20px 30px;
  border-radius: 20px 20px 0 20px;
  background-color: #eef0ff;
  font-family: AppleSDGothicNeoM00;
  font-size: 20px;
  line-height: 1.3;
  color: #3d3d3d;
`;

const WrapperBottom = styled.div`
  border: solid 1px #f6f6f6;
  border-top: solid 1px #eef0ff;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 0 0 20px 20px;
`;

export default function InterviewChat({ setInterviewer }) {
  return (
    <Wrapper>
      <WrapperHeader>
        <ProfileIcon isSmall />
        <UserInfo>
          <p>김병헌</p>
          <p>유통 및 데이터 분석</p>
        </UserInfo>
      </WrapperHeader>
      <WrapperContent setInterviewer={setInterviewer}>
        <ChatMessageWrapper>
          <TimeInfo>5:55PM</TimeInfo>
          <MessageText>
            자기소개 파트에서 자신감 있게 말하는 부분 좋았습니다.
          </MessageText>
        </ChatMessageWrapper>
        <ChatMessageWrapper>
          <TimeInfo>6:01PM</TimeInfo>
          <MessageText>
            물론 화상면접이긴 하지만.. 카메라를 너무 안보시는 것 같아요. 그게 조금 아쉽네요.
          </MessageText>
        </ChatMessageWrapper>
        <ChatMessageWrapper>
          <TimeInfo>6:02PM</TimeInfo>
          <MessageText>
            지원동기에서 직무 강점을 말하면 더 좋을 것 같아요.
          </MessageText>
        </ChatMessageWrapper>
        <ChatMessageWrapper>
          <TimeInfo>6:02PM</TimeInfo>
          <MessageText>
            본인의 장점 같은 경우에는 밝다 말고 다른 것도 생각해 보면 좋을 것 같아요. 중간중간 미소는 좋네요~^^
          </MessageText>
        </ChatMessageWrapper>
      </WrapperContent>
      {setInterviewer
        && (
        <WrapperBottom>
          <ChatInput />
        </WrapperBottom>
        )}
    </Wrapper>
  );
}

InterviewChat.propTypes = {
  setInterviewer: PropTypes.bool,
};

InterviewChat.defaultProps = {
  setInterviewer: false,
};
