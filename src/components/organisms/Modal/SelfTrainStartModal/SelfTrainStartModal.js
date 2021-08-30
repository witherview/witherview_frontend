import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { get } from '@utils/snippet';
import { useHistory } from 'react-router-dom';
import A from '@atoms';
import { commonStyles } from '@style';
import { removeModal } from '@store/Modal/modal';
import { MODALS } from '@utils/constant';
import { resetQuestions } from '@store/Question/question';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 71.8vh;
  height: 47vh;
`;

const CancelWrapper = styled.div`
  align-self: flex-end;
  margin: 2.6vh 2.6vh 1.1vh 0;
  > i {
    cursor: pointer;
  }
`;

const TextSave = styled.div`
  margin-top: 2.5vh;
  font-family: AppleSDGothicNeoEB00;
  font-size: 3.6vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;

const TextStart = styled.div`
  margin: 2vh 0 7.3vh 0;
  font-family: AppleSDGothicNeoM00;
  font-size: 2.4vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #3d3d3d;
`;

const WrapButton = styled.div`
  ${commonStyles.button}
`;

export default function SelfTrainStartModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { selectedQnaId } = useSelector(get('train'));
  const handleHideModal = () => {
    dispatch(removeModal({ modalName: MODALS.SELF_TRAIN_START_MODAL }));
  };

  const handleStart = () => {
    history.push(`/self/setting/${selectedQnaId}`);
    dispatch(resetQuestions());
    dispatch(removeModal({ modalName: MODALS.SELF_TRAIN_START_MODAL }));
  };

  return (
    <>
      <Wrapper>
        <CancelWrapper>
          <A.Icon type="cancel_blue" alt="" func={handleHideModal} />
        </CancelWrapper>
        <A.Icon type="check_large" alt="" />
        <TextSave>질문 리스트가 저장되었습니다.</TextSave>
        <TextStart>이제 면접 연습을 시작해보세요!</TextStart>
        <WrapButton>
          <A.Button text="면접 시작하기" btnTheme="blue" func={handleStart} />
        </WrapButton>
      </Wrapper>
    </>
  );
}
