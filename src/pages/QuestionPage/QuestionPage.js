/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Button from '@components/Button';
import ProfileMenuContiner from '@components/ProfileMenuContainer';
import { getQuestionItemAPI } from '@repository/questionListRepository';
import { get } from '@utils/snippet';
import Icon from '@components/Icon';

const ProfileWrapper = styled.div`
    float: right;
    margin: 53px 105px 0 0;
`;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh-137px;
    margin-top: 137px;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.div`
  display: flex;
  height: 100vh-137px;
  align-items: center;
  justify-content: center;
  margin-top: 71px;
`;

const Title = styled.div`
    font-family: AppleSDGothicNeoEB00;
    font-size: 36px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: normal;
    color: #000000;
`;

const InputQuestion = styled.input`
  display: flex;
  align-self: center;
  width: 1027px;
  height: 26px;
  font-size: 24px;
  padding: 17px;
  border: none;
  outline: none;
  border-radius: 10px;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.04);
  background-color: #f6f6f6;
`;

const IconWrapper = styled.span`
  width: 63px;
  height: 63px;
  transform:translate(-12px, -2px);
`;

const Text = styled.div`
  margin-top: 262px;
  font-family: AppleSDGothicNeoM00;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 261px;
`;

export default function QuestionPage({ match }) {
  const authSelector = useSelector(get('auth'));
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = match.params;
  const fetch = async () => {
    getQuestionItemAPI(id).then((response) => {
      // setQuestions(response.data);
    });
  };
  useEffect(() => {
    fetch();
    setLoading(true);
  }, []);
  return (
    <>
      <ProfileWrapper>
        <ProfileMenuContiner name={authSelector.name} />
      </ProfileWrapper>
      <Wrapper>
        <Title>
          면접 질문 작성 및 수정하기
        </Title>
        <Input>
          <InputQuestion placeholder="여기에 글자를 입력해주세요." />
          <IconWrapper>
            <Icon type="check_rec" />
          </IconWrapper>
        </Input>
      </Wrapper>
      {loading
        && (
          <>
            {questions && questions.length === 0
              ? (
                <Text>
                  등록된 질문이 없습니다.
                </Text>
              )
              : ''}
            <ButtonWrapper>
              <Button text="완료" theme="blue" />
            </ButtonWrapper>
          </>
        )}
    </>
  );
}
