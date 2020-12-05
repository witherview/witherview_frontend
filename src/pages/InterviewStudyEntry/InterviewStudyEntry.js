import React from 'react';

import styled from 'styled-components';
import Button from '@components/Button/Button';
import ProfileIcon from '@components/ProfileIcon/ProfileIcon';
import ToggleButton from '@components/ToggleButton/ToggleButton';

const Wrapper = styled.div`
  flex: 1;
  flex-direction: column;
`;

const WrapperContent = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InterviewRoomSection = styled.div`
  width: 1196px;
  margin-bottom: 70px;
`;

const InterviewRoomInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);
  border: solid 1px #f6f6f6;
  background-color: #ffffff;
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

const UserInfoWrapper = styled.div`
  width: 1196px;
  margin: 23.9px 50px 0 0;
  padding: 0 0 54px;
  border-radius: 20px;
`;

const UserInfoHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 73px;
  background-color: #eef0ff;
  border-radius: 20px 20px 0 0;
`;

const TableColumn = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: ${({ value }) => `${(value > 0 ? value : 0)}px`};
  font-family: AppleSDGothicNeoB00;
  font-size: 20px;
  color: ${({ color }) => (color === 'blue' ? '#6e6eff' : '#3d3d3d')};
`;

const UserInfoContent = styled.div`
  width: 100%;
  padding: 41px 0 20px 0;
`;

const ContentRow = styled.div`
  position: relative;
  height: 60px;
  padding: 0 88px;
  margin-bottom: 60px;
`;

const UserInfo = styled.div`
  width: 150px;
  margin-left: 26px;

  & > p {
    font-family: AppleSDGothicNeoEB00;
    color: #3d3d3d;
    margin-bottom: 16px;
  }
`;

const TagsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const TagItem = styled.label`
  background-color: ${({ color }) => (color === 'blue' ? '#eef0ff' : '#fff3ef')};
  font-size: 15px;
  color: ${({ color }) => (color === 'blue' ? '#6e6eff' : '#f2886b')};
  border-radius: 5px;
  padding: 3px 11px 3px 10px;
`;

const ItemInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 15px;
  font-weight: bold;
`;

const ProgressBar = styled.progress`
  width: 245px;
  height: 8px;
  margin-right: 22px;
  border:none;
  overflow: hidden;
  -moz-border-radius: 50px;
   -webkit-border-radius: 50px;
  border-radius: 50px;
  &::-webkit-progress-value {
    background-image: linear-gradient(to right, #2323de 1%, #4848da 91%);
  }
  &::-webkit-progress-bar {
    background-color: #d3d3d3;
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
          <UserInfoWrapper>
            <UserInfoHeader>
              <TableColumn color="blue" value={88}>사용자 정보</TableColumn>
              <TableColumn color="blue" value={420}>스터디 참가 횟수</TableColumn>
              <TableColumn color="blue" value={627}>신뢰도</TableColumn>
              <TableColumn color="blue" value={1023}>참가 희망</TableColumn>
            </UserInfoHeader>
            <UserInfoContent>
              <ContentRow>
                <TableColumn value={88}>
                  <ProfileIcon isSmall />
                  <UserInfo>
                    <p>이용재</p>
                    <TagsWrapper>
                      <TagItem color="blue">
                        유통
                      </TagItem>
                      <TagItem color="orange">
                        데이터 분석
                      </TagItem>
                    </TagsWrapper>
                  </UserInfo>
                </TableColumn>
                <TableColumn value={420}>
                  <ItemInnerWrapper>
                    10번
                  </ItemInnerWrapper>
                </TableColumn>
                <TableColumn color="blue" value={627}>
                  <ItemInnerWrapper>
                    <ProgressBar max="100" value="35" />
                    35%
                  </ItemInnerWrapper>
                </TableColumn>
                <TableColumn color="blue" value={1023}>
                  <ToggleButton />
                </TableColumn>
              </ContentRow>
              <ContentRow>
                <TableColumn value={88}>
                  <ProfileIcon isSmall />
                  <UserInfo>
                    <p>김찬호</p>
                    <TagsWrapper>
                      <TagItem color="blue">
                        화학
                      </TagItem>
                      <TagItem color="orange">
                        데이터 분석
                      </TagItem>
                    </TagsWrapper>
                  </UserInfo>
                </TableColumn>
                <TableColumn value={420}>
                  <ItemInnerWrapper>
                    12번
                  </ItemInnerWrapper>
                </TableColumn>
                <TableColumn color="blue" value={627}>
                  <ItemInnerWrapper>
                    <ProgressBar max="100" value="100" />
                    100%
                  </ItemInnerWrapper>
                </TableColumn>
                <TableColumn color="blue" value={1023}>
                  <ToggleButton />
                </TableColumn>
              </ContentRow>
            </UserInfoContent>
          </UserInfoWrapper>
        </InterviewRoomSection>
      </WrapperContent>
    </Wrapper>
  );
}
