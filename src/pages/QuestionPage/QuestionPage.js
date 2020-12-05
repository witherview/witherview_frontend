/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { sortObjectByOrder, get } from '@utils/snippet';
import {
  deleteQuestionItemAPI,
  getQuestionItemAPI,
  postQuestionItemAPI,
  patchQuestionItemAPI,
} from '@repository/questionListRepository';

import Button from '@components/Button';
import ProfileMenuContiner from '@components/ProfileMenuContainer';
import { setSelectedQnaId } from '@store/Train/train';
import { AddQuestions, ResetQuestions } from '@store/Question/question';

import Icon from '@components/Icon';
import QuestionList from '@components/Question/QuestionList';
import Modal from '@components/Modal/Modal';
import { showModal } from '@store/Modal/modal';
import { MODALS } from '@utils/constant';

const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
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
  padding: 17px 30px 17px 17px;
  border: none;
  outline: none;
  border-radius: 10px;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.04);
  background-color: #f6f6f6;
`;

const IconWrapper = styled.span`
  width: 63px;
  height: 63px;
  transform: translate(-17px, -2px);
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
  const [questionList, setQuestionList] = useState([]);
  const [deletedItems, setDeletedItems] = useState([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const { id } = match.params;
  const fetch = async () => {
    if (id !== 'new') {
      getQuestionItemAPI(id).then((response) => {
        setQuestionList(sortObjectByOrder(response.data));
      });
    }
  };

  useEffect(() => {
    fetch();
    setLoading(true);
    return () => dispatch(ResetQuestions());
  }, []);

  const handleQuestionMake = async () => {
    if (deletedItems) {
      await deletedItems.map((eachId) => deleteQuestionItemAPI(eachId).then(() => {}));
    }

    const questionListAsc = questionList.map((question, index) => ({
      ...question,
      order: index,
    }));

    if (id === 'new') {
      dispatch(AddQuestions({ questions: questionListAsc }));
      dispatch(showModal(MODALS.QUESTIONLIST_SAVE_MODAL));
    } else {
      const Old = questionListAsc
        .filter((val) => val.id !== undefined && val.tempId === undefined)
        .map((elem) => ({
          id: elem.id,
          answer: elem.answer,
          order: elem.order,
          question: elem.question,
        }));

      const New = questionListAsc
        .filter((val) => val.id === undefined && val.tempId !== undefined)
        .map((elem) => ({
          ...elem,
          id: elem.tempId,
        }));

      if (New.length !== 0) {
        await postQuestionItemAPI({
          listId: id,
          questions: New,
        }).then(() => {
          dispatch(setSelectedQnaId({ selectedQnaId: id }));
        });
      }

      if (Old.length !== 0) {
        await patchQuestionItemAPI(Old).then(() => {
          dispatch(setSelectedQnaId({ selectedQnaId: id }));
        });
      }
      dispatch(showModal(MODALS.SELF_TRAIN_START_MODAL));
    }
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const getIdWithoutInfinity = () => {
    const elementId = Math.max(...questionList.map((o) => o.id || o.tempId));
    if (elementId === -Infinity) {
      return 0;
    }
    return elementId + 1;
  };

  const handleQuestionAdd = () => {
    const elementId = getIdWithoutInfinity();
    setQuestionList([
      ...questionList,
      {
        question: title,
        order: questionList.length + 1,
        tempId: elementId,
        answer: '',
      },
    ]);
    setTitle('');
  };

  const isListEmpty = questionList.length < 1;
  return (
    <>
      <PageWrapper>
        <Modal modalName={MODALS.QUESTIONLIST_SAVE_MODAL} />
        <Modal modalName={MODALS.SELF_TRAIN_START_MODAL} />
        <ContentWrapper>
          <ProfileWrapper>
            <ProfileMenuContiner name={authSelector.name} />
          </ProfileWrapper>
          <Wrapper>
            <Title>면접 질문 작성 및 수정하기</Title>
            <Input>
              <InputQuestion
                placeholder="질문을 입력하세요."
                value={title}
                onChange={handleTitle}
              />
              <IconWrapper>
                <Icon
                  type="check_rec"
                  func={handleQuestionAdd}
                  alt="check rec"
                />
              </IconWrapper>
            </Input>
          </Wrapper>
          {loading && (
            <>
              {questionList && questionList.length === 0 ? (
                <Text>등록된 질문이 없습니다.</Text>
              ) : (
                <ListWrapper>
                  <Scroll>
                    <DndProvider backend={HTML5Backend}>
                      <QuestionList
                        questions={questionList}
                        setQuestions={setQuestionList}
                        setDeletedItems={setDeletedItems}
                      />
                    </DndProvider>
                  </Scroll>
                </ListWrapper>
              )}
              <ButtonWrapper>
                <Button
                  func={handleQuestionMake}
                  text={id === 'new' ? '저장' : '완료'}
                  theme={isListEmpty ? 'gray' : 'blue'}
                />
              </ButtonWrapper>
            </>
          )}
        </ContentWrapper>
      </PageWrapper>
    </>
  );
}
