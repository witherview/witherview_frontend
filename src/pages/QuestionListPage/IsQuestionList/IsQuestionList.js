/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import QuestionCardView from '@components/QuestionCardView';
import { getQuestionItemAPI } from '@repository/questionListRepository';
import Icon from '@components/IconTemp';

const Wrapper = styled.div`
  display: flex;
  width: 110.2vh;
  height: 63vh;
  overflow: scroll;
  flex-wrap: wrap;
  margin-top: 7.1vh;
`;

const ItemWrapper = styled.div`
  flex: 0 0 33.333%;
  margin-bottom: 5vh;
`;

const AddQuestionList = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.4vh;
  height: 27vh;
  border-radius: 1vh;
  background-color: #f6f6f6;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-top: 9.2vh;
`;

const AddText = styled.div`
  margin-top: 3vh;
  font-family: AppleSDGothicNeoB00;
  font-size: 2.4vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  letter-spacing: normal;
  text-align: left;
  color: #0c0c59;
`;

export default function IsQuestionList({ questionList, handleDelete }) {
  return (
    <>
      <Wrapper>
        <ItemWrapper>
          <Link to="/question/new" style={{ textDecoration: 'none' }}>
            <AddQuestionList>
              <IconWrapper>
                <Icon type="add_black" alt="icon" />
              </IconWrapper>
              <AddText>질문 리스트 추가</AddText>
            </AddQuestionList>
          </Link>
        </ItemWrapper>
        {questionList?.map((val, index) => {
          const [count, setCount] = useState(0);
          getQuestionItemAPI(val.id).then((response) => {
            console.log(response.data);
            setCount(response.data.length);
          });
          return (
            <ItemWrapper key={`itemQ-${index}`}>
              <QuestionCardView
                id={val.id}
                number={count}
                title={val.title}
                description={val.enterprise}
                questionList={questionList}
                handleDelete={handleDelete}
              />
            </ItemWrapper>
          );
        })}
      </Wrapper>
    </>
  );
}
