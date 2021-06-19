import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import {
  getEachGroupRoomApi,
  getGroupRoomParticipantsApi,
  deleteEachGroupRoomApi,
  patchPassRoomHostEachGroupRoomApi,
  deleteEachGroupRoomParticipantsApi,
} from '@repository/groupRepository';

import { useSelector } from 'react-redux';
import { get } from '@utils/snippet';

import A from '@atoms';
import O from '@organisms';
import S from './PeerStudyRoomPage.style';

import UsersSection from './UsersSection';

export default function PeerStudyRoomPage({
  id,
  history,
  setStepSetting,
  setStepTrain,
  chat,
  handleClick,
  isConnectStomp,
}) {
  const { email } = useSelector(get('auth'));

  const [roomTitle, setRoomTitle] = useState();
  const [dateInfoText, setDateInfoText] = useState();
  const [descript, setDescript] = useState();

  const [users, setUsers] = useState();

  const HOST = users?.filter((each) => each.isHost)[0];
  const NON_HOST = users?.filter((each) => !each.isHost)[0];
  const IS_HOST = HOST?.email === email;

  const [exit, setExit] = useState(false);

  const handeLeave = () => {
    if (exit) {
      // TODO: 잘 작동하는지 추후에 확인해야 함
      if (IS_HOST) {
        patchPassRoomHostEachGroupRoomApi(id);
      }
      deleteEachGroupRoomParticipantsApi(id);
      if (users.length === 1) {
        deleteEachGroupRoomApi(id);
      }
    }
    history.push('/peer-study');
  };

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

  useEffect(() => {
    (async () => {
      try {
        const { data: participants } = await getGroupRoomParticipantsApi(id);

        setUsers(participants);

        const {
          data: { title, date, time, description },
        } = await getEachGroupRoomApi(id);
        setRoomTitle(title);

        const dateText = createDateInfo(date, time);

        setDateInfoText(dateText);
        setDescript(description);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    })();
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
                <S.Description>{descript}</S.Description>
              </S.TextWrapper>
              <S.BoxWrapper>
                <A.Button text="방 나가기" theme="gray" func={handeLeave} />
                <A.Button
                  text="스터디 시작하기"
                  func={IS_HOST ? setStepSetting : setStepTrain}
                  theme="blue"
                />
              </S.BoxWrapper>
            </S.InterviewRoomInfo>
            <UsersSection
              host={HOST}
              nonHost={NON_HOST}
              isHost={IS_HOST}
              setExit={setExit}
            />
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
  history: ReactRouterPropTypes.history.isRequired,
  setStepSetting: PropTypes.func,
  setStepTrain: PropTypes.func,
  chat: PropTypes.array,
  handleClick: PropTypes.func,
  isConnectStomp: PropTypes.bool,
};
