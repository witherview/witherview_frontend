import React from 'react';

import ProfileIcon from '@components/ProfileIcon/ProfileIcon';
import ToggleButton from '@components/ToggleButton/ToggleButton';

import S from './InterviewStudy.style';

export default function UsersSection() {
  const FIRST_COLUMN = 88;
  const SECOND_COLUMN = 420;
  const THIRD_COLUMN = 627;
  const FOURTH_COLUMN = 1023;

  return (
    <S.UserInfoWrapper>
      <S.UserInfoHeader>
        <S.TableColumn color="blue" value={FIRST_COLUMN}>사용자 정보</S.TableColumn>
        <S.TableColumn color="blue" value={SECOND_COLUMN}>스터디 참가 횟수</S.TableColumn>
        <S.TableColumn color="blue" value={THIRD_COLUMN}>신뢰도</S.TableColumn>
        <S.TableColumn color="blue" value={FOURTH_COLUMN}>참가 희망</S.TableColumn>
      </S.UserInfoHeader>
      <S.UserInfoContent>
        <S.ContentRow>
          <S.TableColumn value={FIRST_COLUMN}>
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
          <S.TableColumn value={SECOND_COLUMN}>
            <S.ItemInnerWrapper>
              10번
            </S.ItemInnerWrapper>
          </S.TableColumn>
          <S.TableColumn color="blue" value={THIRD_COLUMN}>
            <S.ItemInnerWrapper>
              <S.ProgressBar max="100" value="35" />
              35%
            </S.ItemInnerWrapper>
          </S.TableColumn>
          <S.TableColumn color="blue" value={FOURTH_COLUMN}>
            <ToggleButton />
          </S.TableColumn>
        </S.ContentRow>
        <S.ContentRow>
          <S.TableColumn value={FIRST_COLUMN}>
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
          <S.TableColumn value={SECOND_COLUMN}>
            <S.ItemInnerWrapper>
              12번
            </S.ItemInnerWrapper>
          </S.TableColumn>
          <S.TableColumn color="blue" value={THIRD_COLUMN}>
            <S.ItemInnerWrapper>
              <S.ProgressBar max="100" value="100" />
              100%
            </S.ItemInnerWrapper>
          </S.TableColumn>
          <S.TableColumn color="blue" value={FOURTH_COLUMN}>
            <ToggleButton />
          </S.TableColumn>
        </S.ContentRow>
      </S.UserInfoContent>
    </S.UserInfoWrapper>
  );
}
