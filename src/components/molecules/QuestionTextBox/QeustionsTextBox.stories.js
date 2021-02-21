import React from 'react';
import QuestionTextBox from './QuestionTextBox';

export default {
  title: 'Molecules/Question Text Box',
  component: QuestionTextBox,
};

export const questionTextBox = () => (
  <QuestionTextBox order={1} question="test" width={1025} />
);
