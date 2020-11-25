import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ProfileMenuContiner from '../../components/ProfileMenuContainer';
import { get } from '../../utils/snippet';
import Icon from '../../components/Icon';

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

const InputQuestion = styled.div`
  display: flex;
  align-self: center;
  width: 1027px;
  height: 30px;
  font-size: 24px;
  padding: 25px;
  border: none;
  outline: none;
  border-radius: 10px;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.04);
  background-color: #f6f6f6;

`;

export default function QuestionPage({ match }) {
  const authSelector = useSelector(get('auth'));
  const { id } = match.params;
  return (
    <>
      <ProfileWrapper>
        <ProfileMenuContiner name={authSelector.name} />
      </ProfileWrapper>
      <Wrapper>
        <Title>
          면접 질문 작성 및 수정하기
        </Title>
        <InputQuestion contentEditable="true" />
        <Icon type="" />
      </Wrapper>
    </>
  );
}
