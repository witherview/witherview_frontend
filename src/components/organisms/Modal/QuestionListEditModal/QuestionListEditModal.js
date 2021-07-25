import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeModal } from '@store/Modal/modal';
import A from '@atoms';
import { patchQuestionListAPI } from '@repository/questionListRepository';
import { MODALS } from '@utils/constant';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 66vh;
  height: 65vh;
`;

const Text = styled.div`
  margin-top: 7.2vh;
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
  ${({ theme }) => theme.input}
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
  ${({ theme }) => theme.button}
`;

export default function QuestionListEditModal({
  props: { id: propsId, title: propsTitle, description: propsDescription, job },
}) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(propsTitle);
  const [enterprise, setEnterprise] = useState(propsDescription);

  const handleListMake = async () => {
    try {
      await patchQuestionListAPI([
        {
          id: propsId,
          enterprise,
          title,
          job,
        },
      ]);

      dispatch(removeModal(MODALS.QUESTIONLIST_EDIT_MODAL));
      alert('수정 완료');
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
        <Text>질문 리스트 수정</Text>
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
        <ButtonWrapper onClick={handleListMake}>
          <A.Button text="저장" theme="blue" />
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}

QuestionListEditModal.propTypes = {
  props: PropTypes.object,
};
