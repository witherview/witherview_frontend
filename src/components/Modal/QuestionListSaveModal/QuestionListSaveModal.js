import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, showModal } from '../../../store/Modal/modal';
import InputBar from '../../InputBar';
import Button from '../../Button';
import { postQuestionListAPI, postQuestionItemAPI } from '../../../repository/questionListRepository';
import { get } from '../../../utils/snippet';
import { MODALS } from '../../../utils/constant';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 660px;
  height: 876px;
`;

const Text = styled.div`
  margin-top: 99px;
  margin-bottom: 72px;
  font-family: AppleSDGothicNeoEB00;
  font-size: 36px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
  color: #000000;
`;

const InputWrapper = styled.div`
  margin-bottom: 70px;
`;

const InputText = styled.div`
  font-family: AppleSDGothicNeoB00;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  letter-spacing: normal;
  text-align: left;
  color: #6e6eff;
`;

const ButtonWrapper = styled.div`
  margin-top: 40px;
`;

const QuestionListSaveModal = () => {
  const dispatch = useDispatch();
  const qeustionSelector = useSelector(get('question'));
  const [title, setTitle] = useState();
  const [enterprise, setEnterprise] = useState();
  const [job, setJob] = useState();

  const handleListMake = () => {
    postQuestionListAPI({ title, enterprise, job }).then((response) => {
      postQuestionItemAPI({
        listId: response.data.id,
        questions: qeustionSelector.questions,
      }).then(() => {
        dispatch(hideModal(MODALS.QUESTIONLIST_SAVE_MODAL));
        dispatch(showModal(MODALS.SELF_TRAIN_START_MODAL));
      });
    });
  };

  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  return (
    <>
      <Wrapper>
        <Text>
          질문 리스트 저장
        </Text>
        <InputWrapper>
          <InputText>
            질문 리스트 제목
          </InputText>
          <InputBar placeholder="제목을 입력해주세요." value={title} onchange={(e) => handleInputChange(e, setTitle)} />
        </InputWrapper>
        <InputWrapper>
          <InputText>
            기업 이름
          </InputText>
          <InputBar placeholder="기업명을 입력해주세요." value={enterprise} onchange={(e) => handleInputChange(e, setEnterprise)} />
        </InputWrapper>
        <InputWrapper>
          <InputText>
            직무 이름
          </InputText>
          <InputBar placeholder="직무명을 입력해주세요." value={job} onchange={(e) => handleInputChange(e, setJob)} />
        </InputWrapper>
        <ButtonWrapper onClick={handleListMake}>
          <Button text="저장" theme="blue" />
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

export default QuestionListSaveModal;
