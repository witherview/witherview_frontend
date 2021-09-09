import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get } from '@utils/snippet';
import {
  getGroupRoomApi,
  getEachGroupRoomApi,
  getGroupRoomParticipantsApi,
} from '@repository/groupRepository';
import A from '@atoms';
import O from '@organisms';
import { displayModal } from '@store/Modal/modal';
import { MODALS } from '@utils/constant';
import Modal from '@organisms/Modal/Modal';
import usePageBottom from '@hooks/usePageBottom';
import S from './PeerStudyMainPage.style';

export default function PeerStudyMainPage() {
  const dispatch = useDispatch();

  const { email } = useSelector(get('auth'));
  const isPageBottom = usePageBottom();
  const [groupList, setGroupList] = useState([]);
  console.log('groupList: ', groupList);
  const [member, setMember] = useState([]);
  const [page, setPage] = useState(0);

  const handleStudyAddModal = () => {
    dispatch(displayModal({ modalName: MODALS.STUDY_MAKE_MODAL }));
  };

  const fetch = async (pages) => {
    try {
      const { data } = await getGroupRoomApi(pages);
      const unit = data.length === 6 ? 1 : 0;
      data?.forEach(async (val) => {
        const {
          data: { nowUserCnt },
        } = await getEachGroupRoomApi(val.id);
        const { data: datas } = await getGroupRoomParticipantsApi(val.id);
        setMember((members) => [
          ...members,
          {
            id: val.id,
            member: nowUserCnt,
            emails: datas.reduce((acc, cur) => [...acc, cur.email], []),
          },
        ]);
      });
      setGroupList((GroupList) =>
        [...GroupList, ...data].filter(
          (v, i, a) => a.findIndex((t) => t.id === v.id) === i,
        ),
      );
      setPage(pages + unit);
    } catch (error) {
      console.error(error);
      alert(error);
    }
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

  const MockProfile = () => {
    const item = [];
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
    return item;
  };

  return (
    <S.Wrapper>
      <Modal modalName={MODALS.STUDY_MAKE_MODAL} func={handleReload} />
      <div className="wrapper">
        <O.SearchBar />
        <S.StudyText>현재 진행 중인 스터디 방</S.StudyText>
        <S.ContentWrapper>
          <S.BoxWrapper>
            <S.ListWrapper>
              <S.StudyListWrapper>
                <S.Wrap onClick={handleStudyAddModal}>
                  <S.AddStudy>
                    <span>+</span>
                    <S.AddText>방 만들기</S.AddText>
                  </S.AddStudy>
                </S.Wrap>
                {groupList?.map(({ id, title, description, time }) => {
                  const roomInfo = member?.filter((elem) => elem.id === id)[0];
                  const isParticipated = roomInfo?.emails.includes(email);

                  return (
                    <O.StudyCardView
                      key={id}
                      id={id}
                      title={title}
                      description={description}
                      time={time}
                      member={roomInfo && roomInfo?.member}
                      canParticipate={isParticipated || roomInfo?.member === 1}
                    />
                  );
                })}
              </S.StudyListWrapper>
            </S.ListWrapper>
            <S.PartiWrapper>
              <S.PartiText>참여도 높은 유저</S.PartiText>
              {MockProfile()}
              <S.ButtonWrapper>
                <A.Button btnTheme="outline" text="더보기" />
              </S.ButtonWrapper>
            </S.PartiWrapper>
          </S.BoxWrapper>
        </S.ContentWrapper>
      </div>
    </S.Wrapper>
  );
}
