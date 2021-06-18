import React from 'react';

import PropTypes from 'prop-types';

import A from '@atoms';

import S from './PeerStudyRoomPage.style';

const FIRST_COLUMN = 88;
const SECOND_COLUMN = 420;
const THIRD_COLUMN = 627;
const FOURTH_COLUMN = 1023;

export default function UsersSection({ host, nonHost }) {
  return (
    <S.UserInfoWrapper>
      <S.UserInfoHeader>
        <S.TableColumn color="blue" value={FIRST_COLUMN}>
          사용자 정보
        </S.TableColumn>
        <S.TableColumn color="blue" value={SECOND_COLUMN}>
          스터디 참가 횟수
        </S.TableColumn>
        <S.TableColumn color="blue" value={THIRD_COLUMN}>
          신뢰도
        </S.TableColumn>
        <S.TableColumn color="blue" value={FOURTH_COLUMN}>
          참가 희망
        </S.TableColumn>
      </S.UserInfoHeader>
      <S.UserInfoContent>
        <S.ContentRow>
          <S.TableColumn value={FIRST_COLUMN}>
            <A.ProfileIcon isSmall />
            <S.UserInfo>
              <p>{host?.name}</p>
              <S.TagsWrapper>
                <S.TagItem color="blue">유통</S.TagItem>
                <S.TagItem color="orange">데이터 분석</S.TagItem>
              </S.TagsWrapper>
            </S.UserInfo>
          </S.TableColumn>
          <S.TableColumn value={SECOND_COLUMN}>
            <S.ItemInnerWrapper>{host?.groupPracticeCnt}번</S.ItemInnerWrapper>
          </S.TableColumn>
          <S.TableColumn color="blue" value={THIRD_COLUMN}>
            <S.ItemInnerWrapper>
              <S.ProgressBar max="100" value={host?.reliability} />
              {host?.reliability}%
            </S.ItemInnerWrapper>
          </S.TableColumn>
          <S.TableColumn color="blue" value={FOURTH_COLUMN}>
            <A.ToggleButton />
          </S.TableColumn>
        </S.ContentRow>
        <S.ContentRow>
          <S.TableColumn value={FIRST_COLUMN}>
            <A.ProfileIcon isSmall />
            <S.UserInfo>
              <p>{nonHost?.name}</p>
              <S.TagsWrapper>
                <S.TagItem color="blue">화학</S.TagItem>
                <S.TagItem color="orange">데이터 분석</S.TagItem>
              </S.TagsWrapper>
            </S.UserInfo>
          </S.TableColumn>
          <S.TableColumn value={SECOND_COLUMN}>
            <S.ItemInnerWrapper>
              {nonHost?.groupPracticeCnt}번
            </S.ItemInnerWrapper>
          </S.TableColumn>
          <S.TableColumn color="blue" value={THIRD_COLUMN}>
            <S.ItemInnerWrapper>
              <S.ProgressBar max="100" value={nonHost?.reliability} />
              {nonHost?.reliability}%
            </S.ItemInnerWrapper>
          </S.TableColumn>
          <S.TableColumn color="blue" value={FOURTH_COLUMN}>
            <A.ToggleButton />
          </S.TableColumn>
        </S.ContentRow>
      </S.UserInfoContent>
    </S.UserInfoWrapper>
  );
}

UsersSection.propTypes = {
  host: PropTypes.object,
  nonHost: PropTypes.object,
};
