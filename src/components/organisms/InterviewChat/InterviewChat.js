import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import A from '@atoms';
import M from '@molecules';

const Wrapper = styled.div`
  height: 59vh;
  width: 48.7vh;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.1);
  border-radius: 2vh;
  background-color: #ffffff;
`;

const WrapperHeader = styled.div`
  display: flex;
  padding: 2.9vh 3.1vh 3.2vh 3.1vh;
  box-sizing: border-box;
  background-color: #ffffff;
  border: solid 0.1vh #f6f6f6;
  border-radius: 2vh 2vh 0 0;
`;

const UserInfo = styled.div`
  text-align: left;
  margin-top: 0.5vh;
  margin-left: 3vh;

  & > * {
    font-size: 1.5vh;
    font-family: AppleSDGothicNeoM00;
    color: #d3d3d3;
  }
  & p:first-child {
    font-size: 2.2vh;
    font-family: AppleSDGothicNeoB00;
    color: #000000;
    margin-bottom: 1.7vh;
  }
`;

const WrapperContent = styled.div`
  height: 36.5vh;
  overflow-y: scroll;
`;

const ChatMessageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0 1.8vh 0 3.7vh;
  margin: 2.5vh 0;
`;

const TimeInfo = styled.div`
  color: #d3d3d3;
  font-family: AppleSDGothicNeoM00;
  font-size: 1.4vh;
  margin-right: 0.5vh;
`;

const MessageText = styled.div`
  width: 67%;
  padding: 2.3vh 4.3vh 2vh 3vh;
  border-radius: 2vh 2vh 0 2vh;
  background-color: #eef0ff;
  font-family: AppleSDGothicNeoM00;
  font-size: 2vh;
  line-height: 1.3;
  color: #3d3d3d;
`;

const WrapperBottom = styled.div`
  border: solid 0.1vh #f6f6f6;
  border-top: solid 0.1vh #eef0ff;
  background-color: #ffffff;
  padding: 2vh;
  border-radius: 0 0 2vh 2vh;
  display: flex;
  justify-content: center;
`;

export default function InterviewChat({
  setInterviewer,
  chatData,
  onClick,
  height,
}) {
  const chatBoxRef = useRef();

  useEffect(() => {
    chatBoxRef.current.scrollTo({
      top: chatBoxRef.current.scrollHeight - chatBoxRef.current.clientHeight,
      left: 0,
      behavior: 'smooth',
    });
  }, [chatData]);

  return (
    <Wrapper height={height}>
      <WrapperHeader>
        <A.ProfileIcon isSmall />
        <UserInfo>
          <p>이용재</p>
          <p>유통 및 데이터 분석</p>
        </UserInfo>
      </WrapperHeader>
      <WrapperContent
        ref={chatBoxRef}
        setInterviewer={setInterviewer}
        height={height}
      >
        {chatData?.map((chat) => (
          <ChatMessageWrapper>
            <TimeInfo>{chat.time}</TimeInfo>
            <MessageText>{chat.content}</MessageText>
          </ChatMessageWrapper>
        ))}
      </WrapperContent>
      {setInterviewer && (
        <WrapperBottom>
          <M.ChatInput onClick={onClick} />
        </WrapperBottom>
      )}
    </Wrapper>
  );
}

InterviewChat.propTypes = {
  setInterviewer: PropTypes.bool,
  chatData: PropTypes.object,
  onClick: PropTypes.func,
  height: PropTypes.number,
};

InterviewChat.defaultProps = {
  setInterviewer: false,
};
