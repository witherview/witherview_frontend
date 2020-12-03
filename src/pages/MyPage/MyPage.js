import React from 'react';
import Icon from '@components/Icon';
import ProfileEdit from '@components/ProfileEdit';
import S from './MyPage.style';
import Box from './Box';

export default function MyPage() {
  const name = sessionStorage.getItem('name');
  const email = sessionStorage.getItem('email');
  return (
    <>
      <S.Wrapper>
        <S.ProfileWrapper>
          <S.Profile>
            <ProfileEdit />
            <S.ProfileInfo>
              <S.NameWrapper>
                <S.NameText>
                  {name}
                </S.NameText>
                <Icon type="post" />
              </S.NameWrapper>
              <S.Jobs>
                화학 / 데이터 분석
              </S.Jobs>
              <S.Reliability>
                신뢰도
              </S.Reliability>
              <S.BarWrapper>
                <S.Bar value="82" max="100" />
                <S.BarText>82%</S.BarText>
              </S.BarWrapper>
            </S.ProfileInfo>
          </S.Profile>
          <S.InfoWrapper>
            <S.Info>
              <S.Title>
                이메일 주소
              </S.Title>
              <S.Content>
                {email}
              </S.Content>
              <S.Title>
                관심 산업
              </S.Title>
              <S.Block>
                <S.BlockItem theme="blue">
                  화학
                </S.BlockItem>
                <S.BlockItem theme="blue">
                  금융
                </S.BlockItem>
              </S.Block>
            </S.Info>
            <S.Info>
              <S.Title>
                휴대전화
              </S.Title>
              <S.Content>
                01012345678
              </S.Content>
              <S.Title>
                관심 직무
              </S.Title>
              <S.Block>
                <S.BlockItem theme="orange">
                  데이터 분석
                </S.BlockItem>
                <S.BlockItem theme="orange">
                  유통
                </S.BlockItem>
              </S.Block>
            </S.Info>
          </S.InfoWrapper>
        </S.ProfileWrapper>
        <S.BoxWrapper>
          <Box type="sound_big" title="면접스터디 횟수" count={15} />
          <Box type="bubble_big" title="혼자연습 횟수" count={6} />
          <Box type="memo_big" title="질문 리스트 갯수" count={4} />
          <Box type="star_big" title="면접 평균 점수" count={7.8} />
          <Box type="thumb_up_big" title="합격 횟수" count={5} />
          <Box type="thumb_down_big" title="불합격 횟수" count={2} />
        </S.BoxWrapper>
      </S.Wrapper>
    </>
  );
}
