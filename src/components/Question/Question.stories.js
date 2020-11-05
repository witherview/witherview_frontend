/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import QuestionList from './QuestionList';

export default {
  title: 'Question',
  component: QuestionList,
};

const questionList = (args) => (
  <DndProvider backend={HTML5Backend}>
    <QuestionList {...args} />
  </DndProvider>
);
export const Question = questionList.bind({});
