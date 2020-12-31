import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { get } from '@utils/snippet';
import { useHistory } from 'react-router-dom';
import Button from '@components/Button';
import Icon from '@components/Icon';
import { hideModal } from '@store/Modal/modal';
import { MODALS } from '@utils/constant';
import { ResetQuestions } from '@store/Question/question';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 718px;
  height: 470px;
`;

const CancelWrapper = styled.div`
  align-self: flex-end;
  margin: 26px 26px 11px 0;
  > i {
    cursor: pointer;
  }
`;

const TextSave = styled.div`
  margin-top: 25px;
  font-family: AppleSDGothicNeoEB00;
  font-size: 36px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;

const TextStart = styled.div`
  margin: 20px 0 73px 0;
  font-family: AppleSDGothicNeoM00;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #3d3d3d;
`;

export default function SelfTrainStartModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { selectedQnaId } = useSelector(get('train'));
  const handleHideModal = () => {
    dispatch(hideModal(MODALS.SELF_TRAIN_START_MODAL));
  };

  const handleStart = () => {
    history.push(`/self/setting/${selectedQnaId}`);
    dispatch(ResetQuestions());
    dispatch(hideModal(MODALS.SELF_TRAIN_START_MODAL));
  };

  return (
    <>
      <Wrapper>
        <CancelWrapper>
          <Icon type="cancel_blue" alt="" func={handleHideModal} />
        </CancelWrapper>
        <Icon type="check_large" alt="" />
        <TextSave>질문 리스트가 저장되었습니다.</TextSave>
        <TextStart>이제 면접 연습을 시작해보세요!</TextStart>
        <Button text="면접 시작하기" theme="blue" func={handleStart} />
      </Wrapper>
    </>
  );
}
