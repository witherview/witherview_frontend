import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { hideModal } from '../../../store/Modal/modal';
import InputBar from '../../InputBar';
import Button from '../../Button';

const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
  z-index: 1;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  outline: none;
  z-index: 2;
`;

const Content = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 660px;
  height: 876px;
  border-radius: 10px;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.04);
  background-color: #ffffff;
  margin: 0 auto;
  outline: none;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(hideModal('questionListSaveModal'));
    }
  };
  return (
    <>
      <Background />
      <Wrapper tabIndex="-1" onClick={handleCloseModal}>
        <Content tabIndex="0">
          <ModalWrapper>
            <Text>
              질문 리스트 저장
            </Text>
            <InputWrapper>
              <InputText>
                질문 리스트 제목
              </InputText>
              <InputBar />
            </InputWrapper>
            <InputWrapper>
              <InputText>
                기업 이름
              </InputText>
              <InputBar />
            </InputWrapper>
            <InputWrapper>
              <InputText>
                직무 이름
              </InputText>
              <InputBar />
            </InputWrapper>
            <ButtonWrapper>
              <Button text="확인" theme="blue" />
            </ButtonWrapper>
          </ModalWrapper>
        </Content>
      </Wrapper>
    </>
  );
};

export default QuestionListSaveModal;
