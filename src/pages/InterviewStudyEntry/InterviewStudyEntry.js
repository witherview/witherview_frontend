import React from 'react';

import Button from '@components/Button/Button';
import ProfileIcon from '@components/ProfileIcon/ProfileIcon';
import ToggleButton from '@components/ToggleButton/ToggleButton';

import S from './InterviewStudy.style';

export default function InterviewStudyEntry() {
  return (
    <S.Wrapper>
      <S.WrapperContent>
        <S.InterviewRoomSection>
          <S.InterviewRoomInfo>
            <S.TextWrapper>
              <S.RoomTitle>삼성전자 데이터분석 합격자만</S.RoomTitle>
              <S.DateInfo>2020년 10월 3일 시간 미정</S.DateInfo>
              <S.Description>삼성전자 GSAT 합격자만 오세요. 10월 19일 면접 대비하려고 합니다.</S.Description>
            </S.TextWrapper>
            <S.BoxWrapper>
              <Button text="방 나가기" theme="gray" />
              <Button text="스터디 시작하기" theme="blue" />
            </S.BoxWrapper>
          </S.InterviewRoomInfo>
          <S.UserInfoWrapper>
            <S.UserInfoHeader>
              <S.TableColumn color="blue" value={88}>사용자 정보</S.TableColumn>
              <S.TableColumn color="blue" value={420}>스터디 참가 횟수</S.TableColumn>
              <S.TableColumn color="blue" value={627}>신뢰도</S.TableColumn>
              <S.TableColumn color="blue" value={1023}>참가 희망</S.TableColumn>
            </S.UserInfoHeader>
            <S.UserInfoContent>
              <S.ContentRow>
                <S.TableColumn value={88}>
                  <ProfileIcon isSmall />
                  <S.UserInfo>
                    <p>이용재</p>
                    <S.TagsWrapper>
                      <S.TagItem color="blue">
                        유통
                      </S.TagItem>
                      <S.TagItem color="orange">
                        데이터 분석
                      </S.TagItem>
                    </S.TagsWrapper>
                  </S.UserInfo>
                </S.TableColumn>
                <S.TableColumn value={420}>
                  <S.ItemInnerWrapper>
                    10번
                  </S.ItemInnerWrapper>
                </S.TableColumn>
                <S.TableColumn color="blue" value={627}>
                  <S.ItemInnerWrapper>
                    <S.ProgressBar max="100" value="35" />
                    35%
                  </S.ItemInnerWrapper>
                </S.TableColumn>
                <S.TableColumn color="blue" value={1023}>
                  <ToggleButton />
                </S.TableColumn>
              </S.ContentRow>
              <S.ContentRow>
                <S.TableColumn value={88}>
                  <ProfileIcon isSmall />
                  <S.UserInfo>
                    <p>김찬호</p>
                    <S.TagsWrapper>
                      <S.TagItem color="blue">
                        화학
                      </S.TagItem>
                      <S.TagItem color="orange">
                        데이터 분석
                      </S.TagItem>
                    </S.TagsWrapper>
                  </S.UserInfo>
                </S.TableColumn>
                <S.TableColumn value={420}>
                  <S.ItemInnerWrapper>
                    12번
                  </S.ItemInnerWrapper>
                </S.TableColumn>
                <S.TableColumn color="blue" value={627}>
                  <S.ItemInnerWrapper>
                    <S.ProgressBar max="100" value="100" />
                    100%
                  </S.ItemInnerWrapper>
                </S.TableColumn>
                <S.TableColumn color="blue" value={1023}>
                  <ToggleButton />
                </S.TableColumn>
              </S.ContentRow>
            </S.UserInfoContent>
          </S.UserInfoWrapper>
        </S.InterviewRoomSection>
      </S.WrapperContent>
    </S.Wrapper>
  );
}
