import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  getGroupRoomApi,
  getGroupRoomEachApi,
} from '@repository/groupRepository';
import A from '@atoms';
import O from '@organisms';
import { showModal } from '@store/Modal/modal';
import { MODALS } from '@utils/constant';
import Modal from '@organisms/Modal/Modal';
import usePageBottom from '@hooks/usePageBottom';
import S from './PeerStudyMainPage.style';

export default function PeerStudyMainPage() {
  const dispatch = useDispatch();
  const isPageBottom = usePageBottom();
  const [groupList, setGroupList] = useState([]);
  const [member, setMember] = useState([]);
  const [page, setPage] = useState(0);
  const fetch = async (pages) => {
    try {
      const { data } = await getGroupRoomApi(pages);
      console.log(data);
      const unit = data.length === 6 ? 1 : 0;
      data?.forEach(async (val) => {
        const {
          data: { nowUserCnt },
        } = await getGroupRoomEachApi(val.id);
        setMember((members) => [
          ...members,
          { id: val.id, member: nowUserCnt },
        ]);
      });
      setGroupList((GroupList) => [...GroupList, ...data].filter(
        (v, i, a) => a.findIndex((t) => t.id === v.id) === i,
      ));
      setPage(pages + unit);
    } catch (error) {
      console.error(error, 'a');
      alert(error);
    }
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
    fetch(page);
  }, [isPageBottom]);

  const ButtonList = [
    '이공계_사기업',
    '이공계_공기업',
    '인문계_사기업',
    '인문계_공기업',
    '자유_기타',
  ];

  const MockProfile = () => {
    const item = [];
    for (let i = 0; i < 2; i += 1) {
      item.push(
        <O.ProfileInfoContainer
          name="이영희"
          participateRate={95}
          src="https://images.generated.photos/wNQ4DFhYBW1rhVfJcABnSbnEqvAYvNFC2FoXFmSlQDk/rs:fit:64:64/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3NjI5NTJfMDc4/MzU0N18wNzU2MTIz/LmpwZw.jpg"
        />,
      );
      item.push(
        <O.ProfileInfoContainer
          name="김민수"
          participateRate={97}
          src="https://images.generated.photos/Mvj3BACVuVB7nhFBMntFD2_GSpti55sQZGA6W41CbkA/rs:fit:64:64/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA2MjQwMjguanBn.jpg"
        />,
      );
      item.push(
        <O.ProfileInfoContainer
          name="이수근"
          participateRate={82}
          src="https://images.generated.photos/2eakikvGnP8RXguLLlS5btl2IsS3ao6T9E1eE8b0Kik/rs:fit:64:64/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzMzM4ODZfMDI5/NzcyOF8wMTcyMjAz/LmpwZw.jpg"
        />,
      );
      item.push(
        <O.ProfileInfoContainer
          name="박미나"
          participateRate={91}
          src="https://images.generated.photos/vrlHRAktOiwyM0-2632IhhbhEj2vDafwnBvTll8rpdk/rs:fit:64:64/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5NjgxMzYuanBn.jpg"
        />,
      );
      item.push(
        <O.ProfileInfoContainer
          name="홍길동"
          participateRate={90}
          src="https://images.generated.photos/BJlxsNPRJxDUZKrc3v-ok3_aY10keLpkqvXb6wHPo6Q/rs:fit:64:64/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwMTI1NDZfMDQ5/MTQxMV8wMTIxMjg5/LmpwZw.jpg"
        />,
      );
    }
    return item;
  };

  return (
    <S.Wrapper>
      <Modal modalName={MODALS.STUDY_MAKE_MODAL} func={handleReload} />
      <div>
        <S.SearchWrapper>
          <S.IconWrapper>
            <A.Icon type="search" alt="search" />
          </S.IconWrapper>
          <S.Input placeholder="Search" />
        </S.SearchWrapper>
        <S.StudyText>현재 진행 중인 스터디 방</S.StudyText>
        <S.ContentWrapper>
          <S.BoxWrapper>
            <S.ListWrapper>
              <S.ButtonWrapper>
                {ButtonList.map((val, key) => (
                  <S.TextButtonWrapper key={key}>
                    <A.TextButton text={val} />
                  </S.TextButtonWrapper>
                ))}
                <S.FilterWrapper>
                  <A.Icon type="filter" alt="filter" />
                </S.FilterWrapper>
              </S.ButtonWrapper>
              <S.StudyListWrapper>
                <S.Wrap onClick={handleStudyAddModal}>
                  <S.AddStudy>
                    <A.Icon type="add_black" alt="add_black" />
                    <S.AddText>방 만들기</S.AddText>
                  </S.AddStudy>
                </S.Wrap>
                {groupList?.map((val) => {
                  const count = member.filter((elem) => elem.id === val.id)[0];
                  return (
                    <O.StudyCardView
                      key={val.id}
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
              <S.PartiText>참여도 높은 유저</S.PartiText>
              {MockProfile()}
            </S.PartiWrapper>
          </S.BoxWrapper>
        </S.ContentWrapper>
      </div>
    </S.Wrapper>
  );
}
