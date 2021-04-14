import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import {
  getEachGroupRoomApi,
} from '@repository/groupRepository';
import A from '@atoms';
import O from '@organisms';
import S from './PeerStudyRoomPage.style';

import UsersSection from './UsersSection';

const DEFAULT_ID = 421;
export default function PeerStudyRoomPage({
  id,
  setStepSetting,
  setStepTrain,
  chat,
  handleClick,
  isConnectStomp,
}) {
  const [roomTitle, setRoomTitle] = useState();
  const [dateInfoText, setDateInfoText] = useState();
  const [description, setDescription] = useState();

  const createDateInfo = (date, time) => {
    let filteredDate = date
      .split('-')
      .map((el, idx) => {
        if (idx === 0) {
          el = `${el}년 `;
        } else if (idx === 1) {
          el = `${el}월 `;
        } else if (idx === 2) {
          el = `${el}일 `;
        }
        return el;
      })
      .join('');
    if (time) {
      filteredDate += `시간 ${time}`;
    } else {
      filteredDate += '시간 미정';
    }
    return filteredDate;
  };

  const fetchRoomInfo = async () => {
    try {
      const { data } = await getEachGroupRoomApi(id || DEFAULT_ID);
      setRoomTitle(data.title);
      const dateText = createDateInfo(data.date, data.time);
      setDateInfoText(dateText);
      setDescription(data.description);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  useEffect(() => {
    // TODO: delete below line
    console.log(setStepSetting);
    fetchRoomInfo();
  }, []);

  return (
    <S.Wrapper>
      <S.WrapperContent>
        <S.WrapContainer>
          <S.InterviewRoomSection>
            <S.InterviewRoomInfo>
              <S.TextWrapper>
                <S.RoomTitle>{roomTitle}</S.RoomTitle>
                <S.DateInfo>{dateInfoText}</S.DateInfo>
                <S.Description>{description}</S.Description>
              </S.TextWrapper>
              <S.BoxWrapper>
                <A.Button text="방 나가기" theme="gray" />
                {/* TODO: 방장의 경우 Setting 설정으로 넘어가도록 해야 함 */}
                <A.Button
                  text="스터디 시작하기"
                  func={setStepTrain}
                  theme="blue"
                />
              </S.BoxWrapper>
            </S.InterviewRoomInfo>
            <UsersSection />
          </S.InterviewRoomSection>
          <O.RoomChat
            chatData={chat}
            onClick={handleClick}
            isConnectStomp={isConnectStomp}
          />
        </S.WrapContainer>
      </S.WrapperContent>
    </S.Wrapper>
  );
}

PeerStudyRoomPage.propTypes = {
  id: PropTypes.string,
  setStepSetting: PropTypes.func,
  setStepTrain: PropTypes.func,
  chat: PropTypes.array,
  handleClick: PropTypes.func,
  isConnectStomp: PropTypes.bool,
};
