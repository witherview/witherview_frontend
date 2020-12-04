import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, showModal } from '@store/Modal/modal';
import InputBar from '@components/InputBar';
import Button from '@components/Button';
// import { postQuestionListAPI, postQuestionItemAPI } from '@repository/groupRepository';
import { get } from '@utils/snippet';
import { MODALS } from '@utils/constant';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 742px;
  height: 872px;
`;

const InputWrapper = styled.div`
  width: 600px;
  margin-top: ${({first})=> first ? '100px' : '45px'};
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

const SelectWrapper = styled.div`
    display: flex;
    width: 600px;
    margin-top: 45px;
    
`;

const LeftWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const RightWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const ButtonWrapper = styled.div`
  margin-top: 40px;
`;

export default function StudyStartModal() {
  const dispatch = useDispatch();
  const qeustionSelector = useSelector(get('question'));
  const [title, setTitle] = useState();
  const [enterprise, setEnterprise] = useState();
  const [job, setJob] = useState();
  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };
  return (
    <>
      <Wrapper>
        <InputWrapper first={true}>
          <InputText>
            방 제목
          </InputText>
          <InputBar placeholder="제목을 입력해주세요." value={title} onChange={(e) => handleInputChange(e, setTitle)} />
        </InputWrapper>
        <InputWrapper>
          <InputText>
            방 설명
          </InputText>
          <InputBar placeholder="설명을 입력해주세요." value={enterprise} onChange={(e) => handleInputChange(e, setEnterprise)} />
        </InputWrapper>
        <SelectWrapper>
            <LeftWrapper>
                <InputText>
                    산업
                </InputText>
                <InputText>
                    진행 날짜
                </InputText>
            </LeftWrapper>
            <RightWrapper>
                <InputText>
                    직무
                </InputText>
                <InputText>
                    진행 시간
                </InputText>
            </RightWrapper>
        </SelectWrapper>
        <ButtonWrapper>
          <Button text="저장" theme="blue" />
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};
