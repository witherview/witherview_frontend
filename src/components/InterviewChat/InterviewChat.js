import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import ChatInput from '../ChatInput/ChatInput';

const Wrapper = styled.div`
  height: ${({ height }) => height}px;
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
  height: ${({ height }) => height - 250}px;
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
  margin-right: 5px;
`;

const MessageText = styled.div`
  width: 67%;
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
        <ProfileIcon isSmall />
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
          <ChatInput onClick={onClick} />
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
