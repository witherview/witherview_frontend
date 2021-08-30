/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import A from '@atoms';
import O from '@organisms';

const Wrapper = styled.div`
  display: flex;
  width: 110.2vh;
  height: 63vh;
  overflow: auto;
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
  background-color: ${({
    theme: {
      self: {
        questionlist: { addQuestionListBgColor },
      },
    },
  }) => addQuestionListBgColor};
  color: ${({
    theme: {
      self: {
        questionlist: { addQuestionListColor },
      },
    },
  }) => addQuestionListColor};
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
  /* color: #0c0c59; */
`;

export default function IsQuestionList({ questionList, handleDelete }) {
  return (
    <>
      <Wrapper>
        <ItemWrapper>
          <Link to="/self/question/new" style={{ textDecoration: 'none' }}>
            <AddQuestionList>
              <IconWrapper>
                <A.Icon type="add_black" alt="icon" />
              </IconWrapper>
              <AddText>질문 리스트 추가</AddText>
            </AddQuestionList>
          </Link>
        </ItemWrapper>
        {questionList?.map(({ id, title, enterprise, job, length }, index) => (
          <ItemWrapper key={`itemQ-${index}`}>
            <O.QuestionCardView
              id={id}
              title={title}
              description={enterprise}
              questionList={questionList}
              handleDelete={handleDelete}
              job={job}
              length={length}
            />
          </ItemWrapper>
        ))}
      </Wrapper>
    </>
  );
}
