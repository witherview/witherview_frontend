/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Button from '../../components/Button';
import ProfileMenuContiner from '../../components/ProfileMenuContainer';
import { getQuestionItemAPI, postQuestionListAPI } from '../../repository/questionListRepository';
import { get } from '../../utils/snippet';
import Icon from '../../components/Icon';
import Sidebar from '../../components/Sidebar';
import QuestionList from '../../components/Question/QuestionList';
import Modal from '../../components/Modal/Modal';
import { showModal } from '../../store/Modal/modal';

const PageWrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

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
  width: 1070px;
  height: 26px;
  font-size: 24px;
  padding: 17px 30px 17px 5px;
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
  margin-bottom: 220px;
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

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 73px;
`;

const Scroll = styled.div`
  height: 400px;
  overflow: scroll;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 67px;
`;

export default function QuestionPage({ match }) {
  const dispatch = useDispatch();
  const authSelector = useSelector(get('auth'));
  const [questions, setQuestions] = useState([]);
  const [oldQ, setOldQ] = useState([]);
  const [newQ, setNewQ] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = match.params;
  const fetch = async () => {
    if (id !== 'new') {
      getQuestionItemAPI(id).then((response) => {
        setQuestions(response.data);
      });
    }
  };
  useEffect(() => {
    fetch();
    setLoading(true);
  }, []);

  const handleMakeQuestion = () => {
    if (id === 'new') {
      dispatch(showModal('questionListSaveModal'));
    }
  };

  return (
    <>
      <PageWrapper>
        <Sidebar />
        <Modal modalName="questionListSaveModal" />
        <ContentWrapper>
          <ProfileWrapper>
            <ProfileMenuContiner name={authSelector.name} />
          </ProfileWrapper>
          <Wrapper>
            <Title>
              면접 질문 작성 및 수정하기
            </Title>
            <Input>
              <InputQuestion placeholder="질문을 입력하세요." />
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
                  : (
                    <ListWrapper>
                      <Scroll>
                        <DndProvider backend={HTML5Backend}>
                          <QuestionList questions={questions} />
                        </DndProvider>
                      </Scroll>
                    </ListWrapper>
                  )}
                <ButtonWrapper onClick={handleMakeQuestion}>
                  <Button text="완료" theme="blue" />
                </ButtonWrapper>
              </>
            )}
        </ContentWrapper>
      </PageWrapper>
    </>
  );
}
