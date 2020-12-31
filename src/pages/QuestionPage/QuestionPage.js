import React, { useEffect, useState } from 'react';

import ReactRouterPropTypes from 'react-router-prop-types';

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

import Icon from '@components/IconTemp';
import QuestionList from '@components/Question/QuestionList';
import Modal from '@components/Modal/Modal';
import { showModal } from '@store/Modal/modal';
import { MODALS } from '@utils/constant';

const PageWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  height: 80vh;
`;

const ProfileWrapper = styled.div`
  float: right;
  margin: 5.3vh 10.5vh 0 0;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.div`
  display: flex;
  margin-top: 5vh;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-family: AppleSDGothicNeoEB00;
  font-size: 3.6vh;
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
  width: 107vh;
  height: 2.6vh;
  font-size: 2.4vh;
  padding: 1.7vh 3vh 1.7vh 1.7vh;
  border: none;
  outline: none;
  border-radius: 1vh;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.04);
  background-color: #f6f6f6;
  cursor: text;
`;

const IconWrapper = styled.span`
  width: 6.3vh;
  height: 6.3vh;
  transform: translate(-1.7vh, -0.2vh);
  > i {
    cursor: pointer;
  }
`;

const Text = styled.div`
  margin-top: 26.2vh;
  margin-bottom: 22vh;
  font-family: AppleSDGothicNeoM00;
  font-size: 1.9vh;
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
  margin-top: 7.3vh;
`;

const Scroll = styled.div`
  height: 40vh;
  overflow: scroll;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6.7vh;
  > div {
    width: 29.6vh;
    height: 6vh;
    > p {
      font-size: 1.9vh;
    }
  }
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

QuestionPage.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};
