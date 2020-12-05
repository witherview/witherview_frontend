import React, { useEffect, useState } from 'react';

import Button from '@components/Button/Button';

import { getInterviewStudyRoomAPI } from '@repository/interviewStudyRepository';
import S from './InterviewStudy.style';
import UsersSection from './UsersSection';

export default function InterviewStudyEntry({ id }) {
  const DEFAULT_ID = 421;
  const [roomTitle, setRoomTitle] = useState();
  const [dateInfoText, setDateInfoText] = useState();
  const [description, setDescription] = useState();

  const createDateInfo = (date, time) => {
    let filteredDate = date.split('-').map((el, idx) => {
      if (idx === 0) {
        el = `${el}년 `;
      } else if (idx === 1) {
        el = `${el}월 `;
      } else if (idx === 2) {
        el = `${el}일 `;
      }
      return el;
    }).join('');
    if (time) {
      filteredDate += `시간 ${time}`;
    } else {
      filteredDate += '시간 미정';
    }
    return filteredDate;
  };

  const fetchRoomInfo = async () => {
    const { data } = await getInterviewStudyRoomAPI(DEFAULT_ID);
    setRoomTitle(data.title);
    const dateText = createDateInfo(data.date, data.time);
    setDateInfoText(dateText);
    setDescription(data.description);
  };

  useEffect(() => {
    fetchRoomInfo();
  }, []);

  return (
    <S.Wrapper>
      <S.WrapperContent>
        <S.InterviewRoomSection>
          <S.InterviewRoomInfo>
            <S.TextWrapper>
              <S.RoomTitle>{roomTitle}</S.RoomTitle>
              <S.DateInfo>{dateInfoText}</S.DateInfo>
              <S.Description>{description}</S.Description>
            </S.TextWrapper>
            <S.BoxWrapper>
              <Button text="방 나가기" theme="gray" />
              <Button text="스터디 시작하기" theme="blue" />
            </S.BoxWrapper>
          </S.InterviewRoomInfo>
          <UsersSection />
        </S.InterviewRoomSection>
      </S.WrapperContent>
    </S.Wrapper>
  );
}
