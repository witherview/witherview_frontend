/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import getQuestionItemMock from '@mocks/getQuestionItemMock';
import QuestionItem from './QuestionItem';

export default {
  title: 'Atoms/Question Item',
  component: QuestionItem,
};

const card = getQuestionItemMock[0];

export const questionItem = () => (
  <QuestionItem
    key={card.id || card.tempId}
    index={0}
    id={card.id}
    title={card.question}
    text={card.answer}
    moveCard={() => {}}
    handleQuestion={() => {}}
    setQuestions={() => {}}
    tempId={card.tempId}
    questions={getQuestionItemMock}
    setDeletedItems={() => {}}
  />
);
