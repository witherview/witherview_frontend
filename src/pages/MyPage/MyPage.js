import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import A from '@atoms';
import M from '@molecules';

import { getUserStatisticsApi } from '@repository/accountRepository';
import { get } from '@utils/snippet';
import S from './MyPage.style';
import Box from './Box';

export default function MyPage() {
  const { name, email, phoneNumber } = useSelector(get('auth'));

  const [info, setInfo] = useState([]);
  const fetch = async () => {
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
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <S.Wrapper>
      <S.ProfileWrapper>
        <S.Profile>
          <M.ProfileEdit />
          <S.ProfileInfo>
            <S.NameWrapper>
              <S.NameText>{name}</S.NameText>
              <A.Icon type="post" />
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
            <S.Title>이메일 주소</S.Title>
            <S.Content>{email}</S.Content>
            <S.Title>관심 산업</S.Title>
            <S.Block>
              <S.BlockItem theme="blue">화학</S.BlockItem>
              <S.BlockItem theme="blue">금융</S.BlockItem>
            </S.Block>
          </S.Info>
          <S.Info>
            <S.Title>휴대전화</S.Title>
            <S.Content>{phoneNumber}</S.Content>
            <S.Title>관심 직무</S.Title>
            <S.Block>
              <S.BlockItem theme="orange">데이터 분석</S.BlockItem>
              <S.BlockItem theme="orange">유통</S.BlockItem>
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
    </S.Wrapper>
  );
}
