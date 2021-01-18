import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import A from '@atoms';
import M from '@molecules';

const Wrapper = styled.div`
  height: 63vh;
  display: flex;
  align-items: flex-end;
  ${({ isConnectStomp }) => !isConnectStomp && 'pointer-events: none; opacity: 0.3;'}
`;

const WrapContainer = styled.div`
  height: 100%;
  width: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WrapperHeader = styled.div`
  font-family: AppleSDGothicNeoB00;
  font-size: 1.9vh;
  padding-top: 1vh;
`;

const WrapperContent = styled.div`
  height: 80%;
  width: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    background-color: white;
    width: 0;
  }
`;

const ChatMessageWrapper = styled.div`
  display: flex;
  justify-content: ${({ me }) => (me ? 'flex-end;' : 'flex-start;')}
  margin: 2.5vh 0;
`;

const WrapProfileIcon = styled.div`
  padding-right: 1.5vh;
  > div {
    width: 5vh;
    height: 5vh;
  }
`;

const WrapChat = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vh;
`;

const WrapChatInfo = styled.div`
  font-family: AppleSDGothicNeoEB00;
  font-size: 1.9vh;
  > span {
    font-size: 1.3vh;
    font-family: AppleSDGothicNeoM00;
    padding-left: 1vh;
  }
  padding-bottom: 1vh;
`;

const MessageText = styled.div`
  min-height: 2vh;
  padding: 1.2vh 1.6vh 1.2vh 1.6vh;
  border-radius: 0vh 2vh 2vh 2vh;
  background-color: #eef0ff;
  word-wrap: break-word;
  font-family: AppleSDGothicNeoM00;
  font-size: 2vh;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.paleLiliac};
`;

const WrapChatInput = styled.div`
  > div {
    height: 5vh;
    span {
      width: 5vh;
    }
  }
`;

export default function RoomChat({
  setInterviewer,
  chatData,
  onClick,
  isConnectStomp,
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
    <Wrapper isConnectStomp={isConnectStomp}>
      <WrapContainer>
        <WrapperHeader>실시간 채팅</WrapperHeader>
        <WrapperContent ref={chatBoxRef} setInterviewer={setInterviewer}>
          {chatData?.map((val) => (
            <ChatMessageWrapper
              me={val.name === sessionStorage.getItem('name')}
            >
              <WrapProfileIcon>
                <A.ProfileIcon isSmall />
              </WrapProfileIcon>
              <WrapChat>
                <WrapChatInfo>
                  {val.name}
                  <span>{val.time}</span>
                </WrapChatInfo>
                <MessageText>{val.content}</MessageText>
              </WrapChat>
            </ChatMessageWrapper>
          ))}
        </WrapperContent>
        <WrapChatInput>
          <M.ChatInput onClick={onClick} />
        </WrapChatInput>
      </WrapContainer>
    </Wrapper>
  );
}

RoomChat.propTypes = {
  setInterviewer: PropTypes.bool,
  chatData: PropTypes.object,
  onClick: PropTypes.func,
  isConnectStomp: PropTypes.bool,
};

RoomChat.defaultProps = {
  setInterviewer: false,
};
