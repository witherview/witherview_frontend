/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import QuestionCardView from '@components/QuestionCardView';
import { getQuestionItemAPI } from '@repository/questionListRepository';
import Icon from '@components/Icon';

const Wrapper = styled.div`
  display: flex;
  width: 1102px;
  height: 630px;
  overflow: scroll;
  flex-wrap: wrap;
  margin-top: 71px;
`;

const ItemWrapper = styled.div`
  flex: 0 0 33.333%;
  margin-bottom: 50px;
`;

const AddQuestionList = styled.div`
  display:flex;
  flex-direction: column;
  width: 334px;
  height: 270px;
  border-radius: 10px;
  background-color: #f6f6f6;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-top: 92px;
`;

const AddText = styled.div`
  margin-top:30px;
  font-family: AppleSDGothicNeoB00;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  letter-spacing: normal;
  text-align: left;
  color: #0c0c59;
`;

export default function IsQuestionList({ questionList }) {
  return (
    <>
      <Wrapper>
        <ItemWrapper>
          <Link to="/question/new" style={{ textDecoration: 'none' }}>
            <AddQuestionList>
              <IconWrapper>
                <Icon type="add_black" alt="icon" />
              </IconWrapper>
              <AddText>
                질문 리스트 추가
              </AddText>
            </AddQuestionList>
          </Link>
        </ItemWrapper>
        {questionList?.map((val) => {
          const [count, setCount] = useState(0);
          getQuestionItemAPI(val.id).then((response) => {
            setCount(response.data.length);
          });
          return (
            <ItemWrapper>
              <Link to={`/question/${val.id}`} style={{ textDecoration: 'none' }}>
                <QuestionCardView
                  number={count}
                  title={val.title}
                  description={val.enterprise}
                />
              </Link>
            </ItemWrapper>
          );
        })}
      </Wrapper>
    </>
  );
}
