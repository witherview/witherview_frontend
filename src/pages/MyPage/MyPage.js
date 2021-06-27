import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import A from '@atoms';
import M from '@molecules';

import {
  getUserStatisticsApi,
  putProfileInfoApi,
} from '@repository/accountRepository';
import { get } from '@utils/snippet';
import S from './MyPage.style';
import Box from './Box';

export default function MyPage() {
  const {
    name,
    email,
    phoneNumber,
    mainIndustry,
    mainJob,
    subIndustry,
    subJob,
  } = useSelector(get('auth'));

  const [info, setInfo] = useState([]);
  const [editName, setEditName] = useState();
  const [editPhoneNumber, setEditPhoneNumber] = useState();
  const [savedName, setSavedName] = useState();
  const [savedPhoneNumber, setSavedPhoneNumber] = useState();

  const updateUserInfo = async () => {
    try {
      if (savedName !== editName || savedPhoneNumber !== editPhoneNumber) {
        // #53 에서 작업한 input validation 에서 validation 필요한 부분 적용 할 일감을 별도로 작성하여
        // 전체적으로 추가 할 예정임.
        await putProfileInfoApi({
          mainIndustry,
          mainJob,
          name: editName,
          phoneNumber: editPhoneNumber,
          subIndustry,
          subJob,
        });

        setSavedName(editName);
        setSavedPhoneNumber(editPhoneNumber);
        alert('개인정보가 변경되었습니다.');
      }
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const {
          data: {
            groupStudyCnt,
            selfPracticeCnt,
            questionListCnt,
            interviewScore,
            passCnt,
            failCnt,
          },
        } = await getUserStatisticsApi();
        setInfo([
          {
            type: 'sound_big',
            title: '면접스터디 횟수',
            count: groupStudyCnt,
          },
          {
            type: 'bubble_big',
            title: '혼자연습 횟수',
            count: selfPracticeCnt,
          },
          {
            type: 'memo_big',
            title: '질문 리스트 갯수',
            count: questionListCnt,
          },
          {
            type: 'star_big',
            title: '면접 평균 점수',
            count: interviewScore,
            unit: '점',
          },
          {
            type: 'thumb_up_big',
            title: '합격 횟수',
            count: passCnt,
          },
          {
            type: 'thumb_down_big',
            title: '불합격 횟수',
            count: failCnt,
          },
        ]);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    })();
  }, []);

  useEffect(() => {
    setEditName(name);
    setSavedName(name);
    setEditPhoneNumber(phoneNumber);
    setSavedPhoneNumber(phoneNumber);
  }, [name, phoneNumber]);

  return (
    <S.Wrapper>
      <S.ProfileWrapper>
        <S.Profile>
          <M.ProfileEdit />
          <S.ProfileInfo>
            <S.NameWrapper>
              <S.InputWrapper noBorder>
                <A.InputBar
                  value={editName}
                  isFullWidth
                  onChange={(e) => setEditName(e.target.value)}
                />
              </S.InputWrapper>
            </S.NameWrapper>
            <S.Jobs>화학 / 데이터 분석</S.Jobs>
            <S.Reliability>신뢰도</S.Reliability>
            <S.BarWrapper>
              <S.Bar value="96" max="100" />
              <S.BarText>96%</S.BarText>
            </S.BarWrapper>
          </S.ProfileInfo>
        </S.Profile>
        <S.InfoWrapper>
          <S.Info>
            <A.SubHeader subHeaderText="이메일 주소" fontSize="2vh">
              <S.InputWrapper>
                <A.InputBar value={email} isFullWidth disabled />
              </S.InputWrapper>
            </A.SubHeader>
            <S.Title>관심 산업</S.Title>
            <S.Block>
              <S.BlockItem blockItemTheme="blue">화학</S.BlockItem>
              <S.BlockItem blockItemTheme="blue">금융</S.BlockItem>
            </S.Block>
          </S.Info>
          <S.Info>
            <A.SubHeader subHeaderText="휴대전화" fontSize="2vh">
              <S.InputWrapper>
                <A.InputBar
                  value={editPhoneNumber}
                  isFullWidth
                  onChange={(e) => setEditPhoneNumber(e.target.value)}
                />
              </S.InputWrapper>
            </A.SubHeader>
            <S.Title>관심 직무</S.Title>
            <S.Block>
              <S.BlockItem blockItemTheme="orange">데이터 분석</S.BlockItem>
              <S.BlockItem blockItemTheme="orange">유통</S.BlockItem>
            </S.Block>
          </S.Info>
        </S.InfoWrapper>
      </S.ProfileWrapper>
      <S.BoxWrapper>
        {info?.map((val) => (
          <Box
            type={val.type}
            title={val.title}
            count={val.count !== null ? val.count : 0}
            unit={val.unit}
          />
        ))}
      </S.BoxWrapper>
      <S.ButtonWrapper>
        <A.Button
          theme="blue"
          text="저장"
          func={async () => await updateUserInfo()}
        />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
