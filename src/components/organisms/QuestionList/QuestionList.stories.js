/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import getQuestionItemMock from '@mocks/getQuestionItemMock';
import QuestionList from './QuestionList';

export default {
  title: 'Organisms/Question List',
  component: QuestionList,
};

export const questionList = () => (
  <DndProvider backend={HTML5Backend}>
    <QuestionList
      setQuestionList={() => {}}
      setDeletedItems={() => {}}
      questions={getQuestionItemMock}
    />
  </DndProvider>
);
