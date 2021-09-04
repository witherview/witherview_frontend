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
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-family: AppleSDGothicNeoEB00;
  font-size: 3.6vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
  color: ${({
    theme: {
      self: {
        questionlist: { questionListPageTitle },
      },
    },
  }) => questionListPageTitle};
`;

const Select = styled.div`
  margin-top: 2vh;
  font-family: AppleSDGothicNeoM00;
  font-size: 2.4vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: ${({
    theme: {
      self: {
        questionlist: { questionListPageSecondSelect },
      },
    },
  }) => questionListPageSecondSelect};
`;

export default function QuestionListPage() {
  const authSelector = useSelector(get('auth'));
  const [questionList, setQuestionList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetch = async () => {
    try {
      const { data } = await getQuestionListAPI();
      setQuestionList(data);
      setLoading(true);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteQuestionListAPI(id);
      setLoading(false);
      await fetch();
    } catch (error) {
      console.error(error);
      alert(error);
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
