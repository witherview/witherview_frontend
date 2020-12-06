import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGroupListApi, getGroupMemberApi } from '@repository/groupRepository';
import Icon from '@components/Icon';
import TextButton from '@components/TextButton';
import ProfileInfoContainer from '@components/ProfileInfoContainer/ProfileInfoContainer';
import StudyCardView from '@components/StudyCardView';
import { showModal } from '@store/Modal/modal';
import { MODALS } from '@utils/constant';
import Modal from '@components/Modal/Modal';
import usePageBottom from '@hooks/usePageBottom';
import S from './StudyMainPage.style';

export default function StudyMainPage() {
  const dispatch = useDispatch();
  const isPageBottom = usePageBottom();
  const [groupList, setGroupList] = useState([]);
  const [member, setMember] = useState([]);
  const [page, setPage] = useState(0);
  const fetch = async (pages) => {
    getGroupListApi(pages).then((res) => {
      const unit = res.data.length === 6 ? 1 : 0;
      res.data.forEach((val) => {
        getGroupMemberApi(val.id).then((response) => {
          setMember((members) => [...members, { id: val.id, member: response.data.length }]);
        });
      });
      setGroupList((GroupList) => [...GroupList, ...res.data].filter((v, i, a) => a.findIndex((t) => (t.id === v.id)) === i));
      setPage(pages + unit);
    });
  };

  const handleStudyAddModal = () => {
    dispatch(showModal(MODALS.STUDY_MAKE_MODAL));
  };

  const handleReload = () => {
    setGroupList([]);
    setMember([]);
    for (let i = 0; i <= page; i += 1) {
      fetch(i);
    }
  };

  useEffect(() => {
    fetch(page);
  }, []);

  useEffect(() => {
    if (!isPageBottom) return;
    console.log('bottom');
    fetch(page);
  }, [isPageBottom]);

  const ButtonList = [
    '이공계_사기업',
    '이공계_공기업',
    '인문계_사기업',
    '인문계_공기업',
    '자유_기타',
  ];

  const MockProfile = (val) => {
    let item = [];
    for(let i = 0; i<val; i+=1) {
      item.push(<ProfileInfoContainer src="https://api.generated.photos/api/v1/faces?api_key=kOw2wPhMd_54sDQk3OY1Gg"/>);
    }
    return item;
  }

  return (
    <S.Wrapper>
      <Modal modalName={MODALS.STUDY_MAKE_MODAL} func={handleReload} />
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
              <S.Wrap onClick={handleStudyAddModal}>
                <S.AddStudy>
                  <Icon type="add_black" />
                  <S.AddText>
                    방 만들기
                  </S.AddText>
                </S.AddStudy>
              </S.Wrap>
              {groupList?.map((val) => {
                const count = member.filter((elem) => elem.id === val.id)[0];
                return (
                  <StudyCardView
                    id={val.id}
                    title={val.title}
                    description={val.description}
                    time={val.time}
                    member={count && count.member}
                  />
                );
              })}
            </S.StudyListWrapper>
          </S.ListWrapper>
          <S.PartiWrapper>
            <S.PartiText>
              참여도 높은 유저
            </S.PartiText>
            {MockProfile(10)}
          </S.PartiWrapper>
        </S.BoxWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}
