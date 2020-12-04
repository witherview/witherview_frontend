import React from 'react';

import styled from 'styled-components';

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
  width: 100%;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);
  border: solid 1px #f6f6f6;
  background-color: #ffffff;
`;

const ChatWithUser = styled.div`
  width: 474px;
`;

export default function InterviewStudyEntry() {
  return (
    <Wrapper>
      <WrapperContent>
        <InterviewRoomSection>
          <InterviewRoomInfo />
        </InterviewRoomSection>
        <ChatWithUser />
      </WrapperContent>
    </Wrapper>
  );
}
