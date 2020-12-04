import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import {
  getQuestionListAPI,
  deleteQuestionListAPI,
} from '@repository/questionListRepository';
import { get } from '@utils/snippet';
import NoList from './NoList';
import IsQuestionList from './IsQuestionList';

const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  width: 100%;
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

const Select = styled.div`
  margin-top: 20px;
  font-family: AppleSDGothicNeoM00;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #3d3d3d;
`;

export default function QuestionListPage() {
  const authSelector = useSelector(get('auth'));
  const [questionList, setQuestionList] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetch = async () => {
    getQuestionListAPI().then((response) => {
      setQuestionList(response.data);
      setLoading(true);
    });
  };
  useEffect(() => {
    fetch();
  }, []);

  const handleDelete = async (e, id) => {
    if (e.target === e.currentTarget) {
      await deleteQuestionListAPI(id).then((response) => {
        console.log(response);
      });
    }
  };

  return (
    <>
      {loading && (
        <PageWrapper>
          <ContentWrapper>
            <Wrapper>
              <Title>
                {authSelector.name}
                님이 등록한 질문 리스트입니다.
              </Title>
              <Select>연습하고 싶은 질문 리스트를 선택해주세요.</Select>
              {questionList && questionList.length === 0 ? (
                <NoList />
              ) : (
                <IsQuestionList
                  questionList={questionList}
                  handleDelete={handleDelete}
                />
              )}
            </Wrapper>
          </ContentWrapper>
        </PageWrapper>
      )}
    </>
  );
}
