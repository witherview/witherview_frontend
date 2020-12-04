import React, { useState, useEffect } from 'react';
import { getGroupListApi, getGroupMemberApi } from '@repository/groupRepository';
import Icon from '@components/Icon';
import TextButton from '@components/TextButton';
import ProfileInfoContainer from '@components/ProfileInfoContainer/ProfileInfoContainer';
import StudyCardView from '@components/StudyCardView';
import S from './StudyMainPage.style';

import StudyMainList from './StudyMainList.js';

export default function StudyMainPage() {
  const [groupList, setGroupList] = useState([]);
  const [member, setMember] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetch = async () => {
    getGroupListApi().then((res) => {
        res.data.map(val=>{
            getGroupMemberApi(val.id).then((response) => {
                console.log("id "+val.id+ " member: "+response.data.length);
                setMember(member => [...member, {"id":val.id, "member": response.data.length}]);
            });
        });
      setGroupList(res.data);
      setLoading(true);
    })
  };
  useEffect(() => {
    fetch();
  }, []);
  const ButtonList = [
    '이공계_사기업',
    '이공계_공기업',
    '인문계_사기업',
    '인문계_공기업',
    '자유_기타',
  ];
  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <S.IconWrapper>
          <Icon type="search" alt="" />
        </S.IconWrapper>
        <S.Input placeholder="Search" />
      </S.SearchWrapper>
      <S.StudyText>
        현재 진행 중인 스터디 방
      </S.StudyText>
      <S.ContentWrapper>
        <S.BoxWrapper>
          <S.ListWrapper>
            <S.ButtonWrapper>
              {ButtonList.map((val) => (
                <S.TextButtonWrapper>
                  <TextButton text={val} />
                </S.TextButtonWrapper>
              ))}
              <S.FilterWrapper>
                <Icon type="filter" alt="" />
              </S.FilterWrapper>
            </S.ButtonWrapper>
            <S.StudyListWrapper>
              <S.Wrap>
                <S.AddStudy>
                  <Icon type="add_black" />
                  <S.AddText>
                    방 만들기
                  </S.AddText>
                </S.AddStudy>
              </S.Wrap>
              {groupList?.map((val) => {
                const count = member.filter(elem=>elem['id'] === val.id)[0];
                return (
                  <StudyCardView
                    title={val.title}
                    description={val.description}
                    time={val.time}
                    member={count && count['member']}
                  />
                );
              })}
            </S.StudyListWrapper>
          </S.ListWrapper>
          <S.PartiWrapper>
            <S.partiText>
              참여도 높은 유저
            </S.partiText>
            <ProfileInfoContainer />
          </S.PartiWrapper>
        </S.BoxWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}
