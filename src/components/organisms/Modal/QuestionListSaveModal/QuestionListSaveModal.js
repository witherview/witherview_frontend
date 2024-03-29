import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { displayModal, removeModal } from '@store/Modal/modal';
import { useLocation } from 'react-router-dom';
import { setJob, setCompany, setSelectedQnaId } from '@store/Train/train';
import A from '@atoms';
import { commonStyles } from '@style';

import {
  postQuestionListAPI,
  postQuestionItemAPI,
} from '@repository/questionListRepository';
import { get } from '@utils/snippet';
import { MODALS } from '@utils/constant';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 66vh;
  height: 87.6vh;
`;

const Text = styled.div`
  margin-top: 9.9vh;
  margin-bottom: 7.2vh;
  font-family: AppleSDGothicNeoEB00;
  font-size: 3.6vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
  color: #000000;
`;

const InputWrapper = styled.div`
  margin-bottom: 7vh;
  ${commonStyles.input}
`;

const InputText = styled.div`
  font-family: AppleSDGothicNeoB00;
  font-size: 1.9vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  letter-spacing: normal;
  text-align: left;
  color: #6e6eff;
`;

const ButtonWrapper = styled.div`
  margin-top: 4vh;
  ${commonStyles.button}
`;

const QuestionListSaveModal = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { questions } = useSelector(get('question'));

  const [title, setTitle] = useState();
  const [enterprise, setEnterprise] = useState();
  const [position, setPosition] = useState();

  const handleListMake = async () => {
    try {
      const { data } = await postQuestionListAPI({
        title,
        enterprise,
        job: position,
      });

      dispatch(setSelectedQnaId({ selectedQnaId: data.id }));

      await postQuestionItemAPI({
        listId: data.id,
        questions,
      });

      const qnaId = pathname.replace('/self/question/', '');

      dispatch(setJob({ job: position }));
      dispatch(setCompany({ company: enterprise }));

      if (qnaId !== 'new') {
        dispatch(setSelectedQnaId({ selectedQnaId: qnaId }));
      }

      dispatch(removeModal({ modalName: MODALS.QUESTIONLIST_SAVE_MODAL }));
      dispatch(displayModal({ modalName: MODALS.SELF_TRAIN_START_MODAL }));
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  return (
    <>
      <Wrapper>
        <Text>질문 리스트 저장</Text>
        <InputWrapper>
          <InputText>질문 리스트 제목</InputText>
          <A.InputBar
            placeholder="제목을 입력해주세요."
            value={title}
            onChange={(e) => handleInputChange(e, setTitle)}
          />
        </InputWrapper>
        <InputWrapper>
          <InputText>기업 이름</InputText>
          <A.InputBar
            placeholder="기업명을 입력해주세요."
            value={enterprise}
            onChange={(e) => handleInputChange(e, setEnterprise)}
          />
        </InputWrapper>
        <InputWrapper>
          <InputText>직무 이름</InputText>
          <A.InputBar
            placeholder="직무명을 입력해주세요."
            value={position}
            onChange={(e) => handleInputChange(e, setPosition)}
          />
        </InputWrapper>
        <ButtonWrapper onClick={handleListMake}>
          <A.Button text="저장" btnTheme="blue" />
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

export default QuestionListSaveModal;
